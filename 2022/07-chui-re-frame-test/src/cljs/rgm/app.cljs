(ns rgm.app
  (:require
   [re-frame.core :as rf]))

(defn- smoke [] 2)

(rf/reg-event-fx ::init-db
  [rf/debug]
  (fn [_ _]
    {:db {:foo "bar"}}))

(rf/reg-sub ::get-key
  (fn [db [_ k]]
    (get db k)))
