(ns my.examples
  (:require
   [clojure.pprint     :as pp]
   [clojure.spec.alpha :as s]
   [opengb.spork.dgrid :as dgrid]
   [reagent.core       :as rg]))

(defn ToggleSort
  [{:keys [toggle-sort] :as _mutators} col]
  [:button {:class ["border" "px-2" "text-sm"] :onClick #(toggle-sort col)}
   "sort"])

(defn FilterByVals
  [mutators col]
  (let [{:keys [add-filter remove-filter clear-filters]} mutators
        {values :vals render-val :render-val} col]
    [:ul
     [:li [:label [:input {:type "checkbox"}] "All"]]
     (for [x (sort values)]
       ^{:key x}
       [:li [:label [:input {:type "checkbox"}]
             (render-val x)]])]))

(defn BasicTable
  [props]
  (let [{:keys [cols data]} props
        *dgrid (rg/atom (dgrid/make-dgrid {:cols cols :data data}))]
    (fn [_]
      (let [{:keys [get-table-props
                    get-thead-props
                    get-tbody-props
                    get-col-groups
                    prepare-row
                    get-page]} (dgrid/make-table-accessors @*dgrid)
            mutators (dgrid/make-ratom-mutators *dgrid)]
        [:<>
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
                 (when can-sort? (render-sorter mutators col))
                 (when can-filter? (render-filterer mutators col))])])]

          [:tbody (get-tbody-props)
           (for [row (map prepare-row (get-page))
                 :let [{:keys [idx get-row-props get-cells]} row]]
             ^{:key idx}
             [:tr (get-row-props)
              (for [cell (get-cells)
                    :let [{:keys [idx get-cell-props render-cell]} cell]]
                ^{:key idx}
                [:td (get-cell-props) (render-cell)])])]]

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
  [BasicTable {:cols [{:id "w" :accessor :w}
                      {:id "x" :accessor :x :Header "Xs"
                       :Sort ToggleSort}
                      {:id "y" :accessor :y :Header "Ys"
                       :Sort ToggleSort
                       :Filter FilterByVals
                       :Cell (fn [_dgrid {:keys [val]}] [:div val "\""])
                       :Val (fn [val] [:span val "\""])} ;; so filter can use it too
                      {:id "z" :accessor :z :Header "Zs" :Sort ToggleSort}]
               :data [{:w "A" :x 1 :y 6 :z 7}
                      {:w "B" :x 2 :y 5 :z 9}
                      {:w "C" :x 3 :y 4 :z 8}
                      {:w "D" :x 1 :y 6 :z 7}
                      {:w "E" :x 2 :y 5 :z 9}
                      {:w "F" :x 3 :y 4 :z 8}]}])

(comment
  (s/explain ::dgrid/args simplest-props))
