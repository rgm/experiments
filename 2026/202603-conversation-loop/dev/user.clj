(ns user
  (:require
   [agent.chat        :as chat]
   [clj-reload.core   :as reload]
   [clojure.repl.deps :as rd]
   [taoensso.telemere :as tel]))

(reload/init {:dirs ["src"] :no-reload '#{user}})

(tel/remove-handler! :default/console)
(tel/add-handler! :my/file (tel/handler:file {:path "dev.log"}))
(tel/call-on-shutdown! tel/stop-handlers!)

(comment
  (do (require '[portal.api :as p])
      (def *p (p/open))
      (add-tap #'p/submit))
  (do (require '[flow-storm.api :as fs-api])
      (fs-api/local-connect))
  (flow-storm.api/break-at 'myapp.main/call-llm)
  (rd/sync-deps)
  (reload/unload)
  (reload/reload))

(comment
  (def tool-response {"role" "assistant",
                      "usage"
                      {"input_tokens" 448,
                       "cache_creation_input_tokens" 0,
                       "cache_read_input_tokens" 0,
                       "cache_creation"
                       {"ephemeral_5m_input_tokens" 0, "ephemeral_1h_input_tokens" 0},
                       "output_tokens" 65,
                       "service_tier" "standard",
                       "inference_geo" "not_available"},
                      "model" "claude-sonnet-4-20250514",
                      "id" "msg_01C1eVbhyDkyfsUgLytXpYnJ",
                      "content"
                      [{"type" "text",
                        "text" "I'll check the current weather in Vancouver for you."}
                       {"type" "tool_use",
                        "id" "toolu_01CF8kzYmV5puyQdpeM5gQ49",
                        "name" "get_weather",
                        "input" {"location" "Vancouver"},
                        "caller" {"type" "direct"}}],
                      "type" "message",
                      "stop_reason" "tool_use",
                      "stop_details" nil,
                      "stop_sequence" nil})
  (chat/run-tool {:id 1 :name "get_weather" :input {"location" "Vancouver"}})
  (chat/call-llm [{:role "user" :content "what's the weather in vancouver"}])
  (chat/run-tool (get-in tool-response ["content" 1]))
  (do (reset! chat/*messages [])
      (chat/run-conversation-turn "what's the weather in vancouver"))
  (tap> @chat/*messages)
  (tap> *e))
