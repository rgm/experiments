(ns sample.core
  (:require [re-frame.core :as re-frame]
            [reagent.core :as reagent]
            [semantic-ui :as sui]
            [stylefy.core :as stylefy]))

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
  (let [current-count (re-frame/subscribe [:subs/current-count])]
    [:div
     [:> sui/Header "re-frame example"]
     [:> sui/Button
      {:on-click #(re-frame/dispatch [:evt/increment-count])}
      "increment count"]
     [:> sui/Divider]
     [:div
      "current count is "
      [:> sui/Label @current-count]]]))

(defonce initializing? (atom true))

(defn mount-root
  []
  (when @initializing?
    (re-frame/clear-subscription-cache!)
    (re-frame/dispatch-sync [:initialize-db])
    (reset! initializing? false))
  (reagent/render
    [:> sui/Container
     (stylefy/use-style {:margin-top "2em"} {})
     [layout-ui]]
    (.getElementById js/document "app")))

(mount-root)
