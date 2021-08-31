(ns rgm.core
  (:require
   [helix.core :refer [defnc $]]
   [helix.dom :as d]
   ["@visx/shape" :refer [BarStackHorizontal]]
   ["@visx/group" :refer [Group]]
   ["react" :as react]
   ["react-dom" :as rdom]))

(defnc MyComponent
  [{:keys [name]}]
  (d/div "hi " name))

(defnc BarComponent
  []
  (d/svg
   {:width 100 :height 100}
   (Group {:top 10 :left 5}
          #_(BarStackHorizontal 
           {:data #js []
            :height 100
            }
           (d/rect )))))

(defnc Root
  []
  ($ BarComponent))

(defn ^{:dev/after-load true :export true} start
  []
  (rdom/render ($ Root)
               (js/document.getElementById "app")))
