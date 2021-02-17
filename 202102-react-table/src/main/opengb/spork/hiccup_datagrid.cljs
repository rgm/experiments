(ns opengb.spork.hiccup-datagrid
  "Headless datagrid library inspired by react-table.

   Provides a state data structure for a datagrid that can be held in a reagent
   ratom or a re-frame app-db."
  (:require
   [clojure.spec.alpha :as s]
   [clojure.test :as t :refer [deftest testing is]]))

;; glossary + big concepts

;; the big idea is that we have columns and rows as first-class structures, and
;; what we toss into making a datagrid should require minimal processing.
;; we supply some minimal columns as maps
;; we supply data as either:
;; a) a seq of sequentials (ie. a vector of floats, like what you'd get from a CSV) or
;; b) a seq of maps

;; a "datagrid" refers to this headless data structure ... a big nested map
;; here with no UI dependencies.

;; a "table" refers to an HTML table UI (or something similar like nested divs)

;; "data" is raw rows (vector of x or map k:x) supplied by user

;; a "raw column" is supplied by a user and is supplemented by make-datagrid-inst

;; header, row, cell are vended by the table instance and are model objects
;; with properties to help with display via hiccup (eg. props, render fns that
;; generate hiccup)

;; a "header" is the th equivalent of a td "cell" and acts similarly (meant for UI)

;; * helpers {{{1

(defn- valid?
  [spec x]
  (let [result (s/valid? spec x)]
    (when-not result (s/explain spec x))
    result))

(defn- hiccup? [x] (or (string? x) (number? x) (fn? x)))

;; }}}

;; * specs {{{1

(s/def ::dgrid map?) ;; opaque outside, but can do better here

(s/def ::table-accessors (s/keys :req-un [::get-table-props
                                          ::get-thead-props
                                          ::get-tbody-props
                                          ::get-col-groups
                                          ::prepare-row
                                          ::get-page]))

(s/fdef make-table-accessors
        :args (s/cat :dgrid ::dgrid)
        :ret  ::table-accessors)

(s/def ::raw-sample (s/or :vec (s/and (s/coll-of hiccup?) sequential?)
                          :map (s/map-of keyword? hiccup?)))

(s/def ::Header hiccup?)

(s/def ::raw-col (s/keys :opt-un [::Header ::id ::accessor]))

(s/def :opengb.spork.datagrid.raw/data (s/coll-of ::raw-sample))

(s/def :opengb.spork.datagrid.raw/cols (s/+ ::raw-col))

(s/def ::args (s/keys :req-un [:opengb.spork.datagrid.raw/data
                               :opengb.spork.datagrid.raw/cols]))

(s/def ::col-group (s/keys :req-un [::cols] :opt-un [::col-group-props]))

(s/def ::col (s/keys :req-un [::id]
                     :opt-un [::header-props ::Footer ::footer-props
                              ::Header ::Cell]))

(s/def ::row (s/keys :req-un [::idx ::cells]
                     :opt-un [::row-props]))

(s/def ::cell (s/keys :req-un [::col ::row ::val ::Cell]
                      :opt-un [::cell-props]))

(s/def ::id (s/or :num number? :str string?))
(s/def :my.rtable2/desc? boolean?)
(s/def ::sort-descriptor (s/keys :req-un [::id :my.rtable2/desc?]))
(s/def ::sort-descriptors (s/+ ::sort-descriptor))

;; }}}

(def default-col-model {:Header        (fn [_dgrid _col-model]
                                         "")
                        :Cell          (fn [_dgrid cell-model]
                                         (str (:val cell-model)))
                        :get-col-props (fn [] {:role "columnheader"})})

(def default-row-model {:get-row-props (fn [] {:role "row"})})

(def default-cell-model {:get-cell-props (fn [] {:role "cell"})})

(defn prepare-row
  "Prepare the row for UI display. Split out and applied by the user at render
   time so that it's only done to the rows just about to be displayed."
  [dgrid row]
  (let [row-data      (:data row)
        prepared-cols (:prepared-cols dgrid)
        cells (reduce (fn [acc col]
                        (let [{:keys [accessor idx]} col
                              value  (accessor row-data)
                              cell   (merge
                                      default-cell-model
                                      {:idx idx
                                       :row row
                                       :col col
                                       :val value})
                              ;; tack on render fn later so we can close over the cell
                              ;; and provide a zero-arg render fn
                              cell' (assoc cell :get-cell-hiccup
                                           (fn [] ((:Cell col) dgrid cell)))]
                          (conj acc cell')))
                      []
                      prepared-cols)]
    (merge default-row-model
           (assoc row :get-cells (fn [] cells)))))

(defn prepare-cols
  [cols]
  (map-indexed
   (fn [i col]
     (let [can-sort? (boolean (:Sort col))]
       (merge default-col-model
              (assoc col
                     :idx      i
                     :id       (or (:id col) i)
                     :accessor (or (:accessor col) (fn [d] (nth d i)))
                     :can-sort? can-sort?))))
   cols))

(defn add-header-render-fns
  "Need as a last step since other stuff relies on prepared-cols."
  [dgrid]
  {:pre [(valid? ::dgrid dgrid)] :post [(valid? ::dgrid %)]}
  (update dgrid :prepared-cols
          (fn [cols]
            (map (fn [col]
                   (let [?hiccup-fn (:Header col)]
                     (assoc col :get-header-hiccup
                            (if (fn? ?hiccup-fn)
                              (fn [] (?hiccup-fn dgrid col))
                              (fn [] (str ?hiccup-fn))))))
                 cols))))

(defn add-col-sort-data
  "Relies on whole table inst.

   sort-by has form [{:id n :desc? bool},,,]"
  [dgrid]
  {:pre [(valid? ::dgrid dgrid)] :post [(valid? ::dgrid %)]}
  (let [sort-lookup (into {} (map (fn [{:keys [id desc?]}]
                              [id (case desc?
                                    ;; need to disambiguate false from nil
                                    false :asc
                                    true :desc
                                    nil)]))
                    (:sort-descriptors dgrid))]
    (update dgrid :prepared-cols
            (fn [cols]
              (map (fn [col]
                     (let [sort-k (get sort-lookup (:id col))]
                       (assoc col
                              :is-sorted? (boolean sort-k)
                              :is-sorted-desc? (= :desc sort-k))))
                   cols)))))

(defn prepare-col-groups
  "Only does single nesting for now."
  [dgrid]
  {:pre [(valid? ::dgrid dgrid)] :post [(valid? ::dgrid %)]}
  (assoc dgrid :col-groups
         [{:idx                 0
           :get-col-group-props (fn [] {:role "row"})
           :get-cols            (fn [] (:prepared-cols dgrid))}]))

(defn filter-rows
  [dgrid]
  {:pre [(valid? ::dgrid dgrid)] :post [(valid? ::dgrid %)]}
  (assoc dgrid :rows (:prepared-data dgrid)))

(defn get-col
  [dgrid col-id]
  ;; OPTIMIZE don't do a linear scan, use a table?
  (let [cols (:prepared-cols dgrid)]
    (some->> cols (filter (fn [col] (= col-id (:id col)))) first)))

(defn sort-rows
  "Sort the rows per the sort descriptors in :sort-descriptors."
  [dgrid]
  {:pre [(valid? ::dgrid dgrid)] :post [(valid? ::dgrid %)]}
  ;; TODO extend this; does single descriptor at the moment
  (let [data        (:prepared-data dgrid)
        descriptors (:sort-descriptors dgrid)]
    (if (empty? descriptors)
      (assoc dgrid :rows data)
      (let [descriptor  (first descriptors)
            {col-id :id desc? :desc?} descriptor
            col         (get-col dgrid col-id)
            accessor    (:accessor col)
            sorted-rows (sort-by #(-> % :data accessor) data)]
        (assoc dgrid :rows (if desc?
                                  (reverse sorted-rows)
                                  sorted-rows))))))

(defn trim-page
  "Trim the rows to only the visible page."
  [dgrid]
  {:pre [(valid? ::dgrid dgrid)] :post [(valid? ::dgrid %)]}
  ;; TODO implement me - no pagination yet
  (assoc dgrid :page (:rows dgrid)))

(defn derive-dgrid-state
  [dgrid]
  {:pre [(valid? ::dgrid dgrid)] :post [(valid? ::dgrid %)]}
  (-> dgrid
      (add-col-sort-data)
      (filter-rows)
      (sort-rows)
      (trim-page)
      (add-header-render-fns)
      (prepare-col-groups)))

(defn make-dgrid
  [{:keys [data cols] :as args}]
  {:pre [(valid? ::args args)] :post [(valid? ::dgrid %)]}
  (let [base-dgrid (assoc args
                          :table-props      {:role "table"}
                          :thead-props      {:role "rowgroup"}
                          :tbody-props      {:role "rowgroup"}
                          :prepared-data    (map-indexed (fn [i x] {:idx i :data x}) data)
                          :prepared-cols    (prepare-cols cols)
                          :sort-descriptors []
                          :filters          {})]
    (derive-dgrid-state base-dgrid)))

(defn set-sort
  "Replace sort descriptors entirely.

   A sort descriptor is a map `{:id \"a-col-id\" :desc? true}`"
  [dgrid sort-descriptors]
  {:pre [(valid? ::dgrid dgrid) (valid? ::sort-descriptors sort-descriptors)]
   :post [(valid? ::dgrid %)]}
  (-> dgrid
      (assoc :sort-descriptors sort-descriptors)
      (derive-dgrid-state)))

(defn clear-sort
  "Clear sort descriptors."
  [dgrid]
  {:pre [(valid? ::dgrid dgrid)] :post [(valid? ::dgrid %)]}
  (-> dgrid
      (assoc :sort-descriptors [])
      (derive-dgrid-state)))

;; "table accessors" are specifically about rendering html tables.
;; They're fns so that we can delay everything to render time
;; and have the current state of the dgrid instance available, eg. to
;; the header or cell render fns, but without having to really know the
;; fn signatures or remember to pass the dgrid in all the time.

(defn make-table-accessors
  "Close over the table instance to provide simple accessors within a
   component."
  [dgrid]
  {:get-table-props (fn []    (get dgrid :table-props))
   :get-thead-props (fn []    (get dgrid :thead-props))
   :get-tbody-props (fn []    (get dgrid :tbody-props))
   :get-col-groups  (fn []    (get dgrid :col-groups))
   :get-page        (fn []    (get dgrid :page))
   :prepare-row     (fn [row] (prepare-row dgrid row))})

;; mutators aren't super satisfying; we need the mutation outside of the
;; namespace and have to write custom fns maybe we provide adapters? ... a fn
;; that takes the ratom and produces this fn, or takes a set of dispatches

(defn make-ratom-sort-toggle-fn
  "For the ratom reactivity strategy, make an event handler fn to toggle the
   sort. Cycles through unsorted -> ascending -> descending -> unsorted."
  [*dgrid]
  {:pre [(instance? reagent.ratom.RAtom *dgrid)]}
  (fn [col]
    (let [{:keys [id is-sorted? is-sorted-desc?]} col]
      (case [is-sorted? is-sorted-desc?]
        [false false] (swap! *dgrid set-sort [{:id id :desc? false}])
        [false true]  (swap! *dgrid set-sort [{:id id :desc? false}])
        [true  false] (swap! *dgrid set-sort [{:id id :desc? true}])
        (swap! *dgrid clear-sort)))))

;; vi:fdm=marker
