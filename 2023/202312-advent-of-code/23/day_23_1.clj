(ns day-23-1
  "General approach: make a digraph joining points, use DFS to enumerate all
   paths, pick the longest. Needs to be a digraph to accommodate the slides."
  (:require
   [clojure.string :as str]
   [clojure.test :as t :refer [deftest is]]
   [ubergraph.core :as uber]))

;; a . has undirected edges to any adjacent node
;; a > has a directed edge only to the node it points to

(defn char-at [rows [x y]]
  (try (-> rows (nth y) (nth x)) (catch IndexOutOfBoundsException _ nil)))

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
        :let [pt [x y]
              ch (char-at tm pt)]
        :when (on-path? ch)]
    {:pt pt
     :ch ch
     :neighbours (neighbours tm pt)}))

(defn above? [[x1 y1] [x2 y2]] (and (= x1 x2) (< y2 y1)))
(defn below? [[x1 y1] [x2 y2]] (and (= x1 x2) (< y1 y2)))
(defn left?  [[x1 y1] [x2 y2]] (and (= y1 y2) (< x2 x1)))
(defn right? [[x1 y1] [x2 y2]] (and (= y1 y2) (< x1 x2)))

(deftest test-preds
  (is (above? [1 1] [1 0]))
  (is (below? [1 1] [1 2]))
  (is (left?  [1 1] [0 1]))
  (is (right? [1 1] [2 1])))

(defn make-edges [{:keys [pt ch neighbours]}]
  (let [direction? (case ch
                     \> right?
                     \v below?
                     \^ above?
                     \< left?
                     (constantly true))
        pred (comp (partial direction? pt) :pt)]
    (->> neighbours
         (filter pred)
         (map (fn [{next-pt :pt}] [pt next-pt])))))

(defn read-input [path]
  (->> (slurp path)
       (str/split-lines)
       find-neighbours
       (mapcat make-edges)
       (apply uber/digraph)))

(defn find-all-paths
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

(defn longest-hike-length [g start end]
  (->> (find-all-paths (partial uber/successors g) start end)
       (map count)
       (apply max)
       ;; path len is number of nodes minus 1
       (dec)))

(deftest test-longest-hike
  (is (= 94 (longest-hike-length (read-input "test.txt") [1 0] [21 22]))))

(comment
  (def g (read-input "test.txt"))
  (uber/pprint g)
  (uber/viz-graph g {:save {:filename "test.dot" :format :dot}})
  (time (longest-hike-length g [1 0] [21 22]))

  (def g2 (read-input "input.txt"))
  (uber/viz-graph g2 {:save {:filename "input.dot" :format :dot}})
  (time
   ; (out) "Elapsed time: 15985.59875 msecs"
   (longest-hike-length g2 [1 0] [139 140]))) ; 2162
