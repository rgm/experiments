(ns user
  (:require [datomic.client.api :as d]))

(def client (d/client {:server-type :dev-local
                       :system "dev"}))

(def movie-schema [{:db/ident :movie/title
                    :db/valueType :db.type/string
                    :db/cardinality :db.cardinality/one
                    :db/doc "The title of the movie"}

                   {:db/ident :movie/genre
                    :db/valueType :db.type/string
                    :db/cardinality :db.cardinality/one
                    :db/doc "The genre of the movie"}

                   {:db/ident :movie/release-year
                    :db/valueType :db.type/long
                    :db/cardinality :db.cardinality/one
                    :db/doc "The year the movie was released in theaters"}])

(def first-movies [{:movie/title "The Goonies"
                    :movie/genre "action/adventure"
                    :movie/release-year 1985}
                   {:movie/title "Commando"
                    :movie/genre "thriller/action"
                    :movie/release-year 1985}
                   {:movie/title "Repo Man"
                    :movie/genre "punk dystopia"
                    :movie/release-year 1984}])

(def all-titles-q '[:find ?movie-title :where [_ :movie/title ?movie-title]])

(comment
  (d/create-database client {:db-name "movies"})
  (def conn (d/connect client {:db-name "movies"}))
  (d/transact conn {:tx-data movie-schema})
  (d/transact conn {:tx-data first-movies})
  (def db (d/db conn))
  (d/q all-titles-q db)
  )

(def c2 (d/client {:server-type :dev-local
                   :system "datomic-samples"}))

(d/list-databases client {})

(d/list-databases c2 {})

(comment
  (d/create-database client {:db-name "tutorial"})
  (def conn (d/connect client {:db-name "tutorial"}))
  (d/transact conn {:tx-data [{:db/ident :red}
                              {:db/ident :green}
                              {:db/ident :blue}
                              {:db/ident :yellow}]})
  )

(defn make-idents [x] (mapv #(hash-map :db/ident %) x))
(def sizes [:small :medium :large :xlarge])
(def types [:shirt :pants :dress :hat])
(make-idents sizes)
(make-idents types)

(def schema-1
  [{:db/ident :inv/sku
    :db/valueType :db.type/string
    :db/unique :db.unique/identity
    :db/cardinality :db.cardinality/one}
   {:db/ident :inv/color
    :db/valueType :db.type/ref
    :db/cardinality :db.cardinality/one}
   {:db/ident :inv/size
    :db/valueType :db.type/ref
    :db/cardinality :db.cardinality/one}
   {:db/ident :inv/type
    :db/valueType :db.type/ref
    :db/cardinality :db.cardinality/one}])

(defn create-sample-data
  [colors sizes types]
  (->> (for [c colors s sizes t types]
         #:inv{:color c
               :size s
               :type t})
       (map-indexed (fn [n m] (assoc m :inv/sku (str "SKU-" n))))
       (vec)))

(def sample-data (create-sample-data #{:red :green :blue :yellow} sizes types))

(comment
  (d/transact conn {:tx-data (make-idents sizes)})
  (d/transact conn {:tx-data (make-idents types)})
  (d/transact conn {:tx-data schema-1})
  (d/transact conn {:tx-data sample-data})
  (def db (d/db conn))
  )

;; pulls

[:inv/sku "SKU-42"] ;; lookup ref

(comment
  (d/pull db
          [{:inv/color [:db/ident]}
           {:inv/size [:db/ident]}
           {:inv/type [:db/ident]}]
          [:inv/sku "SKU-42"])
  (d/pull db [{:inv/color [:db/ident]}] [:inv/sku "SKU-42"])
  (set (mapcat identity (d/q '[:find ?sku :where
                               [?e :inv/sku "SKK-42"] ;; bind e for sku-42
                               [?e :inv/color ?color] ;; get color for sku-42
                               [?e2 :inv/color ?color] ;; bind e2 to all matching ?color
                               [:?e2 :inv/sku ?sku]] ;; bind ?sku to all matching color
                             db)))

  )

(def order-schema
  [{:db/ident :order/items
    :db/valueType :db.type/ref
    :db/cardinality :db.cardinality/many
    :db/isComponent true}
   {:db/ident :item/id
    :db/valueType :db.type/ref
    :db/cardinality :db.cardinality/one}
   {:db/ident :item/count
    :db/valueType :db.type/long
    :db/cardinality :db.cardinality/one }])

(def add-order
  {:order/items [{:item/id [:inv/sku "SKU-25"] :item/count 10}
                 {:item/id [:inv/sku "SKU-26"] :item/count 20}
                 ]})

(comment
  (d/transact conn {:tx-data order-schema})
  (d/transact conn {:tx-data [add-order]})

  (def db (d/db conn)) ;; HAVE TO RE-DEFINE AFTER TRANSACTIONS
  (d/q '[:find ?sku
         :in $ ?inv ;; from input to entity id [:inv/sku "SKU-25"]
         :where
         [?item :item/id ?inv] ; <- to order/items in ?inv
         [?order :order/items ?item] ; <- up to the order
         [?order :order/items ?other-item] ; <- down to other items in the orders
         [?other-item :item/id ?other-inv] ; <- get the other-inv items
         [?other-inv :inv/sku ?sku]] ; <- skus
       db
       [:inv/sku "SKU-25"]) ;; <- ?inv above

  (def rules
    '[[(ordered-together ?inv ?other-inv)
       [?item :item/id ?inv] ; <- to order/items in ?inv
       [?order :order/items ?item] ; <- up to the order
       [?order :order/items ?other-item] ; <- down to other items in the orders
       [?other-item :item/id ?other-inv] ; <- get the other-inv items
       ]])

  ;;                    - db
  ;;                    | - rules
  (d/q '[:find ?sku :in $ % ?inv
         :where
         (ordered-together ?inv ?other-inv)
         [?other-inv :inv/sku ?sku]]
       ;; datasources
       db rules [:inv/sku "SKU-25"])
)


(def inventory-counts
  [{:db/ident :inv/count
    :db/valueType :db.type/long
    :db/cardinality :db.cardinality/one}])

(comment
  (d/transact conn {:tx-data inventory-counts}))

(def inventory-update
  [[:db/add [:inv/sku "SKU-21"] :inv/count 7]
   [:db/add [:inv/sku "SKU-22"] :inv/count 7]
   [:db/add [:inv/sku "SKU-42"] :inv/count 100]
   ])

(comment
  (d/transact conn {:tx-data inventory-update})
  (d/transact conn {:tx-data [[:db/retract [:inv/sku "SKU-22"] :inv/count 7]]})
  )
