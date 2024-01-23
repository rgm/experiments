(ns portal
  (:require
   [portal.api :as p]))

(defn start-portal []
  (add-tap #'p/submit)
  (p/open {:app false}))

(defn stop-portal [*p]
  (remove-tap #'p/submit)
  (p/close *p))

(comment
  (def *p (start-portal))
  (stop-portal *p))

