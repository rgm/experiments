(ns rgm.system
  (:require
   ; [juxt.aero]
   [juxt.clip.core :as clip]))

(defn system-config
  "Generate a system map"
  [profile]
  {:components
   {:system-profile {:start `(identity ~profile)}
    :route-tree     {:start `(rgm.http-server/route-tree (clip/ref :system-profile))}
    :ring-handler   {:start `(rgm.http-server/make-app (clip/ref :route-tree))}
    :http-server    {:start `(aleph.http/start-server (clip/ref :ring-handler) {:port 8080})}}})
