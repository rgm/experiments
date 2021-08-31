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

(defn label
  [color]
  {
   :background-color color
   :border-radius "4px"
   :color "white"
   :display "inline-block"
   :padding "0.25em 0.5em"
   })

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
    [{::tk/name :state/start
      ::tk/transitions [{::tk/on :signal/ADD-TO-CYCLE
                         ::tk/to :state/added-to-cycle}]}
     {::tk/name :state/added-to-cycle
      ::tk/transitions [{::tk/on :signal/REQUEST-DATA-FROM-OWNER
                         ::tk/to :state/waiting-for-data}]}
     {::tk/name :state/waiting-for-data
      ::tk/transitions [{::tk/on :signal/GRANT-EXEMPTION
                         ::tk/to :state/exempt}
                        ;; expect this one to be sent by backend process
                        {::tk/on :signal/RECEIVE-DATA-FROM-SEED
                         ::tk/to :state/checking-data
                         :opengb/show-in-ui? false}]}
     {::tk/name :state/checking-data
      ::tk/transitions [{::tk/on :signal/GRANT-EXEMPTION
                         ::tk/to :state/exempt}
                        {::tk/on :signal/REQUEST-DATA-FROM-OWNER
                         ::tk/to :state/waiting-for-data}
                        {::tk/on :signal/ACCEPT-DATA
                         ::tk/to :state/data-quality-good}
                        {::tk/on :signal/REJECT-DATA
                         ::tk/to :state/data-quality-bad}]}
     {::tk/name :state/data-quality-good
      ::tk/transitions [{::tk/on :signal/NOTIFY-COMPLIANT
                         ::tk/to :state/compliant}
                        {::tk/on :signal/OOPS
                         ::tk/to :state/checking-data}]}
     {::tk/name :state/data-quality-bad
      ::tk/transitions [{::tk/on :signal/REQUEST-DATA-FROM-OWNER
                         ::tk/to :state/waiting-for-data}]}
     {::tk/name :state/compliant
      :opengb/end-state? true
      ::tk/transitions [{::tk/on :signal/DISCLOSE-TO-MAP
                         ::tk/to :state/publicly-disclosed}
                        ;; ripcord to pull if something's just not right
                        {::tk/on :signal/OOPS
                         ::tk/to :state/checking-data}]}
     {::tk/name :state/exempt
      :opengb/end-state? true
      ::tk/transitions [{::tk/on :signal/NOT-EXEMPT
                         ::tk/to :state/checking-data}]}
     {::tk/name :state/publicly-disclosed
      :opengb/end-state? true
      ::tk/transitions [{::tk/on :signal/MAKE-PRIVATE
                         ::tk/to :state/compliant}]}]}))

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
       (map ::tk/on)
       (set)))

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
       (if @*done?
         [:div {:style (label "#b00")} "CLOSED"]
         [:div {:style (label "#3b3")} "OPEN"])
       [:h2 "<name of cycle>"]
       [:div
        "current state " [:strong @*current-state]
        " using fsm " [:strong fsm-key]]
       [:h3 "available actions:"]
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
     [:details {:open false}
      [:summary "simple fsm"]
      [:pre [:code (with-out-str (pp/pprint (::simple @*debug-fsms)))]]]
     [CycleSummary ::compliance]
     [:details {:open false}
      [:summary "compliance fsm"]
      [:pre [:code (with-out-str (pp/pprint (::compliance @*debug-fsms)))]]]]))
