(ns rgm.app
  (:require
   [cljs-bean.core :refer [bean ->clj ->js]]
   ["reactflow" :as rflow]
   [tailwind-hiccup.core :refer [tw]]
   [reagent.dom :as rdom]
   [reagent.core :as rg]
   [re-frame.core :as rf]))

(rf/reg-event-fx ::boot
  (constantly {:db {:nodes [{:id "1" :position {:x 0 :y 0}
                             :data {:label "equity gap/surplus"}
                             :type "input"}
                            {:id "2" :position {:x 100 :y 100}
                             :data {:label "total project costs"}}
                            {:id "3" :position {:x 300 :y 100}
                             :data {:label "total project sources (capital stack)"}}]
                    :edges [{:id "1-2" :source "1" :target "2" :label "$400,000" }
                            {:id "1-3" :source "1" :target "3" :label "$1,000,000"}]}}))

(rf/reg-sub ::nodes
  (fn [db [_ ]]
    (:nodes db)))

(rf/reg-sub ::edges
  (fn [db [_ ]]
    (:edges db)))

(defn Root []
  (rg/with-let [*nodes (rf/subscribe [::nodes])
                *edges (rf/subscribe [::edges])]
    [:div (tw [:mx-auto :container :text-green-500
               :border :w-full :h-screen])
     [:> rflow/ReactFlow {:nodes (->js @*nodes)
                          :edges (->js @*edges)
                          :on-nodes-change #(js/console.log %)
                          :on-edges-change #(js/console.log %)
                          }
      [:> rflow/Background]
      [:> rflow/Controls]]]))

(defn ^:dev/after-load mount []
  (rf/dispatch-sync [::boot])
  (when-let [el (js/document.getElementById "app")]
    (reagent.dom/render [Root] el)))

(defn ^:export boot []
  (rf/dispatch-sync [::boot])
  (mount))
