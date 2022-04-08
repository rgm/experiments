(ns my.shared
  (:require
   [helix.core  :refer [defnc $]]
   [helix.hooks :as hooks]
   [helix.dom   :as d]
   [goog.object]
   [mylib]))

(js/console.log mylib)
(js/console.log (goog.object/getValueByKeys mylib #js ["Button"]))

(def Button (goog.object/getValueByKeys mylib #js ["Button"]))
