(ns engine-test
  (:require
   [clojure.test :as t :refer [deftest testing is]]
   [clojure.walk :as w]
   [engine :as e]
   [matcher-combinators.matchers :as m]
   [matcher-combinators.test]))

(defn within-eps
  "Loosens up the number comparisons in a map for float overslop."
  ([m] (within-eps 1e-3 m))
  ([eps m] (w/postwalk (fn [x] (if (number? x) (m/within-delta eps x) x)) m)))

(deftest add-test
  (let [G (-> (e/empty-graph)
              (e/val-node :a 2.0)
              (e/val-node :b -3.0)
              (e/sum-node :c :a :b))
        expected {:a {:data 2.0 :grad 1.0}
                  :b {:data -3.0 :grad 1.0}
                  :c {:op '+ :data -1.0 :grad 1.0}}]
    (is (match? (within-eps expected) (:attrs (e/backward-pass G :c))))))

(deftest pow-test
  (let [G (-> (e/empty-graph)
              (e/val-node :a 2.0)
              (e/pow-node :c :a 3))
        expected {:a {:data 2.0 :grad 12.0}
                  :c {:op 'pow :data 8.0 :grad 1.0}}]
    (is (match? (within-eps expected) (:attrs (e/backward-pass G :c))))))

(deftest two-tanh-test
  (let [expected (within-eps {:n {:data 0.8814 :grad 0.5}
                              :o {:data 0.707106 :grad 1.0}})]
    (testing "one-step tanh"
      (let [G (-> (e/empty-graph)
                  (e/val-node :n 0.8814)
                  (e/tanh-node :o :n)
                  (e/backward-pass :o))]
        (is (match? expected (:attrs G)))))

    (testing "multi-step tanh"
      (let [G (-> (e/empty-graph)
                  (e/val-node :n 0.8814)
                  (e/val-node :2 2)
                  (e/mul-node :2n :2 :n)
                  (e/exp-node :e :2n)
                  (e/val-node :plus-one 1)
                  (e/val-node :minus-one -1)
                  (e/sum-node :numer :e :minus-one)
                  (e/sum-node :denom :e :plus-one)
                  (e/pow-node :inv-denom :denom -1)
                  (e/mul-node :o :numer :inv-denom)
                  (e/backward-pass :o))]
        (is (match? expected (:attrs G)))))))

#_(deftest bug-test
  ;; still has that accumulator bug @ 1h23
    (let [G (-> (e/empty-graph)
                (e/value-node :a 2.0)
                (e/add-node :c :a :a))
          expected {:a {:data 2.0 :grad 2.0}
                    :c {:op '+ :data 4.0 :grad 1.0}}]
      (is (match? (within-eps expected) (:attrs (e/backward G :c))))))

(def neuron
  (-> (e/empty-graph)
      (e/val-node  :x1       2.0)
      (e/val-node  :w1       -3.0)
      (e/val-node  :x2       0.0)
      (e/val-node  :w2       1.0)
      (e/mul-node  :x1w1     :x1 :w1)
      (e/mul-node  :x2w2     :x2 :w2)
      (e/sum-node  :x1w1x2w2 :x1w1 :x2w2)
      (e/val-node  :bias     6.881373)
      (e/sum-node  :n        :x1w1x2w2 :bias)
      (e/tanh-node :out      :n)))

(deftest neuron-test
  (let [expected (within-eps
                  {:x1       {:data  2.0       :grad -1.5}
                   :w1       {:data -3.0       :grad  1.0}
                   :x2       {:data  0.0       :grad  0.5}
                   :w2       {:data  1.0       :grad  0.0}
                   :x1w1     {:data -6.0       :grad  0.5 :op '*}
                   :x2w2     {:data -0.0       :grad  0.5 :op '*}
                   :x1w1x2w2 {:data -6.0       :grad  0.5 :op '+}
                   :bias     {:data  6.881373  :grad  0.5}
                   :n        {:data  0.881373  :grad  0.5 :op '+}
                   :out      {:data  0.707106  :grad  1.0 :op 'tanh}})]
    (is (match? expected (:attrs (e/backward-pass neuron :out))))))

(comment
  (require '[ubergraph.core :as u])
  (u/viz-graph (:attrs (e/backward-pass neuron :out 1.0)) {:auto-label true}))
