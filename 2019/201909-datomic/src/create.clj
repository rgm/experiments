;; in datomic directory
;; from https://docs.datomic.com/on-prem/dev-setup.html

(comment

"> bin/repl"
(require '[datomic.api :as d])
(def db-uri "datomic:free://localhost:4334/hello")
(d/create-database db-uri)

)
