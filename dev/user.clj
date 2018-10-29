(ns user
  (:require [sample.helpers :as help]))

;;; starting up figwheel manually so that we can piggieback into the browser
;;; from cljs files
;;;
;;; vim + fireplace.vim
;;; :Piggieback (figwheel.main.api/repl-env "config/dev")
;;;
;;; vscode + calva
;;; TODO - where's the doc for this??

(defn go
  []
  (help/start-nrepl-server! 7888)
  (help/start-figwheel-build! "config/dev"))
