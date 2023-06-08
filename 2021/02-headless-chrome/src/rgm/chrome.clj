(ns rgm.chrome
  "Printable PDFs from js-manipulated HTML DOM.

   Sets up a print-friendly server-rendered HTML version of a page, and then
   feeds that URL to a headless Chrome instance for conversion to PDF. Except
   here we do it mostly in-process with just-in-time data streams instead of
   having to go eventually fetch the PDF from an S3 bucket."
  (:require [clj-chrome-devtools.automation      :as auto]
            [clj-chrome-devtools.commands.page   :as page]
            [clj-chrome-devtools.core            :as chrome]
            [clj-chrome-devtools.impl.connection :as chrome.conn]
            [clojure.java.io                     :as io]
            [clojure.test                        :as t :refer [deftest]]
            [com.stuartsierra.component          :as component]
            [taoensso.timbre                     :as timbre])
  (:import [java.util Base64]))

;; * component {{{1

(defn make-devtools-conn
  "Make a connection to a chrome devtools instance."
  [host port]
  (let [max-msg-size-bytes (* 1024 1024 256)
        ;; default 1mb ws-client size tends to be too small
        ;; things wedge if the page coming back is too big
        ws-client          (chrome.conn/make-ws-client
                            :max-msg-size-mb max-msg-size-bytes)
        timeout-ms         8000]
    (chrome/connect host port timeout-ms ws-client)))

(defrecord Chrome [host port]
  component/Lifecycle
  (start [this]
    (timbre/info "opening chrome ws conn on" (str host ":" port))
    (assoc this ::conn (make-devtools-conn host port)))
  (stop [this]
    (timbre/info "closing chrome ws conn")
    (.close (::conn this))))

(defn new-chrome [host port] (->Chrome host port))

(comment
  (def c (new-chrome "localhost" 9222))
  (component/start c)
  (component/stop c))

;; }}}

(defn- b64-decode
  "https://stackoverflow.com/a/39188819/53790"
  [to-decode]
  (.decode (Base64/getDecoder) to-decode))

(defn- get-pdf-data
  [conn url]
  (timbre/info "rendering" url)
  (let [a        (auto/create-automation conn)
        _        (auto/to a url) ;; waits for render
        params   {}
        response (page/print-to-pdf conn params)]
    (b64-decode (:data response))))

(defn render-pdf
  "Convert the URL to PDF via a chrome component. Accepts an output stream to
   smooth over piping it into ring handlers."
  [component url output-stream]
  (let [conn     (::conn component)
        pdf-data (get-pdf-data conn url)]
    (.write output-stream pdf-data)
    (.flush output-stream)))

(deftest test-rendering
  ;; remember, docker instance has to be able to see url
  (let [sample-url "http://host.docker.internal:4000/index.html"]
    (t/testing "raw connection"
      (let [msg-size (* 1024 1024 256)
            ws-client (chrome.conn/make-ws-client :max-msg-size-mb msg-size)
            c (chrome/connect "localhost" 9222 8000 ws-client)]
        (with-open [out (io/output-stream "testpage-raw-conn.pdf")]
          (.write out (get-pdf-data c sample-url)))))
    (t/testing "component connection"
      (let [chr (component/start (new-chrome "localhost" 9222))]
        (with-open [out (io/output-stream "testpage-component.pdf")]
          (render-pdf chr sample-url out))
        (component/stop chr)))))

(comment
  (def c (chrome/connect "localhost" 9222))
  (page/navigate c {:url "https://google.com"})
  (def response (page/print-to-pdf c {:page-ranges "1-1"}))
  (def pdf-data (b64-decode (:data response)))
  (with-open [out (io/output-stream "test.pdf")] (.write out pdf-data))
  (page/get-navigation-history c)
  (page/reload c))
