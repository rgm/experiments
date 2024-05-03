(ns user
  "Trying to suppress the Server: header.

   https://github.com/clj-commons/aleph/issues/512#issuecomment-695972882"
  (:require
   [aleph.http]
   [aleph.netty]
   [clojure.test :as t :refer [deftest is]])
  (:import
   (io.netty.channel ChannelOutboundHandlerAdapter ChannelPipeline)
   (io.netty.handler.codec.http HttpResponse)))

(def HANDLER (constantly {:status 200}))

(defn make-scrubber []
  (proxy [ChannelOutboundHandlerAdapter] []
    (write [ctx msg chan-promise]
      (println "--- RUNNING WRITE METHOD")
      (prn "-- ctx:" ctx)
      (prn "-- msg:" msg)
      (prn "-- chan-promise: " chan-promise)
      (when (instance? HttpResponse msg)
        (prn "removing header")
        (.remove (.headers msg) "Server"))
      (proxy-super write ctx msg chan-promise))))

(defn make-scrubber-2 []
  ;; thx @oyakushev
  ;; https://clojurians.slack.com/archives/C0G922PCH/p1714776636228319?thread_ts=1714774471.146039&cid=C0G922PCH

  ;; don't just instantiate one of these with def and pass it on; you seem to
  ;; need to hand over a new one fairly often, hence the defn
  (aleph.netty/channel-outbound-handler
   :write ([_ ctx msg chan-promise]
           (prn "running write method")
           (println "--- RUNNING WRITE METHOD")
           (prn "-- ctx:" ctx)
           (prn "-- msg:" msg)
           (prn "-- chan-promise: " chan-promise)
           (when (instance? HttpResponse msg)
             (prn "removing header")
             (.remove (.headers msg) "Server"))
           (.write ctx msg chan-promise))))

(def XF (fn [^ChannelPipeline pipeline]
          (println "--- TRANSFORMING PIPELINE")
          (prn "before" (.names pipeline))
          (doto pipeline
            ;; couldn't tell you why it needs to be here but it does ¯\_(ツ)_/¯
            ;; .addFirst, .addLast, etc. don't work
            (.addBefore "request-handler" "scrubber" (make-scrubber-2)))
          (prn "after" (.names pipeline))))

(def OPTS {:port 9999 :pipeline-transform XF})

(def ENDPOINT (format "http://localhost:%s" (:port OPTS)))

(def ^:dynamic *server* nil)

(defn start-and-stop-server [tests]
  (binding [*server* (aleph.http/start-server HANDLER OPTS)]
    (try (tests)
      (finally (.close ^java.io.Closeable *server*)))))

(t/use-fixtures :each start-and-stop-server)

(deftest header-was-removed-test
  (let [*res (aleph.http/get ENDPOINT)
        ?server-header (get-in @*res [:headers "server"])]
    (is (nil? ?server-header))))

(comment
  (def server (aleph.http/start-server HANDLER OPTS))
  (get @(aleph.http/get ENDPOINT) :headers)
  (.close ^java.io.Closeable server))
