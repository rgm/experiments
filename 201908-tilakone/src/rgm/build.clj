(ns rgm.build
  (:require
   [clojure.core.server :as prepl]
   [figwheel.main.api :as fig]))

(defn compiler-options
  [main-ns]
  {:main main-ns
   :npm-deps false
   :install-deps false
   :output-dir "target/public/cljs-out"
   :output-to "target/public/cljs-out/dev-main.js"
   :language-out :ecmascript5})

(defn start-figwheel-without-repl
  [main-ns]
  (figwheel.main.api/start
   {:id "dev"
    :options (compiler-options main-ns)
    :config {:mode :serve ;; don't start repl automatically, do it after prepl
             :watch-dirs ["src"]}}))

(defn start-fig-prepl
  []
  (prepl/start-server
   {:accept 'cljs.core.server/io-prepl
    :port 5557
    :name :fig
    :args [:repl-env (fig/repl-env "dev")]}))

(defn cljs-repl
  "?? need to start this to provide a conn for conjure"
  []
  (fig/cljs-repl "dev"))

(defn -main
  [& args]
  (let [fig-main-ns (symbol (first args))]
    (start-figwheel-without-repl fig-main-ns)
    (start-fig-prepl)
    (cljs-repl)))
