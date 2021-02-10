(ns scratch.rgm)


(require '[rgm.server :as s])

(s/host-handler nil)

(def handler (s/make-handler))

(handler {:request-method :get :uri "/" :headers {"Accept" "text/html"}})
(handler {:request-method :get :uri "/app.min.js"})
