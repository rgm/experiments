(defproject skinny-jar "1.0.0.rc1"
  :dependencies [[org.clojure/clojure "1.10.1"]
                 [com.taoensso/timbre "4.10.0" ]]

  :jar-name "skinny-lein.jar"
  :source-paths ["src"]
  :aot :all
  :omit-source true
  :clean-targets ^{:protect false} ["target"]
  :main rgm.core)
