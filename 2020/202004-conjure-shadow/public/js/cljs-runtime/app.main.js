goog.provide('app.main');
goog.require('cljs.core');
goog.require('reagent.dom');
goog.require('reagent.core');
if((typeof app !== 'undefined') && (typeof app.main !== 'undefined') && (typeof app.main._STAR_state !== 'undefined')){
} else {
app.main._STAR_state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"greeting","greeting",462222107),"hi"], null));
}
app.main.Layout = (function app$main$Layout(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),new cljs.core.Keyword(null,"greeting","greeting",462222107).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.main._STAR_state))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"even more stuff"], null)], null);
});
app.main.boot = (function app$main$boot(){
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.main.Layout], null),document.getElementById("app"));
});
app.main.init = (function app$main$init(){
return app.main.boot();
});
goog.exportSymbol('app.main.init', app.main.init);

//# sourceMappingURL=app.main.js.map
