(ns rgm.core
  (:require
   [aleph.http]
   [clojure.core.async :as async]
   [clojure.core.match :refer [match]]
   [clojure.pprint]
   [integrant.core :as ig]
   [ring.middleware.cors :as cors]
   [ring.middleware.defaults :as defaults]
   [ring.middleware.resource :refer [wrap-resource]]
   [ring.middleware.content-type :refer [wrap-content-type]]
   [ring.middleware.not-modified :refer [wrap-not-modified]]
   [ring.util.response :as res]
   [taoensso.sente :as sente]
   [taoensso.sente.server-adapters.aleph :refer [get-sch-adapter]]
   [taoensso.timbre :as timbre]))

(add-tap (bound-fn* clojure.pprint/pprint))

(defmethod ig/init-key
  ::channel-socket
  [_ _]
  (sente/make-channel-socket-server!
   (get-sch-adapter)
   {:csrf-token-fn nil}))

(defmethod ig/init-key
  ::listener
  [_ {:keys [channel-socket]}]
  (timbre/info "starting listener")
  (let [receive-channel (:ch-recv channel-socket)]
    (async/go-loop
     []
     (let [msg (async/<! receive-channel)
           {:keys [client-id event data]} msg]
       (tap> ["GOT A MESSAGE" client-id event data]))
     (recur))))

(defmethod ig/halt-key!
  ::listener
  [_ ch]
  (timbre/info "stopping listener")
  (async/close! ch))

(defmethod ig/init-key
  ::handler
  [_ {:keys [channel-socket]}]
  (->
   (fn [req]
     (let [dispatch ((juxt :request-method :uri) req)]
       (match
        dispatch

        [:get  "/status"]
        (res/response
         (str "Running: " (pr-str @(:connected-uids channel-socket))))

        [:get  "/chsk"]
        (res/response ((:ajax-get-or-ws-handshake-fn channel-socket) req))

        [:post "/chsk"]
        (res/response ((:ajax-post-fn channel-socket) req)))))
   (wrap-resource "public")
   (wrap-not-modified)
   (wrap-content-type)
   (cors/wrap-cors :access-control-allow-origin [#".*"]
                    :access-control-allow-methods [:get :put :post :delete]
                    :access-control-allow-credentials ["true"])
   (defaults/wrap-defaults (assoc-in defaults/site-defaults [:security :anti-forgery] false))))

(defmethod ig/init-key
  ::http-server
  [_ {:keys [port handler]}]
  (aleph.http/start-server handler {:port port}))

(defmethod ig/halt-key!
  ::http-server
  [_ server]
  (.close ^java.io.Closeable server))

(comment

 (require 'integrant.repl.state)
 (let [cids (get-in integrant.repl.state/system [ ::channel-socket :connected-uids])
 ])
 (def ch (sente/make-channel-socket-server!  (get-sch-adapter)))
 (keys ch)
 ( (:ajax-get-or-ws-handshake-fn ch) {:request-method :get :params {:client-id "hi"}})
 )
