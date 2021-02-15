(ns my.app
  "An experiment using react-table from reagent via interop and new hooks
   features."
  (:require
   [cljs-bean.core :refer [bean ->clj ->js]]
   [clojure.pprint :as pp]
   [clojure.spec.alpha :as s]
   [clojure.test :as t :refer [deftest testing is]]
   [react :refer [useMemo]]
   [react-table :refer [useTable useSortBy useFilters]]
   [reagent.core :as rg]
   [reagent.dom :as rdom]
   [taoensso.timbre :as timbre]))

;; https://github.com/reagent-project/reagent/blob/master/doc/ReactFeatures.md#hooks
;; https://react-table.tanstack.com/docs/quick-start

;; [x] basic
;; [x] sort
;; [ ] sort + filter
;; [x] render other components as cells
;; [ ] second view responds to table filter
;; [ ] sort + filter + select
;; [ ] second view responds to select
;; [ ] pagination

(declare SelectColumnFilter)
(declare CheckboxFilter)
(declare Dim)

;; * Data {{{1

(def data [{:subref  "A"
            :spacing [:>f Dim [16 :in]]
            :xmit    [Dim [0.25 :W_m2k]]}
           {:subref  "B"
            :spacing [:>f Dim [16 :in]]
            :xmit    [Dim [0.25 :W_m2k]]}
           {:subref  "C"
            :spacing [:>f Dim [32 :in]]
            :xmit    [Dim [0.05 :W_m2k]]}
           {:subref  "D"
            :spacing [:>f Dim [32 :in]]
            :xmit    [Dim [0.05 :W_m2k]]}
           {:subref  "E"
            :spacing [:>f Dim [48 :in]]
            :xmit    [Dim [0.15 :W_m2k]]}
           {:subref  "F"
            :spacing [:>f Dim [48 :in]]
            :xmit    [Dim [0.15 :W_m2k]]}])

(def columns [{:Header "Subref"
               :accessor :subref
               :Filter CheckboxFilter
               :sortType "basic"}
              {:Header "Spacing"
               :accessor :spacing
               :Filter SelectColumnFilter
               :sortType "basic"}
              {:Header "Transmittance"
               :accessor :xmit
               :sortType "basic"
               :Filter SelectColumnFilter
               :filter "includes"}])

;; }}}

;; * Helper views {{{1

(defn tr
  "Translate for i18n"
  [k]
  (get {:in "\"" :W_m2k "W/m\u00b2\u00b7K"} k k))

(defn Dim
  [[mag unit]]
  [:div {:class "flex"}
   [:div {:class ["text-red-500 font-bold"]} mag]
   [:div {:class ""} (tr unit)]])

(defn Button
  [props label]
  [:button (merge props {:class ["border" "px-2" "py-1" "hover:bg-red-200"]})
   label])

;; }}}

;; * Tables {{{1

;; * PlainTable {{{2

(defn PlainTable []
  (let [memoized-columns (useMemo #(->js columns) #js [])
        memoized-data    (useMemo #(->js data) #js [])
        ;; need to use react/useMemo or the hook invalidation will cause infinite loops
        instance (useTable (->js {:columns memoized-columns
                                  :data    memoized-data}))
        {:keys [getTableProps getTableBodyProps
                headerGroups rows prepareRow]} (bean instance)]
    [:table (merge (->clj (getTableProps))
                   {:class "border w-full"})
     (into [:thead {:class "border-b"}]
           (for [hg headerGroups
                 :let [{:keys [getHeaderGroupProps headers]} (bean hg)]]
             (into [:tr (merge (->clj (getHeaderGroupProps)) {})]
                   (for [col headers
                         :let [{:keys [getHeaderProps render]} (bean col)]]
                     [:th (merge (->clj (getHeaderProps))
                                 {:class ["hover:bg-red-500"]})
                      (render "Header")]))))
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

;; * SortingTable {{{2

(defn SortingTable []
  (let [memoized-columns (useMemo #(->js columns) #js [])
        memoized-data    (useMemo #(->js data) #js [])
        ;; need to use react/useMemo or the hook invalidation will cause infinite loops
        instance (useTable (->js {:columns memoized-columns
                                  :data    memoized-data})
                           useSortBy)
        {:keys [getTableProps getTableBodyProps
                headerGroups rows prepareRow state]} (bean instance)]
    [:<>
    [:table (merge (->clj (getTableProps))
                   {:class "border w-full"})
     (into [:thead {:class "border-b"}]
           (for [hg headerGroups
                 :let [{:keys [getHeaderGroupProps headers]} (bean hg)]]
             (into [:tr (merge (->clj (getHeaderGroupProps)) {})]
                   (for [col headers
                         :let [{:keys [getHeaderProps getSortByToggleProps
                                       render isSorted isSortedDesc]} (bean col)]]
                     [:th (merge (->clj (getHeaderProps (getSortByToggleProps)))
                                 {:class ["hover:bg-red-500"]})
                      (render "Header")
                      [:span (when isSorted (if isSortedDesc " ↓" " ↑"))]]))))
     (into [:tbody (merge (->clj (getTableBodyProps)) {})]
           (for [row rows
                 :let [_ (prepareRow row)
                       {:keys [getRowProps cells]} (bean row)]]
             (into [:tr (merge (->clj (getRowProps))
                               {:class ["hover:bg-blue-300" "transition"]})]
                   (for [cell cells
                         :let [{:keys [getCellProps render]} (bean cell)]]
                     [:td (merge (->clj (getCellProps)) {})
                      (render "Cell")]))))]
    (str (js/JSON.stringify state))]))

;; }}}

;; * FilteringTable {{{2

(defn SelectColumnFilter
  [x]
  (let [{:keys [column]} (bean x)
        {:keys [filterValue setFilter preFilteredRows id]} (bean column)
        options (useMemo (fn []
                           (->> (->clj preFilteredRows)
                                (map (fn [row] (get-in row [:values (keyword id)])))))
                         #js [id preFilteredRows])]
    (rg/as-element
     (into [:select {:value filterValue
                     :onChange (fn [ev] (setFilter (some-> ev .-target .-value)))}]
           (concat
            [[:option {:value ""} "All"]]
            (for [opt options]
              [:option {:value (str opt)} (str opt)]))))))

(defn CheckboxFilter
  [table-inst]
  (let [{:keys [column]} (bean table-inst)
        {:keys [id
                filterValue preFilteredRows setFilter
                isSorted isSortedDesc setSortBy]} (bean column)
        options (useMemo (fn []
                           (->> (->clj preFilteredRows)
                                (map (fn [row] (get-in row [:values (keyword id)])))))
                         #js [id preFilteredRows])]
    (rg/as-element [:div
                    [:div "Sort"
                     [Button {:on-click #(setSortBy (->js {:id id :desc false}))} "Asc"]
                     [Button {:on-click #(setSortBy (->js {:id id :desc true}))} "Desc"]]
                    [:div "Filter"
                     [:label [:input {:type "checkbox"}] "All"]
                     (doall (for [opt options]
                              ^{:key opt} [:label {:class "block"}
                               [:input {:class [""] :type "checkbox"}]
                               (str opt)]))
                     [Button {} "Clear filter"]
                     ]])))

(defn FilteringTable
  "Wrap up all hooks goop so from clojure's point of view we're just stuffing
   in a coll of columns and a coll of data."
  []
  (let [memoized-columns (useMemo #(->js columns) #js [])
        memoized-data    (useMemo #(->js data) #js [])
        filter-types     (useMemo (fn []
                                    (->js {:text (fn [rows id filter-value]
                                                   (prn rows id filter-value)
                                                   rows)}))
                                  #js [])
        ;; need to use react/useMemo or the hook invalidation will cause
        ;; infinite loops
        instance (useTable (->js {:columns memoized-columns
                                  :data    memoized-data
                                  :filterTypes filter-types})
                           useFilters
                           useSortBy)
        {:keys [getTableProps getTableBodyProps
                headerGroups rows prepareRow
                state]} (bean instance)]
    (tap> instance)
    [:<>
    [:table (merge (->clj (getTableProps))
                   {:class "border w-full"})
     (into [:thead {:class "border-b"}]
           (for [hg headerGroups
                 :let [{:keys [getHeaderGroupProps headers]} (bean hg)]]
             (into [:tr (merge (->clj (getHeaderGroupProps)) {})]
                   (for [col headers
                         :let [{:keys [getHeaderProps getSortByToggleProps
                                       render isSorted isSortedDesc canFilter]} (bean col)]]
                     [:th (merge (->clj (getHeaderProps)))
                      (render "Header")
                      [Button (->clj (getSortByToggleProps))
                       (if isSorted (if isSortedDesc " ↓" " ↑") "sort")]
                      (when canFilter (render "Filter"))]))))
     (into [:tbody (merge (->clj (getTableBodyProps)) {})]
           (for [row rows
                 :let [_ (prepareRow row)
                       {:keys [getRowProps cells]} (bean row)]]
             (into [:tr (merge (->clj (getRowProps))
                               {:class ["hover:bg-blue-300" "transition"]})]
                   (for [cell cells
                         :let [{:keys [getCellProps render]} (bean cell)
                               _ (js/console.log cell)]]
                     [:td (merge (->clj (getCellProps)) {})
                      ; (rg/as-element (:value (bean cell)))
                      (render "Cell")]))))]
    [:div (js/JSON.stringify state)]]))

;; }}}

;; so data is the stuff we put in
;; a "row" is prepared for display

(defn basic-sort [a b] (sort a b))

(def data2 [{:subref "A" :spacing [48 :in] :xmit [0.25 :W_m2k]}
            {:subref "B" :spacing [16 :in] :xmit [0.25 :W_m2k]}
            {:subref "C" :spacing [24 :in] :xmit [0.05 :W_m2k]}
            {:subref "D" :spacing [60 :in] :xmit [0.05 :W_m2k]}
            {:subref "E" :spacing [16 :in] :xmit [0.15 :W_m2k]}
            {:subref "F" :spacing [72 :in] :xmit [0.15 :W_m2k]}])

(declare ColumnSorter ColumnFilterer basic-sort in-set?)

(defn columns2 []
  [{:Header      "Subref"
    :accessor    :subref
    :sort-fn     basic-sort
    :Sort        ColumnSorter}
   {:Header      "Spacing"
    :accessor    #(vector Dim (:spacing %))
    :sort-fn     basic-sort
    :Sort        ColumnSorter
    :filter-pred in-set?
    :Filter      ColumnFilterer}
   {:Header      "Transmittance"
    :accessor    #(vector Dim (:xmit %))
    :sort-fn     (fn [a b] (sort a b))
    :Sort        ColumnSorter
    :filter-pred in-set?
    :Filter      ColumnFilterer}])

;; * Reagent version {{{1

(defn componentify
  "Let us use strings, [Thing x], etc. to simplify render site. (Don't use `ifn?`
   since vectors implement this)."
  [x]
  (if-not (fn? x) (constantly x) x))

(defn prepare-column
  [col]
  (-> col
      (update :Header componentify)
      (assoc :can-sort?       (boolean (:Sort col))
             :can-filter?     (boolean (and (:filter-pred col) (:Filter col)))
             :is-sorted?      false
             :is-sorted-desc? false)))

(defn prepare-row
  "Annotate a data row with :cells to be used for UI display. This is
   available separately so potentially expensive pre-display work in case
   of a paginated table can be deferred."
  [table row]
  (let [->row-vector (:->row-vector table)
        values       (->row-vector row)
        cells        (map (fn [x] {:Cell (componentify x)}) values)]
    (assoc row :cells cells)))

(defn make-lookup-table
  [keyfn ms]
  (into {} (map (juxt keyfn identity)) ms))

(defn get-headers [header-group] (sort-by :pos (vals (:headers header-group))))

(defn filter-tstate
  [tstate]
  (update tstate :rows #(take 5 %)))

(defn sort-tstate
  [tstate]
  (if-let [{:keys [col-id desc?]} (:sort-by tstate)]
    (let [col (get-in tstate [:column-table col-id])
          {accessor :accessor} col]
      (update tstate :rows (fn [rows]
                             (let [sorted (sort-by accessor rows)]
                               (if desc?  (reverse sorted) sorted)))))
    tstate))

(defn update-tstate
  "Refresh derived state in tstate. Meant to be usable in swap!"
  [tstate]
  (let [{:keys [column-table data]} tstate
        column-table' (if-let [sort-spec (:sort-by tstate)]
                        (->> column-table
                             (map (fn [[col-id col]]
                                    [col-id (let [is-sorted? (= col-id (:col-id sort-spec))
                                                  desc? (and is-sorted? (:desc? sort-spec))]
                                              (assoc col
                                                     :is-sorted? is-sorted?
                                                     :is-sorted-desc? desc?))]))
                             (into {}))
                        column-table)]
    (-> tstate
        (assoc :column-table column-table')
        (assoc :header-groups [;; ordered, only one header group for now
                               {:headers (->> (sort-by :pos (vals column-table')))}])
        (assoc :->row-vector (->> column-table' vals
                                  (sort-by :pos) (map :accessor) (apply juxt)))
        (assoc :rows data) ;; reset for next 2
        (filter-tstate)
        (sort-tstate))))

(defn make-tstate
  [{:keys [columns data]}]
  (let [column-table (->> columns
                          (map prepare-column)
                          (map-indexed (fn [i m] (assoc m :col-id i :pos i)))
                          (make-lookup-table :col-id))]
    (update-tstate {:columns columns
                    :data data
                    :column-table column-table
                    :sort-by nil})))

;; prop generation

;; these are here so the table state can control eg. resizable column widths

(defn get-table-props [tstate] {:role "table"})

(defn get-header-group-props [tstate header-group] {:role "row"})

(defn get-header-props [tstate column] {:role "columnheader"})

(defn get-tbody-props [tstate] {:role "rowgroup"})

(defn get-row-props [tstate row] {:role "row"})

(defn get-cell-props [tstate cell] {:role "cell"})

;; sorting

(defn update-table-sort
  [tstate col {:keys [desc?]}]
  (let []
    (prn "update table sort" col desc?)
    (-> tstate
        (assoc :sort-by {:col-id (:col-id col) :desc? desc?})
        (update-tstate))))

(defn ColumnSorter
  "sort! accepts a column and options"
  [_tstate col sort!]
  [:div "sort"
   [:button {:class ["border"] :onClick #(sort! col {:desc? false})} "asc"]
   [:button {:class ["border"] :onClick #(sort! col {:desc? true})} "desc"]])

;; filtering

(defn in-set? [filter-vals x] (boolean ((set filter-vals) x)))

(defn update-table-filters
  [tstate col opt]
  (update-tstate tstate))

(defn ColumnFilterer
  ;; FIXME should this know tstate is an atom? What if it's re-frame?
  [*tstate col]
  (let [all-opts (set (map (:accessor col) (:data @*tstate)))]
    [:div "filter"
     [:div {:class []}
      [:label {:class ["flex" "items-baseline"]}
       [:input {:type "checkbox"}] "All"]
      (for [opt (sort-by identity all-opts)]
        ^{:key (str opt)}
        [:label {:class ["flex" "items-baseline"]}
         [:input {:type "checkbox"
                  :onClick #(swap! *tstate update-table-filters col opt)}] opt])]]))

;; reagent-example

;; keep outside of component b/c could also be re-frame state
(def *TSTATE (rg/atom (make-tstate {:columns (columns2) :data data2})))

(defn SORT!
  [col opts]
  (swap! *TSTATE update-table-sort col opts))

(defn ReagentTable
  []
  [:<>
   (let [{:keys [header-groups rows]} @*TSTATE]
     [:table (merge (get-table-props @*TSTATE)
                    {:class "border w-full"})
      (into [:thead]
            (for [hg header-groups :let [{headers :headers} hg]]
              (into [:tr (merge
                          (get-header-group-props *TSTATE hg)
                          {:style ["border" "border-b"]})]
                    (for [column headers
                          :let [{:keys [Header Sort Filter
                                        can-sort? can-filter?
                                        is-sorted? is-sorted-desc?]} column]]
                      [:th (merge (get-header-props *TSTATE column)
                                  {:style ["border" "border-b"]})
                       [Header]
                       (when (and can-sort? is-sorted?)
                         (if is-sorted-desc? " ↓" " ↑"))
                       (when can-sort? [Sort *TSTATE column SORT!])
                       (when can-filter? [Filter *TSTATE column])]))))
      (into [:tbody (get-tbody-props @*TSTATE)]
            (for [row (map (partial prepare-row @*TSTATE) rows)
                  :let [{cells :cells} row]]
              (into [:tr (get-row-props @*TSTATE row)]
                    (for [cell cells :let [{Cell :Cell} cell]]
                      [:td (get-cell-props @*TSTATE cell) [Cell]]))))])

   [:pre {:class ["mt-5" "text-sm"]} (with-out-str (pp/pprint @*TSTATE))]])

;; }}}

;; }}}

(defn Root []
  [:div
   [:h1 {:class "text-2xl mb-2"} "React Table Demo"]
   ; [:h2 {:class "mt-6 text-blue-500"} "Plain"]
   ; [:f> PlainTable]
   ; [:h2 {:class "mt-6 text-blue-500"} "Sortable"]
   ; [:f> SortingTable]
   #_#_[:h2 {:class "mt-6 text-blue-500"} "Sortable and Filterable"]
   [:f> FilteringTable]
   [:h2 {:class ["mt-6" "text-blue-500"]} "Reagent table"]
   [ReagentTable]])

(defn ^:dev/before-load stop [])

(defn ^:dev/after-load start []
  (let [host-dom (js/document.getElementById "app")]
    (rdom/render [Root] host-dom)))

(comment
  (require '[flow-storm.api :as fsa])
  (fsa/connect))

;; vi:fdm=marker
