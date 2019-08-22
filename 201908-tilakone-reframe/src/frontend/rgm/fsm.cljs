(ns rgm.fsm
  "FSM example stitching tilakone together with re-frame"
  (:require
   [re-frame.core :as re-frame :refer [dispatch subscribe]]
   [tilakone.core :as tk]))

(def box
  {:border "1px solid #999"
   :padding "1em"
   :margin "1em"})

(defn CycleSummary
  [k]
  (let []
    (fn [k]
      [:div {:style box}
       [:h2 k]])))

(defn Layout
  []
  (let []
    [:<>
     [:h1 "fsm examples"]
     [CycleSummary :simple]
     [CycleSummary :complex]
     [:button {:on-click #(dispatch [::init])} "reset"]]))

