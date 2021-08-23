(ns my.app
  "An experiment in trying to fit React and D3 together better.

   https://hackernoon.com/how-and-why-to-use-d3-with-react-d239eb1ea274
   "
  (:require
   [clojure.core.async :as a :refer [chan go <! >!]]
   [clojure.core.async.interop :refer [<p!]]
   [clojure.edn :as edn]
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
   [reagent.core :as rg]
   [reagent.dom :as rdom]))

(def *rows (rg/atom []))

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

(defn- parse-int [s] (js/parseInt s 10))
(defn- parse-float [s] (js/parseFloat s))

(defn clean [k v]
  (if-let [xf (get {:floor-to-floor parse-int
                    :gwp            parse-float
                    :id             parse-int
                    :parking-levels parse-int
                    :scm            parse-int
                    :wwr            parse-int}
                   k)]
    (xf v) v))

(defn fetch-data-chan [url]
  (let [c             (a/chan)
        translate-key (into {} (map (fn [[k v]] [(keyword k) v])) cols)
        clean-datum   (fn [[k v]] (let [k' (translate-key k)] [k' (clean k' v)]))]
    (go (let [xf (fn [d] (into {} (map clean-datum) (bean d)))
              _ (js/console.time "fetch/parse")
              data (<p! (d3-fetch/csv url #_xf))]
          (>! c data)
          (js/console.timeEnd "fetch/parse")))
    c))

;; }}}

(defn VerticalAxis [{:keys [scale x]}]
  (let [generate-axis (fn [dom-node]
                        (let [sel  (d3-selection/select dom-node)
                              axis (d3-axis/axisLeft scale)]
                          (go (<! (a/timeout (rand-int 1000)))
                              (.call sel axis))))]
    ;; d3-axis definitely wants to mutate a provided DOM el
    [:g.axis {:transform (str "translate(" x ",0)")
              :ref generate-axis}]))

(defn LineMark [])

(defn Data []
  [:code.text-xs [:pre (with-out-str (pp/pprint (take 2 @*rows)))]])

(defonce *canvas (atom nil))

(defonce *svg (atom nil))

(defn scale-linear [{:keys [domain range]}]
  (-> (d3-scale/scaleLinear.)
      (.domain (->js domain))
      (.range (->js range))))

(defn make-bbox [margins width height]
  {:t (:t margins)
   :l (:l margins)
   :b (- height (:b margins))
   :r (- width (:r margins))})

(def col-titles [#_"id"
                 "Column"
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

(defn make-scales [bbox _data]
  (into {} (map (fn [s] [s (scale-linear {:domain [0 20]
                                          :range ((juxt :b :t) bbox)})]))
        col-titles))

(defn Root []
  (let [width 800
        height 300
        ; n-axes (count col-titles)
        margins {:t 40 :l 20 :b 10 :r 5}
        bbox (make-bbox margins width height)
        x-scale (scale-linear {:domain (->js col-titles)
                               :range ((juxt :l :r) bbox)})
        y-scales (make-scales bbox @*rows)]
    (prn y-scales)
    [:div
     [:h1 {:class "text-2xl"} "D3 + React"]
     [:p.my-5.text-gray-400.text-sm
      "Demo of using D3 as a rendering kernel with (most) DOM manipulation in React"]
     [:div
      [:canvas.border.border-red-500
       {:width width :height height :ref #(reset! *canvas %)}]
      [:svg.border.border-blue-500
       {:width width :height height :ref #(reset! *svg %)}
       (for [[col-title y-scale] y-scales]
         ^{:key col-title}
         [VerticalAxis {:scale y-scale :x (x-scale col-title)}]) ]]
     [Data]]))

(defn ^:dev/before-load stop [])

(defn ^:dev/after-load start []
  (go (reset! *rows (<! (fetch-data-chan data-url))))
  (let [host-dom (js/document.getElementById "app")]
    (rdom/render [Root] host-dom)))

(comment
  ; :ConjureShadowSelect app
  (js/alert "hi")

  ["id"
   "Column"
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
   "GWP"]

  (let [sel (d3-selection/select @*g)]
    (.attr sel "transform" "translate(20,0)"))

  (let [sel (d3-selection/select @*g)
        scale (doto (d3-scale/scaleLinear.)
            (.domain (->js [0 10]))
            (.range (->js [200 0])))
        axis (d3-axis/axisLeft scale)]
    (.call sel axis))

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

  )

;; read reagent cursor stuff
;; look for amelia wattenberger svelte as components ideas

;; vi:fdm=marker
