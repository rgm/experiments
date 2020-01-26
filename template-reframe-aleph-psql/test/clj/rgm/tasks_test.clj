(ns rgm.tasks-test
  (:require
   [clojure.test :as t :refer [deftest]]
   [rgm.tasks :as sut]))

(deftest testing-works
  (sut/-main)
  (t/is (= 1 1)))

