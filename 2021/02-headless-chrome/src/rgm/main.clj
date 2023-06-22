(ns rgm.main
  "Main entry point for web server."
  (:require [com.stuartsierra.component :as component]
            [rgm.chrome]
            [rgm.web-server]))

(defn new-system []
  (component/system-map
   :chrome (rgm.chrome/new-chrome "localhost" 9222)
   :server (component/using
            (rgm.web-server/new-web-server 4000)
            [:chrome])))

(defn -main [& _args]
  (component/start (new-system)))

(comment (-main))
