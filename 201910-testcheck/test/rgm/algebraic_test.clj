(ns rgm.algebraic-test
  (:require [clojure.test :refer :all]
            [clojure.test.check.clojure-test :refer [defspec]]
            [clojure.test.check.properties :as prop]
            [clojure.test.check.generators :as gen]))

;; inverse (inc (dec a) == (dec (inc a)
;; commutativity (* a b) == (* b a)
;; associativity (* a (* b c)) == (* (* a b) c)
;; idempotence (-> as sort) == (-> as sort sort)
;; identity (* 1 a) == a
;; zero (* 0 a) == 0

(defspec merge-associative
  (prop/for-all [x (gen/map gen/keyword (gen/choose 0 9))
                 y (gen/map gen/keyword (gen/choose 0 9))
                 z (gen/map gen/keyword (gen/choose 0 9))]
                (= (merge (merge x y) z)
                   (merge x (merge y z)))))

(defspec concat-identity
  (prop/for-all [x (gen/vector gen/small-integer)]
                (= x
                   (concat x [])
                   (concat [] x))))

(defspec *-zero 100
  (prop/for-all [x gen/large-integer]
                (= 0
                   (* 0 x)
                   (* x 0))))

(defn cross-product
  [as bs]
  (for [a as b bs] [a b]))

(defspec cross-product-zero 100
  (prop/for-all [x (gen/vector gen/small-integer)]
                  (= []
                     (cross-product [] x)
                     (cross-product x []))))

