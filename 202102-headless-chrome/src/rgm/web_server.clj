(ns rgm.web-server
  (:require
   [com.stuartsierra.component :as component]
   [ring.adapter.jetty]
   [ring.middleware.resource :refer [wrap-resource]]
   [ring.middleware.content-type :refer [wrap-content-type]]
   [taoensso.timbre :as timbre]))

(defn handler [_request]
  {:status  200
   :headers {"Content-Type" "text/plain"}
   :body    "Hello from base ring handler (you shouldn't see this ... make sure to hit '/index.html' if looking at the jetty PORT at :4000, or just hit up the shadow-cljs PORT at :8000)."})

(defn wrap-deps
  "Make ::cache and ::chrome available on the request."
  [handler cache chrome]
  (fn [req]
    (let [req' (assoc req
                      ::cache cache
                      ::chrome chrome)]
      (handler req'))))

(defn make-app
  [cache chrome]
  (-> handler
      (wrap-resource "public" {:prefer-handler? false})
      (wrap-content-type)
      (wrap-deps cache chrome)))

(defrecord WebServer [port chrome cache]
  component/Lifecycle
  (start [this]
    (timbre/info "starting web server on port" port)
    (let [server (ring.adapter.jetty/run-jetty
                  (make-app cache chrome)
                  {:port port :join? false})]
      (assoc this :server server)))
  (stop [this]
    (timbre/info "stopping web server")
    (.stop (:server this))))

(defn new-web-server [port] (map->WebServer {:port port}))
