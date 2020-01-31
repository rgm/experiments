(ns rgm.server
  (:require
   [aleph.http]
   [clojure.java.io :as io]
   [juxt.clip.core :as clip]
   [muuntaja.middleware :refer [wrap-format wrap-params]]
   [reitit.ring :as rr]
   [ring.middleware.defaults :refer [site-defaults wrap-defaults]]
   [ring.util.http-response :as response]
   [selmer.parser]
   [taoensso.timbre :as timbre]))

(selmer.parser/set-resource-path! "html/")

(defn host-handler
  [profile]
  (fn [_req]
    (-> (selmer.parser/render-file "home.html" {:profile profile})
        (response/ok)
        (response/content-type "text/html; charset=utf-8"))))

(defn route-tree
  [profile]
  [["/" {:get (host-handler profile)}]])

(defn make-handler
  [route-tree]
  (rr/ring-handler
   (rr/router route-tree)
   (rr/routes (rr/redirect-trailing-slash-handler)
              (rr/create-resource-handler {:path "/"})
              (rr/create-default-handler
               {:not-found (constantly {:status 404})}))))

(defn make-app
  [route-tree]
  (-> (make-handler route-tree)
      (wrap-format)
      (wrap-defaults site-defaults)))

(defn system-config
  [profile]
  {:components
   {:profile      {:start `(identity ~profile)}
    :route-tree   {:start `(route-tree (clip/ref :profile))}
    :ring-handler {:start `(make-app (clip/ref :route-tree))}
    :http-server  {:start `(aleph.http/start-server (clip/ref :ring-handler) {:port 8080})}}})

(defn -main
  [& _]
  (timbre/info "starting http server")
  (clip/start (system-config :prd))
  @(promise))
