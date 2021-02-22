(ns opengb.spork.dgrid
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

(defn- component? [?f] (fn? ?f))

(defn- hiccup? [x] (or (string? x) (number? x) (component? x)))

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
                          :map (s/map-of keyword? any?)))

(s/def ::Header hiccup?)

(s/def ::Sort component?)

(s/def ::Filter component?)

(s/def ::Val component?)

(s/def ::raw-col (s/keys :opt-un [::Header ::id ::accessor ::Sort ::Filter]))

(s/def :opengb.spork.datagrid.raw/data (s/coll-of ::raw-sample))

(s/def :opengb.spork.datagrid.raw/cols (s/+ ::raw-col))

(s/def ::args (s/keys :req-un [:opengb.spork.datagrid.raw/data
                               :opengb.spork.datagrid.raw/cols]))

(s/def ::col-group (s/keys :req-un [::cols] :opt-un [::col-group-props]))

(s/def ::col (s/keys :req-un [::id]
                     :opt-un [::header-props ::Footer ::footer-props
                              ::Header ::Val ::Cell]))

(s/def ::row (s/keys :req-un [::idx ::cells]
                     :opt-un [::row-props]))

(s/def ::cell (s/keys :req-un [::col ::row ::val ::Cell]
                      :opt-un [::cell-props]))

(s/def ::id (s/or :num number? :str string? :key keyword?))
(s/def :my.rtable2/desc? boolean?)
(s/def ::sort-descriptor (s/keys :req-un [::id :my.rtable2/desc?]))
(s/def ::sort-descriptors (s/+ ::sort-descriptor))

;; }}}

(def default-col-model {:Header        (fn [_dgrid _col-model]
                                         "")
                        :Cell          (fn [_dgrid cell-model]
                                         (str (:val cell-model)))
                        :Val           (fn [val] (str val))
                        :get-col-props (fn [] {:role "columnheader"})
                        :sort-fn       identity ;; do this to the accessor val for sort-by
                        :filter-pred   (fn [valset val]
                                         ;; default to set membership check
                                         ;; most excel-like
                                         (contains? valset val))})

(def default-row-model {})

(def default-cell-model {:get-cell-props (fn [] {:role "cell"})})

(defn prepare-row
  "Prepare the row for UI display. Split out and applied by the user at render
   time so that it's only done to the rows just about to be displayed."
  [dgrid row]
  (let [row-data      (:data row)
        prepared-cols (:prepared-cols dgrid)
        get-row-props (let [f (or (:row-props dgrid) (fn [_ _] nil))]
                        (fn [] (merge (f dgrid row) {:role "row"})))
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
                              ;; and provide zero-arg render fns
                              cell' (assoc cell :render-cell (fn render-cell []
                                                               ((:Cell col) dgrid cell)))]
                          (conj acc cell')))
                      []
                      prepared-cols)]
    (merge default-row-model
           (assoc row
                  :get-row-props get-row-props
                  :get-cells (fn [] cells)))))

(defn prepare-cols
  [data cols]
  (map-indexed
   (fn [i col]
     (let [can-sort?     (boolean (:Sort col))
           can-filter?   (boolean (:Filter col))
           accessor      (or (:accessor col) (fn [d] (nth d i)))
                           ;; OPTIMIZE can we just accept these as input?
                           ;; What about 10,000 row tables?
           distinct-vals (into #{} (map (comp accessor :data)) data)]
       (merge default-col-model
              (assoc col
                     :idx           i
                     :id            (or (:id col) i)
                     :accessor      accessor
                     :distinct-vals distinct-vals ;; for filtering UI's use
                     :can-sort?     can-sort?
                     :can-filter?   can-filter?))))
   cols))

(defn add-header-render-fns
  "Need as a last step since other stuff relies on prepared-cols."
  [dgrid]
  {:pre [(valid? ::dgrid dgrid)] :post [(valid? ::dgrid %)]}
  (update dgrid :prepared-cols
          (fn [cols]
            (map (fn [col]
                   (let [?hiccup-fn (:Header col)]
                     (-> col
                         (assoc :render-header (if (fn? ?hiccup-fn)
                                                     (fn [] (?hiccup-fn dgrid col))
                                                     (fn [] (str ?hiccup-fn))))
                         (assoc :render-sorter (:Sort col))
                         (assoc :render-filterer (:Filter col)))))
                 cols))))

(defn add-sort-state-to-cols
  "Annotate the cols with current sorting state to that eg. the header UI can
   reflect it.

   :sort-descriptors has form [{:id n :desc? bool},,,]"
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

(defn add-filter-state-to-cols
  "Annotate the cols with current filtering state so that eg. the header UI can
   reflect it.

   :filters has form {col-id #{val1 val2}}"
  [dgrid]
  {:pre [(valid? ::dgrid dgrid)] :post [(valid? ::dgrid %)]}
  (let [filters (:filters dgrid)]
    (update dgrid :prepared-cols
            (fn [cols]
              (map (fn [col]
                     (let [values  (:distinct-vals col)
                           val-set (get filters (:id col) #{})]
                       (assoc col
                              :filter-val-set val-set
                              :is-filtering? (not= val-set values))))
                   cols)))))

(defn prepare-col-groups
  "Only does single nesting for now."
  [dgrid]
  {:pre [(valid? ::dgrid dgrid)] :post [(valid? ::dgrid %)]}
  (assoc dgrid :col-groups
         [{:idx                 0
           :get-col-group-props (fn [] {:role "row"})
           :get-cols            (fn [] (:prepared-cols dgrid))}]))

(defn get-col
  [dgrid col-id]
  ;; OPTIMIZE don't do a linear scan, use a table?
  (let [cols (:prepared-cols dgrid)]
    (some->> cols (filter (fn [col] (= col-id (:id col)))) first)))

(defn make-compound-filter
  "For each column in filters, make a predicate. The resulting filter is
   compound-filter :: row -> boolean and is an AND of the individual filters.
   We use the :filter-pred for each column, and `filters` is of the form
   {\"col-id\" #{:a-val :another-val} ,,,}"
  [dgrid filters]
  (let [make-pred (fn [[col-id val-set]]
                     (let [col (get-col dgrid col-id)
                           {:keys [filter-pred accessor]} col]
                       (fn [row]
                         (let [val-to-check (accessor (:data row))
                               filter? (filter-pred val-set val-to-check)]
                         filter?))))]
    (apply every-pred (map make-pred filters))))

(defn filter-rows
  "Set :rows to reflect the various filters."
  [dgrid]
  {:pre [(valid? ::dgrid dgrid)] :post [(valid? ::dgrid %)]}
  (let [filters (:filters dgrid)
        prepared-data (:prepared-data dgrid)]
    (if (empty? filters)
      (assoc dgrid :rows prepared-data)
      (let [compound-filter (make-compound-filter dgrid filters)]
        (assoc dgrid :rows (filter compound-filter prepared-data))))))

(defn sort-rows
  "Sort the rows per the sort descriptors in :sort-descriptors."
  [dgrid]
  {:pre [(valid? ::dgrid dgrid)] :post [(valid? ::dgrid %)]}
  ;; TODO extend this; does single descriptor at the moment
  (let [data        (:rows dgrid)
        descriptors (:sort-descriptors dgrid)]
    (if (empty? descriptors)
      (assoc dgrid :rows data)
      (let [descriptor  (first descriptors)
            {col-id :id desc? :desc?} descriptor
            col         (get-col dgrid col-id)
            accessor    (:accessor col)
            sort-fn     (:sort-fn col)
            sorted-rows (sort-by #(-> % :data accessor sort-fn) data)]
        (assoc dgrid :rows (if desc?
                                  (reverse sorted-rows)
                                  sorted-rows))))))

(defn trim-page
  "Trim the rows to only the visible page."
  [dgrid]
  {:pre [(valid? ::dgrid dgrid)] :post [(valid? ::dgrid %)]}
  ;; TODO implement me - no pagination yet
  (assoc dgrid :page (:rows dgrid)))

(defn filter-all-for-cols
  "Start all filters off with filter-all. Make sure this happens *after*
   prepare-cols has boiled down the column values for the provided data."
  [prepared-cols]
  (reduce (fn [acc col]
                 (if (:can-filter? col)
                   (assoc acc (:id col) (set (:distinct-vals col)))
                   acc))
               {} prepared-cols))

(defn derive-dgrid-state
  [dgrid]
  {:pre [(valid? ::dgrid dgrid)] :post [(valid? ::dgrid %)]}
  (-> dgrid
      (add-filter-state-to-cols)
      (filter-rows)
      (add-sort-state-to-cols)
      (sort-rows)
      (trim-page)
      (add-header-render-fns)
      (prepare-col-groups)))

(defn make-dgrid
  [{:keys [data cols sort-descriptors row-props] :as args}]
  {:pre [(valid? ::args args)] :post [(valid? ::dgrid %)]}
  (let [prepared-data (map-indexed (fn [i x] {:idx i :data x}) data)
        prepared-cols (prepare-cols prepared-data cols)
        base-dgrid (assoc args
                          :table-props      {:role "table"}
                          :thead-props      {:role "rowgroup"}
                          :tbody-props      {:role "rowgroup"}
                          :row-props        (or row-props)
                          :prepared-data    prepared-data
                          :prepared-cols    prepared-cols
                          :sort-descriptors (or sort-descriptors [])
                          :filters          (filter-all-for-cols prepared-cols))]
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

;; filter mutators

;; filters are a little weird in that there's no real "filter none" state ...
;; what would be the point? You'd just end up with an empty table. So the
;; design choice here for users is to make filtering with #{} functionally
;; equivalent to filtering with the set of a column's distinct values: you
;; get all of the rows. This is Excel's behaviour. It's implemented as such
;; in `filter-rows` by special-casing an empty #{} to not filter at all.
;;
;; But there *is* a useful distinction in the filtering UI: being able to
;; filter-none, *then* add one filter lets you isolate a value's rows with two
;; clicks. Being able to filter-all then remove one filter lets you hide a
;; value's rows with two clicks. Otherwise, one or the other would require
;; (count distinct-vals) - 1 clicks.

(defn add-filter
  [dgrid col val]
  {:pre [(valid? ::dgrid dgrid)] :post [(valid? ::dgrid %)]}
  (-> dgrid
      (update-in [:filters (:id col)] (fnil conj #{}) val)
      (derive-dgrid-state)))

(defn remove-filter
  [dgrid col val]
  {:pre [(valid? ::dgrid dgrid)] :post [(valid? ::dgrid %)]}
  (-> dgrid
      (update :filters (fn [filters]
                         (let [val-set (get filters (:id col))
                               val-set' (disj val-set val)]
                           ;; don't leave an empty set around; it'll futz with
                           ;; reductions elsewhere ... dissoc the key entirely
                           (if (empty? val-set')
                             (dissoc filters (:id col))
                             (assoc filters (:id col) val-set')))))
      (derive-dgrid-state)))

(defn filter-none
  "Set col filter to none of the column's values."
  [dgrid col]
  {:pre [(valid? ::dgrid dgrid)] :post [(valid? ::dgrid %)]}
  (-> dgrid
      (update :filters #(dissoc % (:id col)))
      (derive-dgrid-state)))

(defn filter-all
  "Set col filter to all of the column's values. Do all columns if no col
   supplied."
  ([dgrid col]
   {:pre [(valid? ::dgrid dgrid)] :post [(valid? ::dgrid %)]}
   (-> dgrid
       (assoc-in [:filters (:id col)] (set (:distinct-vals col)))
       (derive-dgrid-state)))
  ([dgrid]
   {:pre [(valid? ::dgrid dgrid)] :post [(valid? ::dgrid %)]}
   (let [filters (->> dgrid
                      :prepared-cols
                      (filter :can-filter?)
                      (map (fn [{:keys [id distinct-vals]}]
                                 [id distinct-vals])
                               (:prepared-cols dgrid))
                      (into {}))]
     (-> dgrid
         (assoc :filters filters)
         (derive-dgrid-state)))))

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

(defn get-prepared-data
  "Return the original data, after filters and sorts have been applied. Useful
   for companion views (eg. charts) that should respect what data is actually
   visible."
  [dgrid]
  (some->> dgrid :rows (map :data)))

;; mutators aren't super satisfying; we need the mutation outside of the
;; namespace and have to write custom fns maybe we provide adapters? ... a fn
;; that takes the ratom and produces this fn, or takes a set of dispatches

(defn make-ratom-sort-toggle-fn
  "For the ratom reactivity strategy, make an event handler fn to toggle the
   sort. Cycles through unsorted -> ascending -> descending -> unsorted."
  [*dgrid]
  (fn [col]
    (let [{:keys [id is-sorted? is-sorted-desc?]} col]
      (case [is-sorted? is-sorted-desc?]
        [false false] (swap! *dgrid set-sort [{:id id :desc? false}])
        [false true]  (swap! *dgrid set-sort [{:id id :desc? false}])
        [true  false] (swap! *dgrid set-sort [{:id id :desc? true}])
        (swap! *dgrid clear-sort)))))

(defn make-ratom-mutators
  [*dgrid]
  {:pre [(instance? reagent.ratom.RAtom *dgrid)]}
  {:toggle-sort         (make-ratom-sort-toggle-fn *dgrid)
   :add-filter-value    (fn [col val] (swap! *dgrid add-filter col val))
   :remove-filter-value (fn [col val] (swap! *dgrid remove-filter col val))
   :filter-all          (fn [col] (swap! *dgrid filter-all col))
   :filter-none         (fn [col] (swap! *dgrid filter-none col))})

(defn make-ratom-reset-filters-fn
  "Make a reset-all-filters fn for ratom strategy."
  [*dgrid]
  {:pre [(instance? reagent.ratom.RAtom *dgrid)]}
  (fn [] (swap! *dgrid filter-all)))

;; * Example reagent UI {{{1

(defn GenericTable
  "Placeholder and demo for how to do basic setup of a custom component. Feel
   free to copy and paste into your own project and modify as needed."
  [dgrid]
  (let [{:keys [get-table-props
                get-thead-props
                get-tbody-props
                get-col-groups
                prepare-row
                get-page]} (make-table-accessors dgrid)]
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
           [:td (get-cell-props) (render-cell)])])]]))

;; }}}

;; vi:fdm=marker
