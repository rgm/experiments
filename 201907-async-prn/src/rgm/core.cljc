(ns rgm.core
  (:require [clojure.core.async :as a]))

(def c (a/chan))

(def consumer
  (a/go-loop
   [a 0]
   (let [b (a/<! c)]
     ; (prn "in loop" a b)  ;; gets swallowed by nrepl
     (tap> ["in loop" a b]) ;; will print in repl console
     (recur b))))

(add-tap prn)

(comment
 (remove-tap prn)
 (a/put! c 5)
 (a/put! c 6)

 (let [c (a/chan 2)]
   @(future (dotimes [x 2]
             (a/>!! c x))
           (a/close! c)
           (println "closed"))
   (future (loop []
             (when-some [v (a/<!! c)]
               (println "got " v)
               (recur)
               ))
           (println "exiting")))

 ()

 )
