(ns sample.core
  (:require [re-frame.core :as re-frame]
            [reagent.core :as reagent]
            [semantic-ui-react :as sui]
            [stylefy.core :as stylefy]
            [cljs.pprint :as pp]))

(enable-console-print!)

(def default-db {:click-count 0})

(re-frame/reg-event-db
 :initialize-db
 (fn [_ _] default-db))

(re-frame/reg-sub
  :subs/current-count
  (fn [db _] (:click-count db)))

(defn to-english
  "thanks https://gist.github.com/devn/1691304"
  [n]
  (pp/cl-format nil "~@(~@[~R~]~^ ~A.~)" n))

(re-frame/reg-sub
  :subs/current-count-english
  ;; demo of L3 stacking
  ;; bit contrived since this will always re-run
  (fn [_ _] (re-frame/subscribe [:subs/current-count]))
  (fn [current-count _] (to-english current-count)))

(re-frame/reg-event-db
  :evt/increment-count
  (fn [db [_ _]] (update db :click-count inc)))

(defn layout-ui
  []
  (let [current-count (re-frame/subscribe [:subs/current-count-english])]
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
    (stylefy/init)
    (reset! initializing? false))
  (reagent/render
    [:> sui/Container
     (stylefy/use-style {:margin-top "2em"} {})
     [layout-ui]]
    (.getElementById js/document "app")))

(mount-root)
