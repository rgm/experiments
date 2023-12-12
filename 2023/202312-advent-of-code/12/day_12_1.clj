(ns day-12-1
  (:require
   [clojure.java.io :as io]
   [clojure.math.combinatorics :as combo]
   [clojure.string :as str]
   [clojure.test :as t :refer [deftest is]]
   [taoensso.tufte :as tufte :refer [defnp]]))

;; \. is operational, \# is damaged, \? is unknown

(defnp read-input [path]
  (with-open [r (io/reader path)]
    (mapv #(str/split % #"\s+") (line-seq r))))

(defnp enumerate [s]
  (let [xs (->> s
                (partition-by identity)
                (filter (fn [cs] (every? #{\?} cs)))
                (map count)
                (map #(combo/selections #{\. \#} %))
                (apply combo/cartesian-product)
                (map (fn turn-char-seqs-back-into-strs [xs]
                       (map #(apply str %) xs))))
        template (as-> s $
                   (partition-by identity $)
                   (mapv #(apply str %) $)
                   (apply str $)
                   (str/replace $ #"\?+" "%s"))
        fill-template (fn [t guts]
                        (apply format t guts))]
    (map #(fill-template template %) xs)))

(defnp satisfies-count? [ns s]
  (let [blah (->> s
                  (partition-by identity)
                  (filter (fn [cs] (every? #{\#} cs)))
                  (map count))]
    (= ns blah)))

(defnp arrangements [ns s]
  (->> s enumerate (filter (partial satisfies-count? ns))))

(deftest test-arrangements
  (is (= 1  (count (arrangements [1 1 3]        "???.###"))))
  (is (= 4  (count (arrangements [1 1 3] ".??..??...?##."))))
  (is (= 10 (count (arrangements [3 2 1]   "?###????????")))))

(defnp sum-of-counts [stuff]
  (->> stuff
       (map (fn [[s ns]]
              (let [ns' (map parse-long (re-seq #"\d+" ns))]
                [ns' s])))
       (map (fn [[ns s]]
              (count (arrangements ns s))))
       (reduce +)))

(deftest test-sum-of-counts
  (is (= 21 (sum-of-counts (read-input "test.txt")))))

(comment
  (tufte/add-basic-println-handler! {})
  (tufte/profile {} (sum-of-counts (read-input "input.txt"))) ; 7922
  (tufte/profile {} (sum-of-counts (read-input "test.txt")))
  (combo/selections #{\. \#} 3))
