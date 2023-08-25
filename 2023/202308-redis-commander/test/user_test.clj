(ns user-test
  (:require
   [clojure.test :as t :refer [deftest is testing]]
   [user :as sut]))

(deftest validate!-test
  (testing "good values return nil"
    (is (nil? (sut/validate! sut/schema:evt #:evt{:name "a-thing-happened"
                                                  :data {}})))
    (is (nil? (sut/validate! sut/schema:cmd #:cmd{:id (random-uuid)
                                                  :name "DO-A-THING!"
                                                  :author "rgm"
                                                  :data {}}))))
  (testing "bad values throw"
    (is (thrown? Exception (sut/validate! sut/schema:evt #:evt{})))
    (is (thrown? Exception (sut/validate! sut/schema:cmd #:cmd{})))))
