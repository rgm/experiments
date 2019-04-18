(ns user
  (:require [figwheel.main.api]
            [sample.helpers :as help]))

;;; starting up figwheel manually so that we can piggieback into the browser
;;; from cljs files
;;;
;;; vim + fireplace.vim
;;; :Piggieback (figwheel.main.api/repl-env "dev")
;;;
;;; vscode + calva
;;; TODO - where's the doc for this??

(def nrepl-port 7888)
(def figwheel-build-id "dev")

(defn go
  []
  (help/start-nrepl-server! 7888)
  (help/start-figwheel-build! figwheel-build-id))

(defn cljs-repl
  []
  (figwheel.main.api/cljs-repl figwheel-build-id))

(defn repl-env
  []
  (figwheel.main.api/repl-env figwheel-build-id))
