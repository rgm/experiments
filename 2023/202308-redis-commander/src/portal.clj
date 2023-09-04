(ns portal
  (:require
   [integrant.core :as ig]
   [portal.api :as p]))

(defonce *p nil)

(defn start-portal []
  (add-tap #'p/submit)
  (alter-var-root #'*p p/open)
  *p)

(defn stop-portal []
  (remove-tap #'p/submit)
  (p/close)
  (alter-var-root #'*p (constantly nil)))

(defmethod ig/init-key :user/portal [_ _] (start-portal))
(defmethod ig/halt-key! :user/portal [_ _] (stop-portal))

(comment
  ;; https://github.com/djblue/portal#api
  (start-portal)
  (stop-portal)
  (deref *p))
