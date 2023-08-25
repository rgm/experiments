(ns user
  (:require
   [clojure.core.async :as a :refer [<! >! <!! >!!]]
   [integrant.core :as ig]
   [integrant.repl :refer [go halt reset]]
   [taoensso.carmine :as car :refer [wcar]]))

(defmethod ig/init-key ::redis
  [_ {:keys [uri]}]
  (let [opts {:pool (car/connection-pool {}) :spec {:uri uri}}]
    (prn (wcar opts (car/ping)))
    opts))

(def system-config
  {::redis {:uri "redis://localhost:6379/2"}})

(integrant.repl/set-prep! #(ig/prep system-config))

(comment
  (require '[integrant.repl.state :as irs])
  (def redis (::redis irs/system))
  (go)
  (halt)
  (reset))
