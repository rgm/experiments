(ns rgm.core
  (:require
   [integrant.core :as ig]
   [ring.util.response :as res]
   [ring.adapter.jetty :as jetty]))

(defmethod ig/init-key
  ::handler
  [_ _]
  (fn [_] (res/response "yo")))

(defmethod ig/init-key
  ::http-server
  [_ {:keys [port handler]}]
  (jetty/run-jetty handler {:port port :join? false}))

(defmethod ig/halt-key!
  ::http-server
  [_ server]
  (.stop server))
