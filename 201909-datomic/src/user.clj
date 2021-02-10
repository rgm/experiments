(ns user
  "see http://subhasingh.com/blog/How-to-Setup-Datomic-Free/"
  (:require [datomic.api :as d]))

; (ns user
 ;   (:require [datomic.client.api :as d]))

(comment

(def uri "datomic:free://localhost:4334/hello")

(d/create-database uri)

(def conn (d/connect uri)) ;; free, direct to transactor via URI instead of cfg and client

(def schema
  [{:db/id #db/id[:db.part/db]
    :db/ident :person/email
    :db/valueType :db.type/string
    :db/cardinality :db.cardinality/one
    :db/unique :db.unique/value
    :db/doc "The email of the person"
    :db.install/_attribute :db.part/db}])

(d/transact conn schema)

(def add-emails
  [{:db/id #db/id[:db.part/user -1000001] :person/email "example@gmail.com"}
   {:db/id #db/id[:db.part/user -1000002] :person/email "john@gmail.com"}
   {:db/id #db/id[:db.part/user -1000003] :person/email "jane@gmail.com"}])

(d/transact conn add-emails)

(let [db (d/db conn)]
   (d/q '[:find ?e
          :in $
          :where
          [?e :person/email _]]
        db))



)
