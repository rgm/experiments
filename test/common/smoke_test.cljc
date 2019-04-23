(ns smoke-test
  (:require
    [clojure.test :as t :refer [deftest is]]))

(deftest are-tests-working
  (is (= 1 2)))
