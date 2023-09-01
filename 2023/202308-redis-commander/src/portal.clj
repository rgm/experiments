(ns portal
  (:require
   [portal.api :as p]))

(defonce *p nil)

(defn start-portal []
  (add-tap #'p/submit)
  (alter-var-root #'*p p/open))

(defn stop-portal []
  (remove-tap #'p/submit)
  (p/close)
  (alter-var-root #'*p (constantly nil)))

(comment
  ;; https://github.com/djblue/portal#api
  (start-portal)
  (stop-portal)
  (deref *p))
