(ns rgm.kaocha-hooks
  "See https://github.com/plexus/cljs-test-example/blob/main/shadow-browser-kaocha-cljs2/src/io/github/plexus/cljs_test_example/kaocha_hooks.clj"
  (:require
   [clojure.java.browse                 :as browse]
   [clojure.java.shell                  :as sh]
   [etaoin.api                          :as e]
   [shadow.cljs.devtools.api            :as shadow-api]
   [shadow.cljs.devtools.server         :as shadow-server]
   [shadow.cljs.devtools.server.runtime :as shadow-runtime]
   [kaocha.cljs2.funnel-client          :as funnel]
   [taoensso.timbre                     :as timbre]))

(defn spawn
  "Start a process, connecting its stdout/stderr to the parent so we see what's
  going on. Returns the Process object so you can call .pid, .destroy,
  .destroyForcibly."
  [args opts]
  (let [builder (doto (ProcessBuilder. args)
                  (.inheritIO))
        environment (.environment builder)]
    (when-let [env (:env opts)]
      (doseq [[k v] env]
        (.put environment k v)))
    (.start builder)))

(defn ensure-funnel! []
  ;; If funnel is already running then this is a no-op
  (timbre/info "ensuring funnel running")
  (sh/sh "script/funnel" "-vv" "--daemonize"))

(defn ensure-shadow-instance! []
  (when (nil? @shadow-runtime/instance-ref)
    (timbre/info "starting shadow server")
    (shadow-server/start!)
    (loop []
      (Thread/sleep 250)
      (when (nil? @shadow-runtime/instance-ref)
        (recur)))))

(defn shadow-dev-build! [testable]
  (shadow-api/compile (:shadow/build testable)))

(defn pre-load [testable _config]
  (ensure-funnel!)
  (ensure-shadow-instance!)
  (shadow-dev-build! testable)
  ;; Always return the first argument from Kaocha hooks
  testable)

(defn launch-real-browser-and-wait
  [{:funnel/keys [conn] :kaocha.cljs2/keys [timeout]}]
  ;; Both these calls ask Funnel if it has any clients that look like they are
  ;; the ones we would want to talk to, in particular it sends this query to Funnel:
  ;;
  ;; {:lambdaisland.chui.remote? true
  ;;  :working-directory (.getAbsolutePath (io/file ""))}
  ;;
  ;; Remember that Funnel is fully symmetrical, Kaocha-cljs2 (JVM) is just
  ;; another client, as are Chui-remote (JS) clients. We only want chui-remote
  ;; clients, and in particular we want ones which CLJS build was triggered in
  ;; the same project directory that we are in, so we don't accidentally connect
  ;; to another project's browser tab.
  (when (empty? (funnel/list-clients conn))
    (timbre/info "launching chui in browser")
    (browse/browse-url "http://127.0.0.1:1818"))
  (funnel/wait-for-clients conn (when timeout {:timeout timeout})))

(def driver nil)

(defn launch-headless-browser-and-wait
  [{:funnel/keys [conn] :kaocha.cljs2/keys [timeout]}]
  (when (empty? (funnel/list-clients conn))
    (timbre/info "launching headless firefox instance")
    (alter-var-root #'driver (constantly (e/firefox {:headless true})))
    (e/go driver "http://127.0.0.1:1818"))
  (funnel/wait-for-clients conn (when timeout {:timeout timeout})))
