(ns rgm.vega
  (:require [clojure.spec.alpha :as s]))

(def bar-data
  [{:category "A" :amount 28}
   {:category "B" :amount 55}
   {:category "C" :amount 43}
   {:category "D" :amount 91}
   {:category "E" :amount 81}
   {:category "F" :amount 53}])

(defn bar-chart
  [data]
  {:pre [(s/valid? (s/coll-of (s/keys :req-un [::category ::amount])) data)]}
  {:$schema "https://vega.github.io/schema/vega/v5.json"
   :autosize "fit"
   :signals [{:name "width" :update "containerSize()[0]"}
             {:name "height" :update "containerSize()[1]"}]
   :data [{:name "table" :values data}]
   :scales [{:name "xscale"
             :type "band"
             :domain {:data "table" :field :category}
             :range "width"
             :padding 0.1
             :round true}
            {:name "yscale"
             :domain {:data "table" :field "amount"}
             :range "height"
             :nice true}]
   :axes [{:orient "bottom" :scale "xscale"} {:orient "left" :scale "yscale"}]
   :marks [{:type "rect"
            :from {:data "table"}
            :encode {:enter {:x {:scale "xscale" :field "category"}
                             :width {:scale "xscale" :band 1}
                             :y {:scale "yscale" :field "amount"}
                             :y2 {:scale "yscale" :value 0}}
                     :update {:fill {:value "steelblue"}}}}]})

