(ns rgm.cli
  (:require
   [cli-matic.core :refer [run-cmd]]
   [io.aviso.ansi :as ansi]
   [rgm.database]
   [rgm.http-server]
   [say-cheez.core :as sc]
   [taoensso.timbre :as timbre]))

(def BUILD (sc/capture {:git (sc/git-info :all)
                        #_#_:runtime (sc/runtime :vm)})) ;; for display

(defn ansi-appender
  "ANSI-color appender for timbre, to make errors / warnings jump out"
  [min-level]
  {:enabled?   true
   :min-level  min-level
   :output-fn :inherit
   :fn        (fn [data]
                (let [{:keys [output_ level]} data
                      formatted-output-str (force output_)
                      color (case level
                              :info  ansi/green
                              :warn  ansi/bold-yellow
                              :error ansi/bold-red
                              ansi/white)]
                  (println (color formatted-output-str))))})

(defn make-runner
  "Process cli-matic global opts and calls the provided function `f` with the --profile."
  [f]
  (fn [opts]
    (let [profile (keyword (:profile opts))
          verbose? (:verbose opts)
          log-level (if verbose? :debug :info)]
      (timbre/merge-config! {:appenders {:println (ansi-appender log-level)}})
      (timbre/set-level! log-level)
      (f profile))))

(def cli-config
  "Configuration for cli-matic."
  {:app         {:command "rgm"
                 :description "Command runner for a web application template."
                 :version (:git BUILD)}

   :global-opts [{:option "verbose"
                  :as "Make the operation more talkative"
                  :type :flag
                  :default false}

                 {:option "profile"
                  :as "Execution profile"
                  :type #{"dev" "prd"}
                  :env "PROFILE"
                  :default "prd"}]

   :commands    [{:command "start"
                  :runs (make-runner rgm.http-server/run-server)
                  :opts []
                  :short "s"
                  :description ["start http server and backing services"]}

                 {:command "migrate"
                  :runs (make-runner rgm.database/migrate-to-latest)
                  :opts []
                  :description ["apply pending migrations to database"]}

                 {:command "rollback"
                  :runs (make-runner rgm.database/rollback-latest)
                  :opts []
                  :description ["roll back the last migration"]}]})

(defn -main
  "Main entry point for JVM process."
  [& args]
  (run-cmd args cli-config))
