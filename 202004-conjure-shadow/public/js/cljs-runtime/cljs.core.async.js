goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('goog.array');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__27702 = arguments.length;
switch (G__27702) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async27704 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27704 = (function (f,blockable,meta27705){
this.f = f;
this.blockable = blockable;
this.meta27705 = meta27705;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async27704.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27706,meta27705__$1){
var self__ = this;
var _27706__$1 = this;
return (new cljs.core.async.t_cljs$core$async27704(self__.f,self__.blockable,meta27705__$1));
}));

(cljs.core.async.t_cljs$core$async27704.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27706){
var self__ = this;
var _27706__$1 = this;
return self__.meta27705;
}));

(cljs.core.async.t_cljs$core$async27704.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async27704.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async27704.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async27704.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async27704.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta27705","meta27705",2104502253,null)], null);
}));

(cljs.core.async.t_cljs$core$async27704.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async27704.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27704");

(cljs.core.async.t_cljs$core$async27704.cljs$lang$ctorPrWriter = (function (this__4363__auto__,writer__4364__auto__,opt__4365__auto__){
return cljs.core._write(writer__4364__auto__,"cljs.core.async/t_cljs$core$async27704");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async27704.
 */
cljs.core.async.__GT_t_cljs$core$async27704 = (function cljs$core$async$__GT_t_cljs$core$async27704(f__$1,blockable__$1,meta27705){
return (new cljs.core.async.t_cljs$core$async27704(f__$1,blockable__$1,meta27705));
});

}

return (new cljs.core.async.t_cljs$core$async27704(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__27727 = arguments.length;
switch (G__27727) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__27732 = arguments.length;
switch (G__27732) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__27744 = arguments.length;
switch (G__27744) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_29925 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_29925) : fn1.call(null,val_29925));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_29925) : fn1.call(null,val_29925));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__27759 = arguments.length;
switch (G__27759) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5733__auto__)){
var ret = temp__5733__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5733__auto__)){
var retb = temp__5733__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4607__auto___29950 = n;
var x_29951 = (0);
while(true){
if((x_29951 < n__4607__auto___29950)){
(a[x_29951] = x_29951);

var G__29954 = (x_29951 + (1));
x_29951 = G__29954;
continue;
} else {
}
break;
}

goog.array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async27785 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27785 = (function (flag,meta27786){
this.flag = flag;
this.meta27786 = meta27786;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async27785.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27787,meta27786__$1){
var self__ = this;
var _27787__$1 = this;
return (new cljs.core.async.t_cljs$core$async27785(self__.flag,meta27786__$1));
}));

(cljs.core.async.t_cljs$core$async27785.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27787){
var self__ = this;
var _27787__$1 = this;
return self__.meta27786;
}));

(cljs.core.async.t_cljs$core$async27785.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async27785.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async27785.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async27785.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async27785.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta27786","meta27786",-2086712795,null)], null);
}));

(cljs.core.async.t_cljs$core$async27785.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async27785.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27785");

(cljs.core.async.t_cljs$core$async27785.cljs$lang$ctorPrWriter = (function (this__4363__auto__,writer__4364__auto__,opt__4365__auto__){
return cljs.core._write(writer__4364__auto__,"cljs.core.async/t_cljs$core$async27785");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async27785.
 */
cljs.core.async.__GT_t_cljs$core$async27785 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async27785(flag__$1,meta27786){
return (new cljs.core.async.t_cljs$core$async27785(flag__$1,meta27786));
});

}

return (new cljs.core.async.t_cljs$core$async27785(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async27801 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27801 = (function (flag,cb,meta27802){
this.flag = flag;
this.cb = cb;
this.meta27802 = meta27802;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async27801.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27803,meta27802__$1){
var self__ = this;
var _27803__$1 = this;
return (new cljs.core.async.t_cljs$core$async27801(self__.flag,self__.cb,meta27802__$1));
}));

(cljs.core.async.t_cljs$core$async27801.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27803){
var self__ = this;
var _27803__$1 = this;
return self__.meta27802;
}));

(cljs.core.async.t_cljs$core$async27801.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async27801.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async27801.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async27801.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async27801.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta27802","meta27802",-218038084,null)], null);
}));

(cljs.core.async.t_cljs$core$async27801.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async27801.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27801");

(cljs.core.async.t_cljs$core$async27801.cljs$lang$ctorPrWriter = (function (this__4363__auto__,writer__4364__auto__,opt__4365__auto__){
return cljs.core._write(writer__4364__auto__,"cljs.core.async/t_cljs$core$async27801");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async27801.
 */
cljs.core.async.__GT_t_cljs$core$async27801 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async27801(flag__$1,cb__$1,meta27802){
return (new cljs.core.async.t_cljs$core$async27801(flag__$1,cb__$1,meta27802));
});

}

return (new cljs.core.async.t_cljs$core$async27801(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__27812_SHARP_){
var G__27818 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__27812_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__27818) : fret.call(null,G__27818));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__27815_SHARP_){
var G__27819 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__27815_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__27819) : fret.call(null,G__27819));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__4120__auto__ = wport;
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return port;
}
})()], null));
} else {
var G__29993 = (i + (1));
i = G__29993;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4120__auto__ = ret;
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5735__auto__ = (function (){var and__4109__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4109__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4109__auto__;
}
})();
if(cljs.core.truth_(temp__5735__auto__)){
var got = temp__5735__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___30000 = arguments.length;
var i__4731__auto___30001 = (0);
while(true){
if((i__4731__auto___30001 < len__4730__auto___30000)){
args__4736__auto__.push((arguments[i__4731__auto___30001]));

var G__30002 = (i__4731__auto___30001 + (1));
i__4731__auto___30001 = G__30002;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__27836){
var map__27837 = p__27836;
var map__27837__$1 = (((((!((map__27837 == null))))?(((((map__27837.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27837.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27837):map__27837);
var opts = map__27837__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq27831){
var G__27832 = cljs.core.first(seq27831);
var seq27831__$1 = cljs.core.next(seq27831);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27832,seq27831__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__27854 = arguments.length;
switch (G__27854) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__27580__auto___30017 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27581__auto__ = (function (){var switch__27466__auto__ = (function (state_27919){
var state_val_27920 = (state_27919[(1)]);
if((state_val_27920 === (7))){
var inst_27915 = (state_27919[(2)]);
var state_27919__$1 = state_27919;
var statearr_27923_30018 = state_27919__$1;
(statearr_27923_30018[(2)] = inst_27915);

(statearr_27923_30018[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27920 === (1))){
var state_27919__$1 = state_27919;
var statearr_27924_30021 = state_27919__$1;
(statearr_27924_30021[(2)] = null);

(statearr_27924_30021[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27920 === (4))){
var inst_27897 = (state_27919[(7)]);
var inst_27897__$1 = (state_27919[(2)]);
var inst_27898 = (inst_27897__$1 == null);
var state_27919__$1 = (function (){var statearr_27928 = state_27919;
(statearr_27928[(7)] = inst_27897__$1);

return statearr_27928;
})();
if(cljs.core.truth_(inst_27898)){
var statearr_27929_30026 = state_27919__$1;
(statearr_27929_30026[(1)] = (5));

} else {
var statearr_27933_30027 = state_27919__$1;
(statearr_27933_30027[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27920 === (13))){
var state_27919__$1 = state_27919;
var statearr_27935_30028 = state_27919__$1;
(statearr_27935_30028[(2)] = null);

(statearr_27935_30028[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27920 === (6))){
var inst_27897 = (state_27919[(7)]);
var state_27919__$1 = state_27919;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_27919__$1,(11),to,inst_27897);
} else {
if((state_val_27920 === (3))){
var inst_27917 = (state_27919[(2)]);
var state_27919__$1 = state_27919;
return cljs.core.async.impl.ioc_helpers.return_chan(state_27919__$1,inst_27917);
} else {
if((state_val_27920 === (12))){
var state_27919__$1 = state_27919;
var statearr_27938_30029 = state_27919__$1;
(statearr_27938_30029[(2)] = null);

(statearr_27938_30029[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27920 === (2))){
var state_27919__$1 = state_27919;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_27919__$1,(4),from);
} else {
if((state_val_27920 === (11))){
var inst_27907 = (state_27919[(2)]);
var state_27919__$1 = state_27919;
if(cljs.core.truth_(inst_27907)){
var statearr_27939_30031 = state_27919__$1;
(statearr_27939_30031[(1)] = (12));

} else {
var statearr_27940_30036 = state_27919__$1;
(statearr_27940_30036[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27920 === (9))){
var state_27919__$1 = state_27919;
var statearr_27941_30037 = state_27919__$1;
(statearr_27941_30037[(2)] = null);

(statearr_27941_30037[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27920 === (5))){
var state_27919__$1 = state_27919;
if(cljs.core.truth_(close_QMARK_)){
var statearr_27942_30038 = state_27919__$1;
(statearr_27942_30038[(1)] = (8));

} else {
var statearr_27943_30039 = state_27919__$1;
(statearr_27943_30039[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27920 === (14))){
var inst_27913 = (state_27919[(2)]);
var state_27919__$1 = state_27919;
var statearr_27944_30040 = state_27919__$1;
(statearr_27944_30040[(2)] = inst_27913);

(statearr_27944_30040[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27920 === (10))){
var inst_27904 = (state_27919[(2)]);
var state_27919__$1 = state_27919;
var statearr_27949_30041 = state_27919__$1;
(statearr_27949_30041[(2)] = inst_27904);

(statearr_27949_30041[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27920 === (8))){
var inst_27901 = cljs.core.async.close_BANG_(to);
var state_27919__$1 = state_27919;
var statearr_27950_30042 = state_27919__$1;
(statearr_27950_30042[(2)] = inst_27901);

(statearr_27950_30042[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__27467__auto__ = null;
var cljs$core$async$state_machine__27467__auto____0 = (function (){
var statearr_27957 = [null,null,null,null,null,null,null,null];
(statearr_27957[(0)] = cljs$core$async$state_machine__27467__auto__);

(statearr_27957[(1)] = (1));

return statearr_27957;
});
var cljs$core$async$state_machine__27467__auto____1 = (function (state_27919){
while(true){
var ret_value__27468__auto__ = (function (){try{while(true){
var result__27469__auto__ = switch__27466__auto__(state_27919);
if(cljs.core.keyword_identical_QMARK_(result__27469__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27469__auto__;
}
break;
}
}catch (e27958){var ex__27470__auto__ = e27958;
var statearr_27959_30051 = state_27919;
(statearr_27959_30051[(2)] = ex__27470__auto__);


if(cljs.core.seq((state_27919[(4)]))){
var statearr_27960_30052 = state_27919;
(statearr_27960_30052[(1)] = cljs.core.first((state_27919[(4)])));

} else {
throw ex__27470__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27468__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30053 = state_27919;
state_27919 = G__30053;
continue;
} else {
return ret_value__27468__auto__;
}
break;
}
});
cljs$core$async$state_machine__27467__auto__ = function(state_27919){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27467__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27467__auto____1.call(this,state_27919);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27467__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27467__auto____0;
cljs$core$async$state_machine__27467__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27467__auto____1;
return cljs$core$async$state_machine__27467__auto__;
})()
})();
var state__27582__auto__ = (function (){var statearr_27961 = f__27581__auto__();
(statearr_27961[(6)] = c__27580__auto___30017);

return statearr_27961;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27582__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = (function (p__27963){
var vec__27964 = p__27963;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27964,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27964,(1),null);
var job = vec__27964;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__27580__auto___30058 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27581__auto__ = (function (){var switch__27466__auto__ = (function (state_27973){
var state_val_27974 = (state_27973[(1)]);
if((state_val_27974 === (1))){
var state_27973__$1 = state_27973;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_27973__$1,(2),res,v);
} else {
if((state_val_27974 === (2))){
var inst_27970 = (state_27973[(2)]);
var inst_27971 = cljs.core.async.close_BANG_(res);
var state_27973__$1 = (function (){var statearr_27979 = state_27973;
(statearr_27979[(7)] = inst_27970);

return statearr_27979;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_27973__$1,inst_27971);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27467__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27467__auto____0 = (function (){
var statearr_27980 = [null,null,null,null,null,null,null,null];
(statearr_27980[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27467__auto__);

(statearr_27980[(1)] = (1));

return statearr_27980;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27467__auto____1 = (function (state_27973){
while(true){
var ret_value__27468__auto__ = (function (){try{while(true){
var result__27469__auto__ = switch__27466__auto__(state_27973);
if(cljs.core.keyword_identical_QMARK_(result__27469__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27469__auto__;
}
break;
}
}catch (e27981){var ex__27470__auto__ = e27981;
var statearr_27982_30060 = state_27973;
(statearr_27982_30060[(2)] = ex__27470__auto__);


if(cljs.core.seq((state_27973[(4)]))){
var statearr_27983_30063 = state_27973;
(statearr_27983_30063[(1)] = cljs.core.first((state_27973[(4)])));

} else {
throw ex__27470__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27468__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30065 = state_27973;
state_27973 = G__30065;
continue;
} else {
return ret_value__27468__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27467__auto__ = function(state_27973){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27467__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27467__auto____1.call(this,state_27973);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__27467__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27467__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27467__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27467__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27467__auto__;
})()
})();
var state__27582__auto__ = (function (){var statearr_27984 = f__27581__auto__();
(statearr_27984[(6)] = c__27580__auto___30058);

return statearr_27984;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27582__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__27985){
var vec__27986 = p__27985;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27986,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27986,(1),null);
var job = vec__27986;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__4607__auto___30076 = n;
var __30077 = (0);
while(true){
if((__30077 < n__4607__auto___30076)){
var G__27989_30079 = type;
var G__27989_30080__$1 = (((G__27989_30079 instanceof cljs.core.Keyword))?G__27989_30079.fqn:null);
switch (G__27989_30080__$1) {
case "compute":
var c__27580__auto___30085 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__30077,c__27580__auto___30085,G__27989_30079,G__27989_30080__$1,n__4607__auto___30076,jobs,results,process,async){
return (function (){
var f__27581__auto__ = (function (){var switch__27466__auto__ = ((function (__30077,c__27580__auto___30085,G__27989_30079,G__27989_30080__$1,n__4607__auto___30076,jobs,results,process,async){
return (function (state_28002){
var state_val_28003 = (state_28002[(1)]);
if((state_val_28003 === (1))){
var state_28002__$1 = state_28002;
var statearr_28005_30089 = state_28002__$1;
(statearr_28005_30089[(2)] = null);

(statearr_28005_30089[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28003 === (2))){
var state_28002__$1 = state_28002;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_28002__$1,(4),jobs);
} else {
if((state_val_28003 === (3))){
var inst_28000 = (state_28002[(2)]);
var state_28002__$1 = state_28002;
return cljs.core.async.impl.ioc_helpers.return_chan(state_28002__$1,inst_28000);
} else {
if((state_val_28003 === (4))){
var inst_27992 = (state_28002[(2)]);
var inst_27993 = process(inst_27992);
var state_28002__$1 = state_28002;
if(cljs.core.truth_(inst_27993)){
var statearr_28007_30093 = state_28002__$1;
(statearr_28007_30093[(1)] = (5));

} else {
var statearr_28008_30098 = state_28002__$1;
(statearr_28008_30098[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28003 === (5))){
var state_28002__$1 = state_28002;
var statearr_28009_30102 = state_28002__$1;
(statearr_28009_30102[(2)] = null);

(statearr_28009_30102[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28003 === (6))){
var state_28002__$1 = state_28002;
var statearr_28010_30103 = state_28002__$1;
(statearr_28010_30103[(2)] = null);

(statearr_28010_30103[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28003 === (7))){
var inst_27998 = (state_28002[(2)]);
var state_28002__$1 = state_28002;
var statearr_28015_30107 = state_28002__$1;
(statearr_28015_30107[(2)] = inst_27998);

(statearr_28015_30107[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__30077,c__27580__auto___30085,G__27989_30079,G__27989_30080__$1,n__4607__auto___30076,jobs,results,process,async))
;
return ((function (__30077,switch__27466__auto__,c__27580__auto___30085,G__27989_30079,G__27989_30080__$1,n__4607__auto___30076,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27467__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27467__auto____0 = (function (){
var statearr_28030 = [null,null,null,null,null,null,null];
(statearr_28030[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27467__auto__);

(statearr_28030[(1)] = (1));

return statearr_28030;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27467__auto____1 = (function (state_28002){
while(true){
var ret_value__27468__auto__ = (function (){try{while(true){
var result__27469__auto__ = switch__27466__auto__(state_28002);
if(cljs.core.keyword_identical_QMARK_(result__27469__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27469__auto__;
}
break;
}
}catch (e28036){var ex__27470__auto__ = e28036;
var statearr_28037_30111 = state_28002;
(statearr_28037_30111[(2)] = ex__27470__auto__);


if(cljs.core.seq((state_28002[(4)]))){
var statearr_28042_30112 = state_28002;
(statearr_28042_30112[(1)] = cljs.core.first((state_28002[(4)])));

} else {
throw ex__27470__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27468__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30116 = state_28002;
state_28002 = G__30116;
continue;
} else {
return ret_value__27468__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27467__auto__ = function(state_28002){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27467__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27467__auto____1.call(this,state_28002);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__27467__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27467__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27467__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27467__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27467__auto__;
})()
;})(__30077,switch__27466__auto__,c__27580__auto___30085,G__27989_30079,G__27989_30080__$1,n__4607__auto___30076,jobs,results,process,async))
})();
var state__27582__auto__ = (function (){var statearr_28046 = f__27581__auto__();
(statearr_28046[(6)] = c__27580__auto___30085);

return statearr_28046;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27582__auto__);
});})(__30077,c__27580__auto___30085,G__27989_30079,G__27989_30080__$1,n__4607__auto___30076,jobs,results,process,async))
);


break;
case "async":
var c__27580__auto___30117 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__30077,c__27580__auto___30117,G__27989_30079,G__27989_30080__$1,n__4607__auto___30076,jobs,results,process,async){
return (function (){
var f__27581__auto__ = (function (){var switch__27466__auto__ = ((function (__30077,c__27580__auto___30117,G__27989_30079,G__27989_30080__$1,n__4607__auto___30076,jobs,results,process,async){
return (function (state_28079){
var state_val_28080 = (state_28079[(1)]);
if((state_val_28080 === (1))){
var state_28079__$1 = state_28079;
var statearr_28085_30118 = state_28079__$1;
(statearr_28085_30118[(2)] = null);

(statearr_28085_30118[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28080 === (2))){
var state_28079__$1 = state_28079;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_28079__$1,(4),jobs);
} else {
if((state_val_28080 === (3))){
var inst_28077 = (state_28079[(2)]);
var state_28079__$1 = state_28079;
return cljs.core.async.impl.ioc_helpers.return_chan(state_28079__$1,inst_28077);
} else {
if((state_val_28080 === (4))){
var inst_28066 = (state_28079[(2)]);
var inst_28070 = async(inst_28066);
var state_28079__$1 = state_28079;
if(cljs.core.truth_(inst_28070)){
var statearr_28087_30120 = state_28079__$1;
(statearr_28087_30120[(1)] = (5));

} else {
var statearr_28088_30121 = state_28079__$1;
(statearr_28088_30121[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28080 === (5))){
var state_28079__$1 = state_28079;
var statearr_28090_30122 = state_28079__$1;
(statearr_28090_30122[(2)] = null);

(statearr_28090_30122[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28080 === (6))){
var state_28079__$1 = state_28079;
var statearr_28091_30123 = state_28079__$1;
(statearr_28091_30123[(2)] = null);

(statearr_28091_30123[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28080 === (7))){
var inst_28075 = (state_28079[(2)]);
var state_28079__$1 = state_28079;
var statearr_28092_30124 = state_28079__$1;
(statearr_28092_30124[(2)] = inst_28075);

(statearr_28092_30124[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__30077,c__27580__auto___30117,G__27989_30079,G__27989_30080__$1,n__4607__auto___30076,jobs,results,process,async))
;
return ((function (__30077,switch__27466__auto__,c__27580__auto___30117,G__27989_30079,G__27989_30080__$1,n__4607__auto___30076,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27467__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27467__auto____0 = (function (){
var statearr_28093 = [null,null,null,null,null,null,null];
(statearr_28093[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27467__auto__);

(statearr_28093[(1)] = (1));

return statearr_28093;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27467__auto____1 = (function (state_28079){
while(true){
var ret_value__27468__auto__ = (function (){try{while(true){
var result__27469__auto__ = switch__27466__auto__(state_28079);
if(cljs.core.keyword_identical_QMARK_(result__27469__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27469__auto__;
}
break;
}
}catch (e28094){var ex__27470__auto__ = e28094;
var statearr_28099_30129 = state_28079;
(statearr_28099_30129[(2)] = ex__27470__auto__);


if(cljs.core.seq((state_28079[(4)]))){
var statearr_28100_30130 = state_28079;
(statearr_28100_30130[(1)] = cljs.core.first((state_28079[(4)])));

} else {
throw ex__27470__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27468__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30131 = state_28079;
state_28079 = G__30131;
continue;
} else {
return ret_value__27468__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27467__auto__ = function(state_28079){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27467__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27467__auto____1.call(this,state_28079);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__27467__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27467__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27467__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27467__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27467__auto__;
})()
;})(__30077,switch__27466__auto__,c__27580__auto___30117,G__27989_30079,G__27989_30080__$1,n__4607__auto___30076,jobs,results,process,async))
})();
var state__27582__auto__ = (function (){var statearr_28102 = f__27581__auto__();
(statearr_28102[(6)] = c__27580__auto___30117);

return statearr_28102;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27582__auto__);
});})(__30077,c__27580__auto___30117,G__27989_30079,G__27989_30080__$1,n__4607__auto___30076,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__27989_30080__$1)].join('')));

}

var G__30137 = (__30077 + (1));
__30077 = G__30137;
continue;
} else {
}
break;
}

var c__27580__auto___30138 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27581__auto__ = (function (){var switch__27466__auto__ = (function (state_28125){
var state_val_28126 = (state_28125[(1)]);
if((state_val_28126 === (7))){
var inst_28121 = (state_28125[(2)]);
var state_28125__$1 = state_28125;
var statearr_28132_30139 = state_28125__$1;
(statearr_28132_30139[(2)] = inst_28121);

(statearr_28132_30139[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28126 === (1))){
var state_28125__$1 = state_28125;
var statearr_28133_30140 = state_28125__$1;
(statearr_28133_30140[(2)] = null);

(statearr_28133_30140[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28126 === (4))){
var inst_28106 = (state_28125[(7)]);
var inst_28106__$1 = (state_28125[(2)]);
var inst_28107 = (inst_28106__$1 == null);
var state_28125__$1 = (function (){var statearr_28134 = state_28125;
(statearr_28134[(7)] = inst_28106__$1);

return statearr_28134;
})();
if(cljs.core.truth_(inst_28107)){
var statearr_28135_30141 = state_28125__$1;
(statearr_28135_30141[(1)] = (5));

} else {
var statearr_28136_30142 = state_28125__$1;
(statearr_28136_30142[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28126 === (6))){
var inst_28111 = (state_28125[(8)]);
var inst_28106 = (state_28125[(7)]);
var inst_28111__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_28112 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_28113 = [inst_28106,inst_28111__$1];
var inst_28114 = (new cljs.core.PersistentVector(null,2,(5),inst_28112,inst_28113,null));
var state_28125__$1 = (function (){var statearr_28137 = state_28125;
(statearr_28137[(8)] = inst_28111__$1);

return statearr_28137;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_28125__$1,(8),jobs,inst_28114);
} else {
if((state_val_28126 === (3))){
var inst_28123 = (state_28125[(2)]);
var state_28125__$1 = state_28125;
return cljs.core.async.impl.ioc_helpers.return_chan(state_28125__$1,inst_28123);
} else {
if((state_val_28126 === (2))){
var state_28125__$1 = state_28125;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_28125__$1,(4),from);
} else {
if((state_val_28126 === (9))){
var inst_28118 = (state_28125[(2)]);
var state_28125__$1 = (function (){var statearr_28138 = state_28125;
(statearr_28138[(9)] = inst_28118);

return statearr_28138;
})();
var statearr_28139_30147 = state_28125__$1;
(statearr_28139_30147[(2)] = null);

(statearr_28139_30147[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28126 === (5))){
var inst_28109 = cljs.core.async.close_BANG_(jobs);
var state_28125__$1 = state_28125;
var statearr_28140_30151 = state_28125__$1;
(statearr_28140_30151[(2)] = inst_28109);

(statearr_28140_30151[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28126 === (8))){
var inst_28111 = (state_28125[(8)]);
var inst_28116 = (state_28125[(2)]);
var state_28125__$1 = (function (){var statearr_28144 = state_28125;
(statearr_28144[(10)] = inst_28116);

return statearr_28144;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_28125__$1,(9),results,inst_28111);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27467__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27467__auto____0 = (function (){
var statearr_28145 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_28145[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27467__auto__);

(statearr_28145[(1)] = (1));

return statearr_28145;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27467__auto____1 = (function (state_28125){
while(true){
var ret_value__27468__auto__ = (function (){try{while(true){
var result__27469__auto__ = switch__27466__auto__(state_28125);
if(cljs.core.keyword_identical_QMARK_(result__27469__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27469__auto__;
}
break;
}
}catch (e28146){var ex__27470__auto__ = e28146;
var statearr_28147_30156 = state_28125;
(statearr_28147_30156[(2)] = ex__27470__auto__);


if(cljs.core.seq((state_28125[(4)]))){
var statearr_28148_30157 = state_28125;
(statearr_28148_30157[(1)] = cljs.core.first((state_28125[(4)])));

} else {
throw ex__27470__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27468__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30160 = state_28125;
state_28125 = G__30160;
continue;
} else {
return ret_value__27468__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27467__auto__ = function(state_28125){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27467__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27467__auto____1.call(this,state_28125);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__27467__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27467__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27467__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27467__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27467__auto__;
})()
})();
var state__27582__auto__ = (function (){var statearr_28150 = f__27581__auto__();
(statearr_28150[(6)] = c__27580__auto___30138);

return statearr_28150;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27582__auto__);
}));


var c__27580__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27581__auto__ = (function (){var switch__27466__auto__ = (function (state_28197){
var state_val_28198 = (state_28197[(1)]);
if((state_val_28198 === (7))){
var inst_28193 = (state_28197[(2)]);
var state_28197__$1 = state_28197;
var statearr_28199_30161 = state_28197__$1;
(statearr_28199_30161[(2)] = inst_28193);

(statearr_28199_30161[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28198 === (20))){
var state_28197__$1 = state_28197;
var statearr_28200_30162 = state_28197__$1;
(statearr_28200_30162[(2)] = null);

(statearr_28200_30162[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28198 === (1))){
var state_28197__$1 = state_28197;
var statearr_28201_30163 = state_28197__$1;
(statearr_28201_30163[(2)] = null);

(statearr_28201_30163[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28198 === (4))){
var inst_28157 = (state_28197[(7)]);
var inst_28157__$1 = (state_28197[(2)]);
var inst_28158 = (inst_28157__$1 == null);
var state_28197__$1 = (function (){var statearr_28202 = state_28197;
(statearr_28202[(7)] = inst_28157__$1);

return statearr_28202;
})();
if(cljs.core.truth_(inst_28158)){
var statearr_28203_30164 = state_28197__$1;
(statearr_28203_30164[(1)] = (5));

} else {
var statearr_28204_30165 = state_28197__$1;
(statearr_28204_30165[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28198 === (15))){
var inst_28171 = (state_28197[(8)]);
var state_28197__$1 = state_28197;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_28197__$1,(18),to,inst_28171);
} else {
if((state_val_28198 === (21))){
var inst_28188 = (state_28197[(2)]);
var state_28197__$1 = state_28197;
var statearr_28205_30167 = state_28197__$1;
(statearr_28205_30167[(2)] = inst_28188);

(statearr_28205_30167[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28198 === (13))){
var inst_28190 = (state_28197[(2)]);
var state_28197__$1 = (function (){var statearr_28206 = state_28197;
(statearr_28206[(9)] = inst_28190);

return statearr_28206;
})();
var statearr_28207_30171 = state_28197__$1;
(statearr_28207_30171[(2)] = null);

(statearr_28207_30171[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28198 === (6))){
var inst_28157 = (state_28197[(7)]);
var state_28197__$1 = state_28197;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_28197__$1,(11),inst_28157);
} else {
if((state_val_28198 === (17))){
var inst_28179 = (state_28197[(2)]);
var state_28197__$1 = state_28197;
if(cljs.core.truth_(inst_28179)){
var statearr_28208_30174 = state_28197__$1;
(statearr_28208_30174[(1)] = (19));

} else {
var statearr_28209_30177 = state_28197__$1;
(statearr_28209_30177[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28198 === (3))){
var inst_28195 = (state_28197[(2)]);
var state_28197__$1 = state_28197;
return cljs.core.async.impl.ioc_helpers.return_chan(state_28197__$1,inst_28195);
} else {
if((state_val_28198 === (12))){
var inst_28168 = (state_28197[(10)]);
var state_28197__$1 = state_28197;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_28197__$1,(14),inst_28168);
} else {
if((state_val_28198 === (2))){
var state_28197__$1 = state_28197;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_28197__$1,(4),results);
} else {
if((state_val_28198 === (19))){
var state_28197__$1 = state_28197;
var statearr_28210_30185 = state_28197__$1;
(statearr_28210_30185[(2)] = null);

(statearr_28210_30185[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28198 === (11))){
var inst_28168 = (state_28197[(2)]);
var state_28197__$1 = (function (){var statearr_28211 = state_28197;
(statearr_28211[(10)] = inst_28168);

return statearr_28211;
})();
var statearr_28212_30192 = state_28197__$1;
(statearr_28212_30192[(2)] = null);

(statearr_28212_30192[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28198 === (9))){
var state_28197__$1 = state_28197;
var statearr_28217_30193 = state_28197__$1;
(statearr_28217_30193[(2)] = null);

(statearr_28217_30193[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28198 === (5))){
var state_28197__$1 = state_28197;
if(cljs.core.truth_(close_QMARK_)){
var statearr_28218_30194 = state_28197__$1;
(statearr_28218_30194[(1)] = (8));

} else {
var statearr_28220_30195 = state_28197__$1;
(statearr_28220_30195[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28198 === (14))){
var inst_28171 = (state_28197[(8)]);
var inst_28171__$1 = (state_28197[(2)]);
var inst_28172 = (inst_28171__$1 == null);
var inst_28173 = cljs.core.not(inst_28172);
var state_28197__$1 = (function (){var statearr_28221 = state_28197;
(statearr_28221[(8)] = inst_28171__$1);

return statearr_28221;
})();
if(inst_28173){
var statearr_28223_30196 = state_28197__$1;
(statearr_28223_30196[(1)] = (15));

} else {
var statearr_28224_30197 = state_28197__$1;
(statearr_28224_30197[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28198 === (16))){
var state_28197__$1 = state_28197;
var statearr_28225_30198 = state_28197__$1;
(statearr_28225_30198[(2)] = false);

(statearr_28225_30198[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28198 === (10))){
var inst_28164 = (state_28197[(2)]);
var state_28197__$1 = state_28197;
var statearr_28227_30199 = state_28197__$1;
(statearr_28227_30199[(2)] = inst_28164);

(statearr_28227_30199[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28198 === (18))){
var inst_28176 = (state_28197[(2)]);
var state_28197__$1 = state_28197;
var statearr_28228_30200 = state_28197__$1;
(statearr_28228_30200[(2)] = inst_28176);

(statearr_28228_30200[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28198 === (8))){
var inst_28161 = cljs.core.async.close_BANG_(to);
var state_28197__$1 = state_28197;
var statearr_28229_30201 = state_28197__$1;
(statearr_28229_30201[(2)] = inst_28161);

(statearr_28229_30201[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27467__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27467__auto____0 = (function (){
var statearr_28230 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_28230[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27467__auto__);

(statearr_28230[(1)] = (1));

return statearr_28230;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27467__auto____1 = (function (state_28197){
while(true){
var ret_value__27468__auto__ = (function (){try{while(true){
var result__27469__auto__ = switch__27466__auto__(state_28197);
if(cljs.core.keyword_identical_QMARK_(result__27469__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27469__auto__;
}
break;
}
}catch (e28231){var ex__27470__auto__ = e28231;
var statearr_28232_30208 = state_28197;
(statearr_28232_30208[(2)] = ex__27470__auto__);


if(cljs.core.seq((state_28197[(4)]))){
var statearr_28233_30209 = state_28197;
(statearr_28233_30209[(1)] = cljs.core.first((state_28197[(4)])));

} else {
throw ex__27470__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27468__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30210 = state_28197;
state_28197 = G__30210;
continue;
} else {
return ret_value__27468__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27467__auto__ = function(state_28197){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27467__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27467__auto____1.call(this,state_28197);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__27467__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27467__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27467__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27467__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27467__auto__;
})()
})();
var state__27582__auto__ = (function (){var statearr_28234 = f__27581__auto__();
(statearr_28234[(6)] = c__27580__auto__);

return statearr_28234;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27582__auto__);
}));

return c__27580__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__28237 = arguments.length;
switch (G__28237) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__28240 = arguments.length;
switch (G__28240) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__28252 = arguments.length;
switch (G__28252) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__27580__auto___30220 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27581__auto__ = (function (){var switch__27466__auto__ = (function (state_28288){
var state_val_28289 = (state_28288[(1)]);
if((state_val_28289 === (7))){
var inst_28284 = (state_28288[(2)]);
var state_28288__$1 = state_28288;
var statearr_28290_30221 = state_28288__$1;
(statearr_28290_30221[(2)] = inst_28284);

(statearr_28290_30221[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28289 === (1))){
var state_28288__$1 = state_28288;
var statearr_28291_30222 = state_28288__$1;
(statearr_28291_30222[(2)] = null);

(statearr_28291_30222[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28289 === (4))){
var inst_28262 = (state_28288[(7)]);
var inst_28262__$1 = (state_28288[(2)]);
var inst_28263 = (inst_28262__$1 == null);
var state_28288__$1 = (function (){var statearr_28292 = state_28288;
(statearr_28292[(7)] = inst_28262__$1);

return statearr_28292;
})();
if(cljs.core.truth_(inst_28263)){
var statearr_28293_30229 = state_28288__$1;
(statearr_28293_30229[(1)] = (5));

} else {
var statearr_28294_30231 = state_28288__$1;
(statearr_28294_30231[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28289 === (13))){
var state_28288__$1 = state_28288;
var statearr_28295_30234 = state_28288__$1;
(statearr_28295_30234[(2)] = null);

(statearr_28295_30234[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28289 === (6))){
var inst_28262 = (state_28288[(7)]);
var inst_28268 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_28262) : p.call(null,inst_28262));
var state_28288__$1 = state_28288;
if(cljs.core.truth_(inst_28268)){
var statearr_28296_30235 = state_28288__$1;
(statearr_28296_30235[(1)] = (9));

} else {
var statearr_28297_30237 = state_28288__$1;
(statearr_28297_30237[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28289 === (3))){
var inst_28286 = (state_28288[(2)]);
var state_28288__$1 = state_28288;
return cljs.core.async.impl.ioc_helpers.return_chan(state_28288__$1,inst_28286);
} else {
if((state_val_28289 === (12))){
var state_28288__$1 = state_28288;
var statearr_28298_30240 = state_28288__$1;
(statearr_28298_30240[(2)] = null);

(statearr_28298_30240[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28289 === (2))){
var state_28288__$1 = state_28288;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_28288__$1,(4),ch);
} else {
if((state_val_28289 === (11))){
var inst_28262 = (state_28288[(7)]);
var inst_28272 = (state_28288[(2)]);
var state_28288__$1 = state_28288;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_28288__$1,(8),inst_28272,inst_28262);
} else {
if((state_val_28289 === (9))){
var state_28288__$1 = state_28288;
var statearr_28299_30245 = state_28288__$1;
(statearr_28299_30245[(2)] = tc);

(statearr_28299_30245[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28289 === (5))){
var inst_28265 = cljs.core.async.close_BANG_(tc);
var inst_28266 = cljs.core.async.close_BANG_(fc);
var state_28288__$1 = (function (){var statearr_28300 = state_28288;
(statearr_28300[(8)] = inst_28265);

return statearr_28300;
})();
var statearr_28301_30246 = state_28288__$1;
(statearr_28301_30246[(2)] = inst_28266);

(statearr_28301_30246[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28289 === (14))){
var inst_28282 = (state_28288[(2)]);
var state_28288__$1 = state_28288;
var statearr_28311_30247 = state_28288__$1;
(statearr_28311_30247[(2)] = inst_28282);

(statearr_28311_30247[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28289 === (10))){
var state_28288__$1 = state_28288;
var statearr_28312_30248 = state_28288__$1;
(statearr_28312_30248[(2)] = fc);

(statearr_28312_30248[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28289 === (8))){
var inst_28274 = (state_28288[(2)]);
var state_28288__$1 = state_28288;
if(cljs.core.truth_(inst_28274)){
var statearr_28317_30249 = state_28288__$1;
(statearr_28317_30249[(1)] = (12));

} else {
var statearr_28318_30250 = state_28288__$1;
(statearr_28318_30250[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__27467__auto__ = null;
var cljs$core$async$state_machine__27467__auto____0 = (function (){
var statearr_28319 = [null,null,null,null,null,null,null,null,null];
(statearr_28319[(0)] = cljs$core$async$state_machine__27467__auto__);

(statearr_28319[(1)] = (1));

return statearr_28319;
});
var cljs$core$async$state_machine__27467__auto____1 = (function (state_28288){
while(true){
var ret_value__27468__auto__ = (function (){try{while(true){
var result__27469__auto__ = switch__27466__auto__(state_28288);
if(cljs.core.keyword_identical_QMARK_(result__27469__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27469__auto__;
}
break;
}
}catch (e28320){var ex__27470__auto__ = e28320;
var statearr_28321_30251 = state_28288;
(statearr_28321_30251[(2)] = ex__27470__auto__);


if(cljs.core.seq((state_28288[(4)]))){
var statearr_28322_30252 = state_28288;
(statearr_28322_30252[(1)] = cljs.core.first((state_28288[(4)])));

} else {
throw ex__27470__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27468__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30253 = state_28288;
state_28288 = G__30253;
continue;
} else {
return ret_value__27468__auto__;
}
break;
}
});
cljs$core$async$state_machine__27467__auto__ = function(state_28288){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27467__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27467__auto____1.call(this,state_28288);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27467__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27467__auto____0;
cljs$core$async$state_machine__27467__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27467__auto____1;
return cljs$core$async$state_machine__27467__auto__;
})()
})();
var state__27582__auto__ = (function (){var statearr_28323 = f__27581__auto__();
(statearr_28323[(6)] = c__27580__auto___30220);

return statearr_28323;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27582__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__27580__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27581__auto__ = (function (){var switch__27466__auto__ = (function (state_28345){
var state_val_28346 = (state_28345[(1)]);
if((state_val_28346 === (7))){
var inst_28341 = (state_28345[(2)]);
var state_28345__$1 = state_28345;
var statearr_28347_30259 = state_28345__$1;
(statearr_28347_30259[(2)] = inst_28341);

(statearr_28347_30259[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28346 === (1))){
var inst_28324 = init;
var inst_28325 = inst_28324;
var state_28345__$1 = (function (){var statearr_28348 = state_28345;
(statearr_28348[(7)] = inst_28325);

return statearr_28348;
})();
var statearr_28349_30260 = state_28345__$1;
(statearr_28349_30260[(2)] = null);

(statearr_28349_30260[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28346 === (4))){
var inst_28328 = (state_28345[(8)]);
var inst_28328__$1 = (state_28345[(2)]);
var inst_28329 = (inst_28328__$1 == null);
var state_28345__$1 = (function (){var statearr_28350 = state_28345;
(statearr_28350[(8)] = inst_28328__$1);

return statearr_28350;
})();
if(cljs.core.truth_(inst_28329)){
var statearr_28351_30261 = state_28345__$1;
(statearr_28351_30261[(1)] = (5));

} else {
var statearr_28352_30262 = state_28345__$1;
(statearr_28352_30262[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28346 === (6))){
var inst_28325 = (state_28345[(7)]);
var inst_28328 = (state_28345[(8)]);
var inst_28332 = (state_28345[(9)]);
var inst_28332__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_28325,inst_28328) : f.call(null,inst_28325,inst_28328));
var inst_28333 = cljs.core.reduced_QMARK_(inst_28332__$1);
var state_28345__$1 = (function (){var statearr_28353 = state_28345;
(statearr_28353[(9)] = inst_28332__$1);

return statearr_28353;
})();
if(inst_28333){
var statearr_28354_30264 = state_28345__$1;
(statearr_28354_30264[(1)] = (8));

} else {
var statearr_28355_30265 = state_28345__$1;
(statearr_28355_30265[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28346 === (3))){
var inst_28343 = (state_28345[(2)]);
var state_28345__$1 = state_28345;
return cljs.core.async.impl.ioc_helpers.return_chan(state_28345__$1,inst_28343);
} else {
if((state_val_28346 === (2))){
var state_28345__$1 = state_28345;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_28345__$1,(4),ch);
} else {
if((state_val_28346 === (9))){
var inst_28332 = (state_28345[(9)]);
var inst_28325 = inst_28332;
var state_28345__$1 = (function (){var statearr_28356 = state_28345;
(statearr_28356[(7)] = inst_28325);

return statearr_28356;
})();
var statearr_28357_30267 = state_28345__$1;
(statearr_28357_30267[(2)] = null);

(statearr_28357_30267[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28346 === (5))){
var inst_28325 = (state_28345[(7)]);
var state_28345__$1 = state_28345;
var statearr_28358_30268 = state_28345__$1;
(statearr_28358_30268[(2)] = inst_28325);

(statearr_28358_30268[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28346 === (10))){
var inst_28339 = (state_28345[(2)]);
var state_28345__$1 = state_28345;
var statearr_28368_30271 = state_28345__$1;
(statearr_28368_30271[(2)] = inst_28339);

(statearr_28368_30271[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28346 === (8))){
var inst_28332 = (state_28345[(9)]);
var inst_28335 = cljs.core.deref(inst_28332);
var state_28345__$1 = state_28345;
var statearr_28369_30272 = state_28345__$1;
(statearr_28369_30272[(2)] = inst_28335);

(statearr_28369_30272[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__27467__auto__ = null;
var cljs$core$async$reduce_$_state_machine__27467__auto____0 = (function (){
var statearr_28374 = [null,null,null,null,null,null,null,null,null,null];
(statearr_28374[(0)] = cljs$core$async$reduce_$_state_machine__27467__auto__);

(statearr_28374[(1)] = (1));

return statearr_28374;
});
var cljs$core$async$reduce_$_state_machine__27467__auto____1 = (function (state_28345){
while(true){
var ret_value__27468__auto__ = (function (){try{while(true){
var result__27469__auto__ = switch__27466__auto__(state_28345);
if(cljs.core.keyword_identical_QMARK_(result__27469__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27469__auto__;
}
break;
}
}catch (e28375){var ex__27470__auto__ = e28375;
var statearr_28376_30273 = state_28345;
(statearr_28376_30273[(2)] = ex__27470__auto__);


if(cljs.core.seq((state_28345[(4)]))){
var statearr_28377_30274 = state_28345;
(statearr_28377_30274[(1)] = cljs.core.first((state_28345[(4)])));

} else {
throw ex__27470__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27468__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30275 = state_28345;
state_28345 = G__30275;
continue;
} else {
return ret_value__27468__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__27467__auto__ = function(state_28345){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__27467__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__27467__auto____1.call(this,state_28345);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__27467__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__27467__auto____0;
cljs$core$async$reduce_$_state_machine__27467__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__27467__auto____1;
return cljs$core$async$reduce_$_state_machine__27467__auto__;
})()
})();
var state__27582__auto__ = (function (){var statearr_28378 = f__27581__auto__();
(statearr_28378[(6)] = c__27580__auto__);

return statearr_28378;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27582__auto__);
}));

return c__27580__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__27580__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27581__auto__ = (function (){var switch__27466__auto__ = (function (state_28384){
var state_val_28385 = (state_28384[(1)]);
if((state_val_28385 === (1))){
var inst_28379 = cljs.core.async.reduce(f__$1,init,ch);
var state_28384__$1 = state_28384;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_28384__$1,(2),inst_28379);
} else {
if((state_val_28385 === (2))){
var inst_28381 = (state_28384[(2)]);
var inst_28382 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_28381) : f__$1.call(null,inst_28381));
var state_28384__$1 = state_28384;
return cljs.core.async.impl.ioc_helpers.return_chan(state_28384__$1,inst_28382);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__27467__auto__ = null;
var cljs$core$async$transduce_$_state_machine__27467__auto____0 = (function (){
var statearr_28386 = [null,null,null,null,null,null,null];
(statearr_28386[(0)] = cljs$core$async$transduce_$_state_machine__27467__auto__);

(statearr_28386[(1)] = (1));

return statearr_28386;
});
var cljs$core$async$transduce_$_state_machine__27467__auto____1 = (function (state_28384){
while(true){
var ret_value__27468__auto__ = (function (){try{while(true){
var result__27469__auto__ = switch__27466__auto__(state_28384);
if(cljs.core.keyword_identical_QMARK_(result__27469__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27469__auto__;
}
break;
}
}catch (e28387){var ex__27470__auto__ = e28387;
var statearr_28388_30278 = state_28384;
(statearr_28388_30278[(2)] = ex__27470__auto__);


if(cljs.core.seq((state_28384[(4)]))){
var statearr_28389_30279 = state_28384;
(statearr_28389_30279[(1)] = cljs.core.first((state_28384[(4)])));

} else {
throw ex__27470__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27468__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30280 = state_28384;
state_28384 = G__30280;
continue;
} else {
return ret_value__27468__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__27467__auto__ = function(state_28384){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__27467__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__27467__auto____1.call(this,state_28384);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__27467__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__27467__auto____0;
cljs$core$async$transduce_$_state_machine__27467__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__27467__auto____1;
return cljs$core$async$transduce_$_state_machine__27467__auto__;
})()
})();
var state__27582__auto__ = (function (){var statearr_28394 = f__27581__auto__();
(statearr_28394[(6)] = c__27580__auto__);

return statearr_28394;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27582__auto__);
}));

return c__27580__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__28401 = arguments.length;
switch (G__28401) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__27580__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27581__auto__ = (function (){var switch__27466__auto__ = (function (state_28430){
var state_val_28431 = (state_28430[(1)]);
if((state_val_28431 === (7))){
var inst_28408 = (state_28430[(2)]);
var state_28430__$1 = state_28430;
var statearr_28432_30282 = state_28430__$1;
(statearr_28432_30282[(2)] = inst_28408);

(statearr_28432_30282[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28431 === (1))){
var inst_28402 = cljs.core.seq(coll);
var inst_28403 = inst_28402;
var state_28430__$1 = (function (){var statearr_28433 = state_28430;
(statearr_28433[(7)] = inst_28403);

return statearr_28433;
})();
var statearr_28434_30283 = state_28430__$1;
(statearr_28434_30283[(2)] = null);

(statearr_28434_30283[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28431 === (4))){
var inst_28403 = (state_28430[(7)]);
var inst_28406 = cljs.core.first(inst_28403);
var state_28430__$1 = state_28430;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_28430__$1,(7),ch,inst_28406);
} else {
if((state_val_28431 === (13))){
var inst_28420 = (state_28430[(2)]);
var state_28430__$1 = state_28430;
var statearr_28435_30285 = state_28430__$1;
(statearr_28435_30285[(2)] = inst_28420);

(statearr_28435_30285[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28431 === (6))){
var inst_28411 = (state_28430[(2)]);
var state_28430__$1 = state_28430;
if(cljs.core.truth_(inst_28411)){
var statearr_28436_30286 = state_28430__$1;
(statearr_28436_30286[(1)] = (8));

} else {
var statearr_28437_30287 = state_28430__$1;
(statearr_28437_30287[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28431 === (3))){
var inst_28424 = (state_28430[(2)]);
var state_28430__$1 = state_28430;
return cljs.core.async.impl.ioc_helpers.return_chan(state_28430__$1,inst_28424);
} else {
if((state_val_28431 === (12))){
var state_28430__$1 = state_28430;
var statearr_28438_30290 = state_28430__$1;
(statearr_28438_30290[(2)] = null);

(statearr_28438_30290[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28431 === (2))){
var inst_28403 = (state_28430[(7)]);
var state_28430__$1 = state_28430;
if(cljs.core.truth_(inst_28403)){
var statearr_28439_30293 = state_28430__$1;
(statearr_28439_30293[(1)] = (4));

} else {
var statearr_28440_30294 = state_28430__$1;
(statearr_28440_30294[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28431 === (11))){
var inst_28417 = cljs.core.async.close_BANG_(ch);
var state_28430__$1 = state_28430;
var statearr_28445_30295 = state_28430__$1;
(statearr_28445_30295[(2)] = inst_28417);

(statearr_28445_30295[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28431 === (9))){
var state_28430__$1 = state_28430;
if(cljs.core.truth_(close_QMARK_)){
var statearr_28446_30296 = state_28430__$1;
(statearr_28446_30296[(1)] = (11));

} else {
var statearr_28447_30297 = state_28430__$1;
(statearr_28447_30297[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28431 === (5))){
var inst_28403 = (state_28430[(7)]);
var state_28430__$1 = state_28430;
var statearr_28453_30298 = state_28430__$1;
(statearr_28453_30298[(2)] = inst_28403);

(statearr_28453_30298[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28431 === (10))){
var inst_28422 = (state_28430[(2)]);
var state_28430__$1 = state_28430;
var statearr_28454_30299 = state_28430__$1;
(statearr_28454_30299[(2)] = inst_28422);

(statearr_28454_30299[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28431 === (8))){
var inst_28403 = (state_28430[(7)]);
var inst_28413 = cljs.core.next(inst_28403);
var inst_28403__$1 = inst_28413;
var state_28430__$1 = (function (){var statearr_28455 = state_28430;
(statearr_28455[(7)] = inst_28403__$1);

return statearr_28455;
})();
var statearr_28456_30307 = state_28430__$1;
(statearr_28456_30307[(2)] = null);

(statearr_28456_30307[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__27467__auto__ = null;
var cljs$core$async$state_machine__27467__auto____0 = (function (){
var statearr_28457 = [null,null,null,null,null,null,null,null];
(statearr_28457[(0)] = cljs$core$async$state_machine__27467__auto__);

(statearr_28457[(1)] = (1));

return statearr_28457;
});
var cljs$core$async$state_machine__27467__auto____1 = (function (state_28430){
while(true){
var ret_value__27468__auto__ = (function (){try{while(true){
var result__27469__auto__ = switch__27466__auto__(state_28430);
if(cljs.core.keyword_identical_QMARK_(result__27469__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27469__auto__;
}
break;
}
}catch (e28458){var ex__27470__auto__ = e28458;
var statearr_28459_30314 = state_28430;
(statearr_28459_30314[(2)] = ex__27470__auto__);


if(cljs.core.seq((state_28430[(4)]))){
var statearr_28460_30315 = state_28430;
(statearr_28460_30315[(1)] = cljs.core.first((state_28430[(4)])));

} else {
throw ex__27470__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27468__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30316 = state_28430;
state_28430 = G__30316;
continue;
} else {
return ret_value__27468__auto__;
}
break;
}
});
cljs$core$async$state_machine__27467__auto__ = function(state_28430){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27467__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27467__auto____1.call(this,state_28430);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27467__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27467__auto____0;
cljs$core$async$state_machine__27467__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27467__auto____1;
return cljs$core$async$state_machine__27467__auto__;
})()
})();
var state__27582__auto__ = (function (){var statearr_28461 = f__27581__auto__();
(statearr_28461[(6)] = c__27580__auto__);

return statearr_28461;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27582__auto__);
}));

return c__27580__auto__;
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_30324 = (function (_){
var x__4422__auto__ = (((_ == null))?null:_);
var m__4423__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4422__auto__)]);
if((!((m__4423__auto__ == null)))){
return (m__4423__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4423__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4423__auto__.call(null,_));
} else {
var m__4420__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4420__auto__ == null)))){
return (m__4420__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4420__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4420__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_30324(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_30325 = (function (m,ch,close_QMARK_){
var x__4422__auto__ = (((m == null))?null:m);
var m__4423__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4422__auto__)]);
if((!((m__4423__auto__ == null)))){
return (m__4423__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4423__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4423__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4420__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4420__auto__ == null)))){
return (m__4420__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4420__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4420__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_30325(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_30328 = (function (m,ch){
var x__4422__auto__ = (((m == null))?null:m);
var m__4423__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4422__auto__)]);
if((!((m__4423__auto__ == null)))){
return (m__4423__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4423__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4423__auto__.call(null,m,ch));
} else {
var m__4420__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4420__auto__ == null)))){
return (m__4420__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4420__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4420__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_30328(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_30330 = (function (m){
var x__4422__auto__ = (((m == null))?null:m);
var m__4423__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4422__auto__)]);
if((!((m__4423__auto__ == null)))){
return (m__4423__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4423__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4423__auto__.call(null,m));
} else {
var m__4420__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4420__auto__ == null)))){
return (m__4420__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4420__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4420__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_30330(m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async28484 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28484 = (function (ch,cs,meta28485){
this.ch = ch;
this.cs = cs;
this.meta28485 = meta28485;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async28484.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28486,meta28485__$1){
var self__ = this;
var _28486__$1 = this;
return (new cljs.core.async.t_cljs$core$async28484(self__.ch,self__.cs,meta28485__$1));
}));

(cljs.core.async.t_cljs$core$async28484.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28486){
var self__ = this;
var _28486__$1 = this;
return self__.meta28485;
}));

(cljs.core.async.t_cljs$core$async28484.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async28484.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async28484.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async28484.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async28484.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async28484.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async28484.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta28485","meta28485",1786882494,null)], null);
}));

(cljs.core.async.t_cljs$core$async28484.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async28484.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28484");

(cljs.core.async.t_cljs$core$async28484.cljs$lang$ctorPrWriter = (function (this__4363__auto__,writer__4364__auto__,opt__4365__auto__){
return cljs.core._write(writer__4364__auto__,"cljs.core.async/t_cljs$core$async28484");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28484.
 */
cljs.core.async.__GT_t_cljs$core$async28484 = (function cljs$core$async$mult_$___GT_t_cljs$core$async28484(ch__$1,cs__$1,meta28485){
return (new cljs.core.async.t_cljs$core$async28484(ch__$1,cs__$1,meta28485));
});

}

return (new cljs.core.async.t_cljs$core$async28484(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__27580__auto___30335 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27581__auto__ = (function (){var switch__27466__auto__ = (function (state_28627){
var state_val_28628 = (state_28627[(1)]);
if((state_val_28628 === (7))){
var inst_28621 = (state_28627[(2)]);
var state_28627__$1 = state_28627;
var statearr_28631_30340 = state_28627__$1;
(statearr_28631_30340[(2)] = inst_28621);

(statearr_28631_30340[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28628 === (20))){
var inst_28524 = (state_28627[(7)]);
var inst_28537 = cljs.core.first(inst_28524);
var inst_28538 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_28537,(0),null);
var inst_28539 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_28537,(1),null);
var state_28627__$1 = (function (){var statearr_28632 = state_28627;
(statearr_28632[(8)] = inst_28538);

return statearr_28632;
})();
if(cljs.core.truth_(inst_28539)){
var statearr_28633_30342 = state_28627__$1;
(statearr_28633_30342[(1)] = (22));

} else {
var statearr_28634_30343 = state_28627__$1;
(statearr_28634_30343[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28628 === (27))){
var inst_28569 = (state_28627[(9)]);
var inst_28574 = (state_28627[(10)]);
var inst_28493 = (state_28627[(11)]);
var inst_28567 = (state_28627[(12)]);
var inst_28574__$1 = cljs.core._nth(inst_28567,inst_28569);
var inst_28575 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_28574__$1,inst_28493,done);
var state_28627__$1 = (function (){var statearr_28635 = state_28627;
(statearr_28635[(10)] = inst_28574__$1);

return statearr_28635;
})();
if(cljs.core.truth_(inst_28575)){
var statearr_28636_30345 = state_28627__$1;
(statearr_28636_30345[(1)] = (30));

} else {
var statearr_28637_30346 = state_28627__$1;
(statearr_28637_30346[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28628 === (1))){
var state_28627__$1 = state_28627;
var statearr_28638_30347 = state_28627__$1;
(statearr_28638_30347[(2)] = null);

(statearr_28638_30347[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28628 === (24))){
var inst_28524 = (state_28627[(7)]);
var inst_28544 = (state_28627[(2)]);
var inst_28545 = cljs.core.next(inst_28524);
var inst_28502 = inst_28545;
var inst_28503 = null;
var inst_28504 = (0);
var inst_28505 = (0);
var state_28627__$1 = (function (){var statearr_28643 = state_28627;
(statearr_28643[(13)] = inst_28505);

(statearr_28643[(14)] = inst_28504);

(statearr_28643[(15)] = inst_28544);

(statearr_28643[(16)] = inst_28502);

(statearr_28643[(17)] = inst_28503);

return statearr_28643;
})();
var statearr_28644_30352 = state_28627__$1;
(statearr_28644_30352[(2)] = null);

(statearr_28644_30352[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28628 === (39))){
var state_28627__$1 = state_28627;
var statearr_28651_30353 = state_28627__$1;
(statearr_28651_30353[(2)] = null);

(statearr_28651_30353[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28628 === (4))){
var inst_28493 = (state_28627[(11)]);
var inst_28493__$1 = (state_28627[(2)]);
var inst_28494 = (inst_28493__$1 == null);
var state_28627__$1 = (function (){var statearr_28652 = state_28627;
(statearr_28652[(11)] = inst_28493__$1);

return statearr_28652;
})();
if(cljs.core.truth_(inst_28494)){
var statearr_28656_30354 = state_28627__$1;
(statearr_28656_30354[(1)] = (5));

} else {
var statearr_28657_30355 = state_28627__$1;
(statearr_28657_30355[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28628 === (15))){
var inst_28505 = (state_28627[(13)]);
var inst_28504 = (state_28627[(14)]);
var inst_28502 = (state_28627[(16)]);
var inst_28503 = (state_28627[(17)]);
var inst_28520 = (state_28627[(2)]);
var inst_28521 = (inst_28505 + (1));
var tmp28645 = inst_28504;
var tmp28646 = inst_28502;
var tmp28647 = inst_28503;
var inst_28502__$1 = tmp28646;
var inst_28503__$1 = tmp28647;
var inst_28504__$1 = tmp28645;
var inst_28505__$1 = inst_28521;
var state_28627__$1 = (function (){var statearr_28662 = state_28627;
(statearr_28662[(13)] = inst_28505__$1);

(statearr_28662[(14)] = inst_28504__$1);

(statearr_28662[(18)] = inst_28520);

(statearr_28662[(16)] = inst_28502__$1);

(statearr_28662[(17)] = inst_28503__$1);

return statearr_28662;
})();
var statearr_28663_30356 = state_28627__$1;
(statearr_28663_30356[(2)] = null);

(statearr_28663_30356[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28628 === (21))){
var inst_28548 = (state_28627[(2)]);
var state_28627__$1 = state_28627;
var statearr_28667_30357 = state_28627__$1;
(statearr_28667_30357[(2)] = inst_28548);

(statearr_28667_30357[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28628 === (31))){
var inst_28574 = (state_28627[(10)]);
var inst_28578 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_28574);
var state_28627__$1 = state_28627;
var statearr_28671_30358 = state_28627__$1;
(statearr_28671_30358[(2)] = inst_28578);

(statearr_28671_30358[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28628 === (32))){
var inst_28569 = (state_28627[(9)]);
var inst_28568 = (state_28627[(19)]);
var inst_28566 = (state_28627[(20)]);
var inst_28567 = (state_28627[(12)]);
var inst_28580 = (state_28627[(2)]);
var inst_28581 = (inst_28569 + (1));
var tmp28664 = inst_28568;
var tmp28665 = inst_28566;
var tmp28666 = inst_28567;
var inst_28566__$1 = tmp28665;
var inst_28567__$1 = tmp28666;
var inst_28568__$1 = tmp28664;
var inst_28569__$1 = inst_28581;
var state_28627__$1 = (function (){var statearr_28675 = state_28627;
(statearr_28675[(9)] = inst_28569__$1);

(statearr_28675[(19)] = inst_28568__$1);

(statearr_28675[(20)] = inst_28566__$1);

(statearr_28675[(12)] = inst_28567__$1);

(statearr_28675[(21)] = inst_28580);

return statearr_28675;
})();
var statearr_28676_30362 = state_28627__$1;
(statearr_28676_30362[(2)] = null);

(statearr_28676_30362[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28628 === (40))){
var inst_28593 = (state_28627[(22)]);
var inst_28597 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_28593);
var state_28627__$1 = state_28627;
var statearr_28681_30363 = state_28627__$1;
(statearr_28681_30363[(2)] = inst_28597);

(statearr_28681_30363[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28628 === (33))){
var inst_28584 = (state_28627[(23)]);
var inst_28586 = cljs.core.chunked_seq_QMARK_(inst_28584);
var state_28627__$1 = state_28627;
if(inst_28586){
var statearr_28682_30364 = state_28627__$1;
(statearr_28682_30364[(1)] = (36));

} else {
var statearr_28683_30365 = state_28627__$1;
(statearr_28683_30365[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28628 === (13))){
var inst_28514 = (state_28627[(24)]);
var inst_28517 = cljs.core.async.close_BANG_(inst_28514);
var state_28627__$1 = state_28627;
var statearr_28684_30366 = state_28627__$1;
(statearr_28684_30366[(2)] = inst_28517);

(statearr_28684_30366[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28628 === (22))){
var inst_28538 = (state_28627[(8)]);
var inst_28541 = cljs.core.async.close_BANG_(inst_28538);
var state_28627__$1 = state_28627;
var statearr_28685_30368 = state_28627__$1;
(statearr_28685_30368[(2)] = inst_28541);

(statearr_28685_30368[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28628 === (36))){
var inst_28584 = (state_28627[(23)]);
var inst_28588 = cljs.core.chunk_first(inst_28584);
var inst_28589 = cljs.core.chunk_rest(inst_28584);
var inst_28590 = cljs.core.count(inst_28588);
var inst_28566 = inst_28589;
var inst_28567 = inst_28588;
var inst_28568 = inst_28590;
var inst_28569 = (0);
var state_28627__$1 = (function (){var statearr_28686 = state_28627;
(statearr_28686[(9)] = inst_28569);

(statearr_28686[(19)] = inst_28568);

(statearr_28686[(20)] = inst_28566);

(statearr_28686[(12)] = inst_28567);

return statearr_28686;
})();
var statearr_28687_30369 = state_28627__$1;
(statearr_28687_30369[(2)] = null);

(statearr_28687_30369[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28628 === (41))){
var inst_28584 = (state_28627[(23)]);
var inst_28599 = (state_28627[(2)]);
var inst_28600 = cljs.core.next(inst_28584);
var inst_28566 = inst_28600;
var inst_28567 = null;
var inst_28568 = (0);
var inst_28569 = (0);
var state_28627__$1 = (function (){var statearr_28688 = state_28627;
(statearr_28688[(9)] = inst_28569);

(statearr_28688[(19)] = inst_28568);

(statearr_28688[(25)] = inst_28599);

(statearr_28688[(20)] = inst_28566);

(statearr_28688[(12)] = inst_28567);

return statearr_28688;
})();
var statearr_28689_30375 = state_28627__$1;
(statearr_28689_30375[(2)] = null);

(statearr_28689_30375[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28628 === (43))){
var state_28627__$1 = state_28627;
var statearr_28690_30376 = state_28627__$1;
(statearr_28690_30376[(2)] = null);

(statearr_28690_30376[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28628 === (29))){
var inst_28608 = (state_28627[(2)]);
var state_28627__$1 = state_28627;
var statearr_28691_30377 = state_28627__$1;
(statearr_28691_30377[(2)] = inst_28608);

(statearr_28691_30377[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28628 === (44))){
var inst_28617 = (state_28627[(2)]);
var state_28627__$1 = (function (){var statearr_28692 = state_28627;
(statearr_28692[(26)] = inst_28617);

return statearr_28692;
})();
var statearr_28693_30380 = state_28627__$1;
(statearr_28693_30380[(2)] = null);

(statearr_28693_30380[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28628 === (6))){
var inst_28558 = (state_28627[(27)]);
var inst_28557 = cljs.core.deref(cs);
var inst_28558__$1 = cljs.core.keys(inst_28557);
var inst_28559 = cljs.core.count(inst_28558__$1);
var inst_28560 = cljs.core.reset_BANG_(dctr,inst_28559);
var inst_28565 = cljs.core.seq(inst_28558__$1);
var inst_28566 = inst_28565;
var inst_28567 = null;
var inst_28568 = (0);
var inst_28569 = (0);
var state_28627__$1 = (function (){var statearr_28694 = state_28627;
(statearr_28694[(9)] = inst_28569);

(statearr_28694[(28)] = inst_28560);

(statearr_28694[(19)] = inst_28568);

(statearr_28694[(20)] = inst_28566);

(statearr_28694[(12)] = inst_28567);

(statearr_28694[(27)] = inst_28558__$1);

return statearr_28694;
})();
var statearr_28695_30386 = state_28627__$1;
(statearr_28695_30386[(2)] = null);

(statearr_28695_30386[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28628 === (28))){
var inst_28566 = (state_28627[(20)]);
var inst_28584 = (state_28627[(23)]);
var inst_28584__$1 = cljs.core.seq(inst_28566);
var state_28627__$1 = (function (){var statearr_28696 = state_28627;
(statearr_28696[(23)] = inst_28584__$1);

return statearr_28696;
})();
if(inst_28584__$1){
var statearr_28697_30387 = state_28627__$1;
(statearr_28697_30387[(1)] = (33));

} else {
var statearr_28698_30388 = state_28627__$1;
(statearr_28698_30388[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28628 === (25))){
var inst_28569 = (state_28627[(9)]);
var inst_28568 = (state_28627[(19)]);
var inst_28571 = (inst_28569 < inst_28568);
var inst_28572 = inst_28571;
var state_28627__$1 = state_28627;
if(cljs.core.truth_(inst_28572)){
var statearr_28699_30389 = state_28627__$1;
(statearr_28699_30389[(1)] = (27));

} else {
var statearr_28700_30390 = state_28627__$1;
(statearr_28700_30390[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28628 === (34))){
var state_28627__$1 = state_28627;
var statearr_28701_30391 = state_28627__$1;
(statearr_28701_30391[(2)] = null);

(statearr_28701_30391[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28628 === (17))){
var state_28627__$1 = state_28627;
var statearr_28702_30392 = state_28627__$1;
(statearr_28702_30392[(2)] = null);

(statearr_28702_30392[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28628 === (3))){
var inst_28623 = (state_28627[(2)]);
var state_28627__$1 = state_28627;
return cljs.core.async.impl.ioc_helpers.return_chan(state_28627__$1,inst_28623);
} else {
if((state_val_28628 === (12))){
var inst_28553 = (state_28627[(2)]);
var state_28627__$1 = state_28627;
var statearr_28703_30396 = state_28627__$1;
(statearr_28703_30396[(2)] = inst_28553);

(statearr_28703_30396[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28628 === (2))){
var state_28627__$1 = state_28627;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_28627__$1,(4),ch);
} else {
if((state_val_28628 === (23))){
var state_28627__$1 = state_28627;
var statearr_28704_30397 = state_28627__$1;
(statearr_28704_30397[(2)] = null);

(statearr_28704_30397[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28628 === (35))){
var inst_28606 = (state_28627[(2)]);
var state_28627__$1 = state_28627;
var statearr_28705_30402 = state_28627__$1;
(statearr_28705_30402[(2)] = inst_28606);

(statearr_28705_30402[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28628 === (19))){
var inst_28524 = (state_28627[(7)]);
var inst_28529 = cljs.core.chunk_first(inst_28524);
var inst_28530 = cljs.core.chunk_rest(inst_28524);
var inst_28531 = cljs.core.count(inst_28529);
var inst_28502 = inst_28530;
var inst_28503 = inst_28529;
var inst_28504 = inst_28531;
var inst_28505 = (0);
var state_28627__$1 = (function (){var statearr_28706 = state_28627;
(statearr_28706[(13)] = inst_28505);

(statearr_28706[(14)] = inst_28504);

(statearr_28706[(16)] = inst_28502);

(statearr_28706[(17)] = inst_28503);

return statearr_28706;
})();
var statearr_28707_30407 = state_28627__$1;
(statearr_28707_30407[(2)] = null);

(statearr_28707_30407[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28628 === (11))){
var inst_28502 = (state_28627[(16)]);
var inst_28524 = (state_28627[(7)]);
var inst_28524__$1 = cljs.core.seq(inst_28502);
var state_28627__$1 = (function (){var statearr_28708 = state_28627;
(statearr_28708[(7)] = inst_28524__$1);

return statearr_28708;
})();
if(inst_28524__$1){
var statearr_28709_30413 = state_28627__$1;
(statearr_28709_30413[(1)] = (16));

} else {
var statearr_28710_30414 = state_28627__$1;
(statearr_28710_30414[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28628 === (9))){
var inst_28555 = (state_28627[(2)]);
var state_28627__$1 = state_28627;
var statearr_28711_30417 = state_28627__$1;
(statearr_28711_30417[(2)] = inst_28555);

(statearr_28711_30417[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28628 === (5))){
var inst_28500 = cljs.core.deref(cs);
var inst_28501 = cljs.core.seq(inst_28500);
var inst_28502 = inst_28501;
var inst_28503 = null;
var inst_28504 = (0);
var inst_28505 = (0);
var state_28627__$1 = (function (){var statearr_28712 = state_28627;
(statearr_28712[(13)] = inst_28505);

(statearr_28712[(14)] = inst_28504);

(statearr_28712[(16)] = inst_28502);

(statearr_28712[(17)] = inst_28503);

return statearr_28712;
})();
var statearr_28713_30420 = state_28627__$1;
(statearr_28713_30420[(2)] = null);

(statearr_28713_30420[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28628 === (14))){
var state_28627__$1 = state_28627;
var statearr_28714_30422 = state_28627__$1;
(statearr_28714_30422[(2)] = null);

(statearr_28714_30422[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28628 === (45))){
var inst_28614 = (state_28627[(2)]);
var state_28627__$1 = state_28627;
var statearr_28715_30425 = state_28627__$1;
(statearr_28715_30425[(2)] = inst_28614);

(statearr_28715_30425[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28628 === (26))){
var inst_28558 = (state_28627[(27)]);
var inst_28610 = (state_28627[(2)]);
var inst_28611 = cljs.core.seq(inst_28558);
var state_28627__$1 = (function (){var statearr_28719 = state_28627;
(statearr_28719[(29)] = inst_28610);

return statearr_28719;
})();
if(inst_28611){
var statearr_28720_30426 = state_28627__$1;
(statearr_28720_30426[(1)] = (42));

} else {
var statearr_28721_30427 = state_28627__$1;
(statearr_28721_30427[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28628 === (16))){
var inst_28524 = (state_28627[(7)]);
var inst_28526 = cljs.core.chunked_seq_QMARK_(inst_28524);
var state_28627__$1 = state_28627;
if(inst_28526){
var statearr_28725_30428 = state_28627__$1;
(statearr_28725_30428[(1)] = (19));

} else {
var statearr_28726_30429 = state_28627__$1;
(statearr_28726_30429[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28628 === (38))){
var inst_28603 = (state_28627[(2)]);
var state_28627__$1 = state_28627;
var statearr_28727_30431 = state_28627__$1;
(statearr_28727_30431[(2)] = inst_28603);

(statearr_28727_30431[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28628 === (30))){
var state_28627__$1 = state_28627;
var statearr_28728_30441 = state_28627__$1;
(statearr_28728_30441[(2)] = null);

(statearr_28728_30441[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28628 === (10))){
var inst_28505 = (state_28627[(13)]);
var inst_28503 = (state_28627[(17)]);
var inst_28513 = cljs.core._nth(inst_28503,inst_28505);
var inst_28514 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_28513,(0),null);
var inst_28515 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_28513,(1),null);
var state_28627__$1 = (function (){var statearr_28729 = state_28627;
(statearr_28729[(24)] = inst_28514);

return statearr_28729;
})();
if(cljs.core.truth_(inst_28515)){
var statearr_28730_30450 = state_28627__$1;
(statearr_28730_30450[(1)] = (13));

} else {
var statearr_28731_30451 = state_28627__$1;
(statearr_28731_30451[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28628 === (18))){
var inst_28551 = (state_28627[(2)]);
var state_28627__$1 = state_28627;
var statearr_28735_30454 = state_28627__$1;
(statearr_28735_30454[(2)] = inst_28551);

(statearr_28735_30454[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28628 === (42))){
var state_28627__$1 = state_28627;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_28627__$1,(45),dchan);
} else {
if((state_val_28628 === (37))){
var inst_28493 = (state_28627[(11)]);
var inst_28584 = (state_28627[(23)]);
var inst_28593 = (state_28627[(22)]);
var inst_28593__$1 = cljs.core.first(inst_28584);
var inst_28594 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_28593__$1,inst_28493,done);
var state_28627__$1 = (function (){var statearr_28739 = state_28627;
(statearr_28739[(22)] = inst_28593__$1);

return statearr_28739;
})();
if(cljs.core.truth_(inst_28594)){
var statearr_28740_30457 = state_28627__$1;
(statearr_28740_30457[(1)] = (39));

} else {
var statearr_28741_30458 = state_28627__$1;
(statearr_28741_30458[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28628 === (8))){
var inst_28505 = (state_28627[(13)]);
var inst_28504 = (state_28627[(14)]);
var inst_28507 = (inst_28505 < inst_28504);
var inst_28508 = inst_28507;
var state_28627__$1 = state_28627;
if(cljs.core.truth_(inst_28508)){
var statearr_28742_30460 = state_28627__$1;
(statearr_28742_30460[(1)] = (10));

} else {
var statearr_28743_30461 = state_28627__$1;
(statearr_28743_30461[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__27467__auto__ = null;
var cljs$core$async$mult_$_state_machine__27467__auto____0 = (function (){
var statearr_28751 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28751[(0)] = cljs$core$async$mult_$_state_machine__27467__auto__);

(statearr_28751[(1)] = (1));

return statearr_28751;
});
var cljs$core$async$mult_$_state_machine__27467__auto____1 = (function (state_28627){
while(true){
var ret_value__27468__auto__ = (function (){try{while(true){
var result__27469__auto__ = switch__27466__auto__(state_28627);
if(cljs.core.keyword_identical_QMARK_(result__27469__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27469__auto__;
}
break;
}
}catch (e28753){var ex__27470__auto__ = e28753;
var statearr_28756_30468 = state_28627;
(statearr_28756_30468[(2)] = ex__27470__auto__);


if(cljs.core.seq((state_28627[(4)]))){
var statearr_28757_30469 = state_28627;
(statearr_28757_30469[(1)] = cljs.core.first((state_28627[(4)])));

} else {
throw ex__27470__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27468__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30470 = state_28627;
state_28627 = G__30470;
continue;
} else {
return ret_value__27468__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__27467__auto__ = function(state_28627){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__27467__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__27467__auto____1.call(this,state_28627);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__27467__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__27467__auto____0;
cljs$core$async$mult_$_state_machine__27467__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__27467__auto____1;
return cljs$core$async$mult_$_state_machine__27467__auto__;
})()
})();
var state__27582__auto__ = (function (){var statearr_28760 = f__27581__auto__();
(statearr_28760[(6)] = c__27580__auto___30335);

return statearr_28760;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27582__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__28765 = arguments.length;
switch (G__28765) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_30475 = (function (m,ch){
var x__4422__auto__ = (((m == null))?null:m);
var m__4423__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4422__auto__)]);
if((!((m__4423__auto__ == null)))){
return (m__4423__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4423__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4423__auto__.call(null,m,ch));
} else {
var m__4420__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4420__auto__ == null)))){
return (m__4420__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4420__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4420__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_30475(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_30476 = (function (m,ch){
var x__4422__auto__ = (((m == null))?null:m);
var m__4423__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4422__auto__)]);
if((!((m__4423__auto__ == null)))){
return (m__4423__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4423__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4423__auto__.call(null,m,ch));
} else {
var m__4420__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4420__auto__ == null)))){
return (m__4420__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4420__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4420__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_30476(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_30477 = (function (m){
var x__4422__auto__ = (((m == null))?null:m);
var m__4423__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4422__auto__)]);
if((!((m__4423__auto__ == null)))){
return (m__4423__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4423__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4423__auto__.call(null,m));
} else {
var m__4420__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4420__auto__ == null)))){
return (m__4420__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4420__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4420__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_30477(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_30488 = (function (m,state_map){
var x__4422__auto__ = (((m == null))?null:m);
var m__4423__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4422__auto__)]);
if((!((m__4423__auto__ == null)))){
return (m__4423__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4423__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4423__auto__.call(null,m,state_map));
} else {
var m__4420__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4420__auto__ == null)))){
return (m__4420__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4420__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4420__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_30488(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_30492 = (function (m,mode){
var x__4422__auto__ = (((m == null))?null:m);
var m__4423__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4422__auto__)]);
if((!((m__4423__auto__ == null)))){
return (m__4423__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4423__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4423__auto__.call(null,m,mode));
} else {
var m__4420__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4420__auto__ == null)))){
return (m__4420__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4420__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4420__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_30492(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___30501 = arguments.length;
var i__4731__auto___30502 = (0);
while(true){
if((i__4731__auto___30502 < len__4730__auto___30501)){
args__4736__auto__.push((arguments[i__4731__auto___30502]));

var G__30504 = (i__4731__auto___30502 + (1));
i__4731__auto___30502 = G__30504;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((3) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4737__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__28798){
var map__28800 = p__28798;
var map__28800__$1 = (((((!((map__28800 == null))))?(((((map__28800.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28800.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__28800):map__28800);
var opts = map__28800__$1;
var statearr_28802_30511 = state;
(statearr_28802_30511[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts((function (val){
var statearr_28803_30514 = state;
(statearr_28803_30514[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_28806_30519 = state;
(statearr_28806_30519[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq28790){
var G__28791 = cljs.core.first(seq28790);
var seq28790__$1 = cljs.core.next(seq28790);
var G__28792 = cljs.core.first(seq28790__$1);
var seq28790__$2 = cljs.core.next(seq28790__$1);
var G__28793 = cljs.core.first(seq28790__$2);
var seq28790__$3 = cljs.core.next(seq28790__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__28791,G__28792,G__28793,seq28790__$3);
}));

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async28816 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28816 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta28817){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta28817 = meta28817;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async28816.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28818,meta28817__$1){
var self__ = this;
var _28818__$1 = this;
return (new cljs.core.async.t_cljs$core$async28816(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta28817__$1));
}));

(cljs.core.async.t_cljs$core$async28816.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28818){
var self__ = this;
var _28818__$1 = this;
return self__.meta28817;
}));

(cljs.core.async.t_cljs$core$async28816.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async28816.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async28816.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async28816.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async28816.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async28816.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async28816.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async28816.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async28816.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta28817","meta28817",-746421753,null)], null);
}));

(cljs.core.async.t_cljs$core$async28816.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async28816.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28816");

(cljs.core.async.t_cljs$core$async28816.cljs$lang$ctorPrWriter = (function (this__4363__auto__,writer__4364__auto__,opt__4365__auto__){
return cljs.core._write(writer__4364__auto__,"cljs.core.async/t_cljs$core$async28816");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28816.
 */
cljs.core.async.__GT_t_cljs$core$async28816 = (function cljs$core$async$mix_$___GT_t_cljs$core$async28816(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta28817){
return (new cljs.core.async.t_cljs$core$async28816(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta28817));
});

}

return (new cljs.core.async.t_cljs$core$async28816(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__27580__auto___30561 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27581__auto__ = (function (){var switch__27466__auto__ = (function (state_28955){
var state_val_28956 = (state_28955[(1)]);
if((state_val_28956 === (7))){
var inst_28864 = (state_28955[(2)]);
var state_28955__$1 = state_28955;
var statearr_28957_30563 = state_28955__$1;
(statearr_28957_30563[(2)] = inst_28864);

(statearr_28957_30563[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28956 === (20))){
var inst_28876 = (state_28955[(7)]);
var state_28955__$1 = state_28955;
var statearr_28958_30565 = state_28955__$1;
(statearr_28958_30565[(2)] = inst_28876);

(statearr_28958_30565[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28956 === (27))){
var state_28955__$1 = state_28955;
var statearr_28959_30567 = state_28955__$1;
(statearr_28959_30567[(2)] = null);

(statearr_28959_30567[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28956 === (1))){
var inst_28848 = (state_28955[(8)]);
var inst_28848__$1 = calc_state();
var inst_28850 = (inst_28848__$1 == null);
var inst_28851 = cljs.core.not(inst_28850);
var state_28955__$1 = (function (){var statearr_28961 = state_28955;
(statearr_28961[(8)] = inst_28848__$1);

return statearr_28961;
})();
if(inst_28851){
var statearr_28964_30570 = state_28955__$1;
(statearr_28964_30570[(1)] = (2));

} else {
var statearr_28965_30571 = state_28955__$1;
(statearr_28965_30571[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28956 === (24))){
var inst_28900 = (state_28955[(9)]);
var inst_28926 = (state_28955[(10)]);
var inst_28910 = (state_28955[(11)]);
var inst_28926__$1 = (inst_28900.cljs$core$IFn$_invoke$arity$1 ? inst_28900.cljs$core$IFn$_invoke$arity$1(inst_28910) : inst_28900.call(null,inst_28910));
var state_28955__$1 = (function (){var statearr_28970 = state_28955;
(statearr_28970[(10)] = inst_28926__$1);

return statearr_28970;
})();
if(cljs.core.truth_(inst_28926__$1)){
var statearr_28974_30578 = state_28955__$1;
(statearr_28974_30578[(1)] = (29));

} else {
var statearr_28975_30579 = state_28955__$1;
(statearr_28975_30579[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28956 === (4))){
var inst_28867 = (state_28955[(2)]);
var state_28955__$1 = state_28955;
if(cljs.core.truth_(inst_28867)){
var statearr_28979_30584 = state_28955__$1;
(statearr_28979_30584[(1)] = (8));

} else {
var statearr_28980_30585 = state_28955__$1;
(statearr_28980_30585[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28956 === (15))){
var inst_28894 = (state_28955[(2)]);
var state_28955__$1 = state_28955;
if(cljs.core.truth_(inst_28894)){
var statearr_28983_30588 = state_28955__$1;
(statearr_28983_30588[(1)] = (19));

} else {
var statearr_28984_30590 = state_28955__$1;
(statearr_28984_30590[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28956 === (21))){
var inst_28899 = (state_28955[(12)]);
var inst_28899__$1 = (state_28955[(2)]);
var inst_28900 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_28899__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_28901 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_28899__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_28902 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_28899__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_28955__$1 = (function (){var statearr_28985 = state_28955;
(statearr_28985[(9)] = inst_28900);

(statearr_28985[(12)] = inst_28899__$1);

(statearr_28985[(13)] = inst_28901);

return statearr_28985;
})();
return cljs.core.async.ioc_alts_BANG_(state_28955__$1,(22),inst_28902);
} else {
if((state_val_28956 === (31))){
var inst_28934 = (state_28955[(2)]);
var state_28955__$1 = state_28955;
if(cljs.core.truth_(inst_28934)){
var statearr_28986_30601 = state_28955__$1;
(statearr_28986_30601[(1)] = (32));

} else {
var statearr_28987_30603 = state_28955__$1;
(statearr_28987_30603[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28956 === (32))){
var inst_28909 = (state_28955[(14)]);
var state_28955__$1 = state_28955;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_28955__$1,(35),out,inst_28909);
} else {
if((state_val_28956 === (33))){
var inst_28899 = (state_28955[(12)]);
var inst_28876 = inst_28899;
var state_28955__$1 = (function (){var statearr_28989 = state_28955;
(statearr_28989[(7)] = inst_28876);

return statearr_28989;
})();
var statearr_28990_30610 = state_28955__$1;
(statearr_28990_30610[(2)] = null);

(statearr_28990_30610[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28956 === (13))){
var inst_28876 = (state_28955[(7)]);
var inst_28883 = inst_28876.cljs$lang$protocol_mask$partition0$;
var inst_28884 = (inst_28883 & (64));
var inst_28885 = inst_28876.cljs$core$ISeq$;
var inst_28886 = (cljs.core.PROTOCOL_SENTINEL === inst_28885);
var inst_28887 = ((inst_28884) || (inst_28886));
var state_28955__$1 = state_28955;
if(cljs.core.truth_(inst_28887)){
var statearr_28991_30616 = state_28955__$1;
(statearr_28991_30616[(1)] = (16));

} else {
var statearr_28993_30617 = state_28955__$1;
(statearr_28993_30617[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28956 === (22))){
var inst_28910 = (state_28955[(11)]);
var inst_28909 = (state_28955[(14)]);
var inst_28907 = (state_28955[(2)]);
var inst_28909__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_28907,(0),null);
var inst_28910__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_28907,(1),null);
var inst_28913 = (inst_28909__$1 == null);
var inst_28914 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_28910__$1,change);
var inst_28915 = ((inst_28913) || (inst_28914));
var state_28955__$1 = (function (){var statearr_28994 = state_28955;
(statearr_28994[(11)] = inst_28910__$1);

(statearr_28994[(14)] = inst_28909__$1);

return statearr_28994;
})();
if(cljs.core.truth_(inst_28915)){
var statearr_28995_30625 = state_28955__$1;
(statearr_28995_30625[(1)] = (23));

} else {
var statearr_28999_30627 = state_28955__$1;
(statearr_28999_30627[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28956 === (36))){
var inst_28899 = (state_28955[(12)]);
var inst_28876 = inst_28899;
var state_28955__$1 = (function (){var statearr_29002 = state_28955;
(statearr_29002[(7)] = inst_28876);

return statearr_29002;
})();
var statearr_29003_30629 = state_28955__$1;
(statearr_29003_30629[(2)] = null);

(statearr_29003_30629[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28956 === (29))){
var inst_28926 = (state_28955[(10)]);
var state_28955__$1 = state_28955;
var statearr_29004_30630 = state_28955__$1;
(statearr_29004_30630[(2)] = inst_28926);

(statearr_29004_30630[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28956 === (6))){
var state_28955__$1 = state_28955;
var statearr_29005_30635 = state_28955__$1;
(statearr_29005_30635[(2)] = false);

(statearr_29005_30635[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28956 === (28))){
var inst_28922 = (state_28955[(2)]);
var inst_28923 = calc_state();
var inst_28876 = inst_28923;
var state_28955__$1 = (function (){var statearr_29006 = state_28955;
(statearr_29006[(7)] = inst_28876);

(statearr_29006[(15)] = inst_28922);

return statearr_29006;
})();
var statearr_29007_30639 = state_28955__$1;
(statearr_29007_30639[(2)] = null);

(statearr_29007_30639[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28956 === (25))){
var inst_28948 = (state_28955[(2)]);
var state_28955__$1 = state_28955;
var statearr_29008_30642 = state_28955__$1;
(statearr_29008_30642[(2)] = inst_28948);

(statearr_29008_30642[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28956 === (34))){
var inst_28946 = (state_28955[(2)]);
var state_28955__$1 = state_28955;
var statearr_29009_30644 = state_28955__$1;
(statearr_29009_30644[(2)] = inst_28946);

(statearr_29009_30644[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28956 === (17))){
var state_28955__$1 = state_28955;
var statearr_29010_30647 = state_28955__$1;
(statearr_29010_30647[(2)] = false);

(statearr_29010_30647[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28956 === (3))){
var state_28955__$1 = state_28955;
var statearr_29011_30649 = state_28955__$1;
(statearr_29011_30649[(2)] = false);

(statearr_29011_30649[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28956 === (12))){
var inst_28950 = (state_28955[(2)]);
var state_28955__$1 = state_28955;
return cljs.core.async.impl.ioc_helpers.return_chan(state_28955__$1,inst_28950);
} else {
if((state_val_28956 === (2))){
var inst_28848 = (state_28955[(8)]);
var inst_28854 = inst_28848.cljs$lang$protocol_mask$partition0$;
var inst_28855 = (inst_28854 & (64));
var inst_28857 = inst_28848.cljs$core$ISeq$;
var inst_28858 = (cljs.core.PROTOCOL_SENTINEL === inst_28857);
var inst_28860 = ((inst_28855) || (inst_28858));
var state_28955__$1 = state_28955;
if(cljs.core.truth_(inst_28860)){
var statearr_29012_30654 = state_28955__$1;
(statearr_29012_30654[(1)] = (5));

} else {
var statearr_29013_30656 = state_28955__$1;
(statearr_29013_30656[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28956 === (23))){
var inst_28909 = (state_28955[(14)]);
var inst_28917 = (inst_28909 == null);
var state_28955__$1 = state_28955;
if(cljs.core.truth_(inst_28917)){
var statearr_29014_30662 = state_28955__$1;
(statearr_29014_30662[(1)] = (26));

} else {
var statearr_29015_30663 = state_28955__$1;
(statearr_29015_30663[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28956 === (35))){
var inst_28937 = (state_28955[(2)]);
var state_28955__$1 = state_28955;
if(cljs.core.truth_(inst_28937)){
var statearr_29016_30668 = state_28955__$1;
(statearr_29016_30668[(1)] = (36));

} else {
var statearr_29017_30669 = state_28955__$1;
(statearr_29017_30669[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28956 === (19))){
var inst_28876 = (state_28955[(7)]);
var inst_28896 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_28876);
var state_28955__$1 = state_28955;
var statearr_29018_30676 = state_28955__$1;
(statearr_29018_30676[(2)] = inst_28896);

(statearr_29018_30676[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28956 === (11))){
var inst_28876 = (state_28955[(7)]);
var inst_28880 = (inst_28876 == null);
var inst_28881 = cljs.core.not(inst_28880);
var state_28955__$1 = state_28955;
if(inst_28881){
var statearr_29019_30680 = state_28955__$1;
(statearr_29019_30680[(1)] = (13));

} else {
var statearr_29020_30681 = state_28955__$1;
(statearr_29020_30681[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28956 === (9))){
var inst_28848 = (state_28955[(8)]);
var state_28955__$1 = state_28955;
var statearr_29021_30683 = state_28955__$1;
(statearr_29021_30683[(2)] = inst_28848);

(statearr_29021_30683[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28956 === (5))){
var state_28955__$1 = state_28955;
var statearr_29022_30690 = state_28955__$1;
(statearr_29022_30690[(2)] = true);

(statearr_29022_30690[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28956 === (14))){
var state_28955__$1 = state_28955;
var statearr_29023_30692 = state_28955__$1;
(statearr_29023_30692[(2)] = false);

(statearr_29023_30692[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28956 === (26))){
var inst_28910 = (state_28955[(11)]);
var inst_28919 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_28910);
var state_28955__$1 = state_28955;
var statearr_29024_30697 = state_28955__$1;
(statearr_29024_30697[(2)] = inst_28919);

(statearr_29024_30697[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28956 === (16))){
var state_28955__$1 = state_28955;
var statearr_29025_30700 = state_28955__$1;
(statearr_29025_30700[(2)] = true);

(statearr_29025_30700[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28956 === (38))){
var inst_28942 = (state_28955[(2)]);
var state_28955__$1 = state_28955;
var statearr_29026_30702 = state_28955__$1;
(statearr_29026_30702[(2)] = inst_28942);

(statearr_29026_30702[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28956 === (30))){
var inst_28900 = (state_28955[(9)]);
var inst_28910 = (state_28955[(11)]);
var inst_28901 = (state_28955[(13)]);
var inst_28929 = cljs.core.empty_QMARK_(inst_28900);
var inst_28930 = (inst_28901.cljs$core$IFn$_invoke$arity$1 ? inst_28901.cljs$core$IFn$_invoke$arity$1(inst_28910) : inst_28901.call(null,inst_28910));
var inst_28931 = cljs.core.not(inst_28930);
var inst_28932 = ((inst_28929) && (inst_28931));
var state_28955__$1 = state_28955;
var statearr_29027_30710 = state_28955__$1;
(statearr_29027_30710[(2)] = inst_28932);

(statearr_29027_30710[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28956 === (10))){
var inst_28848 = (state_28955[(8)]);
var inst_28872 = (state_28955[(2)]);
var inst_28873 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_28872,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_28874 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_28872,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_28875 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_28872,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_28876 = inst_28848;
var state_28955__$1 = (function (){var statearr_29032 = state_28955;
(statearr_29032[(16)] = inst_28873);

(statearr_29032[(17)] = inst_28874);

(statearr_29032[(7)] = inst_28876);

(statearr_29032[(18)] = inst_28875);

return statearr_29032;
})();
var statearr_29033_30717 = state_28955__$1;
(statearr_29033_30717[(2)] = null);

(statearr_29033_30717[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28956 === (18))){
var inst_28891 = (state_28955[(2)]);
var state_28955__$1 = state_28955;
var statearr_29035_30719 = state_28955__$1;
(statearr_29035_30719[(2)] = inst_28891);

(statearr_29035_30719[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28956 === (37))){
var state_28955__$1 = state_28955;
var statearr_29036_30722 = state_28955__$1;
(statearr_29036_30722[(2)] = null);

(statearr_29036_30722[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28956 === (8))){
var inst_28848 = (state_28955[(8)]);
var inst_28869 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_28848);
var state_28955__$1 = state_28955;
var statearr_29037_30724 = state_28955__$1;
(statearr_29037_30724[(2)] = inst_28869);

(statearr_29037_30724[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__27467__auto__ = null;
var cljs$core$async$mix_$_state_machine__27467__auto____0 = (function (){
var statearr_29038 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29038[(0)] = cljs$core$async$mix_$_state_machine__27467__auto__);

(statearr_29038[(1)] = (1));

return statearr_29038;
});
var cljs$core$async$mix_$_state_machine__27467__auto____1 = (function (state_28955){
while(true){
var ret_value__27468__auto__ = (function (){try{while(true){
var result__27469__auto__ = switch__27466__auto__(state_28955);
if(cljs.core.keyword_identical_QMARK_(result__27469__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27469__auto__;
}
break;
}
}catch (e29039){var ex__27470__auto__ = e29039;
var statearr_29040_30734 = state_28955;
(statearr_29040_30734[(2)] = ex__27470__auto__);


if(cljs.core.seq((state_28955[(4)]))){
var statearr_29042_30735 = state_28955;
(statearr_29042_30735[(1)] = cljs.core.first((state_28955[(4)])));

} else {
throw ex__27470__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27468__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30740 = state_28955;
state_28955 = G__30740;
continue;
} else {
return ret_value__27468__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__27467__auto__ = function(state_28955){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__27467__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__27467__auto____1.call(this,state_28955);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__27467__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__27467__auto____0;
cljs$core$async$mix_$_state_machine__27467__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__27467__auto____1;
return cljs$core$async$mix_$_state_machine__27467__auto__;
})()
})();
var state__27582__auto__ = (function (){var statearr_29046 = f__27581__auto__();
(statearr_29046[(6)] = c__27580__auto___30561);

return statearr_29046;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27582__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_30743 = (function (p,v,ch,close_QMARK_){
var x__4422__auto__ = (((p == null))?null:p);
var m__4423__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4422__auto__)]);
if((!((m__4423__auto__ == null)))){
return (m__4423__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4423__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4423__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4420__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4420__auto__ == null)))){
return (m__4420__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4420__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4420__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_30743(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_30745 = (function (p,v,ch){
var x__4422__auto__ = (((p == null))?null:p);
var m__4423__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4422__auto__)]);
if((!((m__4423__auto__ == null)))){
return (m__4423__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4423__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4423__auto__.call(null,p,v,ch));
} else {
var m__4420__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4420__auto__ == null)))){
return (m__4420__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4420__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4420__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_30745(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_30750 = (function() {
var G__30751 = null;
var G__30751__1 = (function (p){
var x__4422__auto__ = (((p == null))?null:p);
var m__4423__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4422__auto__)]);
if((!((m__4423__auto__ == null)))){
return (m__4423__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4423__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4423__auto__.call(null,p));
} else {
var m__4420__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4420__auto__ == null)))){
return (m__4420__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4420__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4420__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__30751__2 = (function (p,v){
var x__4422__auto__ = (((p == null))?null:p);
var m__4423__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4422__auto__)]);
if((!((m__4423__auto__ == null)))){
return (m__4423__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4423__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4423__auto__.call(null,p,v));
} else {
var m__4420__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4420__auto__ == null)))){
return (m__4420__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4420__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4420__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__30751 = function(p,v){
switch(arguments.length){
case 1:
return G__30751__1.call(this,p);
case 2:
return G__30751__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__30751.cljs$core$IFn$_invoke$arity$1 = G__30751__1;
G__30751.cljs$core$IFn$_invoke$arity$2 = G__30751__2;
return G__30751;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__29057 = arguments.length;
switch (G__29057) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_30750(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_30750(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__29082 = arguments.length;
switch (G__29082) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__4120__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__29066_SHARP_){
if(cljs.core.truth_((p1__29066_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__29066_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__29066_SHARP_.call(null,topic)))){
return p1__29066_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__29066_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async29083 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29083 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta29084){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta29084 = meta29084;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async29083.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29085,meta29084__$1){
var self__ = this;
var _29085__$1 = this;
return (new cljs.core.async.t_cljs$core$async29083(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta29084__$1));
}));

(cljs.core.async.t_cljs$core$async29083.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29085){
var self__ = this;
var _29085__$1 = this;
return self__.meta29084;
}));

(cljs.core.async.t_cljs$core$async29083.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async29083.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async29083.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async29083.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async29083.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5735__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5735__auto__)){
var m = temp__5735__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async29083.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async29083.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async29083.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta29084","meta29084",-1867407538,null)], null);
}));

(cljs.core.async.t_cljs$core$async29083.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async29083.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29083");

(cljs.core.async.t_cljs$core$async29083.cljs$lang$ctorPrWriter = (function (this__4363__auto__,writer__4364__auto__,opt__4365__auto__){
return cljs.core._write(writer__4364__auto__,"cljs.core.async/t_cljs$core$async29083");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29083.
 */
cljs.core.async.__GT_t_cljs$core$async29083 = (function cljs$core$async$__GT_t_cljs$core$async29083(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta29084){
return (new cljs.core.async.t_cljs$core$async29083(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta29084));
});

}

return (new cljs.core.async.t_cljs$core$async29083(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__27580__auto___30785 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27581__auto__ = (function (){var switch__27466__auto__ = (function (state_29164){
var state_val_29165 = (state_29164[(1)]);
if((state_val_29165 === (7))){
var inst_29160 = (state_29164[(2)]);
var state_29164__$1 = state_29164;
var statearr_29166_30787 = state_29164__$1;
(statearr_29166_30787[(2)] = inst_29160);

(statearr_29166_30787[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29165 === (20))){
var state_29164__$1 = state_29164;
var statearr_29167_30788 = state_29164__$1;
(statearr_29167_30788[(2)] = null);

(statearr_29167_30788[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29165 === (1))){
var state_29164__$1 = state_29164;
var statearr_29168_30789 = state_29164__$1;
(statearr_29168_30789[(2)] = null);

(statearr_29168_30789[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29165 === (24))){
var inst_29143 = (state_29164[(7)]);
var inst_29152 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_29143);
var state_29164__$1 = state_29164;
var statearr_29169_30791 = state_29164__$1;
(statearr_29169_30791[(2)] = inst_29152);

(statearr_29169_30791[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29165 === (4))){
var inst_29095 = (state_29164[(8)]);
var inst_29095__$1 = (state_29164[(2)]);
var inst_29096 = (inst_29095__$1 == null);
var state_29164__$1 = (function (){var statearr_29170 = state_29164;
(statearr_29170[(8)] = inst_29095__$1);

return statearr_29170;
})();
if(cljs.core.truth_(inst_29096)){
var statearr_29171_30802 = state_29164__$1;
(statearr_29171_30802[(1)] = (5));

} else {
var statearr_29172_30803 = state_29164__$1;
(statearr_29172_30803[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29165 === (15))){
var inst_29137 = (state_29164[(2)]);
var state_29164__$1 = state_29164;
var statearr_29173_30808 = state_29164__$1;
(statearr_29173_30808[(2)] = inst_29137);

(statearr_29173_30808[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29165 === (21))){
var inst_29157 = (state_29164[(2)]);
var state_29164__$1 = (function (){var statearr_29174 = state_29164;
(statearr_29174[(9)] = inst_29157);

return statearr_29174;
})();
var statearr_29175_30809 = state_29164__$1;
(statearr_29175_30809[(2)] = null);

(statearr_29175_30809[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29165 === (13))){
var inst_29119 = (state_29164[(10)]);
var inst_29121 = cljs.core.chunked_seq_QMARK_(inst_29119);
var state_29164__$1 = state_29164;
if(inst_29121){
var statearr_29176_30814 = state_29164__$1;
(statearr_29176_30814[(1)] = (16));

} else {
var statearr_29177_30819 = state_29164__$1;
(statearr_29177_30819[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29165 === (22))){
var inst_29149 = (state_29164[(2)]);
var state_29164__$1 = state_29164;
if(cljs.core.truth_(inst_29149)){
var statearr_29178_30821 = state_29164__$1;
(statearr_29178_30821[(1)] = (23));

} else {
var statearr_29179_30822 = state_29164__$1;
(statearr_29179_30822[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29165 === (6))){
var inst_29145 = (state_29164[(11)]);
var inst_29143 = (state_29164[(7)]);
var inst_29095 = (state_29164[(8)]);
var inst_29143__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_29095) : topic_fn.call(null,inst_29095));
var inst_29144 = cljs.core.deref(mults);
var inst_29145__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_29144,inst_29143__$1);
var state_29164__$1 = (function (){var statearr_29180 = state_29164;
(statearr_29180[(11)] = inst_29145__$1);

(statearr_29180[(7)] = inst_29143__$1);

return statearr_29180;
})();
if(cljs.core.truth_(inst_29145__$1)){
var statearr_29181_30831 = state_29164__$1;
(statearr_29181_30831[(1)] = (19));

} else {
var statearr_29182_30832 = state_29164__$1;
(statearr_29182_30832[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29165 === (25))){
var inst_29154 = (state_29164[(2)]);
var state_29164__$1 = state_29164;
var statearr_29183_30837 = state_29164__$1;
(statearr_29183_30837[(2)] = inst_29154);

(statearr_29183_30837[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29165 === (17))){
var inst_29119 = (state_29164[(10)]);
var inst_29128 = cljs.core.first(inst_29119);
var inst_29129 = cljs.core.async.muxch_STAR_(inst_29128);
var inst_29130 = cljs.core.async.close_BANG_(inst_29129);
var inst_29131 = cljs.core.next(inst_29119);
var inst_29105 = inst_29131;
var inst_29106 = null;
var inst_29107 = (0);
var inst_29108 = (0);
var state_29164__$1 = (function (){var statearr_29184 = state_29164;
(statearr_29184[(12)] = inst_29105);

(statearr_29184[(13)] = inst_29107);

(statearr_29184[(14)] = inst_29130);

(statearr_29184[(15)] = inst_29108);

(statearr_29184[(16)] = inst_29106);

return statearr_29184;
})();
var statearr_29185_30848 = state_29164__$1;
(statearr_29185_30848[(2)] = null);

(statearr_29185_30848[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29165 === (3))){
var inst_29162 = (state_29164[(2)]);
var state_29164__$1 = state_29164;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29164__$1,inst_29162);
} else {
if((state_val_29165 === (12))){
var inst_29139 = (state_29164[(2)]);
var state_29164__$1 = state_29164;
var statearr_29187_30850 = state_29164__$1;
(statearr_29187_30850[(2)] = inst_29139);

(statearr_29187_30850[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29165 === (2))){
var state_29164__$1 = state_29164;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29164__$1,(4),ch);
} else {
if((state_val_29165 === (23))){
var state_29164__$1 = state_29164;
var statearr_29188_30851 = state_29164__$1;
(statearr_29188_30851[(2)] = null);

(statearr_29188_30851[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29165 === (19))){
var inst_29145 = (state_29164[(11)]);
var inst_29095 = (state_29164[(8)]);
var inst_29147 = cljs.core.async.muxch_STAR_(inst_29145);
var state_29164__$1 = state_29164;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29164__$1,(22),inst_29147,inst_29095);
} else {
if((state_val_29165 === (11))){
var inst_29105 = (state_29164[(12)]);
var inst_29119 = (state_29164[(10)]);
var inst_29119__$1 = cljs.core.seq(inst_29105);
var state_29164__$1 = (function (){var statearr_29189 = state_29164;
(statearr_29189[(10)] = inst_29119__$1);

return statearr_29189;
})();
if(inst_29119__$1){
var statearr_29190_30853 = state_29164__$1;
(statearr_29190_30853[(1)] = (13));

} else {
var statearr_29191_30854 = state_29164__$1;
(statearr_29191_30854[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29165 === (9))){
var inst_29141 = (state_29164[(2)]);
var state_29164__$1 = state_29164;
var statearr_29192_30855 = state_29164__$1;
(statearr_29192_30855[(2)] = inst_29141);

(statearr_29192_30855[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29165 === (5))){
var inst_29102 = cljs.core.deref(mults);
var inst_29103 = cljs.core.vals(inst_29102);
var inst_29104 = cljs.core.seq(inst_29103);
var inst_29105 = inst_29104;
var inst_29106 = null;
var inst_29107 = (0);
var inst_29108 = (0);
var state_29164__$1 = (function (){var statearr_29193 = state_29164;
(statearr_29193[(12)] = inst_29105);

(statearr_29193[(13)] = inst_29107);

(statearr_29193[(15)] = inst_29108);

(statearr_29193[(16)] = inst_29106);

return statearr_29193;
})();
var statearr_29194_30859 = state_29164__$1;
(statearr_29194_30859[(2)] = null);

(statearr_29194_30859[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29165 === (14))){
var state_29164__$1 = state_29164;
var statearr_29198_30860 = state_29164__$1;
(statearr_29198_30860[(2)] = null);

(statearr_29198_30860[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29165 === (16))){
var inst_29119 = (state_29164[(10)]);
var inst_29123 = cljs.core.chunk_first(inst_29119);
var inst_29124 = cljs.core.chunk_rest(inst_29119);
var inst_29125 = cljs.core.count(inst_29123);
var inst_29105 = inst_29124;
var inst_29106 = inst_29123;
var inst_29107 = inst_29125;
var inst_29108 = (0);
var state_29164__$1 = (function (){var statearr_29199 = state_29164;
(statearr_29199[(12)] = inst_29105);

(statearr_29199[(13)] = inst_29107);

(statearr_29199[(15)] = inst_29108);

(statearr_29199[(16)] = inst_29106);

return statearr_29199;
})();
var statearr_29200_30864 = state_29164__$1;
(statearr_29200_30864[(2)] = null);

(statearr_29200_30864[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29165 === (10))){
var inst_29105 = (state_29164[(12)]);
var inst_29107 = (state_29164[(13)]);
var inst_29108 = (state_29164[(15)]);
var inst_29106 = (state_29164[(16)]);
var inst_29113 = cljs.core._nth(inst_29106,inst_29108);
var inst_29114 = cljs.core.async.muxch_STAR_(inst_29113);
var inst_29115 = cljs.core.async.close_BANG_(inst_29114);
var inst_29116 = (inst_29108 + (1));
var tmp29195 = inst_29105;
var tmp29196 = inst_29107;
var tmp29197 = inst_29106;
var inst_29105__$1 = tmp29195;
var inst_29106__$1 = tmp29197;
var inst_29107__$1 = tmp29196;
var inst_29108__$1 = inst_29116;
var state_29164__$1 = (function (){var statearr_29201 = state_29164;
(statearr_29201[(12)] = inst_29105__$1);

(statearr_29201[(13)] = inst_29107__$1);

(statearr_29201[(17)] = inst_29115);

(statearr_29201[(15)] = inst_29108__$1);

(statearr_29201[(16)] = inst_29106__$1);

return statearr_29201;
})();
var statearr_29202_30866 = state_29164__$1;
(statearr_29202_30866[(2)] = null);

(statearr_29202_30866[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29165 === (18))){
var inst_29134 = (state_29164[(2)]);
var state_29164__$1 = state_29164;
var statearr_29203_30867 = state_29164__$1;
(statearr_29203_30867[(2)] = inst_29134);

(statearr_29203_30867[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29165 === (8))){
var inst_29107 = (state_29164[(13)]);
var inst_29108 = (state_29164[(15)]);
var inst_29110 = (inst_29108 < inst_29107);
var inst_29111 = inst_29110;
var state_29164__$1 = state_29164;
if(cljs.core.truth_(inst_29111)){
var statearr_29204_30868 = state_29164__$1;
(statearr_29204_30868[(1)] = (10));

} else {
var statearr_29205_30869 = state_29164__$1;
(statearr_29205_30869[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__27467__auto__ = null;
var cljs$core$async$state_machine__27467__auto____0 = (function (){
var statearr_29206 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29206[(0)] = cljs$core$async$state_machine__27467__auto__);

(statearr_29206[(1)] = (1));

return statearr_29206;
});
var cljs$core$async$state_machine__27467__auto____1 = (function (state_29164){
while(true){
var ret_value__27468__auto__ = (function (){try{while(true){
var result__27469__auto__ = switch__27466__auto__(state_29164);
if(cljs.core.keyword_identical_QMARK_(result__27469__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27469__auto__;
}
break;
}
}catch (e29207){var ex__27470__auto__ = e29207;
var statearr_29208_30873 = state_29164;
(statearr_29208_30873[(2)] = ex__27470__auto__);


if(cljs.core.seq((state_29164[(4)]))){
var statearr_29209_30874 = state_29164;
(statearr_29209_30874[(1)] = cljs.core.first((state_29164[(4)])));

} else {
throw ex__27470__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27468__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30875 = state_29164;
state_29164 = G__30875;
continue;
} else {
return ret_value__27468__auto__;
}
break;
}
});
cljs$core$async$state_machine__27467__auto__ = function(state_29164){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27467__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27467__auto____1.call(this,state_29164);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27467__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27467__auto____0;
cljs$core$async$state_machine__27467__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27467__auto____1;
return cljs$core$async$state_machine__27467__auto__;
})()
})();
var state__27582__auto__ = (function (){var statearr_29210 = f__27581__auto__();
(statearr_29210[(6)] = c__27580__auto___30785);

return statearr_29210;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27582__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__29212 = arguments.length;
switch (G__29212) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__29214 = arguments.length;
switch (G__29214) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__29216 = arguments.length;
switch (G__29216) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__27580__auto___30934 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27581__auto__ = (function (){var switch__27466__auto__ = (function (state_29265){
var state_val_29266 = (state_29265[(1)]);
if((state_val_29266 === (7))){
var state_29265__$1 = state_29265;
var statearr_29269_30940 = state_29265__$1;
(statearr_29269_30940[(2)] = null);

(statearr_29269_30940[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29266 === (1))){
var state_29265__$1 = state_29265;
var statearr_29270_30946 = state_29265__$1;
(statearr_29270_30946[(2)] = null);

(statearr_29270_30946[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29266 === (4))){
var inst_29226 = (state_29265[(7)]);
var inst_29225 = (state_29265[(8)]);
var inst_29228 = (inst_29226 < inst_29225);
var state_29265__$1 = state_29265;
if(cljs.core.truth_(inst_29228)){
var statearr_29273_30958 = state_29265__$1;
(statearr_29273_30958[(1)] = (6));

} else {
var statearr_29274_30959 = state_29265__$1;
(statearr_29274_30959[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29266 === (15))){
var inst_29251 = (state_29265[(9)]);
var inst_29256 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_29251);
var state_29265__$1 = state_29265;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29265__$1,(17),out,inst_29256);
} else {
if((state_val_29266 === (13))){
var inst_29251 = (state_29265[(9)]);
var inst_29251__$1 = (state_29265[(2)]);
var inst_29252 = cljs.core.some(cljs.core.nil_QMARK_,inst_29251__$1);
var state_29265__$1 = (function (){var statearr_29276 = state_29265;
(statearr_29276[(9)] = inst_29251__$1);

return statearr_29276;
})();
if(cljs.core.truth_(inst_29252)){
var statearr_29281_30976 = state_29265__$1;
(statearr_29281_30976[(1)] = (14));

} else {
var statearr_29282_30977 = state_29265__$1;
(statearr_29282_30977[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29266 === (6))){
var state_29265__$1 = state_29265;
var statearr_29283_30978 = state_29265__$1;
(statearr_29283_30978[(2)] = null);

(statearr_29283_30978[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29266 === (17))){
var inst_29258 = (state_29265[(2)]);
var state_29265__$1 = (function (){var statearr_29296 = state_29265;
(statearr_29296[(10)] = inst_29258);

return statearr_29296;
})();
var statearr_29297_30979 = state_29265__$1;
(statearr_29297_30979[(2)] = null);

(statearr_29297_30979[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29266 === (3))){
var inst_29263 = (state_29265[(2)]);
var state_29265__$1 = state_29265;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29265__$1,inst_29263);
} else {
if((state_val_29266 === (12))){
var _ = (function (){var statearr_29298 = state_29265;
(statearr_29298[(4)] = cljs.core.rest((state_29265[(4)])));

return statearr_29298;
})();
var state_29265__$1 = state_29265;
var ex29295 = (state_29265__$1[(2)]);
var statearr_29299_30995 = state_29265__$1;
(statearr_29299_30995[(5)] = ex29295);


if((ex29295 instanceof Object)){
var statearr_29300_30996 = state_29265__$1;
(statearr_29300_30996[(1)] = (11));

(statearr_29300_30996[(5)] = null);

} else {
throw ex29295;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29266 === (2))){
var inst_29224 = cljs.core.reset_BANG_(dctr,cnt);
var inst_29225 = cnt;
var inst_29226 = (0);
var state_29265__$1 = (function (){var statearr_29301 = state_29265;
(statearr_29301[(11)] = inst_29224);

(statearr_29301[(7)] = inst_29226);

(statearr_29301[(8)] = inst_29225);

return statearr_29301;
})();
var statearr_29302_30998 = state_29265__$1;
(statearr_29302_30998[(2)] = null);

(statearr_29302_30998[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29266 === (11))){
var inst_29230 = (state_29265[(2)]);
var inst_29231 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_29265__$1 = (function (){var statearr_29303 = state_29265;
(statearr_29303[(12)] = inst_29230);

return statearr_29303;
})();
var statearr_29304_31000 = state_29265__$1;
(statearr_29304_31000[(2)] = inst_29231);

(statearr_29304_31000[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29266 === (9))){
var inst_29226 = (state_29265[(7)]);
var _ = (function (){var statearr_29305 = state_29265;
(statearr_29305[(4)] = cljs.core.cons((12),(state_29265[(4)])));

return statearr_29305;
})();
var inst_29237 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_29226) : chs__$1.call(null,inst_29226));
var inst_29238 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_29226) : done.call(null,inst_29226));
var inst_29239 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_29237,inst_29238);
var ___$1 = (function (){var statearr_29306 = state_29265;
(statearr_29306[(4)] = cljs.core.rest((state_29265[(4)])));

return statearr_29306;
})();
var state_29265__$1 = state_29265;
var statearr_29307_31004 = state_29265__$1;
(statearr_29307_31004[(2)] = inst_29239);

(statearr_29307_31004[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29266 === (5))){
var inst_29249 = (state_29265[(2)]);
var state_29265__$1 = (function (){var statearr_29308 = state_29265;
(statearr_29308[(13)] = inst_29249);

return statearr_29308;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29265__$1,(13),dchan);
} else {
if((state_val_29266 === (14))){
var inst_29254 = cljs.core.async.close_BANG_(out);
var state_29265__$1 = state_29265;
var statearr_29309_31006 = state_29265__$1;
(statearr_29309_31006[(2)] = inst_29254);

(statearr_29309_31006[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29266 === (16))){
var inst_29261 = (state_29265[(2)]);
var state_29265__$1 = state_29265;
var statearr_29310_31007 = state_29265__$1;
(statearr_29310_31007[(2)] = inst_29261);

(statearr_29310_31007[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29266 === (10))){
var inst_29226 = (state_29265[(7)]);
var inst_29242 = (state_29265[(2)]);
var inst_29243 = (inst_29226 + (1));
var inst_29226__$1 = inst_29243;
var state_29265__$1 = (function (){var statearr_29311 = state_29265;
(statearr_29311[(7)] = inst_29226__$1);

(statearr_29311[(14)] = inst_29242);

return statearr_29311;
})();
var statearr_29312_31008 = state_29265__$1;
(statearr_29312_31008[(2)] = null);

(statearr_29312_31008[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29266 === (8))){
var inst_29247 = (state_29265[(2)]);
var state_29265__$1 = state_29265;
var statearr_29314_31009 = state_29265__$1;
(statearr_29314_31009[(2)] = inst_29247);

(statearr_29314_31009[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__27467__auto__ = null;
var cljs$core$async$state_machine__27467__auto____0 = (function (){
var statearr_29315 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29315[(0)] = cljs$core$async$state_machine__27467__auto__);

(statearr_29315[(1)] = (1));

return statearr_29315;
});
var cljs$core$async$state_machine__27467__auto____1 = (function (state_29265){
while(true){
var ret_value__27468__auto__ = (function (){try{while(true){
var result__27469__auto__ = switch__27466__auto__(state_29265);
if(cljs.core.keyword_identical_QMARK_(result__27469__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27469__auto__;
}
break;
}
}catch (e29317){var ex__27470__auto__ = e29317;
var statearr_29318_31013 = state_29265;
(statearr_29318_31013[(2)] = ex__27470__auto__);


if(cljs.core.seq((state_29265[(4)]))){
var statearr_29319_31014 = state_29265;
(statearr_29319_31014[(1)] = cljs.core.first((state_29265[(4)])));

} else {
throw ex__27470__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27468__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31019 = state_29265;
state_29265 = G__31019;
continue;
} else {
return ret_value__27468__auto__;
}
break;
}
});
cljs$core$async$state_machine__27467__auto__ = function(state_29265){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27467__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27467__auto____1.call(this,state_29265);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27467__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27467__auto____0;
cljs$core$async$state_machine__27467__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27467__auto____1;
return cljs$core$async$state_machine__27467__auto__;
})()
})();
var state__27582__auto__ = (function (){var statearr_29320 = f__27581__auto__();
(statearr_29320[(6)] = c__27580__auto___30934);

return statearr_29320;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27582__auto__);
}));


return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__29323 = arguments.length;
switch (G__29323) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__27580__auto___31040 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27581__auto__ = (function (){var switch__27466__auto__ = (function (state_29356){
var state_val_29357 = (state_29356[(1)]);
if((state_val_29357 === (7))){
var inst_29336 = (state_29356[(7)]);
var inst_29335 = (state_29356[(8)]);
var inst_29335__$1 = (state_29356[(2)]);
var inst_29336__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_29335__$1,(0),null);
var inst_29337 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_29335__$1,(1),null);
var inst_29338 = (inst_29336__$1 == null);
var state_29356__$1 = (function (){var statearr_29358 = state_29356;
(statearr_29358[(7)] = inst_29336__$1);

(statearr_29358[(8)] = inst_29335__$1);

(statearr_29358[(9)] = inst_29337);

return statearr_29358;
})();
if(cljs.core.truth_(inst_29338)){
var statearr_29359_31068 = state_29356__$1;
(statearr_29359_31068[(1)] = (8));

} else {
var statearr_29360_31069 = state_29356__$1;
(statearr_29360_31069[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29357 === (1))){
var inst_29325 = cljs.core.vec(chs);
var inst_29326 = inst_29325;
var state_29356__$1 = (function (){var statearr_29363 = state_29356;
(statearr_29363[(10)] = inst_29326);

return statearr_29363;
})();
var statearr_29364_31070 = state_29356__$1;
(statearr_29364_31070[(2)] = null);

(statearr_29364_31070[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29357 === (4))){
var inst_29326 = (state_29356[(10)]);
var state_29356__$1 = state_29356;
return cljs.core.async.ioc_alts_BANG_(state_29356__$1,(7),inst_29326);
} else {
if((state_val_29357 === (6))){
var inst_29352 = (state_29356[(2)]);
var state_29356__$1 = state_29356;
var statearr_29369_31072 = state_29356__$1;
(statearr_29369_31072[(2)] = inst_29352);

(statearr_29369_31072[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29357 === (3))){
var inst_29354 = (state_29356[(2)]);
var state_29356__$1 = state_29356;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29356__$1,inst_29354);
} else {
if((state_val_29357 === (2))){
var inst_29326 = (state_29356[(10)]);
var inst_29328 = cljs.core.count(inst_29326);
var inst_29329 = (inst_29328 > (0));
var state_29356__$1 = state_29356;
if(cljs.core.truth_(inst_29329)){
var statearr_29372_31077 = state_29356__$1;
(statearr_29372_31077[(1)] = (4));

} else {
var statearr_29377_31081 = state_29356__$1;
(statearr_29377_31081[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29357 === (11))){
var inst_29326 = (state_29356[(10)]);
var inst_29345 = (state_29356[(2)]);
var tmp29371 = inst_29326;
var inst_29326__$1 = tmp29371;
var state_29356__$1 = (function (){var statearr_29385 = state_29356;
(statearr_29385[(11)] = inst_29345);

(statearr_29385[(10)] = inst_29326__$1);

return statearr_29385;
})();
var statearr_29386_31082 = state_29356__$1;
(statearr_29386_31082[(2)] = null);

(statearr_29386_31082[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29357 === (9))){
var inst_29336 = (state_29356[(7)]);
var state_29356__$1 = state_29356;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29356__$1,(11),out,inst_29336);
} else {
if((state_val_29357 === (5))){
var inst_29350 = cljs.core.async.close_BANG_(out);
var state_29356__$1 = state_29356;
var statearr_29392_31083 = state_29356__$1;
(statearr_29392_31083[(2)] = inst_29350);

(statearr_29392_31083[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29357 === (10))){
var inst_29348 = (state_29356[(2)]);
var state_29356__$1 = state_29356;
var statearr_29393_31088 = state_29356__$1;
(statearr_29393_31088[(2)] = inst_29348);

(statearr_29393_31088[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29357 === (8))){
var inst_29336 = (state_29356[(7)]);
var inst_29335 = (state_29356[(8)]);
var inst_29326 = (state_29356[(10)]);
var inst_29337 = (state_29356[(9)]);
var inst_29340 = (function (){var cs = inst_29326;
var vec__29331 = inst_29335;
var v = inst_29336;
var c = inst_29337;
return (function (p1__29321_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__29321_SHARP_);
});
})();
var inst_29341 = cljs.core.filterv(inst_29340,inst_29326);
var inst_29326__$1 = inst_29341;
var state_29356__$1 = (function (){var statearr_29394 = state_29356;
(statearr_29394[(10)] = inst_29326__$1);

return statearr_29394;
})();
var statearr_29395_31100 = state_29356__$1;
(statearr_29395_31100[(2)] = null);

(statearr_29395_31100[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__27467__auto__ = null;
var cljs$core$async$state_machine__27467__auto____0 = (function (){
var statearr_29396 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29396[(0)] = cljs$core$async$state_machine__27467__auto__);

(statearr_29396[(1)] = (1));

return statearr_29396;
});
var cljs$core$async$state_machine__27467__auto____1 = (function (state_29356){
while(true){
var ret_value__27468__auto__ = (function (){try{while(true){
var result__27469__auto__ = switch__27466__auto__(state_29356);
if(cljs.core.keyword_identical_QMARK_(result__27469__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27469__auto__;
}
break;
}
}catch (e29397){var ex__27470__auto__ = e29397;
var statearr_29398_31102 = state_29356;
(statearr_29398_31102[(2)] = ex__27470__auto__);


if(cljs.core.seq((state_29356[(4)]))){
var statearr_29399_31103 = state_29356;
(statearr_29399_31103[(1)] = cljs.core.first((state_29356[(4)])));

} else {
throw ex__27470__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27468__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31107 = state_29356;
state_29356 = G__31107;
continue;
} else {
return ret_value__27468__auto__;
}
break;
}
});
cljs$core$async$state_machine__27467__auto__ = function(state_29356){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27467__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27467__auto____1.call(this,state_29356);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27467__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27467__auto____0;
cljs$core$async$state_machine__27467__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27467__auto____1;
return cljs$core$async$state_machine__27467__auto__;
})()
})();
var state__27582__auto__ = (function (){var statearr_29400 = f__27581__auto__();
(statearr_29400[(6)] = c__27580__auto___31040);

return statearr_29400;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27582__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__29402 = arguments.length;
switch (G__29402) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__27580__auto___31112 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27581__auto__ = (function (){var switch__27466__auto__ = (function (state_29426){
var state_val_29427 = (state_29426[(1)]);
if((state_val_29427 === (7))){
var inst_29408 = (state_29426[(7)]);
var inst_29408__$1 = (state_29426[(2)]);
var inst_29409 = (inst_29408__$1 == null);
var inst_29410 = cljs.core.not(inst_29409);
var state_29426__$1 = (function (){var statearr_29430 = state_29426;
(statearr_29430[(7)] = inst_29408__$1);

return statearr_29430;
})();
if(inst_29410){
var statearr_29431_31113 = state_29426__$1;
(statearr_29431_31113[(1)] = (8));

} else {
var statearr_29432_31114 = state_29426__$1;
(statearr_29432_31114[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29427 === (1))){
var inst_29403 = (0);
var state_29426__$1 = (function (){var statearr_29433 = state_29426;
(statearr_29433[(8)] = inst_29403);

return statearr_29433;
})();
var statearr_29434_31119 = state_29426__$1;
(statearr_29434_31119[(2)] = null);

(statearr_29434_31119[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29427 === (4))){
var state_29426__$1 = state_29426;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29426__$1,(7),ch);
} else {
if((state_val_29427 === (6))){
var inst_29421 = (state_29426[(2)]);
var state_29426__$1 = state_29426;
var statearr_29435_31120 = state_29426__$1;
(statearr_29435_31120[(2)] = inst_29421);

(statearr_29435_31120[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29427 === (3))){
var inst_29423 = (state_29426[(2)]);
var inst_29424 = cljs.core.async.close_BANG_(out);
var state_29426__$1 = (function (){var statearr_29437 = state_29426;
(statearr_29437[(9)] = inst_29423);

return statearr_29437;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_29426__$1,inst_29424);
} else {
if((state_val_29427 === (2))){
var inst_29403 = (state_29426[(8)]);
var inst_29405 = (inst_29403 < n);
var state_29426__$1 = state_29426;
if(cljs.core.truth_(inst_29405)){
var statearr_29441_31121 = state_29426__$1;
(statearr_29441_31121[(1)] = (4));

} else {
var statearr_29442_31122 = state_29426__$1;
(statearr_29442_31122[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29427 === (11))){
var inst_29403 = (state_29426[(8)]);
var inst_29413 = (state_29426[(2)]);
var inst_29414 = (inst_29403 + (1));
var inst_29403__$1 = inst_29414;
var state_29426__$1 = (function (){var statearr_29443 = state_29426;
(statearr_29443[(10)] = inst_29413);

(statearr_29443[(8)] = inst_29403__$1);

return statearr_29443;
})();
var statearr_29444_31123 = state_29426__$1;
(statearr_29444_31123[(2)] = null);

(statearr_29444_31123[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29427 === (9))){
var state_29426__$1 = state_29426;
var statearr_29445_31124 = state_29426__$1;
(statearr_29445_31124[(2)] = null);

(statearr_29445_31124[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29427 === (5))){
var state_29426__$1 = state_29426;
var statearr_29446_31125 = state_29426__$1;
(statearr_29446_31125[(2)] = null);

(statearr_29446_31125[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29427 === (10))){
var inst_29418 = (state_29426[(2)]);
var state_29426__$1 = state_29426;
var statearr_29447_31126 = state_29426__$1;
(statearr_29447_31126[(2)] = inst_29418);

(statearr_29447_31126[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29427 === (8))){
var inst_29408 = (state_29426[(7)]);
var state_29426__$1 = state_29426;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29426__$1,(11),out,inst_29408);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__27467__auto__ = null;
var cljs$core$async$state_machine__27467__auto____0 = (function (){
var statearr_29448 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_29448[(0)] = cljs$core$async$state_machine__27467__auto__);

(statearr_29448[(1)] = (1));

return statearr_29448;
});
var cljs$core$async$state_machine__27467__auto____1 = (function (state_29426){
while(true){
var ret_value__27468__auto__ = (function (){try{while(true){
var result__27469__auto__ = switch__27466__auto__(state_29426);
if(cljs.core.keyword_identical_QMARK_(result__27469__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27469__auto__;
}
break;
}
}catch (e29449){var ex__27470__auto__ = e29449;
var statearr_29450_31129 = state_29426;
(statearr_29450_31129[(2)] = ex__27470__auto__);


if(cljs.core.seq((state_29426[(4)]))){
var statearr_29451_31130 = state_29426;
(statearr_29451_31130[(1)] = cljs.core.first((state_29426[(4)])));

} else {
throw ex__27470__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27468__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31132 = state_29426;
state_29426 = G__31132;
continue;
} else {
return ret_value__27468__auto__;
}
break;
}
});
cljs$core$async$state_machine__27467__auto__ = function(state_29426){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27467__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27467__auto____1.call(this,state_29426);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27467__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27467__auto____0;
cljs$core$async$state_machine__27467__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27467__auto____1;
return cljs$core$async$state_machine__27467__auto__;
})()
})();
var state__27582__auto__ = (function (){var statearr_29452 = f__27581__auto__();
(statearr_29452[(6)] = c__27580__auto___31112);

return statearr_29452;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27582__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async29454 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29454 = (function (f,ch,meta29455){
this.f = f;
this.ch = ch;
this.meta29455 = meta29455;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async29454.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29456,meta29455__$1){
var self__ = this;
var _29456__$1 = this;
return (new cljs.core.async.t_cljs$core$async29454(self__.f,self__.ch,meta29455__$1));
}));

(cljs.core.async.t_cljs$core$async29454.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29456){
var self__ = this;
var _29456__$1 = this;
return self__.meta29455;
}));

(cljs.core.async.t_cljs$core$async29454.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async29454.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async29454.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async29454.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async29454.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async29460 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29460 = (function (f,ch,meta29455,_,fn1,meta29461){
this.f = f;
this.ch = ch;
this.meta29455 = meta29455;
this._ = _;
this.fn1 = fn1;
this.meta29461 = meta29461;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async29460.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29462,meta29461__$1){
var self__ = this;
var _29462__$1 = this;
return (new cljs.core.async.t_cljs$core$async29460(self__.f,self__.ch,self__.meta29455,self__._,self__.fn1,meta29461__$1));
}));

(cljs.core.async.t_cljs$core$async29460.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29462){
var self__ = this;
var _29462__$1 = this;
return self__.meta29461;
}));

(cljs.core.async.t_cljs$core$async29460.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async29460.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async29460.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async29460.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__29453_SHARP_){
var G__29463 = (((p1__29453_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__29453_SHARP_) : self__.f.call(null,p1__29453_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__29463) : f1.call(null,G__29463));
});
}));

(cljs.core.async.t_cljs$core$async29460.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta29455","meta29455",403849541,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async29454","cljs.core.async/t_cljs$core$async29454",-1458980428,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta29461","meta29461",-1016350262,null)], null);
}));

(cljs.core.async.t_cljs$core$async29460.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async29460.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29460");

(cljs.core.async.t_cljs$core$async29460.cljs$lang$ctorPrWriter = (function (this__4363__auto__,writer__4364__auto__,opt__4365__auto__){
return cljs.core._write(writer__4364__auto__,"cljs.core.async/t_cljs$core$async29460");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29460.
 */
cljs.core.async.__GT_t_cljs$core$async29460 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async29460(f__$1,ch__$1,meta29455__$1,___$2,fn1__$1,meta29461){
return (new cljs.core.async.t_cljs$core$async29460(f__$1,ch__$1,meta29455__$1,___$2,fn1__$1,meta29461));
});

}

return (new cljs.core.async.t_cljs$core$async29460(self__.f,self__.ch,self__.meta29455,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4109__auto__ = ret;
if(cljs.core.truth_(and__4109__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4109__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__29470 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__29470) : self__.f.call(null,G__29470));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async29454.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async29454.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async29454.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta29455","meta29455",403849541,null)], null);
}));

(cljs.core.async.t_cljs$core$async29454.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async29454.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29454");

(cljs.core.async.t_cljs$core$async29454.cljs$lang$ctorPrWriter = (function (this__4363__auto__,writer__4364__auto__,opt__4365__auto__){
return cljs.core._write(writer__4364__auto__,"cljs.core.async/t_cljs$core$async29454");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29454.
 */
cljs.core.async.__GT_t_cljs$core$async29454 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async29454(f__$1,ch__$1,meta29455){
return (new cljs.core.async.t_cljs$core$async29454(f__$1,ch__$1,meta29455));
});

}

return (new cljs.core.async.t_cljs$core$async29454(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async29474 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29474 = (function (f,ch,meta29475){
this.f = f;
this.ch = ch;
this.meta29475 = meta29475;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async29474.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29476,meta29475__$1){
var self__ = this;
var _29476__$1 = this;
return (new cljs.core.async.t_cljs$core$async29474(self__.f,self__.ch,meta29475__$1));
}));

(cljs.core.async.t_cljs$core$async29474.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29476){
var self__ = this;
var _29476__$1 = this;
return self__.meta29475;
}));

(cljs.core.async.t_cljs$core$async29474.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async29474.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async29474.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async29474.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async29474.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async29474.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async29474.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta29475","meta29475",1543326998,null)], null);
}));

(cljs.core.async.t_cljs$core$async29474.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async29474.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29474");

(cljs.core.async.t_cljs$core$async29474.cljs$lang$ctorPrWriter = (function (this__4363__auto__,writer__4364__auto__,opt__4365__auto__){
return cljs.core._write(writer__4364__auto__,"cljs.core.async/t_cljs$core$async29474");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29474.
 */
cljs.core.async.__GT_t_cljs$core$async29474 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async29474(f__$1,ch__$1,meta29475){
return (new cljs.core.async.t_cljs$core$async29474(f__$1,ch__$1,meta29475));
});

}

return (new cljs.core.async.t_cljs$core$async29474(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async29480 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29480 = (function (p,ch,meta29481){
this.p = p;
this.ch = ch;
this.meta29481 = meta29481;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async29480.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29482,meta29481__$1){
var self__ = this;
var _29482__$1 = this;
return (new cljs.core.async.t_cljs$core$async29480(self__.p,self__.ch,meta29481__$1));
}));

(cljs.core.async.t_cljs$core$async29480.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29482){
var self__ = this;
var _29482__$1 = this;
return self__.meta29481;
}));

(cljs.core.async.t_cljs$core$async29480.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async29480.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async29480.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async29480.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async29480.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async29480.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async29480.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async29480.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta29481","meta29481",-1611547607,null)], null);
}));

(cljs.core.async.t_cljs$core$async29480.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async29480.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29480");

(cljs.core.async.t_cljs$core$async29480.cljs$lang$ctorPrWriter = (function (this__4363__auto__,writer__4364__auto__,opt__4365__auto__){
return cljs.core._write(writer__4364__auto__,"cljs.core.async/t_cljs$core$async29480");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29480.
 */
cljs.core.async.__GT_t_cljs$core$async29480 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async29480(p__$1,ch__$1,meta29481){
return (new cljs.core.async.t_cljs$core$async29480(p__$1,ch__$1,meta29481));
});

}

return (new cljs.core.async.t_cljs$core$async29480(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__29485 = arguments.length;
switch (G__29485) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__27580__auto___31153 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27581__auto__ = (function (){var switch__27466__auto__ = (function (state_29506){
var state_val_29507 = (state_29506[(1)]);
if((state_val_29507 === (7))){
var inst_29502 = (state_29506[(2)]);
var state_29506__$1 = state_29506;
var statearr_29508_31154 = state_29506__$1;
(statearr_29508_31154[(2)] = inst_29502);

(statearr_29508_31154[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29507 === (1))){
var state_29506__$1 = state_29506;
var statearr_29509_31155 = state_29506__$1;
(statearr_29509_31155[(2)] = null);

(statearr_29509_31155[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29507 === (4))){
var inst_29488 = (state_29506[(7)]);
var inst_29488__$1 = (state_29506[(2)]);
var inst_29489 = (inst_29488__$1 == null);
var state_29506__$1 = (function (){var statearr_29510 = state_29506;
(statearr_29510[(7)] = inst_29488__$1);

return statearr_29510;
})();
if(cljs.core.truth_(inst_29489)){
var statearr_29511_31163 = state_29506__$1;
(statearr_29511_31163[(1)] = (5));

} else {
var statearr_29512_31164 = state_29506__$1;
(statearr_29512_31164[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29507 === (6))){
var inst_29488 = (state_29506[(7)]);
var inst_29493 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_29488) : p.call(null,inst_29488));
var state_29506__$1 = state_29506;
if(cljs.core.truth_(inst_29493)){
var statearr_29513_31173 = state_29506__$1;
(statearr_29513_31173[(1)] = (8));

} else {
var statearr_29514_31176 = state_29506__$1;
(statearr_29514_31176[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29507 === (3))){
var inst_29504 = (state_29506[(2)]);
var state_29506__$1 = state_29506;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29506__$1,inst_29504);
} else {
if((state_val_29507 === (2))){
var state_29506__$1 = state_29506;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29506__$1,(4),ch);
} else {
if((state_val_29507 === (11))){
var inst_29496 = (state_29506[(2)]);
var state_29506__$1 = state_29506;
var statearr_29515_31188 = state_29506__$1;
(statearr_29515_31188[(2)] = inst_29496);

(statearr_29515_31188[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29507 === (9))){
var state_29506__$1 = state_29506;
var statearr_29516_31189 = state_29506__$1;
(statearr_29516_31189[(2)] = null);

(statearr_29516_31189[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29507 === (5))){
var inst_29491 = cljs.core.async.close_BANG_(out);
var state_29506__$1 = state_29506;
var statearr_29517_31194 = state_29506__$1;
(statearr_29517_31194[(2)] = inst_29491);

(statearr_29517_31194[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29507 === (10))){
var inst_29499 = (state_29506[(2)]);
var state_29506__$1 = (function (){var statearr_29518 = state_29506;
(statearr_29518[(8)] = inst_29499);

return statearr_29518;
})();
var statearr_29519_31197 = state_29506__$1;
(statearr_29519_31197[(2)] = null);

(statearr_29519_31197[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29507 === (8))){
var inst_29488 = (state_29506[(7)]);
var state_29506__$1 = state_29506;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29506__$1,(11),out,inst_29488);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__27467__auto__ = null;
var cljs$core$async$state_machine__27467__auto____0 = (function (){
var statearr_29520 = [null,null,null,null,null,null,null,null,null];
(statearr_29520[(0)] = cljs$core$async$state_machine__27467__auto__);

(statearr_29520[(1)] = (1));

return statearr_29520;
});
var cljs$core$async$state_machine__27467__auto____1 = (function (state_29506){
while(true){
var ret_value__27468__auto__ = (function (){try{while(true){
var result__27469__auto__ = switch__27466__auto__(state_29506);
if(cljs.core.keyword_identical_QMARK_(result__27469__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27469__auto__;
}
break;
}
}catch (e29521){var ex__27470__auto__ = e29521;
var statearr_29522_31215 = state_29506;
(statearr_29522_31215[(2)] = ex__27470__auto__);


if(cljs.core.seq((state_29506[(4)]))){
var statearr_29523_31222 = state_29506;
(statearr_29523_31222[(1)] = cljs.core.first((state_29506[(4)])));

} else {
throw ex__27470__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27468__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31228 = state_29506;
state_29506 = G__31228;
continue;
} else {
return ret_value__27468__auto__;
}
break;
}
});
cljs$core$async$state_machine__27467__auto__ = function(state_29506){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27467__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27467__auto____1.call(this,state_29506);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27467__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27467__auto____0;
cljs$core$async$state_machine__27467__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27467__auto____1;
return cljs$core$async$state_machine__27467__auto__;
})()
})();
var state__27582__auto__ = (function (){var statearr_29524 = f__27581__auto__();
(statearr_29524[(6)] = c__27580__auto___31153);

return statearr_29524;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27582__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__29527 = arguments.length;
switch (G__29527) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__27580__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27581__auto__ = (function (){var switch__27466__auto__ = (function (state_29589){
var state_val_29590 = (state_29589[(1)]);
if((state_val_29590 === (7))){
var inst_29585 = (state_29589[(2)]);
var state_29589__$1 = state_29589;
var statearr_29591_31230 = state_29589__$1;
(statearr_29591_31230[(2)] = inst_29585);

(statearr_29591_31230[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29590 === (20))){
var inst_29555 = (state_29589[(7)]);
var inst_29566 = (state_29589[(2)]);
var inst_29567 = cljs.core.next(inst_29555);
var inst_29541 = inst_29567;
var inst_29542 = null;
var inst_29543 = (0);
var inst_29544 = (0);
var state_29589__$1 = (function (){var statearr_29592 = state_29589;
(statearr_29592[(8)] = inst_29544);

(statearr_29592[(9)] = inst_29542);

(statearr_29592[(10)] = inst_29543);

(statearr_29592[(11)] = inst_29541);

(statearr_29592[(12)] = inst_29566);

return statearr_29592;
})();
var statearr_29593_31231 = state_29589__$1;
(statearr_29593_31231[(2)] = null);

(statearr_29593_31231[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29590 === (1))){
var state_29589__$1 = state_29589;
var statearr_29594_31232 = state_29589__$1;
(statearr_29594_31232[(2)] = null);

(statearr_29594_31232[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29590 === (4))){
var inst_29530 = (state_29589[(13)]);
var inst_29530__$1 = (state_29589[(2)]);
var inst_29531 = (inst_29530__$1 == null);
var state_29589__$1 = (function (){var statearr_29595 = state_29589;
(statearr_29595[(13)] = inst_29530__$1);

return statearr_29595;
})();
if(cljs.core.truth_(inst_29531)){
var statearr_29596_31248 = state_29589__$1;
(statearr_29596_31248[(1)] = (5));

} else {
var statearr_29597_31253 = state_29589__$1;
(statearr_29597_31253[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29590 === (15))){
var state_29589__$1 = state_29589;
var statearr_29601_31256 = state_29589__$1;
(statearr_29601_31256[(2)] = null);

(statearr_29601_31256[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29590 === (21))){
var state_29589__$1 = state_29589;
var statearr_29602_31262 = state_29589__$1;
(statearr_29602_31262[(2)] = null);

(statearr_29602_31262[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29590 === (13))){
var inst_29544 = (state_29589[(8)]);
var inst_29542 = (state_29589[(9)]);
var inst_29543 = (state_29589[(10)]);
var inst_29541 = (state_29589[(11)]);
var inst_29551 = (state_29589[(2)]);
var inst_29552 = (inst_29544 + (1));
var tmp29598 = inst_29542;
var tmp29599 = inst_29543;
var tmp29600 = inst_29541;
var inst_29541__$1 = tmp29600;
var inst_29542__$1 = tmp29598;
var inst_29543__$1 = tmp29599;
var inst_29544__$1 = inst_29552;
var state_29589__$1 = (function (){var statearr_29603 = state_29589;
(statearr_29603[(8)] = inst_29544__$1);

(statearr_29603[(9)] = inst_29542__$1);

(statearr_29603[(10)] = inst_29543__$1);

(statearr_29603[(14)] = inst_29551);

(statearr_29603[(11)] = inst_29541__$1);

return statearr_29603;
})();
var statearr_29604_31280 = state_29589__$1;
(statearr_29604_31280[(2)] = null);

(statearr_29604_31280[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29590 === (22))){
var state_29589__$1 = state_29589;
var statearr_29605_31289 = state_29589__$1;
(statearr_29605_31289[(2)] = null);

(statearr_29605_31289[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29590 === (6))){
var inst_29530 = (state_29589[(13)]);
var inst_29539 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_29530) : f.call(null,inst_29530));
var inst_29540 = cljs.core.seq(inst_29539);
var inst_29541 = inst_29540;
var inst_29542 = null;
var inst_29543 = (0);
var inst_29544 = (0);
var state_29589__$1 = (function (){var statearr_29606 = state_29589;
(statearr_29606[(8)] = inst_29544);

(statearr_29606[(9)] = inst_29542);

(statearr_29606[(10)] = inst_29543);

(statearr_29606[(11)] = inst_29541);

return statearr_29606;
})();
var statearr_29607_31303 = state_29589__$1;
(statearr_29607_31303[(2)] = null);

(statearr_29607_31303[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29590 === (17))){
var inst_29555 = (state_29589[(7)]);
var inst_29559 = cljs.core.chunk_first(inst_29555);
var inst_29560 = cljs.core.chunk_rest(inst_29555);
var inst_29561 = cljs.core.count(inst_29559);
var inst_29541 = inst_29560;
var inst_29542 = inst_29559;
var inst_29543 = inst_29561;
var inst_29544 = (0);
var state_29589__$1 = (function (){var statearr_29608 = state_29589;
(statearr_29608[(8)] = inst_29544);

(statearr_29608[(9)] = inst_29542);

(statearr_29608[(10)] = inst_29543);

(statearr_29608[(11)] = inst_29541);

return statearr_29608;
})();
var statearr_29609_31305 = state_29589__$1;
(statearr_29609_31305[(2)] = null);

(statearr_29609_31305[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29590 === (3))){
var inst_29587 = (state_29589[(2)]);
var state_29589__$1 = state_29589;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29589__$1,inst_29587);
} else {
if((state_val_29590 === (12))){
var inst_29575 = (state_29589[(2)]);
var state_29589__$1 = state_29589;
var statearr_29610_31311 = state_29589__$1;
(statearr_29610_31311[(2)] = inst_29575);

(statearr_29610_31311[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29590 === (2))){
var state_29589__$1 = state_29589;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29589__$1,(4),in$);
} else {
if((state_val_29590 === (23))){
var inst_29583 = (state_29589[(2)]);
var state_29589__$1 = state_29589;
var statearr_29611_31312 = state_29589__$1;
(statearr_29611_31312[(2)] = inst_29583);

(statearr_29611_31312[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29590 === (19))){
var inst_29570 = (state_29589[(2)]);
var state_29589__$1 = state_29589;
var statearr_29612_31315 = state_29589__$1;
(statearr_29612_31315[(2)] = inst_29570);

(statearr_29612_31315[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29590 === (11))){
var inst_29541 = (state_29589[(11)]);
var inst_29555 = (state_29589[(7)]);
var inst_29555__$1 = cljs.core.seq(inst_29541);
var state_29589__$1 = (function (){var statearr_29613 = state_29589;
(statearr_29613[(7)] = inst_29555__$1);

return statearr_29613;
})();
if(inst_29555__$1){
var statearr_29614_31317 = state_29589__$1;
(statearr_29614_31317[(1)] = (14));

} else {
var statearr_29615_31318 = state_29589__$1;
(statearr_29615_31318[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29590 === (9))){
var inst_29577 = (state_29589[(2)]);
var inst_29578 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_29589__$1 = (function (){var statearr_29616 = state_29589;
(statearr_29616[(15)] = inst_29577);

return statearr_29616;
})();
if(cljs.core.truth_(inst_29578)){
var statearr_29617_31321 = state_29589__$1;
(statearr_29617_31321[(1)] = (21));

} else {
var statearr_29618_31322 = state_29589__$1;
(statearr_29618_31322[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29590 === (5))){
var inst_29533 = cljs.core.async.close_BANG_(out);
var state_29589__$1 = state_29589;
var statearr_29619_31323 = state_29589__$1;
(statearr_29619_31323[(2)] = inst_29533);

(statearr_29619_31323[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29590 === (14))){
var inst_29555 = (state_29589[(7)]);
var inst_29557 = cljs.core.chunked_seq_QMARK_(inst_29555);
var state_29589__$1 = state_29589;
if(inst_29557){
var statearr_29620_31324 = state_29589__$1;
(statearr_29620_31324[(1)] = (17));

} else {
var statearr_29621_31325 = state_29589__$1;
(statearr_29621_31325[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29590 === (16))){
var inst_29573 = (state_29589[(2)]);
var state_29589__$1 = state_29589;
var statearr_29622_31330 = state_29589__$1;
(statearr_29622_31330[(2)] = inst_29573);

(statearr_29622_31330[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29590 === (10))){
var inst_29544 = (state_29589[(8)]);
var inst_29542 = (state_29589[(9)]);
var inst_29549 = cljs.core._nth(inst_29542,inst_29544);
var state_29589__$1 = state_29589;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29589__$1,(13),out,inst_29549);
} else {
if((state_val_29590 === (18))){
var inst_29555 = (state_29589[(7)]);
var inst_29564 = cljs.core.first(inst_29555);
var state_29589__$1 = state_29589;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29589__$1,(20),out,inst_29564);
} else {
if((state_val_29590 === (8))){
var inst_29544 = (state_29589[(8)]);
var inst_29543 = (state_29589[(10)]);
var inst_29546 = (inst_29544 < inst_29543);
var inst_29547 = inst_29546;
var state_29589__$1 = state_29589;
if(cljs.core.truth_(inst_29547)){
var statearr_29623_31332 = state_29589__$1;
(statearr_29623_31332[(1)] = (10));

} else {
var statearr_29624_31333 = state_29589__$1;
(statearr_29624_31333[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__27467__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__27467__auto____0 = (function (){
var statearr_29625 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29625[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__27467__auto__);

(statearr_29625[(1)] = (1));

return statearr_29625;
});
var cljs$core$async$mapcat_STAR__$_state_machine__27467__auto____1 = (function (state_29589){
while(true){
var ret_value__27468__auto__ = (function (){try{while(true){
var result__27469__auto__ = switch__27466__auto__(state_29589);
if(cljs.core.keyword_identical_QMARK_(result__27469__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27469__auto__;
}
break;
}
}catch (e29626){var ex__27470__auto__ = e29626;
var statearr_29627_31336 = state_29589;
(statearr_29627_31336[(2)] = ex__27470__auto__);


if(cljs.core.seq((state_29589[(4)]))){
var statearr_29628_31338 = state_29589;
(statearr_29628_31338[(1)] = cljs.core.first((state_29589[(4)])));

} else {
throw ex__27470__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27468__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31339 = state_29589;
state_29589 = G__31339;
continue;
} else {
return ret_value__27468__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__27467__auto__ = function(state_29589){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__27467__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__27467__auto____1.call(this,state_29589);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__27467__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__27467__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__27467__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__27467__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__27467__auto__;
})()
})();
var state__27582__auto__ = (function (){var statearr_29629 = f__27581__auto__();
(statearr_29629[(6)] = c__27580__auto__);

return statearr_29629;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27582__auto__);
}));

return c__27580__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__29637 = arguments.length;
switch (G__29637) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__29639 = arguments.length;
switch (G__29639) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__29641 = arguments.length;
switch (G__29641) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__27580__auto___31347 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27581__auto__ = (function (){var switch__27466__auto__ = (function (state_29665){
var state_val_29666 = (state_29665[(1)]);
if((state_val_29666 === (7))){
var inst_29660 = (state_29665[(2)]);
var state_29665__$1 = state_29665;
var statearr_29671_31349 = state_29665__$1;
(statearr_29671_31349[(2)] = inst_29660);

(statearr_29671_31349[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29666 === (1))){
var inst_29642 = null;
var state_29665__$1 = (function (){var statearr_29672 = state_29665;
(statearr_29672[(7)] = inst_29642);

return statearr_29672;
})();
var statearr_29673_31350 = state_29665__$1;
(statearr_29673_31350[(2)] = null);

(statearr_29673_31350[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29666 === (4))){
var inst_29645 = (state_29665[(8)]);
var inst_29645__$1 = (state_29665[(2)]);
var inst_29646 = (inst_29645__$1 == null);
var inst_29647 = cljs.core.not(inst_29646);
var state_29665__$1 = (function (){var statearr_29678 = state_29665;
(statearr_29678[(8)] = inst_29645__$1);

return statearr_29678;
})();
if(inst_29647){
var statearr_29679_31351 = state_29665__$1;
(statearr_29679_31351[(1)] = (5));

} else {
var statearr_29680_31352 = state_29665__$1;
(statearr_29680_31352[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29666 === (6))){
var state_29665__$1 = state_29665;
var statearr_29681_31353 = state_29665__$1;
(statearr_29681_31353[(2)] = null);

(statearr_29681_31353[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29666 === (3))){
var inst_29662 = (state_29665[(2)]);
var inst_29663 = cljs.core.async.close_BANG_(out);
var state_29665__$1 = (function (){var statearr_29682 = state_29665;
(statearr_29682[(9)] = inst_29662);

return statearr_29682;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_29665__$1,inst_29663);
} else {
if((state_val_29666 === (2))){
var state_29665__$1 = state_29665;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29665__$1,(4),ch);
} else {
if((state_val_29666 === (11))){
var inst_29645 = (state_29665[(8)]);
var inst_29654 = (state_29665[(2)]);
var inst_29642 = inst_29645;
var state_29665__$1 = (function (){var statearr_29683 = state_29665;
(statearr_29683[(7)] = inst_29642);

(statearr_29683[(10)] = inst_29654);

return statearr_29683;
})();
var statearr_29684_31354 = state_29665__$1;
(statearr_29684_31354[(2)] = null);

(statearr_29684_31354[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29666 === (9))){
var inst_29645 = (state_29665[(8)]);
var state_29665__$1 = state_29665;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29665__$1,(11),out,inst_29645);
} else {
if((state_val_29666 === (5))){
var inst_29642 = (state_29665[(7)]);
var inst_29645 = (state_29665[(8)]);
var inst_29649 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_29645,inst_29642);
var state_29665__$1 = state_29665;
if(inst_29649){
var statearr_29686_31358 = state_29665__$1;
(statearr_29686_31358[(1)] = (8));

} else {
var statearr_29687_31359 = state_29665__$1;
(statearr_29687_31359[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29666 === (10))){
var inst_29657 = (state_29665[(2)]);
var state_29665__$1 = state_29665;
var statearr_29688_31360 = state_29665__$1;
(statearr_29688_31360[(2)] = inst_29657);

(statearr_29688_31360[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29666 === (8))){
var inst_29642 = (state_29665[(7)]);
var tmp29685 = inst_29642;
var inst_29642__$1 = tmp29685;
var state_29665__$1 = (function (){var statearr_29689 = state_29665;
(statearr_29689[(7)] = inst_29642__$1);

return statearr_29689;
})();
var statearr_29692_31361 = state_29665__$1;
(statearr_29692_31361[(2)] = null);

(statearr_29692_31361[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__27467__auto__ = null;
var cljs$core$async$state_machine__27467__auto____0 = (function (){
var statearr_29696 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_29696[(0)] = cljs$core$async$state_machine__27467__auto__);

(statearr_29696[(1)] = (1));

return statearr_29696;
});
var cljs$core$async$state_machine__27467__auto____1 = (function (state_29665){
while(true){
var ret_value__27468__auto__ = (function (){try{while(true){
var result__27469__auto__ = switch__27466__auto__(state_29665);
if(cljs.core.keyword_identical_QMARK_(result__27469__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27469__auto__;
}
break;
}
}catch (e29697){var ex__27470__auto__ = e29697;
var statearr_29698_31362 = state_29665;
(statearr_29698_31362[(2)] = ex__27470__auto__);


if(cljs.core.seq((state_29665[(4)]))){
var statearr_29699_31363 = state_29665;
(statearr_29699_31363[(1)] = cljs.core.first((state_29665[(4)])));

} else {
throw ex__27470__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27468__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31365 = state_29665;
state_29665 = G__31365;
continue;
} else {
return ret_value__27468__auto__;
}
break;
}
});
cljs$core$async$state_machine__27467__auto__ = function(state_29665){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27467__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27467__auto____1.call(this,state_29665);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27467__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27467__auto____0;
cljs$core$async$state_machine__27467__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27467__auto____1;
return cljs$core$async$state_machine__27467__auto__;
})()
})();
var state__27582__auto__ = (function (){var statearr_29700 = f__27581__auto__();
(statearr_29700[(6)] = c__27580__auto___31347);

return statearr_29700;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27582__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__29705 = arguments.length;
switch (G__29705) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__27580__auto___31374 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27581__auto__ = (function (){var switch__27466__auto__ = (function (state_29751){
var state_val_29752 = (state_29751[(1)]);
if((state_val_29752 === (7))){
var inst_29747 = (state_29751[(2)]);
var state_29751__$1 = state_29751;
var statearr_29753_31375 = state_29751__$1;
(statearr_29753_31375[(2)] = inst_29747);

(statearr_29753_31375[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29752 === (1))){
var inst_29714 = (new Array(n));
var inst_29715 = inst_29714;
var inst_29716 = (0);
var state_29751__$1 = (function (){var statearr_29754 = state_29751;
(statearr_29754[(7)] = inst_29715);

(statearr_29754[(8)] = inst_29716);

return statearr_29754;
})();
var statearr_29755_31379 = state_29751__$1;
(statearr_29755_31379[(2)] = null);

(statearr_29755_31379[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29752 === (4))){
var inst_29719 = (state_29751[(9)]);
var inst_29719__$1 = (state_29751[(2)]);
var inst_29720 = (inst_29719__$1 == null);
var inst_29721 = cljs.core.not(inst_29720);
var state_29751__$1 = (function (){var statearr_29756 = state_29751;
(statearr_29756[(9)] = inst_29719__$1);

return statearr_29756;
})();
if(inst_29721){
var statearr_29757_31383 = state_29751__$1;
(statearr_29757_31383[(1)] = (5));

} else {
var statearr_29760_31384 = state_29751__$1;
(statearr_29760_31384[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29752 === (15))){
var inst_29741 = (state_29751[(2)]);
var state_29751__$1 = state_29751;
var statearr_29761_31385 = state_29751__$1;
(statearr_29761_31385[(2)] = inst_29741);

(statearr_29761_31385[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29752 === (13))){
var state_29751__$1 = state_29751;
var statearr_29762_31386 = state_29751__$1;
(statearr_29762_31386[(2)] = null);

(statearr_29762_31386[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29752 === (6))){
var inst_29716 = (state_29751[(8)]);
var inst_29737 = (inst_29716 > (0));
var state_29751__$1 = state_29751;
if(cljs.core.truth_(inst_29737)){
var statearr_29763_31390 = state_29751__$1;
(statearr_29763_31390[(1)] = (12));

} else {
var statearr_29764_31391 = state_29751__$1;
(statearr_29764_31391[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29752 === (3))){
var inst_29749 = (state_29751[(2)]);
var state_29751__$1 = state_29751;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29751__$1,inst_29749);
} else {
if((state_val_29752 === (12))){
var inst_29715 = (state_29751[(7)]);
var inst_29739 = cljs.core.vec(inst_29715);
var state_29751__$1 = state_29751;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29751__$1,(15),out,inst_29739);
} else {
if((state_val_29752 === (2))){
var state_29751__$1 = state_29751;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29751__$1,(4),ch);
} else {
if((state_val_29752 === (11))){
var inst_29731 = (state_29751[(2)]);
var inst_29732 = (new Array(n));
var inst_29715 = inst_29732;
var inst_29716 = (0);
var state_29751__$1 = (function (){var statearr_29765 = state_29751;
(statearr_29765[(7)] = inst_29715);

(statearr_29765[(10)] = inst_29731);

(statearr_29765[(8)] = inst_29716);

return statearr_29765;
})();
var statearr_29766_31395 = state_29751__$1;
(statearr_29766_31395[(2)] = null);

(statearr_29766_31395[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29752 === (9))){
var inst_29715 = (state_29751[(7)]);
var inst_29729 = cljs.core.vec(inst_29715);
var state_29751__$1 = state_29751;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29751__$1,(11),out,inst_29729);
} else {
if((state_val_29752 === (5))){
var inst_29719 = (state_29751[(9)]);
var inst_29715 = (state_29751[(7)]);
var inst_29716 = (state_29751[(8)]);
var inst_29724 = (state_29751[(11)]);
var inst_29723 = (inst_29715[inst_29716] = inst_29719);
var inst_29724__$1 = (inst_29716 + (1));
var inst_29725 = (inst_29724__$1 < n);
var state_29751__$1 = (function (){var statearr_29767 = state_29751;
(statearr_29767[(12)] = inst_29723);

(statearr_29767[(11)] = inst_29724__$1);

return statearr_29767;
})();
if(cljs.core.truth_(inst_29725)){
var statearr_29768_31397 = state_29751__$1;
(statearr_29768_31397[(1)] = (8));

} else {
var statearr_29769_31398 = state_29751__$1;
(statearr_29769_31398[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29752 === (14))){
var inst_29744 = (state_29751[(2)]);
var inst_29745 = cljs.core.async.close_BANG_(out);
var state_29751__$1 = (function (){var statearr_29771 = state_29751;
(statearr_29771[(13)] = inst_29744);

return statearr_29771;
})();
var statearr_29772_31399 = state_29751__$1;
(statearr_29772_31399[(2)] = inst_29745);

(statearr_29772_31399[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29752 === (10))){
var inst_29735 = (state_29751[(2)]);
var state_29751__$1 = state_29751;
var statearr_29773_31400 = state_29751__$1;
(statearr_29773_31400[(2)] = inst_29735);

(statearr_29773_31400[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29752 === (8))){
var inst_29715 = (state_29751[(7)]);
var inst_29724 = (state_29751[(11)]);
var tmp29770 = inst_29715;
var inst_29715__$1 = tmp29770;
var inst_29716 = inst_29724;
var state_29751__$1 = (function (){var statearr_29774 = state_29751;
(statearr_29774[(7)] = inst_29715__$1);

(statearr_29774[(8)] = inst_29716);

return statearr_29774;
})();
var statearr_29775_31401 = state_29751__$1;
(statearr_29775_31401[(2)] = null);

(statearr_29775_31401[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__27467__auto__ = null;
var cljs$core$async$state_machine__27467__auto____0 = (function (){
var statearr_29776 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29776[(0)] = cljs$core$async$state_machine__27467__auto__);

(statearr_29776[(1)] = (1));

return statearr_29776;
});
var cljs$core$async$state_machine__27467__auto____1 = (function (state_29751){
while(true){
var ret_value__27468__auto__ = (function (){try{while(true){
var result__27469__auto__ = switch__27466__auto__(state_29751);
if(cljs.core.keyword_identical_QMARK_(result__27469__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27469__auto__;
}
break;
}
}catch (e29777){var ex__27470__auto__ = e29777;
var statearr_29778_31402 = state_29751;
(statearr_29778_31402[(2)] = ex__27470__auto__);


if(cljs.core.seq((state_29751[(4)]))){
var statearr_29779_31407 = state_29751;
(statearr_29779_31407[(1)] = cljs.core.first((state_29751[(4)])));

} else {
throw ex__27470__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27468__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31408 = state_29751;
state_29751 = G__31408;
continue;
} else {
return ret_value__27468__auto__;
}
break;
}
});
cljs$core$async$state_machine__27467__auto__ = function(state_29751){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27467__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27467__auto____1.call(this,state_29751);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27467__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27467__auto____0;
cljs$core$async$state_machine__27467__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27467__auto____1;
return cljs$core$async$state_machine__27467__auto__;
})()
})();
var state__27582__auto__ = (function (){var statearr_29781 = f__27581__auto__();
(statearr_29781[(6)] = c__27580__auto___31374);

return statearr_29781;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27582__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__29783 = arguments.length;
switch (G__29783) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__27580__auto___31410 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27581__auto__ = (function (){var switch__27466__auto__ = (function (state_29825){
var state_val_29826 = (state_29825[(1)]);
if((state_val_29826 === (7))){
var inst_29821 = (state_29825[(2)]);
var state_29825__$1 = state_29825;
var statearr_29827_31411 = state_29825__$1;
(statearr_29827_31411[(2)] = inst_29821);

(statearr_29827_31411[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29826 === (1))){
var inst_29784 = [];
var inst_29785 = inst_29784;
var inst_29786 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_29825__$1 = (function (){var statearr_29828 = state_29825;
(statearr_29828[(7)] = inst_29785);

(statearr_29828[(8)] = inst_29786);

return statearr_29828;
})();
var statearr_29829_31413 = state_29825__$1;
(statearr_29829_31413[(2)] = null);

(statearr_29829_31413[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29826 === (4))){
var inst_29789 = (state_29825[(9)]);
var inst_29789__$1 = (state_29825[(2)]);
var inst_29790 = (inst_29789__$1 == null);
var inst_29791 = cljs.core.not(inst_29790);
var state_29825__$1 = (function (){var statearr_29830 = state_29825;
(statearr_29830[(9)] = inst_29789__$1);

return statearr_29830;
})();
if(inst_29791){
var statearr_29831_31414 = state_29825__$1;
(statearr_29831_31414[(1)] = (5));

} else {
var statearr_29832_31415 = state_29825__$1;
(statearr_29832_31415[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29826 === (15))){
var inst_29815 = (state_29825[(2)]);
var state_29825__$1 = state_29825;
var statearr_29833_31416 = state_29825__$1;
(statearr_29833_31416[(2)] = inst_29815);

(statearr_29833_31416[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29826 === (13))){
var state_29825__$1 = state_29825;
var statearr_29834_31417 = state_29825__$1;
(statearr_29834_31417[(2)] = null);

(statearr_29834_31417[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29826 === (6))){
var inst_29785 = (state_29825[(7)]);
var inst_29810 = inst_29785.length;
var inst_29811 = (inst_29810 > (0));
var state_29825__$1 = state_29825;
if(cljs.core.truth_(inst_29811)){
var statearr_29835_31420 = state_29825__$1;
(statearr_29835_31420[(1)] = (12));

} else {
var statearr_29836_31421 = state_29825__$1;
(statearr_29836_31421[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29826 === (3))){
var inst_29823 = (state_29825[(2)]);
var state_29825__$1 = state_29825;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29825__$1,inst_29823);
} else {
if((state_val_29826 === (12))){
var inst_29785 = (state_29825[(7)]);
var inst_29813 = cljs.core.vec(inst_29785);
var state_29825__$1 = state_29825;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29825__$1,(15),out,inst_29813);
} else {
if((state_val_29826 === (2))){
var state_29825__$1 = state_29825;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29825__$1,(4),ch);
} else {
if((state_val_29826 === (11))){
var inst_29789 = (state_29825[(9)]);
var inst_29793 = (state_29825[(10)]);
var inst_29803 = (state_29825[(2)]);
var inst_29804 = [];
var inst_29805 = inst_29804.push(inst_29789);
var inst_29785 = inst_29804;
var inst_29786 = inst_29793;
var state_29825__$1 = (function (){var statearr_29842 = state_29825;
(statearr_29842[(11)] = inst_29805);

(statearr_29842[(7)] = inst_29785);

(statearr_29842[(12)] = inst_29803);

(statearr_29842[(8)] = inst_29786);

return statearr_29842;
})();
var statearr_29843_31422 = state_29825__$1;
(statearr_29843_31422[(2)] = null);

(statearr_29843_31422[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29826 === (9))){
var inst_29785 = (state_29825[(7)]);
var inst_29801 = cljs.core.vec(inst_29785);
var state_29825__$1 = state_29825;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29825__$1,(11),out,inst_29801);
} else {
if((state_val_29826 === (5))){
var inst_29789 = (state_29825[(9)]);
var inst_29786 = (state_29825[(8)]);
var inst_29793 = (state_29825[(10)]);
var inst_29793__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_29789) : f.call(null,inst_29789));
var inst_29794 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_29793__$1,inst_29786);
var inst_29795 = cljs.core.keyword_identical_QMARK_(inst_29786,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_29796 = ((inst_29794) || (inst_29795));
var state_29825__$1 = (function (){var statearr_29844 = state_29825;
(statearr_29844[(10)] = inst_29793__$1);

return statearr_29844;
})();
if(cljs.core.truth_(inst_29796)){
var statearr_29845_31432 = state_29825__$1;
(statearr_29845_31432[(1)] = (8));

} else {
var statearr_29846_31433 = state_29825__$1;
(statearr_29846_31433[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29826 === (14))){
var inst_29818 = (state_29825[(2)]);
var inst_29819 = cljs.core.async.close_BANG_(out);
var state_29825__$1 = (function (){var statearr_29852 = state_29825;
(statearr_29852[(13)] = inst_29818);

return statearr_29852;
})();
var statearr_29853_31434 = state_29825__$1;
(statearr_29853_31434[(2)] = inst_29819);

(statearr_29853_31434[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29826 === (10))){
var inst_29808 = (state_29825[(2)]);
var state_29825__$1 = state_29825;
var statearr_29858_31435 = state_29825__$1;
(statearr_29858_31435[(2)] = inst_29808);

(statearr_29858_31435[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29826 === (8))){
var inst_29789 = (state_29825[(9)]);
var inst_29785 = (state_29825[(7)]);
var inst_29793 = (state_29825[(10)]);
var inst_29798 = inst_29785.push(inst_29789);
var tmp29847 = inst_29785;
var inst_29785__$1 = tmp29847;
var inst_29786 = inst_29793;
var state_29825__$1 = (function (){var statearr_29879 = state_29825;
(statearr_29879[(7)] = inst_29785__$1);

(statearr_29879[(14)] = inst_29798);

(statearr_29879[(8)] = inst_29786);

return statearr_29879;
})();
var statearr_29880_31437 = state_29825__$1;
(statearr_29880_31437[(2)] = null);

(statearr_29880_31437[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__27467__auto__ = null;
var cljs$core$async$state_machine__27467__auto____0 = (function (){
var statearr_29881 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29881[(0)] = cljs$core$async$state_machine__27467__auto__);

(statearr_29881[(1)] = (1));

return statearr_29881;
});
var cljs$core$async$state_machine__27467__auto____1 = (function (state_29825){
while(true){
var ret_value__27468__auto__ = (function (){try{while(true){
var result__27469__auto__ = switch__27466__auto__(state_29825);
if(cljs.core.keyword_identical_QMARK_(result__27469__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27469__auto__;
}
break;
}
}catch (e29882){var ex__27470__auto__ = e29882;
var statearr_29883_31438 = state_29825;
(statearr_29883_31438[(2)] = ex__27470__auto__);


if(cljs.core.seq((state_29825[(4)]))){
var statearr_29884_31439 = state_29825;
(statearr_29884_31439[(1)] = cljs.core.first((state_29825[(4)])));

} else {
throw ex__27470__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27468__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31440 = state_29825;
state_29825 = G__31440;
continue;
} else {
return ret_value__27468__auto__;
}
break;
}
});
cljs$core$async$state_machine__27467__auto__ = function(state_29825){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27467__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27467__auto____1.call(this,state_29825);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27467__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27467__auto____0;
cljs$core$async$state_machine__27467__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27467__auto____1;
return cljs$core$async$state_machine__27467__auto__;
})()
})();
var state__27582__auto__ = (function (){var statearr_29885 = f__27581__auto__();
(statearr_29885[(6)] = c__27580__auto___31410);

return statearr_29885;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27582__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
