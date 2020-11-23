(ns rgm.core
  (:require
   [clj-chrome-devtools.automation      :as auto]
   [clj-chrome-devtools.commands.page   :as page]
   [clj-chrome-devtools.core            :as chrome]
   [clj-chrome-devtools.impl.connection :as chrome.conn]
   [clojure.java.io                     :as io]
   #_[clj-chrome-devtools.commands.dom  :as dom])
  (:import
   [java.util Base64]))

(defn b64-decode
  "https://stackoverflow.com/a/39188819/53790"
  [to-decode]
  (.decode (Base64/getDecoder) to-decode))

(comment
  (def ws-client (chrome.conn/make-ws-client :max-msg-size-mb (* 1024 1024 256)))
  (def c (chrome/connect "localhost" 9222 1000 ws-client))

  (page/navigate c {:url "https://github.com"})
  (def resp (page/print-to-pdf c {:page-ranges "1-3"}))
  (def pdf-data (b64-decode (:data resp)))
  (with-open [out (io/output-stream "github.pdf")]
    (.write out pdf-data)))

(defn -main
  []
  (let [ws-client (chrome.conn/make-ws-client :max-msg-size-mb (* 1024 1024 256))
        c         (chrome/connect "localhost" 9222 1000 ws-client)
        a         (auto/create-automation c)
        _         (auto/to a "https://github.com")
        resp      (page/print-to-pdf c {:page-ranges "1-2"})
        pdf-data  (b64-decode (:data resp))]
    (with-open [out (io/output-stream "github-test.pdf")]
      (.write out pdf-data))
    (System/exit 0)))
