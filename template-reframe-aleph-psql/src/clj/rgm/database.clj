(ns rgm.database
  (:require
   [ragtime.jdbc]
   [ragtime.repl]
   [rgm.system]
   [taoensso.timbre :as timbre]))

(defn make-ragtime-config
  [db-spec]
  {:datastore  (ragtime.jdbc/sql-database {:connection-uri db-spec})
   :migrations (ragtime.jdbc/load-resources "migrations")
   :reporter   (fn [_store op id]
                 (timbre/info (case op :up "applying" :down "rolling back")
                              "migration" id))})

(defn migrate-to-latest
  "Migrate the profile db to apply all new migrations."
  [profile]
  (if-let [db-spec (rgm.system/db-spec (rgm.system/config profile))]
    (ragtime.repl/migrate (make-ragtime-config db-spec))
    (timbre/error "no db-spec found in profile" profile)))

(defn rollback-latest
  "Roll back the newest migration in the profile db."
  [profile]
  (if-let [db-spec (rgm.system/db-spec (rgm.system/config profile))]
    (ragtime.repl/rollback (make-ragtime-config db-spec))
    (timbre/error "no db-spec found in profile" profile)))
