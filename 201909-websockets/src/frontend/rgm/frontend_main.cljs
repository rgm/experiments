(ns rgm.frontend-main
  "functions for initializing the SPA"
  (:require
   [re-frame.core :as rf :refer [dispatch subscribe]]
   [reagent.core :as reagent]))

(def default-db {:count 0})

(rf/reg-event-db
 ::initialize-db
 (fn [_ _]
   default-db))

(rf/reg-event-db
 ::inc
 (fn [db _]
   (update db :count inc)))

(rf/reg-sub
 ::count
 (fn [db _] (:count db)))

(defn Layout
  []
  (let [*count (subscribe [::count])]
    [:<>
     [:h1 "websocket example"]
     [:button {:on-click #(dispatch [::inc])} "increment"]
     [:button {:on-click #(dispatch [::open-websocket])} "open websocket"]
     [:button {:on-click #(dispatch [::close-websocket])} "close websocket"]
     [:div "Count is: " [:strong @*count]]]))

(defonce initializing? (atom true))

(defn mount-root
  []
  (when @initializing?
    (rf/clear-subscription-cache!)
    (rf/dispatch-sync [::initialize-db])
    (reset! initializing? false))
  (reagent/render
   [Layout]
   (.getElementById js/document "app")))

(mount-root)

(comment
  ;;; eval this to check if we're connected properly
  (js/alert "hi from editor via piggieback")
  (re-frame/dispatch [:evt/increment-count]))
