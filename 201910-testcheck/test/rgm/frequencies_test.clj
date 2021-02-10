(ns rgm.frequencies-test
  ;; https://purelyfunctional.tv/lesson/when-to-test-after-implementation/
  (:refer-clojure :exclude [frequencies])
  (:require [clojure.test :refer [deftest is]]
            [clojure.test.check.clojure-test :refer [defspec]]
            [clojure.test.check.properties :as prop]
            [clojure.test.check.generators :as gen]))

(def frequencies clojure.core/frequencies)

;; this one passes all the functionality properties :(
 ; (defn frequencies [coll] (into {} (for [c coll] [c 1])))

;; example-based testing - you have a bias about the corner cases if you write tests last
;; PBT - corner cases are generated for you. Can still miss eg. ordering properties
;; be adversarial - you want to break the tests: they *pass* even though fn is wrong
;; not gonna change the implementation, though, unlike EBT
;; how would a re-factorer change my tests to falsely pass
;; can't duplicate implementation

;; strategy 1: functionality, obvious

(defspec frequencies-returns-map
  (prop/for-all [coll (gen/vector gen/nat)]
                (map? (frequencies coll))))

(defspec frequencies-vals-pos
  (prop/for-all [coll (gen/vector gen/nat)]
                (every? pos? (vals (frequencies coll)))))

(defspec frequencies-keys-from-coll
  (prop/for-all [coll (gen/vector gen/nat)]
                (= (set (keys (frequencies coll)))
                   (set coll))))

;; strategy: generate output

(comment
 (clojure.core/frequencies [:a :a :c :b :a])
 (frequencies [0]))

