(ns user
  (:require
   [datahike.api :as d]
   [datahike-postgres.core]))

(comment

; (def cfg {:store {:backend :file :path "example"}})

(def cfg {:store {:backend :pg
                  :host "127.0.0.1"
                  :port 5432
                  :user "postgres"
                  :password "postgres"
                  :dbname "datahike-example"}})

(d/create-database cfg)

(def conn (d/connect cfg))

(d/transact conn [{:db/ident :name
                   :db/valueType :db.type/string
                   :db/cardinality :db.cardinality/one}
                  {:db/ident :age
                   :db/valueType :db.type/long
                   :db/cardinality :db.cardinality/one}])

(d/transact conn [{:name "Alice" :age 20}
                  {:name "Bob" :age 30}
                  {:name "Charlie" :age 40}
                  {:age 15}])

(d/q '[:find ?e ?n ?a :where [?e :name ?n] [?e :age ?a]] @conn)

(d/transact conn {:tx-data [{:db/id 3 :age 25}]})

(d/q {:query '{:find [?e ?n ?a]
               :where [[?e :name ?n]
                       [?e :age ?a]]}
      :args [@conn]})

;; history
(d/q '[:find ?a :where [?e :name "Alice"] [?e :age ?a]] (d/history @conn))

(d/release conn)

(d/delete-database cfg)
)
