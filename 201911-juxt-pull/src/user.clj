(ns user
  (:require [juxt.pull.core]))

;; https://github.com/juxt/pull#usage

(def data
  '{:name "pull"
    :routes {:main ["/" :abc]
             :secondary ["/admin" :def]}
    :vhosts {"localhost" ^:ref [:routes :main]
             "another" ^:ref [:routes :secondary]}
    :server {:port 8080
             :vh2 {:foo ^:ref [:vhosts "localhost"]}
             :vhosts [^:ref [:vhosts "localhost"]
                      ^:ref [:vhosts "another"]]}})

(def pull (partial juxt.pull.core/pull data))

(def more-data
  '[{:a 1 :b 2 :c 3}
    {:a 4 :b 5 :c 6}])

(comment

(pull '[:name :server])
(pull '[:vhosts])
(pull '[{:server [:vhosts]}])
(pull '[{:server [{:vh2 [:foo]}]}])
(pull '[*])

)

(def pull2 (partial juxt.pull.core/pull more-data))

(def om-data
  {:properties/by-id {1 #:property{:id 1 :address "123 main"}
                      2 #:property{:id 2 :address "456 elm"}}
   :cycles/by-id {:cycle-a #:cycle{:id 2018
                                   :title "2018 year"
                                   :properties [[:property/id 1]]
                                   }
                  :cycle-b #:cycle{:id 2019
                                   :title "2019 year"
                                   :properties [[:property/id 1]
                                                [:property/id 2]]}}})

(comment
 

 )


