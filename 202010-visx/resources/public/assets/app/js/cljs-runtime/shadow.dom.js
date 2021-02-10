goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_34446 = (function (this$){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (shadow.dom._to_dom[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4429__auto__.call(null,this$));
} else {
var m__4426__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4426__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_34446(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_34451 = (function (this$){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (shadow.dom._to_svg[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4429__auto__.call(null,this$));
} else {
var m__4426__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4426__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_34451(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__33483 = coll;
var G__33484 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__33483,G__33484) : shadow.dom.lazy_native_coll_seq.call(null,G__33483,G__33484));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__4126__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__33508 = arguments.length;
switch (G__33508) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__33514 = arguments.length;
switch (G__33514) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__33521 = arguments.length;
switch (G__33521) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__33531 = arguments.length;
switch (G__33531) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__33545 = arguments.length;
switch (G__33545) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__33551 = arguments.length;
switch (G__33551) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__4126__auto__ = (!((typeof document !== 'undefined')));
if(or__4126__auto__){
return or__4126__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e33558){if((e33558 instanceof Object)){
var e = e33558;
return console.log("didnt support attachEvent",el,e);
} else {
throw e33558;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__4126__auto__ = (!((typeof document !== 'undefined')));
if(or__4126__auto__){
return or__4126__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__33565 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__33566 = null;
var count__33567 = (0);
var i__33568 = (0);
while(true){
if((i__33568 < count__33567)){
var el = chunk__33566.cljs$core$IIndexed$_nth$arity$2(null,i__33568);
var handler_34519__$1 = ((function (seq__33565,chunk__33566,count__33567,i__33568,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__33565,chunk__33566,count__33567,i__33568,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_34519__$1);


var G__34520 = seq__33565;
var G__34521 = chunk__33566;
var G__34522 = count__33567;
var G__34523 = (i__33568 + (1));
seq__33565 = G__34520;
chunk__33566 = G__34521;
count__33567 = G__34522;
i__33568 = G__34523;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__33565);
if(temp__5735__auto__){
var seq__33565__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33565__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__33565__$1);
var G__34526 = cljs.core.chunk_rest(seq__33565__$1);
var G__34527 = c__4556__auto__;
var G__34528 = cljs.core.count(c__4556__auto__);
var G__34529 = (0);
seq__33565 = G__34526;
chunk__33566 = G__34527;
count__33567 = G__34528;
i__33568 = G__34529;
continue;
} else {
var el = cljs.core.first(seq__33565__$1);
var handler_34530__$1 = ((function (seq__33565,chunk__33566,count__33567,i__33568,el,seq__33565__$1,temp__5735__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__33565,chunk__33566,count__33567,i__33568,el,seq__33565__$1,temp__5735__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_34530__$1);


var G__34532 = cljs.core.next(seq__33565__$1);
var G__34533 = null;
var G__34534 = (0);
var G__34535 = (0);
seq__33565 = G__34532;
chunk__33566 = G__34533;
count__33567 = G__34534;
i__33568 = G__34535;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__33583 = arguments.length;
switch (G__33583) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__33598 = cljs.core.seq(events);
var chunk__33599 = null;
var count__33600 = (0);
var i__33601 = (0);
while(true){
if((i__33601 < count__33600)){
var vec__33615 = chunk__33599.cljs$core$IIndexed$_nth$arity$2(null,i__33601);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33615,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33615,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__34544 = seq__33598;
var G__34545 = chunk__33599;
var G__34546 = count__33600;
var G__34547 = (i__33601 + (1));
seq__33598 = G__34544;
chunk__33599 = G__34545;
count__33600 = G__34546;
i__33601 = G__34547;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__33598);
if(temp__5735__auto__){
var seq__33598__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33598__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__33598__$1);
var G__34548 = cljs.core.chunk_rest(seq__33598__$1);
var G__34549 = c__4556__auto__;
var G__34550 = cljs.core.count(c__4556__auto__);
var G__34551 = (0);
seq__33598 = G__34548;
chunk__33599 = G__34549;
count__33600 = G__34550;
i__33601 = G__34551;
continue;
} else {
var vec__33621 = cljs.core.first(seq__33598__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33621,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33621,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__34553 = cljs.core.next(seq__33598__$1);
var G__34554 = null;
var G__34555 = (0);
var G__34556 = (0);
seq__33598 = G__34553;
chunk__33599 = G__34554;
count__33600 = G__34555;
i__33601 = G__34556;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__33627 = cljs.core.seq(styles);
var chunk__33628 = null;
var count__33629 = (0);
var i__33630 = (0);
while(true){
if((i__33630 < count__33629)){
var vec__33646 = chunk__33628.cljs$core$IIndexed$_nth$arity$2(null,i__33630);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33646,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33646,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__34560 = seq__33627;
var G__34561 = chunk__33628;
var G__34562 = count__33629;
var G__34563 = (i__33630 + (1));
seq__33627 = G__34560;
chunk__33628 = G__34561;
count__33629 = G__34562;
i__33630 = G__34563;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__33627);
if(temp__5735__auto__){
var seq__33627__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33627__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__33627__$1);
var G__34564 = cljs.core.chunk_rest(seq__33627__$1);
var G__34565 = c__4556__auto__;
var G__34566 = cljs.core.count(c__4556__auto__);
var G__34567 = (0);
seq__33627 = G__34564;
chunk__33628 = G__34565;
count__33629 = G__34566;
i__33630 = G__34567;
continue;
} else {
var vec__33654 = cljs.core.first(seq__33627__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33654,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33654,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__34571 = cljs.core.next(seq__33627__$1);
var G__34572 = null;
var G__34573 = (0);
var G__34574 = (0);
seq__33627 = G__34571;
chunk__33628 = G__34572;
count__33629 = G__34573;
i__33630 = G__34574;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__33662_34575 = key;
var G__33662_34576__$1 = (((G__33662_34575 instanceof cljs.core.Keyword))?G__33662_34575.fqn:null);
switch (G__33662_34576__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_34582 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4126__auto__ = goog.string.startsWith(ks_34582,"data-");
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return goog.string.startsWith(ks_34582,"aria-");
}
})())){
el.setAttribute(ks_34582,value);
} else {
(el[ks_34582] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__33683){
var map__33685 = p__33683;
var map__33685__$1 = (((((!((map__33685 == null))))?(((((map__33685.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33685.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33685):map__33685);
var props = map__33685__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33685__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__33691 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33691,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33691,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33691,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__33695 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__33695,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__33695;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__33701 = arguments.length;
switch (G__33701) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5735__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5735__auto__)){
var n = temp__5735__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5735__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5735__auto__)){
var n = temp__5735__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__33708){
var vec__33709 = p__33708;
var seq__33710 = cljs.core.seq(vec__33709);
var first__33711 = cljs.core.first(seq__33710);
var seq__33710__$1 = cljs.core.next(seq__33710);
var nn = first__33711;
var first__33711__$1 = cljs.core.first(seq__33710__$1);
var seq__33710__$2 = cljs.core.next(seq__33710__$1);
var np = first__33711__$1;
var nc = seq__33710__$2;
var node = vec__33709;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__33713 = nn;
var G__33714 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__33713,G__33714) : create_fn.call(null,G__33713,G__33714));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__33715 = nn;
var G__33716 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__33715,G__33716) : create_fn.call(null,G__33715,G__33716));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__33718 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33718,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33718,(1),null);
var seq__33722_34624 = cljs.core.seq(node_children);
var chunk__33723_34625 = null;
var count__33724_34626 = (0);
var i__33725_34627 = (0);
while(true){
if((i__33725_34627 < count__33724_34626)){
var child_struct_34628 = chunk__33723_34625.cljs$core$IIndexed$_nth$arity$2(null,i__33725_34627);
var children_34630 = shadow.dom.dom_node(child_struct_34628);
if(cljs.core.seq_QMARK_(children_34630)){
var seq__33754_34632 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_34630));
var chunk__33756_34633 = null;
var count__33757_34634 = (0);
var i__33758_34635 = (0);
while(true){
if((i__33758_34635 < count__33757_34634)){
var child_34638 = chunk__33756_34633.cljs$core$IIndexed$_nth$arity$2(null,i__33758_34635);
if(cljs.core.truth_(child_34638)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_34638);


var G__34640 = seq__33754_34632;
var G__34641 = chunk__33756_34633;
var G__34642 = count__33757_34634;
var G__34643 = (i__33758_34635 + (1));
seq__33754_34632 = G__34640;
chunk__33756_34633 = G__34641;
count__33757_34634 = G__34642;
i__33758_34635 = G__34643;
continue;
} else {
var G__34644 = seq__33754_34632;
var G__34645 = chunk__33756_34633;
var G__34646 = count__33757_34634;
var G__34647 = (i__33758_34635 + (1));
seq__33754_34632 = G__34644;
chunk__33756_34633 = G__34645;
count__33757_34634 = G__34646;
i__33758_34635 = G__34647;
continue;
}
} else {
var temp__5735__auto___34648 = cljs.core.seq(seq__33754_34632);
if(temp__5735__auto___34648){
var seq__33754_34649__$1 = temp__5735__auto___34648;
if(cljs.core.chunked_seq_QMARK_(seq__33754_34649__$1)){
var c__4556__auto___34650 = cljs.core.chunk_first(seq__33754_34649__$1);
var G__34651 = cljs.core.chunk_rest(seq__33754_34649__$1);
var G__34652 = c__4556__auto___34650;
var G__34653 = cljs.core.count(c__4556__auto___34650);
var G__34654 = (0);
seq__33754_34632 = G__34651;
chunk__33756_34633 = G__34652;
count__33757_34634 = G__34653;
i__33758_34635 = G__34654;
continue;
} else {
var child_34655 = cljs.core.first(seq__33754_34649__$1);
if(cljs.core.truth_(child_34655)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_34655);


var G__34656 = cljs.core.next(seq__33754_34649__$1);
var G__34657 = null;
var G__34658 = (0);
var G__34659 = (0);
seq__33754_34632 = G__34656;
chunk__33756_34633 = G__34657;
count__33757_34634 = G__34658;
i__33758_34635 = G__34659;
continue;
} else {
var G__34660 = cljs.core.next(seq__33754_34649__$1);
var G__34661 = null;
var G__34662 = (0);
var G__34663 = (0);
seq__33754_34632 = G__34660;
chunk__33756_34633 = G__34661;
count__33757_34634 = G__34662;
i__33758_34635 = G__34663;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_34630);
}


var G__34664 = seq__33722_34624;
var G__34665 = chunk__33723_34625;
var G__34666 = count__33724_34626;
var G__34667 = (i__33725_34627 + (1));
seq__33722_34624 = G__34664;
chunk__33723_34625 = G__34665;
count__33724_34626 = G__34666;
i__33725_34627 = G__34667;
continue;
} else {
var temp__5735__auto___34668 = cljs.core.seq(seq__33722_34624);
if(temp__5735__auto___34668){
var seq__33722_34670__$1 = temp__5735__auto___34668;
if(cljs.core.chunked_seq_QMARK_(seq__33722_34670__$1)){
var c__4556__auto___34671 = cljs.core.chunk_first(seq__33722_34670__$1);
var G__34672 = cljs.core.chunk_rest(seq__33722_34670__$1);
var G__34673 = c__4556__auto___34671;
var G__34674 = cljs.core.count(c__4556__auto___34671);
var G__34675 = (0);
seq__33722_34624 = G__34672;
chunk__33723_34625 = G__34673;
count__33724_34626 = G__34674;
i__33725_34627 = G__34675;
continue;
} else {
var child_struct_34676 = cljs.core.first(seq__33722_34670__$1);
var children_34677 = shadow.dom.dom_node(child_struct_34676);
if(cljs.core.seq_QMARK_(children_34677)){
var seq__33769_34678 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_34677));
var chunk__33771_34679 = null;
var count__33772_34680 = (0);
var i__33773_34681 = (0);
while(true){
if((i__33773_34681 < count__33772_34680)){
var child_34682 = chunk__33771_34679.cljs$core$IIndexed$_nth$arity$2(null,i__33773_34681);
if(cljs.core.truth_(child_34682)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_34682);


var G__34683 = seq__33769_34678;
var G__34684 = chunk__33771_34679;
var G__34685 = count__33772_34680;
var G__34686 = (i__33773_34681 + (1));
seq__33769_34678 = G__34683;
chunk__33771_34679 = G__34684;
count__33772_34680 = G__34685;
i__33773_34681 = G__34686;
continue;
} else {
var G__34687 = seq__33769_34678;
var G__34688 = chunk__33771_34679;
var G__34689 = count__33772_34680;
var G__34690 = (i__33773_34681 + (1));
seq__33769_34678 = G__34687;
chunk__33771_34679 = G__34688;
count__33772_34680 = G__34689;
i__33773_34681 = G__34690;
continue;
}
} else {
var temp__5735__auto___34691__$1 = cljs.core.seq(seq__33769_34678);
if(temp__5735__auto___34691__$1){
var seq__33769_34692__$1 = temp__5735__auto___34691__$1;
if(cljs.core.chunked_seq_QMARK_(seq__33769_34692__$1)){
var c__4556__auto___34693 = cljs.core.chunk_first(seq__33769_34692__$1);
var G__34694 = cljs.core.chunk_rest(seq__33769_34692__$1);
var G__34695 = c__4556__auto___34693;
var G__34696 = cljs.core.count(c__4556__auto___34693);
var G__34697 = (0);
seq__33769_34678 = G__34694;
chunk__33771_34679 = G__34695;
count__33772_34680 = G__34696;
i__33773_34681 = G__34697;
continue;
} else {
var child_34698 = cljs.core.first(seq__33769_34692__$1);
if(cljs.core.truth_(child_34698)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_34698);


var G__34699 = cljs.core.next(seq__33769_34692__$1);
var G__34700 = null;
var G__34701 = (0);
var G__34702 = (0);
seq__33769_34678 = G__34699;
chunk__33771_34679 = G__34700;
count__33772_34680 = G__34701;
i__33773_34681 = G__34702;
continue;
} else {
var G__34704 = cljs.core.next(seq__33769_34692__$1);
var G__34705 = null;
var G__34706 = (0);
var G__34707 = (0);
seq__33769_34678 = G__34704;
chunk__33771_34679 = G__34705;
count__33772_34680 = G__34706;
i__33773_34681 = G__34707;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_34677);
}


var G__34709 = cljs.core.next(seq__33722_34670__$1);
var G__34710 = null;
var G__34711 = (0);
var G__34712 = (0);
seq__33722_34624 = G__34709;
chunk__33723_34625 = G__34710;
count__33724_34626 = G__34711;
i__33725_34627 = G__34712;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__33852 = cljs.core.seq(node);
var chunk__33853 = null;
var count__33854 = (0);
var i__33855 = (0);
while(true){
if((i__33855 < count__33854)){
var n = chunk__33853.cljs$core$IIndexed$_nth$arity$2(null,i__33855);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__34716 = seq__33852;
var G__34717 = chunk__33853;
var G__34718 = count__33854;
var G__34719 = (i__33855 + (1));
seq__33852 = G__34716;
chunk__33853 = G__34717;
count__33854 = G__34718;
i__33855 = G__34719;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__33852);
if(temp__5735__auto__){
var seq__33852__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33852__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__33852__$1);
var G__34721 = cljs.core.chunk_rest(seq__33852__$1);
var G__34722 = c__4556__auto__;
var G__34723 = cljs.core.count(c__4556__auto__);
var G__34724 = (0);
seq__33852 = G__34721;
chunk__33853 = G__34722;
count__33854 = G__34723;
i__33855 = G__34724;
continue;
} else {
var n = cljs.core.first(seq__33852__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__34725 = cljs.core.next(seq__33852__$1);
var G__34726 = null;
var G__34727 = (0);
var G__34728 = (0);
seq__33852 = G__34725;
chunk__33853 = G__34726;
count__33854 = G__34727;
i__33855 = G__34728;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__33882 = arguments.length;
switch (G__33882) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__33894 = arguments.length;
switch (G__33894) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__33912 = arguments.length;
switch (G__33912) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__4126__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__4742__auto__ = [];
var len__4736__auto___34735 = arguments.length;
var i__4737__auto___34736 = (0);
while(true){
if((i__4737__auto___34736 < len__4736__auto___34735)){
args__4742__auto__.push((arguments[i__4737__auto___34736]));

var G__34737 = (i__4737__auto___34736 + (1));
i__4737__auto___34736 = G__34737;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__33949_34742 = cljs.core.seq(nodes);
var chunk__33950_34743 = null;
var count__33951_34744 = (0);
var i__33952_34745 = (0);
while(true){
if((i__33952_34745 < count__33951_34744)){
var node_34746 = chunk__33950_34743.cljs$core$IIndexed$_nth$arity$2(null,i__33952_34745);
fragment.appendChild(shadow.dom._to_dom(node_34746));


var G__34747 = seq__33949_34742;
var G__34748 = chunk__33950_34743;
var G__34749 = count__33951_34744;
var G__34750 = (i__33952_34745 + (1));
seq__33949_34742 = G__34747;
chunk__33950_34743 = G__34748;
count__33951_34744 = G__34749;
i__33952_34745 = G__34750;
continue;
} else {
var temp__5735__auto___34751 = cljs.core.seq(seq__33949_34742);
if(temp__5735__auto___34751){
var seq__33949_34752__$1 = temp__5735__auto___34751;
if(cljs.core.chunked_seq_QMARK_(seq__33949_34752__$1)){
var c__4556__auto___34753 = cljs.core.chunk_first(seq__33949_34752__$1);
var G__34754 = cljs.core.chunk_rest(seq__33949_34752__$1);
var G__34755 = c__4556__auto___34753;
var G__34756 = cljs.core.count(c__4556__auto___34753);
var G__34757 = (0);
seq__33949_34742 = G__34754;
chunk__33950_34743 = G__34755;
count__33951_34744 = G__34756;
i__33952_34745 = G__34757;
continue;
} else {
var node_34758 = cljs.core.first(seq__33949_34752__$1);
fragment.appendChild(shadow.dom._to_dom(node_34758));


var G__34759 = cljs.core.next(seq__33949_34752__$1);
var G__34760 = null;
var G__34761 = (0);
var G__34762 = (0);
seq__33949_34742 = G__34759;
chunk__33950_34743 = G__34760;
count__33951_34744 = G__34761;
i__33952_34745 = G__34762;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq33940){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq33940));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__33971_34763 = cljs.core.seq(scripts);
var chunk__33972_34764 = null;
var count__33973_34765 = (0);
var i__33974_34766 = (0);
while(true){
if((i__33974_34766 < count__33973_34765)){
var vec__33993_34767 = chunk__33972_34764.cljs$core$IIndexed$_nth$arity$2(null,i__33974_34766);
var script_tag_34768 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33993_34767,(0),null);
var script_body_34769 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33993_34767,(1),null);
eval(script_body_34769);


var G__34770 = seq__33971_34763;
var G__34771 = chunk__33972_34764;
var G__34772 = count__33973_34765;
var G__34773 = (i__33974_34766 + (1));
seq__33971_34763 = G__34770;
chunk__33972_34764 = G__34771;
count__33973_34765 = G__34772;
i__33974_34766 = G__34773;
continue;
} else {
var temp__5735__auto___34774 = cljs.core.seq(seq__33971_34763);
if(temp__5735__auto___34774){
var seq__33971_34775__$1 = temp__5735__auto___34774;
if(cljs.core.chunked_seq_QMARK_(seq__33971_34775__$1)){
var c__4556__auto___34776 = cljs.core.chunk_first(seq__33971_34775__$1);
var G__34777 = cljs.core.chunk_rest(seq__33971_34775__$1);
var G__34778 = c__4556__auto___34776;
var G__34779 = cljs.core.count(c__4556__auto___34776);
var G__34780 = (0);
seq__33971_34763 = G__34777;
chunk__33972_34764 = G__34778;
count__33973_34765 = G__34779;
i__33974_34766 = G__34780;
continue;
} else {
var vec__33999_34781 = cljs.core.first(seq__33971_34775__$1);
var script_tag_34782 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33999_34781,(0),null);
var script_body_34783 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33999_34781,(1),null);
eval(script_body_34783);


var G__34784 = cljs.core.next(seq__33971_34775__$1);
var G__34785 = null;
var G__34786 = (0);
var G__34787 = (0);
seq__33971_34763 = G__34784;
chunk__33972_34764 = G__34785;
count__33973_34765 = G__34786;
i__33974_34766 = G__34787;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__34006){
var vec__34010 = p__34006;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34010,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34010,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__34034 = arguments.length;
switch (G__34034) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__34066 = cljs.core.seq(style_keys);
var chunk__34067 = null;
var count__34068 = (0);
var i__34069 = (0);
while(true){
if((i__34069 < count__34068)){
var it = chunk__34067.cljs$core$IIndexed$_nth$arity$2(null,i__34069);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__34796 = seq__34066;
var G__34797 = chunk__34067;
var G__34798 = count__34068;
var G__34799 = (i__34069 + (1));
seq__34066 = G__34796;
chunk__34067 = G__34797;
count__34068 = G__34798;
i__34069 = G__34799;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__34066);
if(temp__5735__auto__){
var seq__34066__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__34066__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__34066__$1);
var G__34800 = cljs.core.chunk_rest(seq__34066__$1);
var G__34801 = c__4556__auto__;
var G__34802 = cljs.core.count(c__4556__auto__);
var G__34803 = (0);
seq__34066 = G__34800;
chunk__34067 = G__34801;
count__34068 = G__34802;
i__34069 = G__34803;
continue;
} else {
var it = cljs.core.first(seq__34066__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__34804 = cljs.core.next(seq__34066__$1);
var G__34805 = null;
var G__34806 = (0);
var G__34807 = (0);
seq__34066 = G__34804;
chunk__34067 = G__34805;
count__34068 = G__34806;
i__34069 = G__34807;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k34074,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__34103 = k34074;
var G__34103__$1 = (((G__34103 instanceof cljs.core.Keyword))?G__34103.fqn:null);
switch (G__34103__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k34074,else__4383__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__34106){
var vec__34107 = p__34106;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34107,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34107,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#shadow.dom.Coordinate{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__34073){
var self__ = this;
var G__34073__$1 = this;
return (new cljs.core.RecordIter((0),G__34073__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this34075,other34076){
var self__ = this;
var this34075__$1 = this;
return (((!((other34076 == null)))) && ((this34075__$1.constructor === other34076.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this34075__$1.x,other34076.x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this34075__$1.y,other34076.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this34075__$1.__extmap,other34076.__extmap)));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__34073){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__34123 = cljs.core.keyword_identical_QMARK_;
var expr__34124 = k__4388__auto__;
if(cljs.core.truth_((pred__34123.cljs$core$IFn$_invoke$arity$2 ? pred__34123.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__34124) : pred__34123.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__34124)))){
return (new shadow.dom.Coordinate(G__34073,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__34123.cljs$core$IFn$_invoke$arity$2 ? pred__34123.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__34124) : pred__34123.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__34124)))){
return (new shadow.dom.Coordinate(self__.x,G__34073,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__34073),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__34073){
var self__ = this;
var this__4379__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__34073,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__34078){
var extmap__4419__auto__ = (function (){var G__34151 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__34078,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__34078)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__34151);
} else {
return G__34151;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__34078),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__34078),null,cljs.core.not_empty(extmap__4419__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k34159,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__34168 = k34159;
var G__34168__$1 = (((G__34168 instanceof cljs.core.Keyword))?G__34168.fqn:null);
switch (G__34168__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k34159,else__4383__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__34169){
var vec__34171 = p__34169;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34171,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34171,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#shadow.dom.Size{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__34158){
var self__ = this;
var G__34158__$1 = this;
return (new cljs.core.RecordIter((0),G__34158__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this34160,other34161){
var self__ = this;
var this34160__$1 = this;
return (((!((other34161 == null)))) && ((this34160__$1.constructor === other34161.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this34160__$1.w,other34161.w)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this34160__$1.h,other34161.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this34160__$1.__extmap,other34161.__extmap)));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__34158){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__34179 = cljs.core.keyword_identical_QMARK_;
var expr__34180 = k__4388__auto__;
if(cljs.core.truth_((pred__34179.cljs$core$IFn$_invoke$arity$2 ? pred__34179.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__34180) : pred__34179.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__34180)))){
return (new shadow.dom.Size(G__34158,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__34179.cljs$core$IFn$_invoke$arity$2 ? pred__34179.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__34180) : pred__34179.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__34180)))){
return (new shadow.dom.Size(self__.w,G__34158,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__34158),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__34158){
var self__ = this;
var this__4379__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__34158,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__34163){
var extmap__4419__auto__ = (function (){var G__34193 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__34163,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__34163)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__34193);
} else {
return G__34193;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__34163),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__34163),null,cljs.core.not_empty(extmap__4419__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__4610__auto__ = opts;
var l__4611__auto__ = a__4610__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__4611__auto__)){
var G__34831 = (i + (1));
var G__34832 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__34831;
ret = G__34832;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__34213){
var vec__34214 = p__34213;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34214,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34214,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__34220 = arguments.length;
switch (G__34220) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5733__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5733__auto__)){
var child = temp__5733__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__34837 = ps;
var G__34838 = (i + (1));
el__$1 = G__34837;
i = G__34838;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__34239 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34239,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34239,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34239,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__34244_34842 = cljs.core.seq(props);
var chunk__34245_34843 = null;
var count__34246_34844 = (0);
var i__34247_34845 = (0);
while(true){
if((i__34247_34845 < count__34246_34844)){
var vec__34261_34846 = chunk__34245_34843.cljs$core$IIndexed$_nth$arity$2(null,i__34247_34845);
var k_34847 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34261_34846,(0),null);
var v_34848 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34261_34846,(1),null);
el.setAttributeNS((function (){var temp__5735__auto__ = cljs.core.namespace(k_34847);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_34847),v_34848);


var G__34853 = seq__34244_34842;
var G__34854 = chunk__34245_34843;
var G__34855 = count__34246_34844;
var G__34856 = (i__34247_34845 + (1));
seq__34244_34842 = G__34853;
chunk__34245_34843 = G__34854;
count__34246_34844 = G__34855;
i__34247_34845 = G__34856;
continue;
} else {
var temp__5735__auto___34857 = cljs.core.seq(seq__34244_34842);
if(temp__5735__auto___34857){
var seq__34244_34858__$1 = temp__5735__auto___34857;
if(cljs.core.chunked_seq_QMARK_(seq__34244_34858__$1)){
var c__4556__auto___34859 = cljs.core.chunk_first(seq__34244_34858__$1);
var G__34860 = cljs.core.chunk_rest(seq__34244_34858__$1);
var G__34861 = c__4556__auto___34859;
var G__34862 = cljs.core.count(c__4556__auto___34859);
var G__34863 = (0);
seq__34244_34842 = G__34860;
chunk__34245_34843 = G__34861;
count__34246_34844 = G__34862;
i__34247_34845 = G__34863;
continue;
} else {
var vec__34270_34864 = cljs.core.first(seq__34244_34858__$1);
var k_34865 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34270_34864,(0),null);
var v_34866 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34270_34864,(1),null);
el.setAttributeNS((function (){var temp__5735__auto____$1 = cljs.core.namespace(k_34865);
if(cljs.core.truth_(temp__5735__auto____$1)){
var ns = temp__5735__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_34865),v_34866);


var G__34867 = cljs.core.next(seq__34244_34858__$1);
var G__34868 = null;
var G__34869 = (0);
var G__34870 = (0);
seq__34244_34842 = G__34867;
chunk__34245_34843 = G__34868;
count__34246_34844 = G__34869;
i__34247_34845 = G__34870;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__34283 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34283,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34283,(1),null);
var seq__34289_34871 = cljs.core.seq(node_children);
var chunk__34291_34872 = null;
var count__34292_34873 = (0);
var i__34293_34874 = (0);
while(true){
if((i__34293_34874 < count__34292_34873)){
var child_struct_34875 = chunk__34291_34872.cljs$core$IIndexed$_nth$arity$2(null,i__34293_34874);
if((!((child_struct_34875 == null)))){
if(typeof child_struct_34875 === 'string'){
var text_34876 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_34876),child_struct_34875].join(''));
} else {
var children_34877 = shadow.dom.svg_node(child_struct_34875);
if(cljs.core.seq_QMARK_(children_34877)){
var seq__34337_34878 = cljs.core.seq(children_34877);
var chunk__34339_34879 = null;
var count__34340_34880 = (0);
var i__34341_34881 = (0);
while(true){
if((i__34341_34881 < count__34340_34880)){
var child_34882 = chunk__34339_34879.cljs$core$IIndexed$_nth$arity$2(null,i__34341_34881);
if(cljs.core.truth_(child_34882)){
node.appendChild(child_34882);


var G__34883 = seq__34337_34878;
var G__34884 = chunk__34339_34879;
var G__34885 = count__34340_34880;
var G__34886 = (i__34341_34881 + (1));
seq__34337_34878 = G__34883;
chunk__34339_34879 = G__34884;
count__34340_34880 = G__34885;
i__34341_34881 = G__34886;
continue;
} else {
var G__34887 = seq__34337_34878;
var G__34888 = chunk__34339_34879;
var G__34889 = count__34340_34880;
var G__34890 = (i__34341_34881 + (1));
seq__34337_34878 = G__34887;
chunk__34339_34879 = G__34888;
count__34340_34880 = G__34889;
i__34341_34881 = G__34890;
continue;
}
} else {
var temp__5735__auto___34895 = cljs.core.seq(seq__34337_34878);
if(temp__5735__auto___34895){
var seq__34337_34896__$1 = temp__5735__auto___34895;
if(cljs.core.chunked_seq_QMARK_(seq__34337_34896__$1)){
var c__4556__auto___34897 = cljs.core.chunk_first(seq__34337_34896__$1);
var G__34898 = cljs.core.chunk_rest(seq__34337_34896__$1);
var G__34899 = c__4556__auto___34897;
var G__34900 = cljs.core.count(c__4556__auto___34897);
var G__34901 = (0);
seq__34337_34878 = G__34898;
chunk__34339_34879 = G__34899;
count__34340_34880 = G__34900;
i__34341_34881 = G__34901;
continue;
} else {
var child_34903 = cljs.core.first(seq__34337_34896__$1);
if(cljs.core.truth_(child_34903)){
node.appendChild(child_34903);


var G__34904 = cljs.core.next(seq__34337_34896__$1);
var G__34905 = null;
var G__34906 = (0);
var G__34907 = (0);
seq__34337_34878 = G__34904;
chunk__34339_34879 = G__34905;
count__34340_34880 = G__34906;
i__34341_34881 = G__34907;
continue;
} else {
var G__34908 = cljs.core.next(seq__34337_34896__$1);
var G__34909 = null;
var G__34910 = (0);
var G__34911 = (0);
seq__34337_34878 = G__34908;
chunk__34339_34879 = G__34909;
count__34340_34880 = G__34910;
i__34341_34881 = G__34911;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_34877);
}
}


var G__34912 = seq__34289_34871;
var G__34913 = chunk__34291_34872;
var G__34914 = count__34292_34873;
var G__34915 = (i__34293_34874 + (1));
seq__34289_34871 = G__34912;
chunk__34291_34872 = G__34913;
count__34292_34873 = G__34914;
i__34293_34874 = G__34915;
continue;
} else {
var G__34916 = seq__34289_34871;
var G__34917 = chunk__34291_34872;
var G__34918 = count__34292_34873;
var G__34919 = (i__34293_34874 + (1));
seq__34289_34871 = G__34916;
chunk__34291_34872 = G__34917;
count__34292_34873 = G__34918;
i__34293_34874 = G__34919;
continue;
}
} else {
var temp__5735__auto___34920 = cljs.core.seq(seq__34289_34871);
if(temp__5735__auto___34920){
var seq__34289_34921__$1 = temp__5735__auto___34920;
if(cljs.core.chunked_seq_QMARK_(seq__34289_34921__$1)){
var c__4556__auto___34924 = cljs.core.chunk_first(seq__34289_34921__$1);
var G__34925 = cljs.core.chunk_rest(seq__34289_34921__$1);
var G__34926 = c__4556__auto___34924;
var G__34927 = cljs.core.count(c__4556__auto___34924);
var G__34928 = (0);
seq__34289_34871 = G__34925;
chunk__34291_34872 = G__34926;
count__34292_34873 = G__34927;
i__34293_34874 = G__34928;
continue;
} else {
var child_struct_34929 = cljs.core.first(seq__34289_34921__$1);
if((!((child_struct_34929 == null)))){
if(typeof child_struct_34929 === 'string'){
var text_34930 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_34930),child_struct_34929].join(''));
} else {
var children_34932 = shadow.dom.svg_node(child_struct_34929);
if(cljs.core.seq_QMARK_(children_34932)){
var seq__34361_34933 = cljs.core.seq(children_34932);
var chunk__34363_34934 = null;
var count__34364_34935 = (0);
var i__34365_34936 = (0);
while(true){
if((i__34365_34936 < count__34364_34935)){
var child_34937 = chunk__34363_34934.cljs$core$IIndexed$_nth$arity$2(null,i__34365_34936);
if(cljs.core.truth_(child_34937)){
node.appendChild(child_34937);


var G__34938 = seq__34361_34933;
var G__34939 = chunk__34363_34934;
var G__34940 = count__34364_34935;
var G__34941 = (i__34365_34936 + (1));
seq__34361_34933 = G__34938;
chunk__34363_34934 = G__34939;
count__34364_34935 = G__34940;
i__34365_34936 = G__34941;
continue;
} else {
var G__34942 = seq__34361_34933;
var G__34943 = chunk__34363_34934;
var G__34944 = count__34364_34935;
var G__34945 = (i__34365_34936 + (1));
seq__34361_34933 = G__34942;
chunk__34363_34934 = G__34943;
count__34364_34935 = G__34944;
i__34365_34936 = G__34945;
continue;
}
} else {
var temp__5735__auto___34946__$1 = cljs.core.seq(seq__34361_34933);
if(temp__5735__auto___34946__$1){
var seq__34361_34947__$1 = temp__5735__auto___34946__$1;
if(cljs.core.chunked_seq_QMARK_(seq__34361_34947__$1)){
var c__4556__auto___34948 = cljs.core.chunk_first(seq__34361_34947__$1);
var G__34949 = cljs.core.chunk_rest(seq__34361_34947__$1);
var G__34950 = c__4556__auto___34948;
var G__34951 = cljs.core.count(c__4556__auto___34948);
var G__34952 = (0);
seq__34361_34933 = G__34949;
chunk__34363_34934 = G__34950;
count__34364_34935 = G__34951;
i__34365_34936 = G__34952;
continue;
} else {
var child_34953 = cljs.core.first(seq__34361_34947__$1);
if(cljs.core.truth_(child_34953)){
node.appendChild(child_34953);


var G__34955 = cljs.core.next(seq__34361_34947__$1);
var G__34956 = null;
var G__34957 = (0);
var G__34958 = (0);
seq__34361_34933 = G__34955;
chunk__34363_34934 = G__34956;
count__34364_34935 = G__34957;
i__34365_34936 = G__34958;
continue;
} else {
var G__34962 = cljs.core.next(seq__34361_34947__$1);
var G__34963 = null;
var G__34964 = (0);
var G__34965 = (0);
seq__34361_34933 = G__34962;
chunk__34363_34934 = G__34963;
count__34364_34935 = G__34964;
i__34365_34936 = G__34965;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_34932);
}
}


var G__34967 = cljs.core.next(seq__34289_34921__$1);
var G__34968 = null;
var G__34969 = (0);
var G__34970 = (0);
seq__34289_34871 = G__34967;
chunk__34291_34872 = G__34968;
count__34292_34873 = G__34969;
i__34293_34874 = G__34970;
continue;
} else {
var G__34971 = cljs.core.next(seq__34289_34921__$1);
var G__34972 = null;
var G__34973 = (0);
var G__34974 = (0);
seq__34289_34871 = G__34971;
chunk__34291_34872 = G__34972;
count__34292_34873 = G__34973;
i__34293_34874 = G__34974;
continue;
}
}
} else {
}
}
break;
}

return node;
});
goog.object.set(shadow.dom.SVGElement,"string",true);

goog.object.set(shadow.dom._to_svg,"string",(function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

goog.object.set(shadow.dom.SVGElement,"null",true);

goog.object.set(shadow.dom._to_svg,"null",(function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__4742__auto__ = [];
var len__4736__auto___34975 = arguments.length;
var i__4737__auto___34976 = (0);
while(true){
if((i__4737__auto___34976 < len__4736__auto___34975)){
args__4742__auto__.push((arguments[i__4737__auto___34976]));

var G__34977 = (i__4737__auto___34976 + (1));
i__4737__auto___34976 = G__34977;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq34376){
var G__34377 = cljs.core.first(seq34376);
var seq34376__$1 = cljs.core.next(seq34376);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34377,seq34376__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__34387 = arguments.length;
switch (G__34387) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(event),event_fn);

if(cljs.core.truth_((function (){var and__4115__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__4115__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__4115__auto__;
}
})())){
var c__30737__auto___34981 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30738__auto__ = (function (){var switch__30604__auto__ = (function (state_34407){
var state_val_34408 = (state_34407[(1)]);
if((state_val_34408 === (1))){
var state_34407__$1 = state_34407;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34407__$1,(2),once_or_cleanup);
} else {
if((state_val_34408 === (2))){
var inst_34404 = (state_34407[(2)]);
var inst_34405 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_34407__$1 = (function (){var statearr_34416 = state_34407;
(statearr_34416[(7)] = inst_34404);

return statearr_34416;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_34407__$1,inst_34405);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__30605__auto__ = null;
var shadow$dom$state_machine__30605__auto____0 = (function (){
var statearr_34417 = [null,null,null,null,null,null,null,null];
(statearr_34417[(0)] = shadow$dom$state_machine__30605__auto__);

(statearr_34417[(1)] = (1));

return statearr_34417;
});
var shadow$dom$state_machine__30605__auto____1 = (function (state_34407){
while(true){
var ret_value__30606__auto__ = (function (){try{while(true){
var result__30607__auto__ = switch__30604__auto__(state_34407);
if(cljs.core.keyword_identical_QMARK_(result__30607__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30607__auto__;
}
break;
}
}catch (e34419){var ex__30608__auto__ = e34419;
var statearr_34422_34983 = state_34407;
(statearr_34422_34983[(2)] = ex__30608__auto__);


if(cljs.core.seq((state_34407[(4)]))){
var statearr_34426_34984 = state_34407;
(statearr_34426_34984[(1)] = cljs.core.first((state_34407[(4)])));

} else {
throw ex__30608__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30606__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34988 = state_34407;
state_34407 = G__34988;
continue;
} else {
return ret_value__30606__auto__;
}
break;
}
});
shadow$dom$state_machine__30605__auto__ = function(state_34407){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__30605__auto____0.call(this);
case 1:
return shadow$dom$state_machine__30605__auto____1.call(this,state_34407);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__30605__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__30605__auto____0;
shadow$dom$state_machine__30605__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__30605__auto____1;
return shadow$dom$state_machine__30605__auto__;
})()
})();
var state__30739__auto__ = (function (){var statearr_34430 = f__30738__auto__();
(statearr_34430[(6)] = c__30737__auto___34981);

return statearr_34430;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30739__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
