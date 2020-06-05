(ns rgm.core-test
  (:require
   [rgm.core :as sut]

   [clojure.core.matrix :as m]
   [clojure.test :as t :refer [deftest testing is]]
   [taoensso.tufte :as tufte :refer [defnp p]]))

(defn test-model-1
  "f(X) = 2x_1 + x_2.

   Contrived so x1 has predictably greater sensitivity on x_1."
  [[_x_1 _x_2 :as v]]
  (let [coeff [[2 0] [0 1]]]
    (m/esum (m/mmul coeff v))))

(comment
  (test-model-1 [1 2])
  (test-model-1 [1 1])
  (test-model-1 [2 1]))

(defn equalish [a b] (< (- (Math/abs a) (Math/abs b)) 1e-4))

(deftest sample-test
  (let [problem  {:bounds {:x1 [-10 10]
                           :x2 [-10 10]}
                  :levels 4
                  :samples 10}
        Xs       (sut/morris-sample problem)
        Ys       (sut/predict test-model-1 Xs)
        expected {:mu      {:x1 1 :x2 0}
                  :mu-star {:x1 1 :x2 0}
                  :sigma   0}
        actual   (sut/morris-analyze problem Xs Ys)]
    (is (equalish (:mu expected) (:mu actual)))
    (is (equalish (:mu-star expected) (:mu-star actual)))
    (is (equalish (:sigma expected) (:sigma actual)))))
