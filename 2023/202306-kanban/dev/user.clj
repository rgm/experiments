(ns user
  (:require
   [rgm.kanban.main :as app]
   [clojure.java.browse :as browse]
   [clojure.tools.namespace.repl :as tns]
   [integrant.core :as ig]
   [integrant.repl :refer [go halt reset]]
   [integrant.repl.state :refer [system]]))

(defn -main []
  (tns/set-refresh-dirs "src")
  (integrant.repl/set-prep! #(ig/prep app/config))
  (go)
  (let [app-url (str "http://localhost:" (System/getenv "PORT"))]
    (println "opening app at" app-url)
    (browse/browse-url app-url)))

(-main)

(comment
  (halt)
  (reset)
  (::app/datastore system)

  (require '[cljs.build.api :as build])

  (build/watch (build/inputs "src")
               {:main 'rgm.kanban.app
                :output-to "resources/public/app.js"
                :output-dir "resources/public/cljs"
                :watch-fn (fn [] (prn "rebuilt js"))}))
