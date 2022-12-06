(ns rgm.app
  (:require
   [tailwind-hiccup.core :refer [tw]]
   [reagent.dom :as rdom]
   [re-frame.core :as rf]))

(rf/reg-event-fx ::boot (constantly {:db {}}))

(defn Root []
  [:div (tw [:mx-auto :container :text-green-500])
   "Root2"])

(defn ^:dev/after-load mount []
  (when-let [el (js/document.getElementById "app")]
    (reagent.dom/render [Root] el)))

(defn ^:export boot []
  (rf/dispatch-sync [::boot])
  (mount))
