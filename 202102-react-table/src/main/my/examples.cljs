(ns my.examples
  (:require
   [clojure.pprint     :as pp]
   [clojure.spec.alpha :as s]
   [opengb.spork.dgrid :as dgrid]
   [reagent.core       :as rg]))

(defn ToggleSort
  [{:keys [toggle-sort] :as _sort-mutators} col]
  [:button {:class ["border" "px-2" "text-sm"] :onClick #(toggle-sort col)}
   "sort"])

(defn IndeterminateableCheckbox
  "Pass the usual {:checked bool} for checked, or {:checked \"indeterminate\"}
   for the indeterminate state. This can't be set with HTML attrs."
  [_]
  (let [*input (atom nil)
        set-indeterminate (fn [c] (let [props (rg/props c)]
                                    (set! (.-indeterminate @*input)
                                          (= (:checked props) "indeterminate"))))]
    (rg/create-class
     {:component-did-mount  set-indeterminate
      :component-did-update set-indeterminate
      :reagent-render       (fn [props]
                              [:input (assoc props
                                             :type "checkbox"
                                             :ref #(reset! *input %))])})))

(defn FilterByVals
  [filter-mutators col]
  (let [{:keys [add-filter-value
                remove-filter-value
                filter-all
                filter-none]} filter-mutators
        {values :distinct-vals
         Val :Val
         is-filtering? :is-filtering?
         filter-val-set :filter-val-set} col]
    [:<>
     [:ul
      ;; behaviour of "all" checkbox is a bit complex ... matching Excel's
      (let [all-state (cond
                        (= values filter-val-set) :checked
                        (empty? filter-val-set)   :not-checked
                        is-filtering?           :indeterminate)
            checked? (case all-state
                       :checked true
                       :not-checked false
                       :indeterminate "indeterminate")
            on-change (case all-state
                        :checked #(filter-none col)
                        :not-checked #(filter-all col)
                        :indeterminate #(filter-all col))]
        [:li [:label [IndeterminateableCheckbox
                      {:checked checked?
                       :onChange on-change}]
              "All"]])
      (for [x (sort values)]
        ^{:key x}
        [:li [:label
              [:input {:type "checkbox"
                       :value x
                       :checked (contains? filter-val-set x)
                       :onChange (if (contains? filter-val-set x)
                                   #(remove-filter-value col x)
                                   #(add-filter-value col x))}]
              [Val x]]])]]))

(defn PaginationControl
  [page-index page-count has-prev-page? has-next-page? pagination-mutators]
  (let [{:keys [goto-prev-page
                goto-next-page
                goto-page]} pagination-mutators]
    [:div {:class "flex"}
     [:div "PAGE " (inc page-index) " of " page-count]
     [:button {:class ["mx-2" "border" (when (= 0 page-index) "bg-red-500")]
               :on-click #(goto-page 0)} "first"]
     [:button {:class ["mx-2" "border" (when (not has-prev-page?) "text-gray-100")]
               :disabled (not has-prev-page?) :on-click #(goto-prev-page)} "prev"]
     [:button {:class ["mx-2" "border" (when (not has-next-page?) "text-gray-100")]
               :disabled (not has-next-page?) :on-click #(goto-next-page)} "next"]
     [:button {:class ["mx-2" "border" (when (= (dec page-count) page-index) "bg-red-500")]
               :on-click #(goto-page page-count)} "last"]]))

(defn BasicTable
  "This is an example to be re-implemented per-project, to accommodate styling
   and whether I'm using various features (eg. filtering, pagination)."
  [props]
  (let [{:keys [cols data row-props page-size page-index]} props
        *dgrid (rg/atom (dgrid/make-dgrid {:cols       cols
                                           :data       data
                                           :row-props  row-props
                                           :page-size  page-size
                                           :page-index page-index}))]
    (fn [_]
      (let [{:keys [get-table-props
                    get-thead-props
                    get-tbody-props
                    get-col-groups
                    prepare-row
                    paginated?
                    get-page
                    page-index
                    page-count
                    has-prev-page?
                    has-next-page?]} (dgrid/make-table-accessors @*dgrid)
            ;; note these fns below get the ratom-wrapped dgrid, *not* the dgrid itself
            sort-mutators (dgrid/make-ratom-sort-mutators *dgrid)
            filter-mutators (dgrid/make-ratom-col-filter-mutators *dgrid)
            pagination-mutators (dgrid/make-ratom-pagination-mutators *dgrid)]
        [:<>
         [:button {:onClick (:reset-filters filter-mutators)} "Clear all filters"]

         [:table (merge (get-table-props)
                        {:class "border w-full table-auto"})

          [:thead (get-thead-props)
           (for [col-group (get-col-groups)
                 :let [{:keys [idx get-col-group-props get-cols]} col-group]]
             ^{:key idx}
             [:tr (get-col-group-props)
              (for [col (get-cols col-group)
                    :let [{:keys [idx get-col-props render-header
                                  can-sort? is-sorted? is-sorted-desc?
                                  render-sorter
                                  can-filter?
                                  render-filterer]} col]]
                ^{:key idx}
                [:th
                 (get-col-props)
                 (render-header)
                 (when (and can-sort? is-sorted?) (if is-sorted-desc? "↓" "↑"))
                 (when can-sort? (render-sorter sort-mutators col))
                 (when can-filter? (render-filterer filter-mutators col))])])]

          [:tbody (get-tbody-props)
           (for [row (map prepare-row (get-page))
                 :let [{:keys [idx get-row-props get-cells]} row]]
             ^{:key idx}
             [:tr (get-row-props)
              (for [cell (get-cells)
                    :let [{:keys [idx get-cell-props render-cell]} cell]]
                ^{:key idx}
                [:td (get-cell-props) (render-cell)])])]]

         (when paginated?
           [PaginationControl page-index page-count has-prev-page? has-next-page?
            pagination-mutators])

         [:details {:open false}
          [:summary "Data"]
          [:pre
           {:class "text-sm"}
           (with-out-str (pp/pprint @*dgrid))]]]))))

(def simplest-props (let [MyHeader (fn [_dgrid col]
                                     (if (= (:id col) "eighth")
                                       [:div {:class "bg-blue-100"} "col 8"]
                                       [:div {:class "bg-red-300"} "???"]))
                          MyCell (fn [_dgrid cell]
                                   {:pre (s/valid? ::dgrid/cell cell)}
                                   (let [value (:val cell)]
                                     [:div {:class [(if (odd? value)
                                                      "text-blue-500"
                                                      "text-green-500")
                                                    (when (zero? (rem value 3))
                                                      "bg-yellow-100")]}
                                      value]))]
                      {:data (partition 10 (shuffle (range 200)))
                       :page-size 5
                       :cols [{:Header "col 1" :Cell MyCell}
                              {:Header "col 2" :Cell MyCell}
                              {:Header "col 3" :Cell MyCell}
                              {:Header MyHeader :Sort ToggleSort}
                              {:Header "col 5"}
                              {:Header "col 6" :Cell MyCell}
                              {:Header "col 7" :Cell MyCell}
                              {:id "eighth" :Header MyHeader :Cell MyCell}
                              {:Header "col 9" :Cell MyCell}
                              {:Header "col 10"}]}))

(def grouped-props {:data (partition 10 (range 200))
                    :cols [{:Header "First half"
                            :columns (map #(hash-map :Header (str "col " %))
                                          (range 1 6))}
                           {:Header "First half"
                            :columns (map #(hash-map :Header (str "col " %))
                                          (range 6 11))}]})

(defn SimplestExample
  []
  [BasicTable simplest-props])

(defn MapTable
  []
  (let [*foo (rg/atom #{})]
    (add-watch *foo :my-watch (fn [k reference old-state new-state]
                                (prn "changed" @*foo)
                                #_(prn "Changed!" new-state)))
    [BasicTable {:cols [{:id "w" :accessor :w
                         :Filter FilterByVals}
                        {:id "x" :accessor :x :Header "Xs"
                         :Filter FilterByVals
                         :Sort ToggleSort}
                        {:id "y" :accessor :y :Header "Ys"
                         :Sort ToggleSort
                         :Filter FilterByVals
                         :Cell (fn [_dgrid {:keys [val]}]
                                 [:div {:class "text-pink-500"} val "\""])
                         :Val (fn [val]
                                [:span val "\""])} ;; split out so filter can use it too
                        {:id "z" :accessor :z :Header "Zs"
                         :Sort ToggleSort
                         :Filter FilterByVals}
                        {:id "action"
                         :accessor identity
                         :Cell (fn [_dgrid cell]
                                 (let [value (:val cell)]
                                   [:button {:onClick #(swap! *foo (fn [s] (if (s value)
                                                                             (disj s value)
                                                                             (conj s value))))}
                                    "reactive"
                                    (str @*foo)]))}]
                 :data [{:w "A" :x 1 :y 6 :z 7}
                        {:w "B" :x 2 :y 5 :z 9}
                        {:w "C" :x 3 :y 4 :z 8}
                        {:w "D" :x 1 :y 6 :z 7}
                        {:w "E" :x 2 :y 5 :z 9}
                        {:w "F" :x 3 :y 4 :z 8}]
                 :row-props (fn [_ row] (if (odd? (:idx row))
                                          {:class "bg-blue-500"}
                                          {}))}]))

(defn BigPaginatedTable
  []
  (let [props {:data (partition 10 (range 1000))
               :page-size 10}]
    [BasicTable props]))

(comment
  (s/explain ::dgrid/args simplest-props))
