(ns user
  (:require [datomic.api :as d]))

(def uri "datomic:free://localhost:4334/hello")

(comment

 (d/create-database uri)
 (def conn (d/connect uri))
 )
