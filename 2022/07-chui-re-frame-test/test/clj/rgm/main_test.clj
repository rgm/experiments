(ns rgm.main-test
  (:require
   [rgm.main :as sut]
   [clojure.test :as t :refer [deftest is]]))

(deftest smoke-test
  (is (= 2 (#'sut/smoke))))
