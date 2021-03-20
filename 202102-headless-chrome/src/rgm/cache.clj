(ns rgm.cache
  (:require [clojure.core.cache :as cache]
            [com.stuartsierra.component :as component]
            [taoensso.timbre :as timbre]))

(defrecord Cache []
  component/Lifecycle
  (start [this]
    (timbre/info "starting cache")
    {:cache nil})
  (stop [this]
    (timbre/info "stopping cache")))

(defn new-cache [] (map->Cache {}))

