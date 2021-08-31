(ns rgm.core
  (:require
   [clojure.data.csv :as csv]
   [clojure.edn :as edn]
   [clojure.java.io :as io]
   [com.walmartlabs.lacinia :refer [execute]]
   [com.walmartlabs.lacinia.util :refer [attach-resolvers]]
   [com.walmartlabs.lacinia.schema :as schema]
   [ring.adapter.jetty :as jetty]))

(def building-data-by-id
  (with-open [rd (io/reader "resources/data.csv")]
      (.skip rd 1) ;; drop BOM
      (let [[header & rows] (doall (csv/read-csv rd))
            ks (map keyword header)
            xf (comp
                (map #(zipmap ks %))
                (map (fn [m] (update m :id #(Long/parseLong %))))
                (map (juxt :id identity)))]
        (into {} xf rows))))

(defn get-foo
  [ctx args v]
  (let [{:keys [id]} args]
    (get building-data-by-id id)))

(def building-schema
  (-> "resources/schema.edn"
      slurp
      edn/read-string
      (attach-resolvers {:get-foo get-foo
                         :get-bar (constantly {})})
      schema/compile))

(comment
  )

(def *server (atom nil))

(defn app
  [_req]
  {:status 200 :body "yo"})

(defn start-server
  [port]
  (let [server (jetty/run-jetty #'app {:port (Integer/parseInt port)
                                       :join? false})]
    server))

(comment
  (execute building-schema
           "query Foo($id: Int) { foo(id: $id) { id address }}"
           {:id 1} nil)
  (reset! *server (start-server "8080")))
