(ns user
  (:require [figwheel.main.api]
            [rgm.backend-main :as backend]))

;;; starting up figwheel manually so that we can piggieback into the browser
;;; from cljs files
;;;
;;; vim + fireplace.vim
;;; :Piggieback (figwheel.main.api/repl-env "dev")
;;;
;;; vscode + calva
;;; TODO - where's the doc for this??

(defn go
  []
  (backend/start!))

(defn stop
  []
  (backend/stop!))

(defn cljs-repl
  ([]
   (cljs-repl "dev"))
  ([build-id]
   (figwheel.main.api/cljs-repl build-id)))

(defn repl-env
  ([]
   (repl-env "dev"))
  ([build-id]
   (figwheel.main.api/repl-env build-id)))

(println "[dev] evaluate (go) to start up backend servers")
(println "[dev] evaluate (stop) to stop backend servers")
