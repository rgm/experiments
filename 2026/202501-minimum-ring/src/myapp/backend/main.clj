(ns myapp.backend.main
  "Main entry point for backend."
  (:require
   [lambdaisland.config :as config]
   [lambdaisland.makina.system :as mak]
   [myapp.backend.ring]
   [myapp.backend.system]))

(def configuration
  (config/create {:prefix "myapp"}))

(def mak:config
  {:ring/handler {}
   :ring/server {:port (config/get configuration :http/port)
                 :handler #makina/ref :ring/handler}})

(def mak:handlers
  {:ring/handler myapp.backend.ring/mak:handler
   :ring/server myapp.backend.ring/mak:server})

(defn go []
  (let [f (fn [& _] (mak/start (mak/system mak:config) mak:handlers))]
    (alter-var-root #'myapp.backend.system/system f)))

(defn halt []
  (when-let [running-system myapp.backend.system/system]
    (mak/stop running-system mak:handlers)
    :stopped))

(defn -main []
  (halt)
  (go)
  :started)

(comment
  (-main)
  (config/source configuration :http/port)
  ((get-in myapp.backend.system [:ring/handler :makina/value])
   {:scheme :https, :request-method, :get :uri "/"}))
