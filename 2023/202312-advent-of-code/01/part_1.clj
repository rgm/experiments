(ns part-1
  "https://adventofcode.com/2023/day/1"
  (:require
   [clojure.string :as str]
   [clojure.test :as t :refer [deftest is]]))

(def valid-char? #{\0 \1 \2 \3 \4 \5 \6 \7 \8 \9})

(defn recover-calibration-1
  "Recover the calibration number from a line-separated str."
  [s]
  (let [lines (str/split s #"\n")
        xf (comp (map #(filter valid-char? %))
                 (map (juxt first last))
                 (map #(apply str %))) ;; convert [char] -> str
        strs (into [] xf lines)
        ns (map parse-long strs)]
    (reduce + ns)))

(deftest recover-calibration-test
  (is (= 142 (recover-calibration-1 (slurp "test_input_1.txt")))))

(comment
  (recover-calibration-1 (slurp "full_input.txt"))) ; 55834
