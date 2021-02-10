(ns user
  (:require [schism.core :as sc]))

(def initial-items (sc/with-node "server" (apply sc/convergent-set #{:a :b :c})))

(def *copy-a (atom initial-items))
(def *copy-b (atom initial-items))

(comment
  (deref *copy-a)
  (deref *copy-b)
  (sc/with-node "bar" (swap! *copy-b disj :a))
  (sc/with-node "foo" (swap! *copy-a disj :b))
  (pr-str @*copy-a)
  (pr-str @*copy-b)
  (sc/with-node "client-A" (sc/converge @*copy-a @*copy-b))
  (sc/with-node "client-B" (sc/converge @*copy-b @*copy-a))
  (sc/convergent-set :a :b :c :d)

  (sc/initialize-node! "client-A")


  )
