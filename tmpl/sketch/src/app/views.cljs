(ns app.views
  (:require
   [re-frame.core :as rf]
   [reagent.core  :as rg]))

(defn -ErrorBoundary
  "Catches render errors so that the entire UI doesn't go away.

   See https://lilac.town/writing/modern-react-in-cljs-error-boundaries/"
  [& _children]
  (let [*err-state (rg/atom nil)]
    (rg/create-class
     {:display-name        "ErrorBoundary"
      :component-did-catch (fn [err info] (reset! *err-state [err info]))
      :reagent-render      (fn [& children]
                             (if (nil? @*err-state)
                               (into [:<>] children)
                               (let [[_ info] @*err-state]
                                 [:div.err-boundary
                                  [:div "Rendering error!"]
                                  [:code (pr-str info)]])))})))

(defn Root []
  (rg/with-let [*sub (rf/subscribe [:smoketest-sub])]
    [-ErrorBoundary [:main @*sub]]))
