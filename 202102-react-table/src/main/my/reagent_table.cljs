(ns my.reagent-table
  "Headless table/datagrid library, inspired by react-table."
  (:require
   [clojure.test :as t :refer [deftest testing is]]
   [taoensso.timbre :as timbre]))

;; prop generation

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

;; these are here so the table state can control eg. resizable column widths

(defn get-table-props [tstate] {:role "table"})

(defn get-header-group-props [tstate header-group] {:role "row"})

(defn get-header-props [tstate column] {:role "columnheader"})

(defn get-tbody-props [tstate] {:role "rowgroup"})

(defn get-row-props [tstate row] {:role "row"})

(defn get-cell-props [tstate cell] {:role "cell"})

(defn in-set? [filter-vals x] (boolean ((set filter-vals) x)))

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

(defn replace-table-sort
  [tstate col {:keys [desc?]}]
  (let []
    ; (prn "update table sort" col desc?)
    (-> tstate
        (assoc :sort-by {:col-id (:col-id col) :desc? desc?})
        (update-tstate))))

(defn add-table-filter
  [tstate col opt]
  ; (prn "add" col opt)
  (-> tstate
      (update-in [:filters (:col-id col)] (fnil conj #{}) opt)
      (update-tstate)))

(defn remove-table-filter
  [tstate col opt]
  ; (prn "remove" col opt)
  (-> tstate
      (update-in [:filters (:col-id col)] (fnil disj #{}) opt)
      (update-tstate)))

(defn clear-table-filter
  [tstate col])

(defn has-filter-value?
  [tstate col opt]
  (let [filter-set (get-in tstate [:filters (:col-id col)] #{})]
    ; (prn filter-set (:col-id col) opt)
    (filter-set opt)))

(defn make-tstate
  "Make a new table state, given columns and data"
  [{:keys [columns data]}]
  (let [column-table (->> columns
                          (map prepare-column)
                          (map-indexed (fn [i m] (assoc m :col-id i :pos i)))
                          (make-lookup-table :col-id))]
    (update-tstate {:columns columns
                    :data data
                    :column-table column-table
                    :sort-by nil
                    :filters {}})))

(deftest is-working
  (is (= 2 1)))
