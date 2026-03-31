(ns user
  (:require
   [clj-reload.core   :as reload]
   [clojure.repl.deps :as rd]
   [taoensso.telemere :as tel]
   [myapp.main        :as app]))

(reload/init {:dirs ["src"] :no-reload '#{user}})

(tel/remove-handler! :default/console)

(tel/add-handler!
 :my/file (tel/handler:file
           {:path      "dev.log"
            #_#_:output-fn (tel/pr-signal-fn {:pr-fn :edn})}))

(tel/call-on-shutdown! tel/stop-handlers!)

(comment
  (rd/sync-deps)
  (reload/unload)
  (reload/reload)
  (app/go)
  (app/stop))
