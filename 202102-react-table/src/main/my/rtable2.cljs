(ns my.rtable2
  "Headless datagrid library, like react-table. Provides table state management
   tools and a la carte UI helpers."
  (:require
   [clojure.spec.alpha :as s]
   [clojure.test :as t :refer [deftest testing is]]))

;; terminology
;; "data" is raw rows (vector of x or map k:x) supplied by user
;; a raw column is supplied by a user and is supplemented by make-table-inst

;; column, row, cell are vended by the table instance and are model objects
;; with properties to help with display via hiccup (eg. props, render fns that
;; generate hiccup)

;; specs

(defn hiccup?
  "ie. is this renderable by reagent?"
  [x]
  (or (string? x)
      (number? x)
      (fn? x)))

(s/def ::raw-sample (s/or :vec (s/and (s/coll-of hiccup?) sequential?)
                          :map (s/map-of keyword? hiccup?)))

(s/def ::Header hiccup?)

(s/def ::raw-column (s/keys :req-un []
                            :opt-un [::Header ::id ::accessor]))

(s/def :rt.raw/data (s/coll-of ::raw-sample))

(s/def :rt.raw/cols (s/+ ::raw-column))

(s/def :my.rtable2/args (s/keys :req-un [:rt.raw/cols :rt.raw/data]))

(s/def ::col-group (s/keys :req-un [::cols]
                           :opt-un [::header-group-props]))

(s/def ::col (s/keys :req-un [::id]
                     :opt-un [::header-props ::Footer ::footer-props
                              ::Header ::Cell]))

(s/def ::row (s/keys :req-un [::idx ::cells]
                     :opt-un [::row-props]))

(s/def ::cell (s/keys :req-un [::col ::row ::val ::Cell]
                      :opt-un [::cell-props]))

;;

(def default-header-model {:Header (fn [_table-inst _col-model] "")
                           :Cell (fn [_table-inst cell-model] (str (:val cell-model)))
                           :get-header-props (fn [] {:role "columnheader"})})

(def default-row-model {:get-row-props (fn [] {:role "row"})})

(def default-cell-model {:get-cell-props (fn [] {:role "cell"})})

(defn prepare-row
  "Has to be fn to take the whole table inst"
  [table-inst row]
  (let [row-data      (:data row)
        prepared-cols (:prepared-cols table-inst)
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
                                           (fn [] ((:Cell col) table-inst cell)))]
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
       (merge default-header-model
              (assoc col
                     :idx      i
                     :id       (or (:id col) i)
                     :accessor (or (:accessor col) (fn [d] (nth d i)))
                     :can-sort? can-sort?))))
   cols))

(defn add-header-render-fns
  "Need as a last step since other stuff relies on prepared-cols."
  [table-inst]
  (update table-inst :prepared-cols
          (fn [cols]
            (map (fn [col]
                   (let [?hiccup-fn (:Header col)]
                     (assoc col :get-header-hiccup
                            (if (fn? ?hiccup-fn)
                              (fn [] (?hiccup-fn table-inst col))
                              (fn [] (str ?hiccup-fn))))))
                 cols))))

(defn add-header-sort-data
  "Relies on whole table inst.

   sort-by has form [{:id n :desc? bool},,,]"
  [table-inst]
  (let [sort-lookup (into {} (map (fn [{:keys [id desc?]}]
                              [id (case desc?
                                    ;; need to disambiguate false from nil
                                    false :asc
                                    true :desc
                                    nil)]))
                    (:sort-descriptors table-inst))]
    (update table-inst :prepared-cols
            (fn [cols]
              (map (fn [col]
                     (let [sort-k (get sort-lookup (:id col))]
                       (assoc col
                              :is-sorted? (boolean sort-k)
                              :is-sorted-desc? (= :desc sort-k))))
                   cols)))))

(defn prepare-header-groups
  "Only does single nesting for now."
  [table-inst]
  (assoc table-inst :header-groups
         [{:idx                0
           :get-header-group-props (fn [] {:role "row"})
           :get-headers            (fn [] (:prepared-cols table-inst))}]))

(defn filter-rows
  [table-inst]
  (assoc table-inst :rows (:prepared-data table-inst)))

(defn get-col
  [table-inst col-id]
  ;; FIXME don't do a linear scan
  (let [cols (:prepared-cols table-inst)]
    (some->> cols (filter (fn [col] (= col-id (:id col)))) first)))

(defn sort-rows
  "Only does single descriptor for now."
  [table-inst]
  (let [data        (:prepared-data table-inst)
        descriptors (:sort-descriptors table-inst)]
    (if (empty? descriptors)
      (assoc table-inst :rows data)
      (let [descriptor  (first descriptors)
            {col-id :id desc? :desc?} descriptor
            col         (get-col table-inst col-id)
            accessor    (:accessor col)
            sorted-rows (sort-by #(-> % :data accessor) data)]
        (assoc table-inst :rows (if desc?
                                  (reverse sorted-rows)
                                  sorted-rows))))))

(defn trim-page
  ""
  [table-inst]
  (assoc table-inst :page (drop 1 (:rows table-inst))))

(defn make-table-inst
  [{:keys [data cols] :as m}]
  {:pre [(s/valid? :my.rtable2/args m)]}
  (let [prepared-data (map-indexed (fn [i x] {:idx i :data x}) data)
        prepared-cols (prepare-cols cols)
        table-inst (assoc m
                          :raw-data       data
                          :raw-cols       cols
                          :table-props    {:role "table"}
                          :thead-props    {:role "rowgroup"}
                          :tbody-props    {:role "rowgroup"}
                          :prepared-data  prepared-data
                          :prepared-cols  prepared-cols
                          :sort-descriptors []
                          :filters {})]
    (-> table-inst
        (add-header-sort-data)
        (filter-rows)
        (sort-rows)
        (trim-page)
        (add-header-render-fns)
        (prepare-header-groups))))

(s/def ::id (s/or :num number? :str string?))
(s/def :my.rtable2/desc? boolean?)
(s/def ::sort-descriptor (s/keys :req-un [::id :my.rtable2/desc?]))
(s/def ::sort-descriptors (s/+ ::sort-descriptor))

(defn update-table-inst
  [table-inst]
  (-> table-inst
      (add-header-sort-data)
      (filter-rows)
      (sort-rows)
      (trim-page)
      (add-header-render-fns)
      (prepare-header-groups)))

(defn set-sort
  [table-inst sort-descriptors]
  {:pre [(s/valid? ::sort-descriptors sort-descriptors)]}
  (prn "sorting!" sort-descriptors)
  (-> table-inst
      (assoc :sort-descriptors sort-descriptors)
      (update-table-inst)))

;; * Accessors {{{1

;; light wrappers for now but possibly more intricate

;; generally accessors are fns so that we can delay everything to render time
;; and have the full and current state of the table instance available, eg. to
;; the cell render fn

(defn make-accessors
  "Close over the table instance to provide simple accessors within a
   component."
  [table-inst]
  {:get-table-props        (fn []    (get table-inst :table-props))
   :get-thead-props        (fn []    (get table-inst :thead-props))
   :get-tbody-props        (fn []    (get table-inst :tbody-props))
   :get-header-groups      (fn []    (get table-inst :header-groups))
   :get-page               (fn []    (get table-inst :page))
   :prepare-row            (fn [row] (prepare-row table-inst row))})


(s/def ::table-inst map?) ;; opaque outside

(s/def ::table-accessors (s/keys :req-un [::get-table-props
                                          ::get-thead-props
                                          ::get-tbody-props
                                          ::get-header-props
                                          ::prepare-row
                                          ::get-page]))

(s/fdef make-accessors
        :args (s/cat :table-inst ::table-inst)
        :ret  ::table-accessors)

;; }}}
