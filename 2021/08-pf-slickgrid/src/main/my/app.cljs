(ns my.app
  (:require
   [clojure.core.async :as a :refer [chan go <! >!]]
   [clojure.core.async.interop :refer [<p!]] ;; https://clojurescript.org/guides/promise-interop
   [clojure.edn :as edn]
   [clojure.set :as set]
   [cljs-bean.core :refer [bean ->clj ->js]]
   [d3-fetch]
   [goog.object]
   [parcoord-es :default Parcoords]
   [portal.web :as p]
   [helix.core :refer [defnc $]]
   [helix.hooks :as hooks]
   [helix.dom :as d]
   ["react-dom" :as rdom]
   [taoensso.timbre :as timbre]))

(def DATA-URL "/assets/carbon_townhomes_1.csv")

(defn clean-csv-row [o] o)

(defn fetch-data-chan [url]
  (let [c (a/chan)]
    (go (let [_ (js/console.time "fetch-parse")
              data (<p! (d3-fetch/csv url clean-csv-row))]
          (js/console.timeEnd "fetch-parse")
          (>! c (->js data))))
    c))

(defnc greeting
  "A component which greets a user."
  [{:keys [name]}]
  ;; use helix.dom to create DOM elements
  (d/div "Hello, " (d/strong name) "!"))

(defnc app []
  (let [[state set-state] (hooks/use-state {:name "Helix User"})]
    (d/div
     (d/h1 "Welcome!")
      ;; create elements out of components
      ($ greeting {:name (:name state)})
      (d/input {:value (:name state)
                :class "border px-2 py-1 mt-4"
                :on-change #(set-state assoc :name (.. % -target -value))}))))

(defn ^:dev/before-load stop []
  )

(defn ^:dev/after-load start []
  (.log js/console Parcoords)
  (go
   (<! (fetch-data-chan DATA-URL))
   (rdom/render ($ app) (js/document.getElementById "app"))))

(comment
  (.log js/console ($ app)))

;; vi:fdm=marker
