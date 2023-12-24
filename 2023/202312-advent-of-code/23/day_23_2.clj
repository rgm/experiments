(ns day-23-2
  "Still brute-force, but:
   - a graph suffices (not a digraph) since we don't have slides
   - the trick I stole from the reddit thread was to contract the graph into
   just weighted edges between intersections (ie. nodes with > 2 out edges),
   since these are the only decision points.

   Even so it's about 13 min to produce a result."
  (:require
   [clojure.pprint :as pp]
   [clojure.string :as str]
   [clojure.test :as t :refer [deftest is]]
   [ubergraph.alg :as alg]
   [ubergraph.core :as uber]))

(defn char-at [rows [x y]]
  (try (-> rows (nth y) (nth x))
       (catch IndexOutOfBoundsException _ nil)))

(defn on-path? [ch] (and ch (not= \# ch)))

(defn neighbours [mp [x y]]
  (let [pts (for [[dx dy] [[0 -1] [1 0] [0 1] [-1 0]]]
              [(+ x dx) (+ y dy)])]
    (->> pts
         (map (fn [pt] {:pt pt :ch (char-at mp pt)}))
         (filter (comp on-path? :ch)))))

(defn find-neighbours
  "Turn the trail map tm into a set of directed edges."
  [tm]
  (for [y (range (inc (count (first tm))))
        x (range (inc (count tm)))
        :let [pt [x y] ch (char-at tm pt)]
        :when (on-path? ch)]
    {:pt pt :ch ch :neighbours (neighbours tm pt)}))

(defn make-edges [{:keys [pt neighbours]}]
  (let [weight 1]
    (map (fn [{next-pt :pt}] [pt next-pt weight]) neighbours)))

(defn read-input [path]
  (->> (slurp path)
       (str/split-lines)
       find-neighbours
       (mapcat make-edges)
       (apply uber/graph)))

(defn find-all-paths
  "Finds all paths from node to target-node in a graph."
  [next-nodes-fn node target-node]
  (letfn [(dfs [path paths]
            (if (= (peek path) target-node)
              (conj paths path)
              (reduce
               (fn [acc next-node]
                 (if (not (some #{next-node} path))
                   (dfs (conj path next-node) acc)
                   acc))
               paths
               (next-nodes-fn (peek path)))))]
    (dfs [node] [])))

(defn compress-graph
  "Compress graph to just intersections, with weighted edges between them."
  [g]
  (let [sum-weights (fn [g edges]
                      (->> edges
                           (map #(uber/attr g % :weight))
                           (reduce +)))
        rf (fn [g node]
             (let [edges (uber/out-edges g node)]
               (if (not= 2 (count edges))
                 g
                 (let [dests (mapv :dest edges)
                       weight (sum-weights g edges)]
                   (-> g
                       (uber/remove-nodes node)
                       (uber/add-edges (conj dests weight)))))))]
    (reduce rf g (alg/pre-traverse g))))

(defn hike-length [g path]
  (let [node-pairs (partition 2 1 path)
        edges (map #(apply uber/find-edge g %) node-pairs)
        steps (map #(uber/attr g % :weight) edges)]
    (pp/pprint (map (fn [p w] {:path p :steps w}) node-pairs steps))
    (reduce + steps)))

(defn all-hikes [g start end]
  (find-all-paths (partial uber/successors g) start end))

(defn longest-hike [g start end]
  (some->> (all-hikes g start end)
           (sort-by (partial hike-length g))
           last))

(deftest test-longest-hike
  (let [g (compress-graph (read-input "test.txt"))
        hike (longest-hike g [1 0] [21 22])
        steps (hike-length g hike)]
    (is (= 154 steps))))

(comment
  (def g (read-input "test.txt"))
  (time (longest-hike g [1 0] [21 22]))
  (uber/pprint (compress-graph g))
  (uber/viz-graph g {:auto-label true})
  (def g2 (compress-graph (read-input "input.txt")))
  (uber/viz-graph g2 {:auto-label true
                      :save {:filename "input.dot" :format :dot}})
  (uber/pprint g2)
  (def hikes (time (all-hikes g2 [1 0] [139 140])))
  (time
   ; (out) "Elapsed time: 799421.29002 msecs"
   (hike-length g2 (longest-hike g2 [1 0] [139 140])))) ; 6334
