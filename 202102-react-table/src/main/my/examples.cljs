(ns my.examples
  (:require
   [clojure.pprint :as pp]
   [clojure.spec.alpha :as s]
   [clojure.string :as str]
   [my.rtable2 :as rt]
   [reagent.core :as rg]))

(defn BasicTable
  [props]
  (let [{:keys [cols data]} props
        *table-inst (rg/atom (rt/make-table-inst {:cols cols :data data}))]
    (fn [_]
      (let [ti (deref *table-inst)
            {:keys [get-table-props
                    get-thead-props
                    get-tbody-props
                    get-header-groups
                    prepare-row
                    get-page]} (rt/make-accessors ti)]
        [:<>
         [:table (merge (get-table-props)
                        {:class "border w-full table-auto"})

          [:thead (get-thead-props)
           (for [header-group (get-header-groups)
                 :let [{:keys [idx get-header-group-props get-headers]} header-group]]
             ^{:key idx}
             [:tr (get-header-group-props)
              (for [h (get-headers header-group)
                    :let [{:keys [idx get-header-props get-header-hiccup
                                  can-sort? is-sorted? is-sorted-desc?]} h]]
                ^{:key idx}
                [:th
                 (get-header-props)
                 (get-header-hiccup)
                 (when (and can-sort? is-sorted?) (if is-sorted-desc? " ↓" " ↑"))
                 (when can-sort?
                   ;; FIXME use :Sort
                   [:<>
                    [:button {:onClick #(swap! *table-inst
                                               rt/set-sort
                                               [{:id (:id h)
                                                 :desc? (and is-sorted?
                                                             (not is-sorted-desc?))}])}
                     "SORT"]])])])]

          [:tbody (get-tbody-props)
           (for [row (map prepare-row (get-page))
                 :let [{:keys [idx get-row-props get-cells]} row]]
             ^{:key idx}
             [:tr (get-row-props)
              (for [cell (get-cells)
                    :let [{:keys [idx get-cell-props get-cell-hiccup]} cell]]
                ^{:key idx}
                [:td (get-cell-props) (get-cell-hiccup)])])]]

         [:details {:open false}
          [:summary "Data"]
          [:pre
           {:class "text-sm"}
           (with-out-str (pp/pprint @*table-inst))]]]))))

(def simplest-props (let [header-fn (fn [_table-inst col]
                                      (if (= (:id col) "eighth")
                                        [:div {:class "bg-blue-100"} "col 8"]
                                        [:div {:class "bg-red-300"} "???"]))
                          cell-fn (fn [_ cell]
                                    {:pre (s/valid? ::rt/cell cell)}
                                    (let [value (:val cell)]
                                      [:div {:class [(if (odd? value)
                                                       "text-blue-500"
                                                       "text-green-500")
                                                     (when (zero? (rem value 3))
                                                       "bg-yellow-100")]}
                                       value]))]
                      {:data (partition 10 (range 200))
                       :cols [{:Header "col 1" :Cell cell-fn}
                              {:Header "col 2" :Cell cell-fn}
                              {:Header "col 3" :Cell cell-fn}
                              {:Header header-fn :Sort true}
                              {:Header "col 5" :Cell cell-fn}
                              {:Header "col 6" :Cell cell-fn}
                              {:Header "col 7" :Cell cell-fn}
                              {:id "eighth" :Header header-fn :Cell cell-fn}
                              {:Header "col 9" :Cell cell-fn}
                              {:Header "col 10"}]}))

(def grouped-props {:data (partition 10 (range 200))
                    :cols [{:Header "First half"
                            :columns (map #(hash-map :Header (str "col " %))
                                          (range 1 6))}
                           {:Header "First half"
                            :columns (map #(hash-map :Header (str "col " %))
                                          (range 6 11))}]})

(def function-header-and-cells {:data [{:x [10 :in]}]
                                :cols [{:Header (fn [_table-inst _col-model]
                                                  [:div {:class "text-red-500"} "hi"])
                                        :Cell   (fn [_table-inst cell-model]
                                                  (let [value (:value cell-model)]
                                                    [:div {:class "text-green-500"} value]))
                                        :accessor :subref}]})

(defn SimplestExample
  []
  [BasicTable simplest-props])

(defn MapTable
  []
  (let [sort-fn (fn [] [:div [:button {} "asc"] [:button {} "desc"]])]
    [BasicTable {:cols [{:id "w" :accessor :w}
                        {:id "x" :accessor :x :Header "Xs"
                         :Sort sort-fn}
                        {:id "y" :accessor :y :Header "Ys"
                         :Sort sort-fn
                         :Cell (fn [_ {:keys [val]}] [:div val "\""])}
                        {:id "z" :accessor :z :Header "Zs" :Sort sort-fn}]
                 :data [{:w "A" :x 1 :y 6 :z 7}
                        {:w "B" :x 2 :y 5 :z 9}
                        {:w "C" :x 3 :y 4 :z 8}]}]))

(comment
  (s/explain ::rt/args simplest-props))
