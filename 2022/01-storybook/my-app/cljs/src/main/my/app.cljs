(ns my.app
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

(defn Root []
  (let []
    [:div "root"]))

(defn ^:dev/before-load stop [])

(defn ^:dev/after-load start []
  (let [host-dom (js/document.getElementById "app")]
    (rdom/render [Root] host-dom)))

;; vi:fdm=marker
