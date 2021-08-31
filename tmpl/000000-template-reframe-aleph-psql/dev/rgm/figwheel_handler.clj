(ns rgm.figwheel-handler
  (:require
   [rgm.server]
   [ring.middleware.defaults :refer [site-defaults wrap-defaults]]))

(defn handler
  [_]
  (-> (rgm.server/host-handler :dev)
      (wrap-defaults site-defaults)))
