(ns user
  (:require
   [circleci.rollcage.core :as rollcage]
   [clojure.core.async :as a]))

(def client
  (let [access-token (System/getenv "ROLLBAR_ACCESS_TOKEN")]
    (rollcage/client access-token {:environment "staging"})))

(rollcage/setup-uncaught-exception-handler client)

; (/ 0) ;; stops launch, but throws to rollbar properly

(comment
  (try (/ 0) (catch Exception e (rollcage/error client e)))

  (Thread/setDefaultUncaughtExceptionHandler
   (reify Thread$UncaughtExceptionHandler
      (uncaughtException [_ thread ex]
        (prn "WE GOT A THING" ex thread))))

  ;; NOPE, caught and reported by nrepl printer overriding the global uncaught
  ;; exception handler.
  (/ 0)

  ;; NOPE, caught by future and won't throw until deref
  ;; and ofc an nrepl-instigated deref will get caught by nrepl handler
  (def foo (future (/ 0)))
  (deref foo)

  ;; YEP!!, works in nrepl ... the thread'll be dead but we'll know about it.
  (def bar (a/thread (/ 0))))

