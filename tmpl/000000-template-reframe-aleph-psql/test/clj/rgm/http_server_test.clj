(ns rgm.http-server-test
  (:require
   [clojure.test :as t :refer [deftest]]
   [rgm.http-server :as sut]))

(deftest testing-works
  (t/is (= 1 1)))
