(ns my.app
  "An experiment using react-table from reagent via interop and new hooks
   features."
  (:require
   [cljs-bean.core :refer [bean ->clj ->js]]
   [react]
   [react-table :refer [useTable]]
   [reagent.core :as rg]
   [reagent.dom :as rdom]))

;; https://github.com/reagent-project/reagent/blob/master/doc/ReactFeatures.md#hooks
;; https://react-table.tanstack.com/docs/quick-start

;; * Table {{{1


(def data [{:subref "A" :spacing [16 :in] :xmit [0.05 :W_m2k]}
           {:subref "B" :spacing [16 :in] :xmit [0.05 :W_m2k]}
           {:subref "C" :spacing [16 :in] :xmit [0.05 :W_m2k]}])

(def columns [{:Header "Subref" :accessor :subref}
              {:Header "Spacing" :accessor :spacing}
              {:Header "Transmittance" :accessor :xmit}])

(defn Table []
  (let [instance (useTable (->js {:columns columns :data data}))
        {:keys [getTableProps getTableBodyProps
                headerGroups rows prepareRow]} (bean instance)]
    (tap> instance)
    [:table (merge (->clj (getTableProps)) {})
     (into [:thead]
           (for [hg headerGroups
                 :let [{:keys [getHeaderGroupProps headers]} (bean hg)]]
             (into [:tr (merge (->clj (getHeaderGroupProps)) {})]
                   (for [col headers
                         :let [{:keys [getHeaderProps render]} (bean col)]]
                     [:th (merge (->clj (getHeaderProps col)) {})
                      (render "Header")]))))
     (into [:tbody (merge (->clj (getTableBodyProps)) {})]
           (for [row rows
                 :let [_ (prepareRow row)
                       {:keys [getRowProps cells]} (bean row)]]
             (into [:tr (merge (->clj (getRowProps)) {})]
                   (for [cell cells
                         :let [{:keys [getCellProps render]} (bean cell)]]
                     [:td (merge (->clj (getCellProps)) {})
                      (render "Cell")]))))]))

;; }}}

(defn Root []
  [:div
   [:h1 {:class "text-2xl mb-2"} "React Table Demo"]
   [:f> Table]])

(defn ^:dev/before-load stop [])

(defn ^:dev/after-load start []
  (let [host-dom (js/document.getElementById "app")]
    (rdom/render [Root] host-dom)))

(comment
  (require '[flow-storm.api :as fsa])
  (fsa/connect))
