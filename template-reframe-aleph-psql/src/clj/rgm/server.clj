(ns rgm.server
  (:require
   [aleph.http]
   [clojure.java.io :as io]
   [juxt.clip.core :as clip]
   [muuntaja.middleware :refer [wrap-format wrap-params]]
   [reitit.ring :as rr]
   [ring.middleware.defaults :refer [site-defaults wrap-defaults]]
   [ring.util.http-response :as response]
   [selmer.parser :as selmer]
   [taoensso.timbre :as timbre]))

(selmer/set-resource-path! (io/resource "html"))

(defn host-handler
  [_]
  (-> (selmer/render-file "home.html" {})
      (response/ok)
      (response/content-type "text/html")))

(def route-tree
  [["/" {:get host-handler}]])

(defn make-handler
  []
  (rr/ring-handler
   (rr/router route-tree)
   (rr/routes (rr/redirect-trailing-slash-handler)
              (rr/create-resource-handler {:path "/"})
              (rr/create-default-handler
               {:not-found (constantly {:status 404})}))))

(defn make-app
  []
  (-> (make-handler)
      (wrap-format)
      (wrap-defaults site-defaults)))

(def system-config
  {:components
   {:handler {:start make-app}
    :http
    {:start `(aleph.http/start-server (clip/ref :handler) {:port 8080})
     :stop  `(.stop this)}}})

(defn -main
  [& _]
  ; (timbre/info "starting http server")
  ; (clip/start system-config)
  ; @(promise)
  )
