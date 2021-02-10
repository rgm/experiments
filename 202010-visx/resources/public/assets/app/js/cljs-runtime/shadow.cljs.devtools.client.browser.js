goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4742__auto__ = [];
var len__4736__auto___36251 = arguments.length;
var i__4737__auto___36252 = (0);
while(true){
if((i__4737__auto___36252 < len__4736__auto___36251)){
args__4742__auto__.push((arguments[i__4737__auto___36252]));

var G__36253 = (i__4737__auto___36252 + (1));
i__4737__auto___36252 = G__36253;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq36086){
var G__36087 = cljs.core.first(seq36086);
var seq36086__$1 = cljs.core.next(seq36086);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36087,seq36086__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__36099 = cljs.core.seq(sources);
var chunk__36100 = null;
var count__36101 = (0);
var i__36102 = (0);
while(true){
if((i__36102 < count__36101)){
var map__36119 = chunk__36100.cljs$core$IIndexed$_nth$arity$2(null,i__36102);
var map__36119__$1 = (((((!((map__36119 == null))))?(((((map__36119.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36119.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36119):map__36119);
var src = map__36119__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36119__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36119__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36119__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36119__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e36121){var e_36254 = e36121;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_36254);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_36254.message)].join('')));
}

var G__36255 = seq__36099;
var G__36256 = chunk__36100;
var G__36257 = count__36101;
var G__36258 = (i__36102 + (1));
seq__36099 = G__36255;
chunk__36100 = G__36256;
count__36101 = G__36257;
i__36102 = G__36258;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__36099);
if(temp__5735__auto__){
var seq__36099__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__36099__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__36099__$1);
var G__36259 = cljs.core.chunk_rest(seq__36099__$1);
var G__36260 = c__4556__auto__;
var G__36261 = cljs.core.count(c__4556__auto__);
var G__36262 = (0);
seq__36099 = G__36259;
chunk__36100 = G__36260;
count__36101 = G__36261;
i__36102 = G__36262;
continue;
} else {
var map__36122 = cljs.core.first(seq__36099__$1);
var map__36122__$1 = (((((!((map__36122 == null))))?(((((map__36122.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36122.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36122):map__36122);
var src = map__36122__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36122__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36122__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36122__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36122__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e36124){var e_36263 = e36124;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_36263);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_36263.message)].join('')));
}

var G__36264 = cljs.core.next(seq__36099__$1);
var G__36265 = null;
var G__36266 = (0);
var G__36267 = (0);
seq__36099 = G__36264;
chunk__36100 = G__36265;
count__36101 = G__36266;
i__36102 = G__36267;
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
var seq__36130 = cljs.core.seq(js_requires);
var chunk__36131 = null;
var count__36132 = (0);
var i__36133 = (0);
while(true){
if((i__36133 < count__36132)){
var js_ns = chunk__36131.cljs$core$IIndexed$_nth$arity$2(null,i__36133);
var require_str_36268 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_36268);


var G__36269 = seq__36130;
var G__36270 = chunk__36131;
var G__36271 = count__36132;
var G__36272 = (i__36133 + (1));
seq__36130 = G__36269;
chunk__36131 = G__36270;
count__36132 = G__36271;
i__36133 = G__36272;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__36130);
if(temp__5735__auto__){
var seq__36130__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__36130__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__36130__$1);
var G__36273 = cljs.core.chunk_rest(seq__36130__$1);
var G__36274 = c__4556__auto__;
var G__36275 = cljs.core.count(c__4556__auto__);
var G__36276 = (0);
seq__36130 = G__36273;
chunk__36131 = G__36274;
count__36132 = G__36275;
i__36133 = G__36276;
continue;
} else {
var js_ns = cljs.core.first(seq__36130__$1);
var require_str_36277 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_36277);


var G__36278 = cljs.core.next(seq__36130__$1);
var G__36279 = null;
var G__36280 = (0);
var G__36281 = (0);
seq__36130 = G__36278;
chunk__36131 = G__36279;
count__36132 = G__36280;
i__36133 = G__36281;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__36137){
var map__36138 = p__36137;
var map__36138__$1 = (((((!((map__36138 == null))))?(((((map__36138.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36138.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36138):map__36138);
var msg = map__36138__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36138__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36138__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4529__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__36140(s__36141){
return (new cljs.core.LazySeq(null,(function (){
var s__36141__$1 = s__36141;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__36141__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var map__36146 = cljs.core.first(xs__6292__auto__);
var map__36146__$1 = (((((!((map__36146 == null))))?(((((map__36146.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36146.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36146):map__36146);
var src = map__36146__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36146__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36146__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4525__auto__ = ((function (s__36141__$1,map__36146,map__36146__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__36138,map__36138__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__36140_$_iter__36142(s__36143){
return (new cljs.core.LazySeq(null,((function (s__36141__$1,map__36146,map__36146__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__36138,map__36138__$1,msg,info,reload_info){
return (function (){
var s__36143__$1 = s__36143;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__36143__$1);
if(temp__5735__auto____$1){
var s__36143__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__36143__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__36143__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__36145 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__36144 = (0);
while(true){
if((i__36144 < size__4528__auto__)){
var warning = cljs.core._nth(c__4527__auto__,i__36144);
cljs.core.chunk_append(b__36145,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__36282 = (i__36144 + (1));
i__36144 = G__36282;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__36145),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__36140_$_iter__36142(cljs.core.chunk_rest(s__36143__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__36145),null);
}
} else {
var warning = cljs.core.first(s__36143__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__36140_$_iter__36142(cljs.core.rest(s__36143__$2)));
}
} else {
return null;
}
break;
}
});})(s__36141__$1,map__36146,map__36146__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__36138,map__36138__$1,msg,info,reload_info))
,null,null));
});})(s__36141__$1,map__36146,map__36146__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__36138,map__36138__$1,msg,info,reload_info))
;
var fs__4526__auto__ = cljs.core.seq(iterys__4525__auto__(warnings));
if(fs__4526__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4526__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__36140(cljs.core.rest(s__36141__$1)));
} else {
var G__36283 = cljs.core.rest(s__36141__$1);
s__36141__$1 = G__36283;
continue;
}
} else {
var G__36284 = cljs.core.rest(s__36141__$1);
s__36141__$1 = G__36284;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__36148_36285 = cljs.core.seq(warnings);
var chunk__36149_36286 = null;
var count__36150_36287 = (0);
var i__36151_36288 = (0);
while(true){
if((i__36151_36288 < count__36150_36287)){
var map__36156_36289 = chunk__36149_36286.cljs$core$IIndexed$_nth$arity$2(null,i__36151_36288);
var map__36156_36290__$1 = (((((!((map__36156_36289 == null))))?(((((map__36156_36289.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36156_36289.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36156_36289):map__36156_36289);
var w_36291 = map__36156_36290__$1;
var msg_36292__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36156_36290__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_36293 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36156_36290__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_36294 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36156_36290__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_36295 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36156_36290__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_36295)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_36293),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_36294),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_36292__$1)].join(''));


var G__36296 = seq__36148_36285;
var G__36297 = chunk__36149_36286;
var G__36298 = count__36150_36287;
var G__36299 = (i__36151_36288 + (1));
seq__36148_36285 = G__36296;
chunk__36149_36286 = G__36297;
count__36150_36287 = G__36298;
i__36151_36288 = G__36299;
continue;
} else {
var temp__5735__auto___36300 = cljs.core.seq(seq__36148_36285);
if(temp__5735__auto___36300){
var seq__36148_36301__$1 = temp__5735__auto___36300;
if(cljs.core.chunked_seq_QMARK_(seq__36148_36301__$1)){
var c__4556__auto___36302 = cljs.core.chunk_first(seq__36148_36301__$1);
var G__36303 = cljs.core.chunk_rest(seq__36148_36301__$1);
var G__36304 = c__4556__auto___36302;
var G__36305 = cljs.core.count(c__4556__auto___36302);
var G__36306 = (0);
seq__36148_36285 = G__36303;
chunk__36149_36286 = G__36304;
count__36150_36287 = G__36305;
i__36151_36288 = G__36306;
continue;
} else {
var map__36158_36307 = cljs.core.first(seq__36148_36301__$1);
var map__36158_36308__$1 = (((((!((map__36158_36307 == null))))?(((((map__36158_36307.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36158_36307.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36158_36307):map__36158_36307);
var w_36309 = map__36158_36308__$1;
var msg_36310__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36158_36308__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_36311 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36158_36308__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_36312 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36158_36308__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_36313 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36158_36308__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_36313)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_36311),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_36312),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_36310__$1)].join(''));


var G__36314 = cljs.core.next(seq__36148_36301__$1);
var G__36315 = null;
var G__36316 = (0);
var G__36317 = (0);
seq__36148_36285 = G__36314;
chunk__36149_36286 = G__36315;
count__36150_36287 = G__36316;
i__36151_36288 = G__36317;
continue;
}
} else {
}
}
break;
}
} else {
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

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__36136_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__36136_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
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
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__36162){
var map__36163 = p__36162;
var map__36163__$1 = (((((!((map__36163 == null))))?(((((map__36163.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36163.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36163):map__36163);
var msg = map__36163__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36163__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__36165 = cljs.core.seq(updates);
var chunk__36167 = null;
var count__36168 = (0);
var i__36169 = (0);
while(true){
if((i__36169 < count__36168)){
var path = chunk__36167.cljs$core$IIndexed$_nth$arity$2(null,i__36169);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__36195_36318 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__36198_36319 = null;
var count__36199_36320 = (0);
var i__36200_36321 = (0);
while(true){
if((i__36200_36321 < count__36199_36320)){
var node_36322 = chunk__36198_36319.cljs$core$IIndexed$_nth$arity$2(null,i__36200_36321);
var path_match_36323 = shadow.cljs.devtools.client.browser.match_paths(node_36322.getAttribute("href"),path);
if(cljs.core.truth_(path_match_36323)){
var new_link_36324 = (function (){var G__36205 = node_36322.cloneNode(true);
G__36205.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_36323),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__36205;
})();
(new_link_36324.onload = ((function (seq__36195_36318,chunk__36198_36319,count__36199_36320,i__36200_36321,seq__36165,chunk__36167,count__36168,i__36169,new_link_36324,path_match_36323,node_36322,path,map__36163,map__36163__$1,msg,updates){
return (function (){
return goog.dom.removeNode(node_36322);
});})(seq__36195_36318,chunk__36198_36319,count__36199_36320,i__36200_36321,seq__36165,chunk__36167,count__36168,i__36169,new_link_36324,path_match_36323,node_36322,path,map__36163,map__36163__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_36323], 0));

goog.dom.insertSiblingAfter(new_link_36324,node_36322);


var G__36325 = seq__36195_36318;
var G__36326 = chunk__36198_36319;
var G__36327 = count__36199_36320;
var G__36328 = (i__36200_36321 + (1));
seq__36195_36318 = G__36325;
chunk__36198_36319 = G__36326;
count__36199_36320 = G__36327;
i__36200_36321 = G__36328;
continue;
} else {
var G__36329 = seq__36195_36318;
var G__36330 = chunk__36198_36319;
var G__36331 = count__36199_36320;
var G__36332 = (i__36200_36321 + (1));
seq__36195_36318 = G__36329;
chunk__36198_36319 = G__36330;
count__36199_36320 = G__36331;
i__36200_36321 = G__36332;
continue;
}
} else {
var temp__5735__auto___36333 = cljs.core.seq(seq__36195_36318);
if(temp__5735__auto___36333){
var seq__36195_36334__$1 = temp__5735__auto___36333;
if(cljs.core.chunked_seq_QMARK_(seq__36195_36334__$1)){
var c__4556__auto___36335 = cljs.core.chunk_first(seq__36195_36334__$1);
var G__36336 = cljs.core.chunk_rest(seq__36195_36334__$1);
var G__36337 = c__4556__auto___36335;
var G__36338 = cljs.core.count(c__4556__auto___36335);
var G__36339 = (0);
seq__36195_36318 = G__36336;
chunk__36198_36319 = G__36337;
count__36199_36320 = G__36338;
i__36200_36321 = G__36339;
continue;
} else {
var node_36340 = cljs.core.first(seq__36195_36334__$1);
var path_match_36341 = shadow.cljs.devtools.client.browser.match_paths(node_36340.getAttribute("href"),path);
if(cljs.core.truth_(path_match_36341)){
var new_link_36342 = (function (){var G__36206 = node_36340.cloneNode(true);
G__36206.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_36341),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__36206;
})();
(new_link_36342.onload = ((function (seq__36195_36318,chunk__36198_36319,count__36199_36320,i__36200_36321,seq__36165,chunk__36167,count__36168,i__36169,new_link_36342,path_match_36341,node_36340,seq__36195_36334__$1,temp__5735__auto___36333,path,map__36163,map__36163__$1,msg,updates){
return (function (){
return goog.dom.removeNode(node_36340);
});})(seq__36195_36318,chunk__36198_36319,count__36199_36320,i__36200_36321,seq__36165,chunk__36167,count__36168,i__36169,new_link_36342,path_match_36341,node_36340,seq__36195_36334__$1,temp__5735__auto___36333,path,map__36163,map__36163__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_36341], 0));

goog.dom.insertSiblingAfter(new_link_36342,node_36340);


var G__36343 = cljs.core.next(seq__36195_36334__$1);
var G__36344 = null;
var G__36345 = (0);
var G__36346 = (0);
seq__36195_36318 = G__36343;
chunk__36198_36319 = G__36344;
count__36199_36320 = G__36345;
i__36200_36321 = G__36346;
continue;
} else {
var G__36347 = cljs.core.next(seq__36195_36334__$1);
var G__36348 = null;
var G__36349 = (0);
var G__36350 = (0);
seq__36195_36318 = G__36347;
chunk__36198_36319 = G__36348;
count__36199_36320 = G__36349;
i__36200_36321 = G__36350;
continue;
}
}
} else {
}
}
break;
}


var G__36351 = seq__36165;
var G__36352 = chunk__36167;
var G__36353 = count__36168;
var G__36354 = (i__36169 + (1));
seq__36165 = G__36351;
chunk__36167 = G__36352;
count__36168 = G__36353;
i__36169 = G__36354;
continue;
} else {
var G__36355 = seq__36165;
var G__36356 = chunk__36167;
var G__36357 = count__36168;
var G__36358 = (i__36169 + (1));
seq__36165 = G__36355;
chunk__36167 = G__36356;
count__36168 = G__36357;
i__36169 = G__36358;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__36165);
if(temp__5735__auto__){
var seq__36165__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__36165__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__36165__$1);
var G__36359 = cljs.core.chunk_rest(seq__36165__$1);
var G__36360 = c__4556__auto__;
var G__36361 = cljs.core.count(c__4556__auto__);
var G__36362 = (0);
seq__36165 = G__36359;
chunk__36167 = G__36360;
count__36168 = G__36361;
i__36169 = G__36362;
continue;
} else {
var path = cljs.core.first(seq__36165__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__36207_36363 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__36210_36364 = null;
var count__36211_36365 = (0);
var i__36212_36366 = (0);
while(true){
if((i__36212_36366 < count__36211_36365)){
var node_36367 = chunk__36210_36364.cljs$core$IIndexed$_nth$arity$2(null,i__36212_36366);
var path_match_36368 = shadow.cljs.devtools.client.browser.match_paths(node_36367.getAttribute("href"),path);
if(cljs.core.truth_(path_match_36368)){
var new_link_36369 = (function (){var G__36217 = node_36367.cloneNode(true);
G__36217.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_36368),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__36217;
})();
(new_link_36369.onload = ((function (seq__36207_36363,chunk__36210_36364,count__36211_36365,i__36212_36366,seq__36165,chunk__36167,count__36168,i__36169,new_link_36369,path_match_36368,node_36367,path,seq__36165__$1,temp__5735__auto__,map__36163,map__36163__$1,msg,updates){
return (function (){
return goog.dom.removeNode(node_36367);
});})(seq__36207_36363,chunk__36210_36364,count__36211_36365,i__36212_36366,seq__36165,chunk__36167,count__36168,i__36169,new_link_36369,path_match_36368,node_36367,path,seq__36165__$1,temp__5735__auto__,map__36163,map__36163__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_36368], 0));

goog.dom.insertSiblingAfter(new_link_36369,node_36367);


var G__36370 = seq__36207_36363;
var G__36371 = chunk__36210_36364;
var G__36372 = count__36211_36365;
var G__36373 = (i__36212_36366 + (1));
seq__36207_36363 = G__36370;
chunk__36210_36364 = G__36371;
count__36211_36365 = G__36372;
i__36212_36366 = G__36373;
continue;
} else {
var G__36374 = seq__36207_36363;
var G__36375 = chunk__36210_36364;
var G__36376 = count__36211_36365;
var G__36377 = (i__36212_36366 + (1));
seq__36207_36363 = G__36374;
chunk__36210_36364 = G__36375;
count__36211_36365 = G__36376;
i__36212_36366 = G__36377;
continue;
}
} else {
var temp__5735__auto___36378__$1 = cljs.core.seq(seq__36207_36363);
if(temp__5735__auto___36378__$1){
var seq__36207_36379__$1 = temp__5735__auto___36378__$1;
if(cljs.core.chunked_seq_QMARK_(seq__36207_36379__$1)){
var c__4556__auto___36380 = cljs.core.chunk_first(seq__36207_36379__$1);
var G__36381 = cljs.core.chunk_rest(seq__36207_36379__$1);
var G__36382 = c__4556__auto___36380;
var G__36383 = cljs.core.count(c__4556__auto___36380);
var G__36384 = (0);
seq__36207_36363 = G__36381;
chunk__36210_36364 = G__36382;
count__36211_36365 = G__36383;
i__36212_36366 = G__36384;
continue;
} else {
var node_36385 = cljs.core.first(seq__36207_36379__$1);
var path_match_36386 = shadow.cljs.devtools.client.browser.match_paths(node_36385.getAttribute("href"),path);
if(cljs.core.truth_(path_match_36386)){
var new_link_36387 = (function (){var G__36218 = node_36385.cloneNode(true);
G__36218.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_36386),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__36218;
})();
(new_link_36387.onload = ((function (seq__36207_36363,chunk__36210_36364,count__36211_36365,i__36212_36366,seq__36165,chunk__36167,count__36168,i__36169,new_link_36387,path_match_36386,node_36385,seq__36207_36379__$1,temp__5735__auto___36378__$1,path,seq__36165__$1,temp__5735__auto__,map__36163,map__36163__$1,msg,updates){
return (function (){
return goog.dom.removeNode(node_36385);
});})(seq__36207_36363,chunk__36210_36364,count__36211_36365,i__36212_36366,seq__36165,chunk__36167,count__36168,i__36169,new_link_36387,path_match_36386,node_36385,seq__36207_36379__$1,temp__5735__auto___36378__$1,path,seq__36165__$1,temp__5735__auto__,map__36163,map__36163__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_36386], 0));

goog.dom.insertSiblingAfter(new_link_36387,node_36385);


var G__36388 = cljs.core.next(seq__36207_36379__$1);
var G__36389 = null;
var G__36390 = (0);
var G__36391 = (0);
seq__36207_36363 = G__36388;
chunk__36210_36364 = G__36389;
count__36211_36365 = G__36390;
i__36212_36366 = G__36391;
continue;
} else {
var G__36392 = cljs.core.next(seq__36207_36379__$1);
var G__36393 = null;
var G__36394 = (0);
var G__36395 = (0);
seq__36207_36363 = G__36392;
chunk__36210_36364 = G__36393;
count__36211_36365 = G__36394;
i__36212_36366 = G__36395;
continue;
}
}
} else {
}
}
break;
}


var G__36396 = cljs.core.next(seq__36165__$1);
var G__36397 = null;
var G__36398 = (0);
var G__36399 = (0);
seq__36165 = G__36396;
chunk__36167 = G__36397;
count__36168 = G__36398;
i__36169 = G__36399;
continue;
} else {
var G__36400 = cljs.core.next(seq__36165__$1);
var G__36401 = null;
var G__36402 = (0);
var G__36403 = (0);
seq__36165 = G__36400;
chunk__36167 = G__36401;
count__36168 = G__36402;
i__36169 = G__36403;
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
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(runtime,p__36219){
var map__36220 = p__36219;
var map__36220__$1 = (((((!((map__36220 == null))))?(((((map__36220.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36220.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36220):map__36220);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36220__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
return shadow.cljs.devtools.client.shared.load_sources(runtime,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return shadow.cljs.devtools.client.browser.devtools_msg("ready!");
}));
});
shadow.cljs.devtools.client.browser.client_info = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null);
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$2 = (function (this$,code){
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(code);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,p__36222){
var map__36223 = p__36222;
var map__36223__$1 = (((((!((map__36223 == null))))?(((((map__36223.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36223.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36223):map__36223);
var _ = map__36223__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36223__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__36225,done,error){
var map__36226 = p__36225;
var map__36226__$1 = (((((!((map__36226 == null))))?(((((map__36226.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36226.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36226):map__36226);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36226__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__36228,done,error){
var map__36229 = p__36228;
var map__36229__$1 = (((((!((map__36229 == null))))?(((((map__36229.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36229.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36229):map__36229);
var msg = map__36229__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36229__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36229__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36229__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__36231){
var map__36232 = p__36231;
var map__36232__$1 = (((((!((map__36232 == null))))?(((((map__36232.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36232.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36232):map__36232);
var src = map__36232__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36232__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4115__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4115__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__36234 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__36234) : done.call(null,G__36234));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__36235){
var map__36236 = p__36235;
var map__36236__$1 = (((((!((map__36236 == null))))?(((((map__36236.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36236.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36236):map__36236);
var msg__$1 = map__36236__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36236__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e36238){var ex = e36238;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__36239){
var map__36240 = p__36239;
var map__36240__$1 = (((((!((map__36240 == null))))?(((((map__36240.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36240.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36240):map__36240);
var env = map__36240__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36240__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-runtime-init","cljs-runtime-init",1305890232),(function (msg){
return shadow.cljs.devtools.client.browser.repl_init(runtime,msg);
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (p__36242){
var map__36243 = p__36242;
var map__36243__$1 = (((((!((map__36243 == null))))?(((((map__36243.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36243.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36243):map__36243);
var msg = map__36243__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36243__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__36245){
var map__36246 = p__36245;
var map__36246__$1 = (((((!((map__36246 == null))))?(((((map__36246.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36246.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36246):map__36246);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36246__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36246__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__36248){
var map__36249 = p__36248;
var map__36249__$1 = (((((!((map__36249 == null))))?(((((map__36249.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36249.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36249):map__36249);
var svc = map__36249__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36249__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
