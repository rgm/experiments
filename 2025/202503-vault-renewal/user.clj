(ns user
  (:require
   [vault.client :as vault]
   [vault.secret.kv.v2 :as kv]
   [vault.auth.token :as tok]))

(defonce client nil)

(defn vault-addr [] (System/getenv "VAULT_ADDR"))

(defn read-token [] (slurp "CLIENT_TOKEN.txt"))

(defn start []
  (let [make-client (constantly (vault/new-client (vault-addr)))]
    (alter-var-root #'client (comp vault/start make-client))
    (vault/authenticate! client (read-token))))

(comment
  (start)
  (kv/list-secrets client "test_path")

  (def root-client (vault/new-client (vault-addr)))
  (alter-var-root #'root-client vault/start)
  (vault/authenticate! root-client "my_root_token")

  (tok/lookup-token root-client {:token (read-token)})
  (tok/renew-token! client {:token (read-token)}))
