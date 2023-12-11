(ns day-5-1
  (:require
   [clojure.string :as str]
   [clojure.java.io :as io]
   [clojure.test :as t :refer [are deftest is]]
   [instaparse.core :as ip]
   [instaparse.transform :as it]
   [ubergraph.core :as uber]
   [ubergraph.alg :as alg]))

(defn parse-seeds [s]
  (let [grammar "<line> = <'seeds:'> int+; int = #'\\d+'"
        parse (ip/parser grammar :auto-whitespace :standard)
        xf (partial it/transform {:int parse-long})]
    (-> s parse xf vec)))

(defn make-range-def [dest-start src-start range-len]
  {:src-start  src-start
   :src-end    (dec (+ src-start range-len))
   :dest-start dest-start
   :dest-end   (dec (+ dest-start range-len))
   :range-len  range-len})

(defn parse-mapping [s]
  (let [grammar "mapping = header ranges
                 header = word <'-to-'> word <'map:'>
                 ranges = range+
                 range = int int int
                 word = #'\\w+'
                 int = #'\\d+'"
        parse (ip/parser grammar :auto-whitespace :standard)
        xf (partial it/transform {:int parse-long
                                  :word keyword
                                  ;; leave these as definitions; we'll overflow
                                  ;; heap if we try to use direct maps.
                                  :range make-range-def
                                  :header vector
                                  :ranges vector
                                  :mapping vector})]
    (-> s parse xf vec)))

(defn read-input [path]
  (with-open [r (io/reader path)]
    (let [[raw-seeds _ & raw-mappings] (line-seq r)
          xf (comp (partition-by str/blank?)
                   (map #(str/join " " %))
                   (remove str/blank?)
                   (map parse-mapping))
          mappings (into {} (transduce xf conj raw-mappings))
          ;; make a sorted seq of the mappings
          toposort (->> (keys mappings) uber/digraph alg/topsort first)]
      {:seeds (parse-seeds raw-seeds)
       :mappings mappings
       :toposort toposort})))

(defn translate-range [mappings n]
  (if-let [?mapping (some->> mappings
                             (filter (fn [{:keys [src-start src-end]}]
                                       (<= src-start n src-end)))
                             (first))]
    (let [along (- n (:src-start ?mapping))]
      (+ (:dest-start ?mapping) along ))
    n))

(defn fully-translate [almanac seed-number]
  (let [toposort (:toposort almanac)]
    (reduce (fn [acc k]
              (let [[src dest] k
                    mappings (get-in almanac [:mappings k])
                    v (src acc)
                    v' (translate-range mappings v)]
                (assoc acc dest v'))) {:seed seed-number} toposort)))

(defn lowest-location-number [almanac]
  (let [seeds (:seeds almanac)]
    (->> seeds
         (map (partial fully-translate almanac))
         (map :location)
         (apply min))))

;; tests {{{

(deftest test-make-range-def
  (is (= {:src-start 98 :src-end 99 :dest-start 50 :dest-end 51 :range-len 2}
         (make-range-def 50 98 2))))

(deftest test-translate-range
  (let [mappings [{:dest-start 52, :dest-end 99, :src-start 50, :src-end 97,
                   :range-len 48}
                  {:dest-start 50, :dest-end 51, :src-start 98, :src-end 99,
                   :range-len 2}]]
    (is (= 40 (translate-range mappings 40)))
    (is (= 52 (translate-range mappings 50)))
    (is (= 62 (translate-range mappings 60)))
    (is (= 99 (translate-range mappings 97)))
    (is (= 50 (translate-range mappings 98)))
    (is (= 51 (translate-range mappings 99)))
    (is (= 100 (translate-range mappings 100)))))

(deftest test-find-location
  (let [almanac (read-input "test1.txt")]
    (are [m] (= m (fully-translate almanac (:seed m)))
         {:seed 79 :soil 81 :fertilizer 81 :water 81 :light 74 :temperature 78
          :humidity 78 :location 82}
         {:seed 14 :soil 14 :fertilizer 53 :water 49 :light 42 :temperature 42
          :humidity 43 :location 43}
         {:seed 55 :soil 57 :fertilizer 57 :water 53 :light 46 :temperature 82
          :humidity 82 :location 86}
         {:seed 13 :soil 13 :fertilizer 52 :water 41 :light 34 :temperature 34
          :humidity 35 :location 35})))

(deftest test-lowest-location-number
  (is (= 35 (lowest-location-number (read-input "test1.txt")))))

;; }}}

(comment
  (read-input "./test1.txt")
  (lowest-location-number (read-input "./input.txt"))) ; 51752125

;; vi:fdm=marker
