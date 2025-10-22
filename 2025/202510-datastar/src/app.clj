(ns app
  (:require
   [pogonos.core                 :as pg]
   [reitit.ring                  :as rtr]
   [portal.api                   :as p]
   [ring.adapter.jetty           :as jetty]
   [ring.middleware.content-type :refer [wrap-content-type]]
   [ring.middleware.reload       :refer [wrap-reload]]
   [ring.middleware.resource     :refer [wrap-resource]]
   [ring.middleware.session      :refer [wrap-session]]))

(defonce *server (atom nil))

(defonce *portal (atom nil))

(defn handler:home [_req]
  {:status 200
   :headers {"Content-Type" "text/html"}
   :body (pg/render-resource "index.mustache.html" {})})

(defn handler:button [req]
  (let [old (:session req)
        new (update old :n (fnil inc 0))]
    {:status 200
     :headers {"Content-Type" "text/html"
               "datastar-selector" "#hal"
               "datastar-mode" "inner"}
     :body (pg/render-string "<p>n {{ n }}</p>" {:n (:n new)})
     :session new}))

(def router
  (rtr/router
   [["/" {:get #'handler:home}]
    ["/endpoint" {:get #'handler:button}]]))

(def app
  (-> (rtr/ring-handler
       router
       (rtr/create-default-handler
        {:not-found (constantly {:status 404})
         :method-not-allowed (constantly {:status 405})
         :not-acceptable (constantly {:status 406})}))
      (wrap-session {:cookie-name "session"})
      (wrap-resource "public")
      (wrap-content-type)
      (wrap-reload)))

(defn start-portal []
  (add-tap #'p/submit)
  (reset! *portal (p/open)))

(defn stop-portal []
  (p/close)
  (remove-tap #'p/submit))

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
  (stop)
  (start-portal))
