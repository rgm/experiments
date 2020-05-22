(ns pso
  "Basic particle swarm optimization.

   See https://www.youtube.com/watch?v=JhgDMAm-imI
   "
  (:require
   [taoensso.timbre :as timbre]
   [taoensso.tufte :as tufte :refer [profile p]]))

(tufte/add-basic-println-handler! {})

;; * Test fn

;; z = x * exp(-(x^2 + y^2)) with known min at (-0.707, 0, -0.42)
;; https://www.youtube.com/watch?v=ckbdXbbNNNA

(def KNOWN-OPTIMUM {:x -0.7071068 :y 0.0})

(defn z [{:keys [x y]}] (* x (Math/exp (- (+ (* x x) (* y y))))))

(comment
  (z KNOWN-OPTIMUM) ;; => -0.4288819424803531
  )

;; * Particles and swarms

(defn make-pos [] {:x (rand) :y (rand)})

(defn make-particle
  "Supply a bigger-than-everything empty-pos to ensure first pos is best.
   (or, duh, init best-pos to current-pos)."
  ([] (make-particle (make-pos)))
  ([empty-pos] {:current-pos      (make-pos)
                :current-velocity (make-pos)
                :best-pos         empty-pos}))

(defn make-swarm
  [empty-pos n]
  (repeatedly n #(make-particle empty-pos)))

(def *swarm-best-position (atom {:x 0 :y 0}))

;; * vector arithmetic

(defn v+ [& vs] (reduce (fn [sum v] (merge-with + sum v)) {:x 0 :y 0} vs))

(defn v- [v1 v2] (merge-with - v1 v2))

(defn v* [scalar v] (reduce (fn [v' [k v]] (assoc v' k (* scalar v))) {} v))

;; * Swarm algorithm

(def ^:dynamic *make-random* rand) ;; dynamic for rebinding in tests

(defn get-next-velocity
  "https://youtu.be/JhgDMAm-imI?t=572"
  [inertial-coeff cognitive-coeff social-coeff best-swarm-pos
   particle]
  (let [r1 (*make-random*), r2 (*make-random*), r3 (*make-random*)
        {:keys [current-velocity best-pos current-pos]} particle]
    (v+ (v* (* r1 inertial-coeff)  current-velocity)
        (v* (* r2 cognitive-coeff) (v- best-pos current-pos))
        (v* (* r3 social-coeff)    (v- best-swarm-pos current-pos)))))


(defn get-next-position
  [pos velocity]
  (v+ pos velocity))

(defn get-best-position
  [arbiter f best-pos particles]
  (reduce (fn [best-pos particle]
            (let [candidate-pos  (:current-pos particle)
                  best-cost      (f best-pos)
                  candidate-cost (f candidate-pos)]
              (if (= candidate-cost (arbiter candidate-cost best-cost))
                candidate-pos
                best-pos)))
          best-pos particles))

(defn advance-swarm
  [inertial-coeff cognitive-coeff social-coeff best-swarm-pos
   arbiter f
   swarm]
  swarm)

(defn parabowl
  [{:keys [x y]}]
  (+ (* x x) (* y y)))

(defn constant-inertia
  []
  0.9)

(defn declining-inertia
  "in [0, ]. Make big for better exploration. Can reduce linearly over epochs
   0.9 -> 0.2 for convergence."
  [max-epochs epoch]
  0.9)

(defn safe-min
  "JIC the infinity start plus objective fn makes things go nuts."
  [a b]
  (cond
    (Double/isNaN a) b
    (Double/isNaN b) a
    :else (min a b)))

(comment
  (z {:x 1 :y 2})
  (z {:x ##Inf :y ##Inf})
  )

(defn find-optimum
  "
  search-params: {:epochs            3
   :n-particles       3 ;; 2x the variables?
   :cognitive-coeff   2 ;; attraction to particle's own best memory
   :social-coeff      2 ;; exchange of info about swarm best between particles
   :inertial-coeff-fn pso/declining-inertia
   :arbiter           pso/safe-min ;; arbiter fn returns the 'best' from 2+ positions; aka. mappend
   :empty-pos         {:x ##Inf :y ##Inf}} ;; aka. mempty

  (huh, arbiter + empty-pos turn out to be a monoid).
   https://youtu.be/JhgDMAm-imI?t=777"
  [params f]
  (let [{:keys [cognitive-coeff social-coeff inertial-coeff-fn
                arbiter empty-pos epochs n-particles]} params]
    (loop [current-epoch  epochs
           swarm          (make-swarm empty-pos n-particles)
           best-swarm-pos empty-pos]
      (if (<= current-epoch 0)
        best-swarm-pos
        (let [inertial-coeff (inertial-coeff-fn epochs current-epoch)
              swarm' (advance-swarm inertial-coeff cognitive-coeff social-coeff
                                    arbiter f
                                    best-swarm-pos
                                    swarm)
              best-swarm-pos' (get-best-position arbiter f best-swarm-pos swarm')]
          (timbre/debug current-epoch best-swarm-pos')
          (recur (dec current-epoch) swarm' best-swarm-pos'))))))
