(ns day-3-2
  "https://adventofcode.com/2023/day/3"
  (:require
   [clojure.java.io :as io]
   [clojure.set :as set]
   [clojure.test :as t :refer [deftest is]]))

(defn read-schematic [path] (with-open [r (io/reader path)] (vec (line-seq r))))

(def digit? (comp boolean (set "0123456789")))

(def sym? (complement  (comp boolean (set ".0123456789"))))

(defn char-type [c] (cond
                      (digit? c) :digit
                      (sym? c)   :sym
                      :else      :period))

;; CAD-inspired solution where I lift the schematic into tokens (int, symbol),
;; recording the set of points they cover, then do boolean ops treating the
;; "neighbourhood" as a 1pt offset.

(defn get-neighbour-pts
  "A point has 8 neighbours. "
  [[x y]]
  ;; (I don't care about the schematic bounds at all because off-board
  ;; positions won't set/intersect, which is fine).
  (for [dx [-1 0 1] dy [-1 0 1]
        :let [x' (+ x dx) y' (+ y dy)]
        :when (not= [dx dy] [0 0])]
    [x' y']))

(defn neighbourhood [pts]
  (apply set/union (map (comp set get-neighbour-pts) pts)))

(defn overlaps? [pts-a pts-b]
  (boolean (seq (set/intersection (set pts-a) (set pts-b)))))

(defn schematic->ms [schematic]
  (let [read-line (fn [y s] (map-indexed (fn [x c] {:c c :pts #{[x y]}}) s))]
    (map-indexed read-line schematic)))

(defn tokenize
  "Turn schematic into a seq of ms [{:s \"423\" :n 423 :pts #{pt1 pt2 ,,,}}]"
  [schematic]
  (let [coalesce (fn [ms] ;; turn a seq of chars into a bigger covered area
                   (reduce (fn [acc {:keys [c pts]}]
                             (-> acc
                                 (update :s (fnil conj []) c)
                                 (update :pts (fnil set/union #{}) pts)))
                           {}
                           ms))
        chunk-line (fn [ms] ;; turn line into seqs of related chars
                     (->> ms
                          (partition-by (comp char-type :c))
                          (map coalesce)
                          (map #(update % :s (fn [cs] (apply str cs))))
                          (map (fn [m] ;; parse any numbers we get
                                 (if-let [n (parse-long (:s m))]
                                   (assoc m :n n)
                                   m)))))]
    (->> schematic
         (schematic->ms)
         (mapcat chunk-line))))

(defn find-gears [schematic]
  (let [tokens (->> (tokenize schematic)
                    (remove (fn [{s :s}] (every? #{\.} s))))
        ops (filter #(= (:s %) "*") tokens)
        nhoods (map (comp neighbourhood :pts) ops)
        gears (->> nhoods
                   (map (fn [nhood] (->> tokens
                                         (filter #(overlaps? nhood (:pts %)))
                                         (filter #(number? (:n %)))
                                         (map :n))))
                   (filter #(= (count %) 2)))]
    gears))

(defn sum-gear-ratios [schematic]
  (let [gears (find-gears schematic)]
    (->> gears (map #(reduce * %)) (reduce +))))

; tests {{{

(deftest test-sym?
  (is (not (sym? \1)))
  (is (not (sym? \.)))
  (is (sym? \$)))

(deftest test-overlap
  (let [tokens (tokenize (read-schematic "test1.txt"))
        a (nth tokens 0)
        b (nth tokens 5)
        na (-> a :pts neighbourhood)
        nb (-> b :pts)]
    (is (overlaps? na nb))))

(deftest test-find-gears
  (let [schematic (read-schematic "test1.txt")]
    (is (= [[467 35] [755 598]]
           (find-gears schematic)))))

(deftest test-sum-gear-ratios
  (is (= 467835 (sum-gear-ratios (read-schematic "test1.txt")))))

; }}}

(comment
  (sum-gear-ratios (read-schematic "input.txt"))) ; 73646890

;; vi:fdm=marker
