goog.provide('reagent.dom');
var module$node_modules$react_dom$index=shadow.js.require("module$node_modules$react_dom$index", {});
if((typeof reagent !== 'undefined') && (typeof reagent.dom !== 'undefined') && (typeof reagent.dom.roots !== 'undefined')){
} else {
reagent.dom.roots = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
reagent.dom.unmount_comp = (function reagent$dom$unmount_comp(container){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(reagent.dom.roots,cljs.core.dissoc,container);

return module$node_modules$react_dom$index.unmountComponentAtNode(container);
});
reagent.dom.render_comp = (function reagent$dom$render_comp(comp,container,callback){
var _STAR_always_update_STAR__orig_val__35769 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__35770 = true;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__35770);

try{return module$node_modules$react_dom$index.render((comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null)),container,(function (){
var _STAR_always_update_STAR__orig_val__35772 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__35773 = false;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__35773);

try{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(reagent.dom.roots,cljs.core.assoc,container,comp);

reagent.impl.batching.flush_after_render();

if((!((callback == null)))){
return (callback.cljs$core$IFn$_invoke$arity$0 ? callback.cljs$core$IFn$_invoke$arity$0() : callback.call(null));
} else {
return null;
}
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__35772);
}}));
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__35769);
}});
reagent.dom.re_render_component = (function reagent$dom$re_render_component(comp,container){
return reagent.dom.render_comp(comp,container,null);
});
/**
 * Render a Reagent component into the DOM. The first argument may be
 *   either a vector (using Reagent's Hiccup syntax), or a React element.
 *   The second argument should be a DOM node.
 * 
 *   Optionally takes a callback that is called when the component is in place.
 * 
 *   Returns the mounted component instance.
 */
reagent.dom.render = (function reagent$dom$render(var_args){
var G__35786 = arguments.length;
switch (G__35786) {
case 2:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(reagent.dom.render.cljs$core$IFn$_invoke$arity$2 = (function (comp,container){
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3(comp,container,reagent.impl.template.default_compiler);
}));

(reagent.dom.render.cljs$core$IFn$_invoke$arity$3 = (function (comp,container,callback_or_compiler){
reagent.ratom.flush_BANG_();

var vec__35794 = ((cljs.core.fn_QMARK_(callback_or_compiler))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.impl.template.default_compiler,callback_or_compiler], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [callback_or_compiler,new cljs.core.Keyword(null,"callback","callback",-705136228).cljs$core$IFn$_invoke$arity$1(callback_or_compiler)], null));
var compiler = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35794,(0),null);
var callback = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35794,(1),null);
var f = (function (){
return reagent.impl.protocols.as_element(compiler,((cljs.core.fn_QMARK_(comp))?(comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null)):comp));
});
return reagent.dom.render_comp(f,container,callback);
}));

(reagent.dom.render.cljs$lang$maxFixedArity = 3);

/**
 * Remove a component from the given DOM node.
 */
reagent.dom.unmount_component_at_node = (function reagent$dom$unmount_component_at_node(container){
return reagent.dom.unmount_comp(container);
});
/**
 * Returns the root DOM node of a mounted component.
 */
reagent.dom.dom_node = (function reagent$dom$dom_node(this$){
return module$node_modules$react_dom$index.findDOMNode(this$);
});
/**
 * Force re-rendering of all mounted Reagent components. This is
 *   probably only useful in a development environment, when you want to
 *   update components in response to some dynamic changes to code.
 * 
 *   Note that force-update-all may not update root components. This
 *   happens if a component 'foo' is mounted with `(render [foo])` (since
 *   functions are passed by value, and not by reference, in
 *   ClojureScript). To get around this you'll have to introduce a layer
 *   of indirection, for example by using `(render [#'foo])` instead.
 */
reagent.dom.force_update_all = (function reagent$dom$force_update_all(){
reagent.ratom.flush_BANG_();

var seq__35798_35831 = cljs.core.seq(cljs.core.deref(reagent.dom.roots));
var chunk__35800_35832 = null;
var count__35801_35833 = (0);
var i__35802_35834 = (0);
while(true){
if((i__35802_35834 < count__35801_35833)){
var vec__35815_35835 = chunk__35800_35832.cljs$core$IIndexed$_nth$arity$2(null,i__35802_35834);
var container_35836 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35815_35835,(0),null);
var comp_35837 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35815_35835,(1),null);
reagent.dom.re_render_component(comp_35837,container_35836);


var G__35839 = seq__35798_35831;
var G__35840 = chunk__35800_35832;
var G__35841 = count__35801_35833;
var G__35842 = (i__35802_35834 + (1));
seq__35798_35831 = G__35839;
chunk__35800_35832 = G__35840;
count__35801_35833 = G__35841;
i__35802_35834 = G__35842;
continue;
} else {
var temp__5735__auto___35843 = cljs.core.seq(seq__35798_35831);
if(temp__5735__auto___35843){
var seq__35798_35845__$1 = temp__5735__auto___35843;
if(cljs.core.chunked_seq_QMARK_(seq__35798_35845__$1)){
var c__4556__auto___35846 = cljs.core.chunk_first(seq__35798_35845__$1);
var G__35847 = cljs.core.chunk_rest(seq__35798_35845__$1);
var G__35848 = c__4556__auto___35846;
var G__35849 = cljs.core.count(c__4556__auto___35846);
var G__35850 = (0);
seq__35798_35831 = G__35847;
chunk__35800_35832 = G__35848;
count__35801_35833 = G__35849;
i__35802_35834 = G__35850;
continue;
} else {
var vec__35819_35851 = cljs.core.first(seq__35798_35845__$1);
var container_35852 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35819_35851,(0),null);
var comp_35853 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35819_35851,(1),null);
reagent.dom.re_render_component(comp_35853,container_35852);


var G__35854 = cljs.core.next(seq__35798_35845__$1);
var G__35855 = null;
var G__35856 = (0);
var G__35857 = (0);
seq__35798_35831 = G__35854;
chunk__35800_35832 = G__35855;
count__35801_35833 = G__35856;
i__35802_35834 = G__35857;
continue;
}
} else {
}
}
break;
}

return reagent.impl.batching.flush_after_render();
});

//# sourceMappingURL=reagent.dom.js.map
