(ns day-2-2
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

(defn power [bag]
  (reduce * ((juxt :red :green :blue) bag)))

(defn sum-powers-of-min-games [s]
  (let [all-games (map parse-line (str/split s #"\n"))
        ;; this game representation is _already_ the statement of the minimum
        ;; number of cubes needed, so there's nothing more to do to find it.
        min-bags all-games]
    (reduce + (map power min-bags))))

;; tests {{{

(deftest parse-line-test
  (is (= {:id 1 :red 4 :blue 6 :green 2}
         (parse-line "Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green"))))

(deftest sum-possible-games-test
  (is (= 2286 (sum-powers-of-min-games (slurp "test_input_1.txt")))))

;; }}}

(comment
  (sum-powers-of-min-games (slurp "full_input.txt"))) ; 66363

;; vi:fdm=marker
