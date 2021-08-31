goog.provide('reagent.debug');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
(o.warn = (function() { 
var G__34916__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__34916 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__34918__i = 0, G__34918__a = new Array(arguments.length -  0);
while (G__34918__i < G__34918__a.length) {G__34918__a[G__34918__i] = arguments[G__34918__i + 0]; ++G__34918__i;}
  args = new cljs.core.IndexedSeq(G__34918__a,0,null);
} 
return G__34916__delegate.call(this,args);};
G__34916.cljs$lang$maxFixedArity = 0;
G__34916.cljs$lang$applyTo = (function (arglist__34920){
var args = cljs.core.seq(arglist__34920);
return G__34916__delegate(args);
});
G__34916.cljs$core$IFn$_invoke$arity$variadic = G__34916__delegate;
return G__34916;
})()
);

(o.error = (function() { 
var G__34921__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__34921 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__34922__i = 0, G__34922__a = new Array(arguments.length -  0);
while (G__34922__i < G__34922__a.length) {G__34922__a[G__34922__i] = arguments[G__34922__i + 0]; ++G__34922__i;}
  args = new cljs.core.IndexedSeq(G__34922__a,0,null);
} 
return G__34921__delegate.call(this,args);};
G__34921.cljs$lang$maxFixedArity = 0;
G__34921.cljs$lang$applyTo = (function (arglist__34923){
var args = cljs.core.seq(arglist__34923);
return G__34921__delegate(args);
});
G__34921.cljs$core$IFn$_invoke$arity$variadic = G__34921__delegate;
return G__34921;
})()
);

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
(reagent.debug.tracking = true);

cljs.core.reset_BANG_(reagent.debug.warnings,null);

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

var warns = cljs.core.deref(reagent.debug.warnings);
cljs.core.reset_BANG_(reagent.debug.warnings,null);

(reagent.debug.tracking = false);

return warns;
});

//# sourceMappingURL=reagent.debug.js.map
