goog.provide('shadow.dom');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('goog.dom.forms');
goog.require('goog.dom.classlist');
goog.require('goog.style');
goog.require('goog.style.transition');
goog.require('goog.string');
goog.require('clojure.string');
goog.require('cljs.core.async');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_30718 = (function (this$){
var x__4422__auto__ = (((this$ == null))?null:this$);
var m__4423__auto__ = (shadow.dom._to_dom[goog.typeOf(x__4422__auto__)]);
if((!((m__4423__auto__ == null)))){
return (m__4423__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4423__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4423__auto__.call(null,this$));
} else {
var m__4420__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__4420__auto__ == null)))){
return (m__4420__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4420__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4420__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_30718(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_30723 = (function (this$){
var x__4422__auto__ = (((this$ == null))?null:this$);
var m__4423__auto__ = (shadow.dom._to_svg[goog.typeOf(x__4422__auto__)]);
if((!((m__4423__auto__ == null)))){
return (m__4423__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4423__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4423__auto__.call(null,this$));
} else {
var m__4420__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__4420__auto__ == null)))){
return (m__4420__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4420__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4420__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_30723(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__29935 = coll;
var G__29936 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__29935,G__29936) : shadow.dom.lazy_native_coll_seq.call(null,G__29935,G__29936));
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
var or__4120__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
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

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__4363__auto__,writer__4364__auto__,opt__4365__auto__){
return cljs.core._write(writer__4364__auto__,"shadow.dom/NativeColl");
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
var G__29985 = arguments.length;
switch (G__29985) {
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
var G__29992 = arguments.length;
switch (G__29992) {
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
var G__29996 = arguments.length;
switch (G__29996) {
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
var G__30004 = arguments.length;
switch (G__30004) {
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
var G__30015 = arguments.length;
switch (G__30015) {
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
var G__30020 = arguments.length;
switch (G__30020) {
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

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__4120__auto__ = (!((typeof document !== 'undefined')));
if(or__4120__auto__){
return or__4120__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e30030){if((e30030 instanceof Object)){
var e = e30030;
return console.log("didnt support attachEvent",el,e);
} else {
throw e30030;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__4120__auto__ = (!((typeof document !== 'undefined')));
if(or__4120__auto__){
return or__4120__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__30043 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__30044 = null;
var count__30045 = (0);
var i__30046 = (0);
while(true){
if((i__30046 < count__30045)){
var el = chunk__30044.cljs$core$IIndexed$_nth$arity$2(null,i__30046);
var handler_30769__$1 = ((function (seq__30043,chunk__30044,count__30045,i__30046,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__30043,chunk__30044,count__30045,i__30046,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_30769__$1);


var G__30770 = seq__30043;
var G__30771 = chunk__30044;
var G__30772 = count__30045;
var G__30773 = (i__30046 + (1));
seq__30043 = G__30770;
chunk__30044 = G__30771;
count__30045 = G__30772;
i__30046 = G__30773;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__30043);
if(temp__5735__auto__){
var seq__30043__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__30043__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__30043__$1);
var G__30774 = cljs.core.chunk_rest(seq__30043__$1);
var G__30775 = c__4550__auto__;
var G__30776 = cljs.core.count(c__4550__auto__);
var G__30777 = (0);
seq__30043 = G__30774;
chunk__30044 = G__30775;
count__30045 = G__30776;
i__30046 = G__30777;
continue;
} else {
var el = cljs.core.first(seq__30043__$1);
var handler_30778__$1 = ((function (seq__30043,chunk__30044,count__30045,i__30046,el,seq__30043__$1,temp__5735__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__30043,chunk__30044,count__30045,i__30046,el,seq__30043__$1,temp__5735__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_30778__$1);


var G__30779 = cljs.core.next(seq__30043__$1);
var G__30780 = null;
var G__30781 = (0);
var G__30782 = (0);
seq__30043 = G__30779;
chunk__30044 = G__30780;
count__30045 = G__30781;
i__30046 = G__30782;
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
var G__30059 = arguments.length;
switch (G__30059) {
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
var seq__30067 = cljs.core.seq(events);
var chunk__30068 = null;
var count__30069 = (0);
var i__30070 = (0);
while(true){
if((i__30070 < count__30069)){
var vec__30086 = chunk__30068.cljs$core$IIndexed$_nth$arity$2(null,i__30070);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30086,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30086,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__30792 = seq__30067;
var G__30793 = chunk__30068;
var G__30794 = count__30069;
var G__30795 = (i__30070 + (1));
seq__30067 = G__30792;
chunk__30068 = G__30793;
count__30069 = G__30794;
i__30070 = G__30795;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__30067);
if(temp__5735__auto__){
var seq__30067__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__30067__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__30067__$1);
var G__30797 = cljs.core.chunk_rest(seq__30067__$1);
var G__30798 = c__4550__auto__;
var G__30799 = cljs.core.count(c__4550__auto__);
var G__30800 = (0);
seq__30067 = G__30797;
chunk__30068 = G__30798;
count__30069 = G__30799;
i__30070 = G__30800;
continue;
} else {
var vec__30090 = cljs.core.first(seq__30067__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30090,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30090,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__30804 = cljs.core.next(seq__30067__$1);
var G__30805 = null;
var G__30806 = (0);
var G__30807 = (0);
seq__30067 = G__30804;
chunk__30068 = G__30805;
count__30069 = G__30806;
i__30070 = G__30807;
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
var seq__30094 = cljs.core.seq(styles);
var chunk__30095 = null;
var count__30096 = (0);
var i__30097 = (0);
while(true){
if((i__30097 < count__30096)){
var vec__30108 = chunk__30095.cljs$core$IIndexed$_nth$arity$2(null,i__30097);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30108,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30108,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__30810 = seq__30094;
var G__30811 = chunk__30095;
var G__30812 = count__30096;
var G__30813 = (i__30097 + (1));
seq__30094 = G__30810;
chunk__30095 = G__30811;
count__30096 = G__30812;
i__30097 = G__30813;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__30094);
if(temp__5735__auto__){
var seq__30094__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__30094__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__30094__$1);
var G__30815 = cljs.core.chunk_rest(seq__30094__$1);
var G__30816 = c__4550__auto__;
var G__30817 = cljs.core.count(c__4550__auto__);
var G__30818 = (0);
seq__30094 = G__30815;
chunk__30095 = G__30816;
count__30096 = G__30817;
i__30097 = G__30818;
continue;
} else {
var vec__30113 = cljs.core.first(seq__30094__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30113,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30113,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__30823 = cljs.core.next(seq__30094__$1);
var G__30824 = null;
var G__30825 = (0);
var G__30826 = (0);
seq__30094 = G__30823;
chunk__30095 = G__30824;
count__30096 = G__30825;
i__30097 = G__30826;
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
var G__30119_30827 = key;
var G__30119_30828__$1 = (((G__30119_30827 instanceof cljs.core.Keyword))?G__30119_30827.fqn:null);
switch (G__30119_30828__$1) {
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
var ks_30849 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4120__auto__ = goog.string.startsWith(ks_30849,"data-");
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return goog.string.startsWith(ks_30849,"aria-");
}
})())){
el.setAttribute(ks_30849,value);
} else {
(el[ks_30849] = value);
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
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__30148){
var map__30149 = p__30148;
var map__30149__$1 = (((((!((map__30149 == null))))?(((((map__30149.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30149.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30149):map__30149);
var props = map__30149__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30149__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__30152 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30152,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30152,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30152,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__30155 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__30155,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__30155;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__30159 = arguments.length;
switch (G__30159) {
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

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__30166){
var vec__30168 = p__30166;
var seq__30169 = cljs.core.seq(vec__30168);
var first__30170 = cljs.core.first(seq__30169);
var seq__30169__$1 = cljs.core.next(seq__30169);
var nn = first__30170;
var first__30170__$1 = cljs.core.first(seq__30169__$1);
var seq__30169__$2 = cljs.core.next(seq__30169__$1);
var np = first__30170__$1;
var nc = seq__30169__$2;
var node = vec__30168;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__30172 = nn;
var G__30173 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__30172,G__30173) : create_fn.call(null,G__30172,G__30173));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__30175 = nn;
var G__30176 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__30175,G__30176) : create_fn.call(null,G__30175,G__30176));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__30178 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30178,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30178,(1),null);
var seq__30181_30881 = cljs.core.seq(node_children);
var chunk__30182_30882 = null;
var count__30183_30883 = (0);
var i__30184_30884 = (0);
while(true){
if((i__30184_30884 < count__30183_30883)){
var child_struct_30885 = chunk__30182_30882.cljs$core$IIndexed$_nth$arity$2(null,i__30184_30884);
var children_30886 = shadow.dom.dom_node(child_struct_30885);
if(cljs.core.seq_QMARK_(children_30886)){
var seq__30213_30887 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_30886));
var chunk__30215_30888 = null;
var count__30216_30889 = (0);
var i__30217_30890 = (0);
while(true){
if((i__30217_30890 < count__30216_30889)){
var child_30891 = chunk__30215_30888.cljs$core$IIndexed$_nth$arity$2(null,i__30217_30890);
if(cljs.core.truth_(child_30891)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_30891);


var G__30892 = seq__30213_30887;
var G__30893 = chunk__30215_30888;
var G__30894 = count__30216_30889;
var G__30895 = (i__30217_30890 + (1));
seq__30213_30887 = G__30892;
chunk__30215_30888 = G__30893;
count__30216_30889 = G__30894;
i__30217_30890 = G__30895;
continue;
} else {
var G__30897 = seq__30213_30887;
var G__30898 = chunk__30215_30888;
var G__30899 = count__30216_30889;
var G__30900 = (i__30217_30890 + (1));
seq__30213_30887 = G__30897;
chunk__30215_30888 = G__30898;
count__30216_30889 = G__30899;
i__30217_30890 = G__30900;
continue;
}
} else {
var temp__5735__auto___30901 = cljs.core.seq(seq__30213_30887);
if(temp__5735__auto___30901){
var seq__30213_30902__$1 = temp__5735__auto___30901;
if(cljs.core.chunked_seq_QMARK_(seq__30213_30902__$1)){
var c__4550__auto___30903 = cljs.core.chunk_first(seq__30213_30902__$1);
var G__30904 = cljs.core.chunk_rest(seq__30213_30902__$1);
var G__30905 = c__4550__auto___30903;
var G__30906 = cljs.core.count(c__4550__auto___30903);
var G__30907 = (0);
seq__30213_30887 = G__30904;
chunk__30215_30888 = G__30905;
count__30216_30889 = G__30906;
i__30217_30890 = G__30907;
continue;
} else {
var child_30909 = cljs.core.first(seq__30213_30902__$1);
if(cljs.core.truth_(child_30909)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_30909);


var G__30910 = cljs.core.next(seq__30213_30902__$1);
var G__30911 = null;
var G__30912 = (0);
var G__30913 = (0);
seq__30213_30887 = G__30910;
chunk__30215_30888 = G__30911;
count__30216_30889 = G__30912;
i__30217_30890 = G__30913;
continue;
} else {
var G__30914 = cljs.core.next(seq__30213_30902__$1);
var G__30915 = null;
var G__30916 = (0);
var G__30917 = (0);
seq__30213_30887 = G__30914;
chunk__30215_30888 = G__30915;
count__30216_30889 = G__30916;
i__30217_30890 = G__30917;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_30886);
}


var G__30922 = seq__30181_30881;
var G__30923 = chunk__30182_30882;
var G__30924 = count__30183_30883;
var G__30925 = (i__30184_30884 + (1));
seq__30181_30881 = G__30922;
chunk__30182_30882 = G__30923;
count__30183_30883 = G__30924;
i__30184_30884 = G__30925;
continue;
} else {
var temp__5735__auto___30926 = cljs.core.seq(seq__30181_30881);
if(temp__5735__auto___30926){
var seq__30181_30927__$1 = temp__5735__auto___30926;
if(cljs.core.chunked_seq_QMARK_(seq__30181_30927__$1)){
var c__4550__auto___30928 = cljs.core.chunk_first(seq__30181_30927__$1);
var G__30929 = cljs.core.chunk_rest(seq__30181_30927__$1);
var G__30930 = c__4550__auto___30928;
var G__30931 = cljs.core.count(c__4550__auto___30928);
var G__30932 = (0);
seq__30181_30881 = G__30929;
chunk__30182_30882 = G__30930;
count__30183_30883 = G__30931;
i__30184_30884 = G__30932;
continue;
} else {
var child_struct_30933 = cljs.core.first(seq__30181_30927__$1);
var children_30935 = shadow.dom.dom_node(child_struct_30933);
if(cljs.core.seq_QMARK_(children_30935)){
var seq__30223_30936 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_30935));
var chunk__30225_30937 = null;
var count__30226_30938 = (0);
var i__30227_30939 = (0);
while(true){
if((i__30227_30939 < count__30226_30938)){
var child_30941 = chunk__30225_30937.cljs$core$IIndexed$_nth$arity$2(null,i__30227_30939);
if(cljs.core.truth_(child_30941)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_30941);


var G__30942 = seq__30223_30936;
var G__30943 = chunk__30225_30937;
var G__30944 = count__30226_30938;
var G__30945 = (i__30227_30939 + (1));
seq__30223_30936 = G__30942;
chunk__30225_30937 = G__30943;
count__30226_30938 = G__30944;
i__30227_30939 = G__30945;
continue;
} else {
var G__30947 = seq__30223_30936;
var G__30948 = chunk__30225_30937;
var G__30949 = count__30226_30938;
var G__30950 = (i__30227_30939 + (1));
seq__30223_30936 = G__30947;
chunk__30225_30937 = G__30948;
count__30226_30938 = G__30949;
i__30227_30939 = G__30950;
continue;
}
} else {
var temp__5735__auto___30951__$1 = cljs.core.seq(seq__30223_30936);
if(temp__5735__auto___30951__$1){
var seq__30223_30952__$1 = temp__5735__auto___30951__$1;
if(cljs.core.chunked_seq_QMARK_(seq__30223_30952__$1)){
var c__4550__auto___30953 = cljs.core.chunk_first(seq__30223_30952__$1);
var G__30954 = cljs.core.chunk_rest(seq__30223_30952__$1);
var G__30955 = c__4550__auto___30953;
var G__30956 = cljs.core.count(c__4550__auto___30953);
var G__30957 = (0);
seq__30223_30936 = G__30954;
chunk__30225_30937 = G__30955;
count__30226_30938 = G__30956;
i__30227_30939 = G__30957;
continue;
} else {
var child_30960 = cljs.core.first(seq__30223_30952__$1);
if(cljs.core.truth_(child_30960)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_30960);


var G__30964 = cljs.core.next(seq__30223_30952__$1);
var G__30965 = null;
var G__30966 = (0);
var G__30967 = (0);
seq__30223_30936 = G__30964;
chunk__30225_30937 = G__30965;
count__30226_30938 = G__30966;
i__30227_30939 = G__30967;
continue;
} else {
var G__30968 = cljs.core.next(seq__30223_30952__$1);
var G__30969 = null;
var G__30970 = (0);
var G__30971 = (0);
seq__30223_30936 = G__30968;
chunk__30225_30937 = G__30969;
count__30226_30938 = G__30970;
i__30227_30939 = G__30971;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_30935);
}


var G__30972 = cljs.core.next(seq__30181_30927__$1);
var G__30973 = null;
var G__30974 = (0);
var G__30975 = (0);
seq__30181_30881 = G__30972;
chunk__30182_30882 = G__30973;
count__30183_30883 = G__30974;
i__30184_30884 = G__30975;
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
var seq__30255 = cljs.core.seq(node);
var chunk__30256 = null;
var count__30257 = (0);
var i__30258 = (0);
while(true){
if((i__30258 < count__30257)){
var n = chunk__30256.cljs$core$IIndexed$_nth$arity$2(null,i__30258);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__30980 = seq__30255;
var G__30981 = chunk__30256;
var G__30982 = count__30257;
var G__30983 = (i__30258 + (1));
seq__30255 = G__30980;
chunk__30256 = G__30981;
count__30257 = G__30982;
i__30258 = G__30983;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__30255);
if(temp__5735__auto__){
var seq__30255__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__30255__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__30255__$1);
var G__30984 = cljs.core.chunk_rest(seq__30255__$1);
var G__30985 = c__4550__auto__;
var G__30986 = cljs.core.count(c__4550__auto__);
var G__30987 = (0);
seq__30255 = G__30984;
chunk__30256 = G__30985;
count__30257 = G__30986;
i__30258 = G__30987;
continue;
} else {
var n = cljs.core.first(seq__30255__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__30991 = cljs.core.next(seq__30255__$1);
var G__30992 = null;
var G__30993 = (0);
var G__30994 = (0);
seq__30255 = G__30991;
chunk__30256 = G__30992;
count__30257 = G__30993;
i__30258 = G__30994;
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
var G__30266 = arguments.length;
switch (G__30266) {
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
var G__30270 = arguments.length;
switch (G__30270) {
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
var G__30277 = arguments.length;
switch (G__30277) {
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
var or__4120__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
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
var args__4736__auto__ = [];
var len__4730__auto___31010 = arguments.length;
var i__4731__auto___31011 = (0);
while(true){
if((i__4731__auto___31011 < len__4730__auto___31010)){
args__4736__auto__.push((arguments[i__4731__auto___31011]));

var G__31012 = (i__4731__auto___31011 + (1));
i__4731__auto___31011 = G__31012;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__30288_31015 = cljs.core.seq(nodes);
var chunk__30289_31016 = null;
var count__30291_31017 = (0);
var i__30292_31018 = (0);
while(true){
if((i__30292_31018 < count__30291_31017)){
var node_31020 = chunk__30289_31016.cljs$core$IIndexed$_nth$arity$2(null,i__30292_31018);
fragment.appendChild(shadow.dom._to_dom(node_31020));


var G__31021 = seq__30288_31015;
var G__31022 = chunk__30289_31016;
var G__31023 = count__30291_31017;
var G__31024 = (i__30292_31018 + (1));
seq__30288_31015 = G__31021;
chunk__30289_31016 = G__31022;
count__30291_31017 = G__31023;
i__30292_31018 = G__31024;
continue;
} else {
var temp__5735__auto___31025 = cljs.core.seq(seq__30288_31015);
if(temp__5735__auto___31025){
var seq__30288_31026__$1 = temp__5735__auto___31025;
if(cljs.core.chunked_seq_QMARK_(seq__30288_31026__$1)){
var c__4550__auto___31028 = cljs.core.chunk_first(seq__30288_31026__$1);
var G__31029 = cljs.core.chunk_rest(seq__30288_31026__$1);
var G__31030 = c__4550__auto___31028;
var G__31031 = cljs.core.count(c__4550__auto___31028);
var G__31032 = (0);
seq__30288_31015 = G__31029;
chunk__30289_31016 = G__31030;
count__30291_31017 = G__31031;
i__30292_31018 = G__31032;
continue;
} else {
var node_31033 = cljs.core.first(seq__30288_31026__$1);
fragment.appendChild(shadow.dom._to_dom(node_31033));


var G__31034 = cljs.core.next(seq__30288_31026__$1);
var G__31035 = null;
var G__31036 = (0);
var G__31037 = (0);
seq__30288_31015 = G__31034;
chunk__30289_31016 = G__31035;
count__30291_31017 = G__31036;
i__30292_31018 = G__31037;
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
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq30284){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq30284));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__30300_31041 = cljs.core.seq(scripts);
var chunk__30301_31042 = null;
var count__30302_31043 = (0);
var i__30303_31044 = (0);
while(true){
if((i__30303_31044 < count__30302_31043)){
var vec__30311_31046 = chunk__30301_31042.cljs$core$IIndexed$_nth$arity$2(null,i__30303_31044);
var script_tag_31047 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30311_31046,(0),null);
var script_body_31048 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30311_31046,(1),null);
eval(script_body_31048);


var G__31049 = seq__30300_31041;
var G__31050 = chunk__30301_31042;
var G__31051 = count__30302_31043;
var G__31052 = (i__30303_31044 + (1));
seq__30300_31041 = G__31049;
chunk__30301_31042 = G__31050;
count__30302_31043 = G__31051;
i__30303_31044 = G__31052;
continue;
} else {
var temp__5735__auto___31054 = cljs.core.seq(seq__30300_31041);
if(temp__5735__auto___31054){
var seq__30300_31055__$1 = temp__5735__auto___31054;
if(cljs.core.chunked_seq_QMARK_(seq__30300_31055__$1)){
var c__4550__auto___31056 = cljs.core.chunk_first(seq__30300_31055__$1);
var G__31057 = cljs.core.chunk_rest(seq__30300_31055__$1);
var G__31058 = c__4550__auto___31056;
var G__31059 = cljs.core.count(c__4550__auto___31056);
var G__31060 = (0);
seq__30300_31041 = G__31057;
chunk__30301_31042 = G__31058;
count__30302_31043 = G__31059;
i__30303_31044 = G__31060;
continue;
} else {
var vec__30317_31061 = cljs.core.first(seq__30300_31055__$1);
var script_tag_31062 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30317_31061,(0),null);
var script_body_31063 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30317_31061,(1),null);
eval(script_body_31063);


var G__31064 = cljs.core.next(seq__30300_31055__$1);
var G__31065 = null;
var G__31066 = (0);
var G__31067 = (0);
seq__30300_31041 = G__31064;
chunk__30301_31042 = G__31065;
count__30302_31043 = G__31066;
i__30303_31044 = G__31067;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__30320){
var vec__30321 = p__30320;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30321,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30321,(1),null);
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
var G__30327 = arguments.length;
switch (G__30327) {
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
var seq__30331 = cljs.core.seq(style_keys);
var chunk__30332 = null;
var count__30333 = (0);
var i__30334 = (0);
while(true){
if((i__30334 < count__30333)){
var it = chunk__30332.cljs$core$IIndexed$_nth$arity$2(null,i__30334);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__31084 = seq__30331;
var G__31085 = chunk__30332;
var G__31086 = count__30333;
var G__31087 = (i__30334 + (1));
seq__30331 = G__31084;
chunk__30332 = G__31085;
count__30333 = G__31086;
i__30334 = G__31087;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__30331);
if(temp__5735__auto__){
var seq__30331__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__30331__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__30331__$1);
var G__31089 = cljs.core.chunk_rest(seq__30331__$1);
var G__31090 = c__4550__auto__;
var G__31091 = cljs.core.count(c__4550__auto__);
var G__31092 = (0);
seq__30331 = G__31089;
chunk__30332 = G__31090;
count__30333 = G__31091;
i__30334 = G__31092;
continue;
} else {
var it = cljs.core.first(seq__30331__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__31093 = cljs.core.next(seq__30331__$1);
var G__31094 = null;
var G__31095 = (0);
var G__31096 = (0);
seq__30331 = G__31093;
chunk__30332 = G__31094;
count__30333 = G__31095;
i__30334 = G__31096;
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
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4374__auto__,k__4375__auto__){
var self__ = this;
var this__4374__auto____$1 = this;
return this__4374__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4375__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4376__auto__,k30337,else__4377__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var G__30344 = k30337;
var G__30344__$1 = (((G__30344 instanceof cljs.core.Keyword))?G__30344.fqn:null);
switch (G__30344__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k30337,else__4377__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4393__auto__,f__4394__auto__,init__4395__auto__){
var self__ = this;
var this__4393__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4396__auto__,p__30348){
var vec__30349 = p__30348;
var k__4397__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30349,(0),null);
var v__4398__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30349,(1),null);
return (f__4394__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4394__auto__.cljs$core$IFn$_invoke$arity$3(ret__4396__auto__,k__4397__auto__,v__4398__auto__) : f__4394__auto__.call(null,ret__4396__auto__,k__4397__auto__,v__4398__auto__));
}),init__4395__auto__,this__4393__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4388__auto__,writer__4389__auto__,opts__4390__auto__){
var self__ = this;
var this__4388__auto____$1 = this;
var pr_pair__4391__auto__ = (function (keyval__4392__auto__){
return cljs.core.pr_sequential_writer(writer__4389__auto__,cljs.core.pr_writer,""," ","",opts__4390__auto__,keyval__4392__auto__);
});
return cljs.core.pr_sequential_writer(writer__4389__auto__,pr_pair__4391__auto__,"#shadow.dom.Coordinate{",", ","}",opts__4390__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__30336){
var self__ = this;
var G__30336__$1 = this;
return (new cljs.core.RecordIter((0),G__30336__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4372__auto__){
var self__ = this;
var this__4372__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4369__auto__){
var self__ = this;
var this__4369__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4370__auto__){
var self__ = this;
var this__4370__auto____$1 = this;
var h__4232__auto__ = self__.__hash;
if((!((h__4232__auto__ == null)))){
return h__4232__auto__;
} else {
var h__4232__auto____$1 = (function (coll__4371__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__4371__auto__));
})(this__4370__auto____$1);
(self__.__hash = h__4232__auto____$1);

return h__4232__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this30338,other30339){
var self__ = this;
var this30338__$1 = this;
return (((!((other30339 == null)))) && ((this30338__$1.constructor === other30339.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this30338__$1.x,other30339.x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this30338__$1.y,other30339.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this30338__$1.__extmap,other30339.__extmap)));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4383__auto__,k__4384__auto__){
var self__ = this;
var this__4383__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__4384__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4383__auto____$1),self__.__meta),k__4384__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4384__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4381__auto__,k__4382__auto__,G__30336){
var self__ = this;
var this__4381__auto____$1 = this;
var pred__30359 = cljs.core.keyword_identical_QMARK_;
var expr__30360 = k__4382__auto__;
if(cljs.core.truth_((pred__30359.cljs$core$IFn$_invoke$arity$2 ? pred__30359.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__30360) : pred__30359.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__30360)))){
return (new shadow.dom.Coordinate(G__30336,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__30359.cljs$core$IFn$_invoke$arity$2 ? pred__30359.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__30360) : pred__30359.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__30360)))){
return (new shadow.dom.Coordinate(self__.x,G__30336,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4382__auto__,G__30336),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4386__auto__){
var self__ = this;
var this__4386__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4373__auto__,G__30336){
var self__ = this;
var this__4373__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__30336,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4379__auto__,entry__4380__auto__){
var self__ = this;
var this__4379__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4380__auto__)){
return this__4379__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4380__auto__,(0)),cljs.core._nth(entry__4380__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4379__auto____$1,entry__4380__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__4417__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__4417__auto__,writer__4418__auto__){
return cljs.core._write(writer__4418__auto__,"shadow.dom/Coordinate");
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
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__30341){
var extmap__4413__auto__ = (function (){var G__30367 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__30341,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__30341)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__30367);
} else {
return G__30367;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__30341),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__30341),null,cljs.core.not_empty(extmap__4413__auto__),null));
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
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4374__auto__,k__4375__auto__){
var self__ = this;
var this__4374__auto____$1 = this;
return this__4374__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4375__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4376__auto__,k30371,else__4377__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var G__30378 = k30371;
var G__30378__$1 = (((G__30378 instanceof cljs.core.Keyword))?G__30378.fqn:null);
switch (G__30378__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k30371,else__4377__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4393__auto__,f__4394__auto__,init__4395__auto__){
var self__ = this;
var this__4393__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4396__auto__,p__30382){
var vec__30383 = p__30382;
var k__4397__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30383,(0),null);
var v__4398__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30383,(1),null);
return (f__4394__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4394__auto__.cljs$core$IFn$_invoke$arity$3(ret__4396__auto__,k__4397__auto__,v__4398__auto__) : f__4394__auto__.call(null,ret__4396__auto__,k__4397__auto__,v__4398__auto__));
}),init__4395__auto__,this__4393__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4388__auto__,writer__4389__auto__,opts__4390__auto__){
var self__ = this;
var this__4388__auto____$1 = this;
var pr_pair__4391__auto__ = (function (keyval__4392__auto__){
return cljs.core.pr_sequential_writer(writer__4389__auto__,cljs.core.pr_writer,""," ","",opts__4390__auto__,keyval__4392__auto__);
});
return cljs.core.pr_sequential_writer(writer__4389__auto__,pr_pair__4391__auto__,"#shadow.dom.Size{",", ","}",opts__4390__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__30370){
var self__ = this;
var G__30370__$1 = this;
return (new cljs.core.RecordIter((0),G__30370__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4372__auto__){
var self__ = this;
var this__4372__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4369__auto__){
var self__ = this;
var this__4369__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4370__auto__){
var self__ = this;
var this__4370__auto____$1 = this;
var h__4232__auto__ = self__.__hash;
if((!((h__4232__auto__ == null)))){
return h__4232__auto__;
} else {
var h__4232__auto____$1 = (function (coll__4371__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__4371__auto__));
})(this__4370__auto____$1);
(self__.__hash = h__4232__auto____$1);

return h__4232__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this30372,other30373){
var self__ = this;
var this30372__$1 = this;
return (((!((other30373 == null)))) && ((this30372__$1.constructor === other30373.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this30372__$1.w,other30373.w)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this30372__$1.h,other30373.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this30372__$1.__extmap,other30373.__extmap)));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4383__auto__,k__4384__auto__){
var self__ = this;
var this__4383__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__4384__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4383__auto____$1),self__.__meta),k__4384__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4384__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4381__auto__,k__4382__auto__,G__30370){
var self__ = this;
var this__4381__auto____$1 = this;
var pred__30393 = cljs.core.keyword_identical_QMARK_;
var expr__30394 = k__4382__auto__;
if(cljs.core.truth_((pred__30393.cljs$core$IFn$_invoke$arity$2 ? pred__30393.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__30394) : pred__30393.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__30394)))){
return (new shadow.dom.Size(G__30370,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__30393.cljs$core$IFn$_invoke$arity$2 ? pred__30393.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__30394) : pred__30393.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__30394)))){
return (new shadow.dom.Size(self__.w,G__30370,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4382__auto__,G__30370),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4386__auto__){
var self__ = this;
var this__4386__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4373__auto__,G__30370){
var self__ = this;
var this__4373__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__30370,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4379__auto__,entry__4380__auto__){
var self__ = this;
var this__4379__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4380__auto__)){
return this__4379__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4380__auto__,(0)),cljs.core._nth(entry__4380__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4379__auto____$1,entry__4380__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__4417__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__4417__auto__,writer__4418__auto__){
return cljs.core._write(writer__4418__auto__,"shadow.dom/Size");
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
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__30374){
var extmap__4413__auto__ = (function (){var G__30408 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__30374,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__30374)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__30408);
} else {
return G__30408;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__30374),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__30374),null,cljs.core.not_empty(extmap__4413__auto__),null));
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
var a__4604__auto__ = opts;
var l__4605__auto__ = a__4604__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__4605__auto__)){
var G__31142 = (i + (1));
var G__31143 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__31142;
ret = G__31143;
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
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__30442){
var vec__30447 = p__30442;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30447,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30447,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__30453 = arguments.length;
switch (G__30453) {
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
var G__31150 = ps;
var G__31151 = (i + (1));
el__$1 = G__31150;
i = G__31151;
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
var vec__30478 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30478,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30478,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30478,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__30481_31156 = cljs.core.seq(props);
var chunk__30482_31157 = null;
var count__30483_31158 = (0);
var i__30484_31159 = (0);
while(true){
if((i__30484_31159 < count__30483_31158)){
var vec__30497_31160 = chunk__30482_31157.cljs$core$IIndexed$_nth$arity$2(null,i__30484_31159);
var k_31161 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30497_31160,(0),null);
var v_31162 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30497_31160,(1),null);
el.setAttributeNS((function (){var temp__5735__auto__ = cljs.core.namespace(k_31161);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_31161),v_31162);


var G__31168 = seq__30481_31156;
var G__31169 = chunk__30482_31157;
var G__31170 = count__30483_31158;
var G__31171 = (i__30484_31159 + (1));
seq__30481_31156 = G__31168;
chunk__30482_31157 = G__31169;
count__30483_31158 = G__31170;
i__30484_31159 = G__31171;
continue;
} else {
var temp__5735__auto___31172 = cljs.core.seq(seq__30481_31156);
if(temp__5735__auto___31172){
var seq__30481_31174__$1 = temp__5735__auto___31172;
if(cljs.core.chunked_seq_QMARK_(seq__30481_31174__$1)){
var c__4550__auto___31175 = cljs.core.chunk_first(seq__30481_31174__$1);
var G__31177 = cljs.core.chunk_rest(seq__30481_31174__$1);
var G__31178 = c__4550__auto___31175;
var G__31179 = cljs.core.count(c__4550__auto___31175);
var G__31180 = (0);
seq__30481_31156 = G__31177;
chunk__30482_31157 = G__31178;
count__30483_31158 = G__31179;
i__30484_31159 = G__31180;
continue;
} else {
var vec__30508_31181 = cljs.core.first(seq__30481_31174__$1);
var k_31182 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30508_31181,(0),null);
var v_31183 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30508_31181,(1),null);
el.setAttributeNS((function (){var temp__5735__auto____$1 = cljs.core.namespace(k_31182);
if(cljs.core.truth_(temp__5735__auto____$1)){
var ns = temp__5735__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_31182),v_31183);


var G__31184 = cljs.core.next(seq__30481_31174__$1);
var G__31185 = null;
var G__31186 = (0);
var G__31187 = (0);
seq__30481_31156 = G__31184;
chunk__30482_31157 = G__31185;
count__30483_31158 = G__31186;
i__30484_31159 = G__31187;
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
var vec__30529 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30529,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30529,(1),null);
var seq__30532_31190 = cljs.core.seq(node_children);
var chunk__30534_31191 = null;
var count__30535_31192 = (0);
var i__30536_31193 = (0);
while(true){
if((i__30536_31193 < count__30535_31192)){
var child_struct_31195 = chunk__30534_31191.cljs$core$IIndexed$_nth$arity$2(null,i__30536_31193);
if((!((child_struct_31195 == null)))){
if(typeof child_struct_31195 === 'string'){
var text_31196 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_31196),child_struct_31195].join(''));
} else {
var children_31198 = shadow.dom.svg_node(child_struct_31195);
if(cljs.core.seq_QMARK_(children_31198)){
var seq__30572_31200 = cljs.core.seq(children_31198);
var chunk__30574_31201 = null;
var count__30575_31202 = (0);
var i__30576_31203 = (0);
while(true){
if((i__30576_31203 < count__30575_31202)){
var child_31204 = chunk__30574_31201.cljs$core$IIndexed$_nth$arity$2(null,i__30576_31203);
if(cljs.core.truth_(child_31204)){
node.appendChild(child_31204);


var G__31205 = seq__30572_31200;
var G__31206 = chunk__30574_31201;
var G__31207 = count__30575_31202;
var G__31208 = (i__30576_31203 + (1));
seq__30572_31200 = G__31205;
chunk__30574_31201 = G__31206;
count__30575_31202 = G__31207;
i__30576_31203 = G__31208;
continue;
} else {
var G__31209 = seq__30572_31200;
var G__31210 = chunk__30574_31201;
var G__31211 = count__30575_31202;
var G__31212 = (i__30576_31203 + (1));
seq__30572_31200 = G__31209;
chunk__30574_31201 = G__31210;
count__30575_31202 = G__31211;
i__30576_31203 = G__31212;
continue;
}
} else {
var temp__5735__auto___31213 = cljs.core.seq(seq__30572_31200);
if(temp__5735__auto___31213){
var seq__30572_31214__$1 = temp__5735__auto___31213;
if(cljs.core.chunked_seq_QMARK_(seq__30572_31214__$1)){
var c__4550__auto___31216 = cljs.core.chunk_first(seq__30572_31214__$1);
var G__31217 = cljs.core.chunk_rest(seq__30572_31214__$1);
var G__31218 = c__4550__auto___31216;
var G__31219 = cljs.core.count(c__4550__auto___31216);
var G__31220 = (0);
seq__30572_31200 = G__31217;
chunk__30574_31201 = G__31218;
count__30575_31202 = G__31219;
i__30576_31203 = G__31220;
continue;
} else {
var child_31223 = cljs.core.first(seq__30572_31214__$1);
if(cljs.core.truth_(child_31223)){
node.appendChild(child_31223);


var G__31224 = cljs.core.next(seq__30572_31214__$1);
var G__31225 = null;
var G__31226 = (0);
var G__31227 = (0);
seq__30572_31200 = G__31224;
chunk__30574_31201 = G__31225;
count__30575_31202 = G__31226;
i__30576_31203 = G__31227;
continue;
} else {
var G__31233 = cljs.core.next(seq__30572_31214__$1);
var G__31234 = null;
var G__31235 = (0);
var G__31236 = (0);
seq__30572_31200 = G__31233;
chunk__30574_31201 = G__31234;
count__30575_31202 = G__31235;
i__30576_31203 = G__31236;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_31198);
}
}


var G__31237 = seq__30532_31190;
var G__31238 = chunk__30534_31191;
var G__31239 = count__30535_31192;
var G__31240 = (i__30536_31193 + (1));
seq__30532_31190 = G__31237;
chunk__30534_31191 = G__31238;
count__30535_31192 = G__31239;
i__30536_31193 = G__31240;
continue;
} else {
var G__31241 = seq__30532_31190;
var G__31242 = chunk__30534_31191;
var G__31243 = count__30535_31192;
var G__31244 = (i__30536_31193 + (1));
seq__30532_31190 = G__31241;
chunk__30534_31191 = G__31242;
count__30535_31192 = G__31243;
i__30536_31193 = G__31244;
continue;
}
} else {
var temp__5735__auto___31245 = cljs.core.seq(seq__30532_31190);
if(temp__5735__auto___31245){
var seq__30532_31246__$1 = temp__5735__auto___31245;
if(cljs.core.chunked_seq_QMARK_(seq__30532_31246__$1)){
var c__4550__auto___31247 = cljs.core.chunk_first(seq__30532_31246__$1);
var G__31249 = cljs.core.chunk_rest(seq__30532_31246__$1);
var G__31250 = c__4550__auto___31247;
var G__31251 = cljs.core.count(c__4550__auto___31247);
var G__31252 = (0);
seq__30532_31190 = G__31249;
chunk__30534_31191 = G__31250;
count__30535_31192 = G__31251;
i__30536_31193 = G__31252;
continue;
} else {
var child_struct_31254 = cljs.core.first(seq__30532_31246__$1);
if((!((child_struct_31254 == null)))){
if(typeof child_struct_31254 === 'string'){
var text_31255 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_31255),child_struct_31254].join(''));
} else {
var children_31257 = shadow.dom.svg_node(child_struct_31254);
if(cljs.core.seq_QMARK_(children_31257)){
var seq__30594_31258 = cljs.core.seq(children_31257);
var chunk__30596_31259 = null;
var count__30597_31260 = (0);
var i__30598_31261 = (0);
while(true){
if((i__30598_31261 < count__30597_31260)){
var child_31263 = chunk__30596_31259.cljs$core$IIndexed$_nth$arity$2(null,i__30598_31261);
if(cljs.core.truth_(child_31263)){
node.appendChild(child_31263);


var G__31264 = seq__30594_31258;
var G__31265 = chunk__30596_31259;
var G__31266 = count__30597_31260;
var G__31267 = (i__30598_31261 + (1));
seq__30594_31258 = G__31264;
chunk__30596_31259 = G__31265;
count__30597_31260 = G__31266;
i__30598_31261 = G__31267;
continue;
} else {
var G__31268 = seq__30594_31258;
var G__31269 = chunk__30596_31259;
var G__31270 = count__30597_31260;
var G__31271 = (i__30598_31261 + (1));
seq__30594_31258 = G__31268;
chunk__30596_31259 = G__31269;
count__30597_31260 = G__31270;
i__30598_31261 = G__31271;
continue;
}
} else {
var temp__5735__auto___31272__$1 = cljs.core.seq(seq__30594_31258);
if(temp__5735__auto___31272__$1){
var seq__30594_31273__$1 = temp__5735__auto___31272__$1;
if(cljs.core.chunked_seq_QMARK_(seq__30594_31273__$1)){
var c__4550__auto___31274 = cljs.core.chunk_first(seq__30594_31273__$1);
var G__31275 = cljs.core.chunk_rest(seq__30594_31273__$1);
var G__31276 = c__4550__auto___31274;
var G__31277 = cljs.core.count(c__4550__auto___31274);
var G__31278 = (0);
seq__30594_31258 = G__31275;
chunk__30596_31259 = G__31276;
count__30597_31260 = G__31277;
i__30598_31261 = G__31278;
continue;
} else {
var child_31279 = cljs.core.first(seq__30594_31273__$1);
if(cljs.core.truth_(child_31279)){
node.appendChild(child_31279);


var G__31281 = cljs.core.next(seq__30594_31273__$1);
var G__31282 = null;
var G__31283 = (0);
var G__31284 = (0);
seq__30594_31258 = G__31281;
chunk__30596_31259 = G__31282;
count__30597_31260 = G__31283;
i__30598_31261 = G__31284;
continue;
} else {
var G__31285 = cljs.core.next(seq__30594_31273__$1);
var G__31286 = null;
var G__31287 = (0);
var G__31288 = (0);
seq__30594_31258 = G__31285;
chunk__30596_31259 = G__31286;
count__30597_31260 = G__31287;
i__30598_31261 = G__31288;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_31257);
}
}


var G__31290 = cljs.core.next(seq__30532_31246__$1);
var G__31291 = null;
var G__31292 = (0);
var G__31293 = (0);
seq__30532_31190 = G__31290;
chunk__30534_31191 = G__31291;
count__30535_31192 = G__31292;
i__30536_31193 = G__31293;
continue;
} else {
var G__31294 = cljs.core.next(seq__30532_31246__$1);
var G__31295 = null;
var G__31296 = (0);
var G__31297 = (0);
seq__30532_31190 = G__31294;
chunk__30534_31191 = G__31295;
count__30535_31192 = G__31296;
i__30536_31193 = G__31297;
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
var args__4736__auto__ = [];
var len__4730__auto___31307 = arguments.length;
var i__4731__auto___31308 = (0);
while(true){
if((i__4731__auto___31308 < len__4730__auto___31307)){
args__4736__auto__.push((arguments[i__4731__auto___31308]));

var G__31310 = (i__4731__auto___31308 + (1));
i__4731__auto___31308 = G__31310;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq30636){
var G__30637 = cljs.core.first(seq30636);
var seq30636__$1 = cljs.core.next(seq30636);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__30637,seq30636__$1);
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
var G__30653 = arguments.length;
switch (G__30653) {
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

if(cljs.core.truth_((function (){var and__4109__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__4109__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__4109__auto__;
}
})())){
var c__27580__auto___31331 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27581__auto__ = (function (){var switch__27466__auto__ = (function (state_30674){
var state_val_30675 = (state_30674[(1)]);
if((state_val_30675 === (1))){
var state_30674__$1 = state_30674;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30674__$1,(2),once_or_cleanup);
} else {
if((state_val_30675 === (2))){
var inst_30671 = (state_30674[(2)]);
var inst_30672 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_30674__$1 = (function (){var statearr_30677 = state_30674;
(statearr_30677[(7)] = inst_30671);

return statearr_30677;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_30674__$1,inst_30672);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__27467__auto__ = null;
var shadow$dom$state_machine__27467__auto____0 = (function (){
var statearr_30682 = [null,null,null,null,null,null,null,null];
(statearr_30682[(0)] = shadow$dom$state_machine__27467__auto__);

(statearr_30682[(1)] = (1));

return statearr_30682;
});
var shadow$dom$state_machine__27467__auto____1 = (function (state_30674){
while(true){
var ret_value__27468__auto__ = (function (){try{while(true){
var result__27469__auto__ = switch__27466__auto__(state_30674);
if(cljs.core.keyword_identical_QMARK_(result__27469__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27469__auto__;
}
break;
}
}catch (e30684){var ex__27470__auto__ = e30684;
var statearr_30688_31334 = state_30674;
(statearr_30688_31334[(2)] = ex__27470__auto__);


if(cljs.core.seq((state_30674[(4)]))){
var statearr_30691_31335 = state_30674;
(statearr_30691_31335[(1)] = cljs.core.first((state_30674[(4)])));

} else {
throw ex__27470__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27468__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31337 = state_30674;
state_30674 = G__31337;
continue;
} else {
return ret_value__27468__auto__;
}
break;
}
});
shadow$dom$state_machine__27467__auto__ = function(state_30674){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__27467__auto____0.call(this);
case 1:
return shadow$dom$state_machine__27467__auto____1.call(this,state_30674);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__27467__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__27467__auto____0;
shadow$dom$state_machine__27467__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__27467__auto____1;
return shadow$dom$state_machine__27467__auto__;
})()
})();
var state__27582__auto__ = (function (){var statearr_30694 = f__27581__auto__();
(statearr_30694[(6)] = c__27580__auto___31331);

return statearr_30694;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27582__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
