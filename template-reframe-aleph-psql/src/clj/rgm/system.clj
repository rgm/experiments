(ns rgm.system
  (:require
   [aero.core]
   [clojure.edn]
   [clojure.java.io :as io]
   [juxt.clip.core]))

(defn config
  "Generate a system map"
  [profile]
  (aero.core/read-config (io/resource "system.edn")
                         {:profile profile}))

(defn db-spec
  [config]
  (get config :db-spec))
