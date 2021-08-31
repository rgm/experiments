(ns user
  (:require
   [tilakone.core :as tk :refer [_]]
   [tilakone.util :as u]
   [tilakone.schema :as tks]))

(def states [{::tk/name :turned-off
              ; ::tk/enter {::tk/guards [:OFF-enter-guard]
              ;             ::tk/actions [:OFF-enter-action]}
              ; ::tk/stay {::tk/guards [:OFF-stay-guard]
              ;             ::tk/actions [:OFF-stay-action]}
              ::tk/transitions [{::tk/on "ON"
                                 ::tk/to :turned-on
                                 ; ::tk/guards [:transition-guard]
                                 ; ::tk/actions [:transition-foo :transition-bar]
                                 }
                                {::tk/on ::tk/_}]}
             {::tk/name :turned-on
              ::tk/transitions [{::tk/on "OFF" ::tk/to :turned-off}
                                {::tk/on ::tk/_}]}])

(defn enough-inputs?
  [{::tk/keys [signal _guard] :as fsm}]
  (let [inputs (conj (:opengb/inputs fsm)
                     signal)]
    (<= 3 (count inputs))))

(defn accumulate!
  [{::tk/keys [signal action] :as fsm}]
  ; (prn "accumulate!" signal action)
  (update fsm :opengb/inputs conj signal))

(defn calculate!
  [{::tk/keys [signal action] :as fsm}]
  (prn "calculate!" signal action (:opengb/inputs fsm))
  fsm)

(def states2
  [
   #::tk{:name "not-ready"
         :transitions [#::tk{:on :CHANGE :to "ready" :actions [accumulate!]
                             :guards [enough-inputs?]}
                       #::tk{:on :CHANGE :to "not-ready" :actions [accumulate!]}]}
   #::tk{:name "ready"
         :transitions [#::tk{:on :CHANGE :to "ready" :actions [accumulate!]
                             :guards [enough-inputs?]}
                       #::tk{:on :CHANGE :to "not-ready" :actions [accumulate!]}
                       #::tk{:on :CALCULATE :to "done" :actions [calculate!]}]}
   #::tk{:name "done"
         :transitions [#::tk{:on :CHANGE :to "ready" :actions [accumulate!]
                             :guards [enough-inputs?]}
                       #::tk{:on :CHANGE :to "not-ready"}] :actions [accumulate!]}])

(defn fsm2
  ([] (fsm2 "not-ready"))
  ([state]
   {::tk/state state
    ::tk/states states2
    ::tk/match? (fn matches-first? [signal on] (= (first signal) on))
    ::tk/guard? (fn [{::tk/keys [guard] :as fsm}] (guard fsm))
    ::tk/action! (fn [{::tk/keys [action] :as fsm}] (action fsm))
    :opengb/inputs []}))

(comment

 (reduce tk/apply-signal
         (fsm2 "not-ready")
         [[:CHANGE :foo]
          [:CHANGE :bar]
          [:CHANGE :baz]
          [:CALCULATE]])

 (tk/apply-signal (fsm2 "ready") [:CHANGE :foo])
 (tk/apply-signal (fsm2 "ready") [:CALCULATE])
 (tk/apply-signal (fsm2 "not-ready") [:CALCULATE])
 (tk/apply-signal (fsm2 "done") [:CHANGE])

)



(defn test-guard-fn
  [{::tk/keys [signal guard]}]
                 (prn "guard" signal guard)
                 (not= guard :transition-guard)
                 true)

(defn fsm
  [initial-state]
  {::tk/states states
   ::tk/state initial-state
   ; ::tk/action! (fn [fsm]
   ;                (prn "SIGNAL" (::tk/signal fsm))
   ;                (prn "ACTION" (::tk/action fsm)) fsm)
   ; ::tk/guard? test-guard-fn
   })

(defn all-signals
  "Returns all signals a given FSM can respond to"
  [fsm]
  (as-> fsm $
    (::tk/states $)
    (mapcat ::tk/transitions $)
    (map ::tk/on $)
    (set $)
    (disj $ ::tk/_)))

(comment
 (tks/validate-states states)
 (tk/apply-signal ( fsm :turned-on) "OFF")
 (tk/apply-signal (fsm :turned-off) "ON")
 (tk/apply-signal (fsm :turned-off) "OFF")
 (tk/apply-guards (fsm :turned-on) "OFF")
 (tk/apply-guards (fsm :turned-off) "ON")

 (u/get-transitions (fsm :turned-off) "ON")




 (all-signals (fsm :turned-off))
 (tk/transfers-to (fsm :turned-off) "ON")
 )
