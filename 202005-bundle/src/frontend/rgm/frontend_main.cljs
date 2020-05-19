(ns rgm.frontend-main
  "functions for initializing the SPA"
  (:require
   [cljs.pprint :as pp]
   [re-frame.core :as re-frame]
   [reagent.dom :as rdom]
   [reagent.core :as reagent]))

(def default-db {})

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

(defn Layout
  []
  (let [current-count (re-frame/subscribe [:subs/current-count-english])]
    [:<>
     [:h1 "re-frame example"]
     [:button
      {:on-click #(re-frame/dispatch [:evt/increment-count])}
      "increment count"]
     [:hr]
     [:div
      "current count is "
      [:strong @current-count]]]))

(defonce initializing? (atom true))

(defn mount-root
  []
  (when @initializing?
    (re-frame/clear-subscription-cache!)
    (re-frame/dispatch-sync [:initialize-db])
    (reset! initializing? false))
  (rdom/render [Layout]
               (.getElementById js/document "app")))

(mount-root)

(comment
  ;;; eval this to check if we're connected properly
  (js/alert "hi from editor via piggieback")
  (re-frame/dispatch [:evt/increment-count]))
