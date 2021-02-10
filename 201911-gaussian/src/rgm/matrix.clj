(ns rgm.matrix
  (:require [clojure.core.matrix :as m]
            [clojure.core.matrix.protocols :as mp])
  (:import [java.util Random]))

; https://web.archive.org/web/20160304031820/https://www.yieldbot.com/blog/gaussian-processes-with-clojure/

(m/set-current-implementation :vectorz)

(defn sample-gaussian [n]
  (let [rng (Random.)]
    (repeatedly n #(.nextGaussian rng))))

(defn sample-multivariate-gaussian [mean cov]
  (let [n (count mean)
        e (m/scale (m/identity-matrix n) 1e-8)
        L (:L (mp/cholesky (m/add (m/matrix cov) e)
                           {:results [:L]}))
        u (m/matrix (sample-gaussian n))
        samples (m/add (m/matrix mean)
                       (m/mmul L u))]
    (m/to-nested-vectors samples)))

(comment
 (sample-gaussian 12)
 (sample-multivariate-gaussian (range 5) [5 12])
 
 )

(def test-xs (range -5 5 0.03))

(defn squared-exponential [sigma2 lambda x y]
  (* sigma2 (Math/exp (* -0.5 (Math/pow (/ (- x y) lambda) 2)))))

(defn covariance-mat [f xs ys]
  (let [rows (count xs)
        cols (count ys)]
    (partition cols
      (for [i (range rows) j (range cols)]
        (f (nth xs i) (nth ys j))))))

(defn sq-exp-cov [s2 l xs ys]
  (covariance-mat (partial squared-exponential s2 l) xs ys))

(def prior-mean (repeat (count test-xs) 0.0))
(def prior-cov (sq-exp-cov 1 1 test-xs test-xs))

(comment
 (covariance-mat (fn [x y] (* x y)) (range 5) (range 5))

 (sample-multivariate-gaussian prior-mean prior-cov)

 )

