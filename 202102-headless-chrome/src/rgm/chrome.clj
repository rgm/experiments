(ns rgm.chrome
  (:require
   [com.stuartsierra.component :as component]
   [taoensso.timbre :as timbre]))

(defrecord Chrome [port]
  component/Lifecycle
  (start [_this]
    (timbre/info "starting chrome on" port)
    {:chrome nil})
  (stop [_this]
    (timbre/info "stopping chrome")))

(defn new-chrome [port] (map->Chrome {:port port}))

