// export React et al as globals for consumption
// by Closure as a foreign lib; see also dev.cljs.edn
// and https://clojurescript.org/guides/webpack
import React from "react";
import ReactDOM from "react-dom";
import ReactDOMServer from "react-dom/server";
var createReactClass = require('create-react-class');
window.React = React;
window.ReactDOM = ReactDOM;
window.ReactDOMServer = ReactDOMServer;
window.createReactClass = createReactClass;
import * as RTG from "react-transition-group";
window.RTG = RTG;

import * as SemanticUI from "semantic-ui-react";
window.SemanticUI = SemanticUI;

import L from "leaflet";
import leafletDraw from "leaflet-draw";
window.Leaflet = L;
window.LeafletDraw = leafletDraw;

import * as Vega from "vega-lib";
window.Vega = Vega;

// for re-frame 10x
import hljs from "highlight.js";
window.highlight = hljs;
window.HighlightLangsClojure= {};
import Highlight from "react-highlight.js"
window.Highlight = Highlight;
import FlipMove from "react-flip-move";
window.FlipMove = FlipMove;
