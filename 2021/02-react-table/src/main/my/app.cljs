(ns my.app
  "An experiment using react-table from reagent via interop and new hooks
   features."
  (:require
   [my.hooks]
   [clojure.pprint :as pp]
   [my.reagent-table :as rt]
   [reagent.core :as rg]
   [reagent.dom :as rdom]
   [my.examples]))

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

(defn tr
  "Translate for i18n"
  [k]
  (get {:in "\"" :W_m2k "W/m\u00b2\u00b7K"} k k))

(defn Dim
  [[mag unit]]
  [:div {:class ["flex" "items-baseline"]}
   [:div {:class ["text-red-700 font-bold"]} mag]
   [:div {:class (when (not= unit :in) "ml-1")} (tr unit)]])

;; * Tables {{{1

;; * Simple Vector Table {{{1

(def data3 (partition 5 (range 100)))

(def columns3
  [{:Header "col 1"}
   {:Header "col 2"}
   {:Header "col 3"}
   {:Header "col 4"}
   {:Header "col 5"}])

(defn SimpleVectorTable
  []
  (let [*tstate (rt/make-tstate {:columns columns3 :data data3})]
    (fn []
      #_[:<>
         (let [{:keys [header-groups rows]} @*tstate]
           [:table (merge (rt/get-table-props @*tstate) {:class "border w-full"})
            (into [:thead]
                  (for [hg header-groups :let [{headers :headers} hg]]
                    (into [:tr (merge
                                (rt/get-header-group-props @*tstate hg)
                                {:style ["border" "border-b"]})]
                          (for [column headers
                                :let [{:keys [Header]} column]]
                            [:th (merge (rt/get-header-props @*tstate column)
                                        {:style ["border" "border-b"]})
                             [Header]]))))
            (into [:tbody (rt/get-tbody-props @*tstate)]
                  (for [row (map (partial rt/prepare-row @*tstate) rows)
                        :let [{cells :cells} row]]
                    (into [:tr (rt/get-row-props @*tstate row)]
                          (for [cell cells :let [{Cell :Cell} cell]]
                            [:td (rt/get-cell-props @*tstate cell) [Cell]]))))])

         [:pre {:class ["mt-5" "text-sm"]} (with-out-str (pp/pprint @*tstate))]])))
;; }}}

;; so data is the stuff we put in
;; a "row" is prepared for display

(defn basic-sort [a b] (sort a b))

(defn in-set? [_] true)

(def data2 [{:subref "A" :spacing [48 :in] :xmit [0.25 :W_m2k]}
            {:subref "B" :spacing [16 :in] :xmit [0.25 :W_m2k]}
            {:subref "C" :spacing [24 :in] :xmit [0.05 :W_m2k]}
            {:subref "D" :spacing [60 :in] :xmit [0.05 :W_m2k]}
            {:subref "E" :spacing [16 :in] :xmit [0.15 :W_m2k]}
            {:subref "F" :spacing [72 :in] :xmit [0.15 :W_m2k]}])

(declare SortView FilterView)

(defn columns2 []
  [{:Header      "Subref"
    :accessor    :subref
    :sort-fn     basic-sort
    :Sort        SortView
    :filter-pred in-set?
    :Filter      FilterView}
   {:Header      "Spacing"
    :accessor    #(vector Dim (:spacing %))
    :sort-fn     basic-sort
    :Sort        SortView
    :filter-pred in-set?
    :Filter      FilterView}
   {:Header      "Transmittance"
    :accessor    #(vector Dim (:xmit %))
    :sort-fn     (fn [a b] (sort a b))
    :Sort        SortView
    :filter-pred in-set?
    :Filter      FilterView}])



;; * Reagent version {{{1

;; reagent-example

;; keep outside of component b/c could also be re-frame state


(def *TSTATE (rg/atom (rt/make-tstate {:columns (columns2) :data data2})))

;; these mutation fns will have to be composed and passed around as opaque
;; mutators since they could be a swap! on an ratom or they could be a
;; re-frame.core/dispatch. Note they're closed over the global table state atom
;; since the views don't generally get to know about this ratom.

(defn SORT!
  [col desc?]
  (swap! *TSTATE rt/replace-table-sort col desc?))

(defn ADD-FILTER!
  [col value]
  (swap! *TSTATE rt/add-table-filter col value))

(defn REMOVE-FILTER!
  [col value]
  (swap! *TSTATE rt/remove-table-filter col value))

(defn SortView
  "sort! accepts a column and options"
  [_tstate col sort!]
  [:div {:class "flex"}
   "sort"
   [:button {:class ["border" "border-gray-400" "px-1"] :onClick #(sort! col false)} "asc"]
   [:button {:class ["border" "border-gray-400" "px-1"] :onClick #(sort! col true)} "desc"]])

(defn FilterView
  "Accept a `ADD-FILTER!` fn that takes in a "
  [tstate col add-filter! remove-filter!]
  (let [all-opts (set (map (:accessor col) (:data tstate)))]
    [:div "Filter"
     [:div {:class []}
      [:label {:class ["flex" "items-baseline"]}
       [:input {:type "checkbox"
                :checked true
                :onChange #(prn "changed!")}] "All"]
      (for [opt (sort-by identity all-opts)]
        ^{:key (str opt)}
        [:label {:class ["flex" "items-baseline"]}
         (let [checked? (rt/has-filter-value? tstate col opt)
               on-change (when checked?

                           #(remove-filter! col opt)
                           #(add-filter! col opt))]
           [:input {:type "checkbox"
                    :checked checked?
                    :onChange on-change}]) opt])]
     [:button {:class ["border" "px-1"]} "Clear filter"]]))

(defn ReagentTable
  []
  [:<>
   (let [tstate @*TSTATE
         {:keys [header-groups rows]} tstate]
     [:table (merge (rt/get-table-props tstate) {:class "border w-full"})
      (into [:thead {:class "bg-gray-200 border border-b text-gray-600"}]
            (for [hg header-groups :let [{headers :headers} hg]]
              (into [:tr (merge
                          (rt/get-header-group-props *TSTATE hg)
                          {:style ["border" "border-b"]})]
                    (for [column headers
                          :let [{:keys [Header Sort Filter
                                        can-sort? can-filter?
                                        is-sorted? is-sorted-desc?]} column]]
                      [:th (merge (rt/get-header-props *TSTATE column)
                                  {:class ["font-normal"]})
                       [Header]
                       (when (and can-sort? is-sorted?)
                         (if is-sorted-desc? " ↓" " ↑"))
                       (when can-sort? [Sort tstate column SORT!])
                       (when can-filter? [Filter tstate column
                                          ADD-FILTER! REMOVE-FILTER!])]))))
      (into [:tbody (rt/get-tbody-props tstate)]
            (for [row (map (partial rt/prepare-row tstate) rows)
                  :let [{cells :cells} row]]
              (into [:tr (rt/get-row-props tstate row)]
                    (for [cell cells :let [{Cell :Cell} cell]]
                      [:td (rt/get-cell-props tstate cell) [Cell]]))))])

   [:pre {:class ["mt-5" "text-sm"]} (with-out-str (pp/pprint (:filters @*TSTATE)))]])

;; }}}

;; }}}

(defn H2 [s] [:h2 {:class ["text-2xl" "mt-6" "mb-4" "font-bold" "text-purple-200"]} s])

(defn Root []
  [:div
   [:h1 {:class "text-3xl mb-2"} "React Table Demo"]
   ; [H2 "react-table Plain"]
   ; [:f> PlainTable]
   ; [H2 "react-table Sortable"]
   ; [:f> SortingTable]
   ; [H2 "react-table Sortable and Filterable"]
   ; [:f> FilteringTable]

   [:<> [H2 "Just numbers"]        [my.examples/JustNumbers]]
   [:<> [H2 "Big Paginated Table"] [my.examples/BigPaginatedTable]]
   [:<> [H2 "Simple map table"]    [my.examples/MapTable]]
   [:<> [H2 "V5"]                  [my.examples/SimplestExample]]

   ; [H2 "Simple vector table"]
   ; [SimpleVectorTable]
   ; [H2 "Reagent table"]
   ; [ReagentTable]
])

(defn ^:dev/before-load stop [])

(defn ^:dev/after-load start []
  (let [host-dom (js/document.getElementById "app")]
    (rdom/render [Root] host-dom)))

(comment
  (require '[flow-storm.api :as fsa])
  (tap> {:hi "there"})
  (fsa/connect))

;; vi:fdm=marker
