(ns rgm.system
  (:require
   [aero.core]
   [clojure.edn]
   [clojure.java.io :as io]
   [juxt.clip.core]))

(defn system-config
  "Generate a system map"
  [profile]
  {:components (aero.core/read-config (io/resource "system.edn")
                                      {:profile profile})})
