(ns day-2-1
  (:require
   [clojure.string :as str]
   [clojure.test :as t :refer [deftest is]]
   [instaparse.core :as insta]
   [instaparse.transform :as insta.xf]))

(def grammar "game     = header draws
              <header> = <'Game'> id <':'>
              id       = #'\\d+'
              draws    = draw (<';'> draw)*
              draw     = glimpse (<','> glimpse)*
              glimpse  = n colour
              n        = #'\\d+'
              colour = 'red' | 'green' | 'blue'")

(def transforms
  "Roll up hiccup parse tree into a map {:id n :red r :green g :blue b}"
  {:game    merge
   :id      #(hash-map :id (parse-long %))
   :draws   (fn [& ms] (apply merge-with max ms))
   :draw    merge
   :glimpse #(hash-map %2 %1)
   :n       parse-long
   :colour  keyword})

(def parse-line
  (comp
   (partial insta.xf/transform transforms)
   (insta/parser grammar :auto-whitespace :standard)))

(defn possible? [bag game]
  (let [cubes-remaining (merge-with - bag game)]
    (every? #(<= 0 %) (vals cubes-remaining))))

(def BAG {:red 12 :green 13 :blue 14})

(defn sum-possible-game-ids [bag s]
  (let [all-games (map parse-line (str/split s #"\n"))
        possible-games (filter (partial possible? bag) all-games)]
    (reduce + (map :id possible-games))))

;; tests {{{

(deftest parse-line-test
  (is (= {:id 1 :red 4 :blue 6 :green 2}
         (parse-line "Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green"))))

(deftest possible?-test
  (let [impossible? (complement possible?)
       bag {:red 2 :blue 5 :green 5}]
    (is (possible?   bag {:red 1 :blue 1 :green 1}))
    (is (possible?   bag {:red 2 :blue 5 :green 5}))
    (is (impossible? bag {:red 3 :blue 2 :green 4}))))

(deftest sum-possible-games-test
  (is (= 8 (sum-possible-game-ids BAG (slurp "test_input_1.txt")))))

;; }}}

(comment
  (sum-possible-game-ids BAG (slurp "full_input.txt")))

;; vi:fdm=marker
