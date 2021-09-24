(ns rgmlib.core
  (:require
   [hugsql.core :as hug]))

(hug/def-db-fns "hug.sql")
(defn foo [] 1)
