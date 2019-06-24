(ns make-jar
  (:require [badigeon.jar :as jar]))

;; see https://github.com/EwenG/badigeon/blob/master/sample/badigeon/sample.clj

(def project-symbol 'rgm/reframe-template)

(def file-prefix "reframe-template")

(defn -main
  [version]
  (jar/jar project-symbol
           {:mvn/version version}
           {:out-path (str "target/" file-prefix "-" version ".jar")
            :main 'sample.backend-main
            :paths ["resources" "src/backend" "src/common" "target/classes"]}))
