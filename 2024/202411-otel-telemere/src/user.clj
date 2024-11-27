(ns user
  (:require
   [ring.adapter.jetty :as jetty]
   [ring.middleware.params :as params]
   [ring.util.response :as res]
   [steffan-westcott.clj-otel.api.trace.http :as trace-http]
   [steffan-westcott.clj-otel.api.trace.span :as span]
   [taoensso.telemere :as tel]))

(defonce *state (atom 0))

(defn increment-counter! []
  (span/with-span! "Incrementing counter"
    (swap! *state inc)))

(defn handler [_req]
  (let [n (increment-counter!)]
    (tel/log! :info "handling")
    (span/add-span-data! {:attributes {:service.counter/count n}})
    (res/response (str n))))

(defn wrap-exception [handler]
  (fn [req]
    (try
      (handler req)
      (catch Throwable e
        (span/add-exception! e {:escaping? false})
        (let [resp (res/response (ex-message e))]
          (res/status resp 500))))))

(defn start []
  (let [app (-> #'handler
                params/wrap-params
                wrap-exception
                trace-http/wrap-server-span)]
    (jetty/run-jetty app {:port 9090 :join? false})))

(comment
  (def server (start))
  (.stop server)
  (def server nil)

  (require '[taoensso.telemere.open-telemetry :as tel.otel])
  (tel/add-handler! ::otel (tel.otel/handler:open-telemetry))
  tel/otel-tracing?
  (tel/event! ::some-event) ;; should land in otel logs?

  (tel/trace! ::outer
    (let [x 12]
      (future (tel/trace! ::inner-1 (do (Thread/sleep 1000) (+ x 12))))
      (tel/trace! ::inner-2 (do (Thread/sleep 500) (+ x 12)))))

  (defn test []
    (let [client (java.net.http.HttpClient/newHttpClient)
          uri (java.net.URI/create "http://localhost:9090")
          req (.build (.GET (java.net.http.HttpRequest/newBuilder uri)))
          res (.send client req
                     (java.net.http.HttpResponse$BodyHandlers/ofString))]
      {:status (.statusCode res)
       :headers (.map (.headers res))
       :body (.body res)}))

  (dotimes [_ 500] (test)))
