(ns rgm.core
  (:require
   [aleph.http]
   [integrant.core :as ig]
   [ring.util.response :as res]))

(defmethod ig/init-key
  ::handler
  [_ _]
  (fn [_] (res/response "yo")))

(defmethod ig/init-key
  ::http-server
  [_ {:keys [port handler]}]
  (aleph.http/start-server handler {:port port}))

(defmethod ig/halt-key!
  ::http-server
  [_ server]
  (.close ^java.io.Closeable server))
