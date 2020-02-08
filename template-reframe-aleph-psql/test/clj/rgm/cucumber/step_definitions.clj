(ns rgm.cucumber.step-definitions
  (:require
   [lambdaisland.cucumber.dsl :as cucumber :refer [When Then pending!]]
   [clojure.test :as t]))

(When "I add {int} and {int}" [state a b]
  (assoc state :sum (+ a b)))

(Then "the sum should be {int}" [state expected-sum]
  (t/is (= (:sum state) expected-sum))
  state)
