(ns my.app
  "An experiment using react-table from reagent via interop and new hooks
   features."
  (:require
   [cljs-bean.core :refer [bean ->clj ->js]]
   [react :refer [useMemo]]
   [react-table :refer [useTable useSortBy useFilters]]
   [reagent.core :as rg]
   [reagent.dom :as rdom]
   [taoensso.timbre :as timbre]))

;; https://github.com/reagent-project/reagent/blob/master/doc/ReactFeatures.md#hooks
;; https://react-table.tanstack.com/docs/quick-start

;; * Table {{{1

(defn Dim [[mag unit]] [:<>
                        [:div {:class ["red-500"]} mag]
                        [:div {:class ""} (name unit)]])

(def data [{:subref  "A"
            :spacing [:>f Dim [16 :in]]
            :xmit    [Dim [0.25 :W_m2k]]}
           {:subref  "B"
            :spacing [:>f Dim [32 :in]]
            :xmit    [Dim [0.05 :W_m2k]]}
           {:subref  "C"
            :spacing [:>f Dim [48 :in]]
            :xmit    [Dim [0.15 :W_m2k]]}])

(def columns [{:Header "Subref" :accessor :subref :sortType "basic"}
              {:Header "Spacing" :accessor :spacing :sortType "basic"}
              {:Header "Transmittance" :accessor :xmit :sortType "basic"}])

(defn Table []
  (let [memoized-columns (useMemo #(->js columns) #js [])
        memoized-data    (useMemo #(->js data) #js [])
        instance (useTable (->js {:columns memoized-columns
                                  :data    memoized-data})
                           useSortBy)
        {:keys [getTableProps getTableBodyProps
                headerGroups rows prepareRow]} (bean instance)]
    (tap> instance)
    [:table (merge (->clj (getTableProps))
                   {:class "border"})
     (into [:thead {:class "border-b"}]
           (for [hg headerGroups
                 :let [{:keys [getHeaderGroupProps headers]} (bean hg)]]
             (into [:tr (merge (->clj (getHeaderGroupProps)) {})]
                   (for [col headers
                         :let [{:keys [getHeaderProps getSortByToggleProps
                                       render isSorted isSortedDesc]} (bean col)]]
                     [:th (merge (->clj (getHeaderProps (getSortByToggleProps)))
                                 {})
                      (render "Header")
                      [:span (if isSorted (if isSortedDesc "↓" "↑") "-")]]))))
     (into [:tbody (merge (->clj (getTableBodyProps)) {})]
           (for [row rows
                 :let [_ (prepareRow row)
                       {:keys [getRowProps cells]} (bean row)]]
             (into [:tr (merge (->clj (getRowProps))
                               {:class ["hover:bg-blue-300" "transition"]})]
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
