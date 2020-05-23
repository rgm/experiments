(ns pso-test
  (:require
   [pso]
   [clojure.test :as t :refer [deftest testing is]]
   [taoensso.timbre :as timbre]
   [taoensso.tufte :as tufte :refer [p profile]]))

(tufte/add-basic-println-handler! {})
; (timbre/set-level! :warn)
(timbre/set-level! :debug)

(deftest get-next-velocity-test
  (testing "velocity+inertia only"
    (let [particle {:current-pos      {:x 0 :y 0}
                    :current-velocity {:x 1 :y 1}
                    :best-pos         {:x 2 :y 2}}
          best-swarm-pos {:x 3 :y 3}
          actual (binding [pso/*make-random* (constantly 1)]
                   (pso/get-next-velocity 1 0 0 best-swarm-pos particle))]
      (is (= {:x 1 :y 1} actual))))
  (testing "cognitive + my best only"
    (let [particle {:current-pos      {:x 0 :y 0}
                    :current-velocity {:x 1 :y 1}
                    :best-pos         {:x 2 :y 2}}
          best-swarm-pos {:x 3 :y 3}
          actual (binding [pso/*make-random* (constantly 1)]
                   (pso/get-next-velocity 0 1 0 best-swarm-pos particle))]
      (is (= {:x 2 :y 2} actual))))
  (testing "social + swarm best only"
    (let [particle {:current-pos      {:x 0 :y 0}
                    :current-velocity {:x 1 :y 1}
                    :best-pos         {:x 2 :y 2}}
          best-swarm-pos {:x 3 :y 3}
          actual (binding [pso/*make-random* (constantly 1)]
                   (pso/get-next-velocity 0 0 1 best-swarm-pos particle))]
      (is (= {:x 3 :y 3} actual))))
  (testing "all three together"
    ;; 2,2 =inertia=> 0.5,0.5 =cognitive=> 0.5,1 =social=> 1,1
    (let [particle {:current-pos      {:x 2 :y 2}
                    :current-velocity {:x -1 :y -1}
                    :best-pos         {:x 2 :y 1}}
          best-swarm-pos {:x 1 :y 2}
          actual (binding [pso/*make-random* (constantly 1)]
                   (pso/get-next-velocity 1 1 1 best-swarm-pos particle))]
      (is (= {:x -2 :y -2} actual))))
  (testing "all three together"
    ;; 0,0 =inertia=> 0.5,0.5 =cognitive=> 0.5,1 =social=> 1,1
    (let [particle {:current-pos      {:x 0 :y 0}
                    :current-velocity {:x 1 :y 1}
                    :best-pos         {:x 0 :y 1}}
          best-swarm-pos {:x 1 :y 0}
          actual (binding [pso/*make-random* (constantly 0.5)]
                   (pso/get-next-velocity 1 1 1 best-swarm-pos particle))]
      (is (= {:x 1.0 :y 1.0} actual)))))

(deftest advance-swarm-test
  (binding [pso/*make-random* (constantly 1)]
    (let [arbiter             min
          f                   pso/parabowl
          swarm               [{:current-pos      {:x  2 :y  2}
                                :current-velocity {:x -1 :y -1}
                                :best-pos         {:x  2 :y  1}}]
          best-swarm-pos                          {:x  1 :y  2}
          expected            [{:current-pos      {:x  0 :y  0}
                                :current-velocity {:x -2 :y -2}
                                :best-pos         {:x  0 :y  0}}]
          actual              (pso/advance-swarm 1 1 1
                                                 best-swarm-pos
                                                 arbiter f
                                                 swarm)]
      (is (= expected actual)))))

(deftest safe-min-test
  (is (= 2 (pso/safe-min ##NaN 2)))
  (is (= 2 (pso/safe-min 2 ##NaN)))
  (is (= ##NaN (pso/safe-min ##NaN ##NaN))))

(deftest get-best-position-test
  (let [f (fn [{:keys [x y]}] (+ x y))
        particles [{:current-pos {:x 0.23, :y 0.53}}
                   {:current-pos {:x 0.17, :y 0.11}}
                   {:current-pos {:x 0.26, :y 0.04}}]]
    (is (= {:x 0.17, :y 0.11}
           (pso/get-best-position min f {:x ##Inf :y ##Inf} particles)))
    (is (= {:x 0.23, :y 0.53}
           (pso/get-best-position max f {:x ##-Inf :y ##-Inf} particles)))
    (is (= {:x 0.17, :y 0.11}
           (pso/get-best-position min f {:x ##Inf :y ##Inf} particles)))
    (is (= {:x 0.17, :y 0.11}
           (pso/get-best-position pso/safe-min f {:x ##NaN :y ##NaN} particles)))))

(defn equalish [a b] (< (- (Math/abs a) (Math/abs b)) 1e-4))

(defn position-equalish [a b] (and (equalish (:x a) (:x b))
                                   (equalish (:y a) (:y b))))

(deftest declining-inertia-test
  (is (equalish 0.9  (pso/declining-inertia 10 0)))
  (is (equalish 0.55 (pso/declining-inertia 10 5)))
  (is (equalish 0.2  (pso/declining-inertia 10 10))))

(deftest find-optimum-test
  (let [search-params {:n-epochs          100
                       :n-particles       1000
                       :inertial-coeff-fn pso/declining-inertia
                       :cognitive-coeff   2
                       :social-coeff      2
                       :arbiter           pso/safe-min
                       :empty-pos         {:x 1 :y 1}}
        cost-surface  (fn [{:keys [x y]}]
                        ;; in practice, MEMOIZE THIS
                        (p ::cost-surface
                           (* x (Math/exp (- (+ (* x x) (* y y)))))))
        expected      {:x -0.7071068, :y 0.0}
        actual        (profile {} (pso/find-optimum search-params
                                                    cost-surface))]
    (is (position-equalish expected actual))))

(comment
  (pso/z {:x 29.44439248206086, :y 32.17920176497843}) ;; => 0 ... came from a failing test
  ;; ... seems to be a cliff where fn falls to 0 and particles just skate
  ;; around directionlessly til epochs expire, depending on initial conditions
  (pso/z {:x 28, :y 33}) ;; => 0
  (pso/v+ {:x 1 :y 2} {:x 3 :y 4})
  (pso/v- {:x 1 :y 1} {:x 1 :y 1})
  (pso/v* 12 {:x 1 :y 12}))
