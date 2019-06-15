(ns user
  (:require [figwheel.main.api :as fig]
            [clojure.core.server :as prepl]))

(defn start-figwheel
  []
  (figwheel.main.api/start
   "dev"
   #_{:id "dev"
    :options {:main 'pfig.test}
    :config {:watch-dirs ["src"] :mode :serve}}))

(defn start-jvm-prepl
  []
  (prepl/start-server {:accept 'clojure.core.server/io-prepl
                       :name :jvm
                       :port 5555}))

(defn start-fig-prepl
  []
  (prepl/stop-server :fig)
  (prepl/start-server {:accept 'cljs.core.server/io-prepl
                       :port 5557
                       :name :fig
                       :args [:repl-env (fig/repl-env "dev")]}))

(defn cljs-repl
  "?? need to start this to provide a conn for conjure"
  []
  (fig/cljs-repl "dev"))

(defn go
  []
  (start-jvm-prepl))

(comment

 "Starting a repl, connecting to figwheel via vim
 1. Start JVM prepl server (outside vim, via (go) at repl)
 2. Start figwheel, repl-env can now be non-nil (either)
 3. Start figwheel prepl (either)
 4. Start figwheel repl to give conjure something to talk to (outside vim)
 5. :ConjureUp in vim, eval some cljs, should show in browser"

 (start-figwheel)
 (fig/repl-env "dev")
 (start-fig-prepl)

 (fig/start "dev") ;; relies on external build config dev.cljs.edn
 (fig/stop "dev")
 (prepl/stop-server :fig)

 (fig/start
  {:id "dev"
   :options {:main 'pfig.test}
   :config {:watch-dirs ["src"] :mode :serve}})

 (prepl/start-server {:accept 'cljs.core.server/io-prepl
                      :port 5557
                      :name :fig
                      :args [:repl-env (fig/repl-env "dev")]})

 (fig/stop "dev"))

(defn stop-all-fig
  []
  (prepl/stop-server :fig)
  (fig/stop "dev"))

(defn start-all-fig
  []
  (fig/start "dev")
  (start-fig-prepl))

(comment

 (do (stop-all-fig)
     (start-all-fig))

 )
