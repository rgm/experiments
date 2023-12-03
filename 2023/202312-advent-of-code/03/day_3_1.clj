(ns day-3-1
  "https://adventofcode.com/2023/day/3"
  (:require
   [clojure.java.io :as io]
   [clojure.set :as set]
   [clojure.test :as t :refer [deftest is]]))

(defn read-schematic [path] (with-open [r (io/reader path)] (vec (line-seq r))))

(defn width [schematic] (count (first schematic)))

(defn height [schematic] (count schematic))

(def digit? (comp boolean (set "1234567890")))

(defn get-char
  "Get the character at point x, y where x is line, y is char in line.
   0-indexed, 0 at top and left, nil if out of bounds."
  [schematic [x y]]
  (try (-> schematic (nth y) (nth x))
       (catch java.lang.IndexOutOfBoundsException _ nil)))

(defn get-neighbour-pts
  "A point has 8 neighbours. "
  [x y]
  ;; (I don't care about the schematic bounds at all because I'll just nil out
  ;; any off-the-board positions like [-1 -1].)
  (for [dx [-1 0 1] dy [-1 0 1]
        :let [x' (+ x dx) y' (+ y dy)]
        :when (not= [x y] [x' y'])]
    [x' y']))

(defn get-neighbours [schematic [x y]]
  (let [pts (get-neighbour-pts x y)
        xf (comp (map #(get-char schematic %))
                 (remove nil?))]
    (into #{} xf pts)))

(defn make-rich-points
  "For each point in the schematic, produce a map
   {:pt pt, :char c, :neighbours #{c1 c2 c3 ,,,}.

   Returns a seq of seqs to keep grid structure."
  [schematic]
  ;; don't cross product; we need the line breaks to avoid mooshing
  ;; a digit at the end of a line with one at the start of the next
  (for [y (range (height schematic))]
    (for [x (range (width schematic)) :let [pt [x y]]]
      {:pt pt
       :char (get-char schematic pt)
       :neighbours (get-neighbours schematic pt)})))

(defn has-symbol? [cs]
    (boolean (seq (set/difference (set cs) (set ".0123456789")))))

(defn find-part-numbers
  [schematic]
  (let [char-is-digit? (fn [m] (-> m :char digit?))
        is-digit-seq? (fn [ms] (-> ms first :char digit?))
        has-symbol-neighbours? (fn [ms] (->> ms
                                             (map :neighbours)
                                             (apply set/union)
                                             has-symbol?))
        rich-pts->long (fn [ms] (->> ms (map :char) (apply str) parse-long))]
    (->> schematic
         make-rich-points
         ;; ugh gross ... should process line by line
         (map #(partition-by char-is-digit? %)) ;; splits into digit & non-digit runs
         (map #(filter is-digit-seq? %))
         (map #(filter has-symbol-neighbours? %))
         (mapcat #(map rich-pts->long %)))))

(defn sum-part-numbers [schematic]
  (let [part-numbers (find-part-numbers schematic)]
    (reduce + part-numbers)))

; tests {{{

(deftest test-get-char
  (let [schematic ["467..114.."
                   "...*......"]]
    (is (= \4 (get-char schematic [0 0])))
    (is (= \. (get-char schematic [3 0])))
    (is (= \* (get-char schematic [3 1])))
    (is (nil? (get-char schematic [1 2])))
    (is (nil? (get-char schematic [-1 -1])))))

(deftest test-get-neighbours
  (let [schematic ["467..114.."
                   "...*......"]]
    (is (= #{\. \6}    (get-neighbours schematic [0 0])))
    (is (= #{\. \4 \7} (get-neighbours schematic [1 0])))
    (is (= #{\. \6 \*} (get-neighbours schematic [2 0])))
    (is (= #{\. \7 \*} (get-neighbours schematic [3 0])))
    (is (= #{\. \1 \*} (get-neighbours schematic [4 0])))
    (is (= #{\. \1}    (get-neighbours schematic [5 0])))
    (is (= #{\. \4 \6} (get-neighbours schematic [0 1])))))

(deftest test-find-part-numbers
  (let [schematic (read-schematic "test1.txt")]
    (is (= [467 35 633 617 592 755 664 598]
           (find-part-numbers schematic)))))

(deftest test-sum-part-numbers
  (is (= 4361 (sum-part-numbers (read-schematic "test1.txt")))))

; }}}

(comment
  (def schematic (read-schematic "test1.txt"))
  (make-rich-points schematic)
  (find-part-numbers schematic)
  ;; debugging
  (with-open [w (io/writer "out.txt")]
    (binding [*out* w]
      (doseq [s (find-part-numbers (read-schematic "input.txt"))]
        (println s))))

  (sum-part-numbers (read-schematic "input.txt"))) ; 531932

;; vi:fdm=marker
