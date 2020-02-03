(ns rgm.database
  (:require
   [hugsql.core :as hugsql]
   [ragtime.jdbc]
   [ragtime.repl]
   [taoensso.timbre :as timbre]))

(defn migrate
  [_]
  (timbre/warn "IMPLEMENT ME - migrate"))

(defn rollback
  [_]
  (timbre/warn "IMPLEMENT ME - rollback"))
