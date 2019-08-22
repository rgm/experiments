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
   (merge
    ;; the serializable part ... this is just data
    {::tk/state initial-state
     ::tk/states
     [{::tk/name :state/start
       ::tk/transitions [{::tk/on :signal/ADD-TO-CYCLE
                          ::tk/to :state/added-to-cycle}]}
      {::tk/name :state/added-to-cycle
       ::tk/transitions [{::tk/on :signal/NOTIFY-COMPLIANT
                          ::tk/to :state/compliant
                          ::tk/actions [:action/another-re-frame-thing
                                        :action/email-owner!]}]}
      {::tk/name :state/compliant :opengb/end-state? true
       ::tk/transitions [{::tk/on :signal/WITHDRAW-COMPLIANCE
                          ::tk/to :state/added-to-cycle
                          ::tk/actions [:action/dispatch-something?]}]}]}
    ;; the non-serializable bit, differs on frontend and backend
    {::tk/action! (fn [{::tk/keys [action] :as fsm}]
                    (prn "THROW A RE-FRAME ACTION?" action)
                    fsm)})))

(defn compliance-fsm
  ([]
   (compliance-fsm :state/start))
  ([initial-state]
   {::tk/state initial-state
    ::tk/states
    [{::tk/name :state/start}
     {::tk/name :state/added-to-seed}
     {::tk/name :state/waiting-for-data}
     {::tk/name :state/checking-data}
     {::tk/name :state/data-quality-good}
     {::tk/name :state/data-quality-bad}
     {::tk/name :state/compliant :opengb/end-state? true}
     {::tk/name :state/exempt :opengb/end-state? true}
     {::tk/name :state/publicly-disclosed :opengb/end-state? true}]}))

(reg-event-fx
 ::init
 (fn [{db :db} _]
   {:db (-> db
            (assoc ::simple (simple-fsm))
            (assoc ::compliance (compliance-fsm)))}))

(reg-event-fx
 ::apply-signal
 (fn [{db :db} [_ fsm-key signal]]
   {:db (update db fsm-key tk/apply-signal signal)}))

(reg-sub
 ::fsm
 (fn [db [_ fsm-key]]
   (fsm-key db)))

(reg-sub
 ::debug-fsms
 (fn [_ _]
   {::simple (subscribe [::fsm ::simple])
    ::compliance (subscribe [::fsm ::compliance])})
 (fn [m _] m))

(reg-sub
 ::state
 (fn [[_ fsm-key] _]
   (subscribe [::fsm fsm-key]))
 (fn [fsm _]
   (::tk/state fsm)))

(defn signals
  "Extracts all possible signals for an fsm."
  [fsm]
  (->> fsm
       ::tk/states
       (mapcat ::tk/transitions)
       (map ::tk/on)))

(defn valid-signals
  "Returns which signals are accepted in the fsm's current state."
  [fsm]
  (filter #(tk/transfers-to fsm %)
          (signals fsm)))

(reg-sub
 ::valid-signals
 (fn [[_ fsm-key] _]
   (subscribe [::fsm fsm-key]))
 (fn [fsm _]
   (valid-signals fsm)))

(comment
  (valid-signals (simple-fsm))
  (signals (simple-fsm)))

(defn end-states
  "Extracts all `:opengb/end-state?` states as a set."
  [fsm]
  (->> fsm
       ::tk/states
       (filter :opengb/end-state?)
       (map ::tk/name)
       set))

(reg-sub
 ::done?
 (fn [[_ fsm-key] _]
   (subscribe [::fsm fsm-key]))
 (fn [fsm _]
   (let [current-state (::tk/state fsm)]
     (contains? (end-states fsm) current-state))))

(defn CycleSummary
  [fsm-key]
  (let [*current-state (subscribe [::state fsm-key])
        *valid-signals (subscribe [::valid-signals fsm-key])
        *done? (subscribe [::done? fsm-key])]
    (fn [fsm-key]
      [:div {:style box}
       [:h2 fsm-key]
       (if @*done? "CLOSED" "OPEN")
       [:p "current state " [:strong @*current-state]]
       [:ul
        (for [signal @*valid-signals]
          ^{:key [signal]}
          [:li
           [:button
            {:on-click #(dispatch [::apply-signal fsm-key signal])}
            (str signal)]])]])))

(defn Layout
  []
  (let [*debug-fsms (subscribe [::debug-fsms])]
    [:<>
     [:h1 "fsm examples"]
     [:button {:on-click #(dispatch [::init])} "initialize fsms"]
     [CycleSummary ::simple]
     [:details {:open true}
      [:summary "simple fsm"]
      [:pre [:code (with-out-str (pp/pprint (::simple @*debug-fsms)))]]]
     [CycleSummary ::compliance]
     [:details {:open false}
      [:summary "compliance fsm"]
      [:pre [:code (with-out-str (pp/pprint (::compliance @*debug-fsms)))]]]]))
