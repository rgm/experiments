(ns my.hooks
  (:require
   [cljs-bean.core :refer [bean ->clj ->js]]
   [react :refer [useMemo]]
   [react-table :refer [useTable useSortBy useFilters]]
   [reagent.core :as rg]))

(declare SelectColumnFilter)
(declare CheckboxFilter)
(declare Dim)

;; * Helper views {{{1

(defn tr
  "Translate for i18n"
  [k]
  (get {:in "\"" :W_m2k "W/m\u00b2\u00b7K"} k k))

(defn Dim
  [[mag unit]]
  [:div {:class ["flex" "items-baseline"]}
   [:div {:class ["text-red-700 font-bold"]} mag]
   [:div {:class (when (not= unit :in) "ml-1")} (tr unit)]])

(defn Button
  [props label]
  [:button (merge props {:class ["border" "border-black" "px-2" "py-1" "hover:bg-red-200"]})
   label])

;; }}}

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
                     [Button {} "Clear filter"]]])))

(defn FilteringTable
  "Wrap up all hooks goop so from clojure's point of view we're just stuffing
   in a coll of columns and a coll of data."
  []
  (let [memoized-columns (useMemo #(->js columns) #js [])
        memoized-data    (useMemo #(->js data) #js [])
        filter-types     (useMemo (fn []
                                    (->js {:text (fn [rows id filter-value]
                                                   ; (prn rows id filter-value)
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

