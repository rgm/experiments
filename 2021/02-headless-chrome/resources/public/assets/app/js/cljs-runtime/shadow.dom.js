goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_32476 = (function (this$){
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
return shadow$dom$IElement$_to_dom$dyn_32476(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_32480 = (function (this$){
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
return shadow$dom$SVGElement$_to_svg$dyn_32480(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__31623 = coll;
var G__31624 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__31623,G__31624) : shadow.dom.lazy_native_coll_seq.call(null,G__31623,G__31624));
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
var G__31641 = arguments.length;
switch (G__31641) {
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
var G__31646 = arguments.length;
switch (G__31646) {
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
var G__31654 = arguments.length;
switch (G__31654) {
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
var G__31668 = arguments.length;
switch (G__31668) {
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
var G__31680 = arguments.length;
switch (G__31680) {
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
var G__31692 = arguments.length;
switch (G__31692) {
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
}catch (e31701){if((e31701 instanceof Object)){
var e = e31701;
return console.log("didnt support attachEvent",el,e);
} else {
throw e31701;

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
var seq__31707 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__31708 = null;
var count__31709 = (0);
var i__31710 = (0);
while(true){
if((i__31710 < count__31709)){
var el = chunk__31708.cljs$core$IIndexed$_nth$arity$2(null,i__31710);
var handler_32519__$1 = ((function (seq__31707,chunk__31708,count__31709,i__31710,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__31707,chunk__31708,count__31709,i__31710,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_32519__$1);


var G__32524 = seq__31707;
var G__32525 = chunk__31708;
var G__32526 = count__31709;
var G__32527 = (i__31710 + (1));
seq__31707 = G__32524;
chunk__31708 = G__32525;
count__31709 = G__32526;
i__31710 = G__32527;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__31707);
if(temp__5735__auto__){
var seq__31707__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__31707__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__31707__$1);
var G__32530 = cljs.core.chunk_rest(seq__31707__$1);
var G__32531 = c__4556__auto__;
var G__32532 = cljs.core.count(c__4556__auto__);
var G__32533 = (0);
seq__31707 = G__32530;
chunk__31708 = G__32531;
count__31709 = G__32532;
i__31710 = G__32533;
continue;
} else {
var el = cljs.core.first(seq__31707__$1);
var handler_32536__$1 = ((function (seq__31707,chunk__31708,count__31709,i__31710,el,seq__31707__$1,temp__5735__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__31707,chunk__31708,count__31709,i__31710,el,seq__31707__$1,temp__5735__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_32536__$1);


var G__32538 = cljs.core.next(seq__31707__$1);
var G__32539 = null;
var G__32540 = (0);
var G__32541 = (0);
seq__31707 = G__32538;
chunk__31708 = G__32539;
count__31709 = G__32540;
i__31710 = G__32541;
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
var G__31723 = arguments.length;
switch (G__31723) {
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
var seq__31732 = cljs.core.seq(events);
var chunk__31733 = null;
var count__31734 = (0);
var i__31735 = (0);
while(true){
if((i__31735 < count__31734)){
var vec__31744 = chunk__31733.cljs$core$IIndexed$_nth$arity$2(null,i__31735);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31744,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31744,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__32555 = seq__31732;
var G__32556 = chunk__31733;
var G__32557 = count__31734;
var G__32558 = (i__31735 + (1));
seq__31732 = G__32555;
chunk__31733 = G__32556;
count__31734 = G__32557;
i__31735 = G__32558;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__31732);
if(temp__5735__auto__){
var seq__31732__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__31732__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__31732__$1);
var G__32563 = cljs.core.chunk_rest(seq__31732__$1);
var G__32564 = c__4556__auto__;
var G__32565 = cljs.core.count(c__4556__auto__);
var G__32566 = (0);
seq__31732 = G__32563;
chunk__31733 = G__32564;
count__31734 = G__32565;
i__31735 = G__32566;
continue;
} else {
var vec__31751 = cljs.core.first(seq__31732__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31751,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31751,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__32569 = cljs.core.next(seq__31732__$1);
var G__32570 = null;
var G__32571 = (0);
var G__32572 = (0);
seq__31732 = G__32569;
chunk__31733 = G__32570;
count__31734 = G__32571;
i__31735 = G__32572;
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
var seq__31757 = cljs.core.seq(styles);
var chunk__31758 = null;
var count__31759 = (0);
var i__31760 = (0);
while(true){
if((i__31760 < count__31759)){
var vec__31772 = chunk__31758.cljs$core$IIndexed$_nth$arity$2(null,i__31760);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31772,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31772,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__32582 = seq__31757;
var G__32583 = chunk__31758;
var G__32584 = count__31759;
var G__32585 = (i__31760 + (1));
seq__31757 = G__32582;
chunk__31758 = G__32583;
count__31759 = G__32584;
i__31760 = G__32585;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__31757);
if(temp__5735__auto__){
var seq__31757__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__31757__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__31757__$1);
var G__32596 = cljs.core.chunk_rest(seq__31757__$1);
var G__32597 = c__4556__auto__;
var G__32598 = cljs.core.count(c__4556__auto__);
var G__32599 = (0);
seq__31757 = G__32596;
chunk__31758 = G__32597;
count__31759 = G__32598;
i__31760 = G__32599;
continue;
} else {
var vec__31777 = cljs.core.first(seq__31757__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31777,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31777,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__32606 = cljs.core.next(seq__31757__$1);
var G__32607 = null;
var G__32608 = (0);
var G__32609 = (0);
seq__31757 = G__32606;
chunk__31758 = G__32607;
count__31759 = G__32608;
i__31760 = G__32609;
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
var G__31784_32611 = key;
var G__31784_32612__$1 = (((G__31784_32611 instanceof cljs.core.Keyword))?G__31784_32611.fqn:null);
switch (G__31784_32612__$1) {
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
var ks_32625 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4126__auto__ = goog.string.startsWith(ks_32625,"data-");
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return goog.string.startsWith(ks_32625,"aria-");
}
})())){
el.setAttribute(ks_32625,value);
} else {
(el[ks_32625] = value);
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
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__31810){
var map__31812 = p__31810;
var map__31812__$1 = (((((!((map__31812 == null))))?(((((map__31812.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31812.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31812):map__31812);
var props = map__31812__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31812__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__31814 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31814,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31814,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31814,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__31819 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__31819,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__31819;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__31823 = arguments.length;
switch (G__31823) {
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

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__31835){
var vec__31836 = p__31835;
var seq__31837 = cljs.core.seq(vec__31836);
var first__31838 = cljs.core.first(seq__31837);
var seq__31837__$1 = cljs.core.next(seq__31837);
var nn = first__31838;
var first__31838__$1 = cljs.core.first(seq__31837__$1);
var seq__31837__$2 = cljs.core.next(seq__31837__$1);
var np = first__31838__$1;
var nc = seq__31837__$2;
var node = vec__31836;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__31841 = nn;
var G__31842 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__31841,G__31842) : create_fn.call(null,G__31841,G__31842));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__31844 = nn;
var G__31845 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__31844,G__31845) : create_fn.call(null,G__31844,G__31845));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__31851 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31851,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31851,(1),null);
var seq__31860_32692 = cljs.core.seq(node_children);
var chunk__31861_32693 = null;
var count__31862_32694 = (0);
var i__31863_32695 = (0);
while(true){
if((i__31863_32695 < count__31862_32694)){
var child_struct_32699 = chunk__31861_32693.cljs$core$IIndexed$_nth$arity$2(null,i__31863_32695);
var children_32701 = shadow.dom.dom_node(child_struct_32699);
if(cljs.core.seq_QMARK_(children_32701)){
var seq__31920_32702 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_32701));
var chunk__31922_32703 = null;
var count__31923_32704 = (0);
var i__31924_32705 = (0);
while(true){
if((i__31924_32705 < count__31923_32704)){
var child_32711 = chunk__31922_32703.cljs$core$IIndexed$_nth$arity$2(null,i__31924_32705);
if(cljs.core.truth_(child_32711)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_32711);


var G__32716 = seq__31920_32702;
var G__32717 = chunk__31922_32703;
var G__32718 = count__31923_32704;
var G__32719 = (i__31924_32705 + (1));
seq__31920_32702 = G__32716;
chunk__31922_32703 = G__32717;
count__31923_32704 = G__32718;
i__31924_32705 = G__32719;
continue;
} else {
var G__32724 = seq__31920_32702;
var G__32725 = chunk__31922_32703;
var G__32726 = count__31923_32704;
var G__32727 = (i__31924_32705 + (1));
seq__31920_32702 = G__32724;
chunk__31922_32703 = G__32725;
count__31923_32704 = G__32726;
i__31924_32705 = G__32727;
continue;
}
} else {
var temp__5735__auto___32728 = cljs.core.seq(seq__31920_32702);
if(temp__5735__auto___32728){
var seq__31920_32730__$1 = temp__5735__auto___32728;
if(cljs.core.chunked_seq_QMARK_(seq__31920_32730__$1)){
var c__4556__auto___32735 = cljs.core.chunk_first(seq__31920_32730__$1);
var G__32736 = cljs.core.chunk_rest(seq__31920_32730__$1);
var G__32737 = c__4556__auto___32735;
var G__32738 = cljs.core.count(c__4556__auto___32735);
var G__32739 = (0);
seq__31920_32702 = G__32736;
chunk__31922_32703 = G__32737;
count__31923_32704 = G__32738;
i__31924_32705 = G__32739;
continue;
} else {
var child_32741 = cljs.core.first(seq__31920_32730__$1);
if(cljs.core.truth_(child_32741)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_32741);


var G__32742 = cljs.core.next(seq__31920_32730__$1);
var G__32743 = null;
var G__32744 = (0);
var G__32745 = (0);
seq__31920_32702 = G__32742;
chunk__31922_32703 = G__32743;
count__31923_32704 = G__32744;
i__31924_32705 = G__32745;
continue;
} else {
var G__32746 = cljs.core.next(seq__31920_32730__$1);
var G__32747 = null;
var G__32748 = (0);
var G__32749 = (0);
seq__31920_32702 = G__32746;
chunk__31922_32703 = G__32747;
count__31923_32704 = G__32748;
i__31924_32705 = G__32749;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_32701);
}


var G__32750 = seq__31860_32692;
var G__32751 = chunk__31861_32693;
var G__32752 = count__31862_32694;
var G__32753 = (i__31863_32695 + (1));
seq__31860_32692 = G__32750;
chunk__31861_32693 = G__32751;
count__31862_32694 = G__32752;
i__31863_32695 = G__32753;
continue;
} else {
var temp__5735__auto___32756 = cljs.core.seq(seq__31860_32692);
if(temp__5735__auto___32756){
var seq__31860_32757__$1 = temp__5735__auto___32756;
if(cljs.core.chunked_seq_QMARK_(seq__31860_32757__$1)){
var c__4556__auto___32758 = cljs.core.chunk_first(seq__31860_32757__$1);
var G__32759 = cljs.core.chunk_rest(seq__31860_32757__$1);
var G__32760 = c__4556__auto___32758;
var G__32761 = cljs.core.count(c__4556__auto___32758);
var G__32762 = (0);
seq__31860_32692 = G__32759;
chunk__31861_32693 = G__32760;
count__31862_32694 = G__32761;
i__31863_32695 = G__32762;
continue;
} else {
var child_struct_32768 = cljs.core.first(seq__31860_32757__$1);
var children_32770 = shadow.dom.dom_node(child_struct_32768);
if(cljs.core.seq_QMARK_(children_32770)){
var seq__31941_32771 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_32770));
var chunk__31943_32772 = null;
var count__31944_32773 = (0);
var i__31945_32774 = (0);
while(true){
if((i__31945_32774 < count__31944_32773)){
var child_32776 = chunk__31943_32772.cljs$core$IIndexed$_nth$arity$2(null,i__31945_32774);
if(cljs.core.truth_(child_32776)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_32776);


var G__32778 = seq__31941_32771;
var G__32779 = chunk__31943_32772;
var G__32780 = count__31944_32773;
var G__32781 = (i__31945_32774 + (1));
seq__31941_32771 = G__32778;
chunk__31943_32772 = G__32779;
count__31944_32773 = G__32780;
i__31945_32774 = G__32781;
continue;
} else {
var G__32784 = seq__31941_32771;
var G__32785 = chunk__31943_32772;
var G__32786 = count__31944_32773;
var G__32787 = (i__31945_32774 + (1));
seq__31941_32771 = G__32784;
chunk__31943_32772 = G__32785;
count__31944_32773 = G__32786;
i__31945_32774 = G__32787;
continue;
}
} else {
var temp__5735__auto___32791__$1 = cljs.core.seq(seq__31941_32771);
if(temp__5735__auto___32791__$1){
var seq__31941_32792__$1 = temp__5735__auto___32791__$1;
if(cljs.core.chunked_seq_QMARK_(seq__31941_32792__$1)){
var c__4556__auto___32794 = cljs.core.chunk_first(seq__31941_32792__$1);
var G__32796 = cljs.core.chunk_rest(seq__31941_32792__$1);
var G__32797 = c__4556__auto___32794;
var G__32798 = cljs.core.count(c__4556__auto___32794);
var G__32799 = (0);
seq__31941_32771 = G__32796;
chunk__31943_32772 = G__32797;
count__31944_32773 = G__32798;
i__31945_32774 = G__32799;
continue;
} else {
var child_32801 = cljs.core.first(seq__31941_32792__$1);
if(cljs.core.truth_(child_32801)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_32801);


var G__32802 = cljs.core.next(seq__31941_32792__$1);
var G__32803 = null;
var G__32804 = (0);
var G__32805 = (0);
seq__31941_32771 = G__32802;
chunk__31943_32772 = G__32803;
count__31944_32773 = G__32804;
i__31945_32774 = G__32805;
continue;
} else {
var G__32806 = cljs.core.next(seq__31941_32792__$1);
var G__32807 = null;
var G__32808 = (0);
var G__32809 = (0);
seq__31941_32771 = G__32806;
chunk__31943_32772 = G__32807;
count__31944_32773 = G__32808;
i__31945_32774 = G__32809;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_32770);
}


var G__32812 = cljs.core.next(seq__31860_32757__$1);
var G__32813 = null;
var G__32814 = (0);
var G__32815 = (0);
seq__31860_32692 = G__32812;
chunk__31861_32693 = G__32813;
count__31862_32694 = G__32814;
i__31863_32695 = G__32815;
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
var seq__31974 = cljs.core.seq(node);
var chunk__31975 = null;
var count__31976 = (0);
var i__31977 = (0);
while(true){
if((i__31977 < count__31976)){
var n = chunk__31975.cljs$core$IIndexed$_nth$arity$2(null,i__31977);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__32833 = seq__31974;
var G__32834 = chunk__31975;
var G__32835 = count__31976;
var G__32836 = (i__31977 + (1));
seq__31974 = G__32833;
chunk__31975 = G__32834;
count__31976 = G__32835;
i__31977 = G__32836;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__31974);
if(temp__5735__auto__){
var seq__31974__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__31974__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__31974__$1);
var G__32839 = cljs.core.chunk_rest(seq__31974__$1);
var G__32840 = c__4556__auto__;
var G__32841 = cljs.core.count(c__4556__auto__);
var G__32842 = (0);
seq__31974 = G__32839;
chunk__31975 = G__32840;
count__31976 = G__32841;
i__31977 = G__32842;
continue;
} else {
var n = cljs.core.first(seq__31974__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__32847 = cljs.core.next(seq__31974__$1);
var G__32848 = null;
var G__32849 = (0);
var G__32850 = (0);
seq__31974 = G__32847;
chunk__31975 = G__32848;
count__31976 = G__32849;
i__31977 = G__32850;
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
var G__31986 = arguments.length;
switch (G__31986) {
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
var G__31989 = arguments.length;
switch (G__31989) {
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
var G__31994 = arguments.length;
switch (G__31994) {
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
var len__4736__auto___32887 = arguments.length;
var i__4737__auto___32889 = (0);
while(true){
if((i__4737__auto___32889 < len__4736__auto___32887)){
args__4742__auto__.push((arguments[i__4737__auto___32889]));

var G__32892 = (i__4737__auto___32889 + (1));
i__4737__auto___32889 = G__32892;
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
var seq__32009_32894 = cljs.core.seq(nodes);
var chunk__32010_32895 = null;
var count__32011_32896 = (0);
var i__32012_32897 = (0);
while(true){
if((i__32012_32897 < count__32011_32896)){
var node_32898 = chunk__32010_32895.cljs$core$IIndexed$_nth$arity$2(null,i__32012_32897);
fragment.appendChild(shadow.dom._to_dom(node_32898));


var G__32900 = seq__32009_32894;
var G__32901 = chunk__32010_32895;
var G__32902 = count__32011_32896;
var G__32903 = (i__32012_32897 + (1));
seq__32009_32894 = G__32900;
chunk__32010_32895 = G__32901;
count__32011_32896 = G__32902;
i__32012_32897 = G__32903;
continue;
} else {
var temp__5735__auto___32905 = cljs.core.seq(seq__32009_32894);
if(temp__5735__auto___32905){
var seq__32009_32906__$1 = temp__5735__auto___32905;
if(cljs.core.chunked_seq_QMARK_(seq__32009_32906__$1)){
var c__4556__auto___32907 = cljs.core.chunk_first(seq__32009_32906__$1);
var G__32910 = cljs.core.chunk_rest(seq__32009_32906__$1);
var G__32911 = c__4556__auto___32907;
var G__32912 = cljs.core.count(c__4556__auto___32907);
var G__32913 = (0);
seq__32009_32894 = G__32910;
chunk__32010_32895 = G__32911;
count__32011_32896 = G__32912;
i__32012_32897 = G__32913;
continue;
} else {
var node_32915 = cljs.core.first(seq__32009_32906__$1);
fragment.appendChild(shadow.dom._to_dom(node_32915));


var G__32916 = cljs.core.next(seq__32009_32906__$1);
var G__32917 = null;
var G__32918 = (0);
var G__32919 = (0);
seq__32009_32894 = G__32916;
chunk__32010_32895 = G__32917;
count__32011_32896 = G__32918;
i__32012_32897 = G__32919;
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
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq31999){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq31999));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__32053_32925 = cljs.core.seq(scripts);
var chunk__32054_32926 = null;
var count__32055_32927 = (0);
var i__32056_32928 = (0);
while(true){
if((i__32056_32928 < count__32055_32927)){
var vec__32069_32930 = chunk__32054_32926.cljs$core$IIndexed$_nth$arity$2(null,i__32056_32928);
var script_tag_32931 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32069_32930,(0),null);
var script_body_32932 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32069_32930,(1),null);
eval(script_body_32932);


var G__32936 = seq__32053_32925;
var G__32937 = chunk__32054_32926;
var G__32938 = count__32055_32927;
var G__32939 = (i__32056_32928 + (1));
seq__32053_32925 = G__32936;
chunk__32054_32926 = G__32937;
count__32055_32927 = G__32938;
i__32056_32928 = G__32939;
continue;
} else {
var temp__5735__auto___32942 = cljs.core.seq(seq__32053_32925);
if(temp__5735__auto___32942){
var seq__32053_32943__$1 = temp__5735__auto___32942;
if(cljs.core.chunked_seq_QMARK_(seq__32053_32943__$1)){
var c__4556__auto___32945 = cljs.core.chunk_first(seq__32053_32943__$1);
var G__32947 = cljs.core.chunk_rest(seq__32053_32943__$1);
var G__32948 = c__4556__auto___32945;
var G__32949 = cljs.core.count(c__4556__auto___32945);
var G__32950 = (0);
seq__32053_32925 = G__32947;
chunk__32054_32926 = G__32948;
count__32055_32927 = G__32949;
i__32056_32928 = G__32950;
continue;
} else {
var vec__32073_32952 = cljs.core.first(seq__32053_32943__$1);
var script_tag_32953 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32073_32952,(0),null);
var script_body_32954 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32073_32952,(1),null);
eval(script_body_32954);


var G__32958 = cljs.core.next(seq__32053_32943__$1);
var G__32959 = null;
var G__32960 = (0);
var G__32961 = (0);
seq__32053_32925 = G__32958;
chunk__32054_32926 = G__32959;
count__32055_32927 = G__32960;
i__32056_32928 = G__32961;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__32076){
var vec__32082 = p__32076;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32082,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32082,(1),null);
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
var G__32096 = arguments.length;
switch (G__32096) {
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
var seq__32107 = cljs.core.seq(style_keys);
var chunk__32108 = null;
var count__32109 = (0);
var i__32110 = (0);
while(true){
if((i__32110 < count__32109)){
var it = chunk__32108.cljs$core$IIndexed$_nth$arity$2(null,i__32110);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__32985 = seq__32107;
var G__32986 = chunk__32108;
var G__32987 = count__32109;
var G__32988 = (i__32110 + (1));
seq__32107 = G__32985;
chunk__32108 = G__32986;
count__32109 = G__32987;
i__32110 = G__32988;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__32107);
if(temp__5735__auto__){
var seq__32107__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32107__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__32107__$1);
var G__32991 = cljs.core.chunk_rest(seq__32107__$1);
var G__32992 = c__4556__auto__;
var G__32993 = cljs.core.count(c__4556__auto__);
var G__32994 = (0);
seq__32107 = G__32991;
chunk__32108 = G__32992;
count__32109 = G__32993;
i__32110 = G__32994;
continue;
} else {
var it = cljs.core.first(seq__32107__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__32996 = cljs.core.next(seq__32107__$1);
var G__32997 = null;
var G__32998 = (0);
var G__32999 = (0);
seq__32107 = G__32996;
chunk__32108 = G__32997;
count__32109 = G__32998;
i__32110 = G__32999;
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

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k32117,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__32136 = k32117;
var G__32136__$1 = (((G__32136 instanceof cljs.core.Keyword))?G__32136.fqn:null);
switch (G__32136__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k32117,else__4383__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__32140){
var vec__32141 = p__32140;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32141,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32141,(1),null);
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

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__32116){
var self__ = this;
var G__32116__$1 = this;
return (new cljs.core.RecordIter((0),G__32116__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this32118,other32119){
var self__ = this;
var this32118__$1 = this;
return (((!((other32119 == null)))) && ((this32118__$1.constructor === other32119.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this32118__$1.x,other32119.x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this32118__$1.y,other32119.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this32118__$1.__extmap,other32119.__extmap)));
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

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__32116){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__32168 = cljs.core.keyword_identical_QMARK_;
var expr__32169 = k__4388__auto__;
if(cljs.core.truth_((pred__32168.cljs$core$IFn$_invoke$arity$2 ? pred__32168.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__32169) : pred__32168.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__32169)))){
return (new shadow.dom.Coordinate(G__32116,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__32168.cljs$core$IFn$_invoke$arity$2 ? pred__32168.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__32169) : pred__32168.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__32169)))){
return (new shadow.dom.Coordinate(self__.x,G__32116,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__32116),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__32116){
var self__ = this;
var this__4379__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__32116,self__.__extmap,self__.__hash));
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
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__32126){
var extmap__4419__auto__ = (function (){var G__32184 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__32126,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__32126)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__32184);
} else {
return G__32184;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__32126),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__32126),null,cljs.core.not_empty(extmap__4419__auto__),null));
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

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k32187,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__32195 = k32187;
var G__32195__$1 = (((G__32195 instanceof cljs.core.Keyword))?G__32195.fqn:null);
switch (G__32195__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k32187,else__4383__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__32200){
var vec__32201 = p__32200;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32201,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32201,(1),null);
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

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__32186){
var self__ = this;
var G__32186__$1 = this;
return (new cljs.core.RecordIter((0),G__32186__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this32188,other32189){
var self__ = this;
var this32188__$1 = this;
return (((!((other32189 == null)))) && ((this32188__$1.constructor === other32189.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this32188__$1.w,other32189.w)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this32188__$1.h,other32189.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this32188__$1.__extmap,other32189.__extmap)));
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

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__32186){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__32223 = cljs.core.keyword_identical_QMARK_;
var expr__32224 = k__4388__auto__;
if(cljs.core.truth_((pred__32223.cljs$core$IFn$_invoke$arity$2 ? pred__32223.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__32224) : pred__32223.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__32224)))){
return (new shadow.dom.Size(G__32186,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__32223.cljs$core$IFn$_invoke$arity$2 ? pred__32223.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__32224) : pred__32223.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__32224)))){
return (new shadow.dom.Size(self__.w,G__32186,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__32186),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__32186){
var self__ = this;
var this__4379__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__32186,self__.__extmap,self__.__hash));
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
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__32190){
var extmap__4419__auto__ = (function (){var G__32245 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__32190,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__32190)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__32245);
} else {
return G__32245;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__32190),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__32190),null,cljs.core.not_empty(extmap__4419__auto__),null));
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
var G__33131 = (i + (1));
var G__33132 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__33131;
ret = G__33132;
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
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__32283){
var vec__32284 = p__32283;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32284,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32284,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__32290 = arguments.length;
switch (G__32290) {
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
var G__33143 = ps;
var G__33144 = (i + (1));
el__$1 = G__33143;
i = G__33144;
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
var vec__32309 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32309,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32309,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32309,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__32312_33164 = cljs.core.seq(props);
var chunk__32313_33165 = null;
var count__32314_33166 = (0);
var i__32315_33167 = (0);
while(true){
if((i__32315_33167 < count__32314_33166)){
var vec__32326_33170 = chunk__32313_33165.cljs$core$IIndexed$_nth$arity$2(null,i__32315_33167);
var k_33171 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32326_33170,(0),null);
var v_33172 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32326_33170,(1),null);
el.setAttributeNS((function (){var temp__5735__auto__ = cljs.core.namespace(k_33171);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_33171),v_33172);


var G__33174 = seq__32312_33164;
var G__33175 = chunk__32313_33165;
var G__33176 = count__32314_33166;
var G__33177 = (i__32315_33167 + (1));
seq__32312_33164 = G__33174;
chunk__32313_33165 = G__33175;
count__32314_33166 = G__33176;
i__32315_33167 = G__33177;
continue;
} else {
var temp__5735__auto___33180 = cljs.core.seq(seq__32312_33164);
if(temp__5735__auto___33180){
var seq__32312_33181__$1 = temp__5735__auto___33180;
if(cljs.core.chunked_seq_QMARK_(seq__32312_33181__$1)){
var c__4556__auto___33182 = cljs.core.chunk_first(seq__32312_33181__$1);
var G__33183 = cljs.core.chunk_rest(seq__32312_33181__$1);
var G__33184 = c__4556__auto___33182;
var G__33185 = cljs.core.count(c__4556__auto___33182);
var G__33186 = (0);
seq__32312_33164 = G__33183;
chunk__32313_33165 = G__33184;
count__32314_33166 = G__33185;
i__32315_33167 = G__33186;
continue;
} else {
var vec__32336_33187 = cljs.core.first(seq__32312_33181__$1);
var k_33188 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32336_33187,(0),null);
var v_33189 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32336_33187,(1),null);
el.setAttributeNS((function (){var temp__5735__auto____$1 = cljs.core.namespace(k_33188);
if(cljs.core.truth_(temp__5735__auto____$1)){
var ns = temp__5735__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_33188),v_33189);


var G__33197 = cljs.core.next(seq__32312_33181__$1);
var G__33198 = null;
var G__33199 = (0);
var G__33200 = (0);
seq__32312_33164 = G__33197;
chunk__32313_33165 = G__33198;
count__32314_33166 = G__33199;
i__32315_33167 = G__33200;
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
var vec__32353 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32353,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32353,(1),null);
var seq__32358_33202 = cljs.core.seq(node_children);
var chunk__32360_33203 = null;
var count__32361_33204 = (0);
var i__32362_33205 = (0);
while(true){
if((i__32362_33205 < count__32361_33204)){
var child_struct_33206 = chunk__32360_33203.cljs$core$IIndexed$_nth$arity$2(null,i__32362_33205);
if((!((child_struct_33206 == null)))){
if(typeof child_struct_33206 === 'string'){
var text_33207 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_33207),child_struct_33206].join(''));
} else {
var children_33208 = shadow.dom.svg_node(child_struct_33206);
if(cljs.core.seq_QMARK_(children_33208)){
var seq__32395_33209 = cljs.core.seq(children_33208);
var chunk__32397_33210 = null;
var count__32398_33211 = (0);
var i__32399_33212 = (0);
while(true){
if((i__32399_33212 < count__32398_33211)){
var child_33213 = chunk__32397_33210.cljs$core$IIndexed$_nth$arity$2(null,i__32399_33212);
if(cljs.core.truth_(child_33213)){
node.appendChild(child_33213);


var G__33214 = seq__32395_33209;
var G__33215 = chunk__32397_33210;
var G__33216 = count__32398_33211;
var G__33217 = (i__32399_33212 + (1));
seq__32395_33209 = G__33214;
chunk__32397_33210 = G__33215;
count__32398_33211 = G__33216;
i__32399_33212 = G__33217;
continue;
} else {
var G__33219 = seq__32395_33209;
var G__33220 = chunk__32397_33210;
var G__33221 = count__32398_33211;
var G__33222 = (i__32399_33212 + (1));
seq__32395_33209 = G__33219;
chunk__32397_33210 = G__33220;
count__32398_33211 = G__33221;
i__32399_33212 = G__33222;
continue;
}
} else {
var temp__5735__auto___33223 = cljs.core.seq(seq__32395_33209);
if(temp__5735__auto___33223){
var seq__32395_33224__$1 = temp__5735__auto___33223;
if(cljs.core.chunked_seq_QMARK_(seq__32395_33224__$1)){
var c__4556__auto___33225 = cljs.core.chunk_first(seq__32395_33224__$1);
var G__33226 = cljs.core.chunk_rest(seq__32395_33224__$1);
var G__33227 = c__4556__auto___33225;
var G__33228 = cljs.core.count(c__4556__auto___33225);
var G__33229 = (0);
seq__32395_33209 = G__33226;
chunk__32397_33210 = G__33227;
count__32398_33211 = G__33228;
i__32399_33212 = G__33229;
continue;
} else {
var child_33230 = cljs.core.first(seq__32395_33224__$1);
if(cljs.core.truth_(child_33230)){
node.appendChild(child_33230);


var G__33231 = cljs.core.next(seq__32395_33224__$1);
var G__33232 = null;
var G__33233 = (0);
var G__33234 = (0);
seq__32395_33209 = G__33231;
chunk__32397_33210 = G__33232;
count__32398_33211 = G__33233;
i__32399_33212 = G__33234;
continue;
} else {
var G__33235 = cljs.core.next(seq__32395_33224__$1);
var G__33236 = null;
var G__33237 = (0);
var G__33238 = (0);
seq__32395_33209 = G__33235;
chunk__32397_33210 = G__33236;
count__32398_33211 = G__33237;
i__32399_33212 = G__33238;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_33208);
}
}


var G__33239 = seq__32358_33202;
var G__33240 = chunk__32360_33203;
var G__33241 = count__32361_33204;
var G__33242 = (i__32362_33205 + (1));
seq__32358_33202 = G__33239;
chunk__32360_33203 = G__33240;
count__32361_33204 = G__33241;
i__32362_33205 = G__33242;
continue;
} else {
var G__33243 = seq__32358_33202;
var G__33244 = chunk__32360_33203;
var G__33245 = count__32361_33204;
var G__33246 = (i__32362_33205 + (1));
seq__32358_33202 = G__33243;
chunk__32360_33203 = G__33244;
count__32361_33204 = G__33245;
i__32362_33205 = G__33246;
continue;
}
} else {
var temp__5735__auto___33247 = cljs.core.seq(seq__32358_33202);
if(temp__5735__auto___33247){
var seq__32358_33248__$1 = temp__5735__auto___33247;
if(cljs.core.chunked_seq_QMARK_(seq__32358_33248__$1)){
var c__4556__auto___33249 = cljs.core.chunk_first(seq__32358_33248__$1);
var G__33250 = cljs.core.chunk_rest(seq__32358_33248__$1);
var G__33251 = c__4556__auto___33249;
var G__33252 = cljs.core.count(c__4556__auto___33249);
var G__33253 = (0);
seq__32358_33202 = G__33250;
chunk__32360_33203 = G__33251;
count__32361_33204 = G__33252;
i__32362_33205 = G__33253;
continue;
} else {
var child_struct_33254 = cljs.core.first(seq__32358_33248__$1);
if((!((child_struct_33254 == null)))){
if(typeof child_struct_33254 === 'string'){
var text_33255 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_33255),child_struct_33254].join(''));
} else {
var children_33256 = shadow.dom.svg_node(child_struct_33254);
if(cljs.core.seq_QMARK_(children_33256)){
var seq__32407_33257 = cljs.core.seq(children_33256);
var chunk__32409_33258 = null;
var count__32410_33259 = (0);
var i__32411_33260 = (0);
while(true){
if((i__32411_33260 < count__32410_33259)){
var child_33261 = chunk__32409_33258.cljs$core$IIndexed$_nth$arity$2(null,i__32411_33260);
if(cljs.core.truth_(child_33261)){
node.appendChild(child_33261);


var G__33262 = seq__32407_33257;
var G__33263 = chunk__32409_33258;
var G__33264 = count__32410_33259;
var G__33265 = (i__32411_33260 + (1));
seq__32407_33257 = G__33262;
chunk__32409_33258 = G__33263;
count__32410_33259 = G__33264;
i__32411_33260 = G__33265;
continue;
} else {
var G__33266 = seq__32407_33257;
var G__33267 = chunk__32409_33258;
var G__33268 = count__32410_33259;
var G__33269 = (i__32411_33260 + (1));
seq__32407_33257 = G__33266;
chunk__32409_33258 = G__33267;
count__32410_33259 = G__33268;
i__32411_33260 = G__33269;
continue;
}
} else {
var temp__5735__auto___33270__$1 = cljs.core.seq(seq__32407_33257);
if(temp__5735__auto___33270__$1){
var seq__32407_33271__$1 = temp__5735__auto___33270__$1;
if(cljs.core.chunked_seq_QMARK_(seq__32407_33271__$1)){
var c__4556__auto___33272 = cljs.core.chunk_first(seq__32407_33271__$1);
var G__33276 = cljs.core.chunk_rest(seq__32407_33271__$1);
var G__33277 = c__4556__auto___33272;
var G__33278 = cljs.core.count(c__4556__auto___33272);
var G__33279 = (0);
seq__32407_33257 = G__33276;
chunk__32409_33258 = G__33277;
count__32410_33259 = G__33278;
i__32411_33260 = G__33279;
continue;
} else {
var child_33280 = cljs.core.first(seq__32407_33271__$1);
if(cljs.core.truth_(child_33280)){
node.appendChild(child_33280);


var G__33281 = cljs.core.next(seq__32407_33271__$1);
var G__33282 = null;
var G__33283 = (0);
var G__33284 = (0);
seq__32407_33257 = G__33281;
chunk__32409_33258 = G__33282;
count__32410_33259 = G__33283;
i__32411_33260 = G__33284;
continue;
} else {
var G__33285 = cljs.core.next(seq__32407_33271__$1);
var G__33286 = null;
var G__33287 = (0);
var G__33288 = (0);
seq__32407_33257 = G__33285;
chunk__32409_33258 = G__33286;
count__32410_33259 = G__33287;
i__32411_33260 = G__33288;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_33256);
}
}


var G__33293 = cljs.core.next(seq__32358_33248__$1);
var G__33294 = null;
var G__33295 = (0);
var G__33296 = (0);
seq__32358_33202 = G__33293;
chunk__32360_33203 = G__33294;
count__32361_33204 = G__33295;
i__32362_33205 = G__33296;
continue;
} else {
var G__33297 = cljs.core.next(seq__32358_33248__$1);
var G__33298 = null;
var G__33299 = (0);
var G__33300 = (0);
seq__32358_33202 = G__33297;
chunk__32360_33203 = G__33298;
count__32361_33204 = G__33299;
i__32362_33205 = G__33300;
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
var len__4736__auto___33309 = arguments.length;
var i__4737__auto___33310 = (0);
while(true){
if((i__4737__auto___33310 < len__4736__auto___33309)){
args__4742__auto__.push((arguments[i__4737__auto___33310]));

var G__33311 = (i__4737__auto___33310 + (1));
i__4737__auto___33310 = G__33311;
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
(shadow.dom.svg.cljs$lang$applyTo = (function (seq32422){
var G__32423 = cljs.core.first(seq32422);
var seq32422__$1 = cljs.core.next(seq32422);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__32423,seq32422__$1);
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
var G__32434 = arguments.length;
switch (G__32434) {
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
var c__28761__auto___33316 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28762__auto__ = (function (){var switch__28584__auto__ = (function (state_32449){
var state_val_32450 = (state_32449[(1)]);
if((state_val_32450 === (1))){
var state_32449__$1 = state_32449;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32449__$1,(2),once_or_cleanup);
} else {
if((state_val_32450 === (2))){
var inst_32446 = (state_32449[(2)]);
var inst_32447 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_32449__$1 = (function (){var statearr_32454 = state_32449;
(statearr_32454[(7)] = inst_32446);

return statearr_32454;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_32449__$1,inst_32447);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__28585__auto__ = null;
var shadow$dom$state_machine__28585__auto____0 = (function (){
var statearr_32456 = [null,null,null,null,null,null,null,null];
(statearr_32456[(0)] = shadow$dom$state_machine__28585__auto__);

(statearr_32456[(1)] = (1));

return statearr_32456;
});
var shadow$dom$state_machine__28585__auto____1 = (function (state_32449){
while(true){
var ret_value__28586__auto__ = (function (){try{while(true){
var result__28587__auto__ = switch__28584__auto__(state_32449);
if(cljs.core.keyword_identical_QMARK_(result__28587__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28587__auto__;
}
break;
}
}catch (e32457){var ex__28588__auto__ = e32457;
var statearr_32458_33317 = state_32449;
(statearr_32458_33317[(2)] = ex__28588__auto__);


if(cljs.core.seq((state_32449[(4)]))){
var statearr_32459_33318 = state_32449;
(statearr_32459_33318[(1)] = cljs.core.first((state_32449[(4)])));

} else {
throw ex__28588__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28586__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33319 = state_32449;
state_32449 = G__33319;
continue;
} else {
return ret_value__28586__auto__;
}
break;
}
});
shadow$dom$state_machine__28585__auto__ = function(state_32449){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__28585__auto____0.call(this);
case 1:
return shadow$dom$state_machine__28585__auto____1.call(this,state_32449);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__28585__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__28585__auto____0;
shadow$dom$state_machine__28585__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__28585__auto____1;
return shadow$dom$state_machine__28585__auto__;
})()
})();
var state__28763__auto__ = (function (){var statearr_32464 = f__28762__auto__();
(statearr_32464[(6)] = c__28761__auto___33316);

return statearr_32464;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28763__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
