(ns user
  (:require
   [cider.nrepl]
   [cider.piggieback]
   [figwheel.main.api :as fig]
   [nrepl.server :as nrepl]))

(defn make-nrepl-handler []
  (let [middleware-symbols (conj cider.nrepl/cider-middleware
                                 'cider.piggieback/wrap-cljs-repl)
        middleware-vars (map resolve middleware-symbols)]
    (apply nrepl/default-handler middleware-vars)))

(let [server (nrepl/start-server :port 0 :handler (make-nrepl-handler))]
  (spit ".nrepl-port" (:port server)))

(fig/start {:mode :serve} "dev")
(fig/cljs-repl "dev")

(comment
 (+ 1 2)
 (figwheel.main.api/repl-env "dev") ;; for piggieback
 )
