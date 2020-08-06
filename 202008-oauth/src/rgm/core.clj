(ns rgm.core
  (:require
   [buddy.auth               :as auth :refer [throw-unauthorized]]
   [buddy.auth.backends      :as backends]
   [buddy.auth.middleware    :refer [wrap-authentication wrap-authorization]]
   [clj-http.client          :as client]
   [clojure.pprint           :as pp]
   [juxt.clip.core           :as clip]
   [juxt.clip.repl           :as clip.repl :refer [start stop reset]]
   [muuntaja.middleware      :refer [wrap-format]]
   [oauth.client             :as oauth]
   [reitit.ring              :as rr]
   [ring.adapter.jetty       :as jetty]
   [ring.middleware.defaults :refer [site-defaults wrap-defaults]]
   ; [ring.middleware.oauth2   :refer [wrap-oauth2]]
   [ring.middleware.oauth2-rgm   :refer [wrap-oauth2]]
   [ring.util.http-response  :as response]
   [selmer.parser]
   [taoensso.carmine.ring    :as carmine]))

;; * OAUTH

;; https://docs.gitlab.com/ee/integration/oauth_provider.html

(def GITLAB-APPLICATION-ID (get (System/getenv) "GITLAB_APPLICATION_ID"))
(def GITLAB-CLIENT-SECRET  (get (System/getenv) "GITLAB_CLIENT_SECRET"))

;; from doorkeeper gem https://github.com/doorkeeper-gem/doorkeeper/wiki/API-endpoint-descriptions-and-examples
(def GITLAB-AUTHORIZE-URI  "https://gitlab.com/oauth/authorize")
(def GITLAB-ACCESS-TOKEN-URI   "https://gitlab.com/oauth/token")
(def GITLAB-CALLBACK-URI "http://127.0.0.1.xip.io/users/auth/gitlab/callback")

(def consumer (oauth/make-consumer GITLAB-APPLICATION-ID
                                   GITLAB-CLIENT-SECRET
                                   GITLAB-AUTHORIZE-URI
                                   GITLAB-ACCESS-TOKEN-URI
                                   GITLAB-AUTHORIZE-URI
                                   ; nil
                                   :hmac-sha1))
(comment
  (client/post (str GITLAB-AUTHORIZE-URI "?"
                    "response_type=code&"
                    "grant_type=authorization_code"
                    "client_secret=&" GITLAB-CLIENT-SECRET
                    "client_id=&" GITLAB-APPLICATION-ID
                    "redirect_uri=" GITLAB-CALLBACK-URI))

  (client/post (str GITLAB-ACCESS-TOKEN-URI
                    "?code=" "5bc306adfea2f8fe25c7fa4a942abe56f7cb9308d5ef74f479d700411b5b3c4d"
                    "&grant_type=authorization_code"
                    "&client_secret=" GITLAB-CLIENT-SECRET
                    "&client_id=" GITLAB-APPLICATION-ID
                    "&redirect_uri=" GITLAB-CALLBACK-URI))

  (oauth/request-token consumer GITLAB-CALLBACK-URI))

; https://gitlab.com/oauth/authorize?client_id=APP_ID&redirect_uri=REDIRECT_URI&response_type=code&state=YOUR_UNIQUE_STATE_HASH&scope=REQUESTED_SCOPES
; parameters = 'client_id=APP_ID&client_secret=APP_SECRET&code=RETURNED_CODE&grant_type=authorization_code&redirect_uri=REDIRECT_URI'
; RestClient.post 'http://gitlab.example.com/oauth/token', parameters

(def *auth-tokens
  ""
  (atom {:123 :rgm}))

(defn my-authfn
  [_req token]
  (get @*auth-tokens (keyword token)))

(defn unauthorized-handler
  [req _metadata]
  (if (auth/authenticated? req)
    (response/found "/")
    (response/found "/login")))

(def auth-backend
  (backends/token {:authfn my-authfn
                   :unauthorized-handler unauthorized-handler}))

;; * HANDLERS

(selmer.parser/set-resource-path! "html/")

(defn show-dashboard
  [request]
  (tap> request)
  (let [session (:session request)]
    (-> (selmer.parser/render-file "dashboard.html" {:username "foo"
                                                     :session session})
        (response/ok)
        (response/content-type "text/html; charset=utf-8"))))

(defn show-gitlab-login-succeeded
  [request]
  (tap> request)
  (let [session (:session request)]
    (-> (selmer.parser/render-file "hi_gitlab.html" {:session session})
        (response/ok)
        (response/content-type "text/html; charset=utf-8"))))

(defn kickoff-gitlab
  [_]
  (response/found (str "https://gitlab.com/oauth/authorize?client_id="
                       GITLAB-APPLICATION-ID
                       "&redirect_uri=https://rgm.ngrok.io/users/auth/gitlab/callback"
                       "&response_type=code"
                       "&state=token"
                       "&scope=read_user")))

(defn gitlab-callback
  [request]
  (tap> request)
  (let [session (:session request)
        code    (get-in request [:query-params "code"])]
    (prn code)
    (-> (response/found "/")
        (update session assoc :code code))))

(defn defaults
  [session-store]
  (prn session-store)
  (-> site-defaults
      (assoc-in [:session :store] session-store)
      #_(assoc-in [:session :cookie-attrs :same-site] :lax)))

(def oauth-config
  {:gitlab {:authorize-uri    GITLAB-AUTHORIZE-URI
            :access-token-uri GITLAB-ACCESS-TOKEN-URI
            :client-id        GITLAB-APPLICATION-ID
            :client-secret    GITLAB-CLIENT-SECRET
            :scopes           ["read_user"]
            :launch-uri       "/ring-oauth2/gitlab"
            ; :redirect-uri     GITLAB-CALLBACK-URI
            :redirect-uri     "http://127.0.0.1.xip.io:3000/users/auth/gitlab/callback"
            :landing-uri      "/"}
   #_#_:github {:authorize-uri    "https://github.com/login/oauth/authorize"
            :access-token-uri "https://github.com/login/oauth/access_token"
            :client-id        "abcabcabc"
            :client-secret    "xyzxyzxyzxyzxyz"
            :scopes           ["user:email"]
            :launch-uri       "/oauth2/github"
            :redirect-uri     "/oauth2/github/callback"
            :landing-uri      "/hello-github"}})

(defn make-app
  [deps]
  (let [{:keys [session-store]} deps]
    (rr/ring-handler
     (rr/router [["/"       {:get show-dashboard}]
                 ["/hello-gitlab" {:get show-gitlab-login-succeeded}]
                 ; ["/login"  {:get kickoff-gitlab}]
                 ; ["/users/auth/gitlab" {}]
                 ; ["/users/auth/gitlab/callback" {:get gitlab-callback}]

                 ; ["/ring-oauth2/gitlab"]
                 ])
     (rr/routes (rr/redirect-trailing-slash-handler {:method :strip})
                (rr/create-resource-handler {:path "/"})
                (rr/create-default-handler {:not-found (constantly {:status 404})}))
     {:middleware [[wrap-defaults (defaults session-store)]
                   [wrap-oauth2 oauth-config]
                   #_[wrap-authorization auth-backend]
                   #_[wrap-authentication auth-backend]
                   [wrap-format]]})))

(comment (let [app (make-app {})]
           (app {:request-method :get :uri "/login" :headers {"Accept" "text/html"}})))

;; * RING SERVER

(defn start-server
  [handler]
  (let [port (or (System/getenv "PORT") "3000")]
    (jetty/run-jetty handler {:port (Integer/parseInt port)
                              :join? false
                              :async? false})))

(defn system-config
  []
  (let [redis-uri "redis://127.0.0.1:6379/2"]
    {:components
     {:db   {:start #(do (prn "starting psql") :psql)}
      :session-store {:start `(carmine/carmine-store {:pool {} :spec {:uri ~redis-uri}}
                                                     {:expiration-secs ~(* 60 60 15)
                                                      :key-prefix ""})}
      :app  {:start `(make-app {:db (clip/ref :db) :session-store (clip/ref :session-store)})}
      :http {:start `(start-server (clip/ref :app))
             :stop  '(.stop this)}}}))

(defn -main
  [& _]
  (clip/start (system-config))
  @(promise))

(comment
  (clip.repl/set-init! #(system-config))
  (start)
  (stop)
  (reset)
  clip.repl/system)
