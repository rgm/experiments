(ns user
  (:require [sample.helpers]))

(defn go
  []
  (sample.helpers/start-nrepl-server!))


