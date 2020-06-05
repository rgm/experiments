(ns rgm.core
  "https://en.wikipedia.org/wiki/Elementary_effects_method"
  (:require
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
  (m/fill (m/new-matrix 2 2) 1)
  (m/compute-matrix [3 2] (constantly 1))
  (let [k 2] (m/identity-matrix (inc k) k))
  (m/shape [1 1])
  (m/shape [1 1 3])
  (morris-sample {:bounds {:x1 [-1 1] :x2 [-2 2]}}))
