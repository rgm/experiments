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
                    :let [{:keys [idx get-header-props get-header-hiccup]} h]]
                ^{:key idx}
                [:th (get-header-props) (get-header-hiccup)])])]

          [:tbody (get-tbody-props)
           (for [row (map prepare-row (get-page))
                 :let [{:keys [idx get-row-props get-cells]} row]]
             ^{:key idx}
             [:tr (get-row-props)
              (for [cell (get-cells)
                    :let [{:keys [idx get-cell-props get-cell-hiccup]} cell]]
                ^{:key idx}
                [:td (get-cell-props) (get-cell-hiccup)])])]]

         [:details {:open true}
          [:summary "Data"]
          [:pre (with-out-str (pp/pprint @*table-inst))]]]))))

(def simplest-props (let [header-fn (fn [_table-inst col]
                                      (prn col)
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
                              {:Header header-fn}
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

(comment
  (s/explain ::rt/args simplest-props))
