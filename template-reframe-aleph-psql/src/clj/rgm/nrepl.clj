(ns rgm.nrepl
  (:require
    [cider.nrepl]
    [cider.piggieback]
    [clojure.java.io :as io]
    [clojure.tools.namespace.repl :as tns]
    [nrepl.server :as nrepl]
    [taoensso.timbre :as timbre]))

(tns/disable-reload!) ;; don't want this ns to lose its *server

(defonce *server (atom nil))

(defn make-nrepl-handler []
  (let [middleware-symbols (conj cider.nrepl/cider-middleware
                                 'cider.piggieback/wrap-cljs-repl)
        middleware-vars (map resolve middleware-symbols)]
  (apply nrepl/default-handler middleware-vars)))

(defn start-server
  ([]
   (start-server 0)) ; nrepl picks if we give port 0
  ([port]
   (if-not @*server
     (do (reset! *server (nrepl/start-server :port port
                                             :handler (make-nrepl-handler)))
         (let [selected-port (:port @*server)]
           (timbre/info "starting nrepl server on port" selected-port)
           (spit ".nrepl-port" selected-port)))
     (timbre/warn "skipping nrepl restart, server already running"))))

(defn stop-server
  []
  (timbre/info "stopping nrepl server")
  (nrepl/stop-server @*server)
  (io/delete-file ".nrepl-port" true))

