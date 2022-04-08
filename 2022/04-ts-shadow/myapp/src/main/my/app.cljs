(ns my.app
  (:require
   [helix.core  :refer [defnc $]]
   [helix.hooks :as hooks]
   [helix.dom   :as d]
   [my.shared]
   ["react-dom" :as rdom]))

(defnc HelixRoot []
  (d/div "HIYA"))

(defn ^:dev/after-load start []
  (js/console.log "starting")
  (let [host-dom (js/document.getElementById "app")]
    (rdom/render ($ HelixRoot) host-dom)))

(defn ^:export init []
  (js/console.log "initializing")
  (start))
