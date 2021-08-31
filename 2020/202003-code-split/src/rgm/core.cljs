(ns ^:figwheel-load rgm.core
  (:require
   ; [rgm.extra]
   [cljs.loader :as loader]
   ))

(println "core loaded!")

(defn load-extra
  []
  (loader/load :extra (fn [] ((resolve 'rgm.extra/second-fn)))))

(loader/set-loaded! :core)

(js/setTimeout load-extra 5000)
(js/setTimeout load-extra 10000)
