(ns ^:dev/always rgm.app-test
  (:require
   [clojure.test       :as t :refer [deftest is]]
   [re-frame.core      :as rf]
   [day8.re-frame.test :as rft]
   [rgm.app            :as sut]))

(deftest smoke-test
  (is (= 2 (#'sut/smoke))))

(deftest re-frame-test
  (rft/run-test-sync
   (rf/dispatch [::sut/init-db])
   (let [*v (rf/subscribe [::sut/get-key :foo])]

     (is (= "bar" @*v)))))
