(ns ^:figwheel-hooks rgm.browser
  (:require
   [reagent.core :as reagent]))

(defn Layout
  []
  [:h1 "hi from react"])

(defn ^:after-load mount-root
  []
  (let [host-dom (.getElementById js/document "app")]
    (reagent/render [Layout] host-dom)))

(defn ^:export init
  []
  (prn "do re-frame init")
  (mount-root))
