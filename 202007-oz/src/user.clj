(ns user
  (:require
   [oz.core :as oz]))

(defn play-data [& names]
  (for [n names i (range 20)]
    {:time i :item n :quantity (+ (Math/pow (* i (count n)) 0.8) (rand-int (count n)))}))

(comment
  (play-data "monkey" "slipper" "broom"))

(def line-plot
  {:data {:values (play-data "monkey" "slipper" "broom")
          }
   :encoding {:x {:field "time" :type "quantitative"}
              :y {:field "quantity" :type "quantitative"}
              :color {:field "item" :type "nominal"}}
   :mark "line"})


(comment
  (oz/start-server!)
  (oz/publish! line-plot)
  (oz/view! line-plot  :mode :vega))

