(ns rgm.core
  "https://en.wikipedia.org/wiki/Elementary_effects_method"
  (:refer-clojure :exclude [+ - * /])
  (:require
   [clojure.core.matrix.operators :as op :refer [+ - * /]]
   [clojure.core.matrix :as m]
   [taoensso.tufte :as tufte :refer [defnp p]]))

(defn make-delta
  "Produce a trajectory 'step'."
  [p]
  (/ p (* 2 (dec p))));; just a convenient choice per Saltelli p. 97

;; seedable random number generator, for test repeatability

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

;; matrix-based generation of trajectories

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

(defn make-D*
  "Make a random walk of adding or subtracting delta. Produces a diagonal
   matrix with 1 or -1 on the diagonal."
  ([k]
   (make-D* rand k))
  ([rand-fn k]
   (let [one-or-minus-one #(if (< (rand-fn) 0.5) 1 -1)]
     (m/diagonal-matrix (take k (repeatedly one-or-minus-one))))))

(defn make-x*
  "Take an initial guess to start a trajectory."
  ([p k]
   (make-x* rand p k))
  ([rand-fn p k]
   (let [make-rand-level #(int (* p (rand-fn)))
         xs (take k (repeatedly make-rand-level))]
     (map #(/ % (dec p)) xs))))

(defn B*
  "Orientation matrix. The rows are input vectors, generated to follow a
   trajectory where every next row varies from previous by a delta in only one
   input.

   `p` is 'granularity' of input range, `k` is number of model inputs.

   `ordering` ties what comes back out of reducing B* to elem effects to model
   inputs."
  ([p k]
   (B* rand p k (range k)))
  ([p k ordering]
   (B* rand p k ordering))
  ([rand-fn p k ordering]
   (let [delta (make-delta p) ;; convenient trajectory step, see middle of p97
         B     (make-B k)
         ; x*    (m/array [0 1/3]) ;; initial guess ... just pick someplace
         x*    (make-x* rand-fn p k)
         D*    (make-D* rand-fn k) ;; -1, 1 random on diagonal
         P*    (m/permutation-matrix ordering) ;; permutation-matrix; just identity w/o shuffling range
         J_k1k (m/fill
                (m/new-array [(inc k) k]) 1)] ;; ones-fill (inc k) by k
     (m/mmul (+
              (* J_k1k x*)
              (* (/ delta 2) (+ (m/mmul (- (* 2 B) J_k1k) D*) J_k1k)))
             P*))))

;; so each B*, if you take the slices as input vectors, varies from its
;; predecessor by delta in one of the inputs. Thus, taking any two in sequence
;; can yield an elementary effect. The permutation matrix determines *which*
;; input this is the elementary effect for.
; [[0.0 1.0] ;; => y = 1
;  [0.6666666666666666 1.0] ;; => y = 2.333
;  [0.6666666666666666 0.3333333333333333]] ;; => 1.667
;; so elem effect 1 is (1-2.333)/0.66 => 1.99-ish

(defnp calc-elementary-effect
  "Elementary effect is calculated by
   1. taking two input vectors that only differ in one x_i by delta,
   2. calculating their 'effect' (result of stuffing X into model -> Y),
   3. taking their difference as a ratio."
  [f delta X1 X2]
  (/ (- (f X2) (f X1)) delta))

(defn get-one-elem-effect-set
  "Produce a vector of one elementary effect per input."
  [p k f]
  (let [delta (make-delta p)
        ordering (shuffle (range k))
        orientation-matrix (B* p k ordering)
        Xs (m/slices orientation-matrix) ;; rows of B* are input vectors
        elem-effects (map (partial calc-elementary-effect f delta)
                          Xs
                          (drop 1 Xs))]
    ;; Every successive pair of input vectors (the rows) differ in one x_i, and
    ;; the shuffle determines which two. So if the permutation matrix is
    ;; identity, then the first and second rows differ in index 0, second and
    ;; third in index 1,..., etc. Tying them back to the ordering in a map labels
    ;; them correctly.
    (vals (into (sorted-map) (map vector ordering elem-effects)))))

;; * OTHER STUFF ... how to we connect get-one-elem-effect-set to the overall analysis?

;; * early guess at an API

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

