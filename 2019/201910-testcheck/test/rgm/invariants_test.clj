(ns rgm.invariants-test
  "https://purelyfunctional.tv/lesson/strategies-for-properties-invariants/"
  (:require [clojure.test :refer :all]
            [clojure.test.check.clojure-test :refer [defspec]]
            [clojure.test.check.properties :as prop]
            [clojure.test.check.generators :as gen]))

