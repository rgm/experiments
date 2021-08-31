(ns ^:figwheel-hooks rgm.browser.main
  "functions for initializing the SPA"
  (:require
   [re-frame.core :as re-frame]
   [reagent.dom   :as rdom]
   [tw-cljs.core  :refer [tw]]))

(def default-db {})

(re-frame/reg-event-db
 :initialize-db
 (fn [_ _] default-db))

(defn Layout
  []
  [:h1 (tw [:font-bold]) "public map"])

(defn ^:after-load mount-root
  []
  (re-frame/clear-subscription-cache!)
  (rdom/render
   [Layout]
   (.getElementById js/document "app")))

(defn ^:export init
  []
  (re-frame/dispatch-sync [:initialize-db])
  (mount-root))

(mount-root)

(comment
  ;;; eval this to check if we're connected properly
  (js/alert "hi from editor via piggieback"))
