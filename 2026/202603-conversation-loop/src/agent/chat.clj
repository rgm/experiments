(ns agent.chat
  "Implements a simple conversation loop for calling out to tools."
  (:require
   [clojure.data.json  :as json]
   [clojure.edn        :as edn]
   [clojure.string     :as str]
   [hato.client        :as hc]
   [taoensso.telemere  :as tel]
   [taoensso.truss     :refer [have]]))

(defn setup-logging []
  (tel/remove-handler! :default/console)
  (tel/add-handler! :my/file (tel/handler:file {:path "dev.log"}))
  (tel/call-on-shutdown! tel/stop-handlers!))

(def config
  {:anthropic/api-key (System/getenv "ANTHROPIC_API_KEY")
   :anthropic/api-url "https://api.anthropic.com/v1/messages"
   :anthropic/max-tokens 4096
   :anthropic/model "claude-haiku-4-5"
   :http/port (System/getenv "PORT")
   :tool-loop-fuel 5}) ;; max agent rounds per turn

(defonce ^:clj-reload/keep *messages (atom []))

(defonce ^:clj-reload/keep *usage (atom {:input-tokens 0 :output-tokens 0}))

(def system-prompt (edn/read-string (slurp "system_prompt.edn")))

(def use-caching? false)

(def tool-registry
  (->> [{:name "get_weather"
         :description "Get current weather for a location"
         :input_schema {:type "object"
                        :properties {"location" {:type "string"
                                                 :description "City name"}}
                        :required   ["location"]}
         :handler      (fn [{:strs [location]}]
                         (format "Weather in %s: 18°C, partly cloudy" location))}]
       (map (juxt :name identity))
       (into {})))

(def tool-definitions
  (->> (vals tool-registry)
       (map #(select-keys % [:name :description :input_schema]))))

(defn run-tool [{:strs [id name input]}]
  (tel/log! ["running tool" name])
  (if-let [handler (get-in tool-registry [name :handler])]
    (let [[?result ?error] (try [(handler input) nil]
                                (catch Exception e
                                  [nil (ex-message e)]))]
      {:type "tool_result"
       :tool_use_id id
       :content (if ?result (str ?result) (format "Tool error: %s" ?error))
       :is_error (some? ?error)})
    {:type "tool_result"
     :tool_use_id id
     :content (format "Unknown tool: %s" name)
     :is_error true}))

(defn add-input-token-cache-control [body]
  ;; drops cost of later reads of same input tokens to 0.1x
  (assoc body :cache_control
         {:type "ephemeral" ;; only kind
          :ttl "5m" ;; 1.25x base input token price
          ; :ttl "1h" ;; 2x input token price
          }))

(defn record-token-usage [api-body]
  (let [input-tokens (get-in api-body ["usage" "input_tokens"] 0)
        output-tokens (get-in api-body ["usage" "output_tokens"] 0)]
    (doto *usage
      (swap! update :input-tokens (fnil + 0) input-tokens)
      (swap! update :output-tokens (fnil + 0) output-tokens))))

(defn call-llm [messages]
  (tel/log! ["calling llm," (count messages) "messages in ctx"])
  (let [request {:url (config :anthropic/api-url)
                 :method :post
                 :content-type :json
                 :headers {"x-api-key" (config :anthropic/api-key)
                           "anthropic-version" "2023-06-01"}
                 :body (cond-> {:model (config :anthropic/model)
                                :max_tokens (config :anthropic/max-tokens)
                                :system system-prompt
                                :messages messages}
                         (seq tool-definitions) (assoc :tools tool-definitions)
                         use-caching? add-input-token-cache-control
                         :always json/write-str)
                 :as :json-string-keys
                 :throw-exceptions false}
        response (hc/request request)]
    (cond
      (<= 200 (:status response) 299)
      (let [api-body (json/read-str (:body response))]
        (record-token-usage api-body)
        api-body)
      :else
      (throw (ex-info "api error" (select-keys response [:status :body]))))))

(defn add-to-context [role content]
  (swap! *messages conj {:role role :content content}))

(defn handle-text-response [text-stanzas]
  (add-to-context "assistant" text-stanzas)
  (doseq [m text-stanzas] (println (get m "text")))
  (println "usage: " @*usage "\n"))

(defn handle-tool-response [tool-request-stanzas]
  (let [tool-response-stanzas (mapv run-tool tool-request-stanzas)]
    (add-to-context "assistant" tool-request-stanzas)
    (add-to-context "user" tool-response-stanzas)))

(defn extract-stanzas [api-body]
  (group-by #(get % "type") (get api-body "content")))

(defn run-conversation-turn [input]
  (when-not (str/blank? input)
    (swap! *messages conj {:role "user" :content input})
    (loop [api-body (call-llm @*messages), loop-fuel (config :tool-loop-fuel)]
      (let [stanzas (extract-stanzas api-body)
            use-tools? (and (= "tool_use" (get api-body "stop_reason"))
                            (pos? loop-fuel))]
        (handle-text-response (get stanzas "text"))
        (when use-tools?
          (handle-tool-response (get stanzas "tool_use"))
          (recur (call-llm @*messages) (dec loop-fuel)))))))

(defn run-repl []
  (letfn [(read-prompt [] (print "> ") (flush) (read-line))]
    (loop []
      (if-let [input (read-prompt)]
        (do (run-conversation-turn input)
            (recur))
        (do (println "\nBye.") ;; exit on Ctrl-D
            (shutdown-agents))))))

(defn -main []
  (have (config :anthropic/api-key))
  (setup-logging)
  (println (format "Model: %s (<Ctrl-D> to exit)\n" (config :anthropic/model)))
  (run-repl))
