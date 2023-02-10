(ns user
  (:require [clojurewerkz.machine-head.client :as mc]))

(comment
  (mc/connect "tcp://127.0.0.1:1883" (mc/generate-id)))
