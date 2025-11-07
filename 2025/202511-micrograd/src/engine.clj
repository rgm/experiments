(ns engine
  "Implement backpropagation per https://www.youtube.com/watch?v=VMj-3S1tku0

  After backpropagation, :grad attribute gives the effect of a unit change in the value
  of this digraph node on the last node (by topo sort): eg. :grad of 2.0
  implies that if the :data is increased by +1.0, then the last node will
  increase by +2.0."
  (:require
   [ubergraph.alg :as alg]
   [ubergraph.core :as u]))

;; need - implement explicit `forward` ??

(def empty-graph u/multidigraph) ;; need multi for eg (+ a a)

(defmulti step-backward
  "Apply chain rule one step backwards in the graph."
  (fn [G a] (u/attr G a :op)))

(defn val-node [G a n]
  (u/add-nodes-with-attrs G [a {:data n :grad 0}]))

(defmethod step-backward nil [G _] G) ;; no-op if, well, ... no :op

(defn sum-node [G out a b]
  (let [node-val (+ (u/attr G a :data) (u/attr G b :data))]
    (-> (u/add-edges G [a out] [b out])
        (u/set-attrs out {:op '+ :data node-val :grad 0}))))

(defmethod step-backward '+ [G c]
  (let [[a b] (map :src (u/in-edges G c))
        grad (u/attr G c :grad)]
    (-> G
        (u/add-attrs a {:grad (+ (u/attr G a :grad) (* 1.0 grad))})
        (u/add-attrs b {:grad (+ (u/attr G b :grad) (* 1.0 grad))}))))

(defn mul-node [G out a b]
  (let [node-val (* (u/attr G a :data) (u/attr G b :data))]
    (-> (u/add-edges G [a out] [b out])
        (u/set-attrs out {:op '* :data node-val :grad 0}))))

(defmethod step-backward '* [G c]
  (let [[a b] (map :src (u/in-edges G c))
        grad (u/attr G c :grad)]
    (-> G
        (u/add-attrs a {:grad (+ (u/attr G a :grad) (* (u/attr G b :data) grad))})
        (u/add-attrs b {:grad (+ (u/attr G b :grad) (* (u/attr G a :data) grad))}))))

(defn -tanh [x] (let [e (Math/exp (* 2 x))] (/ (- e 1) (+ e 1))))

(defn tanh-node [G out a]
  (let [node-val (-tanh (u/attr G a :data))]
    (-> (u/add-edges G [a out])
        (u/set-attrs out {:op 'tanh :data node-val :grad 0}))))

(defmethod step-backward 'tanh [G c]
  (let [[a] (map :src (u/in-edges G c))
        grad (u/attr G c :grad)
        node-val (u/attr G c :data)]
    (-> G
        (u/add-attrs a {:grad (+ (u/attr G a :grad) (* (- 1 (* node-val node-val))
                                                       grad))}))))

(defn exp-node [G out a]
  (let [node-val (Math/exp (u/attr G a :data))]
    (-> (u/add-edges G [a out])
        (u/set-attrs out {:op 'exp :data node-val :grad 0}))))

(defmethod step-backward 'exp [G c]
  (let [[a] (map :src (u/in-edges G c))
        grad (u/attr G c :grad)
        node-val (u/attr G c :data)]
    (-> G
        (u/add-attrs a {:grad (+ (u/attr G a :grad) (* node-val grad))}))))

(defn pow-node [G out a n]
  (assert (number? n))
  (let [node-val (Math/pow (u/attr G a :data) n)]
    (-> (u/add-edges G [a out])
        (u/set-attrs out {:op 'pow :ctx {:exponent n} :data node-val :grad 0}))))

(defmethod step-backward 'pow [G c]
  (let [[a] (map :src (u/in-edges G c))
        grad (u/attr G c :grad)
        exponent (:exponent (u/attr G c :ctx))]
    (-> G
        (u/add-attrs a {:grad (+ (u/attr G a :grad)
                                 (* exponent (Math/pow (u/attr G a :data)
                                                       (dec exponent))
                                    grad))}))))

(defn backward-pass
  ([G c] (backward-pass G c 1.0))
  ([G c initial-grad]
   (let [ks (reverse (alg/topsort G))
         G' (u/add-attrs G c {:grad initial-grad})]
     (reduce (fn [acc k] (step-backward acc k)) G' ks))))
