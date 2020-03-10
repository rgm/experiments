(ns rgm.extra
 (:require
   [cljs.loader :as loader]))

(println "extra loaded!")

(defn second-fn [] (println "hi from second fn"))

(loader/set-loaded! :extra)
