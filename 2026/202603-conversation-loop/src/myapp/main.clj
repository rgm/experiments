(ns myapp.main
  "Main entry point for backend."
  (:require
   [clojure.core.async       :as a]
   [clojure.data.json        :as json]
   [clojure.test             :as t :refer [deftest is testing]]
   [hato.client              :as hc]
   [hato.middleware          :as hm]
   [reitit.ring]
   [ring.adapter.jetty]
   [ring.middleware.defaults :refer [site-defaults wrap-defaults]]
   [ring.util.response       :as res]
   [taoensso.telemere        :as tel]
   [taoensso.truss           :refer [have]]))

(defn GET:data [_]
  (-> (vec (shuffle (range 10)))
      pr-str
      (res/response)
      (res/content-type "application/edn")))

(defn make-router []
  (reitit.ring/router
   ["/" {:middleware [[wrap-defaults site-defaults]]}
    ["data" {:get GET:data}]]))

(defn make-handler []
  (let [f #(reitit.ring/ring-handler
            (make-router)
            (reitit.ring/routes
             (reitit.ring/redirect-trailing-slash-handler)
             #_(reitit.ring/create-resource-handler {:path "/" :root "public"})
             (reitit.ring/create-default-handler)))]
    (reitit.ring/reloading-ring-handler f)))

(deftest test-handler
  (letfn [(respond [method uri]
            ((make-handler) {:scheme :http :request-method method :uri uri}))]
    (testing "reitit handler"
      (let [res (respond :get "/data")]
        (is (= 200 (:status res)))
        (is (= "application/edn" (get-in res [:headers "Content-Type"])))))))

(def mak:handler
  {:start (fn [_]
            (tel/log! ["starting ring handler"])
            (make-handler))
   :stop (constantly :stateless-eh)})

(def mak:server
  {:start (fn [{:keys [port handler]}]
            (tel/log! ["starting ring server on port" port])
            (let [opts {:port (have integer? port) :join? false}]
              (ring.adapter.jetty/run-jetty handler opts)))
   :stop (fn [this]
           (tel/log! ["stopping ring server"])
           (.stop this))})

(defonce ^:clj-reload/keep *system (atom {}))

(defn start []
  (doto *system
    (swap! assoc :handler ((:start mak:handler) nil))
    (swap! assoc :jetty ((:start mak:server)
                         {:port 3000 :handler (:handler @*system)})))
  ::started)

(defn stop []
  (when-some [jetty (get @*system :jetty)]
    (swap! *system dissoc :jetty)
    (.stop jetty))
  (swap! *system dissoc :handler)
  ::stopped)

;; clj-reload hooks
(def after-ns-reload start)
(def before-ns-unload stop)

(defn go []
  (stop)
  (start))
