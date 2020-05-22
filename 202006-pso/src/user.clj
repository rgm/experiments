(ns user
  "Basic particle swarm optimization.

   See https://www.youtube.com/watch?v=JhgDMAm-imI
   "
  (:require
   [clojure.test :as t :refer [deftest testing is]]
   [taoensso.timbre :as timbre]
   [taoensso.tufte :as tufte :refer [defnp p]]))

;; * Test fn

;; z = x * exp(-(x^2 + y^2)) with known min at (-0.707, 0, -0.42)
;; https://www.youtube.com/watch?v=ckbdXbbNNNA

(def KNOWN-OPTIMUM {:x -0.7071068 :y 0.0})

(defn z [{:keys [x y]}] (* x (Math/exp (- (+ (* x x) (* y y))))))

(comment
  (z KNOWN-OPTIMUM) ;; => -0.4288819424803531
  )

;; * Cost function

(defn better?
  "Is a 'better' than b? Cost function is just taking minimum."
  [f position-a position-b]
  (< (f position-a) (f position-b)))

;; * Particles and swarms

(defn make-particle
  []
  {:x (rand) :y (rand)})

(defn make-swarm
  [n]
  (->> (repeat make-particle) (take n) (map apply) (set)))

(comment
  (make-particle)
  (make-swarm 5)
  (make-swarm 100))

(def *swarm-best-position (atom {:x 0 :y 0}))

(def *swarm (atom #{}))

;; * vector arithmetic

(defn v+
  [& vs]
  (reduce (fn [sum v] (merge-with + sum v)) {:x 0 :y 0} vs))

(defn v-
  [v1 v2]
  (merge-with - v1 v2))

(defn v*
  [scalar v]
  (reduce (fn [v' [k v]] (assoc v' k (* scalar v))) {} v))

(comment
  (v+ {:x 1 :y 2} {:x 3 :y 4})
  (v- {:x 1 :y 1} {:x 1 :y 1})
  (v* 12 {:x 1 :y 12}))

;; ** Algorithm

(defn inertia
  "in [0, ]. Make big for better exploration. Can reduce linearly over epochs
   0.9 -> 0.2 for convergence."
  ([] 0.6)
  ([max-epochs epoch] 0.9))

(def COGNITIVE-COEFFICIENT
  "attraction to particle's own memory"
  2)

(def SOCIAL-COEFFICIENT
  "exchange of info between particles"
  2)

(defn get-next-velocity
  "https://youtu.be/JhgDMAm-imI?t=572"
  [{:coefficient/keys [inertial cognitive social]}
   {:pos/keys [best-swarm best-particle]}
   current-velocity current-position]
  (let [r1 (rand), r2 (rand), r3 (rand)]
    (v+ (v* (* r1 inertial)  current-velocity)
        (v* (* r2 cognitive) (v- best-particle current-position))
        (v* (* r3 social)    (v- best-swarm current-position)))))

(comment
  (get-next-velocity {:coefficient/inertial 0.9
                      :coefficient/cognitive 2
                      :coefficient/social 2}
                     {:pos/best-swarm {:x 0 :y 0}
                      :pos/best-particle {:x 0 :y 0}}
                     {:x 1 :y 1}
                     {:x 1 :y 1}))

(defn find-optimum
  "https://youtu.be/JhgDMAm-imI?t=777"
  [params f])

(deftest find-optimum-test
  (let [search-params {:max-epochs 5000
                       :cognitive-coeff 2
                       :social-coeff 2
                       :swarm-size 10
                       :inertia-fn inertia}
        function (fn [{:keys [x y]}]
                   (* x (Math/exp (- (+ (* x x) (* y y)))))) ]
    (is (= {:x -0.7071068, :y 0.0}
           (find-optimum search-params function)))))
