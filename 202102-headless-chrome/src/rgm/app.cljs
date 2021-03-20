(ns rgm.app
  "Entry point for single-page app."
  (:require [reagent.dom :as rdom]
            [reagent.core :as rg]
            [rgm.vega :as vega]))

(defn Vega:did-mount [a-ref this-component]
  (let [props     (rg/props this-component)
        vega-spec (clj->js (:spec props))
        runtime   (.parse js/vega vega-spec)
        view      (-> (js/vega.View. runtime)
                      (.initialize a-ref)
                      (.renderer "svg")
                      (.hover))]
    (.logLevel view js/vega.Warn)
    (.runAsync view)
    view))

(defn Vega:did-update [^js/vega.View vega-view this-component]
  (let [props (rg/props this-component)
        {:keys [debug]} props]
    (.runAsync vega-view)
    ;; debug-log requested datasets
    (doseq [dataset-name debug]
      (js/console.debug dataset-name (.data vega-view dataset-name)))))

(defn VegaRenderer [_props]
  (let [*a-ref     (atom nil)
        *vega-view (atom nil)]
    (rg/create-class
     {:component-did-mount
      (fn did-mount [this] (let [view (Vega:did-mount @*a-ref this)]
                             (reset! *vega-view view)
                             ;; give it one initial bump, in case of static data
                             (Vega:did-update @*vega-view this)))

      :component-did-update
      (fn did-update [this _old-argv] (Vega:did-update @*vega-view this))

      :reagent-render
      (fn render [_props]
        [:div {:class "w-full h-full" :ref #(reset! *a-ref %)}])})))

(defn Root []
  [:div
   [:h2 {:class "text-red-500 mt-5"} "hi from within react with some styling"]
   [:div {:class "mt-10 w-1/2 h-64 shadow p-3"}
    (let [vega-spec (vega/bar-chart vega/bar-data)]
      [VegaRenderer {:spec vega-spec :debug ["table"]}])]])

(defn ^:dev/before-load stop [])

(defn ^:dev/after-load start []
  (let [host-dom (js/document.getElementById "app")]
    (rdom/render [Root] host-dom)))
