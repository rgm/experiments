(ns opengb.spork.dgrid
  "Headless datagrid library inspired by react-table.

   Provides a state data structure for a datagrid that can be held in a reagent
   ratom or a re-frame app-db."
  (:require
   [clojure.spec.alpha :as s]))

;; * specs {{{1

(defn- valid?
  [spec x]
  (let [result (s/valid? spec x)]
    (when-not result (s/explain spec x))
    result))

(defn- component? [?f] (fn? ?f))

(defn- hiccup? [x] (or (string? x) (number? x) (component? x)))

(s/def ::dgrid map?)
;; a dgrid is opaque from outside anyway (ie. we shouldn't be reaching into it
;; but instead generating named accessors, but we should do better here.

(s/def ::table-accessors (s/keys :req-un [::get-table-props
                                          ::get-thead-props
                                          ::get-tbody-props
                                          ::get-col-groups
                                          ::prepare-row
                                          ::get-page]
                                 :opt-un [::page-index
                                          ::page-size
                                          ::page-count
                                          ::has-prev-page?
                                          ::has-next-page?]))

;; row data can be either coll of maps or coll of sequentials (eg. a csv of floats)

(s/def ::raw-data-sample (s/or :vec (s/and (s/coll-of hiccup?) sequential?)
                               :map (s/map-of keyword? any?)))

(s/def :opengb.spork.datagrid.raw/data (s/coll-of ::raw-data-sample))

;; columns
(s/def ::id (s/or :num number? :str string? :key keyword?))

(s/def ::Header hiccup?)    ;; A header-generating fn :: dgrid -> column model -> hiccup
(s/def ::Sort component?)   ;; A sorting component fn :: column model -> hiccup
(s/def ::Filter component?) ;; A filtering component fn :: column model -> hiccup
(s/def ::Cell component?)   ;; A UI rendering component fn :: dgrid -> cell model -> hiccup
(s/def ::Val component?)    ;; A value-generating component fn :: x -> hiccup

(s/def ::raw-col (s/keys :opt-un [::Header ::id ::accessor ::Sort ::Filter]))

(s/def ::col (s/keys :req-un [::id]
                     :opt-un [::idx ::header-props ::Footer ::footer-props
                              ::Header ::Val ::Cell]))

(s/def :opengb.spork.datagrid.raw/cols (s/nilable (s/+ ::raw-col)))

(s/def :opengb.spork.datagrid.raw/page-size (s/nilable nat-int?))

;; arg map to the make-dgrid fn
(s/def ::args (s/keys :req-un [:opengb.spork.datagrid.raw/data]
                      :opt-un [:opengb.spork.datagrid.raw/cols
                               :opengb.spork.datagrid.raw/page-size]))

(s/def ::col-group (s/keys :req-un [::cols]
                           :opt-un [::col-group-props]))

(s/def ::row (s/keys :req-un [::idx ::cells]
                     :opt-un [::row-props]))

(s/def ::cell (s/keys :req-un [::col ::row ::val ::Cell]
                      :opt-un [::cell-props]))

(s/def ::desc? boolean?)
(s/def ::sort-descriptor (s/keys :req-un [::id ::desc?]))
(s/def ::sort-descriptors (s/+ ::sort-descriptor))

;; }}}

(def default-col-model {:Header        (fn [_dgrid _col-model] "")
                        :Cell          (fn [_dgrid cell-model] (str (:val cell-model)))
                        :Val           (fn [val] (str val))
                        :get-col-props (fn [] {:role "columnheader"})
                        :sort-fn       identity ;; do this to the accessor val for sort-by
                        :filter-pred   (fn [valset val]
                                         ;; default to set membership check
                                         ;; this is the most excel-like version
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
                        (fn get-row-props [] (merge (f dgrid row) {:role "row"})))
        make-cell     (fn [col]
                        (let [{:keys [accessor idx]} col
                              value  (accessor row-data)
                              cell   (merge default-cell-model
                                            {:idx idx
                                             :row row
                                             :col col
                                             :val value})
                              ;; render-fn is closed over the rest of cell value
                              ;; so it can be zero-arg
                              render-fn (fn render-cell [] [(:Cell col) dgrid cell])]
                          (assoc cell :render-cell render-fn)))
        cells (reduce (fn [acc col] (conj acc (make-cell col))) [] prepared-cols)]
    (merge default-row-model
           (assoc row
                  :get-row-props get-row-props
                  :get-cells (fn get-cells [] cells)))))

(defn prepare-default-cols
  "For when no cols at all were supplied, probably with a no-headers CSV"
  [data]
  (let [col-count (count (-> data first :data))]
    (map (fn [idx]
           (merge default-col-model {:idx      idx
                                     :id       idx
                                     :accessor (fn [d] (nth d idx))}))
         (range col-count))))

(defn- col-ids-unique?
  "Can get all kinds of weird filtering results if we don't ensure this."
  [cols]
  (let [ids (map :id cols)
        distinct-ids (set ids)]
    (= (count ids)
       (count distinct-ids))))

(defn prepare-cols
  [data cols]
  {:post [(col-ids-unique? %)]}
  (if (empty? cols)
    (prepare-default-cols data)
    (map-indexed
     (fn [idx col]
       (let [can-sort?     (boolean (:Sort col))
             can-filter?   (boolean (:Filter col))
             accessor      (or (:accessor col) (fn [d] (nth d idx)))
             ;; OPTIMIZE can we just accept these as input?
             ;; What about 10,000 row tables?
             distinct-vals (into #{} (map (comp accessor :data)) data)]
         (merge default-col-model
                (assoc col
                       :idx           idx
                       :id            (or (:id col) idx)
                       :accessor      accessor
                       :distinct-vals distinct-vals ;; for filtering UI's use
                       :can-sort?     can-sort?
                       :can-filter?   can-filter?))))
     cols)))

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

(defn paginated?
  [dgrid]
  (not (nil? (:page-size dgrid))))

(defn apply-pagination
  "Trim the rows to provide a visible `:page` and set various counts in state."
  [dgrid]
  {:pre [(valid? ::dgrid dgrid)] :post [(valid? ::dgrid %)]}
  (if (paginated? dgrid)
    (let [page-index     (:page-index dgrid)
          page-size      (:page-size dgrid)
          row-count      (count (:rows dgrid))
          max-page-index (quot row-count page-size)
          page-count     (inc max-page-index)]
      (assoc dgrid
             :paginated?     (and (paginated? dgrid) (< 1 page-count))
             :page-count     page-count
             :has-prev-page? (< 0 page-index)
             :has-next-page? (< page-index max-page-index)
             :page           (->> (:rows dgrid)
                                  (drop (* page-index page-size))
                                  (take page-size))))
    (assoc dgrid
           :paginated? false
           ;; page and rows are the same if no pagination
           :page (:rows dgrid))))

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
      (apply-pagination)
      (add-header-render-fns)
      (prepare-col-groups)))

(defn make-dgrid
  "Create a dgrid around the provided data and optional column descriptions.
   The resulting map encapsulates the view-independent state of a sortable,
   filterable, paginated 'table' in the UI. (Note that it's not required to be
   an HTML table, just ... table-like).

   Refer to opengb.spork.dgrid/GenericTable for an example of how to provide a
   concrete UI.
   "
  [{:keys [data cols sort-descriptors row-props
           page-size page-index] :as args}]
  {:pre [(valid? ::args args)] :post [(valid? ::dgrid %)]}
  (let [prepared-data (map-indexed (fn [i x] {:idx i :data x}) data)
        prepared-cols (prepare-cols prepared-data cols)
        base-dgrid (assoc args
                          :table-props      {:role "table"}
                          :thead-props      {:role "rowgroup"}
                          :tbody-props      {:role "rowgroup"}
                          :row-props        row-props
                          :prepared-data    prepared-data
                          :prepared-cols    prepared-cols
                          :sort-descriptors (or sort-descriptors [])
                          :filters          (filter-all-for-cols prepared-cols)
                          :page-size        page-size
                          :page-index       (or page-index 0))]
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
  {:pre [(valid? ::dgrid dgrid)] :post [(valid? ::table-accessors %)]}
  (let [paginated? (and (paginated? dgrid)
                        (< 1 (:page-count dgrid)))]
    (cond-> {:get-table-props (fn []    (get dgrid :table-props))
             :get-thead-props (fn []    (get dgrid :thead-props))
             :get-tbody-props (fn []    (get dgrid :tbody-props))
             :get-col-groups  (fn []    (get dgrid :col-groups))
             :get-rows        (fn []    (get dgrid :rows))
             :prepare-row     (fn [row] (prepare-row dgrid row))
             :paginated?      paginated?
             :get-page        (fn []    (get dgrid :page))}
      paginated? (merge {:page-index      (:page-index dgrid)
                         :page-size       (:page-size dgrid)
                         :page-count      (:page-count dgrid)
                         :has-prev-page?  (:has-prev-page? dgrid)
                         :has-next-page?  (:has-next-page? dgrid)}))))

(defn get-filtered-prepared-data
  "Return the original data, after sorts and filters have been applied. Useful
   for companion views (eg. charts) that should respect what data is actually
   visible."
  [dgrid]
  (some->> dgrid :rows (map :data)))

;; MUTATORS aren't super satisfying; we need the mutation outside of the
;; namespace so we don't drag in reagent or re-frame, and have to write custom
;; fns... maybe we provide adapters, ie. fns that takes the ratom and produce
;; these mutation fns, or takes a set of rf/dispatches as data. If we do
;; on-whatever handlers as fns we lose a lot of the inspectability of things as
;; data.

;; * Sorting accessors, mutators {{{1

(defn- make-ratom-sort-toggle-fn
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

(defn make-ratom-sort-mutators
  [*dgrid]
  {:toggle-sort (make-ratom-sort-toggle-fn *dgrid)})

(defn make-reagent-sort-mutators
  [{:keys []}]
  ;; TODO make re-frame version
  {:toggle-sort identity})

;; }}}

;; * Filtering accessors, mutators {{{1

(defn make-ratom-reset-col-filters-fn
  "Make a reset-all-filters fn for ratom strategy."
  [*dgrid]
  {:pre [(instance? reagent.ratom.RAtom *dgrid)]}
  (fn [] (swap! *dgrid filter-all)))

(defn make-ratom-col-filter-mutators
  "Generate filtering mutation functions for ratom strategy. Closes over the ratom."
  [*dgrid]
  {:pre [(instance? reagent.ratom.RAtom *dgrid)]}
  {:add-filter-value    (fn [col val] (swap! *dgrid add-filter col val))
   :remove-filter-value (fn [col val] (swap! *dgrid remove-filter col val))
   :filter-all          (fn [col] (swap! *dgrid filter-all col))
   :filter-none         (fn [col] (swap! *dgrid filter-none col))
   :reset-filters       (make-ratom-reset-col-filters-fn *dgrid)})

(defn make-re-frame-col-filter-mutators
  "Generate filtering mutation fns for re-frame strategy. Supply events."
  ;; THINK - does this just accept closed-over dispatch fns? Or dispatch data?
  ;; either way we don't want to pull re-frame into this ns
  ;; TODO make re-frame version
  [{:keys []}]
  {:add-filter-value    identity
   :remove-filter-value identity
   :filter-all          identity
   :filter-none         identity
   :reset-filters       identity})

;; }}}

;; * Pagination mutators {{{1

(defn- clamp [n lower-bound upper-bound] (min (max lower-bound n) upper-bound))

(defn goto-page [dgrid idx]
  (let [max-idx (dec (:page-count dgrid))
        idx'    (clamp idx 0 max-idx)]
    (-> dgrid
        (assoc :page-index idx')
        (derive-dgrid-state))))

(defn goto-prev-page [dgrid]
  (goto-page dgrid (dec (:page-index dgrid))))

(defn goto-next-page [dgrid]
  (goto-page dgrid (inc (:page-index dgrid))))

(defn set-page-size [dgrid n]
  (-> dgrid
      (assoc :page-size n)
      (derive-dgrid-state)))

(defn make-ratom-pagination-mutators
  "Make pagination mutators for ratom mutator strategy. Closes over the ratom."
  [*dgrid]
  {:pre [(instance? reagent.ratom.RAtom *dgrid)]}
  {:goto-page      (fn [idx] (swap! *dgrid goto-page idx))
   :goto-prev-page (fn []    (swap! *dgrid goto-prev-page))
   :goto-next-page (fn []    (swap! *dgrid goto-next-page))
   :set-page-size  (fn [n]   (swap! *dgrid set-page-size n))})

(defn make-re-frame-pagination-mutators
  "Make pagination mutators for ratom mutator strategy. Closes over the ratom."
  ;; TODO make re-frame version
  [{:keys []}]
  {:goto-page      (fn [idx])
   :goto-prev-page (fn [])
   :goto-next-page (fn [])
   :set-page-size  (fn [n])})

;; }}}

;; * Example reagent UI {{{1

(defn GenericTable
  "Placeholder and demo for how to do basic setup of a custom Hiccup-generating
   component. Feel free to copy and paste into your own project as a starting
   point, and modify as needed."
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
