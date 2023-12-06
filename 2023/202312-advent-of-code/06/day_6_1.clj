(ns day-6-1
  "https://adventofcode.com/2023/day/6"
  (:require
   [clojure.string :as str]
   [clojure.test :as t :refer [deftest is]]))

(defn read-records [path]
  (->> (str/split (slurp path) #"\n")
       (map #(str/split % #"\s+"))
       (map #(drop 1 %))
       (map #(map parse-long %))
       (apply map (fn [t d] {:time t :dist d}))))

(defn beats-record? [record race]
  (and (= (:time record) (:time race))
       (< (:dist record) (:dist race))))

(defn possible-races [t]
  (let [button-ts (range (inc t))
        travel-ts (map #(- t %) button-ts)
        velocities button-ts
        distances (map (fn [v t] (* v t)) velocities travel-ts)]
    (map (fn [d] {:time t :dist d}) distances)))

(defn count-record-setters [m]
  (let [pred (partial beats-record? m)]
    (->> m :time possible-races (filter pred) count)))

(defn product-of-counts [ms]
  (reduce * (map count-record-setters ms)))

;; tests {{{

(deftest test-beats-record?
  (is (beats-record? {:time 4 :dist 9} {:time 4 :dist 10}))
  (is (beats-record? {:time 7 :dist 9} {:time 7 :dist 10}))
  (is (not (beats-record? {:time 4 :dist 9} {:time 4 :dist 4}))))

(deftest test-possible-races
  (is (= [{:time 7 :dist 0}
          {:time 7 :dist 6}
          {:time 7 :dist 10}
          {:time 7 :dist 12}
          {:time 7 :dist 12}
          {:time 7 :dist 10}
          {:time 7 :dist 6}
          {:time 7 :dist 0}]
         (possible-races 7))))

(deftest test-count-record-setters
  (is (= 4 (count-record-setters {:time 7 :dist 9}))))

(deftest test-product-of-counts
  (is (= 288 (product-of-counts (read-records "./test3.txt")))))

;; }}}

(comment
  ;; part 1
  (product-of-counts (read-records "./input.txt")) ; 3317888
  ;; part 2
  (count-record-setters {:time 71530, :dist 940200}) ; 71503
  (product-of-counts [{:time 42899189, :dist 308117012911467}])) ; 24655068

;; vi:fdm=marker
