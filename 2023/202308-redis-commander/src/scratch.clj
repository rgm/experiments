(ns scratch
  (:require
   [clojure.core.async :as a]
   [clojure.test :as t :refer [deftest is testing]]
   [integrant.repl :refer [halt reset]]
   [integrant.repl.state :as irs]
   [portal]
   [taoensso.timbre :as timbre]
   [user :as cmdr]))

(comment
  ;; https://stackoverflow.com/a/27056185
  (alter-var-root #'*out* (constantly *out*))
  (try (cmdr/go) (catch Exception ex (print (ex-data ex))))
  (timbre/set-min-level! :warn)
  (timbre/set-min-level! :trace)
  (halt)
  (try (reset) (catch Exception ex (tap> (ex-data ex))))
  (do
   #_(.addShutdownHook
      (Runtime/getRuntime)
      (Thread. #(do (timbre/info "stopping system")
                    (integrant.repl/halt))))
   (cmdr/go)
   (def redis (:user/redis irs/system))
   (def ledger (:user/ledger irs/system)))

  (cmdr/delivering? ledger)
  (cmdr/start-delivering! ledger)
  (cmdr/stop-delivering! ledger) ;; ugh, bug in this logic

  ;; use futures or you'll block your repl
  (future (tap> (cmdr/read-events redis (:stream ledger) 1 300 "$")))
  (future (tap> (a/<!! (:chan ledger))))

  ;; make sure system is started first
  (deftest overall-test
    (testing "should increment"
      (let [c1 (-> irs/system :user/state deref :counter)
            _ (cmdr/increment-counter! ledger "authorized-user")
            *c2 (delay (-> irs/system :user/state deref :counter))]
        (Thread/sleep 300)
        (is (= @*c2 (inc c1)))))

    (testing "should not increment"
      (let [c1 (-> irs/system :user/state deref :counter)
            _ (cmdr/increment-counter! ledger "unauthorized-user")
            *c2 (delay (-> irs/system :user/state deref :counter))]
        (Thread/sleep 300)
        (is (= @*c2 c1)))))

  (filter cmdr/cmd-evt? (cmdr/get-all-evts ledger))

  (count (cmdr/list-commands ledger "1693828597281-0"))
  (last (cmdr/get-all-evts ledger))

  (do
   ;; exercise the system
   (cmdr/increment-counter! ledger "authorized-user")
   (Thread/sleep 500)
   (last (cmdr/list-commands ledger)))

  (-> irs/system :user/state deref))
