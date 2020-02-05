(ns rgm.cli
  (:require
   [cli-matic.core :refer [run-cmd]]
   [rgm.database]
   [rgm.http-server]
   [say-cheez.core :as sc]
   [taoensso.timbre :as timbre]))

(def BUILD (sc/capture {:git (sc/git-info :all)
                        #_#_:runtime (sc/runtime :vm)})) ;; for display

(defn make-runner
  "Process cli-matic global opts and calls the provided function `f` with the --profile."
  [f]
  (fn [opts]
    (let [profile (keyword (:profile opts))
          verbose? (:verbose opts)]
      (timbre/set-level! (if verbose? :debug :info))
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
