(ns rgm.core
  (:gen-class)
  (:require [taoensso.timbre :as timbre]))

(defn -main
  []
  (timbre/info "yep, we booted right, from a skinny jar"))
