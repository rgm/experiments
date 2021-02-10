(ns react
  "Stubs React for the compiler so we can lean on an already-present CDN copy.")

(assert js/React)

(def Children js/React.Children)
(def Component js/React.Component)
(def Fragment js/React.Fragment)
(def createElement js/React.createElement)
