(ns day-4-2
  (:require
   [clojure.java.io :as io]
   [clojure.set :as set]
   [clojure.test :as t :refer [deftest is]]
   [instaparse.core :as ip]
   [instaparse.transform :as it]))

(def grammar "card     = header wins <'|'> nums
              <header> = <'Card'> id <':'>
              id       = int
              wins     = int+
              nums     = int+
              int      = #'\\d+'")

(def transforms {:int  parse-long
                 :wins (fn [& kvs] [:wins (set kvs)])
                 :nums (fn [& kvs] [:nums (set kvs)])
                 :card (fn [& kvs] (into {} kvs))})

(def parse-line (comp (partial it/transform transforms)
                      (ip/parser grammar :auto-whitespace :standard)))

(defn read-input [path]
  (with-open [r (io/reader path)] (mapv parse-line (line-seq r))))

(defn cards-won [m]
  (count (set/intersection (:wins m) (:nums m))))

;; I absolutely did not figure this out, but borrowed the idea from
;; https://github.com/samcf/advent-of-code/blob/main/2023-04-scratchcards.clj
;; ... the reverse and list (which conj's to the front) are keys.

(defn totals-rf
  ([ns]   #_(prn ns) (reduce + ns))
  ([ns n] #_(prn ns) (conj ns (reduce + 1 (take n ns)))))

(defn count-scratchcards-won [ms]
  (transduce (map cards-won) totals-rf (list) (reverse ms)))

;; tests {{{

(deftest test-cards-won
  (is (= 4 (cards-won {:wins #{86 48 17 83 , 41}
                       :nums #{86 48 17 83 , 31 6 9 53}})))
  (is (= 2 (cards-won {:wins #{32 61 , 20 13 16}
                       :nums #{32 61 , 24 17 82 19 68 30}})))
  (is (= 0 (cards-won {:wins #{72 31 56 13 18}
                       :nums #{74 77 36 23 35 11 10 67}}))))

(deftest test-count-scratchcards-won
  (is (= 30 (count-scratchcards-won (read-input "test1.txt")))))

;; }}}

(comment
  (count-scratchcards-won (read-input "input.txt"))) ; 9881048

;; vi:fdm=marker
