(ns rgm.tdd-group-by
  ^{:clj-kondo/config '{:lint-as {clojure.test.check.properties/for-all clojure.core/let
                                  clojure.test.check.clojure.test/defspec clojure.core/def}
                        :linters {}}}
  ;; https://purelyfunctional.tv/lesson/when-to-test-before-implementation/
  (:refer-clojure :exclude [group-by])
  (:require [clojure.test :refer [deftest is]]
            [clojure.test.check.clojure-test :refer [defspec]]
            [clojure.test.check.properties :as prop]
            [clojure.test.check.generators :as gen]))

(defn group-by
  [f coll]
  (reduce (fn [mp e]
            (update mp (f e) (fnil conj []) e)) ; fnil so it's [] not '()
          {} coll))

(deftest empty-group-by
  (is (= {} (group-by (fn [_]) nil))))

(comment
 (gen/sample (gen/map gen/nat (gen/elements [:a :b :c])))
 (group-by {0 :a} [0])
 (group-by {} [])
 (let [example {0 :a 1 :a}]
   (group-by example (concat (keys example) [:x])))
 )

(def gen-group-fn (gen/map gen/nat (gen/elements [:a :b :c])))

(defspec group-by-all-values 100
  (prop/for-all [f gen-group-fn]
   (let [coll (concat (keys f)
                      (keys f) ;; adds dupes
                      [:x]) ;; nil for grouper
         actual (group-by f coll)
         vals (mapcat val actual)]
     (= (frequencies coll)
        (frequencies vals)))))

(defspec group-by-right-keys 100
  (prop/for-all [f gen-group-fn]
   (let [coll (concat (keys f)
                      (keys f) ;; adds dupes
                      [:x])
         actual (group-by f coll)]
     ;; identity gets you truthy, versus `true?`
     (every? identity (for [[k vs] actual
                            v vs]
                        (= k (f v)))))))

(defspec group-by-right-keys-order 100
  (prop/for-all [f gen-group-fn]
   (let [coll (concat (keys f)
                      (keys f) ;; adds dupes
                      [:x 'y])
         actual (group-by f coll)]
     (every? identity
             (for [[k vs] actual]
               (= vs (filter #(= k (f %)) coll)))))))
