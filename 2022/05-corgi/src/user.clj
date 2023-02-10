(ns user
  (:require [datascript.core :as d]))

(def schema {:entry/id {:db/unique :db.unique/identity}})
(defonce *conn (d/create-conn schema))
(when-not (= schema (:schema @*conn))
  (set! conn (d/conn-from-datoms (d/datoms @*conn :eavt) schema)))

(comment
  (d/q '[]))
