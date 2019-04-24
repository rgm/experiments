(ns rgm.http
  "plumbing for webserver (aleph for serving + reitit for routing)"
  (:require
    [aleph.http]
    [aleph.netty]
    [integrant.core :as ig]
    [reitit.ring :as ring]
    [taoensso.timbre :as timbre]))

(defn log-request
  [req]
  (timbre/info (:remote-addr req)
               (get-in req [:headers "user-agent"])
               (name (:request-method req))
               (:uri req)))

(defn dummy-handler
  [req]
  (log-request req)
  {:status 200 :headers {} :body "ok"})

(def app
  (ring/ring-handler
    (ring/router
      ["/" {:get dummy-handler}])))

(defmethod ig/init-key :rgm/http
  [_ {:keys [port]}]
  (let [server (aleph.http/start-server app {:port port})]
    (timbre/info "starting http server on port" (aleph.netty/port server))
    server))

(defmethod ig/halt-key! :rgm/http
  [_ server]
  (timbre/info "stopping http server")
  (.close ^java.io.Closeable server))

(comment
  (app {:request-method :get :uri "/"})
  )
