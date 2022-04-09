(ns my.app
  (:require
   [helix.core  :refer [defnc $]]
   [helix.hooks :as hooks]
   [helix.dom   :as d]
   [my.shared]
   ["react"     :as react]
   ["react-dom" :as rdom]))

(defnc helix-root []
  (let [[state set-state] (hooks/use-state 0)]
    (d/div
     (d/h1 "Welcome!")
     (d/div (str "Count is:" state))
     ; (my.shared/Button #js {:label "HI FROM REACT COMPONENT"})
     (d/button {:onClick #(set-state (inc state))} "Inc"))))

(defn ^:dev/after-load start []
  (js/console.log "starting")
  (let [host-dom (js/document.getElementById "app")]
    (rdom/render ($ helix-root) host-dom)))

(defn ^:export init []
  (js/console.log "initializing")
  (start))
