(ns rgm.core
  (:require
   [clojure.core.server :as prepl]
   [figwheel.main.api :as fig]
   [reagent.core :as reagent]
   [re-frame.core :as re-frame]
   [tilakone.core :as tk]))

(def states
  [#::tk{:name "initial"}])

(defn fsm
  []
  )
