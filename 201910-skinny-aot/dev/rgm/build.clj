(ns rgm.build
  (:require
   [mach.pack.alpha.skinny]
   [badigeon.bundle :refer [bundle make-out-path]]
   [badigeon.clean]
   [badigeon.compile :as c]
   [badigeon.jar]
   [badigeon.pom]
   ))

(defn -main
  []
  (prn "foo"))

(comment

 (compile 'rgm.core)

 (badigeon.clean/clean "target")

 (bundle (make-out-path 'lib "1.0.0"))
 (c/compile 'rgm.core {:compile-path "target/classes"})

 (badigeon.bundle/bin-script "." 'rgm.core)

 (spit "test-manifest.txt" (badigeon.jar/make-manifest 'rgm.core {"Built-By" "ryan@ryanmccuaig.net"}))

 (badigeon.pom/sync-pom 'rgm.foo)


 (badigeon.jar/jar 'rgm.foo
                   {:mvn/version "1.0.1.rc1"}
                   {:paths ["targets/classes"]
                    :mvn/repos '{"clojars" {:url "https://repo.clojars.org/"}}
                    :manifest {"Built-By" "ryan@ryanmccuaig.net"}
                    :allow-all-dependencies? true
                    :main 'rgm.core})

 (-main))
