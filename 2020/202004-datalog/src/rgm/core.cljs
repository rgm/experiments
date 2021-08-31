(ns rgm.core
  (:require [datascript.core :as d]))

(def schema {:aka {:db/cardinality :db.cardinality/many}})

(def *conn (d/create-conn schema))

(def foo 'bar)

(comment
  (deref *conn)
  (-> (d/datoms @*conn :eavt) (seq) (count))
  )

(d/transact! *conn [{:db/id -1
                     :name "Maksim"
                     :age 45
                     :aka ["Max Otto Von Stierlitz"
                           "Jack Ryan"]}])

(d/q '[:find ?k ?x
       :in [[?k [?min ?max]] ...] ?range
       :where [(?range ?min ?max) [?x ...]]
       [(even? ?x)]]
     {:a [1 7] :b [2 4]}
     range)


(def schema2 {:movie/actors {:db/cardinality
                             :db.cardinality/many
                             :db/valueType :db.type/ref
                             }
              :movie/director {:db/valueType :db.type/ref}})

(def *conn2 (d/create-conn schema))

(d/transact! *conn2 [{:db/id -1 :movie/title "Top Gun" :movie/year 1986}])

(d/transact! *conn2 [[:db/add -1 :person/name "Tom Cruise"] [:db/add -2
:person/name "Anthony Edwards"]])

(d/transact! *conn2 [[:db.fn/retractEntity 2] [:db.fn/retractEntity 3]])
(d/transact! *conn2 [[:db/add 1 :movie/director 4]])

(comment
  (deref *conn2)
  *conn2
  (->> (d/datoms @*conn2 :eavt)
       (seq)
       ;; (map prn)
       )

  (d/q '[:find ?e :in $ ?name :where [?e :movie/title ?name]] @*conn2 "Top Gun")
  (d/transact! *conn2 [[:db.fn/retractEntity 6]])

  (d/transact! *conn2 [{:db/id (d/tempid :user) :person/name "Ahnold"}])





  )
(let [tom (d/q '[:find ?e . :in $ ?name :where [?e :person/name ?name]]
               @*conn2
               "Anthony Edwards")]
    (d/pull @*conn2 '[*] tom))

(d/transact! *conn2 [[:db/add 5 :person/birth-year 1963]])

(d/q '[:find ?e
       :in $ ?name :where [?e :person/name ?name]]
               @*conn2
               "Anthony Edwards")

(d/transact! *conn2 [[:db/add 1 :movie/actors [4 5]]])

(let [anthony (d/q '[:find ?e . :in $ ?name :where [?e :person/name ?name]] @*conn2
                   "Anthony Edwards")]
  (d/pull @*conn2 '[* {:movie/_actors [:movie/title]}] anthony))
