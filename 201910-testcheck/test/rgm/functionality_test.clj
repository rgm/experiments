(ns rgm.functionality-test
  ^{:clj-kondo/config '{:lint-as {clojure.test.check.properties/for-all clojure.core/let
                                  clojure.test.check.clojure.test/defspec clojure.core/def}
                        :linters {}}}
  ; "https://purelyfunctional.tv/lesson/strategies-for-properties-functionality/
  ;  https://purelyfunctional.tv/lesson/strategies-for-properties-invariants/
  ;  https://purelyfunctional.tv/lesson/strategies-for-properties-algebraic-properties/"
  (:require [clojure.test :refer :all]
            [clojure.test.check.clojure-test :refer [defspec]]
            [clojure.test.check.properties :as prop]
            [clojure.test.check.generators :as gen]))

;; SYSTEM UNDER TEST

(defn join [l1 l2]
  (lazy-seq
   (cond
     (empty? l1)
     l2

     (empty? l2)
     l1

     (< (first l1) (first l2))
     (cons (first l1) (join (rest l1) l2))

     :else
     (cons (first l2) (join l1 (rest l2))))))

(defn mergesort*
  [v]
  (case (count v)
    0 ()
    1 (seq v)
    ;; else
    (let [half (quot (count v) 2)]
      (join (mergesort* (subvec v 0 half))
             (mergesort* (subvec v half))))))

(defn mergesort
  [ls]
  (mergesort* (vec ls)))

;; use a model

;; challenge with a model is that you can't dupe the functionality in the model
;; sometimes you get lucky and you have something simpler with similar-enough
;; functionality (eg. sort implementations), or you can swap in a hashmap for a kv store.

(defspec sort-with-model 100
  (prop/for-all [xs (gen/vector gen/large-integer)]
                (= (sort xs) (mergesort xs))))

(comment
 (gen/sample (gen/vector gen/large-integer))

 (sort [0 0])
 (mergesort [0 0])
 (sort-with-model)
 )

;; use set as a model for distinct

(defspec distinct-with-model 100
  (prop/for-all [xs (gen/vector (gen/choose 0 4))]
                (= (count (set xs)) (count (distinct xs)))))

(comment
 (gen/sample (gen/vector (gen/choose 0 4)) 100)
 (distinct-with-model)
 )

;; what do you do when you don't have a model?
;; think about the meaning ... what does it mean to be sorted?

(defspec first-element-smaller 100
  (prop/for-all [xs (gen/not-empty (gen/vector gen/large-integer))]
                (let [s (mergesort xs)
                      f (first s)]
                  (every? #(<= f %) xs))))

(defspec elements-in-order 100
  (prop/for-all [xs (gen/not-empty (gen/vector gen/large-integer))]
                (let [s (mergesort xs)]
                  (apply <= s))))

(comment
 (first-element-smaller)
 (elements-in-order)
 )

;; EXCEPT if mergesort always returned [1] this would pass

(defspec bogus-test 100
  (prop/for-all [xs (gen/not-empty (gen/vector gen/large-integer))]
                (let [s (fn [_] [1])]
                  (apply <= s))))

(comment (bogus-test)
         )


;; invariants 
;; what doesn't change?

(defspec sort-invariant-always-list 100
  (prop/for-all [xs (gen/not-empty (gen/vector gen/large-integer))]
                (seq? (mergesort xs))))

(defspec sort-invariant-same-length 100
  (prop/for-all [xs (gen/not-empty (gen/vector gen/large-integer))]
                (= (count (fake-mergesort xs))
                   (count xs))))

(defn fake-mergesort
  "just give back the same number of 1s ... it's sorted and same length"
  [xs] (repeat (count xs) 1))

(defspec sort-invariant-same-elements 100
  (prop/for-all [xs (gen/not-empty (gen/vector gen/large-integer))]
                ;; can't do sets ... doesn't handle dupes
                ;; `frequencies` should work without order, though
                (= (frequencies xs)
                   (frequencies (mergesort xs)))))

(comment
 (fake-mergesort [1 2 3])
 (sort-invariant-always-list)
 (sort-invariant-same-length)
 (sort-invariant-same-elements)
 ) 
