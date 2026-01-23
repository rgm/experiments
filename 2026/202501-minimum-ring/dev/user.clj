(ns user
  (:require
   [myapp.backend.main]
   [shadow.cljs.devtools.api]
   [shadow.cljs.devtools.server]))

(defn start-shadow
  "Duplicates calva's autostart of the shadow build, publishing of an nrepl
   connection that's promoted to cljs. Calva will do this automatically; use
   this from vim."
  []
  (shadow.cljs.devtools.server/start!)
  (shadow.cljs.devtools.api/watch :app)
  (shadow.cljs.devtools.api/nrepl-select :app))

(comment
  (start-shadow)
  :cljs/quit)
