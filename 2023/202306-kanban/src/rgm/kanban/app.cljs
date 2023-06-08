(ns rgm.kanban.app
  "js as needed"
  (:require
   [cljs-bean.core :refer [bean ->clj ->js]]))

(defn load-web-vitals []
  (let [scr (.createElement js/document "script")]
    (set! (.-src scr) "https://unpkg.com/web-vitals@3/dist/web-vitals.iife.js")
    (set! (.-onload scr) (fn []
                           (set! (.-onCLS (.-webVitals js/window)) js/console.log )
                           (set! (.-onFID (.-webVitals js/window)) js/console.log )
                           (set! (.-onLCP (.-webVitals js/window)) js/console.log )))
    (.appendChild js/document.head scr)))

(load-web-vitals)

#_(.onLoad js/htmx
         (fn [content]
           (let [sortables (.querySelectorAll js/document ".sortable")]
             (doseq [el sortables]
               (prn el)
               (js/Sortable. el #js {:animation 150 :ghostClass "blue-background-class"}))
             (prn "MY CONTENT" content))))
