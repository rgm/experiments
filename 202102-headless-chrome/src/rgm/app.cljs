(ns rgm.app
  "Entry point for single-page app."
  (:require
   [reagent.dom :as rdom]
   [reagent.core :as rg]))

(defn Root []
  [:div
   [:h1 {:class ""} "hi from within react"]])

(defn ^:dev/before-load stop [])

(defn ^:dev/after-load start []
  (let [host-dom (js/document.getElementById "app")]
    (rdom/render [Root] host-dom)))
