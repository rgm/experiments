goog.provide('shadow.remote.runtime.tap_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__35200,p__35201){
var map__35206 = p__35200;
var map__35206__$1 = (((((!((map__35206 == null))))?(((((map__35206.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35206.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35206):map__35206);
var svc = map__35206__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35206__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35206__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35206__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__35207 = p__35201;
var map__35207__$1 = (((((!((map__35207 == null))))?(((((map__35207.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35207.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35207):map__35207);
var msg = map__35207__$1;
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35207__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var summary = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35207__$1,new cljs.core.Keyword(null,"summary","summary",380847952));
var history = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35207__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__35207__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(subs_ref,cljs.core.assoc,from,msg);

if(cljs.core.truth_(history)){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-subscribed","tap-subscribed",-1882247432),new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (oid){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oid","oid",-768692334),oid,new cljs.core.Keyword(null,"summary","summary",380847952),shadow.remote.runtime.obj_support.obj_describe_STAR_(obj_support,oid)], null);
}),shadow.remote.runtime.obj_support.get_tap_history(obj_support,num)))], null));
} else {
return null;
}
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__35231,p__35232){
var map__35233 = p__35231;
var map__35233__$1 = (((((!((map__35233 == null))))?(((((map__35233.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35233.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35233):map__35233);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35233__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__35234 = p__35232;
var map__35234__$1 = (((((!((map__35234 == null))))?(((((map__35234.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35234.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35234):map__35234);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35234__$1,new cljs.core.Keyword(null,"from","from",1815293044));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,from);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__35244,p__35245){
var map__35246 = p__35244;
var map__35246__$1 = (((((!((map__35246 == null))))?(((((map__35246.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35246.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35246):map__35246);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35246__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35246__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__35247 = p__35245;
var map__35247__$1 = (((((!((map__35247 == null))))?(((((map__35247.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35247.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35247):map__35247);
var msg = map__35247__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__35247__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var tap_ids = shadow.remote.runtime.obj_support.get_tap_history(obj_support,num);
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__35250,tid){
var map__35251 = p__35250;
var map__35251__$1 = (((((!((map__35251 == null))))?(((((map__35251.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35251.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35251):map__35251);
var svc = map__35251__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35251__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__35260 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__35261 = null;
var count__35262 = (0);
var i__35263 = (0);
while(true){
if((i__35263 < count__35262)){
var vec__35272 = chunk__35261.cljs$core$IIndexed$_nth$arity$2(null,i__35263);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35272,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35272,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__35373 = seq__35260;
var G__35374 = chunk__35261;
var G__35375 = count__35262;
var G__35376 = (i__35263 + (1));
seq__35260 = G__35373;
chunk__35261 = G__35374;
count__35262 = G__35375;
i__35263 = G__35376;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__35260);
if(temp__5735__auto__){
var seq__35260__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35260__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__35260__$1);
var G__35378 = cljs.core.chunk_rest(seq__35260__$1);
var G__35379 = c__4556__auto__;
var G__35380 = cljs.core.count(c__4556__auto__);
var G__35381 = (0);
seq__35260 = G__35378;
chunk__35261 = G__35379;
count__35262 = G__35380;
i__35263 = G__35381;
continue;
} else {
var vec__35276 = cljs.core.first(seq__35260__$1);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35276,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35276,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__35382 = cljs.core.next(seq__35260__$1);
var G__35383 = null;
var G__35384 = (0);
var G__35385 = (0);
seq__35260 = G__35382;
chunk__35261 = G__35383;
count__35262 = G__35384;
i__35263 = G__35385;
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
});
var svc = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229),obj_support,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461),tap_fn,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911),subs_ref], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__35253_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__35253_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__35255_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__35255_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__35256_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__35256_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__35257_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__35257_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__35296){
var map__35297 = p__35296;
var map__35297__$1 = (((((!((map__35297 == null))))?(((((map__35297.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35297.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35297):map__35297);
var svc = map__35297__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35297__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35297__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
