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
; (def B (m/array [[0 0] [1 0] [1 1]])) ;; triangular matrix
(def x* (m/array [0 1/3])) ;; initial guess
(def D* (m/array [[1 0] [0 -1]])) ;; -1, 1 on diagonal
(def P* (m/identity-matrix (inc k))) ;; permutation-matrix
(def J_k1k (m/array [[1 1] [1 1] [1 1]])) ;; ones-fill

(defn make-delta
  [p]
  (/ p (* 2 (dec p))));; just a convenient choice per Saltelli p. 97

(comment
  (make-delta 2)
  (make-delta 4)
  (make-delta 5)
  )

(defonce rng (new java.util.Random))

(defn set-random-seed!
  [seed]
  (.setSeed rng seed))

(defn my-rand
  []
  (.nextFloat rng))

(comment
  (set-random-seed! 1)
  (my-rand))

;; TODO
;; x make lower triangular B based on k
;; - make -1,1 D*
;; - make x*

(defn make-B
  "Strictly lower triangular (inc k) by k matrix with 1s.
   eg. (make-B 3) ;; => [[0 0 0] [1 0 0] [1 1 0] [1 1 1]]"
  [k]
  (let [n-rows           (inc k)
        n-cols           k
        ones             (repeat 1)
        zeroes           (repeat 0)
        make-row         (fn [i]
                           (take n-cols (concat (take i ones)
                                                zeroes)))
        rows             (for [m (range n-rows)] (make-row m))]
    (m/array rows)))

(defn B*
  "Orientation matrix.
   p is 'granularity' of input range, k is number of model inputs.

   ordering ties what comes back out of reducing B* to elem effects to model inputs."
  ([p k]
   (B* rand (range k) p k))
  ([rng-fn ordering p k]
   (let [delta (make-delta p) ;; convenient trajectory step, see middle of p97
         B     (make-B k)
         x*    (m/array [0 1/3]) ;; initial guess ... just pick someplace
         D*    (m/array [[1 0] [0 -1]]) ;; -1, 1 random on diagonal
         P*    (m/permutation-matrix ordering) ;; permutation-matrix; just identity w/o shuffling range
         J_k1k (m/array [[1 1] [1 1] [1 1]])] ;; ones-fill (inc k) by k
     (m/mmul (+
              (* J_k1k x*)
              (* (/ delta 2) (+ (m/mmul (- (* 2 B) J_k1k) D*) J_k1k)))
             P*))))

(defn test-model-1
  "f(X) = 2x_1 + x_2.

   Contrived so x1 has predictably greater sensitivity on x_1."
  [[_x_1 _x_2 :as v]]
  (let [coeff [[2 0] [0 1]]]
    (m/ereduce + (m/mmul coeff v))))

;; so each B*, if you take the slices as input vectors, varies from its
;; predecessor by delta in one of the inputs. Thus, taking any two in sequence
;; can yield an elementary effect. The permutation matrix determines *which*
;; input this is the elementary effect for.
; [[0.0 1.0] ;; => y = 1
;  [0.6666666666666666 1.0] ;; => y = 2.333
;  [0.6666666666666666 0.3333333333333333]] ;; => 1.667
;; so elem effect 1 is (1-2.333)/0.66 => 1.99-ish

(comment
  (/ (- 1 7/3) 2/3)
  (test-model-1 [0 1])
  (test-model-1 [2/3 1])
  (test-model-1 [2/3 1/3])
  (B* 1 [1 0] 4 2))

(let [f test-model-1
      Xs (m/slices (B* 4 2)) ;; rows of B* are input vectors
      Ys (map f Xs)
      delta 2/3
      pairs (map vector Ys (drop 1 Ys))
      ;; every B* yields k elementary effects ... how do you know which goes with which? By what went into the permutation matrix?
      elem-effects (map (comp #(/ % delta)
                              #(Math/abs %)
                              #(apply - %))
                        pairs)]
  elem-effects)
