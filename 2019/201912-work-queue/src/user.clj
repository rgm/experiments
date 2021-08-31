(ns user
  (:require
   [clojure.spec.gen.alpha :as gen]
   [clojure.spec.alpha :as s]
   [clojure.core.async :as a]))

(def *job-table (agent {}))

(defn watcher
  [key *ref old-state new-state]
  (prn "GOT NEW STATE" new-state))

(add-watch *job-table ::importer watcher)

(s/def ::job-identifier keyword?)

(defn simulate-initial-request
  []
  (let [identifier (gen/generate (s/gen keyword?))]
    (send-off *job-table assoc identifier :new)
    identifier))

(defn simulate-polling-request
  [k]
  (get @*job-table k))

(comment

 (dotimes [_ 100] (simulate-initial-request))
 (deref *job-table)
 (simulate-polling-request)

 )
