(ns opengb.spork.dgrid-example
  (:require
   [opengb.spork.dgrid :as dgrid]
   [reagent.core]))

(defn BasicTable
  [props]
  (let [{:keys [cols data]} props
        *dgrid (reagent.core/atom (dgrid/make-dgrid {:cols cols :data data}))]
        ;; set up initial state   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
    (fn [_]
      (let [{:keys [get-table-props
                    get-thead-props
                    get-tbody-props
                    get-col-groups
                    prepare-row
                    get-page]} (dgrid/make-table-accessors @*dgrid)]
        [:table (get-table-props)
          [:thead (get-thead-props)
           (for [col-group (get-col-groups)
                 :let [{:keys [idx get-col-group-props get-cols]} col-group]]
             ^{:key idx}
             [:tr (get-col-group-props)
              (for [col (get-cols col-group)
                    :let [{:keys [idx get-col-props render-header]} col]]
                ^{:key idx}
                [:th (get-col-props) (render-header)])])]
          [:tbody (get-tbody-props)
           (for [row (map prepare-row (get-page))
                 :let [{:keys [idx get-row-props get-cells]} row]]
             ^{:key idx}
             [:tr (get-row-props)
              (for [cell (get-cells)
                    :let [{:keys [idx get-cell-props render-cell]} cell]]
                ^{:key idx}
                [:td (get-cell-props) (render-cell)])])]]))))
