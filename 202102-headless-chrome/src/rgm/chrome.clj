(ns rgm.chrome
  "Printable PDFs from js-manipulated HTML DOM.

   Sets up a print-friendly server-rendered HTML version of a page, and then
   feeds that URL to a headless Chrome instance for conversion to PDF. Except
   here we do it mostly in-process with just-in-time data streams instead of
   having to go eventually fetch the PDF from an S3 bucket."
  (:require
   [clj-chrome-devtools.automation      :as auto]
   [clj-chrome-devtools.commands.page   :as page]
   [clj-chrome-devtools.core            :as chrome]
   [clj-chrome-devtools.impl.connection :as chrome.conn]
   [clojure.java.io                     :as io]
   [com.stuartsierra.component          :as component]
   [taoensso.timbre                     :as timbre])
  (:import
   [java.util Base64]
   [java.io PipedInputStream PipedOutputStream]))

;; * component {{{1

(defrecord Chrome [host port]
  component/Lifecycle
  (start [this]
    (timbre/info "opening chrome ws conn on" (str host ":" port))
    (let [max-msg-size-bytes (* 1024 1024 256)
          ws-client          (chrome.conn/make-ws-client
                              :max-msg-size-mb max-msg-size-bytes)
          timeout-ms         1000
          conn               (chrome/connect host port timeout-ms ws-client)]
      (assoc this ::conn conn)))
  (stop [this]
    (timbre/info "closing chrome ws conn")
    (.close (::conn this))))

(defn new-chrome [host port] (->Chrome host port))

;; }}}

(defn- b64-decode
  "https://stackoverflow.com/a/39188819/53790"
  [to-decode]
  (.decode (Base64/getDecoder) to-decode))

(defn- piped-input-stream
  "Create an input stream from a function that takes an output stream as its
  argument. The function will be executed in a separate thread. The stream
  will be automatically closed after the function finishes.

  For example:

    (piped-input-stream (fn [ostream] (spit ostream \"Hello\")))"
  {:added "1.1"}
  [func]
  (let [input  (PipedInputStream.)
        output (PipedOutputStream.)]
    (.connect input output)
    (future
      (try
        (func output)
        (catch Exception e
          (timbre/error e))
        (finally (.close output))))
    input))

(defn render-pdf
  "Convert the URL to PDF. Accepts an output stream to smooth over piping it
   into ring handlers."
  [chrome url output-stream]
  (let [conn     (::conn chrome)
        a        (auto/create-automation conn)
        _        (auto/to a url) ;; waits for render
        params   {} #_{:page-ranges "1"}
        resp     (page/print-to-pdf conn params)
        pdf-data (b64-decode (:data resp))]
    (.write output-stream pdf-data)
    (.flush output-stream)))

(comment
  (def sample-url "https://github.com")
  (def sample-url "https://nytimes.com")
  (def ws-client (chrome.conn/make-ws-client :max-msg-size-mb (* 1024 1024 256)))
  (def c (chrome/connect "localhost" 9222 1000 ws-client))

  (def chr (component/start (new-chrome "localhost" 9222)))
  (component/stop chr)

  (with-open [out (io/output-stream "test2.pdf")]
    (render-pdf chr sample-url out))

  (page/navigate c {:url sample-url})

  (def resp (page/print-to-pdf c {:page-ranges "1-1"}))
  (def pdf-data (b64-decode (:data resp)))
  (with-open [out (io/output-stream "test.pdf")] (.write out pdf-data))

  (page/get-navigation-history c)
  (page/reload c)

  (piped-input-stream (partial render-pdf c sample-url))

  )
