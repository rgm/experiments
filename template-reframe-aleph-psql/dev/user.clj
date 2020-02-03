(ns user
  (:require
   [clojure.tools.namespace.repl :as tns.repl]
   [figwheel.main.api :as fig]
   [juxt.clip.repl :as clip.repl]
   [rgm.nrepl]
   [rgm.system]
   [taoensso.timbre :as timbre]))

(timbre/set-level! :debug)
(tns.repl/set-refresh-dirs "src/clj")
(rgm.nrepl/start-server)
(clip.repl/set-init! #(rgm.system/system-config :dev))

(def go    clip.repl/start)
(def halt  clip.repl/stop)
(def reset clip.repl/reset)

;; * Figwheel

(def BUILD-ID "dev")

(defn start-figwheel
  []
  (timbre/info "starting figwheel server")
  (fig/start {:mode :serve} BUILD-ID))

(defn stop-figwheel
  []
  (timbre/info "stopping figwheel server")
  (fig/stop BUILD-ID))

(defn figwheel-repl
  []
  (fig/cljs-repl BUILD-ID))

(comment
 (tns.repl/refresh)
 (tns.repl/refresh-all)
 (figwheel.main.api/repl-env BUILD-ID) ;; for :Piggieback
 )
