goog.provide('rgm.core');
var module$node_modules$$visx$shape$lib$index=shadow.js.require("module$node_modules$$visx$shape$lib$index", {});
var module$node_modules$$visx$group$lib$index=shadow.js.require("module$node_modules$$visx$group$lib$index", {});
var module$node_modules$react$index=shadow.js.require("module$node_modules$react$index", {});
var module$node_modules$react_dom$index=shadow.js.require("module$node_modules$react_dom$index", {});

rgm.core.MyComponent = (function (){var G__29654 = (function rgm$core$MyComponent(props__27554__auto__,maybe_ref__27555__auto__){
var vec__29655 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27554__auto__),maybe_ref__27555__auto__], null);
var map__29658 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29655,(0),null);
var map__29658__$1 = (((((!((map__29658 == null))))?(((((map__29658.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29658.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29658):map__29658);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29658__$1,new cljs.core.Keyword(null,"name","name",1843675177));

return helix.core.get_react().createElement("div",null,"hi ",name);
});
if(goog.DEBUG === true){
var G__29660 = G__29654;
goog.object.set(G__29660,"displayName","rgm.core/MyComponent");

return G__29660;
} else {
return G__29654;
}
})();




rgm.core.BarComponent = (function (){var G__29663 = (function rgm$core$BarComponent(props__27554__auto__,maybe_ref__27555__auto__){
var vec__29664 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27554__auto__),maybe_ref__27555__auto__], null);

return helix.core.get_react().createElement("svg",(function (){var obj29668 = ({"width":(100),"height":(100)});
return obj29668;
})(),module$node_modules$$visx$group$lib$index.Group(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"top","top",-1856271961),(10),new cljs.core.Keyword(null,"left","left",-399115937),(5)], null)));
});
if(goog.DEBUG === true){
var G__29669 = G__29663;
goog.object.set(G__29669,"displayName","rgm.core/BarComponent");

return G__29669;
} else {
return G__29663;
}
})();




rgm.core.Root = (function (){var G__29672 = (function rgm$core$Root(props__27554__auto__,maybe_ref__27555__auto__){
var vec__29673 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27554__auto__),maybe_ref__27555__auto__], null);

return helix.core.get_react().createElement(rgm.core.BarComponent,null);
});
if(goog.DEBUG === true){
var G__29676 = G__29672;
goog.object.set(G__29676,"displayName","rgm.core/Root");

return G__29676;
} else {
return G__29672;
}
})();



rgm.core.start = (function rgm$core$start(){
return module$node_modules$react_dom$index.render(helix.core.get_react().createElement(rgm.core.Root,null),document.getElementById("app"));
});
goog.exportSymbol('rgm.core.start', rgm.core.start);

//# sourceMappingURL=rgm.core.js.map
