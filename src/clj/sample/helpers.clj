(ns sample.helpers
  (:require [clojure.tools.nrepl.server :as nrepl-server]
            [clojure.java.io :as io]
            [figwheel.main.api]))

(defonce nrepl-server (atom nil))

(defn nrepl-handler []
  (require 'cider.nrepl)
  (ns-resolve 'cider.nrepl 'cider-nrepl-handler))

(defn start-nrepl-server!
  [port]
  (reset! nrepl-server
          (nrepl-server/start-server :port port
                                     :handler (nrepl-handler)))
  (spit ".nrepl-port" port)
  (str "Cider nREPL server started on port" port))

(defn stop-nrepl-server!
  []
  (when (not (nil? @nrepl-server))
    (nrepl-server/stop-server @nrepl-server)
    (reset! nrepl-server nil)
    (io/delete-file ".nrepl-port" true)
    (println "Cider nREPL server on port" (:port @nrepl-server) "stopped")))

(defn start-figwheel-build!
  [build-id]
  (figwheel.main.api/start {:mode :serve} build-id)
  (println (str "Figwheel started with build \"" build-id "\"")))
