(ns day-19-1
  (:require
   [clojure.java.io :as io]
   [clojure.string :as str]
   [clojure.test :as t :refer [deftest is]]
   [instaparse.core :as ic]
   [instaparse.transform :as it]
   [taoensso.tufte :as tufte :refer [defnp p]]))

;; DRAMATIS PERSONAE
;; xn .... an fsm transition
;; xf .... a transform
;; m ..... a part rating

(defn make-guard-predicate
  [k op int]
  ;; do a code-as-data thing so we can examine in the pipeline; otherwise
  ;; anonymous fns are opaque and poor for debugging
  (let [sexp (list 'fn '[m] (list 'p ::guard
                                  (if (= op '<)
                                    ;; swap so always <
                                    (list '< (list k 'm) int)
                                    (list '< int (list k 'm)))))
        f (eval sexp)]
    ;; stash source in meta so it's examinable
    (with-meta f {::guard-source sexp})))

(def parse-transitions
  (let [grammar "workflow       = state transitions
                 transitions    = <'{'> transition (<','> transition)* <'}'>
                 <transition>   = guarded-xn | unguarded-xn
                 guarded-xn     = (guard <':'> state)
                 unguarded-xn   = state
                 guard          = k op int
                 state          = #'[a-z]+' | 'A' | 'R'
                 k              = #'[a-z]+'
                 op             = '<' | '>'
                 int            = #'\\d+'"
        xfs {:int          parse-long
             :op           symbol
             :k            keyword
             :state        keyword
             :unguarded-xn (fn [k] {:to k})
             :guard        make-guard-predicate
             :guarded-xn   (fn [guard k] {:guard guard :to k})
             :transitions  vector
             :workflow     vector}]
    (comp (partial it/transform xfs)
          (ic/parser grammar))))

(def parse-rating
  (let [grammar "rating = <'{'> entry (<','> entry)* <'}'>
                 entry  = k <'='> n
                 k      = #'[a-z]+'
                 n      = #'\\d+'"
        xfs {:n      parse-long
             :k      keyword
             :entry  vector
             :rating (fn [& kns] (into {} kns))}]
    (comp (partial it/transform xfs)
          (ic/parser grammar))))

(defnp read-input [path]
  (with-open [r (io/reader path)]
    (let [[raw-xns _ raw-ratings] (doall (partition-by str/blank? (line-seq r)))]
      {:xns (into {} (map parse-transitions) raw-xns)
       :ms (map parse-rating raw-ratings)})))

(defnp pick-transition
  "Find first transition in ordered transitions xns where the guard on m
   passes."
  [xns m]
  (reduce (fn [_ {guard :guard :or {guard (constantly true)} :as xn}]
            (let [use? (guard m)]
              #_(prn (-> guard meta ::guard-source) use? to)
              (when use? (reduced xn))))
          nil
          xns))

(defnp step-fsm [fsm]
  (let [m (:m fsm)
        state (:state fsm)
        xns (get-in fsm [:xns state])
        xn (pick-transition xns m)
        next-state (:to xn)]
    (assoc fsm :state next-state)))

(defn run-fsm
  "Keep following transitions state until we hit an :A or an :R."
  [terminal? fsm]
  (let [fsm' (step-fsm fsm)]
    (if (terminal? (:state fsm')) fsm' (recur terminal? fsm'))))

(defnp part-1 [{:keys [xns ms]}]
  (let [fsm {:state :in :xns xns}
        xf (comp
            (map (fn [m] (assoc fsm :m m)))
            (map (fn [fsm] (run-fsm #{:A :R} fsm)))
            (filter (fn [fsm] (= :A (:state fsm))))
            (map :m)
            (mapcat vals))]
    (transduce xf + ms)))

(deftest test-part-1 (is (= 19114 (part-1 (read-input "test.txt")))))

(comment
  (tufte/add-basic-println-handler! {})
  (tufte/profile {} (time (part-1 (read-input "test.txt"))))
  (tufte/profile {} (time (part-1 (read-input "input.txt"))))) ; 330820
