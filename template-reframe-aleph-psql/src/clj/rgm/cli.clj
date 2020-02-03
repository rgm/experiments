(ns rgm.cli
  (:require
   [cli-matic.core :refer [run-cmd]]
   [say-cheez.core :as sc]

   [rgm.database]
   [rgm.http-server]))

(def BUILD (sc/capture {:git (sc/git-info :all)
                        #_#_:runtime (sc/runtime :vm)})) ;; for display

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
   :commands    [{:command "run-server"
                  :runs rgm.http-server/run-server
                  :opts []
                  :short "s"
                  :description ["starts http server"]}

                 {:command "migrate-db"
                  :runs rgm.database/migrate
                  :opts []
                  :description ["migrate the database at JDBC_DATABASE_URL to the latest version"]}

                 {:command "rollback-db"
                  :runs rgm.database/rollback
                  :opts []
                  :description ["roll back the last migration on JDBC_DATABASE_URL"]}]})

(defn -main
  "Main entry point for JVM process."
  [& args]
  (run-cmd args cli-config))
