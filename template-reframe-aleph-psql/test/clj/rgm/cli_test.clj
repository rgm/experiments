(ns rgm.cli-test
  (:require
   [cli-matic.core :refer [run-cmd*]]
   [clojure.test :as t :refer [deftest]]
   [rgm.cli :as sut]))

(deftest testing-works
  (run-cmd* sut/cli-config ["--help"])
  (t/is (= 1 1)))
