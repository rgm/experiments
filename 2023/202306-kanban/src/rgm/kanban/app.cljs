(ns rgm.kanban.app
  "js as needed"
  (:require
   [cljs-bean.core :refer [bean ->clj ->js]]))

(.onLoad js/htmx
         (fn [content]
           (let [sortables (.querySelectorAll js/document ".sortable")]
             (doseq [el sortables]
               (prn el)
               (js/Sortable. el #js {:animation 150 :ghostClass "blue-background-class"}))
             (prn "MY CONTENT" content))))
