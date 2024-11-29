(ns app.core
  (:require
   [react]
   [mylib]
   [reagent.dom :as rg]))

(.log js/console react/Component)
(def Button (.-Button mylib/mylib))

(.log js/console (Button #js {:primary true}))
