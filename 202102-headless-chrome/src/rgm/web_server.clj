(ns rgm.web-server
  "Ring/jetty web server."
  (:require [com.stuartsierra.component :as component]
            [muuntaja.middleware        :as muuntaja]
            [reitit.ring                :as rr]
            [ring.adapter.jetty]
            [ring.util.io]
            [ring.util.response         :as response]
            [rgm.chrome]
            [taoensso.timbre            :as timbre]))

(defn- get-url [request]
  (case (:uri request)
    "http://host.docker.internal:4000/index.html"))

(defn print-handler [_cache chrome request]
  (let [render-fn (fn [output-stream]
                    (rgm.chrome/render-pdf chrome (get-url request) output-stream))]
    (-> (ring.util.io/piped-input-stream render-fn)
        (response/response)
        (assoc-in [:headers "Content-Type"] "application/pdf")
        ;; so we don't need to supply content-length; we don't actually know it yet
        (assoc-in [:headers "Content-Transfer-Encoding"] "chunked"))))

(defn make-router [cache chrome]
  (rr/router
   [["/print" {:handler (partial print-handler cache chrome)}]]))

(def default-handler
  (rr/routes
   (rr/redirect-trailing-slash-handler {:method :strip})
   ;; test page at / aka index.html comes from the resource handler
   (rr/create-resource-handler {:path "/"})
   (rr/create-default-handler {:not-found (constantly 404)})))

(defn make-app [router]
  (rr/ring-handler
   router default-handler {:middleware [muuntaja/wrap-format]}))

(defrecord WebServer [port cache chrome]
  component/Lifecycle
  (start [this]
    (timbre/info "starting web server on port" port)
    (let [router (make-router cache chrome)
          app    (make-app router)
          server (ring.adapter.jetty/run-jetty
                  app {:port port :join? false})]
      (assoc this :server server)))
  (stop [this]
    (timbre/info "stopping web server")
    (.stop (:server this))))

(defn new-web-server [port] (map->WebServer {:port port}))
