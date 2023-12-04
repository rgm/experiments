(ns day-4-1
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

(defn scratchcard-points
  "'1 for the first match, then doubled three times for each of the three
   matches after the first' means powers of two if you start from 1 == 2^0"
  [m]
  (let [n-matches (count (set/intersection (:wins m) (:nums m)))]
    (if (zero? n-matches) 0 (-> (Math/pow 2 (dec n-matches)) int))))

(defn scratchcard-set-points [ms]
  (->> ms (map scratchcard-points) (reduce +)))

;; tests {{{

(deftest test-scratchcard-points
  (is (= 8 (scratchcard-points {:wins #{86 48 17 83 , 41}
                                :nums #{86 48 17 83 , 31 6 9 53}})))
  (is (= 2 (scratchcard-points {:wins #{32 61 , 20 13 16}
                                :nums #{32 61 , 24 17 82 19 68 30}})))
  (is (= 0 (scratchcard-points {:wins #{72 31 56 13 18}
                                :nums #{74 77 36 23 35 11 10 67}}))))

(deftest test-scratchcard-set-points
  (is (= 13 (scratchcard-set-points (read-input "test1.txt")))))

;; }}}

(comment
  (scratchcard-set-points (read-input "input.txt"))) ; 21919

;; vi:fdm=marker
