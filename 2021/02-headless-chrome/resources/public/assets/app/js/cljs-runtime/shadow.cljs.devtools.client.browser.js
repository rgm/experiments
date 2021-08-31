goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4742__auto__ = [];
var len__4736__auto___35443 = arguments.length;
var i__4737__auto___35444 = (0);
while(true){
if((i__4737__auto___35444 < len__4736__auto___35443)){
args__4742__auto__.push((arguments[i__4737__auto___35444]));

var G__35445 = (i__4737__auto___35444 + (1));
i__4737__auto___35444 = G__35445;
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
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq35225){
var G__35226 = cljs.core.first(seq35225);
var seq35225__$1 = cljs.core.next(seq35225);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35226,seq35225__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__35228 = cljs.core.seq(sources);
var chunk__35229 = null;
var count__35230 = (0);
var i__35231 = (0);
while(true){
if((i__35231 < count__35230)){
var map__35247 = chunk__35229.cljs$core$IIndexed$_nth$arity$2(null,i__35231);
var map__35247__$1 = (((((!((map__35247 == null))))?(((((map__35247.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35247.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35247):map__35247);
var src = map__35247__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35247__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35247__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35247__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35247__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e35252){var e_35446 = e35252;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_35446);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_35446.message)].join('')));
}

var G__35447 = seq__35228;
var G__35448 = chunk__35229;
var G__35449 = count__35230;
var G__35450 = (i__35231 + (1));
seq__35228 = G__35447;
chunk__35229 = G__35448;
count__35230 = G__35449;
i__35231 = G__35450;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__35228);
if(temp__5735__auto__){
var seq__35228__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35228__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__35228__$1);
var G__35451 = cljs.core.chunk_rest(seq__35228__$1);
var G__35452 = c__4556__auto__;
var G__35453 = cljs.core.count(c__4556__auto__);
var G__35454 = (0);
seq__35228 = G__35451;
chunk__35229 = G__35452;
count__35230 = G__35453;
i__35231 = G__35454;
continue;
} else {
var map__35254 = cljs.core.first(seq__35228__$1);
var map__35254__$1 = (((((!((map__35254 == null))))?(((((map__35254.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35254.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35254):map__35254);
var src = map__35254__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35254__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35254__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35254__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35254__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e35259){var e_35455 = e35259;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_35455);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_35455.message)].join('')));
}

var G__35456 = cljs.core.next(seq__35228__$1);
var G__35457 = null;
var G__35458 = (0);
var G__35459 = (0);
seq__35228 = G__35456;
chunk__35229 = G__35457;
count__35230 = G__35458;
i__35231 = G__35459;
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
var seq__35264 = cljs.core.seq(js_requires);
var chunk__35265 = null;
var count__35266 = (0);
var i__35267 = (0);
while(true){
if((i__35267 < count__35266)){
var js_ns = chunk__35265.cljs$core$IIndexed$_nth$arity$2(null,i__35267);
var require_str_35461 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_35461);


var G__35462 = seq__35264;
var G__35463 = chunk__35265;
var G__35464 = count__35266;
var G__35465 = (i__35267 + (1));
seq__35264 = G__35462;
chunk__35265 = G__35463;
count__35266 = G__35464;
i__35267 = G__35465;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__35264);
if(temp__5735__auto__){
var seq__35264__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35264__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__35264__$1);
var G__35466 = cljs.core.chunk_rest(seq__35264__$1);
var G__35467 = c__4556__auto__;
var G__35468 = cljs.core.count(c__4556__auto__);
var G__35469 = (0);
seq__35264 = G__35466;
chunk__35265 = G__35467;
count__35266 = G__35468;
i__35267 = G__35469;
continue;
} else {
var js_ns = cljs.core.first(seq__35264__$1);
var require_str_35470 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_35470);


var G__35471 = cljs.core.next(seq__35264__$1);
var G__35472 = null;
var G__35473 = (0);
var G__35474 = (0);
seq__35264 = G__35471;
chunk__35265 = G__35472;
count__35266 = G__35473;
i__35267 = G__35474;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__35269){
var map__35270 = p__35269;
var map__35270__$1 = (((((!((map__35270 == null))))?(((((map__35270.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35270.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35270):map__35270);
var msg = map__35270__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35270__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35270__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4529__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__35272(s__35273){
return (new cljs.core.LazySeq(null,(function (){
var s__35273__$1 = s__35273;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__35273__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var map__35278 = cljs.core.first(xs__6292__auto__);
var map__35278__$1 = (((((!((map__35278 == null))))?(((((map__35278.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35278.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35278):map__35278);
var src = map__35278__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35278__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35278__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4525__auto__ = ((function (s__35273__$1,map__35278,map__35278__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__35270,map__35270__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__35272_$_iter__35274(s__35275){
return (new cljs.core.LazySeq(null,((function (s__35273__$1,map__35278,map__35278__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__35270,map__35270__$1,msg,info,reload_info){
return (function (){
var s__35275__$1 = s__35275;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__35275__$1);
if(temp__5735__auto____$1){
var s__35275__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__35275__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__35275__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__35277 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__35276 = (0);
while(true){
if((i__35276 < size__4528__auto__)){
var warning = cljs.core._nth(c__4527__auto__,i__35276);
cljs.core.chunk_append(b__35277,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__35478 = (i__35276 + (1));
i__35276 = G__35478;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__35277),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__35272_$_iter__35274(cljs.core.chunk_rest(s__35275__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__35277),null);
}
} else {
var warning = cljs.core.first(s__35275__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__35272_$_iter__35274(cljs.core.rest(s__35275__$2)));
}
} else {
return null;
}
break;
}
});})(s__35273__$1,map__35278,map__35278__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__35270,map__35270__$1,msg,info,reload_info))
,null,null));
});})(s__35273__$1,map__35278,map__35278__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__35270,map__35270__$1,msg,info,reload_info))
;
var fs__4526__auto__ = cljs.core.seq(iterys__4525__auto__(warnings));
if(fs__4526__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4526__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__35272(cljs.core.rest(s__35273__$1)));
} else {
var G__35479 = cljs.core.rest(s__35273__$1);
s__35273__$1 = G__35479;
continue;
}
} else {
var G__35480 = cljs.core.rest(s__35273__$1);
s__35273__$1 = G__35480;
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
var seq__35285_35481 = cljs.core.seq(warnings);
var chunk__35286_35482 = null;
var count__35287_35483 = (0);
var i__35288_35484 = (0);
while(true){
if((i__35288_35484 < count__35287_35483)){
var map__35295_35485 = chunk__35286_35482.cljs$core$IIndexed$_nth$arity$2(null,i__35288_35484);
var map__35295_35486__$1 = (((((!((map__35295_35485 == null))))?(((((map__35295_35485.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35295_35485.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35295_35485):map__35295_35485);
var w_35487 = map__35295_35486__$1;
var msg_35488__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35295_35486__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_35489 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35295_35486__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_35490 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35295_35486__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_35491 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35295_35486__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_35491)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_35489),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_35490),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_35488__$1)].join(''));


var G__35494 = seq__35285_35481;
var G__35495 = chunk__35286_35482;
var G__35496 = count__35287_35483;
var G__35497 = (i__35288_35484 + (1));
seq__35285_35481 = G__35494;
chunk__35286_35482 = G__35495;
count__35287_35483 = G__35496;
i__35288_35484 = G__35497;
continue;
} else {
var temp__5735__auto___35498 = cljs.core.seq(seq__35285_35481);
if(temp__5735__auto___35498){
var seq__35285_35499__$1 = temp__5735__auto___35498;
if(cljs.core.chunked_seq_QMARK_(seq__35285_35499__$1)){
var c__4556__auto___35500 = cljs.core.chunk_first(seq__35285_35499__$1);
var G__35501 = cljs.core.chunk_rest(seq__35285_35499__$1);
var G__35502 = c__4556__auto___35500;
var G__35503 = cljs.core.count(c__4556__auto___35500);
var G__35504 = (0);
seq__35285_35481 = G__35501;
chunk__35286_35482 = G__35502;
count__35287_35483 = G__35503;
i__35288_35484 = G__35504;
continue;
} else {
var map__35298_35506 = cljs.core.first(seq__35285_35499__$1);
var map__35298_35507__$1 = (((((!((map__35298_35506 == null))))?(((((map__35298_35506.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35298_35506.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35298_35506):map__35298_35506);
var w_35508 = map__35298_35507__$1;
var msg_35509__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35298_35507__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_35510 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35298_35507__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_35511 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35298_35507__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_35512 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35298_35507__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_35512)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_35510),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_35511),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_35509__$1)].join(''));


var G__35514 = cljs.core.next(seq__35285_35499__$1);
var G__35515 = null;
var G__35516 = (0);
var G__35517 = (0);
seq__35285_35481 = G__35514;
chunk__35286_35482 = G__35515;
count__35287_35483 = G__35516;
i__35288_35484 = G__35517;
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

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__35268_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__35268_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
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
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__35304){
var map__35305 = p__35304;
var map__35305__$1 = (((((!((map__35305 == null))))?(((((map__35305.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35305.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35305):map__35305);
var msg = map__35305__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35305__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__35309 = cljs.core.seq(updates);
var chunk__35311 = null;
var count__35312 = (0);
var i__35313 = (0);
while(true){
if((i__35313 < count__35312)){
var path = chunk__35311.cljs$core$IIndexed$_nth$arity$2(null,i__35313);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__35351_35523 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__35355_35524 = null;
var count__35356_35525 = (0);
var i__35357_35526 = (0);
while(true){
if((i__35357_35526 < count__35356_35525)){
var node_35527 = chunk__35355_35524.cljs$core$IIndexed$_nth$arity$2(null,i__35357_35526);
if(cljs.core.not(node_35527.shadow$old)){
var path_match_35528 = shadow.cljs.devtools.client.browser.match_paths(node_35527.getAttribute("href"),path);
if(cljs.core.truth_(path_match_35528)){
var new_link_35529 = (function (){var G__35369 = node_35527.cloneNode(true);
G__35369.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_35528),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__35369;
})();
(node_35527.shadow$old = true);

(new_link_35529.onload = ((function (seq__35351_35523,chunk__35355_35524,count__35356_35525,i__35357_35526,seq__35309,chunk__35311,count__35312,i__35313,new_link_35529,path_match_35528,node_35527,path,map__35305,map__35305__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_35527);
});})(seq__35351_35523,chunk__35355_35524,count__35356_35525,i__35357_35526,seq__35309,chunk__35311,count__35312,i__35313,new_link_35529,path_match_35528,node_35527,path,map__35305,map__35305__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_35528], 0));

goog.dom.insertSiblingAfter(new_link_35529,node_35527);


var G__35530 = seq__35351_35523;
var G__35531 = chunk__35355_35524;
var G__35532 = count__35356_35525;
var G__35533 = (i__35357_35526 + (1));
seq__35351_35523 = G__35530;
chunk__35355_35524 = G__35531;
count__35356_35525 = G__35532;
i__35357_35526 = G__35533;
continue;
} else {
var G__35534 = seq__35351_35523;
var G__35535 = chunk__35355_35524;
var G__35536 = count__35356_35525;
var G__35537 = (i__35357_35526 + (1));
seq__35351_35523 = G__35534;
chunk__35355_35524 = G__35535;
count__35356_35525 = G__35536;
i__35357_35526 = G__35537;
continue;
}
} else {
var G__35538 = seq__35351_35523;
var G__35539 = chunk__35355_35524;
var G__35540 = count__35356_35525;
var G__35541 = (i__35357_35526 + (1));
seq__35351_35523 = G__35538;
chunk__35355_35524 = G__35539;
count__35356_35525 = G__35540;
i__35357_35526 = G__35541;
continue;
}
} else {
var temp__5735__auto___35543 = cljs.core.seq(seq__35351_35523);
if(temp__5735__auto___35543){
var seq__35351_35544__$1 = temp__5735__auto___35543;
if(cljs.core.chunked_seq_QMARK_(seq__35351_35544__$1)){
var c__4556__auto___35547 = cljs.core.chunk_first(seq__35351_35544__$1);
var G__35548 = cljs.core.chunk_rest(seq__35351_35544__$1);
var G__35549 = c__4556__auto___35547;
var G__35550 = cljs.core.count(c__4556__auto___35547);
var G__35551 = (0);
seq__35351_35523 = G__35548;
chunk__35355_35524 = G__35549;
count__35356_35525 = G__35550;
i__35357_35526 = G__35551;
continue;
} else {
var node_35553 = cljs.core.first(seq__35351_35544__$1);
if(cljs.core.not(node_35553.shadow$old)){
var path_match_35554 = shadow.cljs.devtools.client.browser.match_paths(node_35553.getAttribute("href"),path);
if(cljs.core.truth_(path_match_35554)){
var new_link_35556 = (function (){var G__35374 = node_35553.cloneNode(true);
G__35374.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_35554),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__35374;
})();
(node_35553.shadow$old = true);

(new_link_35556.onload = ((function (seq__35351_35523,chunk__35355_35524,count__35356_35525,i__35357_35526,seq__35309,chunk__35311,count__35312,i__35313,new_link_35556,path_match_35554,node_35553,seq__35351_35544__$1,temp__5735__auto___35543,path,map__35305,map__35305__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_35553);
});})(seq__35351_35523,chunk__35355_35524,count__35356_35525,i__35357_35526,seq__35309,chunk__35311,count__35312,i__35313,new_link_35556,path_match_35554,node_35553,seq__35351_35544__$1,temp__5735__auto___35543,path,map__35305,map__35305__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_35554], 0));

goog.dom.insertSiblingAfter(new_link_35556,node_35553);


var G__35557 = cljs.core.next(seq__35351_35544__$1);
var G__35558 = null;
var G__35559 = (0);
var G__35560 = (0);
seq__35351_35523 = G__35557;
chunk__35355_35524 = G__35558;
count__35356_35525 = G__35559;
i__35357_35526 = G__35560;
continue;
} else {
var G__35561 = cljs.core.next(seq__35351_35544__$1);
var G__35562 = null;
var G__35563 = (0);
var G__35564 = (0);
seq__35351_35523 = G__35561;
chunk__35355_35524 = G__35562;
count__35356_35525 = G__35563;
i__35357_35526 = G__35564;
continue;
}
} else {
var G__35565 = cljs.core.next(seq__35351_35544__$1);
var G__35566 = null;
var G__35567 = (0);
var G__35568 = (0);
seq__35351_35523 = G__35565;
chunk__35355_35524 = G__35566;
count__35356_35525 = G__35567;
i__35357_35526 = G__35568;
continue;
}
}
} else {
}
}
break;
}


var G__35569 = seq__35309;
var G__35570 = chunk__35311;
var G__35571 = count__35312;
var G__35572 = (i__35313 + (1));
seq__35309 = G__35569;
chunk__35311 = G__35570;
count__35312 = G__35571;
i__35313 = G__35572;
continue;
} else {
var G__35573 = seq__35309;
var G__35574 = chunk__35311;
var G__35575 = count__35312;
var G__35576 = (i__35313 + (1));
seq__35309 = G__35573;
chunk__35311 = G__35574;
count__35312 = G__35575;
i__35313 = G__35576;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__35309);
if(temp__5735__auto__){
var seq__35309__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35309__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__35309__$1);
var G__35579 = cljs.core.chunk_rest(seq__35309__$1);
var G__35580 = c__4556__auto__;
var G__35581 = cljs.core.count(c__4556__auto__);
var G__35582 = (0);
seq__35309 = G__35579;
chunk__35311 = G__35580;
count__35312 = G__35581;
i__35313 = G__35582;
continue;
} else {
var path = cljs.core.first(seq__35309__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__35375_35583 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__35379_35584 = null;
var count__35380_35585 = (0);
var i__35381_35586 = (0);
while(true){
if((i__35381_35586 < count__35380_35585)){
var node_35587 = chunk__35379_35584.cljs$core$IIndexed$_nth$arity$2(null,i__35381_35586);
if(cljs.core.not(node_35587.shadow$old)){
var path_match_35588 = shadow.cljs.devtools.client.browser.match_paths(node_35587.getAttribute("href"),path);
if(cljs.core.truth_(path_match_35588)){
var new_link_35589 = (function (){var G__35391 = node_35587.cloneNode(true);
G__35391.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_35588),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__35391;
})();
(node_35587.shadow$old = true);

(new_link_35589.onload = ((function (seq__35375_35583,chunk__35379_35584,count__35380_35585,i__35381_35586,seq__35309,chunk__35311,count__35312,i__35313,new_link_35589,path_match_35588,node_35587,path,seq__35309__$1,temp__5735__auto__,map__35305,map__35305__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_35587);
});})(seq__35375_35583,chunk__35379_35584,count__35380_35585,i__35381_35586,seq__35309,chunk__35311,count__35312,i__35313,new_link_35589,path_match_35588,node_35587,path,seq__35309__$1,temp__5735__auto__,map__35305,map__35305__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_35588], 0));

goog.dom.insertSiblingAfter(new_link_35589,node_35587);


var G__35594 = seq__35375_35583;
var G__35595 = chunk__35379_35584;
var G__35596 = count__35380_35585;
var G__35597 = (i__35381_35586 + (1));
seq__35375_35583 = G__35594;
chunk__35379_35584 = G__35595;
count__35380_35585 = G__35596;
i__35381_35586 = G__35597;
continue;
} else {
var G__35598 = seq__35375_35583;
var G__35599 = chunk__35379_35584;
var G__35600 = count__35380_35585;
var G__35601 = (i__35381_35586 + (1));
seq__35375_35583 = G__35598;
chunk__35379_35584 = G__35599;
count__35380_35585 = G__35600;
i__35381_35586 = G__35601;
continue;
}
} else {
var G__35602 = seq__35375_35583;
var G__35603 = chunk__35379_35584;
var G__35604 = count__35380_35585;
var G__35605 = (i__35381_35586 + (1));
seq__35375_35583 = G__35602;
chunk__35379_35584 = G__35603;
count__35380_35585 = G__35604;
i__35381_35586 = G__35605;
continue;
}
} else {
var temp__5735__auto___35606__$1 = cljs.core.seq(seq__35375_35583);
if(temp__5735__auto___35606__$1){
var seq__35375_35607__$1 = temp__5735__auto___35606__$1;
if(cljs.core.chunked_seq_QMARK_(seq__35375_35607__$1)){
var c__4556__auto___35610 = cljs.core.chunk_first(seq__35375_35607__$1);
var G__35611 = cljs.core.chunk_rest(seq__35375_35607__$1);
var G__35612 = c__4556__auto___35610;
var G__35613 = cljs.core.count(c__4556__auto___35610);
var G__35614 = (0);
seq__35375_35583 = G__35611;
chunk__35379_35584 = G__35612;
count__35380_35585 = G__35613;
i__35381_35586 = G__35614;
continue;
} else {
var node_35616 = cljs.core.first(seq__35375_35607__$1);
if(cljs.core.not(node_35616.shadow$old)){
var path_match_35617 = shadow.cljs.devtools.client.browser.match_paths(node_35616.getAttribute("href"),path);
if(cljs.core.truth_(path_match_35617)){
var new_link_35618 = (function (){var G__35396 = node_35616.cloneNode(true);
G__35396.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_35617),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__35396;
})();
(node_35616.shadow$old = true);

(new_link_35618.onload = ((function (seq__35375_35583,chunk__35379_35584,count__35380_35585,i__35381_35586,seq__35309,chunk__35311,count__35312,i__35313,new_link_35618,path_match_35617,node_35616,seq__35375_35607__$1,temp__5735__auto___35606__$1,path,seq__35309__$1,temp__5735__auto__,map__35305,map__35305__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_35616);
});})(seq__35375_35583,chunk__35379_35584,count__35380_35585,i__35381_35586,seq__35309,chunk__35311,count__35312,i__35313,new_link_35618,path_match_35617,node_35616,seq__35375_35607__$1,temp__5735__auto___35606__$1,path,seq__35309__$1,temp__5735__auto__,map__35305,map__35305__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_35617], 0));

goog.dom.insertSiblingAfter(new_link_35618,node_35616);


var G__35620 = cljs.core.next(seq__35375_35607__$1);
var G__35621 = null;
var G__35622 = (0);
var G__35623 = (0);
seq__35375_35583 = G__35620;
chunk__35379_35584 = G__35621;
count__35380_35585 = G__35622;
i__35381_35586 = G__35623;
continue;
} else {
var G__35624 = cljs.core.next(seq__35375_35607__$1);
var G__35625 = null;
var G__35626 = (0);
var G__35627 = (0);
seq__35375_35583 = G__35624;
chunk__35379_35584 = G__35625;
count__35380_35585 = G__35626;
i__35381_35586 = G__35627;
continue;
}
} else {
var G__35629 = cljs.core.next(seq__35375_35607__$1);
var G__35630 = null;
var G__35631 = (0);
var G__35632 = (0);
seq__35375_35583 = G__35629;
chunk__35379_35584 = G__35630;
count__35380_35585 = G__35631;
i__35381_35586 = G__35632;
continue;
}
}
} else {
}
}
break;
}


var G__35633 = cljs.core.next(seq__35309__$1);
var G__35634 = null;
var G__35635 = (0);
var G__35636 = (0);
seq__35309 = G__35633;
chunk__35311 = G__35634;
count__35312 = G__35635;
i__35313 = G__35636;
continue;
} else {
var G__35637 = cljs.core.next(seq__35309__$1);
var G__35638 = null;
var G__35639 = (0);
var G__35640 = (0);
seq__35309 = G__35637;
chunk__35311 = G__35638;
count__35312 = G__35639;
i__35313 = G__35640;
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
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(runtime,p__35397){
var map__35398 = p__35397;
var map__35398__$1 = (((((!((map__35398 == null))))?(((((map__35398.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35398.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35398):map__35398);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35398__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
return shadow.cljs.devtools.client.shared.load_sources(runtime,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return shadow.cljs.devtools.client.browser.devtools_msg("ready!");
}));
});
shadow.cljs.devtools.client.browser.runtime_info = (((typeof SHADOW_CONFIG !== 'undefined'))?shadow.json.to_clj.cljs$core$IFn$_invoke$arity$1(SHADOW_CONFIG):null);
shadow.cljs.devtools.client.browser.client_info = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.cljs.devtools.client.browser.runtime_info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null)], 0));
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

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,p__35407){
var map__35408 = p__35407;
var map__35408__$1 = (((((!((map__35408 == null))))?(((((map__35408.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35408.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35408):map__35408);
var _ = map__35408__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35408__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__35410,done,error){
var map__35411 = p__35410;
var map__35411__$1 = (((((!((map__35411 == null))))?(((((map__35411.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35411.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35411):map__35411);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35411__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__35413,done,error){
var map__35414 = p__35413;
var map__35414__$1 = (((((!((map__35414 == null))))?(((((map__35414.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35414.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35414):map__35414);
var msg = map__35414__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35414__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35414__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35414__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__35416){
var map__35417 = p__35416;
var map__35417__$1 = (((((!((map__35417 == null))))?(((((map__35417.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35417.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35417):map__35417);
var src = map__35417__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35417__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4115__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4115__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__35421 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__35421) : done.call(null,G__35421));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__35422){
var map__35423 = p__35422;
var map__35423__$1 = (((((!((map__35423 == null))))?(((((map__35423.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35423.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35423):map__35423);
var msg__$1 = map__35423__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35423__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e35426){var ex = e35426;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__35429){
var map__35430 = p__35429;
var map__35430__$1 = (((((!((map__35430 == null))))?(((((map__35430.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35430.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35430):map__35430);
var env = map__35430__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35430__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
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
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (p__35434){
var map__35435 = p__35434;
var map__35435__$1 = (((((!((map__35435 == null))))?(((((map__35435.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35435.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35435):map__35435);
var msg = map__35435__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35435__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
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
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__35437){
var map__35438 = p__35437;
var map__35438__$1 = (((((!((map__35438 == null))))?(((((map__35438.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35438.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35438):map__35438);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35438__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35438__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
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
}),(function (p__35440){
var map__35441 = p__35440;
var map__35441__$1 = (((((!((map__35441 == null))))?(((((map__35441.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35441.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35441):map__35441);
var svc = map__35441__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35441__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
