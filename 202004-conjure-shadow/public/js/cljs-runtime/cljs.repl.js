goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__27562){
var map__27563 = p__27562;
var map__27563__$1 = (((((!((map__27563 == null))))?(((((map__27563.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27563.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27563):map__27563);
var m = map__27563__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27563__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27563__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__4120__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
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
var seq__27567_27774 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__27568_27775 = null;
var count__27569_27776 = (0);
var i__27570_27777 = (0);
while(true){
if((i__27570_27777 < count__27569_27776)){
var f_27778 = chunk__27568_27775.cljs$core$IIndexed$_nth$arity$2(null,i__27570_27777);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_27778], 0));


var G__27779 = seq__27567_27774;
var G__27780 = chunk__27568_27775;
var G__27781 = count__27569_27776;
var G__27782 = (i__27570_27777 + (1));
seq__27567_27774 = G__27779;
chunk__27568_27775 = G__27780;
count__27569_27776 = G__27781;
i__27570_27777 = G__27782;
continue;
} else {
var temp__5735__auto___27783 = cljs.core.seq(seq__27567_27774);
if(temp__5735__auto___27783){
var seq__27567_27784__$1 = temp__5735__auto___27783;
if(cljs.core.chunked_seq_QMARK_(seq__27567_27784__$1)){
var c__4550__auto___27785 = cljs.core.chunk_first(seq__27567_27784__$1);
var G__27786 = cljs.core.chunk_rest(seq__27567_27784__$1);
var G__27787 = c__4550__auto___27785;
var G__27788 = cljs.core.count(c__4550__auto___27785);
var G__27789 = (0);
seq__27567_27774 = G__27786;
chunk__27568_27775 = G__27787;
count__27569_27776 = G__27788;
i__27570_27777 = G__27789;
continue;
} else {
var f_27790 = cljs.core.first(seq__27567_27784__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_27790], 0));


var G__27791 = cljs.core.next(seq__27567_27784__$1);
var G__27792 = null;
var G__27793 = (0);
var G__27794 = (0);
seq__27567_27774 = G__27791;
chunk__27568_27775 = G__27792;
count__27569_27776 = G__27793;
i__27570_27777 = G__27794;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_27795 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4120__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_27795], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_27795)))?cljs.core.second(arglists_27795):arglists_27795)], 0));
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
var seq__27574_27798 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__27575_27799 = null;
var count__27576_27800 = (0);
var i__27577_27801 = (0);
while(true){
if((i__27577_27801 < count__27576_27800)){
var vec__27589_27802 = chunk__27575_27799.cljs$core$IIndexed$_nth$arity$2(null,i__27577_27801);
var name_27803 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27589_27802,(0),null);
var map__27592_27804 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27589_27802,(1),null);
var map__27592_27805__$1 = (((((!((map__27592_27804 == null))))?(((((map__27592_27804.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27592_27804.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27592_27804):map__27592_27804);
var doc_27806 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27592_27805__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_27807 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27592_27805__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_27803], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_27807], 0));

if(cljs.core.truth_(doc_27806)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_27806], 0));
} else {
}


var G__27809 = seq__27574_27798;
var G__27810 = chunk__27575_27799;
var G__27811 = count__27576_27800;
var G__27812 = (i__27577_27801 + (1));
seq__27574_27798 = G__27809;
chunk__27575_27799 = G__27810;
count__27576_27800 = G__27811;
i__27577_27801 = G__27812;
continue;
} else {
var temp__5735__auto___27813 = cljs.core.seq(seq__27574_27798);
if(temp__5735__auto___27813){
var seq__27574_27814__$1 = temp__5735__auto___27813;
if(cljs.core.chunked_seq_QMARK_(seq__27574_27814__$1)){
var c__4550__auto___27815 = cljs.core.chunk_first(seq__27574_27814__$1);
var G__27816 = cljs.core.chunk_rest(seq__27574_27814__$1);
var G__27817 = c__4550__auto___27815;
var G__27818 = cljs.core.count(c__4550__auto___27815);
var G__27819 = (0);
seq__27574_27798 = G__27816;
chunk__27575_27799 = G__27817;
count__27576_27800 = G__27818;
i__27577_27801 = G__27819;
continue;
} else {
var vec__27594_27820 = cljs.core.first(seq__27574_27814__$1);
var name_27821 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27594_27820,(0),null);
var map__27597_27822 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27594_27820,(1),null);
var map__27597_27823__$1 = (((((!((map__27597_27822 == null))))?(((((map__27597_27822.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27597_27822.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27597_27822):map__27597_27822);
var doc_27824 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27597_27823__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_27825 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27597_27823__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_27821], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_27825], 0));

if(cljs.core.truth_(doc_27824)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_27824], 0));
} else {
}


var G__27826 = cljs.core.next(seq__27574_27814__$1);
var G__27827 = null;
var G__27828 = (0);
var G__27829 = (0);
seq__27574_27798 = G__27826;
chunk__27575_27799 = G__27827;
count__27576_27800 = G__27828;
i__27577_27801 = G__27829;
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

var seq__27601 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__27602 = null;
var count__27603 = (0);
var i__27604 = (0);
while(true){
if((i__27604 < count__27603)){
var role = chunk__27602.cljs$core$IIndexed$_nth$arity$2(null,i__27604);
var temp__5735__auto___27830__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___27830__$1)){
var spec_27831 = temp__5735__auto___27830__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_27831)], 0));
} else {
}


var G__27833 = seq__27601;
var G__27834 = chunk__27602;
var G__27835 = count__27603;
var G__27836 = (i__27604 + (1));
seq__27601 = G__27833;
chunk__27602 = G__27834;
count__27603 = G__27835;
i__27604 = G__27836;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq(seq__27601);
if(temp__5735__auto____$1){
var seq__27601__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__27601__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__27601__$1);
var G__27837 = cljs.core.chunk_rest(seq__27601__$1);
var G__27838 = c__4550__auto__;
var G__27839 = cljs.core.count(c__4550__auto__);
var G__27840 = (0);
seq__27601 = G__27837;
chunk__27602 = G__27838;
count__27603 = G__27839;
i__27604 = G__27840;
continue;
} else {
var role = cljs.core.first(seq__27601__$1);
var temp__5735__auto___27841__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___27841__$2)){
var spec_27842 = temp__5735__auto___27841__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_27842)], 0));
} else {
}


var G__27843 = cljs.core.next(seq__27601__$1);
var G__27844 = null;
var G__27845 = (0);
var G__27846 = (0);
seq__27601 = G__27843;
chunk__27602 = G__27844;
count__27603 = G__27845;
i__27604 = G__27846;
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
var G__27847 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__27848 = cljs.core.ex_cause(t);
via = G__27847;
t = G__27848;
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
var map__27610 = datafied_throwable;
var map__27610__$1 = (((((!((map__27610 == null))))?(((((map__27610.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27610.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27610):map__27610);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27610__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27610__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__27610__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__27611 = cljs.core.last(via);
var map__27611__$1 = (((((!((map__27611 == null))))?(((((map__27611.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27611.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27611):map__27611);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27611__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27611__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27611__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__27612 = data;
var map__27612__$1 = (((((!((map__27612 == null))))?(((((map__27612.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27612.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27612):map__27612);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27612__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27612__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27612__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__27613 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__27613__$1 = (((((!((map__27613 == null))))?(((((map__27613.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27613.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27613):map__27613);
var top_data = map__27613__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27613__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__27618 = phase;
var G__27618__$1 = (((G__27618 instanceof cljs.core.Keyword))?G__27618.fqn:null);
switch (G__27618__$1) {
case "read-source":
var map__27627 = data;
var map__27627__$1 = (((((!((map__27627 == null))))?(((((map__27627.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27627.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27627):map__27627);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27627__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27627__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__27638 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__27638__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__27638,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__27638);
var G__27638__$2 = (cljs.core.truth_((function (){var fexpr__27639 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__27639.cljs$core$IFn$_invoke$arity$1 ? fexpr__27639.cljs$core$IFn$_invoke$arity$1(source) : fexpr__27639.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__27638__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__27638__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__27638__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__27638__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__27644 = top_data;
var G__27644__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__27644,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__27644);
var G__27644__$2 = (cljs.core.truth_((function (){var fexpr__27648 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__27648.cljs$core$IFn$_invoke$arity$1 ? fexpr__27648.cljs$core$IFn$_invoke$arity$1(source) : fexpr__27648.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__27644__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__27644__$1);
var G__27644__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__27644__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__27644__$2);
var G__27644__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__27644__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__27644__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__27644__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__27644__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__27649 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27649,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27649,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27649,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27649,(3),null);
var G__27652 = top_data;
var G__27652__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__27652,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__27652);
var G__27652__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__27652__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__27652__$1);
var G__27652__$3 = (cljs.core.truth_((function (){var and__4109__auto__ = source__$1;
if(cljs.core.truth_(and__4109__auto__)){
return method;
} else {
return and__4109__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__27652__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__27652__$2);
var G__27652__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__27652__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__27652__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__27652__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__27652__$4;
}

break;
case "execution":
var vec__27667 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27667,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27667,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27667,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27667,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__27609_SHARP_){
var or__4120__auto__ = (p1__27609_SHARP_ == null);
if(or__4120__auto__){
return or__4120__auto__;
} else {
var fexpr__27671 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__27671.cljs$core$IFn$_invoke$arity$1 ? fexpr__27671.cljs$core$IFn$_invoke$arity$1(p1__27609_SHARP_) : fexpr__27671.call(null,p1__27609_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4120__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return line;
}
})();
var G__27680 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__27680__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__27680,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__27680);
var G__27680__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__27680__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__27680__$1);
var G__27680__$3 = (cljs.core.truth_((function (){var or__4120__auto__ = fn;
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
var and__4109__auto__ = source__$1;
if(cljs.core.truth_(and__4109__auto__)){
return method;
} else {
return and__4109__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__27680__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4120__auto__ = fn;
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__27680__$2);
var G__27680__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__27680__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__27680__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__27680__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__27680__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__27618__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__27706){
var map__27707 = p__27706;
var map__27707__$1 = (((((!((map__27707 == null))))?(((((map__27707.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27707.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27707):map__27707);
var triage_data = map__27707__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27707__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27707__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27707__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27707__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27707__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27707__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27707__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27707__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4120__auto__ = source;
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4120__auto__ = line;
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__4120__auto__ = class$;
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__27731 = phase;
var G__27731__$1 = (((G__27731 instanceof cljs.core.Keyword))?G__27731.fqn:null);
switch (G__27731__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__27732 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__27733 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__27734 = loc;
var G__27735 = (cljs.core.truth_(spec)?(function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__27736_27859 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__27737_27860 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__27738_27861 = true;
var _STAR_print_fn_STAR__temp_val__27739_27862 = (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__27738_27861);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__27739_27862);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__27697_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__27697_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__27737_27860);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__27736_27859);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__27732,G__27733,G__27734,G__27735) : format.call(null,G__27732,G__27733,G__27734,G__27735));

break;
case "macroexpansion":
var G__27744 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__27745 = cause_type;
var G__27746 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__27747 = loc;
var G__27748 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__27744,G__27745,G__27746,G__27747,G__27748) : format.call(null,G__27744,G__27745,G__27746,G__27747,G__27748));

break;
case "compile-syntax-check":
var G__27749 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__27750 = cause_type;
var G__27751 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__27752 = loc;
var G__27753 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__27749,G__27750,G__27751,G__27752,G__27753) : format.call(null,G__27749,G__27750,G__27751,G__27752,G__27753));

break;
case "compilation":
var G__27754 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__27755 = cause_type;
var G__27756 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__27757 = loc;
var G__27758 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__27754,G__27755,G__27756,G__27757,G__27758) : format.call(null,G__27754,G__27755,G__27756,G__27757,G__27758));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__27759 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__27760 = symbol;
var G__27761 = loc;
var G__27762 = (function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__27763_27864 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__27764_27865 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__27765_27866 = true;
var _STAR_print_fn_STAR__temp_val__27766_27867 = (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__27765_27866);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__27766_27867);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__27705_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__27705_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__27764_27865);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__27763_27864);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__27759,G__27760,G__27761,G__27762) : format.call(null,G__27759,G__27760,G__27761,G__27762));
} else {
var G__27768 = "Execution error%s at %s(%s).\n%s\n";
var G__27769 = cause_type;
var G__27770 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__27771 = loc;
var G__27772 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__27768,G__27769,G__27770,G__27771,G__27772) : format.call(null,G__27768,G__27769,G__27770,G__27771,G__27772));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__27731__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
