(ns rgm.frontend-main
  "functions for initializing the SPA"
  (:require
   [cljs.pprint :as pp]
   [devcards.core :refer [defcard-rg]]
   [re-frame.core :as re-frame]
   [reagent.core :as reagent]
   [rgm.fsm]))

(def default-db {})

(re-frame/reg-event-db
 :initialize-db
 (fn [_ _] default-db))

(defonce initializing? (atom true))

(defn mount-root
  []
  (when @initializing?
    (re-frame/clear-subscription-cache!)
    (re-frame/dispatch-sync [:initialize-db])
    (reset! initializing? false))
  (reagent/render
   [rgm.fsm/Layout]
   (.getElementById js/document "app")))

(mount-root)

(comment
  ;;; eval this to check if we're connected properly
  (js/alert "hi from editor via piggieback")
  (re-frame/dispatch [:evt/increment-count]))
