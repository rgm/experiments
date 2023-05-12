(ns experiment.worker-main
  "Start a worker process, consuming jobs from faktory."
  (:require
   [clj-faktory.core :as faktory]
   [clj-faktory.worker :as fw]
   [integrant.core :as ig]
   [taoensso.carmine :as car]))

;; not using clj-faktory.core/defjob macro because I can't quite tell how to
;; partial in the redis conn from integrant
(defn increment-job [redis-spec n-to-add]
  (prn "STARTING JOB")
  (Thread/sleep 5000) ; let's pretend this is expensive
  (car/wcar redis-spec (car/incrby "faktory_count" n-to-add))
  (prn "FINISHED JOB"))

(defmethod ig/init-key ::redis-spec [_ {spec :spec}] spec)

(defmethod ig/init-key ::faktory-uri [_ {uri :uri}] uri)

(defmethod ig/init-key ::worker
  [_ {redis-spec :redis-spec faktory-uri :faktory-uri}]
  (fw/register-job :increment-counter #(increment-job redis-spec %))
  (let [worker (faktory/worker faktory-uri {:concurrency 5 :queues ["default"]})]
    (faktory/start worker)
    worker))

(defmethod ig/halt-key! ::worker
  [_ worker]
  (faktory/stop worker))

(def config
  {::redis-spec {:spec {:pool {} :spec {:uri "redis://localhost:6379/8"}}}
   ::faktory-uri {:uri "tcp://:some_password@localhost:7419"}
   ::worker {:redis-spec (ig/ref ::redis-spec)
             :faktory-uri (ig/ref ::faktory-uri)}})

(def ig-system nil)

(defn -main [& _]
  (alter-var-root #'ig-system (constantly (ig/init config))))

(comment
  (-main)
  (ig/halt! ig-system))
