(ns rgm.web-server
  (:require
   [com.stuartsierra.component :as component]
   [ring.adapter.jetty]
   [ring.middleware.resource :refer [wrap-resource]]
   [ring.middleware.content-type :refer [wrap-content-type]]
   [taoensso.timbre :as timbre]))

(defn handler [_request]
  {:status  200
   :headers {"Content-Type" "text/html"}
   :body    "Hello World"})

(def app (-> handler
             (wrap-resource "public" {:prefer-handler? false})
             (wrap-content-type)))

(defrecord WebServer [port chrome cache]
  component/Lifecycle
  (start [this]
    (timbre/info "starting web server on port" port)
    (let [server (ring.adapter.jetty/run-jetty
                  #'app {:port port :join? false})]
      (assoc this :server server)))
  (stop [this]
    (timbre/info "stopping web server")
    (.stop (:server this))))

(defn new-web-server [port] (map->WebServer {:port port}))
