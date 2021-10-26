(ns rgmlib.core
  (:require
   [hugsql.core   :as hug]
   [selmer.parser :as selmer]))

(hug/def-db-fns "hug.sql")

(defn foo []
  (selmer/render-file "selmertest.html" {:myvar "SUCCESS!"} :custom-resource-path nil))
