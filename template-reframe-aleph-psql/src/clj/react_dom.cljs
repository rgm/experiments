(ns react-dom
  "Stubs ReactDOM for the compiler so we can lean on an already-present CDN copy.")

(assert js/ReactDOM)

(def findDOMNode js/ReactDOM.findDOMNode)
(def render js/ReactDOM.render)
(def unmountComponentAtNode js/ReactDOM.unmountComponentAtNode)
