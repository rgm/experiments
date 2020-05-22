(ns pso-test
  (:require
   [pso]
   [clojure.test :as t :refer [deftest testing is]]
   [taoensso.timbre :as timbre]
   [taoensso.tufte :as tufte :refer [profile]]))

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
    (let [
          arbiter             min
          f                   pso/parabowl
          starting-swarm-best {:x 0.5 :y 0}
          swarm               [{:current-pos {:x 1 :y 1}
                                :current-velocity {:x -0.25 :y -0.25}
                                :best-pos {:x ##Inf :y ##Inf}}]
          best-swarm-pos      (pso/get-best-position arbiter f
                                                 starting-swarm-best
                                                 swarm)
          expected            [{:current-pos {:x 0.75 :y 0.75}
                                :current-velocity {:x 1 :y 2}
                                :best-pos {:x 1 :y 1}}]
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
  (timbre/set-level! :warn)
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

(deftest find-optimum-test
  (timbre/set-level! :warn)
  (let [search-params {:epochs            3
                       :n-particles       3 ;; 2x the variables?
                       :cognitive-coeff   2 ;; attraction to particle's own best memory
                       :social-coeff      2 ;; exchange of info about swarm best between particles
                       :inertial-coeff-fn pso/declining-inertia
                       :arbiter           pso/safe-min ;; arbiter fn returns the 'best' from 2+ positions; aka. mappend
                       :empty-pos         {:x ##Inf :y ##Inf}} ;; aka. mempty
        function (fn [{:keys [x y] :as pos}] (timbre/info pos) (* x (Math/exp (- (+ (* x x) (* y y))))))]
    (is (= {:x -0.7071068, :y 0.0}
           (profile {} (pso/find-optimum search-params function))))))

(comment
  (pso/v+ {:x 1 :y 2} {:x 3 :y 4})
  (pso/v- {:x 1 :y 1} {:x 1 :y 1})
  (pso/v* 12 {:x 1 :y 12}))

