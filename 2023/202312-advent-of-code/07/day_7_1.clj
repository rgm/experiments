(ns day-7-1
  "https://adventofcode.com/2023/day/7"
  (:require
   [clojure.java.io :as io]
   [clojure.test :as t :refer [are deftest is]]
   [net.cgrand.xforms :as x]))

(def cards (into [] "23456789TJQKA"))

(def card-order (->> cards (map-indexed #(vector %2 %1)) (into {})))

(def hands
  {[5]         :five-kind
   [4 1]       :four-kind
   [3 2]       :full-house
   [3 1 1]     :three-kind
   [2 2 1]     :two-pair
   [2 1 1 1]   :one-pair
   [1 1 1 1 1] :high-card})

(def hand-order
  ;; < 8 elems thus arrayhashmap thus we can lean on stable sort order
  (->> hands vals reverse (map-indexed #(vector %2 %1)) (into {})))

(defn find-type [hand]
  (->> hand
       (group-by identity)
       vals (map count) sort reverse hands))

(defn compare-hands [{a :hand} {b :hand}]
  (let [f (comp hand-order find-type)
        cmp (compare (f a) (f b))]
    (if (zero? cmp)
      ;; vector compare of ints does what you'd expect
      (compare (mapv card-order a) (mapv card-order b))
      cmp)))

(defn read-input [path]
  (with-open [r (io/reader path)]
    (let [xf (comp (map #(re-matches #"(\w+) (\d+)" %))
                   (map #(drop 1 %))
                   (map #(zipmap [:hand :bid] %))
                   (map #(update % :bid parse-long)))]
      (into [] xf (line-seq r)))))

(defn total-winnings [hbs]
  (let [xf (comp (x/sort compare-hands)
                 (map-indexed (fn [i {bid :bid}] [(inc i) bid]))
                 (map #(reduce * %)))]
    (transduce xf + hbs)))

;; tests {{{

(deftest test-find-type
  (are [h t] (= t (find-type h))
    "32T3K" :one-pair
    "T55J5" :three-kind
    "KK677" :two-pair
    "KTJJT" :two-pair
    "QQQJA" :three-kind))

(deftest test-compare-hands
  (is (neg?  (compare-hands {:hand "32T3K"} {:hand "KK677"})))
  (is (pos?  (compare-hands {:hand "KK677"} {:hand "KTJJT"})))
  (is (zero? (compare-hands {:hand "KK677"} {:hand "KK677"}))))

(deftest test-total-winnings
  (is (= 6440 (total-winnings (read-input "test.txt")))))

;; }}}

(comment
  (require '[criterium.core :refer [bench]])
  (bench (total-winnings (read-input "test.txt")))
  (bench (total-winnings (read-input "input.txt")))) ; 249638405

;; vi:fdm=marker