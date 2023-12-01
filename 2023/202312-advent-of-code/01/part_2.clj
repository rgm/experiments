(ns part-2
  "https://adventofcode.com/2023/day/1"
  (:require
   [clojure.string :as str]
   [clojure.test :as t :refer [deftest is are]]))

(def word-mappings
  "Account for overlaps like oneight -> 18. Clever trick that avoids losing
   digits, since we'll be filtering for digits later. (I assume this requiement
   is a kind of ChatGPT guard)."
  {"one"   "o1e"
   "two"   "t2o"
   "three" "t3e"
   "four"  "f4r"
   "five"  "f5e"
   "six"   "s6x"
   "seven" "s7n"
   "eight" "e8t"
   "nine"  "n9e"
   "zero"  "z0o"})

(defn words->digits
  "Recur over mappings to replace eg. eight -> 8"
  [s]
  (loop [m word-mappings s s]
    (if-not (seq m)
      s
      (let [[word digit] (first m)]
        (recur (rest m) (str/replace s word (str digit)))))))

(deftest words->digits-test
  (are [expected       input]             (= expected (words->digits input))
       "t2o1n9e"       "two1nine"
       "e8t2ot3e"      "eightwothree"
       "abco1e2t3exyz" "abcone2threexyz"
       "xt2o1e3f4r"    "xtwone3four"
       "4n9ee8ts7n2"   "4nineeightseven2"
       "zo1e8t234"     "zoneight234"
       "7pqrsts6xteen" "7pqrstsixteen"))

(def valid-char? #{\0 \1 \2 \3 \4 \5 \6 \7 \8 \9})

(defn recover-calibration-2
  "Recover the calibration number from a line-separated str."
  [s]
  (let [lines (-> s words->digits (str/split #"\n"))
        xf (comp (map #(filter valid-char? %))
                 (map (juxt first last))
                 (map #(apply str %))) ;; convert [char] -> str
        strs (into [] xf lines)
        ns (map parse-long strs)]
    (reduce + ns)))

(deftest recover-calibration-test
  (is (= 281 (recover-calibration-2 (slurp "test_input_2.txt")))))

(comment
  (recover-calibration-2 (slurp "full_input.txt"))) ; 53221
