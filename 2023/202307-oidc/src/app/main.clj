(ns app.main
  (:require
   [clojure.pprint           :as pp]
   [integrant.core           :as ig]
   [integrant.repl           :refer [go halt reset]]
   [lambdaisland.hiccup      :as h]
   [portal.api               :as p]
   [reitit.core              :as rtc]
   [reitit.ring              :as rtr]
   [ring.adapter.jetty       :as jetty]
   [ring.middleware.defaults :refer [site-defaults wrap-defaults]]
   [ring.middleware.oauth2   :refer [wrap-oauth2] :as oauth2]
   [ring.util.response       :as res]
   [taoensso.carmine         :as car]))

(def ^:private ring-oauth2-profiles
  {:keycloak
   {;; external uris, set up `experiment` realm & `ring` client
    :authorize-uri    "http://localhost:7800/realms/experiment/protocol/openid-connect/auth"
    :access-token-uri "http://localhost:7800/realms/experiment/protocol/openid-connect/token"

    ;; see kc > clients > credentials, make sure "client authentication" is on
    :client-id        "ring"
    :client-secret    "D23dsXE9xNB0vmM1uOZJldNn4SAYuNqE"
    :scopes           ["openid"]

    ;; internal uris
    :launch-uri       "/oauth2/launch"   ;; kick off redirect to kc
    :redirect-uri     "/oauth2/redirect" ;; return from kc
    :landing-uri      "/"}})

(def ^:private config
  {::redis      {:uri "redis://:foobared@localhost:6379/9"}
   ::router     {}
   ::middleware {:oauth2 ring-oauth2-profiles
                 :redis (ig/ref ::redis)}
   ::handler    {:middleware (ig/ref ::middleware)
                 :router (ig/ref ::router)}
   ::jetty      {:handler (ig/ref ::handler)
                 :port 7700}})

(def ^:dynamic *redis* nil)

(defn- wrap-dynamic-redis [handler redis]
  (fn [req]
    (binding [*redis* redis] (handler req))))

(defn- root-handler [req]
  (prn (car/wcar *redis* (car/set "mykey" (rand-int 100))))
  (-> [:<>
       [:head]
       [:body
        [:h1 "hi"]
        [:p [:a {:href "/oauth2/launch"} "Login"]]
        (if (get-in req [:oauth2/access-tokens :keycloak])
          [:p [:a {:href "/logout"} "Logout"]])
        [:pre [:code (with-out-str (pp/pprint (select-keys req [:oauth2/access-tokens ])))]]]]
      h/render
      str
      res/response
      (assoc-in [:headers "Content-Type"] "text/html")))

(defn- logout-handler [_req]
  (res/redirect "/"))

(defmethod ig/init-key ::redis [_ spec]
  (let [pool (car/connection-pool {})]
    {:pool pool :spec spec}))

(extend-protocol rtc/Expand
  clojure.lang.Var
  ;; can redef handlers w/o `(reset) if we lookup from var during req handling
  (expand [this _] {:handler this}))

(defmethod ig/init-key ::router [_ _]
  (rtr/router
   [["/" {:get #'root-handler}]
    ["/logout" {:get #'logout-handler}]]))

(defmethod ig/init-key ::middleware
  [_ {oauth2 :oauth2 redis :redis}]
  (let [defaults (-> site-defaults
                     ;; need lax for oauth2
                     (assoc-in [:session :cookie-attrs :same-site] :lax))]
    [[wrap-defaults defaults]
     [wrap-dynamic-redis redis]
     ;; need wrap-session, wrap-params before wrap-oauth2
     [wrap-oauth2 oauth2]]))

(defmethod ig/init-key ::handler [_ {middleware :middleware router :router}]
  (rtr/ring-handler router
                    (rtr/routes
                     (rtr/redirect-trailing-slash-handler)
                     (rtr/create-resource-handler {:path "/"})
                     (rtr/create-default-handler))
                    {:middleware middleware}))

(defmethod ig/init-key ::jetty [_ {handler :handler :as opts}]
  (let [opts (-> opts (dissoc :handler) (assoc :join? false))]
    (jetty/run-jetty handler opts)))

(defmethod ig/halt-key! ::jetty
  [_ server]
  (.stop server))

(defonce *p nil)

(defn- start-portal []
  (add-tap #'p/submit)
  (alter-var-root #'*p p/open))

(defn- stop-portal []
  (remove-tap #'p/submit)
  (p/close)
  (alter-var-root #'*p (constantly nil)))

(defonce *system (atom nil))

(defn -main []
  (reset! *system (ig/init config))
  :started)

(comment
  (-main)
  (ig/halt! @*system)

  (start-portal)
  (stop-portal)

  (integrant.repl/set-prep! #(ig/prep config))
  (go)
  (halt)
  (do (reset)
      (require '[integrant.repl.state])
      (def handler (::handler integrant.repl.state/system))
      :restarted)

  (handler {:request-method :get :scheme :http :uri "/"})
  (handler {:request-method :get :scheme :http :uri "/oauth2/launch"})
  (handler {:request-method :get :scheme :http :uri "/oauth2/redirect"}))
