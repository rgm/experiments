(ns rgm.database
  (:require
   [migratus.core :as migratus]
   [rgm.system]
   [taoensso.timbre :as timbre]))

(defn make-migratus-config
  [db-spec]
  {:store         :database
   :migration-dir "migrations/"
   :db            db-spec})

(defn migrate-to-latest
  "Migrate the profile db to apply all new migrations."
  [profile]
  (if-let [db-spec (rgm.system/db-spec (rgm.system/config profile))]
    (migratus/migrate (make-migratus-config db-spec))
    (timbre/error "no db-spec found in profile" profile)))

(defn rollback-latest
  "Roll back the newest migration in the profile db."
  [profile]
  (if-let [db-spec (rgm.system/db-spec (rgm.system/config profile))]
    (migratus/rollback (make-migratus-config db-spec))
    (timbre/error "no db-spec found in profile" profile)))
