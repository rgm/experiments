(ns rgm.fsm
  "FSM example stitching tilakone together with re-frame"
  (:require
   [clojure.pprint :as pp]
   [re-frame.core :as re-frame :refer [dispatch subscribe reg-event-fx reg-sub]]
   [tilakone.core :as tk]))

(def box
  {:border "1px solid #999"
   :padding "1em"
   :margin "1em"})

(defn simple-fsm
  ([]
   (simple-fsm :state/start))
  ([initial-state]
  {::tk/state initial-state
   ::tk/states [{::tk/name :state/start}
                {::tk/name :state/added-to-seed}
                {::tk/name :state/compliant}]}))

(defn compliance-fsm
  ([]
   (compliance-fsm :state/start))
  ([initial-state]
  {::tk/state initial-state
   ::tk/states [{::tk/name :state/start}
                {::tk/name :state/added-to-seed}
                {::tk/name :state/waiting-for-data}
                {::tk/name :state/checking-data}
                {::tk/name :state/data-quality-good}
                {::tk/name :state/data-quality-bad}
                {::tk/name :state/compliant}
                {::tk/name :state/exempt}
                {::tk/name :state/publicly-disclosed}]}))

(reg-event-fx
 ::init
 (fn [{db :db} _]
   {:db (-> db
            (assoc ::simple (simple-fsm))
            (assoc ::compliance (compliance-fsm)))}))

(reg-sub
 ::debug-fsms
 (fn [db _]
   {::simple (::simple db)
    ::compliance (::compliance db)}))

(defn CycleSummary
  [k]
  (let []
    (fn [k]
      [:div {:style box}
       [:h2 k]])))

(defn Layout
  []
  (let [*debug (subscribe [::debug-fsms])]
    [:<>
     [:h1 "fsm examples"]
     [CycleSummary ::simple]
     [CycleSummary ::compliance]
     [:button {:on-click #(dispatch [::init])} "init fsms"]
     [:details {:open true}
      [:summary "fsms"]
      [:pre [:code (with-out-str (pp/pprint @*debug))]]]]))
