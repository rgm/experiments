(ns my.app
  "An experiment in trying to fit React and D3 together better.

   https://hackernoon.com/how-and-why-to-use-d3-with-react-d239eb1ea274
   "
  (:require
   [clojure.core.async :as a :refer [chan go <! >!]]
   [clojure.core.async.interop :refer [<p!]]
   [clojure.edn :as edn]
   [clojure.set :as set]
   ;; https://clojurescript.org/guides/promise-interop
   [cljs-bean.core :refer [bean ->clj ->js]]
   [clojure.pprint :as pp]
   [d3-axis]
   [d3-brush]
   [d3-dsv]
   [d3-fetch]
   [d3-path]
   [d3-polygon]
   [d3-scale]
   [d3-selection]
   [d3-shape]
   [goog.object]
   [portal.web :as p]
   [reagent.core :as rg]
   [reagent.dom :as rdom]
   [taoensso.timbre :as timbre]))

(def *rows (rg/atom []))

(def *domains (rg/atom {}))

(defn build-domains [os ignore-ks]
  (let [trim            #(apply dissoc % ignore-ks)
        ks              (-> (first os) bean trim keys)
        empty-acc       (zipmap ks (repeat #{}))
        collapse-domain (fn [xs] (if (number? (first xs))
                                   ;; pull number domains down to a min and max
                                   ((juxt #(apply min %) #(apply max %)) xs)
                                   xs))]
    (->> os
         (reduce (fn [acc o] (merge-with conj acc (trim (bean o)))) empty-acc)
         (map (fn [[k vs]] [(name k) (collapse-domain vs)]))
         (into {}))))

(defn- parse-int [s] (js/parseInt s 10))

(defn- parse-float [s] (js/parseFloat s))

(def cleaners {"GWP"                   parse-float
               "SCM"                   parse-int
               "WWR"                   parse-int
               "Parking Levels"        parse-int
               "Floor to Floor Height" parse-int})

(defn clean-csv-row
  "Keep everything as mutable js as long as possible for speed"
  [o]
  (doseq [k (.keys js/Object o)
          :let [cleaner (get cleaners k)
                v (goog.object/get o k)
                v' (if cleaner (cleaner v) v)]]
    (goog.object/set o k v'))
  o)

;; * data loading {{{1

(def data-url "/assets/carbon_townhomes_1.csv")

(def cols
  {"id"                    :id
   "Beam/Column"           :beam-col
   "Wall"                  :wall
   "Floor"                 :floor
   "Cladding"              :cladding
   "Wall Insulation"       :wall-insul
   "Roof Insulation"       :roof-insul
   "Roof Membrane"         :roof-membrane
   "IGU"                   :igu
   "Window Frame"          :window-frame
   "WWR"                   :wwr
   "Floor to Floor Height" :floor-to-floor
   "Parking Levels"        :parking-levels
   "SCM"                   :scm
   "GWP"                   :gwp})

(defn fetch-data-chan [url]
  (let [c (a/chan)]
    (go (let [_ (js/console.time "fetch-parse")
              data (<p! (d3-fetch/csv url clean-csv-row))]
          (js/console.timeEnd "fetch-parse")
          (>! c (->js data))))
    c))

;; }}}

(defn VerticalAxis [{:keys [scale x]}]
  (let [generate-axis (fn [dom-node]
                        (let [sel  (d3-selection/select dom-node)
                              axis-generator (d3-axis/axisLeft scale)]
                          (go (<! (a/timeout (rand-int 1000)))
                              (let [axis (.call sel axis-generator)]
                                (.append axis "foreignObject")
                                )
                              )))]
    ;; d3-axis definitely wants to mutate a provided DOM el
    [:g.axis {:transform (str "translate(" x ",0)")
              :ref generate-axis}]))

(defn LineMark [])

(defn Data []
  [:<>
   [:div (count @*rows) " rows loaded"]
   [:div "domains"]
   [:code.text-xs [:pre (with-out-str (pp/pprint @*domains))]]
   [:div "data"]
   [:code.text-xs [:pre (with-out-str (pp/pprint (take 2 @*rows)))]]])

(defonce *canvas (atom nil))

(defonce *svg (atom nil))

(defn scale-linear [{:keys [domain range]}]
  (-> (d3-scale/scaleLinear.)
      (.domain (->js domain))
      (.range (->js range))))

(defn scale-point [{:keys [domain range padding] :or {padding 0}}]
  (-> (d3-scale/scalePoint.)
      (.domain (->js domain))
      (.range (->js range))
      (.padding padding)))

(defn make-bbox [margins width height]
  {:t (:t margins)
   :l (:l margins)
   :b (- height (:b margins))
   :r (- width (:r margins))})

(def col-titles ["Column"
                 "Wall"
                 "Floor"
                 "Cladding"
                 "Wall Insulation"
                 "Roof Insulation"
                 "Roof Membrane"
                 "IGU"
                 "Window Frame"
                 "WWR"
                 "Floor to Floor Height"
                 "Parking Levels"
                 "SCM"
                 "GWP"])

(defn make-scales [bbox domains]
  (if (empty? domains)
    []
    (->> col-titles
         (map (fn [k]
                (let [domain (get domains k)
                      args {:domain domain :range ((juxt :b :t) bbox)}]
                  [k (if (number? (first domain))
                       (scale-linear args)
                       (scale-point (merge args {:padding 0.2})))])))
         (into {}))))

(defn datum->points [x-scale y-scales d]
  (->js (mapv (fn [[k v]]
         [(x-scale (name k)) ((get y-scales (name k)) v)])
       d)))

(defn Lines [x-scale y-scales *rows]
  (let [line (d3-shape/line)]
    [:<>
     (doall (for [d (take 500 @*rows)
                  :let [d'  (bean d)
                        xys (datum->points x-scale y-scales (dissoc d' :id))]]
              ^{:key (:id d')}
              [:path {:d (line xys)
                      :stroke "steelblue"
                      :opacity "0.01"
                      :fill "none"}]))]))

(defn Root []
  (let [width    800
        height   300
        margins  {:t 40 :l 60 :b 10 :r 5}
        bbox     (make-bbox margins width height)
        x-scale  (scale-point {:domain col-titles :range ((juxt :l :r) bbox)})
        y-scales (make-scales bbox @*domains)]
    [:div
     [:h1 {:class "text-2xl"} "D3 + React"]
     [:p.my-5.text-gray-400.text-sm
      "Demo of using D3 as a rendering kernel with (most) DOM manipulation in React"]
     [:div
      [:canvas.border.border-red-500
       {:width width :height height :ref #(reset! *canvas %)}]
      [:svg.border.border-blue-500
       {:width width :height height :ref #(reset! *svg %)}
       [Lines x-scale y-scales *rows]
       (for [[col-title y-scale] y-scales]
         ^{:key col-title}
         [VerticalAxis {:scale y-scale :x (x-scale col-title)}])]]
     [Data]]))

(defn ^:dev/before-load stop [])

(defn ^:dev/after-load start []
  (go (let [rows (<! (fetch-data-chan data-url))]
        (reset! *rows rows)
        (js/console.time "domain-build")
        (reset! *domains (build-domains rows [:id]))
        (js/console.timeEnd "domain-build")))
  (let [host-dom (js/document.getElementById "app")]
    (rdom/render [Root] host-dom)))

(comment
  ; :ConjureShadowSelect app
  (js/alert "hi")

  (let [sel (d3-selection/select @*canvas)
        scale (doto (d3-scale/scaleLinear.)
            (.domain (->js [0 10]))
            (.range (->js [200 0])))
        axis (d3-axis/axisLeft scale)]
    (.call sel axis))

  (rg/create-element "strong" #js {} "world")
  (rg/as-element [:p "hi"])

  (go (prn (<! (fetch-data-chan data-url))))

  (let [l (-> (d3-shape/line)
              (.x :x)
              (.y :y))]
    (l @*canvas))

  (p/open)
  (tap> (scale-linear {:domain [0 10] :range [0 100]}) )
  (add-tap #'p/submit)

  (tap> *rows)

  )

;; read reagent cursor stuff
;; look for amelia wattenberger svelte as components ideas

;; vi:fdm=marker
