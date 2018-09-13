(ns sample.core
  (:require [re-frame.core :as re-frame]
            [reagent.core :as reagent]))

(enable-console-print!)

(def default-db {:click-count 0})

(re-frame/reg-event-db
 :initialize-db
 (fn [_ _] default-db))

(re-frame/reg-sub
  :subs/current-count
  (fn [db _] (:click-count db)))

(re-frame/reg-event-db
  :evt/increment-count
  (fn [db [_ _]] (update db :click-count inc)))

(defn layout-ui
  []
  (let [current-count (deref (re-frame/subscribe [:subs/current-count]))]
    [:div 
     "re-frame example"
     [:button
      {:on-click #(re-frame/dispatch [:evt/increment-count])}
      "increment count"]
     [:div "current count is " current-count]]))

(defn mount-root
  []
  (re-frame/clear-subscription-cache!)
  (re-frame/dispatch-sync [:initialize-db])
  (reagent/render
    [layout-ui]
    (.getElementById js/document "app")))

(mount-root)
