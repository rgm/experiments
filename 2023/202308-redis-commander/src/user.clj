(ns user
  "Tno redis connry using redis streams as the ledger/backbone for a commander
   architecture."
  (:require
   [clojure.core.async :as a :refer [<! >! <!! >!!]]
   [malli.core :as m]
   [integrant.core :as ig]
   [integrant.repl :refer [halt reset]]
   [taoensso.carmine :as car :refer [wcar]]))

;;
;; schemas
;;

(defn validate!
  [spec value]
  (when-not (m/validate spec value)
    (let [data {:value value :spec spec :err (m/explain spec value)}]
      (throw (ex-info "invalid value" data)))))

(def schema:evt
  "Events are records of effects that have happened in the system, for
   secondary reactions (eg. updating the UI) or updating derived data
   (eg. the audit log on a project).

   The only kind of event that can lead to a system mutation is a
   `:command/issued` event. (Note the lower case and passive voice)."
  (let [user-id string?]
    [:map {:closed true}
     [:evt/id {:optional true} :string]
     [:evt/ts inst?] ;; nb. redis stream ids are timestamps, just derived from id
     [:evt/parent-id {:optional true} :string]
     [:evt/name :symbol]
     [:evt/data :map]
     [:evt/metadata {:optional true} :map]
     [:evt/audience {:optional true} [:set user-id]]]))

(def schema:cmd
  "Commands are expressions of a user's intent, as data.

   They are observable in the event ledger as (submitted, accepted) or
   (submitted, rejected) pairs of events. (On the front-end, we might see a
   transient (submitted, bounced) pair, signifying something didn't even make
   it into the ledger usually for authz reasons).

   They flow into the ledger, where the fact of a command is quickly persisted
   as an event. A command/submitted event wrapping the command flows into the
   commander, where it's acted on, and will lead to either an accepted event or
   a rejected event.

   Commands are named with all-caps imperative voice, like :DO-A-THING!"
  (let [user-id string?]
    [:map {:closed true}
     [:cmd/id uuid?]
     [:cmd/name :symbol]
     [:cmd/author user-id]
     [:cmd/data :map]]))

;;
;;
;;

(defn get-all-evts [ledger]
  (->> (wcar (:redis ledger) (car/xrange (:stream ledger) "-" "+"))
       (map (fn [[id [_ m]]] (assoc m :evt/id id)))))

(defprotocol ILedger
  (push-event [this evts] "Add event to the ledger.")
  (push-events [this evts] "Add events to the ledger.")
  (listen-to-events [this audience-id evt-names chan] "Listen for events on chan.")
  (stop-listening [this c] "Stop listening for events on chan."))

(defrecord RedisLedger [redis stream pub-chan]
  ;; conceal redis's presence behind a facade
  ;; the ledger's job is to persist events and pass them on
  ;; persistence is a bit fake here since clients push directly to redis behind
  ;; the abstraction of a "ledger" object ... we could buffer with a chan but w/e
  ILedger
  (push-event [_ evt]
    (validate! schema:evt evt)
    (wcar redis (car/xadd stream "*" "evt" evt)))

  (push-events [_ evts]
    (doseq [e evts] (validate! schema:evt e))
    (doall (for [e evts] (wcar redis (car/xadd stream "*" "evt" e)))))

  (listen-to-events [_ audience-id evt-names chan]
    ;; audience fan-out ... what about making channels that have a filter on
    ;; them and returning that?
    )

  (stop-listening [_ chan]))

(defn push
  "Push events into a ledger."
  [ledger evts])

(defn sub
  ([ledger evts c] (sub ledger nil evts c))
  ([ledger audience-id evts c] c))

(defn unsub [ledger c])

;;
;; integrant
;;

(def system-config
  {::redis     {:uri "redis://localhost:6379/2"}
   ::ledger    {:redis (ig/ref ::redis) :stream-key "myledger"}
   ::commander {:ledger (ig/ref ::ledger)}})

(defmethod ig/init-key ::redis
  [_ {:keys [uri]}]
  (let [opts {:pool (car/connection-pool {}) :spec {:uri uri}}]
    (when-not (= "PONG" (wcar opts (car/ping)))
      (throw (ex-info "can't communicate with redis" opts)))
    opts))

(defn transact! [redis evt]
  #:evt{:name :command/accepted
        :parent-id ""
        :data {}})

(defmethod ig/init-key ::commander
  ;; the commander's job is to act on command-submitted events
  ;; it only knows the ledger in-out channel
  [_ {:keys [ledger]}]
  (let [c (a/chan)
        #_#__worker (a/go-loop []
                      (when-some [evt (a/<! c)]
                        (let [tx-evts (transact! redis evt)]
                          (push ledger tx-evts))
                        (recur))
                      (prn "closed commander intake channel"))]
    (listen-to-events ledger nil #{:evt/command-submitted} c)))

(defmethod ig/halt-key! ::commander
  [_ c]
  (a/close! c))

(defmethod ig/init-key ::ledger
  [_ {:keys [stream-key redis]}]
  (let [c (a/chan 64)]
    #_(a/go-loop []
      (when-some [_ (<! c)]
        (prn "do stuff")
        #_(recur))
      (prn "stopping ledger"))
    (->RedisLedger redis stream-key c)))

(defmethod ig/halt-key! ::ledger
  [_ this]
  (a/close! (:pub-chan this)))

(defmethod ig/init-key ::consumer-1
  ;; eg a websocket
  [_ {}])

(defmethod ig/init-key ::consumer-2
  ;; eg an emailer that fires when the counter hits 10
  [_ {}])

(defn go []
  (integrant.repl/set-prep! #(ig/prep system-config))
  (integrant.repl/go))

;;
;; The specific domain of an incrementing counter
;;

(defonce COUNTER (atom 0))


(comment
  (go)
  (halt)
  (reset)
  (require '[integrant.repl.state :as irs])
  (def redis (::redis irs/system))
  (def commander (::commander irs/system))
  (def ledger (::ledger irs/system))
  (push-event ledger #:evt{:name 'command/submitted
                           :data #:cmd{:name 'INCREMENT-COUNTER!
                                       :author "rgm"
                                       :data {}}})
  (get-all-evts ledger)
  (def stream-name (:stream ledger))
  (wcar redis (car/xadd stream-name "*" "x" {:foo "bar"}))
  (wcar redis (car/xread "count" 2 "streams" stream-name 0))
  (wcar redis (car/xread "block" 300 "streams" stream-name "$"))
  (wcar redis (car/xdel stream-name "1692989244519-0"))
  (wcar redis (car/xtrim stream-name "MAXLEN" 0))

  )
