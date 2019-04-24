(ns user
  (:require
    [figwheel.main.api]
    [integrant.repl :refer [clear go halt prep reset reset-all]]
    [rgm.backend-main :as backend]
    [taoensso.timbre :as timbre]))

;;; starting up figwheel manually so that we can piggieback into the browser
;;; from cljs files
;;;
;;; vim + fireplace.vim
;;; :Piggieback (figwheel.main.api/repl-env "dev")
;;;
;;; vscode + calva
;;; TODO - where's the doc for this??

(timbre/set-level! :debug)

(integrant.repl/set-prep! backend/make-ig-system)

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

(println "[dev] evaluate (go) to start integrant")
(println "[dev] evaluate (halt) to stop integrant")
(println "[dev] evaluate (reset) to reload changed namespaces and re-start integrant")
