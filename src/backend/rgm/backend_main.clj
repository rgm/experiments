(ns rgm.backend-main
  "cli, etc for starting all server-side processes"
  (:gen-class)
  (:require
    [aero.core :as aero]
    [integrant.core :as ig]
    [taoensso.timbre :as timbre]))

;; register integrant components
(require
  '[rgm.http]
  '[rgm.nrepl])

(defn make-ig-system
  "reads an external edn config, resolves all aero and ig refs"
  ([]
   (make-ig-system "config.edn"))
  ([config-filename]
   (ig/prep (aero/read-config config-filename))))

(defn -main
  []
  (timbre/set-level! :info)
  (ig/init (make-ig-system)))

(comment
  (make-ig-system))
