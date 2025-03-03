(ns user
  (:require
   [clojure.string :as str]
   [vault.client :as vault]
   [vault.secret.kv.v2 :as kv]
   [vault.auth.token :as tok]
   [vault.util :as u]))

(defonce client nil)

(defn vault-addr [] (System/getenv "VAULT_ADDR"))

(defn read-token []
  (str/trim (slurp "CLIENT_TOKEN.txt")))

(defn read-auth []
  ;; we don't get renewal behaviour unless we supply renewable true
  ;; and an expiry instant
  ;; OR ... call vault.auth.token/resolve-auth! after authenticating with a
  ;; string token, should look this info up correctly on the token with a vault
  ;; call
  {:vault.auth/token (read-token)
   :vault.auth/renewable? true
   :vault.auth/expires-at (.plusSeconds (java.time.Instant/now) 60)})

(defn start []
  (let [make-client (constantly (vault/new-client (vault-addr)))]
    (alter-var-root #'client (comp vault/start make-client))
    (vault/authenticate! client (read-token) #_ (read-auth))
    ; ↓ enables the renewal behaviour by mutating the :auth key
    (tok/resolve-auth! client)))

(comment
  (start)
  (kv/list-secrets client "test_path")
  (u/unveil (:auth client))

  (do
   (def root-client (-> (vault-addr) vault/new-client vault/start))
   (vault/authenticate! root-client "my_root_token")
   ;; should never see this stream of #s dip below 45-50s remaining TTL
   (dotimes [_i 60]
     (Thread/sleep 1000)
     (-> root-client
         (tok/lookup-token {:token (:vault.auth/token (read-auth))})
         :ttl
         prn)))

  (tok/renew-token! root-client {:token (:vault.auth/token (read-auth))})

  (vault/stop root-client)
  (vault/stop client))
