(ns user
  (:require
   [clj-reload.core   :as reload]
   [clojure.repl.deps :as rd]
   [myapp.main        :as app]))

(reload/init {:dirs ["src"] :no-reload '#{user}})

(comment
  (rd/sync-deps)
  (reload/unload)
  (reload/reload)
  (app/go)
  (app/stop))
