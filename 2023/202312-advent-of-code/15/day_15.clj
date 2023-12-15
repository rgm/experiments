(ns day-15
  (:require
   [clojure.string :as str]
   [clojure.test :as t :refer [are deftest is]]
   [taoensso.tufte :as tufte :refer [defnp]]))

(defn read-input [path] (-> path slurp str/trim (str/split #",")))

(defnp HASH [s]
  (reduce (fn [n c] (rem (* (+ n (int c)) 17) 256)) 0 s))

(defnp part-1 [path] (transduce (map HASH) + (read-input path)))

(defnp parse-op [s]
  (if (str/ends-with? s "-")
    (let [label (last (re-find #"(\w+)-" s))]
      {:op :del :box (HASH label) :label label})
    (let [[label focal] (str/split s #"=")]
      {:op :add :box (HASH label) :label label :focal (parse-long focal)})))

(defnp update-lens [box label focal]
  ;; should check input and see if we're ever > 7 slots, then array-map keeps
  ;; order and makes this a _lot_ easier
  (let [has-label? (set (map :label box))]
    (if (has-label? label)
      (reduce (fn [acc {?label :label :as slot}]
                (if (= label ?label)
                  (conj acc {:label label :focal focal})
                  (conj acc slot)))
              [] box)
      (conj box {:label label :focal focal}))))

(defnp remove-lens [box label] (vec (remove #(= label (:label %)) box)))

(defnp process-op [box {:keys [op label focal]}]
  (case op
    :add (update-lens box label focal)
    :del (remove-lens box label)))

(defnp power [box]
  (->> box (map :focal) (map-indexed (fn [i n] (* (inc i) n)))))

(defnp part-2 [path]
  (let [ops (map parse-op (read-input path))]
    (->> ops
         (group-by :box)
         (pmap (fn [[box-n ops]] [box-n (reduce process-op [] ops)]))
         (mapcat (fn [[box-n box]] (map #(* (inc box-n) %) (power box))))
         (reduce +))))

;; tests {{{

(deftest test-HASH
  (are [input expected]
       (= expected (HASH input))
    "rn=1" 30
    "cm-"  253
    "qp=3" 97
    "cm=2" 47
    "qp-"  14
    "pc=4" 180
    "ot=9" 9
    "ab=5" 197
    "pc-"  48
    "pc=6" 214
    "ot=7" 231))

(deftest test-part-1 (is (= 1320 (part-1 "test.txt"))))

(deftest test-reduce-ops
  (let [ops [{:op :add, :box 3, :label "pc", :focal 4}
             {:op :add, :box 3, :label "ot", :focal 9}
             {:op :add, :box 3, :label "ab", :focal 5}
             {:op :del, :box 3, :label "pc"}
             {:op :add, :box 3, :label "pc", :focal 6}
             {:op :add, :box 3, :label "ot", :focal 7}]]
    (is (= [{:label "ot" :focal 7}
            {:label "ab" :focal 5}
            {:label "pc" :focal 6}]
           (reduce process-op [] ops)))))

(deftest test-part-2 (is (= 145 (part-2 "test.txt"))))

;; }}}

(comment
  (tufte/add-basic-println-handler! {})
  (part-1 "test.txt") ; 1320
  (part-2 "test.txt") ; 145
  (part-1 "input.txt") ; 514639
  (tufte/profile {} (part-2 "input.txt"))) ; 279470

;; vi:fdm=marker
