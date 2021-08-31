(ns my.app
  "An experiment using react-table from reagent via interop and new hooks
   features."
  (:require
   [paper]
   [reagent.dom :as rdom]))

(defn Root []
  [:div
   [:h1 {:class "text-3xl mb-2"} "Paper.js demo"]])

(defn load-paper []
  (let [paper-canvas (js/document.getElementById "my-canvas")]
    (.setup paper paper-canvas)
    (let [path (paper/Path. paper)
          start (paper/Point. paper 3 3)]
      (set! (.-strokeColor path) "black")
      (.moveTo path start)
      (.lineTo path (.add start #js [20 20]))
      (-> paper .-view .draw))))

(defn ^:dev/before-load stop [])

(defn ^:dev/after-load start []
  (let [react-root (js/document.getElementById "app")]
    (rdom/render [Root] react-root)
    (load-paper)))

;; vi:ts=2 sw=2 et fdm=marker
