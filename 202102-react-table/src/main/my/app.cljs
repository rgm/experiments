(ns my.app
  (:require
   [reagent.core :as rg]
   [reagent.dom :as rdom]))

(defn ^:dev/before-load stop []
  (js/console.log "stop"))

(defn ^:dev/after-load start []
  (js/console.log "start"))
