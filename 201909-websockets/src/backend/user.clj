(ns user
  (:require
   [clojure.tools.namespace.repl :as tns]
   [figwheel.main.api]
   [integrant.core :as ig]
   [integrant.repl :refer [go halt reset clear prep reset-all]]
   [rgm.core]
   [rgm.nrepl]
   [taoensso.timbre :as timbre]))

;;; vim + fireplace.vim
;;; :Piggieback (figwheel.main.api/repl-env "dev")

(timbre/set-level! :debug)

;; ignore cljs ... see https://lambdaisland.com/blog/2018-02-09-reloading-woes
(tns/set-refresh-dirs "src/backend")

(defmethod ig/init-key :rgm/figwheel
  [_ {:keys [build-id]}]
  (timbre/info (str "starting figwheel with build-id \"" build-id "\""))
  (figwheel.main.api/start {:mode :serve} build-id)
  #(try
     ;; make idempotent for integrant
     (figwheel.main.api/stop build-id)
     (catch Exception _e (timbre/debug "figwheel is already stopped"))))

(defmethod ig/halt-key! :rgm/figwheel
  [_ halt-fn]
  (timbre/info "stopping figwheel")
  (halt-fn))

(defn make-ig-dev-system
  []
  {:rgm/figwheel {:build-id "dev"}
   :rgm.core/channel-socket {}
   :rgm.core/handler {:channel-socket (ig/ref :rgm.core/channel-socket)}
   :rgm.core/http-server {:port 8000 :handler (ig/ref :rgm.core/handler)}})

(integrant.repl/set-prep! make-ig-dev-system)

(defn cljs-repl
  ([]
   (cljs-repl "dev"))
  ([build-id]
   (figwheel.main.api/cljs-repl build-id)))

(defn repl-env
  ([]
   (repl-env "dev"))
  ([build-id]
   (figwheel.main.api/repl-env build-id)))

;; start nrepl outside of integrant/repl; we never want to re-start it
(ig/init-key :rgm/nrepl {})

(println "[dev] evaluate (go) to start integrant")
(println "[dev] evaluate (halt) to stop integrant")
(println "[dev] evaluate (reset) to reload changed namespaces and re-start integrant")

(comment
 (require 'integrant.repl.state)
 (prn integrant.repl.state/system)
 (require 'cognitect.rebl)
 (cognitect.rebl/ui)
 )
