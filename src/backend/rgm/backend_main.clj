(ns rgm.backend-main
  (:require
    [aero.core :as aero]
    [aleph.http :as aleph]
    [cider.nrepl]
    [cider.piggieback]
    [clojure.java.io :as io]
    [figwheel.main.api]
    [integrant.core :as ig]
    [nrepl.server :as nrepl]
    [taoensso.timbre :as timbre]))

(defn make-nrepl-handler []
  (let [middleware-symbols (conj cider.nrepl/cider-middleware
                                 'cider.piggieback/wrap-cljs-repl)
        middleware-vars (map resolve middleware-symbols)]
  (apply nrepl/default-handler middleware-vars)))

(defmethod ig/init-key :rgm/nrepl
  [_ {:keys [port] :or {port 0}}] ;; nrepl picks randomly if 0
  (let [server (nrepl/start-server
                 :port port
                 :handler (make-nrepl-handler))
        port (:port server)]
    (timbre/info "starting nrepl server on port" port)
    (spit ".nrepl-port" port)
    server))

(defmethod ig/halt-key! :rgm/nrepl
  [_ server]
  (timbre/info "stopping nrepl server")
  (nrepl/stop-server server)
  (io/delete-file ".nrepl-port" true))

(defmethod ig/init-key :rgm/figwheel
  [_ {:keys [build-id]}]
  (timbre/info (str "starting figwheel with build-id \"" build-id "\""))
  (figwheel.main.api/start {:mode :serve} build-id)
  #(try
     ;; make idempotent for integrant
     (figwheel.main.api/stop build-id)
     (catch Exception e (timbre/debug "figwheel is already stopped"))))

(defmethod ig/halt-key! :rgm/figwheel
  [_ halt-fn]
  (timbre/info "stopping figwheel")
  (halt-fn))

(defmethod ig/init-key :rgm/http
  [_ {:keys [port]}]
  (timbre/info "starting http server")
  (aleph/start-server (fn [req] {:status 200
                                 :headers {}
                                 :body "success" }) {:port port}))

(defmethod ig/halt-key! :rgm/http
  [_ server]
  (timbre/info "stopping http server")
  (.close server))

(defonce running-system (atom nil))

(defn make-ig-system
  []
  {:rgm/nrepl {:port 0}
   :rgm/figwheel {:build-id "dev"}
   :rgm/http {:port 8080}})

(defn -main
  []
  (timbre/set-level! :info)
  (ig/init (make-ig-system)))
