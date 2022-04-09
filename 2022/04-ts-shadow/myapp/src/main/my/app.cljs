(ns my.app
  (:require
   [helix.core  :refer [defnc $]]
   [helix.hooks :as hooks]
   [helix.dom   :as d]
   [my.shared]
   ["react-dom" :as rdom]
   ["react-dom/client" :refer [createRoot]]))

(defnc helix-root []
  {:helix/features {:check-invalid-hooks-usage true}}
  (let [[state set-state] (hooks/use-state 0)]
    (d/div
     (d/h1 "Welcome - helix hook stuff")
     (d/div (str "Count is:" state))
     (d/button {:onClick #(set-state (inc state))} "Inc")
     (d/h1 "Welcome - other lib hook stuff")
     (d/div (my.shared/Button)))))

(defn ^:dev/after-load start-17 []
  (js/console.log "starting w react17-style mount")
  (let [host-dom (js/document.getElementById "app")]
    (rdom/render ($ helix-root) host-dom)))

(defn start-18 []
  (js/console.log "starting w react18 style mount")
  (let [container (js/document.getElementById "app")
        root      (createRoot container)]
    (.render root ($ helix-root))))

(defn ^:export init []
  (js/console.log "initializing")
  (start-17))
