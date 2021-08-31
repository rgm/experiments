goog.provide('rgm.app');
rgm.app.Vega_COLON_did_mount = (function rgm$app$Vega_COLON_did_mount(a_ref,this_component){
var props = reagent.core.props(this_component);
var vega_spec = cljs.core.clj__GT_js(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(props));
var runtime = vega.parse(vega_spec);
var view = (new vega.View(runtime)).initialize(a_ref).renderer("svg").hover();
view.logLevel(vega.Warn);

view.runAsync();

return view;
});
rgm.app.Vega_COLON_did_update = (function rgm$app$Vega_COLON_did_update(vega_view,this_component){
var props = reagent.core.props(this_component);
var map__27470 = props;
var map__27470__$1 = (((((!((map__27470 == null))))?(((((map__27470.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27470.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27470):map__27470);
var debug = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27470__$1,new cljs.core.Keyword(null,"debug","debug",-1608172596));
vega_view.runAsync();

var seq__27472 = cljs.core.seq(debug);
var chunk__27473 = null;
var count__27474 = (0);
var i__27475 = (0);
while(true){
if((i__27475 < count__27474)){
var dataset_name = chunk__27473.cljs$core$IIndexed$_nth$arity$2(null,i__27475);
console.debug(dataset_name,vega_view.data(dataset_name));


var G__27477 = seq__27472;
var G__27478 = chunk__27473;
var G__27479 = count__27474;
var G__27480 = (i__27475 + (1));
seq__27472 = G__27477;
chunk__27473 = G__27478;
count__27474 = G__27479;
i__27475 = G__27480;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__27472);
if(temp__5735__auto__){
var seq__27472__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__27472__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__27472__$1);
var G__27481 = cljs.core.chunk_rest(seq__27472__$1);
var G__27482 = c__4556__auto__;
var G__27483 = cljs.core.count(c__4556__auto__);
var G__27484 = (0);
seq__27472 = G__27481;
chunk__27473 = G__27482;
count__27474 = G__27483;
i__27475 = G__27484;
continue;
} else {
var dataset_name = cljs.core.first(seq__27472__$1);
console.debug(dataset_name,vega_view.data(dataset_name));


var G__27485 = cljs.core.next(seq__27472__$1);
var G__27486 = null;
var G__27487 = (0);
var G__27488 = (0);
seq__27472 = G__27485;
chunk__27473 = G__27486;
count__27474 = G__27487;
i__27475 = G__27488;
continue;
}
} else {
return null;
}
}
break;
}
});
rgm.app.VegaRenderer = (function rgm$app$VegaRenderer(_props){
var _STAR_a_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var _STAR_vega_view = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
return reagent.core.create_class.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),(function rgm$app$VegaRenderer_$_did_mount(this$){
var view = rgm.app.Vega_COLON_did_mount(cljs.core.deref(_STAR_a_ref),this$);
cljs.core.reset_BANG_(_STAR_vega_view,view);

return rgm.app.Vega_COLON_did_update(cljs.core.deref(_STAR_vega_view),this$);
}),new cljs.core.Keyword(null,"component-did-update","component-did-update",-1468549173),(function rgm$app$VegaRenderer_$_did_update(this$,_old_argv){
return rgm.app.Vega_COLON_did_update(cljs.core.deref(_STAR_vega_view),this$);
}),new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),(function rgm$app$VegaRenderer_$_render(_props__$1){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"w-full h-full",new cljs.core.Keyword(null,"ref","ref",1289896967),(function (p1__27476_SHARP_){
return cljs.core.reset_BANG_(_STAR_a_ref,p1__27476_SHARP_);
})], null)], null);
})], null));
});
rgm.app.Root = (function rgm$app$Root(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"text-red-500 mt-5"], null),"hi from within react with some styling"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"font-bold mt-10 mb-4"], null),"here is a vega graph generated through react"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"w-1/2 h-64 shadow p-3"], null),(function (){var vega_spec = rgm.vega.bar_chart(rgm.vega.bar_data);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rgm.app.VegaRenderer,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"spec","spec",347520401),vega_spec,new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["table"], null)], null)], null);
})()], null)], null);
});
rgm.app.stop = (function rgm$app$stop(){
return null;
});
rgm.app.start = (function rgm$app$start(){
var host_dom = document.getElementById("app");
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rgm.app.Root], null),host_dom);
});

//# sourceMappingURL=rgm.app.js.map
