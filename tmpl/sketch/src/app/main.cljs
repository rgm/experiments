(ns app.main
  (:require
   ["react-dom/client" :refer [createRoot]]
   [app.state]
   [app.views]
   [re-frame.core      :as rf]
   [reagent.core       :as rg]))

(defonce *REACT-ROOT (atom nil))

(defn ^:dev/after-load start []
  (rf/clear-subscription-cache!)
  (.render @*REACT-ROOT (rg/as-element [app.views/Root])))

(defn ^:export init []
  (rf/dispatch-sync [:init-app-db])
  (reset! *REACT-ROOT (createRoot (js/document.getElementById "app")))
  (start))
