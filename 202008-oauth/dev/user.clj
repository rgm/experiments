(ns user
  (:require
   [juxt.clip.repl :refer [start stop reset set-init! system]]
   [rgm.core]))

(set-init! #(rgm.core/system-config))

(comment
  (start)
  (stop)
  (reset)
  (.stop (:http system)))

;; [ ] redirect to login when no session
;; [ ] set up buddy?
