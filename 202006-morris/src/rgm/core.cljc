(ns rgm.core
  "https://en.wikipedia.org/wiki/Elementary_effects_method"
  (:refer-clojure :exclude [+ - * /])
  (:require
   [clojure.core.matrix.operators :as op :refer [+ - * /]]
   [clojure.core.matrix :as m]))

(defn one-at-a-time
  "add delta to the ith member of X"
  [i delta X]
  ;; FIXME
  X)

(defn elementary-effect
  [i delta X]
  (let [X' (one-at-a-time i delta X)]
    (/ (- X' X) delta)))

(defn predict
  "Evaluate model once per X in Xs, where X is a vector."
  [model Xs])

(defn morris-sample
  [{:keys [bounds] :as _problem}])

(defn morris-analyze
  "Produce :mu, :mu-star and :sigma for Xs and Ys.

   :mu is the mean of the distribution of elementary effects.
   :mu-star is the mean of the absolute value of the dist of elementary effects.
   :sigma is the std dev of dist of elementary effects."
  [problem Xs Ys])

(comment

  ; (def P* (m/permutation-matrix (shuffle (range k))))

  (m/fill (m/new-matrix 2 2) 1)
  (m/compute-matrix [3 2] (constantly 1))
  (let [k 2] (m/identity-matrix (inc k) k))
  (m/shape [1 1])
  (m/shape [1 1 3])
  (morris-sample {:bounds {:x1 [-1 1] :x2 [-2 2]}}))

(def delta 2/3) ;; trajectory step
(def k 2) ;; num inputs
(def p 4) ;; num samples
(def B (m/array [[0 0] [1 0] [1 1]])) ;; triangular matrix
(def x* (m/array [0 1/3])) ;; initial guess
(def D* (m/array [[1 0] [0 -1]])) ;; -1, 1 on diagonal
(def P* (m/identity-matrix (inc k))) ;; permutation-matrix
(def J_k1k (m/array [[1 1] [1 1] [1 1]])) ;; ones-fill

(defn B*
  "p is subdivision of range, k is number of model inputs."
  [p k]
  (let [delta (/ p (* 2 (dec p))) ;; convenient trajectory step, see middle of p97
        B     (m/array [[0 0] [1 0] [1 1]]) ;; strictly lower triangular matrix (inc k) by k
        x*    (m/array [0 1/3]) ;; initial guess
        D*    (m/array [[1 0] [0 -1]]) ;; -1, 1 random on diagonal
        P*    (m/permutation-matrix (range k)) ;; permutation-matrix; just identity w/o shuffling range
        J_k1k (m/array [[1 1] [1 1] [1 1]])] ;; ones-fill (inc k) by k
    (m/mmul (+
             (* J_k1k x*)
             (* (/ delta 2) (+ (m/mmul (- (* 2 B) J_k1k) D*) J_k1k)))
            P*)))

(defn test-model-1
  "f(X) = 2x_1 + x_2.

   Contrived so x1 has predictably greater sensitivity on x_1."
  [[_x_1 _x_2 :as v]]
  (let [coeff [[2 0] [0 1]]]
    (m/ereduce + (m/mmul coeff v))))

(def Ys (map #(test-model-1 %) (m/slices (B* 4 2)))) ;; rows of B* are input vectors
