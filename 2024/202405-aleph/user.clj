(ns user
  "Trying to suppress the Server: header.

   https://github.com/clj-commons/aleph/issues/512#issuecomment-695972882"
  (:require
   [aleph.http]
   [clojure.test :as t :refer [deftest is]])
  (:import
   (io.netty.channel ChannelOutboundHandlerAdapter ChannelPipeline)
   (io.netty.handler.codec.http HttpResponse)))

(def HANDLER (constantly {:status 200}))

(def SCRUBBER
  (proxy [ChannelOutboundHandlerAdapter] []
    (write [ctx msg chan-promise]
      (prn "running write method")
      (when (instance? HttpResponse msg)
        (prn "removing header")
        (.remove (.headers msg) "Server"))
      (proxy-super ctx msg chan-promise))))

(def XF (fn [^ChannelPipeline pipeline]
          (prn "transforming pipeline")
          (doto pipeline
            (.addLast "scrubber" SCRUBBER))))

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
  (deref (aleph.http/get ENDPOINT))
  (.close ^java.io.Closeable server))
