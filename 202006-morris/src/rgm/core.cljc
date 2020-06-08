(ns rgm.core
  "https://en.wikipedia.org/wiki/Elementary_effects_method"
  (:refer-clojure :exclude [+ - * /])
  (:require
   [clojure.core.matrix.operators :as op :refer [+ - * /]]
   [clojure.core.matrix :as m]
   [taoensso.tufte :as tufte :refer [defnp p]]))

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
; (def p 4) ;; num samples
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

(comment
  (make-x* 4 2)
  (make-x* 5 15))

(defn B*
  "Orientation matrix.
   p is 'granularity' of input range, k is number of model inputs.

   ordering ties what comes back out of reducing B* to elem effects to model inputs."
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

(defn test-model-1
  "f(X) = 2x_1 + x_2.

   Contrived so x1 has predictably greater sensitivity on x_1."
  [[_x_1 _x_2 :as v]]
  (let [coeff [[2 0] [0 1]]]
    (m/ereduce + (m/mmul coeff v))))

(defn test-model-2
  "f(X) = 2x_1 + x_2.

   Contrived so x1 has predictably greater sensitivity on x_1."
  [v]
  (let [coeff [[3 0] [0 1]]]
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
      k 2
      p 4
      r 4
      orderings (take r (repeatedly #(shuffle (range k))))
      orientation-matrices (map #(B* p k %) orderings)
      Xs (m/slices (B* p k)) ;; rows of B* are input vectors
      Ys (map f Xs)
      delta 2/3
      pairs (map vector Ys (drop 1 Ys))
      ;; every B* yields k elementary effects ... how do you know which goes with which? By what went into the permutation matrix?
      elem-effects (map (comp #(/ % delta)
                              #(Math/abs %)
                              #(apply - %))
                        pairs)]
  elem-effects)

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

(defnp calc-elementary-effect
  "Elementary effect is calculated by
   1. taking two input vectors that only differ in one x_i by delta,
   2. calculating their 'effect' (result of stuffing X into model -> Y),
   3. taking their difference as a ratio."
  [f delta X1 X2]
  (/ (- (f X1) (f X2)) delta))

(defn get-one-elem-effect-set
  [p k f]
  (let [ordering (shuffle (range k))
        orientation-matrix (B* p k ordering)
        Xs (m/slices orientation-matrix) ;; rows of B* are input vectors
        ; Ys (map f Xs)
        delta (make-delta p)
        ;; every B* yields k elementary effects ... how do you know which
        ;; goes with which? By what went into the permutation matrix?
        elem-effects (map (partial calc-elementary-effect f delta)
                          Xs
                          (drop 1 Xs))]
    (into (sorted-map) (map vector
                            ordering
                            elem-effects))))

(comment
  (tufte/profile {} (get-one-elem-effect-set 10 20 test-model-3))
  (let [r 12]
    (take r (repeatedly #(get-one-elem-effect-set 10 2 test-model-2))))
  )
