(ns dev
  (:require
   [com.stuartsierra.component.repl :refer [reset set-init start stop system]]
   [rgm.main]))

(defn new-system [_old] (rgm.main/new-system))

(set-init new-system)

;; vi:ts=2 sw=2 expandtab
