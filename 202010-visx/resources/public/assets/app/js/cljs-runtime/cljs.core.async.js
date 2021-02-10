goog.provide('cljs.core.async');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__30852 = arguments.length;
switch (G__30852) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async30855 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30855 = (function (f,blockable,meta30856){
this.f = f;
this.blockable = blockable;
this.meta30856 = meta30856;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async30855.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30857,meta30856__$1){
var self__ = this;
var _30857__$1 = this;
return (new cljs.core.async.t_cljs$core$async30855(self__.f,self__.blockable,meta30856__$1));
}));

(cljs.core.async.t_cljs$core$async30855.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30857){
var self__ = this;
var _30857__$1 = this;
return self__.meta30856;
}));

(cljs.core.async.t_cljs$core$async30855.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30855.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async30855.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async30855.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async30855.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta30856","meta30856",1737564773,null)], null);
}));

(cljs.core.async.t_cljs$core$async30855.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async30855.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30855");

(cljs.core.async.t_cljs$core$async30855.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async30855");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30855.
 */
cljs.core.async.__GT_t_cljs$core$async30855 = (function cljs$core$async$__GT_t_cljs$core$async30855(f__$1,blockable__$1,meta30856){
return (new cljs.core.async.t_cljs$core$async30855(f__$1,blockable__$1,meta30856));
});

}

return (new cljs.core.async.t_cljs$core$async30855(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__30868 = arguments.length;
switch (G__30868) {
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
var G__30876 = arguments.length;
switch (G__30876) {
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
var G__30891 = arguments.length;
switch (G__30891) {
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
var val_33441 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_33441) : fn1.call(null,val_33441));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_33441) : fn1.call(null,val_33441));
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
var G__30911 = arguments.length;
switch (G__30911) {
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
var n__4613__auto___33461 = n;
var x_33462 = (0);
while(true){
if((x_33462 < n__4613__auto___33461)){
(a[x_33462] = x_33462);

var G__33464 = (x_33462 + (1));
x_33462 = G__33464;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async30917 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30917 = (function (flag,meta30918){
this.flag = flag;
this.meta30918 = meta30918;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async30917.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30919,meta30918__$1){
var self__ = this;
var _30919__$1 = this;
return (new cljs.core.async.t_cljs$core$async30917(self__.flag,meta30918__$1));
}));

(cljs.core.async.t_cljs$core$async30917.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30919){
var self__ = this;
var _30919__$1 = this;
return self__.meta30918;
}));

(cljs.core.async.t_cljs$core$async30917.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30917.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async30917.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async30917.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async30917.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta30918","meta30918",1692157542,null)], null);
}));

(cljs.core.async.t_cljs$core$async30917.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async30917.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30917");

(cljs.core.async.t_cljs$core$async30917.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async30917");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30917.
 */
cljs.core.async.__GT_t_cljs$core$async30917 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async30917(flag__$1,meta30918){
return (new cljs.core.async.t_cljs$core$async30917(flag__$1,meta30918));
});

}

return (new cljs.core.async.t_cljs$core$async30917(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async30944 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30944 = (function (flag,cb,meta30945){
this.flag = flag;
this.cb = cb;
this.meta30945 = meta30945;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async30944.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30946,meta30945__$1){
var self__ = this;
var _30946__$1 = this;
return (new cljs.core.async.t_cljs$core$async30944(self__.flag,self__.cb,meta30945__$1));
}));

(cljs.core.async.t_cljs$core$async30944.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30946){
var self__ = this;
var _30946__$1 = this;
return self__.meta30945;
}));

(cljs.core.async.t_cljs$core$async30944.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30944.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async30944.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async30944.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async30944.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta30945","meta30945",-312720953,null)], null);
}));

(cljs.core.async.t_cljs$core$async30944.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async30944.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30944");

(cljs.core.async.t_cljs$core$async30944.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async30944");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30944.
 */
cljs.core.async.__GT_t_cljs$core$async30944 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async30944(flag__$1,cb__$1,meta30945){
return (new cljs.core.async.t_cljs$core$async30944(flag__$1,cb__$1,meta30945));
});

}

return (new cljs.core.async.t_cljs$core$async30944(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__30954_SHARP_){
var G__30956 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__30954_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__30956) : fret.call(null,G__30956));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__30955_SHARP_){
var G__30959 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__30955_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__30959) : fret.call(null,G__30959));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__4126__auto__ = wport;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return port;
}
})()], null));
} else {
var G__33486 = (i + (1));
i = G__33486;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4126__auto__ = ret;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5735__auto__ = (function (){var and__4115__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4115__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4115__auto__;
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
var args__4742__auto__ = [];
var len__4736__auto___33487 = arguments.length;
var i__4737__auto___33488 = (0);
while(true){
if((i__4737__auto___33488 < len__4736__auto___33487)){
args__4742__auto__.push((arguments[i__4737__auto___33488]));

var G__33489 = (i__4737__auto___33488 + (1));
i__4737__auto___33488 = G__33489;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__30970){
var map__30971 = p__30970;
var map__30971__$1 = (((((!((map__30971 == null))))?(((((map__30971.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30971.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30971):map__30971);
var opts = map__30971__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq30967){
var G__30968 = cljs.core.first(seq30967);
var seq30967__$1 = cljs.core.next(seq30967);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__30968,seq30967__$1);
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
var G__30985 = arguments.length;
switch (G__30985) {
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
var c__30737__auto___33505 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30738__auto__ = (function (){var switch__30604__auto__ = (function (state_31023){
var state_val_31024 = (state_31023[(1)]);
if((state_val_31024 === (7))){
var inst_31016 = (state_31023[(2)]);
var state_31023__$1 = state_31023;
var statearr_31056_33507 = state_31023__$1;
(statearr_31056_33507[(2)] = inst_31016);

(statearr_31056_33507[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31024 === (1))){
var state_31023__$1 = state_31023;
var statearr_31057_33509 = state_31023__$1;
(statearr_31057_33509[(2)] = null);

(statearr_31057_33509[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31024 === (4))){
var inst_30999 = (state_31023[(7)]);
var inst_30999__$1 = (state_31023[(2)]);
var inst_31000 = (inst_30999__$1 == null);
var state_31023__$1 = (function (){var statearr_31067 = state_31023;
(statearr_31067[(7)] = inst_30999__$1);

return statearr_31067;
})();
if(cljs.core.truth_(inst_31000)){
var statearr_31068_33510 = state_31023__$1;
(statearr_31068_33510[(1)] = (5));

} else {
var statearr_31069_33511 = state_31023__$1;
(statearr_31069_33511[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31024 === (13))){
var state_31023__$1 = state_31023;
var statearr_31070_33512 = state_31023__$1;
(statearr_31070_33512[(2)] = null);

(statearr_31070_33512[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31024 === (6))){
var inst_30999 = (state_31023[(7)]);
var state_31023__$1 = state_31023;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31023__$1,(11),to,inst_30999);
} else {
if((state_val_31024 === (3))){
var inst_31018 = (state_31023[(2)]);
var state_31023__$1 = state_31023;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31023__$1,inst_31018);
} else {
if((state_val_31024 === (12))){
var state_31023__$1 = state_31023;
var statearr_31071_33515 = state_31023__$1;
(statearr_31071_33515[(2)] = null);

(statearr_31071_33515[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31024 === (2))){
var state_31023__$1 = state_31023;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31023__$1,(4),from);
} else {
if((state_val_31024 === (11))){
var inst_31009 = (state_31023[(2)]);
var state_31023__$1 = state_31023;
if(cljs.core.truth_(inst_31009)){
var statearr_31072_33516 = state_31023__$1;
(statearr_31072_33516[(1)] = (12));

} else {
var statearr_31073_33517 = state_31023__$1;
(statearr_31073_33517[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31024 === (9))){
var state_31023__$1 = state_31023;
var statearr_31075_33518 = state_31023__$1;
(statearr_31075_33518[(2)] = null);

(statearr_31075_33518[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31024 === (5))){
var state_31023__$1 = state_31023;
if(cljs.core.truth_(close_QMARK_)){
var statearr_31076_33520 = state_31023__$1;
(statearr_31076_33520[(1)] = (8));

} else {
var statearr_31078_33522 = state_31023__$1;
(statearr_31078_33522[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31024 === (14))){
var inst_31014 = (state_31023[(2)]);
var state_31023__$1 = state_31023;
var statearr_31079_33523 = state_31023__$1;
(statearr_31079_33523[(2)] = inst_31014);

(statearr_31079_33523[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31024 === (10))){
var inst_31006 = (state_31023[(2)]);
var state_31023__$1 = state_31023;
var statearr_31081_33524 = state_31023__$1;
(statearr_31081_33524[(2)] = inst_31006);

(statearr_31081_33524[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31024 === (8))){
var inst_31003 = cljs.core.async.close_BANG_(to);
var state_31023__$1 = state_31023;
var statearr_31082_33525 = state_31023__$1;
(statearr_31082_33525[(2)] = inst_31003);

(statearr_31082_33525[(1)] = (10));


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
var cljs$core$async$state_machine__30605__auto__ = null;
var cljs$core$async$state_machine__30605__auto____0 = (function (){
var statearr_31083 = [null,null,null,null,null,null,null,null];
(statearr_31083[(0)] = cljs$core$async$state_machine__30605__auto__);

(statearr_31083[(1)] = (1));

return statearr_31083;
});
var cljs$core$async$state_machine__30605__auto____1 = (function (state_31023){
while(true){
var ret_value__30606__auto__ = (function (){try{while(true){
var result__30607__auto__ = switch__30604__auto__(state_31023);
if(cljs.core.keyword_identical_QMARK_(result__30607__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30607__auto__;
}
break;
}
}catch (e31085){var ex__30608__auto__ = e31085;
var statearr_31086_33537 = state_31023;
(statearr_31086_33537[(2)] = ex__30608__auto__);


if(cljs.core.seq((state_31023[(4)]))){
var statearr_31087_33538 = state_31023;
(statearr_31087_33538[(1)] = cljs.core.first((state_31023[(4)])));

} else {
throw ex__30608__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30606__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33539 = state_31023;
state_31023 = G__33539;
continue;
} else {
return ret_value__30606__auto__;
}
break;
}
});
cljs$core$async$state_machine__30605__auto__ = function(state_31023){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30605__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30605__auto____1.call(this,state_31023);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30605__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30605__auto____0;
cljs$core$async$state_machine__30605__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30605__auto____1;
return cljs$core$async$state_machine__30605__auto__;
})()
})();
var state__30739__auto__ = (function (){var statearr_31088 = f__30738__auto__();
(statearr_31088[(6)] = c__30737__auto___33505);

return statearr_31088;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30739__auto__);
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
var process = (function (p__31092){
var vec__31093 = p__31092;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31093,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31093,(1),null);
var job = vec__31093;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__30737__auto___33546 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30738__auto__ = (function (){var switch__30604__auto__ = (function (state_31100){
var state_val_31101 = (state_31100[(1)]);
if((state_val_31101 === (1))){
var state_31100__$1 = state_31100;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31100__$1,(2),res,v);
} else {
if((state_val_31101 === (2))){
var inst_31097 = (state_31100[(2)]);
var inst_31098 = cljs.core.async.close_BANG_(res);
var state_31100__$1 = (function (){var statearr_31102 = state_31100;
(statearr_31102[(7)] = inst_31097);

return statearr_31102;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_31100__$1,inst_31098);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30605__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30605__auto____0 = (function (){
var statearr_31103 = [null,null,null,null,null,null,null,null];
(statearr_31103[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30605__auto__);

(statearr_31103[(1)] = (1));

return statearr_31103;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30605__auto____1 = (function (state_31100){
while(true){
var ret_value__30606__auto__ = (function (){try{while(true){
var result__30607__auto__ = switch__30604__auto__(state_31100);
if(cljs.core.keyword_identical_QMARK_(result__30607__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30607__auto__;
}
break;
}
}catch (e31104){var ex__30608__auto__ = e31104;
var statearr_31105_33547 = state_31100;
(statearr_31105_33547[(2)] = ex__30608__auto__);


if(cljs.core.seq((state_31100[(4)]))){
var statearr_31107_33548 = state_31100;
(statearr_31107_33548[(1)] = cljs.core.first((state_31100[(4)])));

} else {
throw ex__30608__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30606__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33550 = state_31100;
state_31100 = G__33550;
continue;
} else {
return ret_value__30606__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30605__auto__ = function(state_31100){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30605__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30605__auto____1.call(this,state_31100);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30605__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30605__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30605__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30605__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30605__auto__;
})()
})();
var state__30739__auto__ = (function (){var statearr_31108 = f__30738__auto__();
(statearr_31108[(6)] = c__30737__auto___33546);

return statearr_31108;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30739__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__31109){
var vec__31110 = p__31109;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31110,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31110,(1),null);
var job = vec__31110;
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
var n__4613__auto___33552 = n;
var __33553 = (0);
while(true){
if((__33553 < n__4613__auto___33552)){
var G__31113_33554 = type;
var G__31113_33555__$1 = (((G__31113_33554 instanceof cljs.core.Keyword))?G__31113_33554.fqn:null);
switch (G__31113_33555__$1) {
case "compute":
var c__30737__auto___33557 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__33553,c__30737__auto___33557,G__31113_33554,G__31113_33555__$1,n__4613__auto___33552,jobs,results,process,async){
return (function (){
var f__30738__auto__ = (function (){var switch__30604__auto__ = ((function (__33553,c__30737__auto___33557,G__31113_33554,G__31113_33555__$1,n__4613__auto___33552,jobs,results,process,async){
return (function (state_31126){
var state_val_31127 = (state_31126[(1)]);
if((state_val_31127 === (1))){
var state_31126__$1 = state_31126;
var statearr_31128_33559 = state_31126__$1;
(statearr_31128_33559[(2)] = null);

(statearr_31128_33559[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31127 === (2))){
var state_31126__$1 = state_31126;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31126__$1,(4),jobs);
} else {
if((state_val_31127 === (3))){
var inst_31124 = (state_31126[(2)]);
var state_31126__$1 = state_31126;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31126__$1,inst_31124);
} else {
if((state_val_31127 === (4))){
var inst_31116 = (state_31126[(2)]);
var inst_31117 = process(inst_31116);
var state_31126__$1 = state_31126;
if(cljs.core.truth_(inst_31117)){
var statearr_31131_33560 = state_31126__$1;
(statearr_31131_33560[(1)] = (5));

} else {
var statearr_31132_33561 = state_31126__$1;
(statearr_31132_33561[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31127 === (5))){
var state_31126__$1 = state_31126;
var statearr_31133_33562 = state_31126__$1;
(statearr_31133_33562[(2)] = null);

(statearr_31133_33562[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31127 === (6))){
var state_31126__$1 = state_31126;
var statearr_31134_33563 = state_31126__$1;
(statearr_31134_33563[(2)] = null);

(statearr_31134_33563[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31127 === (7))){
var inst_31122 = (state_31126[(2)]);
var state_31126__$1 = state_31126;
var statearr_31135_33564 = state_31126__$1;
(statearr_31135_33564[(2)] = inst_31122);

(statearr_31135_33564[(1)] = (3));


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
});})(__33553,c__30737__auto___33557,G__31113_33554,G__31113_33555__$1,n__4613__auto___33552,jobs,results,process,async))
;
return ((function (__33553,switch__30604__auto__,c__30737__auto___33557,G__31113_33554,G__31113_33555__$1,n__4613__auto___33552,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30605__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30605__auto____0 = (function (){
var statearr_31139 = [null,null,null,null,null,null,null];
(statearr_31139[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30605__auto__);

(statearr_31139[(1)] = (1));

return statearr_31139;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30605__auto____1 = (function (state_31126){
while(true){
var ret_value__30606__auto__ = (function (){try{while(true){
var result__30607__auto__ = switch__30604__auto__(state_31126);
if(cljs.core.keyword_identical_QMARK_(result__30607__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30607__auto__;
}
break;
}
}catch (e31140){var ex__30608__auto__ = e31140;
var statearr_31148_33569 = state_31126;
(statearr_31148_33569[(2)] = ex__30608__auto__);


if(cljs.core.seq((state_31126[(4)]))){
var statearr_31149_33570 = state_31126;
(statearr_31149_33570[(1)] = cljs.core.first((state_31126[(4)])));

} else {
throw ex__30608__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30606__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33571 = state_31126;
state_31126 = G__33571;
continue;
} else {
return ret_value__30606__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30605__auto__ = function(state_31126){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30605__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30605__auto____1.call(this,state_31126);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30605__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30605__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30605__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30605__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30605__auto__;
})()
;})(__33553,switch__30604__auto__,c__30737__auto___33557,G__31113_33554,G__31113_33555__$1,n__4613__auto___33552,jobs,results,process,async))
})();
var state__30739__auto__ = (function (){var statearr_31152 = f__30738__auto__();
(statearr_31152[(6)] = c__30737__auto___33557);

return statearr_31152;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30739__auto__);
});})(__33553,c__30737__auto___33557,G__31113_33554,G__31113_33555__$1,n__4613__auto___33552,jobs,results,process,async))
);


break;
case "async":
var c__30737__auto___33572 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__33553,c__30737__auto___33572,G__31113_33554,G__31113_33555__$1,n__4613__auto___33552,jobs,results,process,async){
return (function (){
var f__30738__auto__ = (function (){var switch__30604__auto__ = ((function (__33553,c__30737__auto___33572,G__31113_33554,G__31113_33555__$1,n__4613__auto___33552,jobs,results,process,async){
return (function (state_31170){
var state_val_31171 = (state_31170[(1)]);
if((state_val_31171 === (1))){
var state_31170__$1 = state_31170;
var statearr_31172_33573 = state_31170__$1;
(statearr_31172_33573[(2)] = null);

(statearr_31172_33573[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31171 === (2))){
var state_31170__$1 = state_31170;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31170__$1,(4),jobs);
} else {
if((state_val_31171 === (3))){
var inst_31168 = (state_31170[(2)]);
var state_31170__$1 = state_31170;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31170__$1,inst_31168);
} else {
if((state_val_31171 === (4))){
var inst_31159 = (state_31170[(2)]);
var inst_31160 = async(inst_31159);
var state_31170__$1 = state_31170;
if(cljs.core.truth_(inst_31160)){
var statearr_31178_33574 = state_31170__$1;
(statearr_31178_33574[(1)] = (5));

} else {
var statearr_31179_33575 = state_31170__$1;
(statearr_31179_33575[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31171 === (5))){
var state_31170__$1 = state_31170;
var statearr_31184_33576 = state_31170__$1;
(statearr_31184_33576[(2)] = null);

(statearr_31184_33576[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31171 === (6))){
var state_31170__$1 = state_31170;
var statearr_31188_33577 = state_31170__$1;
(statearr_31188_33577[(2)] = null);

(statearr_31188_33577[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31171 === (7))){
var inst_31166 = (state_31170[(2)]);
var state_31170__$1 = state_31170;
var statearr_31190_33578 = state_31170__$1;
(statearr_31190_33578[(2)] = inst_31166);

(statearr_31190_33578[(1)] = (3));


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
});})(__33553,c__30737__auto___33572,G__31113_33554,G__31113_33555__$1,n__4613__auto___33552,jobs,results,process,async))
;
return ((function (__33553,switch__30604__auto__,c__30737__auto___33572,G__31113_33554,G__31113_33555__$1,n__4613__auto___33552,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30605__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30605__auto____0 = (function (){
var statearr_31196 = [null,null,null,null,null,null,null];
(statearr_31196[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30605__auto__);

(statearr_31196[(1)] = (1));

return statearr_31196;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30605__auto____1 = (function (state_31170){
while(true){
var ret_value__30606__auto__ = (function (){try{while(true){
var result__30607__auto__ = switch__30604__auto__(state_31170);
if(cljs.core.keyword_identical_QMARK_(result__30607__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30607__auto__;
}
break;
}
}catch (e31201){var ex__30608__auto__ = e31201;
var statearr_31202_33579 = state_31170;
(statearr_31202_33579[(2)] = ex__30608__auto__);


if(cljs.core.seq((state_31170[(4)]))){
var statearr_31203_33580 = state_31170;
(statearr_31203_33580[(1)] = cljs.core.first((state_31170[(4)])));

} else {
throw ex__30608__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30606__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33582 = state_31170;
state_31170 = G__33582;
continue;
} else {
return ret_value__30606__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30605__auto__ = function(state_31170){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30605__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30605__auto____1.call(this,state_31170);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30605__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30605__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30605__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30605__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30605__auto__;
})()
;})(__33553,switch__30604__auto__,c__30737__auto___33572,G__31113_33554,G__31113_33555__$1,n__4613__auto___33552,jobs,results,process,async))
})();
var state__30739__auto__ = (function (){var statearr_31208 = f__30738__auto__();
(statearr_31208[(6)] = c__30737__auto___33572);

return statearr_31208;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30739__auto__);
});})(__33553,c__30737__auto___33572,G__31113_33554,G__31113_33555__$1,n__4613__auto___33552,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__31113_33555__$1)].join('')));

}

var G__33584 = (__33553 + (1));
__33553 = G__33584;
continue;
} else {
}
break;
}

var c__30737__auto___33585 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30738__auto__ = (function (){var switch__30604__auto__ = (function (state_31240){
var state_val_31241 = (state_31240[(1)]);
if((state_val_31241 === (7))){
var inst_31234 = (state_31240[(2)]);
var state_31240__$1 = state_31240;
var statearr_31252_33587 = state_31240__$1;
(statearr_31252_33587[(2)] = inst_31234);

(statearr_31252_33587[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31241 === (1))){
var state_31240__$1 = state_31240;
var statearr_31254_33590 = state_31240__$1;
(statearr_31254_33590[(2)] = null);

(statearr_31254_33590[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31241 === (4))){
var inst_31214 = (state_31240[(7)]);
var inst_31214__$1 = (state_31240[(2)]);
var inst_31216 = (inst_31214__$1 == null);
var state_31240__$1 = (function (){var statearr_31257 = state_31240;
(statearr_31257[(7)] = inst_31214__$1);

return statearr_31257;
})();
if(cljs.core.truth_(inst_31216)){
var statearr_31261_33591 = state_31240__$1;
(statearr_31261_33591[(1)] = (5));

} else {
var statearr_31262_33592 = state_31240__$1;
(statearr_31262_33592[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31241 === (6))){
var inst_31214 = (state_31240[(7)]);
var inst_31222 = (state_31240[(8)]);
var inst_31222__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_31223 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_31226 = [inst_31214,inst_31222__$1];
var inst_31227 = (new cljs.core.PersistentVector(null,2,(5),inst_31223,inst_31226,null));
var state_31240__$1 = (function (){var statearr_31263 = state_31240;
(statearr_31263[(8)] = inst_31222__$1);

return statearr_31263;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31240__$1,(8),jobs,inst_31227);
} else {
if((state_val_31241 === (3))){
var inst_31236 = (state_31240[(2)]);
var state_31240__$1 = state_31240;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31240__$1,inst_31236);
} else {
if((state_val_31241 === (2))){
var state_31240__$1 = state_31240;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31240__$1,(4),from);
} else {
if((state_val_31241 === (9))){
var inst_31231 = (state_31240[(2)]);
var state_31240__$1 = (function (){var statearr_31265 = state_31240;
(statearr_31265[(9)] = inst_31231);

return statearr_31265;
})();
var statearr_31266_33597 = state_31240__$1;
(statearr_31266_33597[(2)] = null);

(statearr_31266_33597[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31241 === (5))){
var inst_31218 = cljs.core.async.close_BANG_(jobs);
var state_31240__$1 = state_31240;
var statearr_31267_33602 = state_31240__$1;
(statearr_31267_33602[(2)] = inst_31218);

(statearr_31267_33602[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31241 === (8))){
var inst_31222 = (state_31240[(8)]);
var inst_31229 = (state_31240[(2)]);
var state_31240__$1 = (function (){var statearr_31268 = state_31240;
(statearr_31268[(10)] = inst_31229);

return statearr_31268;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31240__$1,(9),results,inst_31222);
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
var cljs$core$async$pipeline_STAR__$_state_machine__30605__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30605__auto____0 = (function (){
var statearr_31270 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_31270[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30605__auto__);

(statearr_31270[(1)] = (1));

return statearr_31270;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30605__auto____1 = (function (state_31240){
while(true){
var ret_value__30606__auto__ = (function (){try{while(true){
var result__30607__auto__ = switch__30604__auto__(state_31240);
if(cljs.core.keyword_identical_QMARK_(result__30607__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30607__auto__;
}
break;
}
}catch (e31272){var ex__30608__auto__ = e31272;
var statearr_31273_33609 = state_31240;
(statearr_31273_33609[(2)] = ex__30608__auto__);


if(cljs.core.seq((state_31240[(4)]))){
var statearr_31275_33613 = state_31240;
(statearr_31275_33613[(1)] = cljs.core.first((state_31240[(4)])));

} else {
throw ex__30608__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30606__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33614 = state_31240;
state_31240 = G__33614;
continue;
} else {
return ret_value__30606__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30605__auto__ = function(state_31240){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30605__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30605__auto____1.call(this,state_31240);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30605__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30605__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30605__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30605__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30605__auto__;
})()
})();
var state__30739__auto__ = (function (){var statearr_31287 = f__30738__auto__();
(statearr_31287[(6)] = c__30737__auto___33585);

return statearr_31287;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30739__auto__);
}));


var c__30737__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30738__auto__ = (function (){var switch__30604__auto__ = (function (state_31333){
var state_val_31334 = (state_31333[(1)]);
if((state_val_31334 === (7))){
var inst_31328 = (state_31333[(2)]);
var state_31333__$1 = state_31333;
var statearr_31335_33618 = state_31333__$1;
(statearr_31335_33618[(2)] = inst_31328);

(statearr_31335_33618[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31334 === (20))){
var state_31333__$1 = state_31333;
var statearr_31339_33619 = state_31333__$1;
(statearr_31339_33619[(2)] = null);

(statearr_31339_33619[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31334 === (1))){
var state_31333__$1 = state_31333;
var statearr_31340_33620 = state_31333__$1;
(statearr_31340_33620[(2)] = null);

(statearr_31340_33620[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31334 === (4))){
var inst_31292 = (state_31333[(7)]);
var inst_31292__$1 = (state_31333[(2)]);
var inst_31293 = (inst_31292__$1 == null);
var state_31333__$1 = (function (){var statearr_31345 = state_31333;
(statearr_31345[(7)] = inst_31292__$1);

return statearr_31345;
})();
if(cljs.core.truth_(inst_31293)){
var statearr_31346_33624 = state_31333__$1;
(statearr_31346_33624[(1)] = (5));

} else {
var statearr_31347_33625 = state_31333__$1;
(statearr_31347_33625[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31334 === (15))){
var inst_31305 = (state_31333[(8)]);
var state_31333__$1 = state_31333;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31333__$1,(18),to,inst_31305);
} else {
if((state_val_31334 === (21))){
var inst_31323 = (state_31333[(2)]);
var state_31333__$1 = state_31333;
var statearr_31350_33626 = state_31333__$1;
(statearr_31350_33626[(2)] = inst_31323);

(statearr_31350_33626[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31334 === (13))){
var inst_31325 = (state_31333[(2)]);
var state_31333__$1 = (function (){var statearr_31353 = state_31333;
(statearr_31353[(9)] = inst_31325);

return statearr_31353;
})();
var statearr_31356_33631 = state_31333__$1;
(statearr_31356_33631[(2)] = null);

(statearr_31356_33631[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31334 === (6))){
var inst_31292 = (state_31333[(7)]);
var state_31333__$1 = state_31333;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31333__$1,(11),inst_31292);
} else {
if((state_val_31334 === (17))){
var inst_31317 = (state_31333[(2)]);
var state_31333__$1 = state_31333;
if(cljs.core.truth_(inst_31317)){
var statearr_31359_33635 = state_31333__$1;
(statearr_31359_33635[(1)] = (19));

} else {
var statearr_31361_33636 = state_31333__$1;
(statearr_31361_33636[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31334 === (3))){
var inst_31330 = (state_31333[(2)]);
var state_31333__$1 = state_31333;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31333__$1,inst_31330);
} else {
if((state_val_31334 === (12))){
var inst_31302 = (state_31333[(10)]);
var state_31333__$1 = state_31333;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31333__$1,(14),inst_31302);
} else {
if((state_val_31334 === (2))){
var state_31333__$1 = state_31333;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31333__$1,(4),results);
} else {
if((state_val_31334 === (19))){
var state_31333__$1 = state_31333;
var statearr_31369_33637 = state_31333__$1;
(statearr_31369_33637[(2)] = null);

(statearr_31369_33637[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31334 === (11))){
var inst_31302 = (state_31333[(2)]);
var state_31333__$1 = (function (){var statearr_31370 = state_31333;
(statearr_31370[(10)] = inst_31302);

return statearr_31370;
})();
var statearr_31371_33641 = state_31333__$1;
(statearr_31371_33641[(2)] = null);

(statearr_31371_33641[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31334 === (9))){
var state_31333__$1 = state_31333;
var statearr_31372_33642 = state_31333__$1;
(statearr_31372_33642[(2)] = null);

(statearr_31372_33642[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31334 === (5))){
var state_31333__$1 = state_31333;
if(cljs.core.truth_(close_QMARK_)){
var statearr_31373_33643 = state_31333__$1;
(statearr_31373_33643[(1)] = (8));

} else {
var statearr_31378_33644 = state_31333__$1;
(statearr_31378_33644[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31334 === (14))){
var inst_31305 = (state_31333[(8)]);
var inst_31305__$1 = (state_31333[(2)]);
var inst_31306 = (inst_31305__$1 == null);
var inst_31307 = cljs.core.not(inst_31306);
var state_31333__$1 = (function (){var statearr_31379 = state_31333;
(statearr_31379[(8)] = inst_31305__$1);

return statearr_31379;
})();
if(inst_31307){
var statearr_31380_33645 = state_31333__$1;
(statearr_31380_33645[(1)] = (15));

} else {
var statearr_31388_33649 = state_31333__$1;
(statearr_31388_33649[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31334 === (16))){
var state_31333__$1 = state_31333;
var statearr_31389_33650 = state_31333__$1;
(statearr_31389_33650[(2)] = false);

(statearr_31389_33650[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31334 === (10))){
var inst_31299 = (state_31333[(2)]);
var state_31333__$1 = state_31333;
var statearr_31396_33651 = state_31333__$1;
(statearr_31396_33651[(2)] = inst_31299);

(statearr_31396_33651[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31334 === (18))){
var inst_31311 = (state_31333[(2)]);
var state_31333__$1 = state_31333;
var statearr_31399_33652 = state_31333__$1;
(statearr_31399_33652[(2)] = inst_31311);

(statearr_31399_33652[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31334 === (8))){
var inst_31296 = cljs.core.async.close_BANG_(to);
var state_31333__$1 = state_31333;
var statearr_31402_33653 = state_31333__$1;
(statearr_31402_33653[(2)] = inst_31296);

(statearr_31402_33653[(1)] = (10));


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
var cljs$core$async$pipeline_STAR__$_state_machine__30605__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30605__auto____0 = (function (){
var statearr_31404 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_31404[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30605__auto__);

(statearr_31404[(1)] = (1));

return statearr_31404;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30605__auto____1 = (function (state_31333){
while(true){
var ret_value__30606__auto__ = (function (){try{while(true){
var result__30607__auto__ = switch__30604__auto__(state_31333);
if(cljs.core.keyword_identical_QMARK_(result__30607__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30607__auto__;
}
break;
}
}catch (e31417){var ex__30608__auto__ = e31417;
var statearr_31418_33657 = state_31333;
(statearr_31418_33657[(2)] = ex__30608__auto__);


if(cljs.core.seq((state_31333[(4)]))){
var statearr_31419_33658 = state_31333;
(statearr_31419_33658[(1)] = cljs.core.first((state_31333[(4)])));

} else {
throw ex__30608__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30606__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33659 = state_31333;
state_31333 = G__33659;
continue;
} else {
return ret_value__30606__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30605__auto__ = function(state_31333){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30605__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30605__auto____1.call(this,state_31333);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30605__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30605__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30605__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30605__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30605__auto__;
})()
})();
var state__30739__auto__ = (function (){var statearr_31420 = f__30738__auto__();
(statearr_31420[(6)] = c__30737__auto__);

return statearr_31420;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30739__auto__);
}));

return c__30737__auto__;
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
var G__31425 = arguments.length;
switch (G__31425) {
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
var G__31432 = arguments.length;
switch (G__31432) {
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
var G__31440 = arguments.length;
switch (G__31440) {
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
var c__30737__auto___33664 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30738__auto__ = (function (){var switch__30604__auto__ = (function (state_31471){
var state_val_31472 = (state_31471[(1)]);
if((state_val_31472 === (7))){
var inst_31467 = (state_31471[(2)]);
var state_31471__$1 = state_31471;
var statearr_31475_33665 = state_31471__$1;
(statearr_31475_33665[(2)] = inst_31467);

(statearr_31475_33665[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31472 === (1))){
var state_31471__$1 = state_31471;
var statearr_31476_33666 = state_31471__$1;
(statearr_31476_33666[(2)] = null);

(statearr_31476_33666[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31472 === (4))){
var inst_31448 = (state_31471[(7)]);
var inst_31448__$1 = (state_31471[(2)]);
var inst_31449 = (inst_31448__$1 == null);
var state_31471__$1 = (function (){var statearr_31481 = state_31471;
(statearr_31481[(7)] = inst_31448__$1);

return statearr_31481;
})();
if(cljs.core.truth_(inst_31449)){
var statearr_31482_33667 = state_31471__$1;
(statearr_31482_33667[(1)] = (5));

} else {
var statearr_31489_33668 = state_31471__$1;
(statearr_31489_33668[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31472 === (13))){
var state_31471__$1 = state_31471;
var statearr_31490_33669 = state_31471__$1;
(statearr_31490_33669[(2)] = null);

(statearr_31490_33669[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31472 === (6))){
var inst_31448 = (state_31471[(7)]);
var inst_31454 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_31448) : p.call(null,inst_31448));
var state_31471__$1 = state_31471;
if(cljs.core.truth_(inst_31454)){
var statearr_31491_33670 = state_31471__$1;
(statearr_31491_33670[(1)] = (9));

} else {
var statearr_31492_33671 = state_31471__$1;
(statearr_31492_33671[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31472 === (3))){
var inst_31469 = (state_31471[(2)]);
var state_31471__$1 = state_31471;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31471__$1,inst_31469);
} else {
if((state_val_31472 === (12))){
var state_31471__$1 = state_31471;
var statearr_31493_33672 = state_31471__$1;
(statearr_31493_33672[(2)] = null);

(statearr_31493_33672[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31472 === (2))){
var state_31471__$1 = state_31471;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31471__$1,(4),ch);
} else {
if((state_val_31472 === (11))){
var inst_31448 = (state_31471[(7)]);
var inst_31458 = (state_31471[(2)]);
var state_31471__$1 = state_31471;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31471__$1,(8),inst_31458,inst_31448);
} else {
if((state_val_31472 === (9))){
var state_31471__$1 = state_31471;
var statearr_31494_33673 = state_31471__$1;
(statearr_31494_33673[(2)] = tc);

(statearr_31494_33673[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31472 === (5))){
var inst_31451 = cljs.core.async.close_BANG_(tc);
var inst_31452 = cljs.core.async.close_BANG_(fc);
var state_31471__$1 = (function (){var statearr_31495 = state_31471;
(statearr_31495[(8)] = inst_31451);

return statearr_31495;
})();
var statearr_31498_33674 = state_31471__$1;
(statearr_31498_33674[(2)] = inst_31452);

(statearr_31498_33674[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31472 === (14))){
var inst_31465 = (state_31471[(2)]);
var state_31471__$1 = state_31471;
var statearr_31499_33675 = state_31471__$1;
(statearr_31499_33675[(2)] = inst_31465);

(statearr_31499_33675[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31472 === (10))){
var state_31471__$1 = state_31471;
var statearr_31506_33676 = state_31471__$1;
(statearr_31506_33676[(2)] = fc);

(statearr_31506_33676[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31472 === (8))){
var inst_31460 = (state_31471[(2)]);
var state_31471__$1 = state_31471;
if(cljs.core.truth_(inst_31460)){
var statearr_31508_33677 = state_31471__$1;
(statearr_31508_33677[(1)] = (12));

} else {
var statearr_31509_33678 = state_31471__$1;
(statearr_31509_33678[(1)] = (13));

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
var cljs$core$async$state_machine__30605__auto__ = null;
var cljs$core$async$state_machine__30605__auto____0 = (function (){
var statearr_31510 = [null,null,null,null,null,null,null,null,null];
(statearr_31510[(0)] = cljs$core$async$state_machine__30605__auto__);

(statearr_31510[(1)] = (1));

return statearr_31510;
});
var cljs$core$async$state_machine__30605__auto____1 = (function (state_31471){
while(true){
var ret_value__30606__auto__ = (function (){try{while(true){
var result__30607__auto__ = switch__30604__auto__(state_31471);
if(cljs.core.keyword_identical_QMARK_(result__30607__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30607__auto__;
}
break;
}
}catch (e31511){var ex__30608__auto__ = e31511;
var statearr_31513_33679 = state_31471;
(statearr_31513_33679[(2)] = ex__30608__auto__);


if(cljs.core.seq((state_31471[(4)]))){
var statearr_31516_33680 = state_31471;
(statearr_31516_33680[(1)] = cljs.core.first((state_31471[(4)])));

} else {
throw ex__30608__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30606__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33681 = state_31471;
state_31471 = G__33681;
continue;
} else {
return ret_value__30606__auto__;
}
break;
}
});
cljs$core$async$state_machine__30605__auto__ = function(state_31471){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30605__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30605__auto____1.call(this,state_31471);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30605__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30605__auto____0;
cljs$core$async$state_machine__30605__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30605__auto____1;
return cljs$core$async$state_machine__30605__auto__;
})()
})();
var state__30739__auto__ = (function (){var statearr_31519 = f__30738__auto__();
(statearr_31519[(6)] = c__30737__auto___33664);

return statearr_31519;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30739__auto__);
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
var c__30737__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30738__auto__ = (function (){var switch__30604__auto__ = (function (state_31545){
var state_val_31546 = (state_31545[(1)]);
if((state_val_31546 === (7))){
var inst_31541 = (state_31545[(2)]);
var state_31545__$1 = state_31545;
var statearr_31553_33682 = state_31545__$1;
(statearr_31553_33682[(2)] = inst_31541);

(statearr_31553_33682[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31546 === (1))){
var inst_31523 = init;
var inst_31524 = inst_31523;
var state_31545__$1 = (function (){var statearr_31554 = state_31545;
(statearr_31554[(7)] = inst_31524);

return statearr_31554;
})();
var statearr_31555_33684 = state_31545__$1;
(statearr_31555_33684[(2)] = null);

(statearr_31555_33684[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31546 === (4))){
var inst_31527 = (state_31545[(8)]);
var inst_31527__$1 = (state_31545[(2)]);
var inst_31528 = (inst_31527__$1 == null);
var state_31545__$1 = (function (){var statearr_31557 = state_31545;
(statearr_31557[(8)] = inst_31527__$1);

return statearr_31557;
})();
if(cljs.core.truth_(inst_31528)){
var statearr_31558_33687 = state_31545__$1;
(statearr_31558_33687[(1)] = (5));

} else {
var statearr_31561_33688 = state_31545__$1;
(statearr_31561_33688[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31546 === (6))){
var inst_31524 = (state_31545[(7)]);
var inst_31527 = (state_31545[(8)]);
var inst_31531 = (state_31545[(9)]);
var inst_31531__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_31524,inst_31527) : f.call(null,inst_31524,inst_31527));
var inst_31533 = cljs.core.reduced_QMARK_(inst_31531__$1);
var state_31545__$1 = (function (){var statearr_31562 = state_31545;
(statearr_31562[(9)] = inst_31531__$1);

return statearr_31562;
})();
if(inst_31533){
var statearr_31563_33689 = state_31545__$1;
(statearr_31563_33689[(1)] = (8));

} else {
var statearr_31564_33690 = state_31545__$1;
(statearr_31564_33690[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31546 === (3))){
var inst_31543 = (state_31545[(2)]);
var state_31545__$1 = state_31545;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31545__$1,inst_31543);
} else {
if((state_val_31546 === (2))){
var state_31545__$1 = state_31545;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31545__$1,(4),ch);
} else {
if((state_val_31546 === (9))){
var inst_31531 = (state_31545[(9)]);
var inst_31524 = inst_31531;
var state_31545__$1 = (function (){var statearr_31571 = state_31545;
(statearr_31571[(7)] = inst_31524);

return statearr_31571;
})();
var statearr_31572_33694 = state_31545__$1;
(statearr_31572_33694[(2)] = null);

(statearr_31572_33694[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31546 === (5))){
var inst_31524 = (state_31545[(7)]);
var state_31545__$1 = state_31545;
var statearr_31573_33696 = state_31545__$1;
(statearr_31573_33696[(2)] = inst_31524);

(statearr_31573_33696[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31546 === (10))){
var inst_31539 = (state_31545[(2)]);
var state_31545__$1 = state_31545;
var statearr_31574_33697 = state_31545__$1;
(statearr_31574_33697[(2)] = inst_31539);

(statearr_31574_33697[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31546 === (8))){
var inst_31531 = (state_31545[(9)]);
var inst_31535 = cljs.core.deref(inst_31531);
var state_31545__$1 = state_31545;
var statearr_31578_33698 = state_31545__$1;
(statearr_31578_33698[(2)] = inst_31535);

(statearr_31578_33698[(1)] = (10));


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
var cljs$core$async$reduce_$_state_machine__30605__auto__ = null;
var cljs$core$async$reduce_$_state_machine__30605__auto____0 = (function (){
var statearr_31579 = [null,null,null,null,null,null,null,null,null,null];
(statearr_31579[(0)] = cljs$core$async$reduce_$_state_machine__30605__auto__);

(statearr_31579[(1)] = (1));

return statearr_31579;
});
var cljs$core$async$reduce_$_state_machine__30605__auto____1 = (function (state_31545){
while(true){
var ret_value__30606__auto__ = (function (){try{while(true){
var result__30607__auto__ = switch__30604__auto__(state_31545);
if(cljs.core.keyword_identical_QMARK_(result__30607__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30607__auto__;
}
break;
}
}catch (e31580){var ex__30608__auto__ = e31580;
var statearr_31581_33700 = state_31545;
(statearr_31581_33700[(2)] = ex__30608__auto__);


if(cljs.core.seq((state_31545[(4)]))){
var statearr_31582_33702 = state_31545;
(statearr_31582_33702[(1)] = cljs.core.first((state_31545[(4)])));

} else {
throw ex__30608__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30606__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33703 = state_31545;
state_31545 = G__33703;
continue;
} else {
return ret_value__30606__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__30605__auto__ = function(state_31545){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__30605__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__30605__auto____1.call(this,state_31545);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__30605__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__30605__auto____0;
cljs$core$async$reduce_$_state_machine__30605__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__30605__auto____1;
return cljs$core$async$reduce_$_state_machine__30605__auto__;
})()
})();
var state__30739__auto__ = (function (){var statearr_31585 = f__30738__auto__();
(statearr_31585[(6)] = c__30737__auto__);

return statearr_31585;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30739__auto__);
}));

return c__30737__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__30737__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30738__auto__ = (function (){var switch__30604__auto__ = (function (state_31596){
var state_val_31597 = (state_31596[(1)]);
if((state_val_31597 === (1))){
var inst_31591 = cljs.core.async.reduce(f__$1,init,ch);
var state_31596__$1 = state_31596;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31596__$1,(2),inst_31591);
} else {
if((state_val_31597 === (2))){
var inst_31593 = (state_31596[(2)]);
var inst_31594 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_31593) : f__$1.call(null,inst_31593));
var state_31596__$1 = state_31596;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31596__$1,inst_31594);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__30605__auto__ = null;
var cljs$core$async$transduce_$_state_machine__30605__auto____0 = (function (){
var statearr_31600 = [null,null,null,null,null,null,null];
(statearr_31600[(0)] = cljs$core$async$transduce_$_state_machine__30605__auto__);

(statearr_31600[(1)] = (1));

return statearr_31600;
});
var cljs$core$async$transduce_$_state_machine__30605__auto____1 = (function (state_31596){
while(true){
var ret_value__30606__auto__ = (function (){try{while(true){
var result__30607__auto__ = switch__30604__auto__(state_31596);
if(cljs.core.keyword_identical_QMARK_(result__30607__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30607__auto__;
}
break;
}
}catch (e31601){var ex__30608__auto__ = e31601;
var statearr_31602_33705 = state_31596;
(statearr_31602_33705[(2)] = ex__30608__auto__);


if(cljs.core.seq((state_31596[(4)]))){
var statearr_31603_33706 = state_31596;
(statearr_31603_33706[(1)] = cljs.core.first((state_31596[(4)])));

} else {
throw ex__30608__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30606__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33707 = state_31596;
state_31596 = G__33707;
continue;
} else {
return ret_value__30606__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__30605__auto__ = function(state_31596){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__30605__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__30605__auto____1.call(this,state_31596);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__30605__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__30605__auto____0;
cljs$core$async$transduce_$_state_machine__30605__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__30605__auto____1;
return cljs$core$async$transduce_$_state_machine__30605__auto__;
})()
})();
var state__30739__auto__ = (function (){var statearr_31611 = f__30738__auto__();
(statearr_31611[(6)] = c__30737__auto__);

return statearr_31611;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30739__auto__);
}));

return c__30737__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__31615 = arguments.length;
switch (G__31615) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__30737__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30738__auto__ = (function (){var switch__30604__auto__ = (function (state_31643){
var state_val_31644 = (state_31643[(1)]);
if((state_val_31644 === (7))){
var inst_31625 = (state_31643[(2)]);
var state_31643__$1 = state_31643;
var statearr_31646_33717 = state_31643__$1;
(statearr_31646_33717[(2)] = inst_31625);

(statearr_31646_33717[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31644 === (1))){
var inst_31619 = cljs.core.seq(coll);
var inst_31620 = inst_31619;
var state_31643__$1 = (function (){var statearr_31647 = state_31643;
(statearr_31647[(7)] = inst_31620);

return statearr_31647;
})();
var statearr_31650_33721 = state_31643__$1;
(statearr_31650_33721[(2)] = null);

(statearr_31650_33721[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31644 === (4))){
var inst_31620 = (state_31643[(7)]);
var inst_31623 = cljs.core.first(inst_31620);
var state_31643__$1 = state_31643;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31643__$1,(7),ch,inst_31623);
} else {
if((state_val_31644 === (13))){
var inst_31637 = (state_31643[(2)]);
var state_31643__$1 = state_31643;
var statearr_31659_33732 = state_31643__$1;
(statearr_31659_33732[(2)] = inst_31637);

(statearr_31659_33732[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31644 === (6))){
var inst_31628 = (state_31643[(2)]);
var state_31643__$1 = state_31643;
if(cljs.core.truth_(inst_31628)){
var statearr_31660_33733 = state_31643__$1;
(statearr_31660_33733[(1)] = (8));

} else {
var statearr_31665_33734 = state_31643__$1;
(statearr_31665_33734[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31644 === (3))){
var inst_31641 = (state_31643[(2)]);
var state_31643__$1 = state_31643;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31643__$1,inst_31641);
} else {
if((state_val_31644 === (12))){
var state_31643__$1 = state_31643;
var statearr_31666_33735 = state_31643__$1;
(statearr_31666_33735[(2)] = null);

(statearr_31666_33735[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31644 === (2))){
var inst_31620 = (state_31643[(7)]);
var state_31643__$1 = state_31643;
if(cljs.core.truth_(inst_31620)){
var statearr_31667_33736 = state_31643__$1;
(statearr_31667_33736[(1)] = (4));

} else {
var statearr_31668_33737 = state_31643__$1;
(statearr_31668_33737[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31644 === (11))){
var inst_31634 = cljs.core.async.close_BANG_(ch);
var state_31643__$1 = state_31643;
var statearr_31669_33738 = state_31643__$1;
(statearr_31669_33738[(2)] = inst_31634);

(statearr_31669_33738[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31644 === (9))){
var state_31643__$1 = state_31643;
if(cljs.core.truth_(close_QMARK_)){
var statearr_31670_33739 = state_31643__$1;
(statearr_31670_33739[(1)] = (11));

} else {
var statearr_31671_33740 = state_31643__$1;
(statearr_31671_33740[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31644 === (5))){
var inst_31620 = (state_31643[(7)]);
var state_31643__$1 = state_31643;
var statearr_31673_33741 = state_31643__$1;
(statearr_31673_33741[(2)] = inst_31620);

(statearr_31673_33741[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31644 === (10))){
var inst_31639 = (state_31643[(2)]);
var state_31643__$1 = state_31643;
var statearr_31674_33742 = state_31643__$1;
(statearr_31674_33742[(2)] = inst_31639);

(statearr_31674_33742[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31644 === (8))){
var inst_31620 = (state_31643[(7)]);
var inst_31630 = cljs.core.next(inst_31620);
var inst_31620__$1 = inst_31630;
var state_31643__$1 = (function (){var statearr_31675 = state_31643;
(statearr_31675[(7)] = inst_31620__$1);

return statearr_31675;
})();
var statearr_31676_33749 = state_31643__$1;
(statearr_31676_33749[(2)] = null);

(statearr_31676_33749[(1)] = (2));


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
var cljs$core$async$state_machine__30605__auto__ = null;
var cljs$core$async$state_machine__30605__auto____0 = (function (){
var statearr_31677 = [null,null,null,null,null,null,null,null];
(statearr_31677[(0)] = cljs$core$async$state_machine__30605__auto__);

(statearr_31677[(1)] = (1));

return statearr_31677;
});
var cljs$core$async$state_machine__30605__auto____1 = (function (state_31643){
while(true){
var ret_value__30606__auto__ = (function (){try{while(true){
var result__30607__auto__ = switch__30604__auto__(state_31643);
if(cljs.core.keyword_identical_QMARK_(result__30607__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30607__auto__;
}
break;
}
}catch (e31678){var ex__30608__auto__ = e31678;
var statearr_31680_33750 = state_31643;
(statearr_31680_33750[(2)] = ex__30608__auto__);


if(cljs.core.seq((state_31643[(4)]))){
var statearr_31681_33751 = state_31643;
(statearr_31681_33751[(1)] = cljs.core.first((state_31643[(4)])));

} else {
throw ex__30608__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30606__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33752 = state_31643;
state_31643 = G__33752;
continue;
} else {
return ret_value__30606__auto__;
}
break;
}
});
cljs$core$async$state_machine__30605__auto__ = function(state_31643){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30605__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30605__auto____1.call(this,state_31643);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30605__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30605__auto____0;
cljs$core$async$state_machine__30605__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30605__auto____1;
return cljs$core$async$state_machine__30605__auto__;
})()
})();
var state__30739__auto__ = (function (){var statearr_31682 = f__30738__auto__();
(statearr_31682[(6)] = c__30737__auto__);

return statearr_31682;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30739__auto__);
}));

return c__30737__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__31692 = arguments.length;
switch (G__31692) {
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
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_33760 = (function (_){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4429__auto__.call(null,_));
} else {
var m__4426__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4426__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_33760(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_33762 = (function (m,ch,close_QMARK_){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4429__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4426__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4426__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_33762(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_33764 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4429__auto__.call(null,m,ch));
} else {
var m__4426__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4426__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_33764(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_33765 = (function (m){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4429__auto__.call(null,m));
} else {
var m__4426__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4426__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_33765(m);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31726 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31726 = (function (ch,cs,meta31727){
this.ch = ch;
this.cs = cs;
this.meta31727 = meta31727;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31726.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31728,meta31727__$1){
var self__ = this;
var _31728__$1 = this;
return (new cljs.core.async.t_cljs$core$async31726(self__.ch,self__.cs,meta31727__$1));
}));

(cljs.core.async.t_cljs$core$async31726.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31728){
var self__ = this;
var _31728__$1 = this;
return self__.meta31727;
}));

(cljs.core.async.t_cljs$core$async31726.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31726.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async31726.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31726.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async31726.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async31726.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async31726.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta31727","meta31727",1198028729,null)], null);
}));

(cljs.core.async.t_cljs$core$async31726.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31726.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31726");

(cljs.core.async.t_cljs$core$async31726.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async31726");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31726.
 */
cljs.core.async.__GT_t_cljs$core$async31726 = (function cljs$core$async$mult_$___GT_t_cljs$core$async31726(ch__$1,cs__$1,meta31727){
return (new cljs.core.async.t_cljs$core$async31726(ch__$1,cs__$1,meta31727));
});

}

return (new cljs.core.async.t_cljs$core$async31726(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__30737__auto___33783 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30738__auto__ = (function (){var switch__30604__auto__ = (function (state_31911){
var state_val_31912 = (state_31911[(1)]);
if((state_val_31912 === (7))){
var inst_31905 = (state_31911[(2)]);
var state_31911__$1 = state_31911;
var statearr_31914_33788 = state_31911__$1;
(statearr_31914_33788[(2)] = inst_31905);

(statearr_31914_33788[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31912 === (20))){
var inst_31783 = (state_31911[(7)]);
var inst_31803 = cljs.core.first(inst_31783);
var inst_31804 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31803,(0),null);
var inst_31805 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31803,(1),null);
var state_31911__$1 = (function (){var statearr_31915 = state_31911;
(statearr_31915[(8)] = inst_31804);

return statearr_31915;
})();
if(cljs.core.truth_(inst_31805)){
var statearr_31916_33794 = state_31911__$1;
(statearr_31916_33794[(1)] = (22));

} else {
var statearr_31917_33795 = state_31911__$1;
(statearr_31917_33795[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31912 === (27))){
var inst_31737 = (state_31911[(9)]);
var inst_31845 = (state_31911[(10)]);
var inst_31839 = (state_31911[(11)]);
var inst_31837 = (state_31911[(12)]);
var inst_31845__$1 = cljs.core._nth(inst_31837,inst_31839);
var inst_31846 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_31845__$1,inst_31737,done);
var state_31911__$1 = (function (){var statearr_31918 = state_31911;
(statearr_31918[(10)] = inst_31845__$1);

return statearr_31918;
})();
if(cljs.core.truth_(inst_31846)){
var statearr_31920_33799 = state_31911__$1;
(statearr_31920_33799[(1)] = (30));

} else {
var statearr_31921_33801 = state_31911__$1;
(statearr_31921_33801[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31912 === (1))){
var state_31911__$1 = state_31911;
var statearr_31922_33802 = state_31911__$1;
(statearr_31922_33802[(2)] = null);

(statearr_31922_33802[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31912 === (24))){
var inst_31783 = (state_31911[(7)]);
var inst_31810 = (state_31911[(2)]);
var inst_31811 = cljs.core.next(inst_31783);
var inst_31747 = inst_31811;
var inst_31748 = null;
var inst_31749 = (0);
var inst_31750 = (0);
var state_31911__$1 = (function (){var statearr_31924 = state_31911;
(statearr_31924[(13)] = inst_31810);

(statearr_31924[(14)] = inst_31749);

(statearr_31924[(15)] = inst_31748);

(statearr_31924[(16)] = inst_31750);

(statearr_31924[(17)] = inst_31747);

return statearr_31924;
})();
var statearr_31927_33804 = state_31911__$1;
(statearr_31927_33804[(2)] = null);

(statearr_31927_33804[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31912 === (39))){
var state_31911__$1 = state_31911;
var statearr_31932_33805 = state_31911__$1;
(statearr_31932_33805[(2)] = null);

(statearr_31932_33805[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31912 === (4))){
var inst_31737 = (state_31911[(9)]);
var inst_31737__$1 = (state_31911[(2)]);
var inst_31738 = (inst_31737__$1 == null);
var state_31911__$1 = (function (){var statearr_31936 = state_31911;
(statearr_31936[(9)] = inst_31737__$1);

return statearr_31936;
})();
if(cljs.core.truth_(inst_31738)){
var statearr_31937_33811 = state_31911__$1;
(statearr_31937_33811[(1)] = (5));

} else {
var statearr_31938_33812 = state_31911__$1;
(statearr_31938_33812[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31912 === (15))){
var inst_31749 = (state_31911[(14)]);
var inst_31748 = (state_31911[(15)]);
var inst_31750 = (state_31911[(16)]);
var inst_31747 = (state_31911[(17)]);
var inst_31767 = (state_31911[(2)]);
var inst_31770 = (inst_31750 + (1));
var tmp31929 = inst_31749;
var tmp31930 = inst_31748;
var tmp31931 = inst_31747;
var inst_31747__$1 = tmp31931;
var inst_31748__$1 = tmp31930;
var inst_31749__$1 = tmp31929;
var inst_31750__$1 = inst_31770;
var state_31911__$1 = (function (){var statearr_31948 = state_31911;
(statearr_31948[(14)] = inst_31749__$1);

(statearr_31948[(18)] = inst_31767);

(statearr_31948[(15)] = inst_31748__$1);

(statearr_31948[(16)] = inst_31750__$1);

(statearr_31948[(17)] = inst_31747__$1);

return statearr_31948;
})();
var statearr_31949_33819 = state_31911__$1;
(statearr_31949_33819[(2)] = null);

(statearr_31949_33819[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31912 === (21))){
var inst_31814 = (state_31911[(2)]);
var state_31911__$1 = state_31911;
var statearr_31959_33821 = state_31911__$1;
(statearr_31959_33821[(2)] = inst_31814);

(statearr_31959_33821[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31912 === (31))){
var inst_31845 = (state_31911[(10)]);
var inst_31850 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_31845);
var state_31911__$1 = state_31911;
var statearr_31960_33824 = state_31911__$1;
(statearr_31960_33824[(2)] = inst_31850);

(statearr_31960_33824[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31912 === (32))){
var inst_31838 = (state_31911[(19)]);
var inst_31839 = (state_31911[(11)]);
var inst_31836 = (state_31911[(20)]);
var inst_31837 = (state_31911[(12)]);
var inst_31852 = (state_31911[(2)]);
var inst_31853 = (inst_31839 + (1));
var tmp31950 = inst_31838;
var tmp31951 = inst_31836;
var tmp31952 = inst_31837;
var inst_31836__$1 = tmp31951;
var inst_31837__$1 = tmp31952;
var inst_31838__$1 = tmp31950;
var inst_31839__$1 = inst_31853;
var state_31911__$1 = (function (){var statearr_31962 = state_31911;
(statearr_31962[(21)] = inst_31852);

(statearr_31962[(19)] = inst_31838__$1);

(statearr_31962[(11)] = inst_31839__$1);

(statearr_31962[(20)] = inst_31836__$1);

(statearr_31962[(12)] = inst_31837__$1);

return statearr_31962;
})();
var statearr_31963_33829 = state_31911__$1;
(statearr_31963_33829[(2)] = null);

(statearr_31963_33829[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31912 === (40))){
var inst_31873 = (state_31911[(22)]);
var inst_31877 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_31873);
var state_31911__$1 = state_31911;
var statearr_31969_33830 = state_31911__$1;
(statearr_31969_33830[(2)] = inst_31877);

(statearr_31969_33830[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31912 === (33))){
var inst_31856 = (state_31911[(23)]);
var inst_31860 = cljs.core.chunked_seq_QMARK_(inst_31856);
var state_31911__$1 = state_31911;
if(inst_31860){
var statearr_31972_33831 = state_31911__$1;
(statearr_31972_33831[(1)] = (36));

} else {
var statearr_31973_33836 = state_31911__$1;
(statearr_31973_33836[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31912 === (13))){
var inst_31761 = (state_31911[(24)]);
var inst_31764 = cljs.core.async.close_BANG_(inst_31761);
var state_31911__$1 = state_31911;
var statearr_31975_33837 = state_31911__$1;
(statearr_31975_33837[(2)] = inst_31764);

(statearr_31975_33837[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31912 === (22))){
var inst_31804 = (state_31911[(8)]);
var inst_31807 = cljs.core.async.close_BANG_(inst_31804);
var state_31911__$1 = state_31911;
var statearr_31976_33838 = state_31911__$1;
(statearr_31976_33838[(2)] = inst_31807);

(statearr_31976_33838[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31912 === (36))){
var inst_31856 = (state_31911[(23)]);
var inst_31864 = cljs.core.chunk_first(inst_31856);
var inst_31868 = cljs.core.chunk_rest(inst_31856);
var inst_31869 = cljs.core.count(inst_31864);
var inst_31836 = inst_31868;
var inst_31837 = inst_31864;
var inst_31838 = inst_31869;
var inst_31839 = (0);
var state_31911__$1 = (function (){var statearr_31981 = state_31911;
(statearr_31981[(19)] = inst_31838);

(statearr_31981[(11)] = inst_31839);

(statearr_31981[(20)] = inst_31836);

(statearr_31981[(12)] = inst_31837);

return statearr_31981;
})();
var statearr_31982_33842 = state_31911__$1;
(statearr_31982_33842[(2)] = null);

(statearr_31982_33842[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31912 === (41))){
var inst_31856 = (state_31911[(23)]);
var inst_31879 = (state_31911[(2)]);
var inst_31881 = cljs.core.next(inst_31856);
var inst_31836 = inst_31881;
var inst_31837 = null;
var inst_31838 = (0);
var inst_31839 = (0);
var state_31911__$1 = (function (){var statearr_31988 = state_31911;
(statearr_31988[(25)] = inst_31879);

(statearr_31988[(19)] = inst_31838);

(statearr_31988[(11)] = inst_31839);

(statearr_31988[(20)] = inst_31836);

(statearr_31988[(12)] = inst_31837);

return statearr_31988;
})();
var statearr_31993_33843 = state_31911__$1;
(statearr_31993_33843[(2)] = null);

(statearr_31993_33843[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31912 === (43))){
var state_31911__$1 = state_31911;
var statearr_31994_33844 = state_31911__$1;
(statearr_31994_33844[(2)] = null);

(statearr_31994_33844[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31912 === (29))){
var inst_31889 = (state_31911[(2)]);
var state_31911__$1 = state_31911;
var statearr_31995_33845 = state_31911__$1;
(statearr_31995_33845[(2)] = inst_31889);

(statearr_31995_33845[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31912 === (44))){
var inst_31899 = (state_31911[(2)]);
var state_31911__$1 = (function (){var statearr_31996 = state_31911;
(statearr_31996[(26)] = inst_31899);

return statearr_31996;
})();
var statearr_31997_33846 = state_31911__$1;
(statearr_31997_33846[(2)] = null);

(statearr_31997_33846[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31912 === (6))){
var inst_31826 = (state_31911[(27)]);
var inst_31825 = cljs.core.deref(cs);
var inst_31826__$1 = cljs.core.keys(inst_31825);
var inst_31828 = cljs.core.count(inst_31826__$1);
var inst_31829 = cljs.core.reset_BANG_(dctr,inst_31828);
var inst_31834 = cljs.core.seq(inst_31826__$1);
var inst_31836 = inst_31834;
var inst_31837 = null;
var inst_31838 = (0);
var inst_31839 = (0);
var state_31911__$1 = (function (){var statearr_31998 = state_31911;
(statearr_31998[(28)] = inst_31829);

(statearr_31998[(27)] = inst_31826__$1);

(statearr_31998[(19)] = inst_31838);

(statearr_31998[(11)] = inst_31839);

(statearr_31998[(20)] = inst_31836);

(statearr_31998[(12)] = inst_31837);

return statearr_31998;
})();
var statearr_31999_33856 = state_31911__$1;
(statearr_31999_33856[(2)] = null);

(statearr_31999_33856[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31912 === (28))){
var inst_31856 = (state_31911[(23)]);
var inst_31836 = (state_31911[(20)]);
var inst_31856__$1 = cljs.core.seq(inst_31836);
var state_31911__$1 = (function (){var statearr_32000 = state_31911;
(statearr_32000[(23)] = inst_31856__$1);

return statearr_32000;
})();
if(inst_31856__$1){
var statearr_32001_33858 = state_31911__$1;
(statearr_32001_33858[(1)] = (33));

} else {
var statearr_32002_33859 = state_31911__$1;
(statearr_32002_33859[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31912 === (25))){
var inst_31838 = (state_31911[(19)]);
var inst_31839 = (state_31911[(11)]);
var inst_31842 = (inst_31839 < inst_31838);
var inst_31843 = inst_31842;
var state_31911__$1 = state_31911;
if(cljs.core.truth_(inst_31843)){
var statearr_32013_33863 = state_31911__$1;
(statearr_32013_33863[(1)] = (27));

} else {
var statearr_32014_33864 = state_31911__$1;
(statearr_32014_33864[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31912 === (34))){
var state_31911__$1 = state_31911;
var statearr_32018_33865 = state_31911__$1;
(statearr_32018_33865[(2)] = null);

(statearr_32018_33865[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31912 === (17))){
var state_31911__$1 = state_31911;
var statearr_32019_33866 = state_31911__$1;
(statearr_32019_33866[(2)] = null);

(statearr_32019_33866[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31912 === (3))){
var inst_31907 = (state_31911[(2)]);
var state_31911__$1 = state_31911;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31911__$1,inst_31907);
} else {
if((state_val_31912 === (12))){
var inst_31820 = (state_31911[(2)]);
var state_31911__$1 = state_31911;
var statearr_32023_33869 = state_31911__$1;
(statearr_32023_33869[(2)] = inst_31820);

(statearr_32023_33869[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31912 === (2))){
var state_31911__$1 = state_31911;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31911__$1,(4),ch);
} else {
if((state_val_31912 === (23))){
var state_31911__$1 = state_31911;
var statearr_32027_33872 = state_31911__$1;
(statearr_32027_33872[(2)] = null);

(statearr_32027_33872[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31912 === (35))){
var inst_31887 = (state_31911[(2)]);
var state_31911__$1 = state_31911;
var statearr_32032_33876 = state_31911__$1;
(statearr_32032_33876[(2)] = inst_31887);

(statearr_32032_33876[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31912 === (19))){
var inst_31783 = (state_31911[(7)]);
var inst_31789 = cljs.core.chunk_first(inst_31783);
var inst_31790 = cljs.core.chunk_rest(inst_31783);
var inst_31791 = cljs.core.count(inst_31789);
var inst_31747 = inst_31790;
var inst_31748 = inst_31789;
var inst_31749 = inst_31791;
var inst_31750 = (0);
var state_31911__$1 = (function (){var statearr_32034 = state_31911;
(statearr_32034[(14)] = inst_31749);

(statearr_32034[(15)] = inst_31748);

(statearr_32034[(16)] = inst_31750);

(statearr_32034[(17)] = inst_31747);

return statearr_32034;
})();
var statearr_32035_33883 = state_31911__$1;
(statearr_32035_33883[(2)] = null);

(statearr_32035_33883[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31912 === (11))){
var inst_31747 = (state_31911[(17)]);
var inst_31783 = (state_31911[(7)]);
var inst_31783__$1 = cljs.core.seq(inst_31747);
var state_31911__$1 = (function (){var statearr_32040 = state_31911;
(statearr_32040[(7)] = inst_31783__$1);

return statearr_32040;
})();
if(inst_31783__$1){
var statearr_32041_33888 = state_31911__$1;
(statearr_32041_33888[(1)] = (16));

} else {
var statearr_32043_33889 = state_31911__$1;
(statearr_32043_33889[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31912 === (9))){
var inst_31822 = (state_31911[(2)]);
var state_31911__$1 = state_31911;
var statearr_32045_33892 = state_31911__$1;
(statearr_32045_33892[(2)] = inst_31822);

(statearr_32045_33892[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31912 === (5))){
var inst_31745 = cljs.core.deref(cs);
var inst_31746 = cljs.core.seq(inst_31745);
var inst_31747 = inst_31746;
var inst_31748 = null;
var inst_31749 = (0);
var inst_31750 = (0);
var state_31911__$1 = (function (){var statearr_32051 = state_31911;
(statearr_32051[(14)] = inst_31749);

(statearr_32051[(15)] = inst_31748);

(statearr_32051[(16)] = inst_31750);

(statearr_32051[(17)] = inst_31747);

return statearr_32051;
})();
var statearr_32053_33896 = state_31911__$1;
(statearr_32053_33896[(2)] = null);

(statearr_32053_33896[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31912 === (14))){
var state_31911__$1 = state_31911;
var statearr_32054_33898 = state_31911__$1;
(statearr_32054_33898[(2)] = null);

(statearr_32054_33898[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31912 === (45))){
var inst_31895 = (state_31911[(2)]);
var state_31911__$1 = state_31911;
var statearr_32055_33901 = state_31911__$1;
(statearr_32055_33901[(2)] = inst_31895);

(statearr_32055_33901[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31912 === (26))){
var inst_31826 = (state_31911[(27)]);
var inst_31891 = (state_31911[(2)]);
var inst_31892 = cljs.core.seq(inst_31826);
var state_31911__$1 = (function (){var statearr_32057 = state_31911;
(statearr_32057[(29)] = inst_31891);

return statearr_32057;
})();
if(inst_31892){
var statearr_32061_33902 = state_31911__$1;
(statearr_32061_33902[(1)] = (42));

} else {
var statearr_32062_33903 = state_31911__$1;
(statearr_32062_33903[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31912 === (16))){
var inst_31783 = (state_31911[(7)]);
var inst_31786 = cljs.core.chunked_seq_QMARK_(inst_31783);
var state_31911__$1 = state_31911;
if(inst_31786){
var statearr_32067_33905 = state_31911__$1;
(statearr_32067_33905[(1)] = (19));

} else {
var statearr_32068_33906 = state_31911__$1;
(statearr_32068_33906[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31912 === (38))){
var inst_31884 = (state_31911[(2)]);
var state_31911__$1 = state_31911;
var statearr_32069_33908 = state_31911__$1;
(statearr_32069_33908[(2)] = inst_31884);

(statearr_32069_33908[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31912 === (30))){
var state_31911__$1 = state_31911;
var statearr_32070_33910 = state_31911__$1;
(statearr_32070_33910[(2)] = null);

(statearr_32070_33910[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31912 === (10))){
var inst_31748 = (state_31911[(15)]);
var inst_31750 = (state_31911[(16)]);
var inst_31760 = cljs.core._nth(inst_31748,inst_31750);
var inst_31761 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31760,(0),null);
var inst_31762 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31760,(1),null);
var state_31911__$1 = (function (){var statearr_32076 = state_31911;
(statearr_32076[(24)] = inst_31761);

return statearr_32076;
})();
if(cljs.core.truth_(inst_31762)){
var statearr_32077_33914 = state_31911__$1;
(statearr_32077_33914[(1)] = (13));

} else {
var statearr_32078_33916 = state_31911__$1;
(statearr_32078_33916[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31912 === (18))){
var inst_31817 = (state_31911[(2)]);
var state_31911__$1 = state_31911;
var statearr_32080_33918 = state_31911__$1;
(statearr_32080_33918[(2)] = inst_31817);

(statearr_32080_33918[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31912 === (42))){
var state_31911__$1 = state_31911;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31911__$1,(45),dchan);
} else {
if((state_val_31912 === (37))){
var inst_31856 = (state_31911[(23)]);
var inst_31737 = (state_31911[(9)]);
var inst_31873 = (state_31911[(22)]);
var inst_31873__$1 = cljs.core.first(inst_31856);
var inst_31874 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_31873__$1,inst_31737,done);
var state_31911__$1 = (function (){var statearr_32082 = state_31911;
(statearr_32082[(22)] = inst_31873__$1);

return statearr_32082;
})();
if(cljs.core.truth_(inst_31874)){
var statearr_32083_33923 = state_31911__$1;
(statearr_32083_33923[(1)] = (39));

} else {
var statearr_32084_33924 = state_31911__$1;
(statearr_32084_33924[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31912 === (8))){
var inst_31749 = (state_31911[(14)]);
var inst_31750 = (state_31911[(16)]);
var inst_31752 = (inst_31750 < inst_31749);
var inst_31754 = inst_31752;
var state_31911__$1 = state_31911;
if(cljs.core.truth_(inst_31754)){
var statearr_32085_33925 = state_31911__$1;
(statearr_32085_33925[(1)] = (10));

} else {
var statearr_32086_33926 = state_31911__$1;
(statearr_32086_33926[(1)] = (11));

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
var cljs$core$async$mult_$_state_machine__30605__auto__ = null;
var cljs$core$async$mult_$_state_machine__30605__auto____0 = (function (){
var statearr_32089 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32089[(0)] = cljs$core$async$mult_$_state_machine__30605__auto__);

(statearr_32089[(1)] = (1));

return statearr_32089;
});
var cljs$core$async$mult_$_state_machine__30605__auto____1 = (function (state_31911){
while(true){
var ret_value__30606__auto__ = (function (){try{while(true){
var result__30607__auto__ = switch__30604__auto__(state_31911);
if(cljs.core.keyword_identical_QMARK_(result__30607__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30607__auto__;
}
break;
}
}catch (e32092){var ex__30608__auto__ = e32092;
var statearr_32093_33934 = state_31911;
(statearr_32093_33934[(2)] = ex__30608__auto__);


if(cljs.core.seq((state_31911[(4)]))){
var statearr_32094_33935 = state_31911;
(statearr_32094_33935[(1)] = cljs.core.first((state_31911[(4)])));

} else {
throw ex__30608__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30606__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33938 = state_31911;
state_31911 = G__33938;
continue;
} else {
return ret_value__30606__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__30605__auto__ = function(state_31911){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__30605__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__30605__auto____1.call(this,state_31911);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__30605__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__30605__auto____0;
cljs$core$async$mult_$_state_machine__30605__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__30605__auto____1;
return cljs$core$async$mult_$_state_machine__30605__auto__;
})()
})();
var state__30739__auto__ = (function (){var statearr_32095 = f__30738__auto__();
(statearr_32095[(6)] = c__30737__auto___33783);

return statearr_32095;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30739__auto__);
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
var G__32097 = arguments.length;
switch (G__32097) {
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

var cljs$core$async$Mix$admix_STAR_$dyn_33953 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4429__auto__.call(null,m,ch));
} else {
var m__4426__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4426__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_33953(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_33959 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4429__auto__.call(null,m,ch));
} else {
var m__4426__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4426__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_33959(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_33968 = (function (m){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4429__auto__.call(null,m));
} else {
var m__4426__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4426__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_33968(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_33977 = (function (m,state_map){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4429__auto__.call(null,m,state_map));
} else {
var m__4426__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4426__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_33977(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_33992 = (function (m,mode){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4429__auto__.call(null,m,mode));
} else {
var m__4426__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4426__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_33992(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___34013 = arguments.length;
var i__4737__auto___34014 = (0);
while(true){
if((i__4737__auto___34014 < len__4736__auto___34013)){
args__4742__auto__.push((arguments[i__4737__auto___34014]));

var G__34015 = (i__4737__auto___34014 + (1));
i__4737__auto___34014 = G__34015;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__32164){
var map__32165 = p__32164;
var map__32165__$1 = (((((!((map__32165 == null))))?(((((map__32165.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32165.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32165):map__32165);
var opts = map__32165__$1;
var statearr_32167_34022 = state;
(statearr_32167_34022[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts((function (val){
var statearr_32169_34027 = state;
(statearr_32169_34027[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_32170_34028 = state;
(statearr_32170_34028[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq32159){
var G__32160 = cljs.core.first(seq32159);
var seq32159__$1 = cljs.core.next(seq32159);
var G__32161 = cljs.core.first(seq32159__$1);
var seq32159__$2 = cljs.core.next(seq32159__$1);
var G__32162 = cljs.core.first(seq32159__$2);
var seq32159__$3 = cljs.core.next(seq32159__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__32160,G__32161,G__32162,seq32159__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32180 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32180 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta32181){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta32181 = meta32181;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32180.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32182,meta32181__$1){
var self__ = this;
var _32182__$1 = this;
return (new cljs.core.async.t_cljs$core$async32180(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta32181__$1));
}));

(cljs.core.async.t_cljs$core$async32180.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32182){
var self__ = this;
var _32182__$1 = this;
return self__.meta32181;
}));

(cljs.core.async.t_cljs$core$async32180.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32180.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async32180.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32180.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async32180.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async32180.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async32180.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async32180.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async32180.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta32181","meta32181",-1568686569,null)], null);
}));

(cljs.core.async.t_cljs$core$async32180.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32180.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32180");

(cljs.core.async.t_cljs$core$async32180.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async32180");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32180.
 */
cljs.core.async.__GT_t_cljs$core$async32180 = (function cljs$core$async$mix_$___GT_t_cljs$core$async32180(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta32181){
return (new cljs.core.async.t_cljs$core$async32180(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta32181));
});

}

return (new cljs.core.async.t_cljs$core$async32180(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__30737__auto___34072 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30738__auto__ = (function (){var switch__30604__auto__ = (function (state_32304){
var state_val_32305 = (state_32304[(1)]);
if((state_val_32305 === (7))){
var inst_32219 = (state_32304[(2)]);
var state_32304__$1 = state_32304;
var statearr_32306_34077 = state_32304__$1;
(statearr_32306_34077[(2)] = inst_32219);

(statearr_32306_34077[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32305 === (20))){
var inst_32231 = (state_32304[(7)]);
var state_32304__$1 = state_32304;
var statearr_32307_34079 = state_32304__$1;
(statearr_32307_34079[(2)] = inst_32231);

(statearr_32307_34079[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32305 === (27))){
var state_32304__$1 = state_32304;
var statearr_32308_34082 = state_32304__$1;
(statearr_32308_34082[(2)] = null);

(statearr_32308_34082[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32305 === (1))){
var inst_32206 = (state_32304[(8)]);
var inst_32206__$1 = calc_state();
var inst_32208 = (inst_32206__$1 == null);
var inst_32209 = cljs.core.not(inst_32208);
var state_32304__$1 = (function (){var statearr_32309 = state_32304;
(statearr_32309[(8)] = inst_32206__$1);

return statearr_32309;
})();
if(inst_32209){
var statearr_32310_34088 = state_32304__$1;
(statearr_32310_34088[(1)] = (2));

} else {
var statearr_32311_34089 = state_32304__$1;
(statearr_32311_34089[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32305 === (24))){
var inst_32255 = (state_32304[(9)]);
var inst_32278 = (state_32304[(10)]);
var inst_32264 = (state_32304[(11)]);
var inst_32278__$1 = (inst_32255.cljs$core$IFn$_invoke$arity$1 ? inst_32255.cljs$core$IFn$_invoke$arity$1(inst_32264) : inst_32255.call(null,inst_32264));
var state_32304__$1 = (function (){var statearr_32312 = state_32304;
(statearr_32312[(10)] = inst_32278__$1);

return statearr_32312;
})();
if(cljs.core.truth_(inst_32278__$1)){
var statearr_32313_34092 = state_32304__$1;
(statearr_32313_34092[(1)] = (29));

} else {
var statearr_32314_34095 = state_32304__$1;
(statearr_32314_34095[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32305 === (4))){
var inst_32222 = (state_32304[(2)]);
var state_32304__$1 = state_32304;
if(cljs.core.truth_(inst_32222)){
var statearr_32315_34096 = state_32304__$1;
(statearr_32315_34096[(1)] = (8));

} else {
var statearr_32316_34097 = state_32304__$1;
(statearr_32316_34097[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32305 === (15))){
var inst_32249 = (state_32304[(2)]);
var state_32304__$1 = state_32304;
if(cljs.core.truth_(inst_32249)){
var statearr_32317_34098 = state_32304__$1;
(statearr_32317_34098[(1)] = (19));

} else {
var statearr_32318_34099 = state_32304__$1;
(statearr_32318_34099[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32305 === (21))){
var inst_32254 = (state_32304[(12)]);
var inst_32254__$1 = (state_32304[(2)]);
var inst_32255 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_32254__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_32256 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_32254__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_32257 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_32254__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_32304__$1 = (function (){var statearr_32322 = state_32304;
(statearr_32322[(9)] = inst_32255);

(statearr_32322[(13)] = inst_32256);

(statearr_32322[(12)] = inst_32254__$1);

return statearr_32322;
})();
return cljs.core.async.ioc_alts_BANG_(state_32304__$1,(22),inst_32257);
} else {
if((state_val_32305 === (31))){
var inst_32286 = (state_32304[(2)]);
var state_32304__$1 = state_32304;
if(cljs.core.truth_(inst_32286)){
var statearr_32323_34101 = state_32304__$1;
(statearr_32323_34101[(1)] = (32));

} else {
var statearr_32325_34102 = state_32304__$1;
(statearr_32325_34102[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32305 === (32))){
var inst_32263 = (state_32304[(14)]);
var state_32304__$1 = state_32304;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32304__$1,(35),out,inst_32263);
} else {
if((state_val_32305 === (33))){
var inst_32254 = (state_32304[(12)]);
var inst_32231 = inst_32254;
var state_32304__$1 = (function (){var statearr_32328 = state_32304;
(statearr_32328[(7)] = inst_32231);

return statearr_32328;
})();
var statearr_32329_34104 = state_32304__$1;
(statearr_32329_34104[(2)] = null);

(statearr_32329_34104[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32305 === (13))){
var inst_32231 = (state_32304[(7)]);
var inst_32238 = inst_32231.cljs$lang$protocol_mask$partition0$;
var inst_32239 = (inst_32238 & (64));
var inst_32240 = inst_32231.cljs$core$ISeq$;
var inst_32241 = (cljs.core.PROTOCOL_SENTINEL === inst_32240);
var inst_32242 = ((inst_32239) || (inst_32241));
var state_32304__$1 = state_32304;
if(cljs.core.truth_(inst_32242)){
var statearr_32330_34110 = state_32304__$1;
(statearr_32330_34110[(1)] = (16));

} else {
var statearr_32331_34111 = state_32304__$1;
(statearr_32331_34111[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32305 === (22))){
var inst_32263 = (state_32304[(14)]);
var inst_32264 = (state_32304[(11)]);
var inst_32262 = (state_32304[(2)]);
var inst_32263__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32262,(0),null);
var inst_32264__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32262,(1),null);
var inst_32265 = (inst_32263__$1 == null);
var inst_32266 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_32264__$1,change);
var inst_32267 = ((inst_32265) || (inst_32266));
var state_32304__$1 = (function (){var statearr_32332 = state_32304;
(statearr_32332[(14)] = inst_32263__$1);

(statearr_32332[(11)] = inst_32264__$1);

return statearr_32332;
})();
if(cljs.core.truth_(inst_32267)){
var statearr_32333_34112 = state_32304__$1;
(statearr_32333_34112[(1)] = (23));

} else {
var statearr_32335_34113 = state_32304__$1;
(statearr_32335_34113[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32305 === (36))){
var inst_32254 = (state_32304[(12)]);
var inst_32231 = inst_32254;
var state_32304__$1 = (function (){var statearr_32338 = state_32304;
(statearr_32338[(7)] = inst_32231);

return statearr_32338;
})();
var statearr_32339_34114 = state_32304__$1;
(statearr_32339_34114[(2)] = null);

(statearr_32339_34114[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32305 === (29))){
var inst_32278 = (state_32304[(10)]);
var state_32304__$1 = state_32304;
var statearr_32340_34115 = state_32304__$1;
(statearr_32340_34115[(2)] = inst_32278);

(statearr_32340_34115[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32305 === (6))){
var state_32304__$1 = state_32304;
var statearr_32342_34116 = state_32304__$1;
(statearr_32342_34116[(2)] = false);

(statearr_32342_34116[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32305 === (28))){
var inst_32274 = (state_32304[(2)]);
var inst_32275 = calc_state();
var inst_32231 = inst_32275;
var state_32304__$1 = (function (){var statearr_32345 = state_32304;
(statearr_32345[(15)] = inst_32274);

(statearr_32345[(7)] = inst_32231);

return statearr_32345;
})();
var statearr_32346_34118 = state_32304__$1;
(statearr_32346_34118[(2)] = null);

(statearr_32346_34118[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32305 === (25))){
var inst_32300 = (state_32304[(2)]);
var state_32304__$1 = state_32304;
var statearr_32347_34119 = state_32304__$1;
(statearr_32347_34119[(2)] = inst_32300);

(statearr_32347_34119[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32305 === (34))){
var inst_32298 = (state_32304[(2)]);
var state_32304__$1 = state_32304;
var statearr_32348_34120 = state_32304__$1;
(statearr_32348_34120[(2)] = inst_32298);

(statearr_32348_34120[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32305 === (17))){
var state_32304__$1 = state_32304;
var statearr_32349_34121 = state_32304__$1;
(statearr_32349_34121[(2)] = false);

(statearr_32349_34121[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32305 === (3))){
var state_32304__$1 = state_32304;
var statearr_32350_34122 = state_32304__$1;
(statearr_32350_34122[(2)] = false);

(statearr_32350_34122[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32305 === (12))){
var inst_32302 = (state_32304[(2)]);
var state_32304__$1 = state_32304;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32304__$1,inst_32302);
} else {
if((state_val_32305 === (2))){
var inst_32206 = (state_32304[(8)]);
var inst_32211 = inst_32206.cljs$lang$protocol_mask$partition0$;
var inst_32212 = (inst_32211 & (64));
var inst_32213 = inst_32206.cljs$core$ISeq$;
var inst_32214 = (cljs.core.PROTOCOL_SENTINEL === inst_32213);
var inst_32215 = ((inst_32212) || (inst_32214));
var state_32304__$1 = state_32304;
if(cljs.core.truth_(inst_32215)){
var statearr_32354_34127 = state_32304__$1;
(statearr_32354_34127[(1)] = (5));

} else {
var statearr_32356_34128 = state_32304__$1;
(statearr_32356_34128[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32305 === (23))){
var inst_32263 = (state_32304[(14)]);
var inst_32269 = (inst_32263 == null);
var state_32304__$1 = state_32304;
if(cljs.core.truth_(inst_32269)){
var statearr_32359_34129 = state_32304__$1;
(statearr_32359_34129[(1)] = (26));

} else {
var statearr_32362_34130 = state_32304__$1;
(statearr_32362_34130[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32305 === (35))){
var inst_32289 = (state_32304[(2)]);
var state_32304__$1 = state_32304;
if(cljs.core.truth_(inst_32289)){
var statearr_32369_34131 = state_32304__$1;
(statearr_32369_34131[(1)] = (36));

} else {
var statearr_32372_34136 = state_32304__$1;
(statearr_32372_34136[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32305 === (19))){
var inst_32231 = (state_32304[(7)]);
var inst_32251 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_32231);
var state_32304__$1 = state_32304;
var statearr_32374_34137 = state_32304__$1;
(statearr_32374_34137[(2)] = inst_32251);

(statearr_32374_34137[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32305 === (11))){
var inst_32231 = (state_32304[(7)]);
var inst_32235 = (inst_32231 == null);
var inst_32236 = cljs.core.not(inst_32235);
var state_32304__$1 = state_32304;
if(inst_32236){
var statearr_32376_34146 = state_32304__$1;
(statearr_32376_34146[(1)] = (13));

} else {
var statearr_32378_34147 = state_32304__$1;
(statearr_32378_34147[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32305 === (9))){
var inst_32206 = (state_32304[(8)]);
var state_32304__$1 = state_32304;
var statearr_32379_34148 = state_32304__$1;
(statearr_32379_34148[(2)] = inst_32206);

(statearr_32379_34148[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32305 === (5))){
var state_32304__$1 = state_32304;
var statearr_32380_34149 = state_32304__$1;
(statearr_32380_34149[(2)] = true);

(statearr_32380_34149[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32305 === (14))){
var state_32304__$1 = state_32304;
var statearr_32381_34150 = state_32304__$1;
(statearr_32381_34150[(2)] = false);

(statearr_32381_34150[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32305 === (26))){
var inst_32264 = (state_32304[(11)]);
var inst_32271 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_32264);
var state_32304__$1 = state_32304;
var statearr_32382_34152 = state_32304__$1;
(statearr_32382_34152[(2)] = inst_32271);

(statearr_32382_34152[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32305 === (16))){
var state_32304__$1 = state_32304;
var statearr_32384_34153 = state_32304__$1;
(statearr_32384_34153[(2)] = true);

(statearr_32384_34153[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32305 === (38))){
var inst_32294 = (state_32304[(2)]);
var state_32304__$1 = state_32304;
var statearr_32385_34154 = state_32304__$1;
(statearr_32385_34154[(2)] = inst_32294);

(statearr_32385_34154[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32305 === (30))){
var inst_32255 = (state_32304[(9)]);
var inst_32256 = (state_32304[(13)]);
var inst_32264 = (state_32304[(11)]);
var inst_32281 = cljs.core.empty_QMARK_(inst_32255);
var inst_32282 = (inst_32256.cljs$core$IFn$_invoke$arity$1 ? inst_32256.cljs$core$IFn$_invoke$arity$1(inst_32264) : inst_32256.call(null,inst_32264));
var inst_32283 = cljs.core.not(inst_32282);
var inst_32284 = ((inst_32281) && (inst_32283));
var state_32304__$1 = state_32304;
var statearr_32386_34155 = state_32304__$1;
(statearr_32386_34155[(2)] = inst_32284);

(statearr_32386_34155[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32305 === (10))){
var inst_32206 = (state_32304[(8)]);
var inst_32227 = (state_32304[(2)]);
var inst_32228 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_32227,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_32229 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_32227,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_32230 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_32227,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_32231 = inst_32206;
var state_32304__$1 = (function (){var statearr_32388 = state_32304;
(statearr_32388[(16)] = inst_32229);

(statearr_32388[(17)] = inst_32228);

(statearr_32388[(18)] = inst_32230);

(statearr_32388[(7)] = inst_32231);

return statearr_32388;
})();
var statearr_32389_34156 = state_32304__$1;
(statearr_32389_34156[(2)] = null);

(statearr_32389_34156[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32305 === (18))){
var inst_32246 = (state_32304[(2)]);
var state_32304__$1 = state_32304;
var statearr_32390_34157 = state_32304__$1;
(statearr_32390_34157[(2)] = inst_32246);

(statearr_32390_34157[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32305 === (37))){
var state_32304__$1 = state_32304;
var statearr_32391_34162 = state_32304__$1;
(statearr_32391_34162[(2)] = null);

(statearr_32391_34162[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32305 === (8))){
var inst_32206 = (state_32304[(8)]);
var inst_32224 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_32206);
var state_32304__$1 = state_32304;
var statearr_32394_34164 = state_32304__$1;
(statearr_32394_34164[(2)] = inst_32224);

(statearr_32394_34164[(1)] = (10));


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
var cljs$core$async$mix_$_state_machine__30605__auto__ = null;
var cljs$core$async$mix_$_state_machine__30605__auto____0 = (function (){
var statearr_32396 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32396[(0)] = cljs$core$async$mix_$_state_machine__30605__auto__);

(statearr_32396[(1)] = (1));

return statearr_32396;
});
var cljs$core$async$mix_$_state_machine__30605__auto____1 = (function (state_32304){
while(true){
var ret_value__30606__auto__ = (function (){try{while(true){
var result__30607__auto__ = switch__30604__auto__(state_32304);
if(cljs.core.keyword_identical_QMARK_(result__30607__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30607__auto__;
}
break;
}
}catch (e32402){var ex__30608__auto__ = e32402;
var statearr_32405_34165 = state_32304;
(statearr_32405_34165[(2)] = ex__30608__auto__);


if(cljs.core.seq((state_32304[(4)]))){
var statearr_32406_34166 = state_32304;
(statearr_32406_34166[(1)] = cljs.core.first((state_32304[(4)])));

} else {
throw ex__30608__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30606__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34167 = state_32304;
state_32304 = G__34167;
continue;
} else {
return ret_value__30606__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__30605__auto__ = function(state_32304){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__30605__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__30605__auto____1.call(this,state_32304);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__30605__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__30605__auto____0;
cljs$core$async$mix_$_state_machine__30605__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__30605__auto____1;
return cljs$core$async$mix_$_state_machine__30605__auto__;
})()
})();
var state__30739__auto__ = (function (){var statearr_32407 = f__30738__auto__();
(statearr_32407[(6)] = c__30737__auto___34072);

return statearr_32407;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30739__auto__);
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

var cljs$core$async$Pub$sub_STAR_$dyn_34170 = (function (p,v,ch,close_QMARK_){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4429__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4426__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4426__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_34170(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_34174 = (function (p,v,ch){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4429__auto__.call(null,p,v,ch));
} else {
var m__4426__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4426__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_34174(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_34175 = (function() {
var G__34176 = null;
var G__34176__1 = (function (p){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4429__auto__.call(null,p));
} else {
var m__4426__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4426__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__34176__2 = (function (p,v){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4429__auto__.call(null,p,v));
} else {
var m__4426__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4426__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__34176 = function(p,v){
switch(arguments.length){
case 1:
return G__34176__1.call(this,p);
case 2:
return G__34176__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__34176.cljs$core$IFn$_invoke$arity$1 = G__34176__1;
G__34176.cljs$core$IFn$_invoke$arity$2 = G__34176__2;
return G__34176;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__32429 = arguments.length;
switch (G__32429) {
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
return cljs$core$async$Pub$unsub_all_STAR_$dyn_34175(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_34175(p,v);
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
var G__32436 = arguments.length;
switch (G__32436) {
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
var or__4126__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__32434_SHARP_){
if(cljs.core.truth_((p1__32434_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__32434_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__32434_SHARP_.call(null,topic)))){
return p1__32434_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__32434_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32440 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32440 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta32441){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta32441 = meta32441;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32440.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32442,meta32441__$1){
var self__ = this;
var _32442__$1 = this;
return (new cljs.core.async.t_cljs$core$async32440(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta32441__$1));
}));

(cljs.core.async.t_cljs$core$async32440.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32442){
var self__ = this;
var _32442__$1 = this;
return self__.meta32441;
}));

(cljs.core.async.t_cljs$core$async32440.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32440.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async32440.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32440.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async32440.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
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

(cljs.core.async.t_cljs$core$async32440.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async32440.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async32440.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta32441","meta32441",831004470,null)], null);
}));

(cljs.core.async.t_cljs$core$async32440.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32440.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32440");

(cljs.core.async.t_cljs$core$async32440.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async32440");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32440.
 */
cljs.core.async.__GT_t_cljs$core$async32440 = (function cljs$core$async$__GT_t_cljs$core$async32440(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta32441){
return (new cljs.core.async.t_cljs$core$async32440(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta32441));
});

}

return (new cljs.core.async.t_cljs$core$async32440(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__30737__auto___34182 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30738__auto__ = (function (){var switch__30604__auto__ = (function (state_32543){
var state_val_32544 = (state_32543[(1)]);
if((state_val_32544 === (7))){
var inst_32539 = (state_32543[(2)]);
var state_32543__$1 = state_32543;
var statearr_32545_34183 = state_32543__$1;
(statearr_32545_34183[(2)] = inst_32539);

(statearr_32545_34183[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32544 === (20))){
var state_32543__$1 = state_32543;
var statearr_32546_34184 = state_32543__$1;
(statearr_32546_34184[(2)] = null);

(statearr_32546_34184[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32544 === (1))){
var state_32543__$1 = state_32543;
var statearr_32547_34185 = state_32543__$1;
(statearr_32547_34185[(2)] = null);

(statearr_32547_34185[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32544 === (24))){
var inst_32521 = (state_32543[(7)]);
var inst_32531 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_32521);
var state_32543__$1 = state_32543;
var statearr_32548_34186 = state_32543__$1;
(statearr_32548_34186[(2)] = inst_32531);

(statearr_32548_34186[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32544 === (4))){
var inst_32459 = (state_32543[(8)]);
var inst_32459__$1 = (state_32543[(2)]);
var inst_32460 = (inst_32459__$1 == null);
var state_32543__$1 = (function (){var statearr_32549 = state_32543;
(statearr_32549[(8)] = inst_32459__$1);

return statearr_32549;
})();
if(cljs.core.truth_(inst_32460)){
var statearr_32550_34187 = state_32543__$1;
(statearr_32550_34187[(1)] = (5));

} else {
var statearr_32551_34188 = state_32543__$1;
(statearr_32551_34188[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32544 === (15))){
var inst_32514 = (state_32543[(2)]);
var state_32543__$1 = state_32543;
var statearr_32552_34189 = state_32543__$1;
(statearr_32552_34189[(2)] = inst_32514);

(statearr_32552_34189[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32544 === (21))){
var inst_32536 = (state_32543[(2)]);
var state_32543__$1 = (function (){var statearr_32553 = state_32543;
(statearr_32553[(9)] = inst_32536);

return statearr_32553;
})();
var statearr_32554_34190 = state_32543__$1;
(statearr_32554_34190[(2)] = null);

(statearr_32554_34190[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32544 === (13))){
var inst_32493 = (state_32543[(10)]);
var inst_32495 = cljs.core.chunked_seq_QMARK_(inst_32493);
var state_32543__$1 = state_32543;
if(inst_32495){
var statearr_32555_34191 = state_32543__$1;
(statearr_32555_34191[(1)] = (16));

} else {
var statearr_32556_34192 = state_32543__$1;
(statearr_32556_34192[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32544 === (22))){
var inst_32528 = (state_32543[(2)]);
var state_32543__$1 = state_32543;
if(cljs.core.truth_(inst_32528)){
var statearr_32560_34194 = state_32543__$1;
(statearr_32560_34194[(1)] = (23));

} else {
var statearr_32561_34195 = state_32543__$1;
(statearr_32561_34195[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32544 === (6))){
var inst_32524 = (state_32543[(11)]);
var inst_32459 = (state_32543[(8)]);
var inst_32521 = (state_32543[(7)]);
var inst_32521__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_32459) : topic_fn.call(null,inst_32459));
var inst_32523 = cljs.core.deref(mults);
var inst_32524__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_32523,inst_32521__$1);
var state_32543__$1 = (function (){var statearr_32565 = state_32543;
(statearr_32565[(11)] = inst_32524__$1);

(statearr_32565[(7)] = inst_32521__$1);

return statearr_32565;
})();
if(cljs.core.truth_(inst_32524__$1)){
var statearr_32566_34197 = state_32543__$1;
(statearr_32566_34197[(1)] = (19));

} else {
var statearr_32567_34198 = state_32543__$1;
(statearr_32567_34198[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32544 === (25))){
var inst_32533 = (state_32543[(2)]);
var state_32543__$1 = state_32543;
var statearr_32568_34199 = state_32543__$1;
(statearr_32568_34199[(2)] = inst_32533);

(statearr_32568_34199[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32544 === (17))){
var inst_32493 = (state_32543[(10)]);
var inst_32505 = cljs.core.first(inst_32493);
var inst_32506 = cljs.core.async.muxch_STAR_(inst_32505);
var inst_32507 = cljs.core.async.close_BANG_(inst_32506);
var inst_32508 = cljs.core.next(inst_32493);
var inst_32472 = inst_32508;
var inst_32473 = null;
var inst_32474 = (0);
var inst_32475 = (0);
var state_32543__$1 = (function (){var statearr_32569 = state_32543;
(statearr_32569[(12)] = inst_32474);

(statearr_32569[(13)] = inst_32475);

(statearr_32569[(14)] = inst_32473);

(statearr_32569[(15)] = inst_32507);

(statearr_32569[(16)] = inst_32472);

return statearr_32569;
})();
var statearr_32570_34200 = state_32543__$1;
(statearr_32570_34200[(2)] = null);

(statearr_32570_34200[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32544 === (3))){
var inst_32541 = (state_32543[(2)]);
var state_32543__$1 = state_32543;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32543__$1,inst_32541);
} else {
if((state_val_32544 === (12))){
var inst_32516 = (state_32543[(2)]);
var state_32543__$1 = state_32543;
var statearr_32571_34201 = state_32543__$1;
(statearr_32571_34201[(2)] = inst_32516);

(statearr_32571_34201[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32544 === (2))){
var state_32543__$1 = state_32543;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32543__$1,(4),ch);
} else {
if((state_val_32544 === (23))){
var state_32543__$1 = state_32543;
var statearr_32572_34202 = state_32543__$1;
(statearr_32572_34202[(2)] = null);

(statearr_32572_34202[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32544 === (19))){
var inst_32524 = (state_32543[(11)]);
var inst_32459 = (state_32543[(8)]);
var inst_32526 = cljs.core.async.muxch_STAR_(inst_32524);
var state_32543__$1 = state_32543;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32543__$1,(22),inst_32526,inst_32459);
} else {
if((state_val_32544 === (11))){
var inst_32493 = (state_32543[(10)]);
var inst_32472 = (state_32543[(16)]);
var inst_32493__$1 = cljs.core.seq(inst_32472);
var state_32543__$1 = (function (){var statearr_32573 = state_32543;
(statearr_32573[(10)] = inst_32493__$1);

return statearr_32573;
})();
if(inst_32493__$1){
var statearr_32574_34203 = state_32543__$1;
(statearr_32574_34203[(1)] = (13));

} else {
var statearr_32575_34204 = state_32543__$1;
(statearr_32575_34204[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32544 === (9))){
var inst_32518 = (state_32543[(2)]);
var state_32543__$1 = state_32543;
var statearr_32576_34205 = state_32543__$1;
(statearr_32576_34205[(2)] = inst_32518);

(statearr_32576_34205[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32544 === (5))){
var inst_32468 = cljs.core.deref(mults);
var inst_32469 = cljs.core.vals(inst_32468);
var inst_32470 = cljs.core.seq(inst_32469);
var inst_32472 = inst_32470;
var inst_32473 = null;
var inst_32474 = (0);
var inst_32475 = (0);
var state_32543__$1 = (function (){var statearr_32577 = state_32543;
(statearr_32577[(12)] = inst_32474);

(statearr_32577[(13)] = inst_32475);

(statearr_32577[(14)] = inst_32473);

(statearr_32577[(16)] = inst_32472);

return statearr_32577;
})();
var statearr_32578_34206 = state_32543__$1;
(statearr_32578_34206[(2)] = null);

(statearr_32578_34206[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32544 === (14))){
var state_32543__$1 = state_32543;
var statearr_32582_34207 = state_32543__$1;
(statearr_32582_34207[(2)] = null);

(statearr_32582_34207[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32544 === (16))){
var inst_32493 = (state_32543[(10)]);
var inst_32500 = cljs.core.chunk_first(inst_32493);
var inst_32501 = cljs.core.chunk_rest(inst_32493);
var inst_32502 = cljs.core.count(inst_32500);
var inst_32472 = inst_32501;
var inst_32473 = inst_32500;
var inst_32474 = inst_32502;
var inst_32475 = (0);
var state_32543__$1 = (function (){var statearr_32583 = state_32543;
(statearr_32583[(12)] = inst_32474);

(statearr_32583[(13)] = inst_32475);

(statearr_32583[(14)] = inst_32473);

(statearr_32583[(16)] = inst_32472);

return statearr_32583;
})();
var statearr_32584_34212 = state_32543__$1;
(statearr_32584_34212[(2)] = null);

(statearr_32584_34212[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32544 === (10))){
var inst_32474 = (state_32543[(12)]);
var inst_32475 = (state_32543[(13)]);
var inst_32473 = (state_32543[(14)]);
var inst_32472 = (state_32543[(16)]);
var inst_32480 = cljs.core._nth(inst_32473,inst_32475);
var inst_32481 = cljs.core.async.muxch_STAR_(inst_32480);
var inst_32482 = cljs.core.async.close_BANG_(inst_32481);
var inst_32487 = (inst_32475 + (1));
var tmp32579 = inst_32474;
var tmp32580 = inst_32473;
var tmp32581 = inst_32472;
var inst_32472__$1 = tmp32581;
var inst_32473__$1 = tmp32580;
var inst_32474__$1 = tmp32579;
var inst_32475__$1 = inst_32487;
var state_32543__$1 = (function (){var statearr_32585 = state_32543;
(statearr_32585[(12)] = inst_32474__$1);

(statearr_32585[(13)] = inst_32475__$1);

(statearr_32585[(14)] = inst_32473__$1);

(statearr_32585[(17)] = inst_32482);

(statearr_32585[(16)] = inst_32472__$1);

return statearr_32585;
})();
var statearr_32586_34217 = state_32543__$1;
(statearr_32586_34217[(2)] = null);

(statearr_32586_34217[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32544 === (18))){
var inst_32511 = (state_32543[(2)]);
var state_32543__$1 = state_32543;
var statearr_32587_34219 = state_32543__$1;
(statearr_32587_34219[(2)] = inst_32511);

(statearr_32587_34219[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32544 === (8))){
var inst_32474 = (state_32543[(12)]);
var inst_32475 = (state_32543[(13)]);
var inst_32477 = (inst_32475 < inst_32474);
var inst_32478 = inst_32477;
var state_32543__$1 = state_32543;
if(cljs.core.truth_(inst_32478)){
var statearr_32588_34221 = state_32543__$1;
(statearr_32588_34221[(1)] = (10));

} else {
var statearr_32589_34222 = state_32543__$1;
(statearr_32589_34222[(1)] = (11));

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
var cljs$core$async$state_machine__30605__auto__ = null;
var cljs$core$async$state_machine__30605__auto____0 = (function (){
var statearr_32590 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32590[(0)] = cljs$core$async$state_machine__30605__auto__);

(statearr_32590[(1)] = (1));

return statearr_32590;
});
var cljs$core$async$state_machine__30605__auto____1 = (function (state_32543){
while(true){
var ret_value__30606__auto__ = (function (){try{while(true){
var result__30607__auto__ = switch__30604__auto__(state_32543);
if(cljs.core.keyword_identical_QMARK_(result__30607__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30607__auto__;
}
break;
}
}catch (e32591){var ex__30608__auto__ = e32591;
var statearr_32592_34223 = state_32543;
(statearr_32592_34223[(2)] = ex__30608__auto__);


if(cljs.core.seq((state_32543[(4)]))){
var statearr_32593_34224 = state_32543;
(statearr_32593_34224[(1)] = cljs.core.first((state_32543[(4)])));

} else {
throw ex__30608__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30606__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34225 = state_32543;
state_32543 = G__34225;
continue;
} else {
return ret_value__30606__auto__;
}
break;
}
});
cljs$core$async$state_machine__30605__auto__ = function(state_32543){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30605__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30605__auto____1.call(this,state_32543);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30605__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30605__auto____0;
cljs$core$async$state_machine__30605__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30605__auto____1;
return cljs$core$async$state_machine__30605__auto__;
})()
})();
var state__30739__auto__ = (function (){var statearr_32595 = f__30738__auto__();
(statearr_32595[(6)] = c__30737__auto___34182);

return statearr_32595;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30739__auto__);
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
var G__32597 = arguments.length;
switch (G__32597) {
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
var G__32599 = arguments.length;
switch (G__32599) {
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
var G__32604 = arguments.length;
switch (G__32604) {
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
var c__30737__auto___34229 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30738__auto__ = (function (){var switch__30604__auto__ = (function (state_32649){
var state_val_32650 = (state_32649[(1)]);
if((state_val_32650 === (7))){
var state_32649__$1 = state_32649;
var statearr_32651_34230 = state_32649__$1;
(statearr_32651_34230[(2)] = null);

(statearr_32651_34230[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32650 === (1))){
var state_32649__$1 = state_32649;
var statearr_32652_34231 = state_32649__$1;
(statearr_32652_34231[(2)] = null);

(statearr_32652_34231[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32650 === (4))){
var inst_32609 = (state_32649[(7)]);
var inst_32608 = (state_32649[(8)]);
var inst_32611 = (inst_32609 < inst_32608);
var state_32649__$1 = state_32649;
if(cljs.core.truth_(inst_32611)){
var statearr_32653_34232 = state_32649__$1;
(statearr_32653_34232[(1)] = (6));

} else {
var statearr_32658_34233 = state_32649__$1;
(statearr_32658_34233[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32650 === (15))){
var inst_32635 = (state_32649[(9)]);
var inst_32640 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_32635);
var state_32649__$1 = state_32649;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32649__$1,(17),out,inst_32640);
} else {
if((state_val_32650 === (13))){
var inst_32635 = (state_32649[(9)]);
var inst_32635__$1 = (state_32649[(2)]);
var inst_32636 = cljs.core.some(cljs.core.nil_QMARK_,inst_32635__$1);
var state_32649__$1 = (function (){var statearr_32667 = state_32649;
(statearr_32667[(9)] = inst_32635__$1);

return statearr_32667;
})();
if(cljs.core.truth_(inst_32636)){
var statearr_32668_34234 = state_32649__$1;
(statearr_32668_34234[(1)] = (14));

} else {
var statearr_32669_34235 = state_32649__$1;
(statearr_32669_34235[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32650 === (6))){
var state_32649__$1 = state_32649;
var statearr_32670_34236 = state_32649__$1;
(statearr_32670_34236[(2)] = null);

(statearr_32670_34236[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32650 === (17))){
var inst_32642 = (state_32649[(2)]);
var state_32649__$1 = (function (){var statearr_32672 = state_32649;
(statearr_32672[(10)] = inst_32642);

return statearr_32672;
})();
var statearr_32673_34237 = state_32649__$1;
(statearr_32673_34237[(2)] = null);

(statearr_32673_34237[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32650 === (3))){
var inst_32647 = (state_32649[(2)]);
var state_32649__$1 = state_32649;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32649__$1,inst_32647);
} else {
if((state_val_32650 === (12))){
var _ = (function (){var statearr_32674 = state_32649;
(statearr_32674[(4)] = cljs.core.rest((state_32649[(4)])));

return statearr_32674;
})();
var state_32649__$1 = state_32649;
var ex32671 = (state_32649__$1[(2)]);
var statearr_32675_34238 = state_32649__$1;
(statearr_32675_34238[(5)] = ex32671);


if((ex32671 instanceof Object)){
var statearr_32677_34242 = state_32649__$1;
(statearr_32677_34242[(1)] = (11));

(statearr_32677_34242[(5)] = null);

} else {
throw ex32671;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32650 === (2))){
var inst_32607 = cljs.core.reset_BANG_(dctr,cnt);
var inst_32608 = cnt;
var inst_32609 = (0);
var state_32649__$1 = (function (){var statearr_32678 = state_32649;
(statearr_32678[(7)] = inst_32609);

(statearr_32678[(8)] = inst_32608);

(statearr_32678[(11)] = inst_32607);

return statearr_32678;
})();
var statearr_32679_34243 = state_32649__$1;
(statearr_32679_34243[(2)] = null);

(statearr_32679_34243[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32650 === (11))){
var inst_32614 = (state_32649[(2)]);
var inst_32615 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_32649__$1 = (function (){var statearr_32680 = state_32649;
(statearr_32680[(12)] = inst_32614);

return statearr_32680;
})();
var statearr_32681_34248 = state_32649__$1;
(statearr_32681_34248[(2)] = inst_32615);

(statearr_32681_34248[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32650 === (9))){
var inst_32609 = (state_32649[(7)]);
var _ = (function (){var statearr_32685 = state_32649;
(statearr_32685[(4)] = cljs.core.cons((12),(state_32649[(4)])));

return statearr_32685;
})();
var inst_32621 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_32609) : chs__$1.call(null,inst_32609));
var inst_32622 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_32609) : done.call(null,inst_32609));
var inst_32623 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_32621,inst_32622);
var ___$1 = (function (){var statearr_32689 = state_32649;
(statearr_32689[(4)] = cljs.core.rest((state_32649[(4)])));

return statearr_32689;
})();
var state_32649__$1 = state_32649;
var statearr_32690_34252 = state_32649__$1;
(statearr_32690_34252[(2)] = inst_32623);

(statearr_32690_34252[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32650 === (5))){
var inst_32633 = (state_32649[(2)]);
var state_32649__$1 = (function (){var statearr_32691 = state_32649;
(statearr_32691[(13)] = inst_32633);

return statearr_32691;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32649__$1,(13),dchan);
} else {
if((state_val_32650 === (14))){
var inst_32638 = cljs.core.async.close_BANG_(out);
var state_32649__$1 = state_32649;
var statearr_32692_34258 = state_32649__$1;
(statearr_32692_34258[(2)] = inst_32638);

(statearr_32692_34258[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32650 === (16))){
var inst_32645 = (state_32649[(2)]);
var state_32649__$1 = state_32649;
var statearr_32693_34260 = state_32649__$1;
(statearr_32693_34260[(2)] = inst_32645);

(statearr_32693_34260[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32650 === (10))){
var inst_32609 = (state_32649[(7)]);
var inst_32626 = (state_32649[(2)]);
var inst_32627 = (inst_32609 + (1));
var inst_32609__$1 = inst_32627;
var state_32649__$1 = (function (){var statearr_32694 = state_32649;
(statearr_32694[(7)] = inst_32609__$1);

(statearr_32694[(14)] = inst_32626);

return statearr_32694;
})();
var statearr_32695_34264 = state_32649__$1;
(statearr_32695_34264[(2)] = null);

(statearr_32695_34264[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32650 === (8))){
var inst_32631 = (state_32649[(2)]);
var state_32649__$1 = state_32649;
var statearr_32696_34266 = state_32649__$1;
(statearr_32696_34266[(2)] = inst_32631);

(statearr_32696_34266[(1)] = (5));


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
var cljs$core$async$state_machine__30605__auto__ = null;
var cljs$core$async$state_machine__30605__auto____0 = (function (){
var statearr_32697 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32697[(0)] = cljs$core$async$state_machine__30605__auto__);

(statearr_32697[(1)] = (1));

return statearr_32697;
});
var cljs$core$async$state_machine__30605__auto____1 = (function (state_32649){
while(true){
var ret_value__30606__auto__ = (function (){try{while(true){
var result__30607__auto__ = switch__30604__auto__(state_32649);
if(cljs.core.keyword_identical_QMARK_(result__30607__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30607__auto__;
}
break;
}
}catch (e32698){var ex__30608__auto__ = e32698;
var statearr_32699_34269 = state_32649;
(statearr_32699_34269[(2)] = ex__30608__auto__);


if(cljs.core.seq((state_32649[(4)]))){
var statearr_32700_34273 = state_32649;
(statearr_32700_34273[(1)] = cljs.core.first((state_32649[(4)])));

} else {
throw ex__30608__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30606__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34274 = state_32649;
state_32649 = G__34274;
continue;
} else {
return ret_value__30606__auto__;
}
break;
}
});
cljs$core$async$state_machine__30605__auto__ = function(state_32649){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30605__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30605__auto____1.call(this,state_32649);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30605__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30605__auto____0;
cljs$core$async$state_machine__30605__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30605__auto____1;
return cljs$core$async$state_machine__30605__auto__;
})()
})();
var state__30739__auto__ = (function (){var statearr_32701 = f__30738__auto__();
(statearr_32701[(6)] = c__30737__auto___34229);

return statearr_32701;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30739__auto__);
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
var G__32704 = arguments.length;
switch (G__32704) {
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
var c__30737__auto___34280 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30738__auto__ = (function (){var switch__30604__auto__ = (function (state_32736){
var state_val_32737 = (state_32736[(1)]);
if((state_val_32737 === (7))){
var inst_32716 = (state_32736[(7)]);
var inst_32715 = (state_32736[(8)]);
var inst_32715__$1 = (state_32736[(2)]);
var inst_32716__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32715__$1,(0),null);
var inst_32717 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32715__$1,(1),null);
var inst_32718 = (inst_32716__$1 == null);
var state_32736__$1 = (function (){var statearr_32744 = state_32736;
(statearr_32744[(7)] = inst_32716__$1);

(statearr_32744[(8)] = inst_32715__$1);

(statearr_32744[(9)] = inst_32717);

return statearr_32744;
})();
if(cljs.core.truth_(inst_32718)){
var statearr_32745_34281 = state_32736__$1;
(statearr_32745_34281[(1)] = (8));

} else {
var statearr_32746_34282 = state_32736__$1;
(statearr_32746_34282[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32737 === (1))){
var inst_32705 = cljs.core.vec(chs);
var inst_32706 = inst_32705;
var state_32736__$1 = (function (){var statearr_32747 = state_32736;
(statearr_32747[(10)] = inst_32706);

return statearr_32747;
})();
var statearr_32748_34295 = state_32736__$1;
(statearr_32748_34295[(2)] = null);

(statearr_32748_34295[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32737 === (4))){
var inst_32706 = (state_32736[(10)]);
var state_32736__$1 = state_32736;
return cljs.core.async.ioc_alts_BANG_(state_32736__$1,(7),inst_32706);
} else {
if((state_val_32737 === (6))){
var inst_32732 = (state_32736[(2)]);
var state_32736__$1 = state_32736;
var statearr_32749_34296 = state_32736__$1;
(statearr_32749_34296[(2)] = inst_32732);

(statearr_32749_34296[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32737 === (3))){
var inst_32734 = (state_32736[(2)]);
var state_32736__$1 = state_32736;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32736__$1,inst_32734);
} else {
if((state_val_32737 === (2))){
var inst_32706 = (state_32736[(10)]);
var inst_32708 = cljs.core.count(inst_32706);
var inst_32709 = (inst_32708 > (0));
var state_32736__$1 = state_32736;
if(cljs.core.truth_(inst_32709)){
var statearr_32751_34303 = state_32736__$1;
(statearr_32751_34303[(1)] = (4));

} else {
var statearr_32753_34304 = state_32736__$1;
(statearr_32753_34304[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32737 === (11))){
var inst_32706 = (state_32736[(10)]);
var inst_32725 = (state_32736[(2)]);
var tmp32750 = inst_32706;
var inst_32706__$1 = tmp32750;
var state_32736__$1 = (function (){var statearr_32755 = state_32736;
(statearr_32755[(11)] = inst_32725);

(statearr_32755[(10)] = inst_32706__$1);

return statearr_32755;
})();
var statearr_32756_34306 = state_32736__$1;
(statearr_32756_34306[(2)] = null);

(statearr_32756_34306[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32737 === (9))){
var inst_32716 = (state_32736[(7)]);
var state_32736__$1 = state_32736;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32736__$1,(11),out,inst_32716);
} else {
if((state_val_32737 === (5))){
var inst_32730 = cljs.core.async.close_BANG_(out);
var state_32736__$1 = state_32736;
var statearr_32764_34309 = state_32736__$1;
(statearr_32764_34309[(2)] = inst_32730);

(statearr_32764_34309[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32737 === (10))){
var inst_32728 = (state_32736[(2)]);
var state_32736__$1 = state_32736;
var statearr_32769_34310 = state_32736__$1;
(statearr_32769_34310[(2)] = inst_32728);

(statearr_32769_34310[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32737 === (8))){
var inst_32716 = (state_32736[(7)]);
var inst_32715 = (state_32736[(8)]);
var inst_32706 = (state_32736[(10)]);
var inst_32717 = (state_32736[(9)]);
var inst_32720 = (function (){var cs = inst_32706;
var vec__32711 = inst_32715;
var v = inst_32716;
var c = inst_32717;
return (function (p1__32702_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__32702_SHARP_);
});
})();
var inst_32721 = cljs.core.filterv(inst_32720,inst_32706);
var inst_32706__$1 = inst_32721;
var state_32736__$1 = (function (){var statearr_32773 = state_32736;
(statearr_32773[(10)] = inst_32706__$1);

return statearr_32773;
})();
var statearr_32774_34319 = state_32736__$1;
(statearr_32774_34319[(2)] = null);

(statearr_32774_34319[(1)] = (2));


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
var cljs$core$async$state_machine__30605__auto__ = null;
var cljs$core$async$state_machine__30605__auto____0 = (function (){
var statearr_32779 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32779[(0)] = cljs$core$async$state_machine__30605__auto__);

(statearr_32779[(1)] = (1));

return statearr_32779;
});
var cljs$core$async$state_machine__30605__auto____1 = (function (state_32736){
while(true){
var ret_value__30606__auto__ = (function (){try{while(true){
var result__30607__auto__ = switch__30604__auto__(state_32736);
if(cljs.core.keyword_identical_QMARK_(result__30607__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30607__auto__;
}
break;
}
}catch (e32780){var ex__30608__auto__ = e32780;
var statearr_32781_34320 = state_32736;
(statearr_32781_34320[(2)] = ex__30608__auto__);


if(cljs.core.seq((state_32736[(4)]))){
var statearr_32782_34321 = state_32736;
(statearr_32782_34321[(1)] = cljs.core.first((state_32736[(4)])));

} else {
throw ex__30608__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30606__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34322 = state_32736;
state_32736 = G__34322;
continue;
} else {
return ret_value__30606__auto__;
}
break;
}
});
cljs$core$async$state_machine__30605__auto__ = function(state_32736){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30605__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30605__auto____1.call(this,state_32736);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30605__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30605__auto____0;
cljs$core$async$state_machine__30605__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30605__auto____1;
return cljs$core$async$state_machine__30605__auto__;
})()
})();
var state__30739__auto__ = (function (){var statearr_32783 = f__30738__auto__();
(statearr_32783[(6)] = c__30737__auto___34280);

return statearr_32783;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30739__auto__);
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
var G__32785 = arguments.length;
switch (G__32785) {
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
var c__30737__auto___34330 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30738__auto__ = (function (){var switch__30604__auto__ = (function (state_32810){
var state_val_32811 = (state_32810[(1)]);
if((state_val_32811 === (7))){
var inst_32792 = (state_32810[(7)]);
var inst_32792__$1 = (state_32810[(2)]);
var inst_32793 = (inst_32792__$1 == null);
var inst_32794 = cljs.core.not(inst_32793);
var state_32810__$1 = (function (){var statearr_32813 = state_32810;
(statearr_32813[(7)] = inst_32792__$1);

return statearr_32813;
})();
if(inst_32794){
var statearr_32814_34331 = state_32810__$1;
(statearr_32814_34331[(1)] = (8));

} else {
var statearr_32815_34332 = state_32810__$1;
(statearr_32815_34332[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32811 === (1))){
var inst_32786 = (0);
var state_32810__$1 = (function (){var statearr_32816 = state_32810;
(statearr_32816[(8)] = inst_32786);

return statearr_32816;
})();
var statearr_32817_34333 = state_32810__$1;
(statearr_32817_34333[(2)] = null);

(statearr_32817_34333[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32811 === (4))){
var state_32810__$1 = state_32810;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32810__$1,(7),ch);
} else {
if((state_val_32811 === (6))){
var inst_32805 = (state_32810[(2)]);
var state_32810__$1 = state_32810;
var statearr_32818_34334 = state_32810__$1;
(statearr_32818_34334[(2)] = inst_32805);

(statearr_32818_34334[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32811 === (3))){
var inst_32807 = (state_32810[(2)]);
var inst_32808 = cljs.core.async.close_BANG_(out);
var state_32810__$1 = (function (){var statearr_32820 = state_32810;
(statearr_32820[(9)] = inst_32807);

return statearr_32820;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_32810__$1,inst_32808);
} else {
if((state_val_32811 === (2))){
var inst_32786 = (state_32810[(8)]);
var inst_32788 = (inst_32786 < n);
var state_32810__$1 = state_32810;
if(cljs.core.truth_(inst_32788)){
var statearr_32821_34335 = state_32810__$1;
(statearr_32821_34335[(1)] = (4));

} else {
var statearr_32822_34336 = state_32810__$1;
(statearr_32822_34336[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32811 === (11))){
var inst_32786 = (state_32810[(8)]);
var inst_32797 = (state_32810[(2)]);
var inst_32798 = (inst_32786 + (1));
var inst_32786__$1 = inst_32798;
var state_32810__$1 = (function (){var statearr_32823 = state_32810;
(statearr_32823[(8)] = inst_32786__$1);

(statearr_32823[(10)] = inst_32797);

return statearr_32823;
})();
var statearr_32824_34345 = state_32810__$1;
(statearr_32824_34345[(2)] = null);

(statearr_32824_34345[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32811 === (9))){
var state_32810__$1 = state_32810;
var statearr_32825_34348 = state_32810__$1;
(statearr_32825_34348[(2)] = null);

(statearr_32825_34348[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32811 === (5))){
var state_32810__$1 = state_32810;
var statearr_32826_34350 = state_32810__$1;
(statearr_32826_34350[(2)] = null);

(statearr_32826_34350[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32811 === (10))){
var inst_32802 = (state_32810[(2)]);
var state_32810__$1 = state_32810;
var statearr_32829_34351 = state_32810__$1;
(statearr_32829_34351[(2)] = inst_32802);

(statearr_32829_34351[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32811 === (8))){
var inst_32792 = (state_32810[(7)]);
var state_32810__$1 = state_32810;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32810__$1,(11),out,inst_32792);
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
var cljs$core$async$state_machine__30605__auto__ = null;
var cljs$core$async$state_machine__30605__auto____0 = (function (){
var statearr_32834 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32834[(0)] = cljs$core$async$state_machine__30605__auto__);

(statearr_32834[(1)] = (1));

return statearr_32834;
});
var cljs$core$async$state_machine__30605__auto____1 = (function (state_32810){
while(true){
var ret_value__30606__auto__ = (function (){try{while(true){
var result__30607__auto__ = switch__30604__auto__(state_32810);
if(cljs.core.keyword_identical_QMARK_(result__30607__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30607__auto__;
}
break;
}
}catch (e32836){var ex__30608__auto__ = e32836;
var statearr_32837_34354 = state_32810;
(statearr_32837_34354[(2)] = ex__30608__auto__);


if(cljs.core.seq((state_32810[(4)]))){
var statearr_32842_34356 = state_32810;
(statearr_32842_34356[(1)] = cljs.core.first((state_32810[(4)])));

} else {
throw ex__30608__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30606__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34357 = state_32810;
state_32810 = G__34357;
continue;
} else {
return ret_value__30606__auto__;
}
break;
}
});
cljs$core$async$state_machine__30605__auto__ = function(state_32810){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30605__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30605__auto____1.call(this,state_32810);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30605__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30605__auto____0;
cljs$core$async$state_machine__30605__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30605__auto____1;
return cljs$core$async$state_machine__30605__auto__;
})()
})();
var state__30739__auto__ = (function (){var statearr_32851 = f__30738__auto__();
(statearr_32851[(6)] = c__30737__auto___34330);

return statearr_32851;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30739__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32857 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32857 = (function (f,ch,meta32858){
this.f = f;
this.ch = ch;
this.meta32858 = meta32858;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32857.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32859,meta32858__$1){
var self__ = this;
var _32859__$1 = this;
return (new cljs.core.async.t_cljs$core$async32857(self__.f,self__.ch,meta32858__$1));
}));

(cljs.core.async.t_cljs$core$async32857.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32859){
var self__ = this;
var _32859__$1 = this;
return self__.meta32858;
}));

(cljs.core.async.t_cljs$core$async32857.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32857.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async32857.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async32857.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32857.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32860 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32860 = (function (f,ch,meta32858,_,fn1,meta32861){
this.f = f;
this.ch = ch;
this.meta32858 = meta32858;
this._ = _;
this.fn1 = fn1;
this.meta32861 = meta32861;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32860.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32862,meta32861__$1){
var self__ = this;
var _32862__$1 = this;
return (new cljs.core.async.t_cljs$core$async32860(self__.f,self__.ch,self__.meta32858,self__._,self__.fn1,meta32861__$1));
}));

(cljs.core.async.t_cljs$core$async32860.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32862){
var self__ = this;
var _32862__$1 = this;
return self__.meta32861;
}));

(cljs.core.async.t_cljs$core$async32860.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32860.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async32860.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async32860.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__32856_SHARP_){
var G__32863 = (((p1__32856_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__32856_SHARP_) : self__.f.call(null,p1__32856_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__32863) : f1.call(null,G__32863));
});
}));

(cljs.core.async.t_cljs$core$async32860.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32858","meta32858",-1807962273,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async32857","cljs.core.async/t_cljs$core$async32857",-1935894797,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta32861","meta32861",-1423950003,null)], null);
}));

(cljs.core.async.t_cljs$core$async32860.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32860.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32860");

(cljs.core.async.t_cljs$core$async32860.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async32860");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32860.
 */
cljs.core.async.__GT_t_cljs$core$async32860 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async32860(f__$1,ch__$1,meta32858__$1,___$2,fn1__$1,meta32861){
return (new cljs.core.async.t_cljs$core$async32860(f__$1,ch__$1,meta32858__$1,___$2,fn1__$1,meta32861));
});

}

return (new cljs.core.async.t_cljs$core$async32860(self__.f,self__.ch,self__.meta32858,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4115__auto__ = ret;
if(cljs.core.truth_(and__4115__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4115__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__32866 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__32866) : self__.f.call(null,G__32866));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async32857.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32857.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async32857.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32858","meta32858",-1807962273,null)], null);
}));

(cljs.core.async.t_cljs$core$async32857.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32857.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32857");

(cljs.core.async.t_cljs$core$async32857.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async32857");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32857.
 */
cljs.core.async.__GT_t_cljs$core$async32857 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async32857(f__$1,ch__$1,meta32858){
return (new cljs.core.async.t_cljs$core$async32857(f__$1,ch__$1,meta32858));
});

}

return (new cljs.core.async.t_cljs$core$async32857(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32871 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32871 = (function (f,ch,meta32872){
this.f = f;
this.ch = ch;
this.meta32872 = meta32872;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32871.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32873,meta32872__$1){
var self__ = this;
var _32873__$1 = this;
return (new cljs.core.async.t_cljs$core$async32871(self__.f,self__.ch,meta32872__$1));
}));

(cljs.core.async.t_cljs$core$async32871.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32873){
var self__ = this;
var _32873__$1 = this;
return self__.meta32872;
}));

(cljs.core.async.t_cljs$core$async32871.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32871.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async32871.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32871.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async32871.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32871.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async32871.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32872","meta32872",1917897004,null)], null);
}));

(cljs.core.async.t_cljs$core$async32871.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32871.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32871");

(cljs.core.async.t_cljs$core$async32871.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async32871");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32871.
 */
cljs.core.async.__GT_t_cljs$core$async32871 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async32871(f__$1,ch__$1,meta32872){
return (new cljs.core.async.t_cljs$core$async32871(f__$1,ch__$1,meta32872));
});

}

return (new cljs.core.async.t_cljs$core$async32871(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32881 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32881 = (function (p,ch,meta32882){
this.p = p;
this.ch = ch;
this.meta32882 = meta32882;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32881.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32883,meta32882__$1){
var self__ = this;
var _32883__$1 = this;
return (new cljs.core.async.t_cljs$core$async32881(self__.p,self__.ch,meta32882__$1));
}));

(cljs.core.async.t_cljs$core$async32881.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32883){
var self__ = this;
var _32883__$1 = this;
return self__.meta32882;
}));

(cljs.core.async.t_cljs$core$async32881.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32881.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async32881.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async32881.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32881.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async32881.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32881.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async32881.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32882","meta32882",-802387854,null)], null);
}));

(cljs.core.async.t_cljs$core$async32881.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32881.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32881");

(cljs.core.async.t_cljs$core$async32881.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async32881");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32881.
 */
cljs.core.async.__GT_t_cljs$core$async32881 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async32881(p__$1,ch__$1,meta32882){
return (new cljs.core.async.t_cljs$core$async32881(p__$1,ch__$1,meta32882));
});

}

return (new cljs.core.async.t_cljs$core$async32881(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__32894 = arguments.length;
switch (G__32894) {
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
var c__30737__auto___34389 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30738__auto__ = (function (){var switch__30604__auto__ = (function (state_32920){
var state_val_32921 = (state_32920[(1)]);
if((state_val_32921 === (7))){
var inst_32916 = (state_32920[(2)]);
var state_32920__$1 = state_32920;
var statearr_32922_34390 = state_32920__$1;
(statearr_32922_34390[(2)] = inst_32916);

(statearr_32922_34390[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32921 === (1))){
var state_32920__$1 = state_32920;
var statearr_32923_34391 = state_32920__$1;
(statearr_32923_34391[(2)] = null);

(statearr_32923_34391[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32921 === (4))){
var inst_32899 = (state_32920[(7)]);
var inst_32899__$1 = (state_32920[(2)]);
var inst_32902 = (inst_32899__$1 == null);
var state_32920__$1 = (function (){var statearr_32924 = state_32920;
(statearr_32924[(7)] = inst_32899__$1);

return statearr_32924;
})();
if(cljs.core.truth_(inst_32902)){
var statearr_32925_34392 = state_32920__$1;
(statearr_32925_34392[(1)] = (5));

} else {
var statearr_32927_34393 = state_32920__$1;
(statearr_32927_34393[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32921 === (6))){
var inst_32899 = (state_32920[(7)]);
var inst_32907 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_32899) : p.call(null,inst_32899));
var state_32920__$1 = state_32920;
if(cljs.core.truth_(inst_32907)){
var statearr_32928_34394 = state_32920__$1;
(statearr_32928_34394[(1)] = (8));

} else {
var statearr_32929_34395 = state_32920__$1;
(statearr_32929_34395[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32921 === (3))){
var inst_32918 = (state_32920[(2)]);
var state_32920__$1 = state_32920;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32920__$1,inst_32918);
} else {
if((state_val_32921 === (2))){
var state_32920__$1 = state_32920;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32920__$1,(4),ch);
} else {
if((state_val_32921 === (11))){
var inst_32910 = (state_32920[(2)]);
var state_32920__$1 = state_32920;
var statearr_32930_34399 = state_32920__$1;
(statearr_32930_34399[(2)] = inst_32910);

(statearr_32930_34399[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32921 === (9))){
var state_32920__$1 = state_32920;
var statearr_32931_34400 = state_32920__$1;
(statearr_32931_34400[(2)] = null);

(statearr_32931_34400[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32921 === (5))){
var inst_32904 = cljs.core.async.close_BANG_(out);
var state_32920__$1 = state_32920;
var statearr_32932_34401 = state_32920__$1;
(statearr_32932_34401[(2)] = inst_32904);

(statearr_32932_34401[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32921 === (10))){
var inst_32913 = (state_32920[(2)]);
var state_32920__$1 = (function (){var statearr_32933 = state_32920;
(statearr_32933[(8)] = inst_32913);

return statearr_32933;
})();
var statearr_32934_34402 = state_32920__$1;
(statearr_32934_34402[(2)] = null);

(statearr_32934_34402[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32921 === (8))){
var inst_32899 = (state_32920[(7)]);
var state_32920__$1 = state_32920;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32920__$1,(11),out,inst_32899);
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
var cljs$core$async$state_machine__30605__auto__ = null;
var cljs$core$async$state_machine__30605__auto____0 = (function (){
var statearr_32935 = [null,null,null,null,null,null,null,null,null];
(statearr_32935[(0)] = cljs$core$async$state_machine__30605__auto__);

(statearr_32935[(1)] = (1));

return statearr_32935;
});
var cljs$core$async$state_machine__30605__auto____1 = (function (state_32920){
while(true){
var ret_value__30606__auto__ = (function (){try{while(true){
var result__30607__auto__ = switch__30604__auto__(state_32920);
if(cljs.core.keyword_identical_QMARK_(result__30607__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30607__auto__;
}
break;
}
}catch (e32936){var ex__30608__auto__ = e32936;
var statearr_32937_34410 = state_32920;
(statearr_32937_34410[(2)] = ex__30608__auto__);


if(cljs.core.seq((state_32920[(4)]))){
var statearr_32938_34413 = state_32920;
(statearr_32938_34413[(1)] = cljs.core.first((state_32920[(4)])));

} else {
throw ex__30608__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30606__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34414 = state_32920;
state_32920 = G__34414;
continue;
} else {
return ret_value__30606__auto__;
}
break;
}
});
cljs$core$async$state_machine__30605__auto__ = function(state_32920){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30605__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30605__auto____1.call(this,state_32920);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30605__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30605__auto____0;
cljs$core$async$state_machine__30605__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30605__auto____1;
return cljs$core$async$state_machine__30605__auto__;
})()
})();
var state__30739__auto__ = (function (){var statearr_32939 = f__30738__auto__();
(statearr_32939[(6)] = c__30737__auto___34389);

return statearr_32939;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30739__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__32941 = arguments.length;
switch (G__32941) {
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
var c__30737__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30738__auto__ = (function (){var switch__30604__auto__ = (function (state_33007){
var state_val_33008 = (state_33007[(1)]);
if((state_val_33008 === (7))){
var inst_33003 = (state_33007[(2)]);
var state_33007__$1 = state_33007;
var statearr_33009_34418 = state_33007__$1;
(statearr_33009_34418[(2)] = inst_33003);

(statearr_33009_34418[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33008 === (20))){
var inst_32973 = (state_33007[(7)]);
var inst_32984 = (state_33007[(2)]);
var inst_32985 = cljs.core.next(inst_32973);
var inst_32959 = inst_32985;
var inst_32960 = null;
var inst_32961 = (0);
var inst_32962 = (0);
var state_33007__$1 = (function (){var statearr_33011 = state_33007;
(statearr_33011[(8)] = inst_32961);

(statearr_33011[(9)] = inst_32959);

(statearr_33011[(10)] = inst_32984);

(statearr_33011[(11)] = inst_32960);

(statearr_33011[(12)] = inst_32962);

return statearr_33011;
})();
var statearr_33012_34427 = state_33007__$1;
(statearr_33012_34427[(2)] = null);

(statearr_33012_34427[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33008 === (1))){
var state_33007__$1 = state_33007;
var statearr_33013_34429 = state_33007__$1;
(statearr_33013_34429[(2)] = null);

(statearr_33013_34429[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33008 === (4))){
var inst_32948 = (state_33007[(13)]);
var inst_32948__$1 = (state_33007[(2)]);
var inst_32949 = (inst_32948__$1 == null);
var state_33007__$1 = (function (){var statearr_33014 = state_33007;
(statearr_33014[(13)] = inst_32948__$1);

return statearr_33014;
})();
if(cljs.core.truth_(inst_32949)){
var statearr_33015_34431 = state_33007__$1;
(statearr_33015_34431[(1)] = (5));

} else {
var statearr_33016_34432 = state_33007__$1;
(statearr_33016_34432[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33008 === (15))){
var state_33007__$1 = state_33007;
var statearr_33020_34433 = state_33007__$1;
(statearr_33020_34433[(2)] = null);

(statearr_33020_34433[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33008 === (21))){
var state_33007__$1 = state_33007;
var statearr_33021_34434 = state_33007__$1;
(statearr_33021_34434[(2)] = null);

(statearr_33021_34434[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33008 === (13))){
var inst_32961 = (state_33007[(8)]);
var inst_32959 = (state_33007[(9)]);
var inst_32960 = (state_33007[(11)]);
var inst_32962 = (state_33007[(12)]);
var inst_32969 = (state_33007[(2)]);
var inst_32970 = (inst_32962 + (1));
var tmp33017 = inst_32961;
var tmp33018 = inst_32959;
var tmp33019 = inst_32960;
var inst_32959__$1 = tmp33018;
var inst_32960__$1 = tmp33019;
var inst_32961__$1 = tmp33017;
var inst_32962__$1 = inst_32970;
var state_33007__$1 = (function (){var statearr_33026 = state_33007;
(statearr_33026[(14)] = inst_32969);

(statearr_33026[(8)] = inst_32961__$1);

(statearr_33026[(9)] = inst_32959__$1);

(statearr_33026[(11)] = inst_32960__$1);

(statearr_33026[(12)] = inst_32962__$1);

return statearr_33026;
})();
var statearr_33027_34435 = state_33007__$1;
(statearr_33027_34435[(2)] = null);

(statearr_33027_34435[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33008 === (22))){
var state_33007__$1 = state_33007;
var statearr_33028_34436 = state_33007__$1;
(statearr_33028_34436[(2)] = null);

(statearr_33028_34436[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33008 === (6))){
var inst_32948 = (state_33007[(13)]);
var inst_32957 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_32948) : f.call(null,inst_32948));
var inst_32958 = cljs.core.seq(inst_32957);
var inst_32959 = inst_32958;
var inst_32960 = null;
var inst_32961 = (0);
var inst_32962 = (0);
var state_33007__$1 = (function (){var statearr_33029 = state_33007;
(statearr_33029[(8)] = inst_32961);

(statearr_33029[(9)] = inst_32959);

(statearr_33029[(11)] = inst_32960);

(statearr_33029[(12)] = inst_32962);

return statearr_33029;
})();
var statearr_33030_34445 = state_33007__$1;
(statearr_33030_34445[(2)] = null);

(statearr_33030_34445[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33008 === (17))){
var inst_32973 = (state_33007[(7)]);
var inst_32977 = cljs.core.chunk_first(inst_32973);
var inst_32978 = cljs.core.chunk_rest(inst_32973);
var inst_32979 = cljs.core.count(inst_32977);
var inst_32959 = inst_32978;
var inst_32960 = inst_32977;
var inst_32961 = inst_32979;
var inst_32962 = (0);
var state_33007__$1 = (function (){var statearr_33031 = state_33007;
(statearr_33031[(8)] = inst_32961);

(statearr_33031[(9)] = inst_32959);

(statearr_33031[(11)] = inst_32960);

(statearr_33031[(12)] = inst_32962);

return statearr_33031;
})();
var statearr_33032_34447 = state_33007__$1;
(statearr_33032_34447[(2)] = null);

(statearr_33032_34447[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33008 === (3))){
var inst_33005 = (state_33007[(2)]);
var state_33007__$1 = state_33007;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33007__$1,inst_33005);
} else {
if((state_val_33008 === (12))){
var inst_32993 = (state_33007[(2)]);
var state_33007__$1 = state_33007;
var statearr_33033_34450 = state_33007__$1;
(statearr_33033_34450[(2)] = inst_32993);

(statearr_33033_34450[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33008 === (2))){
var state_33007__$1 = state_33007;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33007__$1,(4),in$);
} else {
if((state_val_33008 === (23))){
var inst_33001 = (state_33007[(2)]);
var state_33007__$1 = state_33007;
var statearr_33034_34452 = state_33007__$1;
(statearr_33034_34452[(2)] = inst_33001);

(statearr_33034_34452[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33008 === (19))){
var inst_32988 = (state_33007[(2)]);
var state_33007__$1 = state_33007;
var statearr_33035_34453 = state_33007__$1;
(statearr_33035_34453[(2)] = inst_32988);

(statearr_33035_34453[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33008 === (11))){
var inst_32973 = (state_33007[(7)]);
var inst_32959 = (state_33007[(9)]);
var inst_32973__$1 = cljs.core.seq(inst_32959);
var state_33007__$1 = (function (){var statearr_33040 = state_33007;
(statearr_33040[(7)] = inst_32973__$1);

return statearr_33040;
})();
if(inst_32973__$1){
var statearr_33041_34456 = state_33007__$1;
(statearr_33041_34456[(1)] = (14));

} else {
var statearr_33042_34457 = state_33007__$1;
(statearr_33042_34457[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33008 === (9))){
var inst_32995 = (state_33007[(2)]);
var inst_32996 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_33007__$1 = (function (){var statearr_33043 = state_33007;
(statearr_33043[(15)] = inst_32995);

return statearr_33043;
})();
if(cljs.core.truth_(inst_32996)){
var statearr_33044_34458 = state_33007__$1;
(statearr_33044_34458[(1)] = (21));

} else {
var statearr_33045_34459 = state_33007__$1;
(statearr_33045_34459[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33008 === (5))){
var inst_32951 = cljs.core.async.close_BANG_(out);
var state_33007__$1 = state_33007;
var statearr_33046_34460 = state_33007__$1;
(statearr_33046_34460[(2)] = inst_32951);

(statearr_33046_34460[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33008 === (14))){
var inst_32973 = (state_33007[(7)]);
var inst_32975 = cljs.core.chunked_seq_QMARK_(inst_32973);
var state_33007__$1 = state_33007;
if(inst_32975){
var statearr_33047_34461 = state_33007__$1;
(statearr_33047_34461[(1)] = (17));

} else {
var statearr_33048_34462 = state_33007__$1;
(statearr_33048_34462[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33008 === (16))){
var inst_32991 = (state_33007[(2)]);
var state_33007__$1 = state_33007;
var statearr_33049_34463 = state_33007__$1;
(statearr_33049_34463[(2)] = inst_32991);

(statearr_33049_34463[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33008 === (10))){
var inst_32960 = (state_33007[(11)]);
var inst_32962 = (state_33007[(12)]);
var inst_32967 = cljs.core._nth(inst_32960,inst_32962);
var state_33007__$1 = state_33007;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33007__$1,(13),out,inst_32967);
} else {
if((state_val_33008 === (18))){
var inst_32973 = (state_33007[(7)]);
var inst_32982 = cljs.core.first(inst_32973);
var state_33007__$1 = state_33007;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33007__$1,(20),out,inst_32982);
} else {
if((state_val_33008 === (8))){
var inst_32961 = (state_33007[(8)]);
var inst_32962 = (state_33007[(12)]);
var inst_32964 = (inst_32962 < inst_32961);
var inst_32965 = inst_32964;
var state_33007__$1 = state_33007;
if(cljs.core.truth_(inst_32965)){
var statearr_33050_34466 = state_33007__$1;
(statearr_33050_34466[(1)] = (10));

} else {
var statearr_33051_34467 = state_33007__$1;
(statearr_33051_34467[(1)] = (11));

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
var cljs$core$async$mapcat_STAR__$_state_machine__30605__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__30605__auto____0 = (function (){
var statearr_33052 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33052[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__30605__auto__);

(statearr_33052[(1)] = (1));

return statearr_33052;
});
var cljs$core$async$mapcat_STAR__$_state_machine__30605__auto____1 = (function (state_33007){
while(true){
var ret_value__30606__auto__ = (function (){try{while(true){
var result__30607__auto__ = switch__30604__auto__(state_33007);
if(cljs.core.keyword_identical_QMARK_(result__30607__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30607__auto__;
}
break;
}
}catch (e33053){var ex__30608__auto__ = e33053;
var statearr_33054_34468 = state_33007;
(statearr_33054_34468[(2)] = ex__30608__auto__);


if(cljs.core.seq((state_33007[(4)]))){
var statearr_33055_34470 = state_33007;
(statearr_33055_34470[(1)] = cljs.core.first((state_33007[(4)])));

} else {
throw ex__30608__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30606__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34471 = state_33007;
state_33007 = G__34471;
continue;
} else {
return ret_value__30606__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__30605__auto__ = function(state_33007){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__30605__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__30605__auto____1.call(this,state_33007);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__30605__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__30605__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__30605__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__30605__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__30605__auto__;
})()
})();
var state__30739__auto__ = (function (){var statearr_33056 = f__30738__auto__();
(statearr_33056[(6)] = c__30737__auto__);

return statearr_33056;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30739__auto__);
}));

return c__30737__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__33058 = arguments.length;
switch (G__33058) {
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
var G__33066 = arguments.length;
switch (G__33066) {
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
var G__33068 = arguments.length;
switch (G__33068) {
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
var c__30737__auto___34478 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30738__auto__ = (function (){var switch__30604__auto__ = (function (state_33102){
var state_val_33103 = (state_33102[(1)]);
if((state_val_33103 === (7))){
var inst_33095 = (state_33102[(2)]);
var state_33102__$1 = state_33102;
var statearr_33104_34480 = state_33102__$1;
(statearr_33104_34480[(2)] = inst_33095);

(statearr_33104_34480[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33103 === (1))){
var inst_33075 = null;
var state_33102__$1 = (function (){var statearr_33105 = state_33102;
(statearr_33105[(7)] = inst_33075);

return statearr_33105;
})();
var statearr_33106_34481 = state_33102__$1;
(statearr_33106_34481[(2)] = null);

(statearr_33106_34481[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33103 === (4))){
var inst_33078 = (state_33102[(8)]);
var inst_33078__$1 = (state_33102[(2)]);
var inst_33079 = (inst_33078__$1 == null);
var inst_33080 = cljs.core.not(inst_33079);
var state_33102__$1 = (function (){var statearr_33109 = state_33102;
(statearr_33109[(8)] = inst_33078__$1);

return statearr_33109;
})();
if(inst_33080){
var statearr_33110_34482 = state_33102__$1;
(statearr_33110_34482[(1)] = (5));

} else {
var statearr_33111_34483 = state_33102__$1;
(statearr_33111_34483[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33103 === (6))){
var state_33102__$1 = state_33102;
var statearr_33116_34484 = state_33102__$1;
(statearr_33116_34484[(2)] = null);

(statearr_33116_34484[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33103 === (3))){
var inst_33097 = (state_33102[(2)]);
var inst_33098 = cljs.core.async.close_BANG_(out);
var state_33102__$1 = (function (){var statearr_33125 = state_33102;
(statearr_33125[(9)] = inst_33097);

return statearr_33125;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_33102__$1,inst_33098);
} else {
if((state_val_33103 === (2))){
var state_33102__$1 = state_33102;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33102__$1,(4),ch);
} else {
if((state_val_33103 === (11))){
var inst_33078 = (state_33102[(8)]);
var inst_33089 = (state_33102[(2)]);
var inst_33075 = inst_33078;
var state_33102__$1 = (function (){var statearr_33126 = state_33102;
(statearr_33126[(10)] = inst_33089);

(statearr_33126[(7)] = inst_33075);

return statearr_33126;
})();
var statearr_33127_34489 = state_33102__$1;
(statearr_33127_34489[(2)] = null);

(statearr_33127_34489[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33103 === (9))){
var inst_33078 = (state_33102[(8)]);
var state_33102__$1 = state_33102;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33102__$1,(11),out,inst_33078);
} else {
if((state_val_33103 === (5))){
var inst_33078 = (state_33102[(8)]);
var inst_33075 = (state_33102[(7)]);
var inst_33084 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_33078,inst_33075);
var state_33102__$1 = state_33102;
if(inst_33084){
var statearr_33138_34490 = state_33102__$1;
(statearr_33138_34490[(1)] = (8));

} else {
var statearr_33139_34491 = state_33102__$1;
(statearr_33139_34491[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33103 === (10))){
var inst_33092 = (state_33102[(2)]);
var state_33102__$1 = state_33102;
var statearr_33140_34492 = state_33102__$1;
(statearr_33140_34492[(2)] = inst_33092);

(statearr_33140_34492[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33103 === (8))){
var inst_33075 = (state_33102[(7)]);
var tmp33134 = inst_33075;
var inst_33075__$1 = tmp33134;
var state_33102__$1 = (function (){var statearr_33141 = state_33102;
(statearr_33141[(7)] = inst_33075__$1);

return statearr_33141;
})();
var statearr_33142_34502 = state_33102__$1;
(statearr_33142_34502[(2)] = null);

(statearr_33142_34502[(1)] = (2));


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
var cljs$core$async$state_machine__30605__auto__ = null;
var cljs$core$async$state_machine__30605__auto____0 = (function (){
var statearr_33150 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_33150[(0)] = cljs$core$async$state_machine__30605__auto__);

(statearr_33150[(1)] = (1));

return statearr_33150;
});
var cljs$core$async$state_machine__30605__auto____1 = (function (state_33102){
while(true){
var ret_value__30606__auto__ = (function (){try{while(true){
var result__30607__auto__ = switch__30604__auto__(state_33102);
if(cljs.core.keyword_identical_QMARK_(result__30607__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30607__auto__;
}
break;
}
}catch (e33155){var ex__30608__auto__ = e33155;
var statearr_33156_34515 = state_33102;
(statearr_33156_34515[(2)] = ex__30608__auto__);


if(cljs.core.seq((state_33102[(4)]))){
var statearr_33157_34516 = state_33102;
(statearr_33157_34516[(1)] = cljs.core.first((state_33102[(4)])));

} else {
throw ex__30608__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30606__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34517 = state_33102;
state_33102 = G__34517;
continue;
} else {
return ret_value__30606__auto__;
}
break;
}
});
cljs$core$async$state_machine__30605__auto__ = function(state_33102){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30605__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30605__auto____1.call(this,state_33102);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30605__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30605__auto____0;
cljs$core$async$state_machine__30605__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30605__auto____1;
return cljs$core$async$state_machine__30605__auto__;
})()
})();
var state__30739__auto__ = (function (){var statearr_33158 = f__30738__auto__();
(statearr_33158[(6)] = c__30737__auto___34478);

return statearr_33158;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30739__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__33162 = arguments.length;
switch (G__33162) {
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
var c__30737__auto___34524 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30738__auto__ = (function (){var switch__30604__auto__ = (function (state_33205){
var state_val_33206 = (state_33205[(1)]);
if((state_val_33206 === (7))){
var inst_33201 = (state_33205[(2)]);
var state_33205__$1 = state_33205;
var statearr_33207_34525 = state_33205__$1;
(statearr_33207_34525[(2)] = inst_33201);

(statearr_33207_34525[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33206 === (1))){
var inst_33165 = (new Array(n));
var inst_33166 = inst_33165;
var inst_33167 = (0);
var state_33205__$1 = (function (){var statearr_33208 = state_33205;
(statearr_33208[(7)] = inst_33167);

(statearr_33208[(8)] = inst_33166);

return statearr_33208;
})();
var statearr_33209_34531 = state_33205__$1;
(statearr_33209_34531[(2)] = null);

(statearr_33209_34531[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33206 === (4))){
var inst_33173 = (state_33205[(9)]);
var inst_33173__$1 = (state_33205[(2)]);
var inst_33174 = (inst_33173__$1 == null);
var inst_33175 = cljs.core.not(inst_33174);
var state_33205__$1 = (function (){var statearr_33210 = state_33205;
(statearr_33210[(9)] = inst_33173__$1);

return statearr_33210;
})();
if(inst_33175){
var statearr_33211_34537 = state_33205__$1;
(statearr_33211_34537[(1)] = (5));

} else {
var statearr_33212_34538 = state_33205__$1;
(statearr_33212_34538[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33206 === (15))){
var inst_33195 = (state_33205[(2)]);
var state_33205__$1 = state_33205;
var statearr_33213_34539 = state_33205__$1;
(statearr_33213_34539[(2)] = inst_33195);

(statearr_33213_34539[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33206 === (13))){
var state_33205__$1 = state_33205;
var statearr_33214_34540 = state_33205__$1;
(statearr_33214_34540[(2)] = null);

(statearr_33214_34540[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33206 === (6))){
var inst_33167 = (state_33205[(7)]);
var inst_33191 = (inst_33167 > (0));
var state_33205__$1 = state_33205;
if(cljs.core.truth_(inst_33191)){
var statearr_33216_34541 = state_33205__$1;
(statearr_33216_34541[(1)] = (12));

} else {
var statearr_33217_34542 = state_33205__$1;
(statearr_33217_34542[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33206 === (3))){
var inst_33203 = (state_33205[(2)]);
var state_33205__$1 = state_33205;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33205__$1,inst_33203);
} else {
if((state_val_33206 === (12))){
var inst_33166 = (state_33205[(8)]);
var inst_33193 = cljs.core.vec(inst_33166);
var state_33205__$1 = state_33205;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33205__$1,(15),out,inst_33193);
} else {
if((state_val_33206 === (2))){
var state_33205__$1 = state_33205;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33205__$1,(4),ch);
} else {
if((state_val_33206 === (11))){
var inst_33185 = (state_33205[(2)]);
var inst_33186 = (new Array(n));
var inst_33166 = inst_33186;
var inst_33167 = (0);
var state_33205__$1 = (function (){var statearr_33218 = state_33205;
(statearr_33218[(7)] = inst_33167);

(statearr_33218[(8)] = inst_33166);

(statearr_33218[(10)] = inst_33185);

return statearr_33218;
})();
var statearr_33219_34543 = state_33205__$1;
(statearr_33219_34543[(2)] = null);

(statearr_33219_34543[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33206 === (9))){
var inst_33166 = (state_33205[(8)]);
var inst_33183 = cljs.core.vec(inst_33166);
var state_33205__$1 = state_33205;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33205__$1,(11),out,inst_33183);
} else {
if((state_val_33206 === (5))){
var inst_33173 = (state_33205[(9)]);
var inst_33178 = (state_33205[(11)]);
var inst_33167 = (state_33205[(7)]);
var inst_33166 = (state_33205[(8)]);
var inst_33177 = (inst_33166[inst_33167] = inst_33173);
var inst_33178__$1 = (inst_33167 + (1));
var inst_33179 = (inst_33178__$1 < n);
var state_33205__$1 = (function (){var statearr_33220 = state_33205;
(statearr_33220[(12)] = inst_33177);

(statearr_33220[(11)] = inst_33178__$1);

return statearr_33220;
})();
if(cljs.core.truth_(inst_33179)){
var statearr_33221_34552 = state_33205__$1;
(statearr_33221_34552[(1)] = (8));

} else {
var statearr_33222_34557 = state_33205__$1;
(statearr_33222_34557[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33206 === (14))){
var inst_33198 = (state_33205[(2)]);
var inst_33199 = cljs.core.async.close_BANG_(out);
var state_33205__$1 = (function (){var statearr_33224 = state_33205;
(statearr_33224[(13)] = inst_33198);

return statearr_33224;
})();
var statearr_33225_34558 = state_33205__$1;
(statearr_33225_34558[(2)] = inst_33199);

(statearr_33225_34558[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33206 === (10))){
var inst_33189 = (state_33205[(2)]);
var state_33205__$1 = state_33205;
var statearr_33226_34559 = state_33205__$1;
(statearr_33226_34559[(2)] = inst_33189);

(statearr_33226_34559[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33206 === (8))){
var inst_33178 = (state_33205[(11)]);
var inst_33166 = (state_33205[(8)]);
var tmp33223 = inst_33166;
var inst_33166__$1 = tmp33223;
var inst_33167 = inst_33178;
var state_33205__$1 = (function (){var statearr_33227 = state_33205;
(statearr_33227[(7)] = inst_33167);

(statearr_33227[(8)] = inst_33166__$1);

return statearr_33227;
})();
var statearr_33228_34568 = state_33205__$1;
(statearr_33228_34568[(2)] = null);

(statearr_33228_34568[(1)] = (2));


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
var cljs$core$async$state_machine__30605__auto__ = null;
var cljs$core$async$state_machine__30605__auto____0 = (function (){
var statearr_33229 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33229[(0)] = cljs$core$async$state_machine__30605__auto__);

(statearr_33229[(1)] = (1));

return statearr_33229;
});
var cljs$core$async$state_machine__30605__auto____1 = (function (state_33205){
while(true){
var ret_value__30606__auto__ = (function (){try{while(true){
var result__30607__auto__ = switch__30604__auto__(state_33205);
if(cljs.core.keyword_identical_QMARK_(result__30607__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30607__auto__;
}
break;
}
}catch (e33230){var ex__30608__auto__ = e33230;
var statearr_33231_34578 = state_33205;
(statearr_33231_34578[(2)] = ex__30608__auto__);


if(cljs.core.seq((state_33205[(4)]))){
var statearr_33232_34579 = state_33205;
(statearr_33232_34579[(1)] = cljs.core.first((state_33205[(4)])));

} else {
throw ex__30608__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30606__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34580 = state_33205;
state_33205 = G__34580;
continue;
} else {
return ret_value__30606__auto__;
}
break;
}
});
cljs$core$async$state_machine__30605__auto__ = function(state_33205){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30605__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30605__auto____1.call(this,state_33205);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30605__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30605__auto____0;
cljs$core$async$state_machine__30605__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30605__auto____1;
return cljs$core$async$state_machine__30605__auto__;
})()
})();
var state__30739__auto__ = (function (){var statearr_33233 = f__30738__auto__();
(statearr_33233[(6)] = c__30737__auto___34524);

return statearr_33233;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30739__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__33240 = arguments.length;
switch (G__33240) {
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
var c__30737__auto___34583 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30738__auto__ = (function (){var switch__30604__auto__ = (function (state_33311){
var state_val_33312 = (state_33311[(1)]);
if((state_val_33312 === (7))){
var inst_33307 = (state_33311[(2)]);
var state_33311__$1 = state_33311;
var statearr_33318_34584 = state_33311__$1;
(statearr_33318_34584[(2)] = inst_33307);

(statearr_33318_34584[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33312 === (1))){
var inst_33268 = [];
var inst_33270 = inst_33268;
var inst_33271 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_33311__$1 = (function (){var statearr_33319 = state_33311;
(statearr_33319[(7)] = inst_33270);

(statearr_33319[(8)] = inst_33271);

return statearr_33319;
})();
var statearr_33320_34585 = state_33311__$1;
(statearr_33320_34585[(2)] = null);

(statearr_33320_34585[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33312 === (4))){
var inst_33274 = (state_33311[(9)]);
var inst_33274__$1 = (state_33311[(2)]);
var inst_33275 = (inst_33274__$1 == null);
var inst_33276 = cljs.core.not(inst_33275);
var state_33311__$1 = (function (){var statearr_33321 = state_33311;
(statearr_33321[(9)] = inst_33274__$1);

return statearr_33321;
})();
if(inst_33276){
var statearr_33323_34594 = state_33311__$1;
(statearr_33323_34594[(1)] = (5));

} else {
var statearr_33324_34599 = state_33311__$1;
(statearr_33324_34599[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33312 === (15))){
var inst_33301 = (state_33311[(2)]);
var state_33311__$1 = state_33311;
var statearr_33325_34600 = state_33311__$1;
(statearr_33325_34600[(2)] = inst_33301);

(statearr_33325_34600[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33312 === (13))){
var state_33311__$1 = state_33311;
var statearr_33326_34602 = state_33311__$1;
(statearr_33326_34602[(2)] = null);

(statearr_33326_34602[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33312 === (6))){
var inst_33270 = (state_33311[(7)]);
var inst_33296 = inst_33270.length;
var inst_33297 = (inst_33296 > (0));
var state_33311__$1 = state_33311;
if(cljs.core.truth_(inst_33297)){
var statearr_33327_34612 = state_33311__$1;
(statearr_33327_34612[(1)] = (12));

} else {
var statearr_33328_34613 = state_33311__$1;
(statearr_33328_34613[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33312 === (3))){
var inst_33309 = (state_33311[(2)]);
var state_33311__$1 = state_33311;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33311__$1,inst_33309);
} else {
if((state_val_33312 === (12))){
var inst_33270 = (state_33311[(7)]);
var inst_33299 = cljs.core.vec(inst_33270);
var state_33311__$1 = state_33311;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33311__$1,(15),out,inst_33299);
} else {
if((state_val_33312 === (2))){
var state_33311__$1 = state_33311;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33311__$1,(4),ch);
} else {
if((state_val_33312 === (11))){
var inst_33274 = (state_33311[(9)]);
var inst_33278 = (state_33311[(10)]);
var inst_33289 = (state_33311[(2)]);
var inst_33290 = [];
var inst_33291 = inst_33290.push(inst_33274);
var inst_33270 = inst_33290;
var inst_33271 = inst_33278;
var state_33311__$1 = (function (){var statearr_33329 = state_33311;
(statearr_33329[(7)] = inst_33270);

(statearr_33329[(11)] = inst_33291);

(statearr_33329[(8)] = inst_33271);

(statearr_33329[(12)] = inst_33289);

return statearr_33329;
})();
var statearr_33334_34617 = state_33311__$1;
(statearr_33334_34617[(2)] = null);

(statearr_33334_34617[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33312 === (9))){
var inst_33270 = (state_33311[(7)]);
var inst_33287 = cljs.core.vec(inst_33270);
var state_33311__$1 = state_33311;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33311__$1,(11),out,inst_33287);
} else {
if((state_val_33312 === (5))){
var inst_33274 = (state_33311[(9)]);
var inst_33271 = (state_33311[(8)]);
var inst_33278 = (state_33311[(10)]);
var inst_33278__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_33274) : f.call(null,inst_33274));
var inst_33279 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_33278__$1,inst_33271);
var inst_33280 = cljs.core.keyword_identical_QMARK_(inst_33271,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_33281 = ((inst_33279) || (inst_33280));
var state_33311__$1 = (function (){var statearr_33350 = state_33311;
(statearr_33350[(10)] = inst_33278__$1);

return statearr_33350;
})();
if(cljs.core.truth_(inst_33281)){
var statearr_33355_34618 = state_33311__$1;
(statearr_33355_34618[(1)] = (8));

} else {
var statearr_33356_34619 = state_33311__$1;
(statearr_33356_34619[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33312 === (14))){
var inst_33304 = (state_33311[(2)]);
var inst_33305 = cljs.core.async.close_BANG_(out);
var state_33311__$1 = (function (){var statearr_33358 = state_33311;
(statearr_33358[(13)] = inst_33304);

return statearr_33358;
})();
var statearr_33359_34620 = state_33311__$1;
(statearr_33359_34620[(2)] = inst_33305);

(statearr_33359_34620[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33312 === (10))){
var inst_33294 = (state_33311[(2)]);
var state_33311__$1 = state_33311;
var statearr_33360_34621 = state_33311__$1;
(statearr_33360_34621[(2)] = inst_33294);

(statearr_33360_34621[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33312 === (8))){
var inst_33274 = (state_33311[(9)]);
var inst_33270 = (state_33311[(7)]);
var inst_33278 = (state_33311[(10)]);
var inst_33283 = inst_33270.push(inst_33274);
var tmp33357 = inst_33270;
var inst_33270__$1 = tmp33357;
var inst_33271 = inst_33278;
var state_33311__$1 = (function (){var statearr_33361 = state_33311;
(statearr_33361[(7)] = inst_33270__$1);

(statearr_33361[(8)] = inst_33271);

(statearr_33361[(14)] = inst_33283);

return statearr_33361;
})();
var statearr_33362_34623 = state_33311__$1;
(statearr_33362_34623[(2)] = null);

(statearr_33362_34623[(1)] = (2));


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
var cljs$core$async$state_machine__30605__auto__ = null;
var cljs$core$async$state_machine__30605__auto____0 = (function (){
var statearr_33363 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33363[(0)] = cljs$core$async$state_machine__30605__auto__);

(statearr_33363[(1)] = (1));

return statearr_33363;
});
var cljs$core$async$state_machine__30605__auto____1 = (function (state_33311){
while(true){
var ret_value__30606__auto__ = (function (){try{while(true){
var result__30607__auto__ = switch__30604__auto__(state_33311);
if(cljs.core.keyword_identical_QMARK_(result__30607__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30607__auto__;
}
break;
}
}catch (e33364){var ex__30608__auto__ = e33364;
var statearr_33366_34629 = state_33311;
(statearr_33366_34629[(2)] = ex__30608__auto__);


if(cljs.core.seq((state_33311[(4)]))){
var statearr_33367_34631 = state_33311;
(statearr_33367_34631[(1)] = cljs.core.first((state_33311[(4)])));

} else {
throw ex__30608__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30606__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34637 = state_33311;
state_33311 = G__34637;
continue;
} else {
return ret_value__30606__auto__;
}
break;
}
});
cljs$core$async$state_machine__30605__auto__ = function(state_33311){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30605__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30605__auto____1.call(this,state_33311);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30605__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30605__auto____0;
cljs$core$async$state_machine__30605__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30605__auto____1;
return cljs$core$async$state_machine__30605__auto__;
})()
})();
var state__30739__auto__ = (function (){var statearr_33368 = f__30738__auto__();
(statearr_33368[(6)] = c__30737__auto___34583);

return statearr_33368;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30739__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
