(ns rgm.main
  "Main entry point for web server."
  (:require
   [com.stuartsierra.component :as component]
   [rgm.cache]
   [rgm.chrome]
   [rgm.web-server]))

(defn new-system []
  (component/system-map
   :chrome (rgm.chrome/new-chrome "localhost" 9222)
   :cache  (rgm.cache/new-cache)
   :server (component/using
            (rgm.web-server/new-web-server 3000)
            [:chrome :cache])))

(defn -main [& _args]
  (component/start (new-system)))
