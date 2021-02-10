goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__37203){
var map__37204 = p__37203;
var map__37204__$1 = (((((!((map__37204 == null))))?(((((map__37204.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37204.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37204):map__37204);
var m = map__37204__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37204__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37204__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__4126__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return [(function (){var temp__5735__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__37206_37419 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__37207_37420 = null;
var count__37208_37421 = (0);
var i__37209_37422 = (0);
while(true){
if((i__37209_37422 < count__37208_37421)){
var f_37423 = chunk__37207_37420.cljs$core$IIndexed$_nth$arity$2(null,i__37209_37422);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_37423], 0));


var G__37424 = seq__37206_37419;
var G__37425 = chunk__37207_37420;
var G__37426 = count__37208_37421;
var G__37427 = (i__37209_37422 + (1));
seq__37206_37419 = G__37424;
chunk__37207_37420 = G__37425;
count__37208_37421 = G__37426;
i__37209_37422 = G__37427;
continue;
} else {
var temp__5735__auto___37428 = cljs.core.seq(seq__37206_37419);
if(temp__5735__auto___37428){
var seq__37206_37429__$1 = temp__5735__auto___37428;
if(cljs.core.chunked_seq_QMARK_(seq__37206_37429__$1)){
var c__4556__auto___37430 = cljs.core.chunk_first(seq__37206_37429__$1);
var G__37432 = cljs.core.chunk_rest(seq__37206_37429__$1);
var G__37433 = c__4556__auto___37430;
var G__37434 = cljs.core.count(c__4556__auto___37430);
var G__37435 = (0);
seq__37206_37419 = G__37432;
chunk__37207_37420 = G__37433;
count__37208_37421 = G__37434;
i__37209_37422 = G__37435;
continue;
} else {
var f_37436 = cljs.core.first(seq__37206_37429__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_37436], 0));


var G__37437 = cljs.core.next(seq__37206_37429__$1);
var G__37438 = null;
var G__37439 = (0);
var G__37440 = (0);
seq__37206_37419 = G__37437;
chunk__37207_37420 = G__37438;
count__37208_37421 = G__37439;
i__37209_37422 = G__37440;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_37441 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_37441], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_37441)))?cljs.core.second(arglists_37441):arglists_37441)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__37214_37442 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__37215_37443 = null;
var count__37216_37444 = (0);
var i__37217_37445 = (0);
while(true){
if((i__37217_37445 < count__37216_37444)){
var vec__37231_37446 = chunk__37215_37443.cljs$core$IIndexed$_nth$arity$2(null,i__37217_37445);
var name_37447 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37231_37446,(0),null);
var map__37234_37448 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37231_37446,(1),null);
var map__37234_37449__$1 = (((((!((map__37234_37448 == null))))?(((((map__37234_37448.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37234_37448.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37234_37448):map__37234_37448);
var doc_37450 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37234_37449__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_37451 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37234_37449__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_37447], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_37451], 0));

if(cljs.core.truth_(doc_37450)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_37450], 0));
} else {
}


var G__37452 = seq__37214_37442;
var G__37453 = chunk__37215_37443;
var G__37454 = count__37216_37444;
var G__37455 = (i__37217_37445 + (1));
seq__37214_37442 = G__37452;
chunk__37215_37443 = G__37453;
count__37216_37444 = G__37454;
i__37217_37445 = G__37455;
continue;
} else {
var temp__5735__auto___37456 = cljs.core.seq(seq__37214_37442);
if(temp__5735__auto___37456){
var seq__37214_37457__$1 = temp__5735__auto___37456;
if(cljs.core.chunked_seq_QMARK_(seq__37214_37457__$1)){
var c__4556__auto___37458 = cljs.core.chunk_first(seq__37214_37457__$1);
var G__37459 = cljs.core.chunk_rest(seq__37214_37457__$1);
var G__37460 = c__4556__auto___37458;
var G__37461 = cljs.core.count(c__4556__auto___37458);
var G__37462 = (0);
seq__37214_37442 = G__37459;
chunk__37215_37443 = G__37460;
count__37216_37444 = G__37461;
i__37217_37445 = G__37462;
continue;
} else {
var vec__37236_37463 = cljs.core.first(seq__37214_37457__$1);
var name_37464 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37236_37463,(0),null);
var map__37239_37465 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37236_37463,(1),null);
var map__37239_37466__$1 = (((((!((map__37239_37465 == null))))?(((((map__37239_37465.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37239_37465.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37239_37465):map__37239_37465);
var doc_37467 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37239_37466__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_37468 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37239_37466__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_37464], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_37468], 0));

if(cljs.core.truth_(doc_37467)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_37467], 0));
} else {
}


var G__37469 = cljs.core.next(seq__37214_37457__$1);
var G__37470 = null;
var G__37471 = (0);
var G__37472 = (0);
seq__37214_37442 = G__37469;
chunk__37215_37443 = G__37470;
count__37216_37444 = G__37471;
i__37217_37445 = G__37472;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5735__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5735__auto__)){
var fnspec = temp__5735__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__37241 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__37242 = null;
var count__37243 = (0);
var i__37244 = (0);
while(true){
if((i__37244 < count__37243)){
var role = chunk__37242.cljs$core$IIndexed$_nth$arity$2(null,i__37244);
var temp__5735__auto___37473__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___37473__$1)){
var spec_37474 = temp__5735__auto___37473__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_37474)], 0));
} else {
}


var G__37475 = seq__37241;
var G__37476 = chunk__37242;
var G__37477 = count__37243;
var G__37478 = (i__37244 + (1));
seq__37241 = G__37475;
chunk__37242 = G__37476;
count__37243 = G__37477;
i__37244 = G__37478;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq(seq__37241);
if(temp__5735__auto____$1){
var seq__37241__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__37241__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__37241__$1);
var G__37481 = cljs.core.chunk_rest(seq__37241__$1);
var G__37482 = c__4556__auto__;
var G__37483 = cljs.core.count(c__4556__auto__);
var G__37484 = (0);
seq__37241 = G__37481;
chunk__37242 = G__37482;
count__37243 = G__37483;
i__37244 = G__37484;
continue;
} else {
var role = cljs.core.first(seq__37241__$1);
var temp__5735__auto___37487__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___37487__$2)){
var spec_37488 = temp__5735__auto___37487__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_37488)], 0));
} else {
}


var G__37489 = cljs.core.next(seq__37241__$1);
var G__37490 = null;
var G__37491 = (0);
var G__37492 = (0);
seq__37241 = G__37489;
chunk__37242 = G__37490;
count__37243 = G__37491;
i__37244 = G__37492;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol(null,"ExceptionInfo","ExceptionInfo",294935087,null):(((t instanceof Error))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",t.name):null
))], null),(function (){var temp__5735__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5735__auto__)){
var msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5735__auto__)){
var ed = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__37497 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__37498 = cljs.core.ex_cause(t);
via = G__37497;
t = G__37498;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5735__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5735__auto__)){
var root_msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5735__auto__)){
var data = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5735__auto__)){
var phase = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__37252 = datafied_throwable;
var map__37252__$1 = (((((!((map__37252 == null))))?(((((map__37252.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37252.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37252):map__37252);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37252__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37252__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__37252__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__37253 = cljs.core.last(via);
var map__37253__$1 = (((((!((map__37253 == null))))?(((((map__37253.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37253.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37253):map__37253);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37253__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37253__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37253__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__37254 = data;
var map__37254__$1 = (((((!((map__37254 == null))))?(((((map__37254.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37254.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37254):map__37254);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37254__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37254__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37254__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__37255 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__37255__$1 = (((((!((map__37255 == null))))?(((((map__37255.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37255.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37255):map__37255);
var top_data = map__37255__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37255__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__37284 = phase;
var G__37284__$1 = (((G__37284 instanceof cljs.core.Keyword))?G__37284.fqn:null);
switch (G__37284__$1) {
case "read-source":
var map__37285 = data;
var map__37285__$1 = (((((!((map__37285 == null))))?(((((map__37285.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37285.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37285):map__37285);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37285__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37285__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__37292 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__37292__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37292,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__37292);
var G__37292__$2 = (cljs.core.truth_((function (){var fexpr__37302 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__37302.cljs$core$IFn$_invoke$arity$1 ? fexpr__37302.cljs$core$IFn$_invoke$arity$1(source) : fexpr__37302.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__37292__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__37292__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37292__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__37292__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__37303 = top_data;
var G__37303__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37303,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__37303);
var G__37303__$2 = (cljs.core.truth_((function (){var fexpr__37308 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__37308.cljs$core$IFn$_invoke$arity$1 ? fexpr__37308.cljs$core$IFn$_invoke$arity$1(source) : fexpr__37308.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__37303__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__37303__$1);
var G__37303__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37303__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__37303__$2);
var G__37303__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37303__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__37303__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37303__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__37303__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__37329 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37329,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37329,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37329,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37329,(3),null);
var G__37332 = top_data;
var G__37332__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37332,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__37332);
var G__37332__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37332__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__37332__$1);
var G__37332__$3 = (cljs.core.truth_((function (){var and__4115__auto__ = source__$1;
if(cljs.core.truth_(and__4115__auto__)){
return method;
} else {
return and__4115__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37332__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__37332__$2);
var G__37332__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37332__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__37332__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37332__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__37332__$4;
}

break;
case "execution":
var vec__37340 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37340,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37340,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37340,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37340,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__37251_SHARP_){
var or__4126__auto__ = (p1__37251_SHARP_ == null);
if(or__4126__auto__){
return or__4126__auto__;
} else {
var fexpr__37349 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__37349.cljs$core$IFn$_invoke$arity$1 ? fexpr__37349.cljs$core$IFn$_invoke$arity$1(p1__37251_SHARP_) : fexpr__37349.call(null,p1__37251_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4126__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return line;
}
})();
var G__37359 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__37359__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37359,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__37359);
var G__37359__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37359__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__37359__$1);
var G__37359__$3 = (cljs.core.truth_((function (){var or__4126__auto__ = fn;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var and__4115__auto__ = source__$1;
if(cljs.core.truth_(and__4115__auto__)){
return method;
} else {
return and__4115__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37359__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4126__auto__ = fn;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__37359__$2);
var G__37359__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37359__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__37359__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37359__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__37359__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__37284__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__37374){
var map__37375 = p__37374;
var map__37375__$1 = (((((!((map__37375 == null))))?(((((map__37375.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37375.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37375):map__37375);
var triage_data = map__37375__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37375__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37375__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37375__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37375__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37375__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37375__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37375__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37375__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4126__auto__ = source;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4126__auto__ = line;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__4126__auto__ = class$;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__37378 = phase;
var G__37378__$1 = (((G__37378 instanceof cljs.core.Keyword))?G__37378.fqn:null);
switch (G__37378__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__37380 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__37381 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__37382 = loc;
var G__37383 = (cljs.core.truth_(spec)?(function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__37384_37503 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__37385_37504 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__37386_37505 = true;
var _STAR_print_fn_STAR__temp_val__37387_37506 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__37386_37505);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__37387_37506);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__37368_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__37368_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__37385_37504);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__37384_37503);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__37380,G__37381,G__37382,G__37383) : format.call(null,G__37380,G__37381,G__37382,G__37383));

break;
case "macroexpansion":
var G__37388 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__37389 = cause_type;
var G__37390 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__37391 = loc;
var G__37392 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__37388,G__37389,G__37390,G__37391,G__37392) : format.call(null,G__37388,G__37389,G__37390,G__37391,G__37392));

break;
case "compile-syntax-check":
var G__37393 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__37394 = cause_type;
var G__37395 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__37396 = loc;
var G__37397 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__37393,G__37394,G__37395,G__37396,G__37397) : format.call(null,G__37393,G__37394,G__37395,G__37396,G__37397));

break;
case "compilation":
var G__37398 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__37399 = cause_type;
var G__37400 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__37401 = loc;
var G__37402 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__37398,G__37399,G__37400,G__37401,G__37402) : format.call(null,G__37398,G__37399,G__37400,G__37401,G__37402));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__37403 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__37404 = symbol;
var G__37405 = loc;
var G__37406 = (function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__37408_37507 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__37409_37508 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__37410_37509 = true;
var _STAR_print_fn_STAR__temp_val__37411_37510 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__37410_37509);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__37411_37510);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__37373_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__37373_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__37409_37508);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__37408_37507);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__37403,G__37404,G__37405,G__37406) : format.call(null,G__37403,G__37404,G__37405,G__37406));
} else {
var G__37412 = "Execution error%s at %s(%s).\n%s\n";
var G__37413 = cause_type;
var G__37414 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__37415 = loc;
var G__37416 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__37412,G__37413,G__37414,G__37415,G__37416) : format.call(null,G__37412,G__37413,G__37414,G__37415,G__37416));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__37378__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
