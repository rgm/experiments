(ns sample.backend-main
  (:require 
    [cider.nrepl]
    [cider.piggieback]
    [nrepl.server :as nrepl]
    [clojure.java.io :as io]
    [figwheel.main.api]))

(defonce running-nrepl-server (atom nil))

(defn make-nrepl-handler []
  (let [middleware-symbols (conj cider.nrepl/cider-middleware
                                 'cider.piggieback/wrap-cljs-repl)
        middleware-vars (map resolve middleware-symbols)]
  (apply nrepl/default-handler middleware-vars)))

(defn start-nrepl-server!
  [port]
  (let [server (nrepl/start-server :port port
                                   :handler (make-nrepl-handler))]
    (reset! running-nrepl-server server)
    (spit ".nrepl-port" port)
    (println "nREPL server started on port" port)))

(defn stop-nrepl-server!
  []
  (when-let [server (deref running-nrepl-server)]
    (nrepl/stop-server server)
    (reset! running-nrepl-server nil)
    (let [port (slurp ".nrepl-port")]
      (io/delete-file ".nrepl-port" true)
      (println "nREPL server on port" port "stopped"))))

(defn start-figwheel-build!
  [build-id]
  (figwheel.main.api/start {:mode :serve} build-id)
  (println (str "Figwheel started with build \"" build-id "\"")))
