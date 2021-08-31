goog.provide('shadow.cljs.devtools.client.browser');
goog.require('cljs.core');
goog.require('cljs.reader');
goog.require('clojure.string');
goog.require('goog.dom');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('goog.net.XhrIo');
goog.require('shadow.cljs.devtools.client.env');
goog.require('shadow.cljs.devtools.client.console');
goog.require('shadow.cljs.devtools.client.hud');
goog.require('clojure.set');
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.repl_ns_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.repl_ns_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.socket_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.socket_ref = cljs.core.volatile_BANG_(null);
}
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4736__auto__ = [];
var len__4730__auto___32282 = arguments.length;
var i__4731__auto___32283 = (0);
while(true){
if((i__4731__auto___32283 < len__4730__auto___32282)){
args__4736__auto__.push((arguments[i__4731__auto___32283]));

var G__32284 = (i__4731__auto___32283 + (1));
i__4731__auto___32283 = G__32284;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%c\uD83E\uDC36 shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq32121){
var G__32122 = cljs.core.first(seq32121);
var seq32121__$1 = cljs.core.next(seq32121);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__32122,seq32121__$1);
}));

shadow.cljs.devtools.client.browser.ws_msg = (function shadow$cljs$devtools$client$browser$ws_msg(msg){
var temp__5733__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5733__auto__)){
var s = temp__5733__auto__;
return s.send(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0)));
} else {
return console.warn("WEBSOCKET NOT CONNECTED",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0)));
}
});
shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__32138 = cljs.core.seq(sources);
var chunk__32139 = null;
var count__32140 = (0);
var i__32141 = (0);
while(true){
if((i__32141 < count__32140)){
var map__32159 = chunk__32139.cljs$core$IIndexed$_nth$arity$2(null,i__32141);
var map__32159__$1 = (((((!((map__32159 == null))))?(((((map__32159.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32159.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32159):map__32159);
var src = map__32159__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32159__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32159__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32159__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32159__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''));
}catch (e32163){var e_32285 = e32163;
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_32285);

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_32285.message)].join('')));
}

var G__32286 = seq__32138;
var G__32287 = chunk__32139;
var G__32288 = count__32140;
var G__32289 = (i__32141 + (1));
seq__32138 = G__32286;
chunk__32139 = G__32287;
count__32140 = G__32288;
i__32141 = G__32289;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__32138);
if(temp__5735__auto__){
var seq__32138__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32138__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__32138__$1);
var G__32290 = cljs.core.chunk_rest(seq__32138__$1);
var G__32291 = c__4550__auto__;
var G__32292 = cljs.core.count(c__4550__auto__);
var G__32293 = (0);
seq__32138 = G__32290;
chunk__32139 = G__32291;
count__32140 = G__32292;
i__32141 = G__32293;
continue;
} else {
var map__32164 = cljs.core.first(seq__32138__$1);
var map__32164__$1 = (((((!((map__32164 == null))))?(((((map__32164.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32164.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32164):map__32164);
var src = map__32164__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32164__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32164__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32164__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32164__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''));
}catch (e32166){var e_32294 = e32166;
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_32294);

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_32294.message)].join('')));
}

var G__32295 = cljs.core.next(seq__32138__$1);
var G__32296 = null;
var G__32297 = (0);
var G__32298 = (0);
seq__32138 = G__32295;
chunk__32139 = G__32296;
count__32140 = G__32297;
i__32141 = G__32298;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__32167 = cljs.core.seq(js_requires);
var chunk__32168 = null;
var count__32169 = (0);
var i__32170 = (0);
while(true){
if((i__32170 < count__32169)){
var js_ns = chunk__32168.cljs$core$IIndexed$_nth$arity$2(null,i__32170);
var require_str_32299 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_32299);


var G__32300 = seq__32167;
var G__32301 = chunk__32168;
var G__32302 = count__32169;
var G__32303 = (i__32170 + (1));
seq__32167 = G__32300;
chunk__32168 = G__32301;
count__32169 = G__32302;
i__32170 = G__32303;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__32167);
if(temp__5735__auto__){
var seq__32167__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32167__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__32167__$1);
var G__32304 = cljs.core.chunk_rest(seq__32167__$1);
var G__32305 = c__4550__auto__;
var G__32306 = cljs.core.count(c__4550__auto__);
var G__32307 = (0);
seq__32167 = G__32304;
chunk__32168 = G__32305;
count__32169 = G__32306;
i__32170 = G__32307;
continue;
} else {
var js_ns = cljs.core.first(seq__32167__$1);
var require_str_32308 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_32308);


var G__32309 = cljs.core.next(seq__32167__$1);
var G__32310 = null;
var G__32311 = (0);
var G__32312 = (0);
seq__32167 = G__32309;
chunk__32168 = G__32310;
count__32169 = G__32311;
i__32170 = G__32312;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.load_sources = (function shadow$cljs$devtools$client$browser$load_sources(sources,callback){
if(cljs.core.empty_QMARK_(sources)){
var G__32174 = cljs.core.PersistentVector.EMPTY;
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(G__32174) : callback.call(null,G__32174));
} else {
return goog.net.XhrIo.send(shadow.cljs.devtools.client.env.files_url(),(function (res){
var req = this;
var content = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(req.getResponseText());
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(content) : callback.call(null,content));
}),"POST",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"client","client",-1323448117),new cljs.core.Keyword(null,"browser","browser",828191719),new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources)], null)], 0)),({"content-type": "application/edn; charset=utf-8"}));
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(p__32177){
var map__32178 = p__32177;
var map__32178__$1 = (((((!((map__32178 == null))))?(((((map__32178.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32178.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32178):map__32178);
var msg = map__32178__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32178__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32178__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4523__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__32180(s__32181){
return (new cljs.core.LazySeq(null,(function (){
var s__32181__$1 = s__32181;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__32181__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var map__32187 = cljs.core.first(xs__6292__auto__);
var map__32187__$1 = (((((!((map__32187 == null))))?(((((map__32187.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32187.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32187):map__32187);
var src = map__32187__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32187__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32187__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4519__auto__ = ((function (s__32181__$1,map__32187,map__32187__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__32178,map__32178__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__32180_$_iter__32182(s__32183){
return (new cljs.core.LazySeq(null,((function (s__32181__$1,map__32187,map__32187__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__32178,map__32178__$1,msg,info,reload_info){
return (function (){
var s__32183__$1 = s__32183;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__32183__$1);
if(temp__5735__auto____$1){
var s__32183__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__32183__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__32183__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__32185 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__32184 = (0);
while(true){
if((i__32184 < size__4522__auto__)){
var warning = cljs.core._nth(c__4521__auto__,i__32184);
cljs.core.chunk_append(b__32185,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__32313 = (i__32184 + (1));
i__32184 = G__32313;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__32185),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__32180_$_iter__32182(cljs.core.chunk_rest(s__32183__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__32185),null);
}
} else {
var warning = cljs.core.first(s__32183__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__32180_$_iter__32182(cljs.core.rest(s__32183__$2)));
}
} else {
return null;
}
break;
}
});})(s__32181__$1,map__32187,map__32187__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__32178,map__32178__$1,msg,info,reload_info))
,null,null));
});})(s__32181__$1,map__32187,map__32187__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__32178,map__32178__$1,msg,info,reload_info))
;
var fs__4520__auto__ = cljs.core.seq(iterys__4519__auto__(warnings));
if(fs__4520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4520__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__32180(cljs.core.rest(s__32181__$1)));
} else {
var G__32314 = cljs.core.rest(s__32181__$1);
s__32181__$1 = G__32314;
continue;
}
} else {
var G__32315 = cljs.core.rest(s__32181__$1);
s__32181__$1 = G__32315;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
var seq__32189_32316 = cljs.core.seq(warnings);
var chunk__32190_32317 = null;
var count__32191_32318 = (0);
var i__32192_32319 = (0);
while(true){
if((i__32192_32319 < count__32191_32318)){
var map__32197_32320 = chunk__32190_32317.cljs$core$IIndexed$_nth$arity$2(null,i__32192_32319);
var map__32197_32321__$1 = (((((!((map__32197_32320 == null))))?(((((map__32197_32320.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32197_32320.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32197_32320):map__32197_32320);
var w_32322 = map__32197_32321__$1;
var msg_32323__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32197_32321__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_32324 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32197_32321__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_32325 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32197_32321__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_32326 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32197_32321__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_32326)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_32324),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_32325),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_32323__$1)].join(''));


var G__32327 = seq__32189_32316;
var G__32328 = chunk__32190_32317;
var G__32329 = count__32191_32318;
var G__32330 = (i__32192_32319 + (1));
seq__32189_32316 = G__32327;
chunk__32190_32317 = G__32328;
count__32191_32318 = G__32329;
i__32192_32319 = G__32330;
continue;
} else {
var temp__5735__auto___32331 = cljs.core.seq(seq__32189_32316);
if(temp__5735__auto___32331){
var seq__32189_32332__$1 = temp__5735__auto___32331;
if(cljs.core.chunked_seq_QMARK_(seq__32189_32332__$1)){
var c__4550__auto___32333 = cljs.core.chunk_first(seq__32189_32332__$1);
var G__32334 = cljs.core.chunk_rest(seq__32189_32332__$1);
var G__32335 = c__4550__auto___32333;
var G__32336 = cljs.core.count(c__4550__auto___32333);
var G__32337 = (0);
seq__32189_32316 = G__32334;
chunk__32190_32317 = G__32335;
count__32191_32318 = G__32336;
i__32192_32319 = G__32337;
continue;
} else {
var map__32199_32338 = cljs.core.first(seq__32189_32332__$1);
var map__32199_32339__$1 = (((((!((map__32199_32338 == null))))?(((((map__32199_32338.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32199_32338.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32199_32338):map__32199_32338);
var w_32340 = map__32199_32339__$1;
var msg_32341__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32199_32339__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_32342 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32199_32339__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_32343 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32199_32339__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_32344 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32199_32339__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_32344)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_32342),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_32343),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_32341__$1)].join(''));


var G__32345 = cljs.core.next(seq__32189_32332__$1);
var G__32346 = null;
var G__32347 = (0);
var G__32348 = (0);
seq__32189_32316 = G__32345;
chunk__32190_32317 = G__32346;
count__32191_32318 = G__32347;
i__32192_32319 = G__32348;
continue;
}
} else {
}
}
break;
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.browser.load_sources(sources_to_get,(function (p1__32175_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__32175_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())))){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$)){
return new$;
} else {
return false;
}
} else {
return false;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_watch = (function shadow$cljs$devtools$client$browser$handle_asset_watch(p__32201){
var map__32202 = p__32201;
var map__32202__$1 = (((((!((map__32202 == null))))?(((((map__32202.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32202.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32202):map__32202);
var msg = map__32202__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32202__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__32204 = cljs.core.seq(updates);
var chunk__32206 = null;
var count__32207 = (0);
var i__32208 = (0);
while(true){
if((i__32208 < count__32207)){
var path = chunk__32206.cljs$core$IIndexed$_nth$arity$2(null,i__32208);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__32236_32349 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__32239_32350 = null;
var count__32240_32351 = (0);
var i__32241_32352 = (0);
while(true){
if((i__32241_32352 < count__32240_32351)){
var node_32353 = chunk__32239_32350.cljs$core$IIndexed$_nth$arity$2(null,i__32241_32352);
var path_match_32354 = shadow.cljs.devtools.client.browser.match_paths(node_32353.getAttribute("href"),path);
if(cljs.core.truth_(path_match_32354)){
var new_link_32355 = (function (){var G__32246 = node_32353.cloneNode(true);
G__32246.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_32354),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__32246;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_32354], 0));

goog.dom.insertSiblingAfter(new_link_32355,node_32353);

goog.dom.removeNode(node_32353);


var G__32356 = seq__32236_32349;
var G__32357 = chunk__32239_32350;
var G__32358 = count__32240_32351;
var G__32359 = (i__32241_32352 + (1));
seq__32236_32349 = G__32356;
chunk__32239_32350 = G__32357;
count__32240_32351 = G__32358;
i__32241_32352 = G__32359;
continue;
} else {
var G__32360 = seq__32236_32349;
var G__32361 = chunk__32239_32350;
var G__32362 = count__32240_32351;
var G__32363 = (i__32241_32352 + (1));
seq__32236_32349 = G__32360;
chunk__32239_32350 = G__32361;
count__32240_32351 = G__32362;
i__32241_32352 = G__32363;
continue;
}
} else {
var temp__5735__auto___32364 = cljs.core.seq(seq__32236_32349);
if(temp__5735__auto___32364){
var seq__32236_32365__$1 = temp__5735__auto___32364;
if(cljs.core.chunked_seq_QMARK_(seq__32236_32365__$1)){
var c__4550__auto___32366 = cljs.core.chunk_first(seq__32236_32365__$1);
var G__32367 = cljs.core.chunk_rest(seq__32236_32365__$1);
var G__32368 = c__4550__auto___32366;
var G__32369 = cljs.core.count(c__4550__auto___32366);
var G__32370 = (0);
seq__32236_32349 = G__32367;
chunk__32239_32350 = G__32368;
count__32240_32351 = G__32369;
i__32241_32352 = G__32370;
continue;
} else {
var node_32371 = cljs.core.first(seq__32236_32365__$1);
var path_match_32372 = shadow.cljs.devtools.client.browser.match_paths(node_32371.getAttribute("href"),path);
if(cljs.core.truth_(path_match_32372)){
var new_link_32373 = (function (){var G__32247 = node_32371.cloneNode(true);
G__32247.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_32372),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__32247;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_32372], 0));

goog.dom.insertSiblingAfter(new_link_32373,node_32371);

goog.dom.removeNode(node_32371);


var G__32374 = cljs.core.next(seq__32236_32365__$1);
var G__32375 = null;
var G__32376 = (0);
var G__32377 = (0);
seq__32236_32349 = G__32374;
chunk__32239_32350 = G__32375;
count__32240_32351 = G__32376;
i__32241_32352 = G__32377;
continue;
} else {
var G__32378 = cljs.core.next(seq__32236_32365__$1);
var G__32379 = null;
var G__32380 = (0);
var G__32381 = (0);
seq__32236_32349 = G__32378;
chunk__32239_32350 = G__32379;
count__32240_32351 = G__32380;
i__32241_32352 = G__32381;
continue;
}
}
} else {
}
}
break;
}


var G__32382 = seq__32204;
var G__32383 = chunk__32206;
var G__32384 = count__32207;
var G__32385 = (i__32208 + (1));
seq__32204 = G__32382;
chunk__32206 = G__32383;
count__32207 = G__32384;
i__32208 = G__32385;
continue;
} else {
var G__32386 = seq__32204;
var G__32387 = chunk__32206;
var G__32388 = count__32207;
var G__32389 = (i__32208 + (1));
seq__32204 = G__32386;
chunk__32206 = G__32387;
count__32207 = G__32388;
i__32208 = G__32389;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__32204);
if(temp__5735__auto__){
var seq__32204__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32204__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__32204__$1);
var G__32390 = cljs.core.chunk_rest(seq__32204__$1);
var G__32391 = c__4550__auto__;
var G__32392 = cljs.core.count(c__4550__auto__);
var G__32393 = (0);
seq__32204 = G__32390;
chunk__32206 = G__32391;
count__32207 = G__32392;
i__32208 = G__32393;
continue;
} else {
var path = cljs.core.first(seq__32204__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__32248_32394 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__32251_32395 = null;
var count__32252_32396 = (0);
var i__32253_32397 = (0);
while(true){
if((i__32253_32397 < count__32252_32396)){
var node_32398 = chunk__32251_32395.cljs$core$IIndexed$_nth$arity$2(null,i__32253_32397);
var path_match_32399 = shadow.cljs.devtools.client.browser.match_paths(node_32398.getAttribute("href"),path);
if(cljs.core.truth_(path_match_32399)){
var new_link_32400 = (function (){var G__32258 = node_32398.cloneNode(true);
G__32258.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_32399),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__32258;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_32399], 0));

goog.dom.insertSiblingAfter(new_link_32400,node_32398);

goog.dom.removeNode(node_32398);


var G__32401 = seq__32248_32394;
var G__32402 = chunk__32251_32395;
var G__32403 = count__32252_32396;
var G__32404 = (i__32253_32397 + (1));
seq__32248_32394 = G__32401;
chunk__32251_32395 = G__32402;
count__32252_32396 = G__32403;
i__32253_32397 = G__32404;
continue;
} else {
var G__32405 = seq__32248_32394;
var G__32406 = chunk__32251_32395;
var G__32407 = count__32252_32396;
var G__32408 = (i__32253_32397 + (1));
seq__32248_32394 = G__32405;
chunk__32251_32395 = G__32406;
count__32252_32396 = G__32407;
i__32253_32397 = G__32408;
continue;
}
} else {
var temp__5735__auto___32409__$1 = cljs.core.seq(seq__32248_32394);
if(temp__5735__auto___32409__$1){
var seq__32248_32410__$1 = temp__5735__auto___32409__$1;
if(cljs.core.chunked_seq_QMARK_(seq__32248_32410__$1)){
var c__4550__auto___32411 = cljs.core.chunk_first(seq__32248_32410__$1);
var G__32412 = cljs.core.chunk_rest(seq__32248_32410__$1);
var G__32413 = c__4550__auto___32411;
var G__32414 = cljs.core.count(c__4550__auto___32411);
var G__32415 = (0);
seq__32248_32394 = G__32412;
chunk__32251_32395 = G__32413;
count__32252_32396 = G__32414;
i__32253_32397 = G__32415;
continue;
} else {
var node_32416 = cljs.core.first(seq__32248_32410__$1);
var path_match_32417 = shadow.cljs.devtools.client.browser.match_paths(node_32416.getAttribute("href"),path);
if(cljs.core.truth_(path_match_32417)){
var new_link_32418 = (function (){var G__32259 = node_32416.cloneNode(true);
G__32259.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_32417),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__32259;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_32417], 0));

goog.dom.insertSiblingAfter(new_link_32418,node_32416);

goog.dom.removeNode(node_32416);


var G__32419 = cljs.core.next(seq__32248_32410__$1);
var G__32420 = null;
var G__32421 = (0);
var G__32422 = (0);
seq__32248_32394 = G__32419;
chunk__32251_32395 = G__32420;
count__32252_32396 = G__32421;
i__32253_32397 = G__32422;
continue;
} else {
var G__32423 = cljs.core.next(seq__32248_32410__$1);
var G__32424 = null;
var G__32425 = (0);
var G__32426 = (0);
seq__32248_32394 = G__32423;
chunk__32251_32395 = G__32424;
count__32252_32396 = G__32425;
i__32253_32397 = G__32426;
continue;
}
}
} else {
}
}
break;
}


var G__32427 = cljs.core.next(seq__32204__$1);
var G__32428 = null;
var G__32429 = (0);
var G__32430 = (0);
seq__32204 = G__32427;
chunk__32206 = G__32428;
count__32207 = G__32429;
i__32208 = G__32430;
continue;
} else {
var G__32431 = cljs.core.next(seq__32204__$1);
var G__32432 = null;
var G__32433 = (0);
var G__32434 = (0);
seq__32204 = G__32431;
chunk__32206 = G__32432;
count__32207 = G__32433;
i__32208 = G__32434;
continue;
}
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.get_ua_product = (function shadow$cljs$devtools$client$browser$get_ua_product(){
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
});
shadow.cljs.devtools.client.browser.get_asset_root = (function shadow$cljs$devtools$client$browser$get_asset_root(){
var loc = (new goog.Uri(document.location.href));
var cbp = (new goog.Uri(CLOSURE_BASE_PATH));
var s = loc.resolve(cbp).toString();
return clojure.string.replace(s,/^file:\//,"file:///");
});
shadow.cljs.devtools.client.browser.repl_error = (function shadow$cljs$devtools$client$browser$repl_error(e){
console.error("repl/invoke error",e);

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(shadow.cljs.devtools.client.env.repl_error(e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),shadow.cljs.devtools.client.browser.get_ua_product(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"asset-root","asset-root",1771735072),shadow.cljs.devtools.client.browser.get_asset_root()], 0));
});
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.repl_invoke = (function shadow$cljs$devtools$client$browser$repl_invoke(p__32260){
var map__32261 = p__32260;
var map__32261__$1 = (((((!((map__32261 == null))))?(((((map__32261.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32261.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32261):map__32261);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32261__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32261__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var result = shadow.cljs.devtools.client.env.repl_call((function (){
return shadow.cljs.devtools.client.browser.global_eval(js);
}),shadow.cljs.devtools.client.browser.repl_error);
return shadow.cljs.devtools.client.browser.ws_msg(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.Keyword(null,"id","id",-1388402092),id));
});
shadow.cljs.devtools.client.browser.repl_require = (function shadow$cljs$devtools$client$browser$repl_require(p__32263,done){
var map__32264 = p__32263;
var map__32264__$1 = (((((!((map__32264 == null))))?(((((map__32264.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32264.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32264):map__32264);
var msg = map__32264__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32264__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32264__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32264__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32264__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__32266){
var map__32267 = p__32266;
var map__32267__$1 = (((((!((map__32267 == null))))?(((((map__32267.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32267.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32267):map__32267);
var src = map__32267__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32267__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4109__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4109__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4109__auto__;
}
}),sources));
return shadow.cljs.devtools.client.browser.load_sources(sources_to_load,(function (sources__$1){
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","require-complete","repl/require-complete",-2140254719),new cljs.core.Keyword(null,"id","id",-1388402092),id], null));
}catch (e32269){var e = e32269;
return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","require-error","repl/require-error",1689310021),new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"error","error",-978969032),e.message], null));
}finally {(done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}}));
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(p__32270,done){
var map__32271 = p__32270;
var map__32271__$1 = (((((!((map__32271 == null))))?(((((map__32271.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32271.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32271):map__32271);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32271__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32271__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return shadow.cljs.devtools.client.browser.load_sources(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","init-complete","repl/init-complete",-162252879),new cljs.core.Keyword(null,"id","id",-1388402092),id], null));

shadow.cljs.devtools.client.browser.devtools_msg("REPL session start successful");

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
});
shadow.cljs.devtools.client.browser.repl_set_ns = (function shadow$cljs$devtools$client$browser$repl_set_ns(p__32273){
var map__32274 = p__32273;
var map__32274__$1 = (((((!((map__32274 == null))))?(((((map__32274.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32274.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32274):map__32274);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32274__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32274__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","set-ns-complete","repl/set-ns-complete",680944662),new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"ns","ns",441598760),ns], null));
});
shadow.cljs.devtools.client.browser.close_reason_ref = cljs.core.volatile_BANG_(null);
shadow.cljs.devtools.client.browser.stale_client_detected = cljs.core.volatile_BANG_(false);
shadow.cljs.devtools.client.browser.handle_message = (function shadow$cljs$devtools$client$browser$handle_message(p__32276,done){
var map__32277 = p__32276;
var map__32277__$1 = (((((!((map__32277 == null))))?(((((map__32277.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32277.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32277):map__32277);
var msg = map__32277__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32277__$1,new cljs.core.Keyword(null,"type","type",1174270348));
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

var G__32279_32435 = type;
var G__32279_32436__$1 = (((G__32279_32435 instanceof cljs.core.Keyword))?G__32279_32435.fqn:null);
switch (G__32279_32436__$1) {
case "asset-watch":
shadow.cljs.devtools.client.browser.handle_asset_watch(msg);

break;
case "repl/invoke":
shadow.cljs.devtools.client.browser.repl_invoke(msg);

break;
case "repl/require":
shadow.cljs.devtools.client.browser.repl_require(msg,done);

break;
case "repl/set-ns":
shadow.cljs.devtools.client.browser.repl_set_ns(msg);

break;
case "repl/init":
shadow.cljs.devtools.client.browser.repl_init(msg,done);

break;
case "repl/session-start":
shadow.cljs.devtools.client.browser.repl_init(msg,done);

break;
case "repl/ping":
shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","pong","repl/pong",-166610159),new cljs.core.Keyword(null,"time-server","time-server",786726561),new cljs.core.Keyword(null,"time-server","time-server",786726561).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"time-runtime","time-runtime",-40294923),Date.now()], null));

break;
case "build-complete":
shadow.cljs.devtools.client.hud.hud_warnings(msg);

shadow.cljs.devtools.client.browser.handle_build_complete(msg);

break;
case "build-failure":
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

break;
case "build-init":
shadow.cljs.devtools.client.hud.hud_warnings(msg);

break;
case "build-start":
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

break;
case "pong":

break;
case "client/stale":
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.stale_client_detected,true);

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,"Stale Client! You are not using the latest compilation output!");

break;
case "client/no-worker":
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.stale_client_detected,true);

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,["watch for build \"",shadow.cljs.devtools.client.env.build_id,"\" not running"].join(''));

break;
case "custom-msg":
shadow.cljs.devtools.client.env.publish_BANG_(new cljs.core.Keyword(null,"payload","payload",-383036092).cljs$core$IFn$_invoke$arity$1(msg));

break;
default:

}

if(cljs.core.contains_QMARK_(shadow.cljs.devtools.client.env.async_ops,type)){
return null;
} else {
return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}
});
shadow.cljs.devtools.client.browser.compile = (function shadow$cljs$devtools$client$browser$compile(text,callback){
return goog.net.XhrIo.send(["http",((shadow.cljs.devtools.client.env.ssl)?"s":null),"://",shadow.cljs.devtools.client.env.server_host,":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.env.server_port),"/worker/compile/",shadow.cljs.devtools.client.env.build_id,"/",shadow.cljs.devtools.client.env.proc_id,"/browser"].join(''),(function (res){
var req = this;
var actions = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(req.getResponseText());
if(cljs.core.truth_(callback)){
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(actions) : callback.call(null,actions));
} else {
return null;
}
}),"POST",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"input","input",556931961),text], null)], 0)),({"content-type": "application/edn; charset=utf-8"}));
});
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_status !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_status = cljs.core.volatile_BANG_(new cljs.core.Keyword(null,"init","init",-1875481434));
}
shadow.cljs.devtools.client.browser.ws_connect = (function shadow$cljs$devtools$client$browser$ws_connect(){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1((function (){var fexpr__32280 = cljs.core.deref(shadow.cljs.devtools.client.browser.ws_status);
return (fexpr__32280.cljs$core$IFn$_invoke$arity$1 ? fexpr__32280.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"init","init",-1875481434)) : fexpr__32280.call(null,new cljs.core.Keyword(null,"init","init",-1875481434)));
})())){
return (shadow.cljs.devtools.client.browser.ws_connect_impl.cljs$core$IFn$_invoke$arity$0 ? shadow.cljs.devtools.client.browser.ws_connect_impl.cljs$core$IFn$_invoke$arity$0() : shadow.cljs.devtools.client.browser.ws_connect_impl.call(null));
} else {
return null;
}
});
shadow.cljs.devtools.client.browser.maybe_reconnect = (function shadow$cljs$devtools$client$browser$maybe_reconnect(){
if(((cljs.core.not(cljs.core.deref(shadow.cljs.devtools.client.browser.stale_client_detected))) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_status),new cljs.core.Keyword(null,"init","init",-1875481434))))){
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.ws_status,new cljs.core.Keyword(null,"init","init",-1875481434));

return setTimeout(shadow.cljs.devtools.client.browser.ws_connect,(3000));
} else {
return null;
}
});
shadow.cljs.devtools.client.browser.ws_connect_impl = (function shadow$cljs$devtools$client$browser$ws_connect_impl(){
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.ws_status,new cljs.core.Keyword(null,"connecting","connecting",-1347943866));

try{var print_fn = cljs.core._STAR_print_fn_STAR_;
var ws_url = shadow.cljs.devtools.client.env.ws_url(new cljs.core.Keyword(null,"browser","browser",828191719));
var socket = (new WebSocket(ws_url));
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,socket);

(socket.onmessage = (function (e){
return shadow.cljs.devtools.client.env.process_ws_msg(e.data,shadow.cljs.devtools.client.browser.handle_message);
}));

(socket.onopen = (function (e){
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.ws_status,new cljs.core.Keyword(null,"connected","connected",-169833045));

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,null);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("goog",shadow.cljs.devtools.client.env.module_format)){
(goog.provide = goog.constructNamespace_);
} else {
}

shadow.cljs.devtools.client.env.set_print_fns_BANG_(shadow.cljs.devtools.client.browser.ws_msg);

return shadow.cljs.devtools.client.browser.devtools_msg("WebSocket connected!");
}));

(socket.onclose = (function (e){
shadow.cljs.devtools.client.browser.devtools_msg("WebSocket disconnected!");

shadow.cljs.devtools.client.hud.connection_error((function (){var or__4120__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.close_reason_ref);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return "Connection closed!";
}
})());

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,null);

shadow.cljs.devtools.client.env.reset_print_fns_BANG_();

return shadow.cljs.devtools.client.browser.maybe_reconnect();
}));

return (socket.onerror = (function (e){
shadow.cljs.devtools.client.hud.connection_error("Connection failed!");

shadow.cljs.devtools.client.browser.maybe_reconnect();

return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("websocket error",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e], 0));
}));
}catch (e32281){var e = e32281;
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("WebSocket setup failed",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e], 0));
}});
if(shadow.cljs.devtools.client.env.enabled){
var temp__5735__auto___32438 = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5735__auto___32438)){
var s_32439 = temp__5735__auto___32438;
shadow.cljs.devtools.client.browser.devtools_msg("connection reset!");

(s_32439.onclose = (function (e){
return null;
}));

s_32439.close();

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,null);
} else {
}

if(cljs.core.truth_(goog.global.window)){
window.addEventListener("beforeunload",(function (){
var temp__5735__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5735__auto__)){
var s = temp__5735__auto__;
return s.close();
} else {
return null;
}
}));
} else {
}

if(cljs.core.truth_((function (){var and__4109__auto__ = goog.global.document;
if(cljs.core.truth_(and__4109__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("loading",goog.global.document.readyState);
} else {
return and__4109__auto__;
}
})())){
window.addEventListener("DOMContentLoaded",shadow.cljs.devtools.client.browser.ws_connect);
} else {
setTimeout(shadow.cljs.devtools.client.browser.ws_connect,(10));
}
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
