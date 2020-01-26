(ns user
  (:require
   [clojure.tools.namespace.repl :as tns.repl]
   [juxt.clip.repl :as clip.repl]
   [rgm.nrepl]
   [rgm.server]
   [taoensso.timbre :as timbre]))

(timbre/set-level! :debug)
(tns.repl/set-refresh-dirs "src/clj")
(rgm.nrepl/start-server)
(clip.repl/set-init! (constantly rgm.server/system-config))

(def go    clip.repl/start)
(def halt  clip.repl/stop)
(def reset clip.repl/reset)

(comment
 (tns.repl/refresh)
 (tns.repl/refresh-all)
 )
