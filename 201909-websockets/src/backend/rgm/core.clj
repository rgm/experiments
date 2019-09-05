(ns rgm.core
  (:require
   [aleph.http]
   [clojure.core.match :refer [match]]
   [integrant.core :as ig]
   [taoensso.sente :as sente]
   [taoensso.sente.server-adapters.aleph :refer [get-sch-adapter]]
   [ring.middleware.defaults :as defaults]
   [ring.util.response :as res]))

(defmethod ig/init-key
  ::channel-socket
  [_ _]
  (sente/make-channel-socket-server!  (get-sch-adapter)))

(defmethod ig/init-key
  ::handler
  [_ {:keys [channel-socket]}]
  (->
   (fn [req]
     (let [dispatch ((juxt :request-method :uri) req)]
       (match
        dispatch
        [:get  "/status"] (res/response
                           (str "Running: " (pr-str @(:connected-uids channel-socket))))
        [:get  "/chsk"]   (res/response ((:ajax-get-or-ws-handshake-fn channel-socket) req))
        [:post "/chsk"]   (res/response ((:ajax-post-fn channel-socket) req))
        [:get "/"]        (res/response "foo"))))
   (defaults/wrap-defaults defaults/site-defaults)))

(defmethod ig/init-key
  ::http-server
  [_ {:keys [port handler]}]
  (aleph.http/start-server handler {:port port}))

(defmethod ig/halt-key!
  ::http-server
  [_ server]
  (.close ^java.io.Closeable server))
