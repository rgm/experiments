(ns rgm.core
  (:gen-class)
  (:require
   [reitit.core :as r]
   [taoensso.timbre :as timbre]))

(def router
  (r/router
    [["/api/ping" ::ping]
     ["/api/orders/:id" ::order]]))

(defn -main
  []
  (timbre/info "reitit router is" router) ;; should cause a classloader bail-out
  (timbre/info "yep, we booted right, from a skinny jar"))
