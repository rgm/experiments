(ns app.main
  (:require
   [reagent.dom :as rdom]
   [reagent.core :as r]))

(defonce *state (r/atom {:greeting "hi"}))

(defn Layout
  []
  [:<>
   [:h3 (:greeting @*state)]
   [:div "even more stuff"]])

(defn ^:dev/after-load boot
  []
  (rdom/render [Layout] (.getElementById js/document "app")))

(defn ^:export init
  []
  (boot))

(comment

 (js/alert "hi")
 (swap! *state assoc :greeting "barf")

 )
