(ns rgm.core)

(require '[clojure.java.io  :as io])
(require '[clojure.data.csv :as csv])
(require '[tech.ml.dataset  :as ds])
(import 'com.mitchtalmadge.asciidata.graph.ASCIIGraph)

(def data-url "https://storage.googleapis.com/covid19-open-data/v2/main.csv")
(def *ds (delay (ds/->dataset data-url)) )

(comment
  (ds/head @*ds)
  (ds/shape @*ds)
  (ds/sample @*ds)
  (ds/descriptive-stats @*ds))


; (println (.plot (ASCIIGraph/fromSeries (double-array))))

(def *ds2 (delay
             (ds/->dataset "/Users/rgm/Projects/opengb/recdot/data/20200305-remi/Complete Data File.March 5 2020.xlsx")))
(comment

  
  (ds/head @*ds2))
