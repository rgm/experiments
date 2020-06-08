(ns rgm.core-test
  (:require
   [rgm.core :as sut]

   [clojure.core.matrix :as m]
   [clojure.test :as t :refer [deftest testing is]]
   [taoensso.tufte :as tufte :refer [defnp p is]]))

(defnp test-model-1
  "f(X) = 2x_1 + x_2.

   Contrived so x1 has predictably greater sensitivity on x_1."
  [[_x_1 _x_2 :as v]]
  (let [coeff [[2 0] [0 1]]]
    (m/ereduce + (m/mmul coeff v))))

(defnp test-model-2
  "f(X) = 2x_1 + x_2.

   Contrived so x1 has predictably greater sensitivity on x_1."
  [v]
  (let [coeff [[3 0] [0 1]]]
    (m/ereduce + (m/mmul coeff v))))

(defnp test-model-3
  "Vector v has 20 inputs. This is the 3.7 test function from Saltelli."
  [X]
  (let [ω (fn [i X]
            (let [x_i (nth X i)]
              (cond
                (#{3 5 7} i) (* 2 (- (/ (* 1.1 x_i)
                                        (+ x_i 0.1))
                                     1/2))
                :else (* 2 (- x_i 1/2)))))
        β_i    (fn [i]
                 (cond (<= 1 i 10) +20)
                 :else 0) ;; TODO sample zero mean, unit stdev
        β_ij   (fn [i j]
                 (cond
                   (and (<= 1 i 6) (<= 1 j 6)) -15
                   :else 0)) ;; TODO sample zero mean, unit stdev
        β_ijl  (fn [i j l]
                 (cond
                   (and (<= 1 i 5) (<= 1 j 5) (<= 1 j l)) -10
                   :else 0))
        β_ijls (fn [i j l s]
                 (cond
                   (and (<= 1 i 4) (<= 1 j 4) (<= 1 l 4) (<= 1 s 4)) +5
                   :else 0))
        i-terms (for [i (range 20)]
                  (* (β_i i) (ω i X)))
        ij-terms (for [i (range 20)
                       j (range 20)
                       :when (< i j)]
                   (* (β_ij i j) (ω i X) (ω j X)))
        ijl-terms (for [i (range 20)
                        j (range 20)
                        l (range 20)
                        :when (< i j l)]
                    (* (β_ijl i j l) (ω i X) (ω j X) (ω l X)))
        ijls-terms (for [i (range 20)
                         j (range 20)
                         l (range 20)
                         s (range 20)
                         :when (< i j l s)]
                     (* (β_ijls i j l s) (ω i X) (ω j X) (ω l X) (ω s X)))]
    (reduce + (concat i-terms
                      ij-terms
                      ijl-terms
                      ijls-terms))))

(defn equalish [a b] (< (- (Math/abs a) (Math/abs b)) 1e-4))

(deftest sample-test
  (let [problem  {:bounds {:x1 [-10 10]
                           :x2 [-10 10]}
                  :levels 4
                  :samples 10}
        Xs       (sut/morris-sample problem)
        Ys       (sut/predict test-model-1 Xs)
        expected {:mu    {:x1 1 :x2 0}
                  :mu*   {:x1 1 :x2 0}
                  :sigma 0}
        actual   (sut/morris-analyze problem Xs Ys)]
    ; (is (equalish (:mu expected) (:mu actual)))
    ; (is (equalish (:mu* expected) (:mu-star actual)))
    ; (is (equalish (:sigma expected) (:sigma actual)))
    ))

(deftest B-test
  (is (= (m/array [[0 0] [1 0] [1 1]]) (sut/B 2)))
  (is (= (m/array [[0 0 0] [1 0 0] [1 1 0] [1 1 1]]) (sut/B 3))))

(comment
  (tufte/add-basic-println-handler! {})
  (tufte/profile {} (sut/get-one-elem-effect-set 10 20 test-model-3))
  (tufte/profile
   {}
   (take 12 (repeatedly #(sut/get-one-elem-effect-set 10 2 test-model-2)))))
