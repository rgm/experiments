(ns app
  (:require
   [pogonos.core :as pg]
   [reitit.ring :as rtr]
   [ring.adapter.jetty :as jetty]
   [ring.middleware.content-type :refer [wrap-content-type]]
   [ring.middleware.reload :refer [wrap-reload]]
   [ring.middleware.resource :refer [wrap-resource]]))

(defonce *server (atom nil))

(defn handler [_req]
  {:status 200
   :headers {"Content-Type" "text/html"}
   :body (pg/render-resource "index.mustache.html" {})})

(defn endpoint [_req]
  {:status 200
   :headers {"Content-Type" "text/html"
             "datastar-selector" "#hal"
             "datastar-mode" "inner"}
   :body "<p>whatup</p>"})

(def router
  (rtr/router
   [["/" {:get #'handler}]
    ["/endpoint" {:get #'endpoint}]]))

(def app
  (-> (rtr/ring-handler
       router
       (rtr/create-default-handler
        {:not-found (constantly {:status 404})
         :method-not-allowed (constantly {:status 405})
         :not-acceptable (constantly {:status 406})}))
      (wrap-resource "public")
      (wrap-content-type)
      (wrap-reload)))

(defn start []
  (reset! *server (jetty/run-jetty #'app {:port 3000 :join? false}))
  ::started)

(defn stop []
  (when-some [server @*server]
    (reset! *server nil)
    (.stop server))
  ::stopped)

(defn -main []
  (start))

(comment
  (stop))
