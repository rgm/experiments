// export React et al as globals for consumption
// by Closure as a foreign lib; see also dev.cljs.edn
// and https://clojurescript.org/guides/webpack
import React from "react";
import ReactDOM from "react-dom";
var createReactClass = require('create-react-class');
window.React = React;
window.ReactDOM = ReactDOM;
window.createReactClass = createReactClass;
