(ns rgm.build
  (:require
   [badigeon.bundle :refer [bundle make-out-path]]
   [badigeon.compile :as c]))

(defn -main
  []
  (prn "foo"))

(comment
  (-main))
