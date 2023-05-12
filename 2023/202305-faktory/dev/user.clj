(ns user
  (:require
   [clojure.tools.namespace.repl :as tns]
   [experiment.client-main       :as client]
   [integrant.core               :as ig]
   [integrant.repl               :refer [go halt reset]]
   [integrant.repl.state]
   [taoensso.carmine :as car]))

(defn -main []
  (tns/set-refresh-dirs "src")
  (integrant.repl/set-prep! #(ig/prep experiment.client-main/config))
  (go))


(def ig-system integrant.repl.state/system)

(def redis-spec (::client/redis-spec ig-system))

(def faktory-conn (::client/faktory-conn ig-system))

(-main)

(comment
  (halt)
  (reset)

  (car/wcar redis-spec (car/ping))

  (car/wcar redis-spec (car/del "faktory_count"))
  (car/wcar redis-spec (car/set "faktory_count" 99))
  (car/wcar redis-spec (car/get "faktory_count"))

  (client/enqueue-job faktory-conn 1)
  (client/check-count redis-spec))
