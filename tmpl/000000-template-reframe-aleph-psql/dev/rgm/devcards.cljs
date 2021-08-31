(ns ^:figwheel-hooks rgm.devcards
  (:require
   [re-frame.core :as re-frame :refer [reg-event-fx dispatch]]
   [devcards.core :refer [defcard-rg]]))

(reg-event-fx
 ::initialize-db
 [re-frame/debug]
 {:db {}})

(defcard-rg sample-card
  "# Some markdown

   Some markdown documentation

   ---
   "
  (fn [*data-atom _owner]
    [:<>
     [:h1 (:title @*data-atom)]
     [:p "more stuff"]])
  {:title "A sample card"}
  {:inspect-data true})

(defn ^:after-load mount-root
  []
  (devcards.core/start-devcard-ui!))

(defn ^:export init
  []
  (dispatch [::initialize-db])
  (mount-root))
