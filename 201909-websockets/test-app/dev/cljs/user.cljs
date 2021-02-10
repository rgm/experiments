(ns cljs.user
  (:require [test-app.core]
            [test-app.system :as system]))

(def go system/go)
(def reset system/reset)
(def stop system/stop)
(def start system/start)
