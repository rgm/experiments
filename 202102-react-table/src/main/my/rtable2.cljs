(ns my.rtable2
  "Headless datagrid library, like react-table. Provides table state management
   tools and a la carte UI helpers."
  (:require
   [clojure.spec.alpha :as s]
   [reagent.core :as rg]
   [taoensso.timbre :as timbre]))

(defn componentify
  "Let us use strings, [Thing x], etc. to simplify render site. (Don't use `ifn?`
   since vectors implement this)."
  [x]
  (if-not (fn? x) (constantly x) x))

(defn hiccup?
  "ie. is this renderable by reagent?"
  [x]
  (or (number? x)
      (vector? x) ;; bit imprecise
      (string? x)))

(s/def ::raw-sample (s/or :vec (s/and (s/coll-of hiccup?) sequential?)
                          :map (s/map-of keyword? hiccup?)))

(s/def ::Header hiccup?)

(s/def ::raw-column (s/keys :req-un [::Header]
                            :opt-un [::id ::accessor]))

(s/def :rt.raw/data (s/coll-of ::raw-sample))

(s/def :rt.raw/cols (s/+ ::raw-column))

(s/def :my.rtable2/args (s/keys :req-un [:rt.raw/cols :rt.raw/data]))

;; terminology
;; "data" is raw rows (vector of x or map k:x) supplied by user
;; a "column" is supplied by a user and is supplemented by make-table-inst

(s/def ::col-group (s/keys :req-un [::cols]
                           :opt-un [::header-group-props]))

(s/def ::col (s/keys :req-un [::id ::Header ::Cell]
                     :opt-un [::header-props ::Footer ::footer-props]))

(s/def ::row (s/keys :req-un [::idx ::cells]
                     :opt-un [::row-props]))

(s/def ::cell (s/keys :req-un [::col ::row ::val ::Cell]
                      :opt-un [::cell-props]))

;;

(def default-header-model {:Header (fn [_table-inst _col-model])
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
                              cell' (assoc cell :cell-hiccup
                                           (fn [] ((:Cell col) table-inst cell)))]
                           (conj acc cell')))
                       []
                       prepared-cols)]
    (merge default-row-model
           (assoc row :get-cells (fn [] cells)))))

(defn prepare-cols
  [cols]
  (map-indexed
   (fn [i m]
     (merge default-header-model
            (assoc m
                   :idx          i
                   :Header       (:Header m)
                   :accessor     (or (:accessor m) (fn [d] (nth d i))))))
   cols))

(defn make-table-inst
  [{:keys [data cols] :as m}]
  {:pre [(s/valid? :my.rtable2/args m)]}
  (let [prepared-data (map-indexed (fn [i x] {:idx i :data x}) data)
        prepared-cols (prepare-cols cols)
        header-groups [{:idx                0
                        :get-header-group-props (fn [] {:role "row"})
                        :get-headers            (fn [] prepared-cols)}]]
    (assoc m
           :raw-data       data
           :raw-cols       cols
           :prepared-data  prepared-data
           :prepared-cols  prepared-cols
           :rows           (take 10 prepared-data) ;; filtered and sorted
           :page           (take 5 prepared-data)
           :table-props    {:role "table"}         ;; for overall table
           :thead-props    {:role "rowgroup"}
           :tbody-props    {:role "rowgroup"}
           :header-groups  header-groups)))

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
