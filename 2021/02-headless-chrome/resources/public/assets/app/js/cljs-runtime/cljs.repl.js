goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__36714){
var map__36715 = p__36714;
var map__36715__$1 = (((((!((map__36715 == null))))?(((((map__36715.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36715.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36715):map__36715);
var m = map__36715__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36715__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36715__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__36717_36926 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__36718_36927 = null;
var count__36719_36928 = (0);
var i__36720_36929 = (0);
while(true){
if((i__36720_36929 < count__36719_36928)){
var f_36931 = chunk__36718_36927.cljs$core$IIndexed$_nth$arity$2(null,i__36720_36929);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_36931], 0));


var G__36932 = seq__36717_36926;
var G__36933 = chunk__36718_36927;
var G__36934 = count__36719_36928;
var G__36935 = (i__36720_36929 + (1));
seq__36717_36926 = G__36932;
chunk__36718_36927 = G__36933;
count__36719_36928 = G__36934;
i__36720_36929 = G__36935;
continue;
} else {
var temp__5735__auto___36936 = cljs.core.seq(seq__36717_36926);
if(temp__5735__auto___36936){
var seq__36717_36937__$1 = temp__5735__auto___36936;
if(cljs.core.chunked_seq_QMARK_(seq__36717_36937__$1)){
var c__4556__auto___36938 = cljs.core.chunk_first(seq__36717_36937__$1);
var G__36939 = cljs.core.chunk_rest(seq__36717_36937__$1);
var G__36940 = c__4556__auto___36938;
var G__36941 = cljs.core.count(c__4556__auto___36938);
var G__36942 = (0);
seq__36717_36926 = G__36939;
chunk__36718_36927 = G__36940;
count__36719_36928 = G__36941;
i__36720_36929 = G__36942;
continue;
} else {
var f_36943 = cljs.core.first(seq__36717_36937__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_36943], 0));


var G__36944 = cljs.core.next(seq__36717_36937__$1);
var G__36945 = null;
var G__36946 = (0);
var G__36947 = (0);
seq__36717_36926 = G__36944;
chunk__36718_36927 = G__36945;
count__36719_36928 = G__36946;
i__36720_36929 = G__36947;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_36948 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_36948], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_36948)))?cljs.core.second(arglists_36948):arglists_36948)], 0));
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
var seq__36724_36949 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__36725_36950 = null;
var count__36726_36951 = (0);
var i__36727_36952 = (0);
while(true){
if((i__36727_36952 < count__36726_36951)){
var vec__36741_36954 = chunk__36725_36950.cljs$core$IIndexed$_nth$arity$2(null,i__36727_36952);
var name_36955 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36741_36954,(0),null);
var map__36744_36956 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36741_36954,(1),null);
var map__36744_36957__$1 = (((((!((map__36744_36956 == null))))?(((((map__36744_36956.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36744_36956.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36744_36956):map__36744_36956);
var doc_36958 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36744_36957__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_36959 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36744_36957__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_36955], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_36959], 0));

if(cljs.core.truth_(doc_36958)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_36958], 0));
} else {
}


var G__36960 = seq__36724_36949;
var G__36961 = chunk__36725_36950;
var G__36962 = count__36726_36951;
var G__36963 = (i__36727_36952 + (1));
seq__36724_36949 = G__36960;
chunk__36725_36950 = G__36961;
count__36726_36951 = G__36962;
i__36727_36952 = G__36963;
continue;
} else {
var temp__5735__auto___36964 = cljs.core.seq(seq__36724_36949);
if(temp__5735__auto___36964){
var seq__36724_36965__$1 = temp__5735__auto___36964;
if(cljs.core.chunked_seq_QMARK_(seq__36724_36965__$1)){
var c__4556__auto___36966 = cljs.core.chunk_first(seq__36724_36965__$1);
var G__36968 = cljs.core.chunk_rest(seq__36724_36965__$1);
var G__36969 = c__4556__auto___36966;
var G__36970 = cljs.core.count(c__4556__auto___36966);
var G__36971 = (0);
seq__36724_36949 = G__36968;
chunk__36725_36950 = G__36969;
count__36726_36951 = G__36970;
i__36727_36952 = G__36971;
continue;
} else {
var vec__36747_36972 = cljs.core.first(seq__36724_36965__$1);
var name_36973 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36747_36972,(0),null);
var map__36750_36974 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36747_36972,(1),null);
var map__36750_36975__$1 = (((((!((map__36750_36974 == null))))?(((((map__36750_36974.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36750_36974.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36750_36974):map__36750_36974);
var doc_36976 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36750_36975__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_36977 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36750_36975__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_36973], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_36977], 0));

if(cljs.core.truth_(doc_36976)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_36976], 0));
} else {
}


var G__36979 = cljs.core.next(seq__36724_36965__$1);
var G__36980 = null;
var G__36981 = (0);
var G__36982 = (0);
seq__36724_36949 = G__36979;
chunk__36725_36950 = G__36980;
count__36726_36951 = G__36981;
i__36727_36952 = G__36982;
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

var seq__36752 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__36753 = null;
var count__36754 = (0);
var i__36755 = (0);
while(true){
if((i__36755 < count__36754)){
var role = chunk__36753.cljs$core$IIndexed$_nth$arity$2(null,i__36755);
var temp__5735__auto___36983__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___36983__$1)){
var spec_36984 = temp__5735__auto___36983__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_36984)], 0));
} else {
}


var G__36985 = seq__36752;
var G__36986 = chunk__36753;
var G__36987 = count__36754;
var G__36988 = (i__36755 + (1));
seq__36752 = G__36985;
chunk__36753 = G__36986;
count__36754 = G__36987;
i__36755 = G__36988;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq(seq__36752);
if(temp__5735__auto____$1){
var seq__36752__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__36752__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__36752__$1);
var G__36989 = cljs.core.chunk_rest(seq__36752__$1);
var G__36990 = c__4556__auto__;
var G__36991 = cljs.core.count(c__4556__auto__);
var G__36992 = (0);
seq__36752 = G__36989;
chunk__36753 = G__36990;
count__36754 = G__36991;
i__36755 = G__36992;
continue;
} else {
var role = cljs.core.first(seq__36752__$1);
var temp__5735__auto___36993__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___36993__$2)){
var spec_36994 = temp__5735__auto___36993__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_36994)], 0));
} else {
}


var G__36995 = cljs.core.next(seq__36752__$1);
var G__36996 = null;
var G__36997 = (0);
var G__36998 = (0);
seq__36752 = G__36995;
chunk__36753 = G__36996;
count__36754 = G__36997;
i__36755 = G__36998;
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
var G__37000 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__37001 = cljs.core.ex_cause(t);
via = G__37000;
t = G__37001;
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
var map__36762 = datafied_throwable;
var map__36762__$1 = (((((!((map__36762 == null))))?(((((map__36762.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36762.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36762):map__36762);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36762__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36762__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__36762__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__36763 = cljs.core.last(via);
var map__36763__$1 = (((((!((map__36763 == null))))?(((((map__36763.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36763.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36763):map__36763);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36763__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36763__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36763__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__36764 = data;
var map__36764__$1 = (((((!((map__36764 == null))))?(((((map__36764.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36764.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36764):map__36764);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36764__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36764__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36764__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__36765 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__36765__$1 = (((((!((map__36765 == null))))?(((((map__36765.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36765.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36765):map__36765);
var top_data = map__36765__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36765__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__36771 = phase;
var G__36771__$1 = (((G__36771 instanceof cljs.core.Keyword))?G__36771.fqn:null);
switch (G__36771__$1) {
case "read-source":
var map__36772 = data;
var map__36772__$1 = (((((!((map__36772 == null))))?(((((map__36772.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36772.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36772):map__36772);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36772__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36772__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__36774 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__36774__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36774,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__36774);
var G__36774__$2 = (cljs.core.truth_((function (){var fexpr__36775 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__36775.cljs$core$IFn$_invoke$arity$1 ? fexpr__36775.cljs$core$IFn$_invoke$arity$1(source) : fexpr__36775.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__36774__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__36774__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36774__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__36774__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__36776 = top_data;
var G__36776__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36776,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__36776);
var G__36776__$2 = (cljs.core.truth_((function (){var fexpr__36777 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__36777.cljs$core$IFn$_invoke$arity$1 ? fexpr__36777.cljs$core$IFn$_invoke$arity$1(source) : fexpr__36777.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__36776__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__36776__$1);
var G__36776__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36776__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__36776__$2);
var G__36776__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36776__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__36776__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36776__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__36776__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__36782 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36782,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36782,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36782,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36782,(3),null);
var G__36789 = top_data;
var G__36789__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36789,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__36789);
var G__36789__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36789__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__36789__$1);
var G__36789__$3 = (cljs.core.truth_((function (){var and__4115__auto__ = source__$1;
if(cljs.core.truth_(and__4115__auto__)){
return method;
} else {
return and__4115__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36789__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__36789__$2);
var G__36789__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36789__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__36789__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36789__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__36789__$4;
}

break;
case "execution":
var vec__36799 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36799,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36799,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36799,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36799,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__36760_SHARP_){
var or__4126__auto__ = (p1__36760_SHARP_ == null);
if(or__4126__auto__){
return or__4126__auto__;
} else {
var fexpr__36803 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__36803.cljs$core$IFn$_invoke$arity$1 ? fexpr__36803.cljs$core$IFn$_invoke$arity$1(p1__36760_SHARP_) : fexpr__36803.call(null,p1__36760_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4126__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return line;
}
})();
var G__36808 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__36808__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36808,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__36808);
var G__36808__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36808__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__36808__$1);
var G__36808__$3 = (cljs.core.truth_((function (){var or__4126__auto__ = fn;
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
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36808__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4126__auto__ = fn;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__36808__$2);
var G__36808__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36808__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__36808__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36808__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__36808__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__36771__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__36832){
var map__36833 = p__36832;
var map__36833__$1 = (((((!((map__36833 == null))))?(((((map__36833.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36833.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36833):map__36833);
var triage_data = map__36833__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36833__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36833__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36833__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36833__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36833__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36833__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36833__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36833__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
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
var G__36855 = phase;
var G__36855__$1 = (((G__36855 instanceof cljs.core.Keyword))?G__36855.fqn:null);
switch (G__36855__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__36856 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__36857 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__36858 = loc;
var G__36859 = (cljs.core.truth_(spec)?(function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__36864_37012 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__36865_37013 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__36866_37014 = true;
var _STAR_print_fn_STAR__temp_val__36867_37015 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__36866_37014);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__36867_37015);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__36826_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__36826_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__36865_37013);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__36864_37012);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__36856,G__36857,G__36858,G__36859) : format.call(null,G__36856,G__36857,G__36858,G__36859));

break;
case "macroexpansion":
var G__36876 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__36877 = cause_type;
var G__36878 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__36879 = loc;
var G__36880 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__36876,G__36877,G__36878,G__36879,G__36880) : format.call(null,G__36876,G__36877,G__36878,G__36879,G__36880));

break;
case "compile-syntax-check":
var G__36887 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__36888 = cause_type;
var G__36889 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__36890 = loc;
var G__36891 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__36887,G__36888,G__36889,G__36890,G__36891) : format.call(null,G__36887,G__36888,G__36889,G__36890,G__36891));

break;
case "compilation":
var G__36895 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__36896 = cause_type;
var G__36897 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__36898 = loc;
var G__36899 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__36895,G__36896,G__36897,G__36898,G__36899) : format.call(null,G__36895,G__36896,G__36897,G__36898,G__36899));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__36900 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__36901 = symbol;
var G__36902 = loc;
var G__36903 = (function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__36908_37017 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__36909_37018 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__36910_37019 = true;
var _STAR_print_fn_STAR__temp_val__36911_37020 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__36910_37019);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__36911_37020);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__36827_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__36827_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__36909_37018);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__36908_37017);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__36900,G__36901,G__36902,G__36903) : format.call(null,G__36900,G__36901,G__36902,G__36903));
} else {
var G__36920 = "Execution error%s at %s(%s).\n%s\n";
var G__36921 = cause_type;
var G__36922 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__36923 = loc;
var G__36924 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__36920,G__36921,G__36922,G__36923,G__36924) : format.call(null,G__36920,G__36921,G__36922,G__36923,G__36924));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__36855__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
