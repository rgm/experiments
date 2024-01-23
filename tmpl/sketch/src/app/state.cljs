(ns app.state
  (:require
   [day8.re-frame.tracing :refer-macros [defn-traced fn-traced]]
   [re-frame.core         :as rf]
   [reagent.core          :as rg]
   [reagent.dom           :as rdom]))

(rf/reg-fx :scroll-to-top
  (fn [_]
    (.scrollTo js/window 0 0)))

(rf/reg-event-db :init-app-db
  (fn-traced [_app-db _event-vec]
    {}))

(rf/reg-sub :smoketest-sub
  (fn [_app-db _sub-vec] "running"))
