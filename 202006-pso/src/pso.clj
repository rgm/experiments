(ns pso
  "Basic particle swarm optimization.

   See https://www.youtube.com/watch?v=JhgDMAm-imI

   TODO
   - clean up ##Inf messiness
   - add a fence ... bound the values of x,y so it can search a territory.
   - pass around coeffs as a single map; clean up the arglists
   "
  (:require
   [clojure.spec.alpha :as s]
   [taoensso.timbre :as timbre]
   [taoensso.tufte :as tufte :refer [defnp p]]))

;; * Test fns

;; z = x * exp(-(x^2 + y^2)) with known min at (-0.707, 0, -0.42)
;; https://www.youtube.com/watch?v=ckbdXbbNNNA

;; lots of others at https://en.wikipedia.org/wiki/Test_functions_for_optimization

(defn z [{:keys [x y]}] (* x (Math/exp (- (+ (* x x) (* y y))))))

(def Z-KNOWN-OPTIMUM {:x -0.7071068 :y 0.0})

(defn parabowl [{:keys [x y]}] (+ (* x x) (* y y)))

(def PARABOWL-KNOWN-OPTIMUM {:x 0.0 :y 0.0})

(comment
  (z Z-KNOWN-OPTIMUM) ;; => -0.4288819424803531
  (z {:x 1 :y 2})
  (z {:x ##Inf :y ##Inf})
  (parabowl {:x 1 :y 1}))

;; * Particles and swarms

(defn make-pos [] {:x (rand) :y (rand)})

(defn make-particle
  "Supply a bigger-than-everything empty-pos to ensure first pos is best.
   (or, duh, init best-pos to current-pos and avoid the ##Inf messiness)."
  ([] (make-particle (make-pos)))
  ([empty-pos] {:current-pos      (make-pos)
                :current-velocity {:x 0 :y 0}
                :best-pos         empty-pos}))

(defn make-swarm
  "A swarm is just a coll of particles."
  [empty-pos n]
  (repeatedly n #(make-particle empty-pos)))

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

(defnp update-velocity
  [inertial-coeff cognitive-coeff social-coeff best-swarm-pos
   particle]
  (let [next-velocity (get-next-velocity
                       inertial-coeff cognitive-coeff social-coeff
                       best-swarm-pos particle)]
    (assoc particle :current-velocity next-velocity)))

(defnp update-position
  [particle]
  (let [velocity (:current-velocity particle)]
    (update particle :current-pos (partial v+ velocity))))

(defnp update-best-position
  [arbiter f particle]
  (let [best-cost (f (:best-pos particle))
        current-cost (f (:current-pos particle))]
    (if (= current-cost (arbiter current-cost best-cost))
      (assoc particle :best-pos (:current-pos particle))
      particle)))

(defn advance-swarm
  "Update velocities, then positions, then designate a new best."
  [inertial-coeff cognitive-coeff social-coeff best-swarm-pos
   arbiter f
   swarm]
  (map (comp (partial update-best-position arbiter f)
             update-position
             (partial update-velocity inertial-coeff cognitive-coeff social-coeff
                      best-swarm-pos))
       swarm))

(defn constant-inertia
  [& _]
  0.9)

(defn declining-inertia
  "Make big for better exploration. Can reduce linearly over epochs
   0.9 -> 0.2 for convergence.

   Don't think this works well for the z test fn; it has too much z=0 to skate
   around on."
  [max-epochs epoch]
  (let [maximum 0.9
        minimum 0.2
        domain (- maximum minimum)
        progress (/ epoch max-epochs)]
    (+ minimum (* (- 1 progress) domain))))

(defn safe-min
  "JIC the infinity start plus objective fn makes things go nuts."
  [a b]
  (cond
    (Double/isNaN a) b
    (Double/isNaN b) a
    :else (min a b)))

(defn find-optimum
  "Swarm-search the solution space of fn `f` for a local optimum, based on an
   arbiter (eg. `min`).

   https://youtu.be/JhgDMAm-imI?t=777"
  [params f]
  {:pre [(s/valid? ::optimization-params params)]}
  (let [{:keys [inertial-coeff-fn cognitive-coeff social-coeff
                arbiter empty-pos
                n-epochs n-particles]} params]
    (loop [current-epoch  n-epochs
           swarm          (make-swarm empty-pos n-particles)
           best-swarm-pos empty-pos]
      (timbre/debug current-epoch best-swarm-pos)
      (if (<= current-epoch 0)
        best-swarm-pos
        (let [inertial-coeff (inertial-coeff-fn n-epochs current-epoch)
              swarm' (p ::advance-swarm
                        (advance-swarm inertial-coeff cognitive-coeff social-coeff
                                       best-swarm-pos
                                       arbiter f
                                       swarm))
              best-swarm-pos'(p ::get-best-position
                                (get-best-position arbiter f best-swarm-pos swarm'))]
          (timbre/trace current-epoch best-swarm-pos')
          (recur (dec current-epoch) swarm' best-swarm-pos'))))))

(s/def ::optimization-params (s/keys :req-un [::n-epochs
                                              ::n-particles
                                              ::inertial-coeff-fn
                                              ::social-coeff
                                              ::cognitive-coeff
                                              ::arbiter
                                              ::empty-pos]))
(s/def ::n-epochs pos-int?)
(s/def ::n-particles pos-int?)
;; inertial-coeff fn is max-epoch -> curr-epoch -> int-in 0, 2
(s/def ::cognitive-coeff (s/double-in {:min 0 :max 2})) ;; attraction to own memory of 'best'
(s/def ::social-coeff (s/double-in {:min 0 :max 2})) ;; influence of the swarm memory of 'best'
;; arbiter is pos -> pos -> pos ... pick the 'best'; mappend
;; empty-pos is a pos and is the global 'worst'; mempty
