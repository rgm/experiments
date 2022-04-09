(ns my.shared
  (:require
   [goog.object]
   [mylib]))

(js/console.log (goog.object/getValueByKeys mylib #js ["Button"]))

(def Button (goog.object/getValueByKeys mylib #js ["Button"]))
