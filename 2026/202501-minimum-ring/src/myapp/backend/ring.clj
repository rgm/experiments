(ns myapp.backend.ring
  (:require
   [clojure.test :as t :refer [deftest is testing]]
   [reitit.ring]
   [ring.adapter.jetty]
   [ring.middleware.defaults :refer [site-defaults wrap-defaults]]
   [ring.util.response       :as res]
   [taoensso.telemere        :as tel]
   [taoensso.truss           :refer [have]]))

(defn GET:data [_]
  (-> (vec (shuffle (range 50)))
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
             (reitit.ring/create-resource-handler {:path "/" :root "public"})
             (reitit.ring/create-default-handler)))]
    (reitit.ring/reloading-ring-handler f)))

(deftest test-handler
  (letfn [(respond [method uri]
            ((make-handler) {:scheme :http :request-method method :uri uri}))]
    (testing "implicit resource on disk, ie. / -> public/index.html"
      (let [res (respond :get "/")]
        (is (= 200 (:status res)))
        (is (= "text/html" (get-in res [:headers "Content-Type"])))))

    (testing "reitit handler"
      (let [res (respond :get "/data")]
        (is (= 200 (:status res)))
        (is (= "application/edn" (get-in res [:headers "Content-Type"]))))

      (testing "explicit resource on disk"
        (let [res (respond :get "/screen.css")]
          (is (= 200 (:status res)))
          (is (= "text/css" (get-in res [:headers "Content-Type"]))))))))

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

(comment
  (test-handler)
  ((make-handler) {:request-method :get :uri "/screen.css"}))
