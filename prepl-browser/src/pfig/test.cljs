(ns pfig.test
  #_(:require
   [react]))

#_(.log js/console react/Component)

(js/console.log "WORKING")

(defn set-text
  [s]
  (let [id-selector "welcome-to-figwheels-default-dev-page"]
    (set! (.-innerHTML (js/document.getElementById id-selector)) s)))

(comment

 (set-text "whatup")

 (js/alert "hi")

 (+ 1 2)

 )
