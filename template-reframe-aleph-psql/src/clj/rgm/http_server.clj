(ns rgm.http-server
  (:require
   [aleph.http]
   [juxt.clip.core :as clip]
   [muuntaja.middleware :refer [wrap-format wrap-params]]
   [reitit.ring :as rr]
   [rgm.system]
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

(defn run-server
  [args]
  (let [profile (keyword (:profile args))
        verbose? (:verbose args)]
    (timbre/set-level! (if verbose? :debug :info))
    (timbre/info "starting http server on port 8080")
    (clip/start (rgm.system/system-config profile))
    ;; block until interrupted; cli-matic and clip won't pause by themselves
    ;; https://github.com/l3nz/cli-matic/issues/84
    (promise)))
