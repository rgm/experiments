;; # Inside-out
;;
;; playing with http://inside-out.matt.is

^{:nextjournal.clerk/visibility #{:hide-ns}}
(ns user
  (:require
   [inside-out.forms :as forms]
   [inside-out.reagent :refer [with-form]]
   [clojure.string :as str]
   ; [inside-out.clerk-ui :as ui :refer [cljs]]
   [nextjournal.clerk :as clerk]))

^{:nextjournal.clerk/visibility #{:hide}}
(comment
  (clerk/clear-cache!)
  (clerk/serve! {:browse? true :watch-paths ["src"]})
  (clerk/serve! {:watch-paths ["src"]})
  (clerk/show! "src/user.clj"))

(with-form [contact-info {:name ?name}]
  (reset! ?name "Peter Rabbit")
  @contact-info)

(with-form [form {:name ?name
                  :email ?email}
            :init {?name "Peter"}
            :required [?email ?name] ;; equivalent to :required {?email true ?name true}
            :meta {?email {:init "Rabbit"}}]
  (:required ?email))
