(ns experiment.client-main
  "Represents a client process (eg. a user-facing website) that enqueues
   expensive work. The client process and worker process communicate via a
   shared redis db."
  (:require
   [clj-faktory.publisher :as fp]
   [taoensso.carmine :as car]
   [integrant.core :as ig]))

(defmethod ig/init-key ::redis-spec [_ {spec :spec}] spec)

(defmethod ig/init-key ::faktory-conn [_ {uri :uri}] (fp/publisher uri))

(def config
  {::redis-spec {:spec {:pool {} :spec {:uri "redis://localhost:6379/8"}}}
   ::faktory-conn {:uri "tcp://:some_password@localhost:7419"}})

(defn enqueue-job
  "Stuff an increment-counter job into faktory."
  [faktory-conn n]
  (fp/publish faktory-conn "increment-counter" [n] {}))

(defn check-count
  "Check if count has changed in redis, in response to a job run."
  [redis-spec]
  (car/wcar redis-spec (car/get "faktory_count")))

(def ig-system nil)

(defn -main [& _]
  (alter-var-root #'ig-system (constantly (ig/init config))))

(comment
  (-main)
  (ig/halt! ig-system))
