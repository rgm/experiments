(ns user
  (:require [juxt.pull.core :as p]))

(def data
  {:contacts {1 {:name "ryan" :id 1}
              2 {:name "andrew" :id 2}}
   :properties {:a {:address "123 main street" :id :a :owner ^:ref [:contacts 1]}
                :b {:address "456 elm avenue" :id :b :owner ^:ref [:contacts 2]}}})

(def data-2
  {:contacts {1 {:name "ryan" :id 1}
              2 {:name "andrew" :id 2}}
   :properties [{:address "123 main street" :id :a :owner ^:ref [:contacts 1]}
                {:address "456 elm avenue" :id :b :owner ^:ref [:contacts 2]}]})

(p/pull data ['*] )
(p/pull data-2 [:properties {:owner [ :name]}] )
