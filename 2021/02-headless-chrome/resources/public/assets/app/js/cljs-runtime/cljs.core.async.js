goog.provide('cljs.core.async');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__28894 = arguments.length;
switch (G__28894) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async28899 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28899 = (function (f,blockable,meta28900){
this.f = f;
this.blockable = blockable;
this.meta28900 = meta28900;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async28899.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28901,meta28900__$1){
var self__ = this;
var _28901__$1 = this;
return (new cljs.core.async.t_cljs$core$async28899(self__.f,self__.blockable,meta28900__$1));
}));

(cljs.core.async.t_cljs$core$async28899.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28901){
var self__ = this;
var _28901__$1 = this;
return self__.meta28900;
}));

(cljs.core.async.t_cljs$core$async28899.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async28899.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async28899.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async28899.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async28899.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta28900","meta28900",1060130919,null)], null);
}));

(cljs.core.async.t_cljs$core$async28899.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async28899.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28899");

(cljs.core.async.t_cljs$core$async28899.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async28899");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28899.
 */
cljs.core.async.__GT_t_cljs$core$async28899 = (function cljs$core$async$__GT_t_cljs$core$async28899(f__$1,blockable__$1,meta28900){
return (new cljs.core.async.t_cljs$core$async28899(f__$1,blockable__$1,meta28900));
});

}

return (new cljs.core.async.t_cljs$core$async28899(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__28918 = arguments.length;
switch (G__28918) {
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
var G__28928 = arguments.length;
switch (G__28928) {
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
var G__28945 = arguments.length;
switch (G__28945) {
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
var val_31609 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_31609) : fn1.call(null,val_31609));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_31609) : fn1.call(null,val_31609));
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
var G__28956 = arguments.length;
switch (G__28956) {
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
var n__4613__auto___31616 = n;
var x_31617 = (0);
while(true){
if((x_31617 < n__4613__auto___31616)){
(a[x_31617] = x_31617);

var G__31619 = (x_31617 + (1));
x_31617 = G__31619;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async28980 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28980 = (function (flag,meta28981){
this.flag = flag;
this.meta28981 = meta28981;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async28980.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28982,meta28981__$1){
var self__ = this;
var _28982__$1 = this;
return (new cljs.core.async.t_cljs$core$async28980(self__.flag,meta28981__$1));
}));

(cljs.core.async.t_cljs$core$async28980.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28982){
var self__ = this;
var _28982__$1 = this;
return self__.meta28981;
}));

(cljs.core.async.t_cljs$core$async28980.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async28980.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async28980.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async28980.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async28980.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta28981","meta28981",-216478459,null)], null);
}));

(cljs.core.async.t_cljs$core$async28980.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async28980.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28980");

(cljs.core.async.t_cljs$core$async28980.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async28980");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28980.
 */
cljs.core.async.__GT_t_cljs$core$async28980 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async28980(flag__$1,meta28981){
return (new cljs.core.async.t_cljs$core$async28980(flag__$1,meta28981));
});

}

return (new cljs.core.async.t_cljs$core$async28980(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async29005 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29005 = (function (flag,cb,meta29006){
this.flag = flag;
this.cb = cb;
this.meta29006 = meta29006;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async29005.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29007,meta29006__$1){
var self__ = this;
var _29007__$1 = this;
return (new cljs.core.async.t_cljs$core$async29005(self__.flag,self__.cb,meta29006__$1));
}));

(cljs.core.async.t_cljs$core$async29005.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29007){
var self__ = this;
var _29007__$1 = this;
return self__.meta29006;
}));

(cljs.core.async.t_cljs$core$async29005.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async29005.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async29005.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async29005.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async29005.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta29006","meta29006",1648362237,null)], null);
}));

(cljs.core.async.t_cljs$core$async29005.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async29005.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29005");

(cljs.core.async.t_cljs$core$async29005.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async29005");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29005.
 */
cljs.core.async.__GT_t_cljs$core$async29005 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async29005(flag__$1,cb__$1,meta29006){
return (new cljs.core.async.t_cljs$core$async29005(flag__$1,cb__$1,meta29006));
});

}

return (new cljs.core.async.t_cljs$core$async29005(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__29020_SHARP_){
var G__29023 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__29020_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__29023) : fret.call(null,G__29023));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__29021_SHARP_){
var G__29024 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__29021_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__29024) : fret.call(null,G__29024));
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
var G__31635 = (i + (1));
i = G__31635;
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
var len__4736__auto___31637 = arguments.length;
var i__4737__auto___31638 = (0);
while(true){
if((i__4737__auto___31638 < len__4736__auto___31637)){
args__4742__auto__.push((arguments[i__4737__auto___31638]));

var G__31640 = (i__4737__auto___31638 + (1));
i__4737__auto___31638 = G__31640;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__29032){
var map__29033 = p__29032;
var map__29033__$1 = (((((!((map__29033 == null))))?(((((map__29033.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29033.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29033):map__29033);
var opts = map__29033__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq29026){
var G__29027 = cljs.core.first(seq29026);
var seq29026__$1 = cljs.core.next(seq29026);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__29027,seq29026__$1);
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
var G__29046 = arguments.length;
switch (G__29046) {
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
var c__28761__auto___31647 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28762__auto__ = (function (){var switch__28584__auto__ = (function (state_29099){
var state_val_29100 = (state_29099[(1)]);
if((state_val_29100 === (7))){
var inst_29089 = (state_29099[(2)]);
var state_29099__$1 = state_29099;
var statearr_29120_31648 = state_29099__$1;
(statearr_29120_31648[(2)] = inst_29089);

(statearr_29120_31648[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29100 === (1))){
var state_29099__$1 = state_29099;
var statearr_29121_31649 = state_29099__$1;
(statearr_29121_31649[(2)] = null);

(statearr_29121_31649[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29100 === (4))){
var inst_29069 = (state_29099[(7)]);
var inst_29069__$1 = (state_29099[(2)]);
var inst_29070 = (inst_29069__$1 == null);
var state_29099__$1 = (function (){var statearr_29127 = state_29099;
(statearr_29127[(7)] = inst_29069__$1);

return statearr_29127;
})();
if(cljs.core.truth_(inst_29070)){
var statearr_29133_31650 = state_29099__$1;
(statearr_29133_31650[(1)] = (5));

} else {
var statearr_29134_31651 = state_29099__$1;
(statearr_29134_31651[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29100 === (13))){
var state_29099__$1 = state_29099;
var statearr_29140_31652 = state_29099__$1;
(statearr_29140_31652[(2)] = null);

(statearr_29140_31652[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29100 === (6))){
var inst_29069 = (state_29099[(7)]);
var state_29099__$1 = state_29099;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29099__$1,(11),to,inst_29069);
} else {
if((state_val_29100 === (3))){
var inst_29091 = (state_29099[(2)]);
var state_29099__$1 = state_29099;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29099__$1,inst_29091);
} else {
if((state_val_29100 === (12))){
var state_29099__$1 = state_29099;
var statearr_29155_31657 = state_29099__$1;
(statearr_29155_31657[(2)] = null);

(statearr_29155_31657[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29100 === (2))){
var state_29099__$1 = state_29099;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29099__$1,(4),from);
} else {
if((state_val_29100 === (11))){
var inst_29079 = (state_29099[(2)]);
var state_29099__$1 = state_29099;
if(cljs.core.truth_(inst_29079)){
var statearr_29158_31659 = state_29099__$1;
(statearr_29158_31659[(1)] = (12));

} else {
var statearr_29159_31660 = state_29099__$1;
(statearr_29159_31660[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29100 === (9))){
var state_29099__$1 = state_29099;
var statearr_29160_31661 = state_29099__$1;
(statearr_29160_31661[(2)] = null);

(statearr_29160_31661[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29100 === (5))){
var state_29099__$1 = state_29099;
if(cljs.core.truth_(close_QMARK_)){
var statearr_29165_31663 = state_29099__$1;
(statearr_29165_31663[(1)] = (8));

} else {
var statearr_29167_31664 = state_29099__$1;
(statearr_29167_31664[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29100 === (14))){
var inst_29087 = (state_29099[(2)]);
var state_29099__$1 = state_29099;
var statearr_29172_31665 = state_29099__$1;
(statearr_29172_31665[(2)] = inst_29087);

(statearr_29172_31665[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29100 === (10))){
var inst_29076 = (state_29099[(2)]);
var state_29099__$1 = state_29099;
var statearr_29185_31669 = state_29099__$1;
(statearr_29185_31669[(2)] = inst_29076);

(statearr_29185_31669[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29100 === (8))){
var inst_29073 = cljs.core.async.close_BANG_(to);
var state_29099__$1 = state_29099;
var statearr_29187_31671 = state_29099__$1;
(statearr_29187_31671[(2)] = inst_29073);

(statearr_29187_31671[(1)] = (10));


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
var cljs$core$async$state_machine__28585__auto__ = null;
var cljs$core$async$state_machine__28585__auto____0 = (function (){
var statearr_29188 = [null,null,null,null,null,null,null,null];
(statearr_29188[(0)] = cljs$core$async$state_machine__28585__auto__);

(statearr_29188[(1)] = (1));

return statearr_29188;
});
var cljs$core$async$state_machine__28585__auto____1 = (function (state_29099){
while(true){
var ret_value__28586__auto__ = (function (){try{while(true){
var result__28587__auto__ = switch__28584__auto__(state_29099);
if(cljs.core.keyword_identical_QMARK_(result__28587__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28587__auto__;
}
break;
}
}catch (e29189){var ex__28588__auto__ = e29189;
var statearr_29190_31673 = state_29099;
(statearr_29190_31673[(2)] = ex__28588__auto__);


if(cljs.core.seq((state_29099[(4)]))){
var statearr_29191_31675 = state_29099;
(statearr_29191_31675[(1)] = cljs.core.first((state_29099[(4)])));

} else {
throw ex__28588__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28586__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31676 = state_29099;
state_29099 = G__31676;
continue;
} else {
return ret_value__28586__auto__;
}
break;
}
});
cljs$core$async$state_machine__28585__auto__ = function(state_29099){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28585__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28585__auto____1.call(this,state_29099);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28585__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28585__auto____0;
cljs$core$async$state_machine__28585__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28585__auto____1;
return cljs$core$async$state_machine__28585__auto__;
})()
})();
var state__28763__auto__ = (function (){var statearr_29197 = f__28762__auto__();
(statearr_29197[(6)] = c__28761__auto___31647);

return statearr_29197;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28763__auto__);
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
var process = (function (p__29207){
var vec__29208 = p__29207;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29208,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29208,(1),null);
var job = vec__29208;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__28761__auto___31682 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28762__auto__ = (function (){var switch__28584__auto__ = (function (state_29216){
var state_val_29217 = (state_29216[(1)]);
if((state_val_29217 === (1))){
var state_29216__$1 = state_29216;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29216__$1,(2),res,v);
} else {
if((state_val_29217 === (2))){
var inst_29213 = (state_29216[(2)]);
var inst_29214 = cljs.core.async.close_BANG_(res);
var state_29216__$1 = (function (){var statearr_29218 = state_29216;
(statearr_29218[(7)] = inst_29213);

return statearr_29218;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_29216__$1,inst_29214);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28585__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28585__auto____0 = (function (){
var statearr_29219 = [null,null,null,null,null,null,null,null];
(statearr_29219[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28585__auto__);

(statearr_29219[(1)] = (1));

return statearr_29219;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28585__auto____1 = (function (state_29216){
while(true){
var ret_value__28586__auto__ = (function (){try{while(true){
var result__28587__auto__ = switch__28584__auto__(state_29216);
if(cljs.core.keyword_identical_QMARK_(result__28587__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28587__auto__;
}
break;
}
}catch (e29220){var ex__28588__auto__ = e29220;
var statearr_29221_31686 = state_29216;
(statearr_29221_31686[(2)] = ex__28588__auto__);


if(cljs.core.seq((state_29216[(4)]))){
var statearr_29222_31687 = state_29216;
(statearr_29222_31687[(1)] = cljs.core.first((state_29216[(4)])));

} else {
throw ex__28588__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28586__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31688 = state_29216;
state_29216 = G__31688;
continue;
} else {
return ret_value__28586__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28585__auto__ = function(state_29216){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28585__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28585__auto____1.call(this,state_29216);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28585__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28585__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28585__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28585__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28585__auto__;
})()
})();
var state__28763__auto__ = (function (){var statearr_29224 = f__28762__auto__();
(statearr_29224[(6)] = c__28761__auto___31682);

return statearr_29224;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28763__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__29228){
var vec__29232 = p__29228;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29232,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29232,(1),null);
var job = vec__29232;
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
var n__4613__auto___31690 = n;
var __31691 = (0);
while(true){
if((__31691 < n__4613__auto___31690)){
var G__29236_31693 = type;
var G__29236_31694__$1 = (((G__29236_31693 instanceof cljs.core.Keyword))?G__29236_31693.fqn:null);
switch (G__29236_31694__$1) {
case "compute":
var c__28761__auto___31696 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__31691,c__28761__auto___31696,G__29236_31693,G__29236_31694__$1,n__4613__auto___31690,jobs,results,process,async){
return (function (){
var f__28762__auto__ = (function (){var switch__28584__auto__ = ((function (__31691,c__28761__auto___31696,G__29236_31693,G__29236_31694__$1,n__4613__auto___31690,jobs,results,process,async){
return (function (state_29249){
var state_val_29250 = (state_29249[(1)]);
if((state_val_29250 === (1))){
var state_29249__$1 = state_29249;
var statearr_29254_31697 = state_29249__$1;
(statearr_29254_31697[(2)] = null);

(statearr_29254_31697[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29250 === (2))){
var state_29249__$1 = state_29249;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29249__$1,(4),jobs);
} else {
if((state_val_29250 === (3))){
var inst_29247 = (state_29249[(2)]);
var state_29249__$1 = state_29249;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29249__$1,inst_29247);
} else {
if((state_val_29250 === (4))){
var inst_29239 = (state_29249[(2)]);
var inst_29240 = process(inst_29239);
var state_29249__$1 = state_29249;
if(cljs.core.truth_(inst_29240)){
var statearr_29256_31698 = state_29249__$1;
(statearr_29256_31698[(1)] = (5));

} else {
var statearr_29258_31699 = state_29249__$1;
(statearr_29258_31699[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29250 === (5))){
var state_29249__$1 = state_29249;
var statearr_29261_31700 = state_29249__$1;
(statearr_29261_31700[(2)] = null);

(statearr_29261_31700[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29250 === (6))){
var state_29249__$1 = state_29249;
var statearr_29262_31702 = state_29249__$1;
(statearr_29262_31702[(2)] = null);

(statearr_29262_31702[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29250 === (7))){
var inst_29245 = (state_29249[(2)]);
var state_29249__$1 = state_29249;
var statearr_29266_31703 = state_29249__$1;
(statearr_29266_31703[(2)] = inst_29245);

(statearr_29266_31703[(1)] = (3));


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
});})(__31691,c__28761__auto___31696,G__29236_31693,G__29236_31694__$1,n__4613__auto___31690,jobs,results,process,async))
;
return ((function (__31691,switch__28584__auto__,c__28761__auto___31696,G__29236_31693,G__29236_31694__$1,n__4613__auto___31690,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28585__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28585__auto____0 = (function (){
var statearr_29270 = [null,null,null,null,null,null,null];
(statearr_29270[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28585__auto__);

(statearr_29270[(1)] = (1));

return statearr_29270;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28585__auto____1 = (function (state_29249){
while(true){
var ret_value__28586__auto__ = (function (){try{while(true){
var result__28587__auto__ = switch__28584__auto__(state_29249);
if(cljs.core.keyword_identical_QMARK_(result__28587__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28587__auto__;
}
break;
}
}catch (e29271){var ex__28588__auto__ = e29271;
var statearr_29272_31704 = state_29249;
(statearr_29272_31704[(2)] = ex__28588__auto__);


if(cljs.core.seq((state_29249[(4)]))){
var statearr_29273_31705 = state_29249;
(statearr_29273_31705[(1)] = cljs.core.first((state_29249[(4)])));

} else {
throw ex__28588__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28586__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31706 = state_29249;
state_29249 = G__31706;
continue;
} else {
return ret_value__28586__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28585__auto__ = function(state_29249){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28585__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28585__auto____1.call(this,state_29249);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28585__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28585__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28585__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28585__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28585__auto__;
})()
;})(__31691,switch__28584__auto__,c__28761__auto___31696,G__29236_31693,G__29236_31694__$1,n__4613__auto___31690,jobs,results,process,async))
})();
var state__28763__auto__ = (function (){var statearr_29279 = f__28762__auto__();
(statearr_29279[(6)] = c__28761__auto___31696);

return statearr_29279;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28763__auto__);
});})(__31691,c__28761__auto___31696,G__29236_31693,G__29236_31694__$1,n__4613__auto___31690,jobs,results,process,async))
);


break;
case "async":
var c__28761__auto___31711 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__31691,c__28761__auto___31711,G__29236_31693,G__29236_31694__$1,n__4613__auto___31690,jobs,results,process,async){
return (function (){
var f__28762__auto__ = (function (){var switch__28584__auto__ = ((function (__31691,c__28761__auto___31711,G__29236_31693,G__29236_31694__$1,n__4613__auto___31690,jobs,results,process,async){
return (function (state_29298){
var state_val_29299 = (state_29298[(1)]);
if((state_val_29299 === (1))){
var state_29298__$1 = state_29298;
var statearr_29317_31712 = state_29298__$1;
(statearr_29317_31712[(2)] = null);

(statearr_29317_31712[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29299 === (2))){
var state_29298__$1 = state_29298;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29298__$1,(4),jobs);
} else {
if((state_val_29299 === (3))){
var inst_29292 = (state_29298[(2)]);
var state_29298__$1 = state_29298;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29298__$1,inst_29292);
} else {
if((state_val_29299 === (4))){
var inst_29284 = (state_29298[(2)]);
var inst_29285 = async(inst_29284);
var state_29298__$1 = state_29298;
if(cljs.core.truth_(inst_29285)){
var statearr_29333_31714 = state_29298__$1;
(statearr_29333_31714[(1)] = (5));

} else {
var statearr_29334_31715 = state_29298__$1;
(statearr_29334_31715[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29299 === (5))){
var state_29298__$1 = state_29298;
var statearr_29343_31716 = state_29298__$1;
(statearr_29343_31716[(2)] = null);

(statearr_29343_31716[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29299 === (6))){
var state_29298__$1 = state_29298;
var statearr_29350_31717 = state_29298__$1;
(statearr_29350_31717[(2)] = null);

(statearr_29350_31717[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29299 === (7))){
var inst_29290 = (state_29298[(2)]);
var state_29298__$1 = state_29298;
var statearr_29354_31718 = state_29298__$1;
(statearr_29354_31718[(2)] = inst_29290);

(statearr_29354_31718[(1)] = (3));


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
});})(__31691,c__28761__auto___31711,G__29236_31693,G__29236_31694__$1,n__4613__auto___31690,jobs,results,process,async))
;
return ((function (__31691,switch__28584__auto__,c__28761__auto___31711,G__29236_31693,G__29236_31694__$1,n__4613__auto___31690,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28585__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28585__auto____0 = (function (){
var statearr_29363 = [null,null,null,null,null,null,null];
(statearr_29363[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28585__auto__);

(statearr_29363[(1)] = (1));

return statearr_29363;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28585__auto____1 = (function (state_29298){
while(true){
var ret_value__28586__auto__ = (function (){try{while(true){
var result__28587__auto__ = switch__28584__auto__(state_29298);
if(cljs.core.keyword_identical_QMARK_(result__28587__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28587__auto__;
}
break;
}
}catch (e29364){var ex__28588__auto__ = e29364;
var statearr_29365_31719 = state_29298;
(statearr_29365_31719[(2)] = ex__28588__auto__);


if(cljs.core.seq((state_29298[(4)]))){
var statearr_29369_31720 = state_29298;
(statearr_29369_31720[(1)] = cljs.core.first((state_29298[(4)])));

} else {
throw ex__28588__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28586__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31722 = state_29298;
state_29298 = G__31722;
continue;
} else {
return ret_value__28586__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28585__auto__ = function(state_29298){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28585__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28585__auto____1.call(this,state_29298);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28585__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28585__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28585__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28585__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28585__auto__;
})()
;})(__31691,switch__28584__auto__,c__28761__auto___31711,G__29236_31693,G__29236_31694__$1,n__4613__auto___31690,jobs,results,process,async))
})();
var state__28763__auto__ = (function (){var statearr_29371 = f__28762__auto__();
(statearr_29371[(6)] = c__28761__auto___31711);

return statearr_29371;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28763__auto__);
});})(__31691,c__28761__auto___31711,G__29236_31693,G__29236_31694__$1,n__4613__auto___31690,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__29236_31694__$1)].join('')));

}

var G__31724 = (__31691 + (1));
__31691 = G__31724;
continue;
} else {
}
break;
}

var c__28761__auto___31725 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28762__auto__ = (function (){var switch__28584__auto__ = (function (state_29396){
var state_val_29397 = (state_29396[(1)]);
if((state_val_29397 === (7))){
var inst_29392 = (state_29396[(2)]);
var state_29396__$1 = state_29396;
var statearr_29402_31726 = state_29396__$1;
(statearr_29402_31726[(2)] = inst_29392);

(statearr_29402_31726[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29397 === (1))){
var state_29396__$1 = state_29396;
var statearr_29403_31728 = state_29396__$1;
(statearr_29403_31728[(2)] = null);

(statearr_29403_31728[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29397 === (4))){
var inst_29374 = (state_29396[(7)]);
var inst_29374__$1 = (state_29396[(2)]);
var inst_29378 = (inst_29374__$1 == null);
var state_29396__$1 = (function (){var statearr_29404 = state_29396;
(statearr_29404[(7)] = inst_29374__$1);

return statearr_29404;
})();
if(cljs.core.truth_(inst_29378)){
var statearr_29405_31730 = state_29396__$1;
(statearr_29405_31730[(1)] = (5));

} else {
var statearr_29406_31731 = state_29396__$1;
(statearr_29406_31731[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29397 === (6))){
var inst_29374 = (state_29396[(7)]);
var inst_29382 = (state_29396[(8)]);
var inst_29382__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_29383 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_29384 = [inst_29374,inst_29382__$1];
var inst_29385 = (new cljs.core.PersistentVector(null,2,(5),inst_29383,inst_29384,null));
var state_29396__$1 = (function (){var statearr_29407 = state_29396;
(statearr_29407[(8)] = inst_29382__$1);

return statearr_29407;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29396__$1,(8),jobs,inst_29385);
} else {
if((state_val_29397 === (3))){
var inst_29394 = (state_29396[(2)]);
var state_29396__$1 = state_29396;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29396__$1,inst_29394);
} else {
if((state_val_29397 === (2))){
var state_29396__$1 = state_29396;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29396__$1,(4),from);
} else {
if((state_val_29397 === (9))){
var inst_29389 = (state_29396[(2)]);
var state_29396__$1 = (function (){var statearr_29414 = state_29396;
(statearr_29414[(9)] = inst_29389);

return statearr_29414;
})();
var statearr_29415_31739 = state_29396__$1;
(statearr_29415_31739[(2)] = null);

(statearr_29415_31739[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29397 === (5))){
var inst_29380 = cljs.core.async.close_BANG_(jobs);
var state_29396__$1 = state_29396;
var statearr_29419_31740 = state_29396__$1;
(statearr_29419_31740[(2)] = inst_29380);

(statearr_29419_31740[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29397 === (8))){
var inst_29382 = (state_29396[(8)]);
var inst_29387 = (state_29396[(2)]);
var state_29396__$1 = (function (){var statearr_29421 = state_29396;
(statearr_29421[(10)] = inst_29387);

return statearr_29421;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29396__$1,(9),results,inst_29382);
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
var cljs$core$async$pipeline_STAR__$_state_machine__28585__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28585__auto____0 = (function (){
var statearr_29425 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_29425[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28585__auto__);

(statearr_29425[(1)] = (1));

return statearr_29425;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28585__auto____1 = (function (state_29396){
while(true){
var ret_value__28586__auto__ = (function (){try{while(true){
var result__28587__auto__ = switch__28584__auto__(state_29396);
if(cljs.core.keyword_identical_QMARK_(result__28587__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28587__auto__;
}
break;
}
}catch (e29427){var ex__28588__auto__ = e29427;
var statearr_29428_31747 = state_29396;
(statearr_29428_31747[(2)] = ex__28588__auto__);


if(cljs.core.seq((state_29396[(4)]))){
var statearr_29429_31748 = state_29396;
(statearr_29429_31748[(1)] = cljs.core.first((state_29396[(4)])));

} else {
throw ex__28588__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28586__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31750 = state_29396;
state_29396 = G__31750;
continue;
} else {
return ret_value__28586__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28585__auto__ = function(state_29396){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28585__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28585__auto____1.call(this,state_29396);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28585__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28585__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28585__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28585__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28585__auto__;
})()
})();
var state__28763__auto__ = (function (){var statearr_29440 = f__28762__auto__();
(statearr_29440[(6)] = c__28761__auto___31725);

return statearr_29440;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28763__auto__);
}));


var c__28761__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28762__auto__ = (function (){var switch__28584__auto__ = (function (state_29492){
var state_val_29493 = (state_29492[(1)]);
if((state_val_29493 === (7))){
var inst_29486 = (state_29492[(2)]);
var state_29492__$1 = state_29492;
var statearr_29495_31754 = state_29492__$1;
(statearr_29495_31754[(2)] = inst_29486);

(statearr_29495_31754[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29493 === (20))){
var state_29492__$1 = state_29492;
var statearr_29498_31755 = state_29492__$1;
(statearr_29498_31755[(2)] = null);

(statearr_29498_31755[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29493 === (1))){
var state_29492__$1 = state_29492;
var statearr_29502_31756 = state_29492__$1;
(statearr_29502_31756[(2)] = null);

(statearr_29502_31756[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29493 === (4))){
var inst_29444 = (state_29492[(7)]);
var inst_29444__$1 = (state_29492[(2)]);
var inst_29445 = (inst_29444__$1 == null);
var state_29492__$1 = (function (){var statearr_29504 = state_29492;
(statearr_29504[(7)] = inst_29444__$1);

return statearr_29504;
})();
if(cljs.core.truth_(inst_29445)){
var statearr_29508_31764 = state_29492__$1;
(statearr_29508_31764[(1)] = (5));

} else {
var statearr_29509_31765 = state_29492__$1;
(statearr_29509_31765[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29493 === (15))){
var inst_29464 = (state_29492[(8)]);
var state_29492__$1 = state_29492;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29492__$1,(18),to,inst_29464);
} else {
if((state_val_29493 === (21))){
var inst_29481 = (state_29492[(2)]);
var state_29492__$1 = state_29492;
var statearr_29514_31766 = state_29492__$1;
(statearr_29514_31766[(2)] = inst_29481);

(statearr_29514_31766[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29493 === (13))){
var inst_29483 = (state_29492[(2)]);
var state_29492__$1 = (function (){var statearr_29517 = state_29492;
(statearr_29517[(9)] = inst_29483);

return statearr_29517;
})();
var statearr_29520_31770 = state_29492__$1;
(statearr_29520_31770[(2)] = null);

(statearr_29520_31770[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29493 === (6))){
var inst_29444 = (state_29492[(7)]);
var state_29492__$1 = state_29492;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29492__$1,(11),inst_29444);
} else {
if((state_val_29493 === (17))){
var inst_29474 = (state_29492[(2)]);
var state_29492__$1 = state_29492;
if(cljs.core.truth_(inst_29474)){
var statearr_29521_31771 = state_29492__$1;
(statearr_29521_31771[(1)] = (19));

} else {
var statearr_29522_31775 = state_29492__$1;
(statearr_29522_31775[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29493 === (3))){
var inst_29488 = (state_29492[(2)]);
var state_29492__$1 = state_29492;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29492__$1,inst_29488);
} else {
if((state_val_29493 === (12))){
var inst_29459 = (state_29492[(10)]);
var state_29492__$1 = state_29492;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29492__$1,(14),inst_29459);
} else {
if((state_val_29493 === (2))){
var state_29492__$1 = state_29492;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29492__$1,(4),results);
} else {
if((state_val_29493 === (19))){
var state_29492__$1 = state_29492;
var statearr_29525_31776 = state_29492__$1;
(statearr_29525_31776[(2)] = null);

(statearr_29525_31776[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29493 === (11))){
var inst_29459 = (state_29492[(2)]);
var state_29492__$1 = (function (){var statearr_29526 = state_29492;
(statearr_29526[(10)] = inst_29459);

return statearr_29526;
})();
var statearr_29527_31780 = state_29492__$1;
(statearr_29527_31780[(2)] = null);

(statearr_29527_31780[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29493 === (9))){
var state_29492__$1 = state_29492;
var statearr_29528_31781 = state_29492__$1;
(statearr_29528_31781[(2)] = null);

(statearr_29528_31781[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29493 === (5))){
var state_29492__$1 = state_29492;
if(cljs.core.truth_(close_QMARK_)){
var statearr_29529_31782 = state_29492__$1;
(statearr_29529_31782[(1)] = (8));

} else {
var statearr_29530_31783 = state_29492__$1;
(statearr_29530_31783[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29493 === (14))){
var inst_29464 = (state_29492[(8)]);
var inst_29464__$1 = (state_29492[(2)]);
var inst_29467 = (inst_29464__$1 == null);
var inst_29468 = cljs.core.not(inst_29467);
var state_29492__$1 = (function (){var statearr_29539 = state_29492;
(statearr_29539[(8)] = inst_29464__$1);

return statearr_29539;
})();
if(inst_29468){
var statearr_29541_31785 = state_29492__$1;
(statearr_29541_31785[(1)] = (15));

} else {
var statearr_29542_31786 = state_29492__$1;
(statearr_29542_31786[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29493 === (16))){
var state_29492__$1 = state_29492;
var statearr_29543_31787 = state_29492__$1;
(statearr_29543_31787[(2)] = false);

(statearr_29543_31787[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29493 === (10))){
var inst_29455 = (state_29492[(2)]);
var state_29492__$1 = state_29492;
var statearr_29544_31788 = state_29492__$1;
(statearr_29544_31788[(2)] = inst_29455);

(statearr_29544_31788[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29493 === (18))){
var inst_29471 = (state_29492[(2)]);
var state_29492__$1 = state_29492;
var statearr_29545_31789 = state_29492__$1;
(statearr_29545_31789[(2)] = inst_29471);

(statearr_29545_31789[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29493 === (8))){
var inst_29452 = cljs.core.async.close_BANG_(to);
var state_29492__$1 = state_29492;
var statearr_29546_31790 = state_29492__$1;
(statearr_29546_31790[(2)] = inst_29452);

(statearr_29546_31790[(1)] = (10));


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
var cljs$core$async$pipeline_STAR__$_state_machine__28585__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28585__auto____0 = (function (){
var statearr_29550 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_29550[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28585__auto__);

(statearr_29550[(1)] = (1));

return statearr_29550;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28585__auto____1 = (function (state_29492){
while(true){
var ret_value__28586__auto__ = (function (){try{while(true){
var result__28587__auto__ = switch__28584__auto__(state_29492);
if(cljs.core.keyword_identical_QMARK_(result__28587__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28587__auto__;
}
break;
}
}catch (e29551){var ex__28588__auto__ = e29551;
var statearr_29552_31791 = state_29492;
(statearr_29552_31791[(2)] = ex__28588__auto__);


if(cljs.core.seq((state_29492[(4)]))){
var statearr_29553_31796 = state_29492;
(statearr_29553_31796[(1)] = cljs.core.first((state_29492[(4)])));

} else {
throw ex__28588__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28586__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31797 = state_29492;
state_29492 = G__31797;
continue;
} else {
return ret_value__28586__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28585__auto__ = function(state_29492){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28585__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28585__auto____1.call(this,state_29492);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28585__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28585__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28585__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28585__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28585__auto__;
})()
})();
var state__28763__auto__ = (function (){var statearr_29558 = f__28762__auto__();
(statearr_29558[(6)] = c__28761__auto__);

return statearr_29558;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28763__auto__);
}));

return c__28761__auto__;
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
var G__29560 = arguments.length;
switch (G__29560) {
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
var G__29595 = arguments.length;
switch (G__29595) {
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
var G__29612 = arguments.length;
switch (G__29612) {
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
var c__28761__auto___31817 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28762__auto__ = (function (){var switch__28584__auto__ = (function (state_29641){
var state_val_29642 = (state_29641[(1)]);
if((state_val_29642 === (7))){
var inst_29637 = (state_29641[(2)]);
var state_29641__$1 = state_29641;
var statearr_29645_31818 = state_29641__$1;
(statearr_29645_31818[(2)] = inst_29637);

(statearr_29645_31818[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29642 === (1))){
var state_29641__$1 = state_29641;
var statearr_29649_31820 = state_29641__$1;
(statearr_29649_31820[(2)] = null);

(statearr_29649_31820[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29642 === (4))){
var inst_29616 = (state_29641[(7)]);
var inst_29616__$1 = (state_29641[(2)]);
var inst_29617 = (inst_29616__$1 == null);
var state_29641__$1 = (function (){var statearr_29650 = state_29641;
(statearr_29650[(7)] = inst_29616__$1);

return statearr_29650;
})();
if(cljs.core.truth_(inst_29617)){
var statearr_29651_31822 = state_29641__$1;
(statearr_29651_31822[(1)] = (5));

} else {
var statearr_29652_31824 = state_29641__$1;
(statearr_29652_31824[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29642 === (13))){
var state_29641__$1 = state_29641;
var statearr_29654_31825 = state_29641__$1;
(statearr_29654_31825[(2)] = null);

(statearr_29654_31825[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29642 === (6))){
var inst_29616 = (state_29641[(7)]);
var inst_29623 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_29616) : p.call(null,inst_29616));
var state_29641__$1 = state_29641;
if(cljs.core.truth_(inst_29623)){
var statearr_29657_31827 = state_29641__$1;
(statearr_29657_31827[(1)] = (9));

} else {
var statearr_29658_31828 = state_29641__$1;
(statearr_29658_31828[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29642 === (3))){
var inst_29639 = (state_29641[(2)]);
var state_29641__$1 = state_29641;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29641__$1,inst_29639);
} else {
if((state_val_29642 === (12))){
var state_29641__$1 = state_29641;
var statearr_29659_31829 = state_29641__$1;
(statearr_29659_31829[(2)] = null);

(statearr_29659_31829[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29642 === (2))){
var state_29641__$1 = state_29641;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29641__$1,(4),ch);
} else {
if((state_val_29642 === (11))){
var inst_29616 = (state_29641[(7)]);
var inst_29628 = (state_29641[(2)]);
var state_29641__$1 = state_29641;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29641__$1,(8),inst_29628,inst_29616);
} else {
if((state_val_29642 === (9))){
var state_29641__$1 = state_29641;
var statearr_29663_31834 = state_29641__$1;
(statearr_29663_31834[(2)] = tc);

(statearr_29663_31834[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29642 === (5))){
var inst_29620 = cljs.core.async.close_BANG_(tc);
var inst_29621 = cljs.core.async.close_BANG_(fc);
var state_29641__$1 = (function (){var statearr_29664 = state_29641;
(statearr_29664[(8)] = inst_29620);

return statearr_29664;
})();
var statearr_29665_31839 = state_29641__$1;
(statearr_29665_31839[(2)] = inst_29621);

(statearr_29665_31839[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29642 === (14))){
var inst_29635 = (state_29641[(2)]);
var state_29641__$1 = state_29641;
var statearr_29667_31840 = state_29641__$1;
(statearr_29667_31840[(2)] = inst_29635);

(statearr_29667_31840[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29642 === (10))){
var state_29641__$1 = state_29641;
var statearr_29668_31843 = state_29641__$1;
(statearr_29668_31843[(2)] = fc);

(statearr_29668_31843[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29642 === (8))){
var inst_29630 = (state_29641[(2)]);
var state_29641__$1 = state_29641;
if(cljs.core.truth_(inst_29630)){
var statearr_29669_31848 = state_29641__$1;
(statearr_29669_31848[(1)] = (12));

} else {
var statearr_29670_31849 = state_29641__$1;
(statearr_29670_31849[(1)] = (13));

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
var cljs$core$async$state_machine__28585__auto__ = null;
var cljs$core$async$state_machine__28585__auto____0 = (function (){
var statearr_29674 = [null,null,null,null,null,null,null,null,null];
(statearr_29674[(0)] = cljs$core$async$state_machine__28585__auto__);

(statearr_29674[(1)] = (1));

return statearr_29674;
});
var cljs$core$async$state_machine__28585__auto____1 = (function (state_29641){
while(true){
var ret_value__28586__auto__ = (function (){try{while(true){
var result__28587__auto__ = switch__28584__auto__(state_29641);
if(cljs.core.keyword_identical_QMARK_(result__28587__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28587__auto__;
}
break;
}
}catch (e29675){var ex__28588__auto__ = e29675;
var statearr_29676_31864 = state_29641;
(statearr_29676_31864[(2)] = ex__28588__auto__);


if(cljs.core.seq((state_29641[(4)]))){
var statearr_29677_31871 = state_29641;
(statearr_29677_31871[(1)] = cljs.core.first((state_29641[(4)])));

} else {
throw ex__28588__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28586__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31872 = state_29641;
state_29641 = G__31872;
continue;
} else {
return ret_value__28586__auto__;
}
break;
}
});
cljs$core$async$state_machine__28585__auto__ = function(state_29641){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28585__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28585__auto____1.call(this,state_29641);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28585__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28585__auto____0;
cljs$core$async$state_machine__28585__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28585__auto____1;
return cljs$core$async$state_machine__28585__auto__;
})()
})();
var state__28763__auto__ = (function (){var statearr_29678 = f__28762__auto__();
(statearr_29678[(6)] = c__28761__auto___31817);

return statearr_29678;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28763__auto__);
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
var c__28761__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28762__auto__ = (function (){var switch__28584__auto__ = (function (state_29700){
var state_val_29701 = (state_29700[(1)]);
if((state_val_29701 === (7))){
var inst_29696 = (state_29700[(2)]);
var state_29700__$1 = state_29700;
var statearr_29702_31878 = state_29700__$1;
(statearr_29702_31878[(2)] = inst_29696);

(statearr_29702_31878[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29701 === (1))){
var inst_29679 = init;
var inst_29680 = inst_29679;
var state_29700__$1 = (function (){var statearr_29703 = state_29700;
(statearr_29703[(7)] = inst_29680);

return statearr_29703;
})();
var statearr_29704_31883 = state_29700__$1;
(statearr_29704_31883[(2)] = null);

(statearr_29704_31883[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29701 === (4))){
var inst_29683 = (state_29700[(8)]);
var inst_29683__$1 = (state_29700[(2)]);
var inst_29684 = (inst_29683__$1 == null);
var state_29700__$1 = (function (){var statearr_29705 = state_29700;
(statearr_29705[(8)] = inst_29683__$1);

return statearr_29705;
})();
if(cljs.core.truth_(inst_29684)){
var statearr_29706_31886 = state_29700__$1;
(statearr_29706_31886[(1)] = (5));

} else {
var statearr_29707_31888 = state_29700__$1;
(statearr_29707_31888[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29701 === (6))){
var inst_29680 = (state_29700[(7)]);
var inst_29687 = (state_29700[(9)]);
var inst_29683 = (state_29700[(8)]);
var inst_29687__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_29680,inst_29683) : f.call(null,inst_29680,inst_29683));
var inst_29688 = cljs.core.reduced_QMARK_(inst_29687__$1);
var state_29700__$1 = (function (){var statearr_29708 = state_29700;
(statearr_29708[(9)] = inst_29687__$1);

return statearr_29708;
})();
if(inst_29688){
var statearr_29709_31894 = state_29700__$1;
(statearr_29709_31894[(1)] = (8));

} else {
var statearr_29710_31901 = state_29700__$1;
(statearr_29710_31901[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29701 === (3))){
var inst_29698 = (state_29700[(2)]);
var state_29700__$1 = state_29700;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29700__$1,inst_29698);
} else {
if((state_val_29701 === (2))){
var state_29700__$1 = state_29700;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29700__$1,(4),ch);
} else {
if((state_val_29701 === (9))){
var inst_29687 = (state_29700[(9)]);
var inst_29680 = inst_29687;
var state_29700__$1 = (function (){var statearr_29715 = state_29700;
(statearr_29715[(7)] = inst_29680);

return statearr_29715;
})();
var statearr_29716_31906 = state_29700__$1;
(statearr_29716_31906[(2)] = null);

(statearr_29716_31906[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29701 === (5))){
var inst_29680 = (state_29700[(7)]);
var state_29700__$1 = state_29700;
var statearr_29720_31907 = state_29700__$1;
(statearr_29720_31907[(2)] = inst_29680);

(statearr_29720_31907[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29701 === (10))){
var inst_29694 = (state_29700[(2)]);
var state_29700__$1 = state_29700;
var statearr_29721_31908 = state_29700__$1;
(statearr_29721_31908[(2)] = inst_29694);

(statearr_29721_31908[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29701 === (8))){
var inst_29687 = (state_29700[(9)]);
var inst_29690 = cljs.core.deref(inst_29687);
var state_29700__$1 = state_29700;
var statearr_29728_31913 = state_29700__$1;
(statearr_29728_31913[(2)] = inst_29690);

(statearr_29728_31913[(1)] = (10));


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
var cljs$core$async$reduce_$_state_machine__28585__auto__ = null;
var cljs$core$async$reduce_$_state_machine__28585__auto____0 = (function (){
var statearr_29729 = [null,null,null,null,null,null,null,null,null,null];
(statearr_29729[(0)] = cljs$core$async$reduce_$_state_machine__28585__auto__);

(statearr_29729[(1)] = (1));

return statearr_29729;
});
var cljs$core$async$reduce_$_state_machine__28585__auto____1 = (function (state_29700){
while(true){
var ret_value__28586__auto__ = (function (){try{while(true){
var result__28587__auto__ = switch__28584__auto__(state_29700);
if(cljs.core.keyword_identical_QMARK_(result__28587__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28587__auto__;
}
break;
}
}catch (e29730){var ex__28588__auto__ = e29730;
var statearr_29731_31916 = state_29700;
(statearr_29731_31916[(2)] = ex__28588__auto__);


if(cljs.core.seq((state_29700[(4)]))){
var statearr_29732_31917 = state_29700;
(statearr_29732_31917[(1)] = cljs.core.first((state_29700[(4)])));

} else {
throw ex__28588__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28586__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31918 = state_29700;
state_29700 = G__31918;
continue;
} else {
return ret_value__28586__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__28585__auto__ = function(state_29700){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__28585__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__28585__auto____1.call(this,state_29700);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__28585__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__28585__auto____0;
cljs$core$async$reduce_$_state_machine__28585__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__28585__auto____1;
return cljs$core$async$reduce_$_state_machine__28585__auto__;
})()
})();
var state__28763__auto__ = (function (){var statearr_29733 = f__28762__auto__();
(statearr_29733[(6)] = c__28761__auto__);

return statearr_29733;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28763__auto__);
}));

return c__28761__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__28761__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28762__auto__ = (function (){var switch__28584__auto__ = (function (state_29739){
var state_val_29740 = (state_29739[(1)]);
if((state_val_29740 === (1))){
var inst_29734 = cljs.core.async.reduce(f__$1,init,ch);
var state_29739__$1 = state_29739;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29739__$1,(2),inst_29734);
} else {
if((state_val_29740 === (2))){
var inst_29736 = (state_29739[(2)]);
var inst_29737 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_29736) : f__$1.call(null,inst_29736));
var state_29739__$1 = state_29739;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29739__$1,inst_29737);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__28585__auto__ = null;
var cljs$core$async$transduce_$_state_machine__28585__auto____0 = (function (){
var statearr_29741 = [null,null,null,null,null,null,null];
(statearr_29741[(0)] = cljs$core$async$transduce_$_state_machine__28585__auto__);

(statearr_29741[(1)] = (1));

return statearr_29741;
});
var cljs$core$async$transduce_$_state_machine__28585__auto____1 = (function (state_29739){
while(true){
var ret_value__28586__auto__ = (function (){try{while(true){
var result__28587__auto__ = switch__28584__auto__(state_29739);
if(cljs.core.keyword_identical_QMARK_(result__28587__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28587__auto__;
}
break;
}
}catch (e29742){var ex__28588__auto__ = e29742;
var statearr_29743_31929 = state_29739;
(statearr_29743_31929[(2)] = ex__28588__auto__);


if(cljs.core.seq((state_29739[(4)]))){
var statearr_29744_31933 = state_29739;
(statearr_29744_31933[(1)] = cljs.core.first((state_29739[(4)])));

} else {
throw ex__28588__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28586__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31934 = state_29739;
state_29739 = G__31934;
continue;
} else {
return ret_value__28586__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__28585__auto__ = function(state_29739){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__28585__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__28585__auto____1.call(this,state_29739);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__28585__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__28585__auto____0;
cljs$core$async$transduce_$_state_machine__28585__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__28585__auto____1;
return cljs$core$async$transduce_$_state_machine__28585__auto__;
})()
})();
var state__28763__auto__ = (function (){var statearr_29745 = f__28762__auto__();
(statearr_29745[(6)] = c__28761__auto__);

return statearr_29745;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28763__auto__);
}));

return c__28761__auto__;
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
var G__29747 = arguments.length;
switch (G__29747) {
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
var c__28761__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28762__auto__ = (function (){var switch__28584__auto__ = (function (state_29775){
var state_val_29776 = (state_29775[(1)]);
if((state_val_29776 === (7))){
var inst_29757 = (state_29775[(2)]);
var state_29775__$1 = state_29775;
var statearr_29780_31947 = state_29775__$1;
(statearr_29780_31947[(2)] = inst_29757);

(statearr_29780_31947[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29776 === (1))){
var inst_29751 = cljs.core.seq(coll);
var inst_29752 = inst_29751;
var state_29775__$1 = (function (){var statearr_29781 = state_29775;
(statearr_29781[(7)] = inst_29752);

return statearr_29781;
})();
var statearr_29782_31948 = state_29775__$1;
(statearr_29782_31948[(2)] = null);

(statearr_29782_31948[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29776 === (4))){
var inst_29752 = (state_29775[(7)]);
var inst_29755 = cljs.core.first(inst_29752);
var state_29775__$1 = state_29775;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29775__$1,(7),ch,inst_29755);
} else {
if((state_val_29776 === (13))){
var inst_29769 = (state_29775[(2)]);
var state_29775__$1 = state_29775;
var statearr_29783_31953 = state_29775__$1;
(statearr_29783_31953[(2)] = inst_29769);

(statearr_29783_31953[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29776 === (6))){
var inst_29760 = (state_29775[(2)]);
var state_29775__$1 = state_29775;
if(cljs.core.truth_(inst_29760)){
var statearr_29784_31959 = state_29775__$1;
(statearr_29784_31959[(1)] = (8));

} else {
var statearr_29785_31960 = state_29775__$1;
(statearr_29785_31960[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29776 === (3))){
var inst_29773 = (state_29775[(2)]);
var state_29775__$1 = state_29775;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29775__$1,inst_29773);
} else {
if((state_val_29776 === (12))){
var state_29775__$1 = state_29775;
var statearr_29786_31961 = state_29775__$1;
(statearr_29786_31961[(2)] = null);

(statearr_29786_31961[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29776 === (2))){
var inst_29752 = (state_29775[(7)]);
var state_29775__$1 = state_29775;
if(cljs.core.truth_(inst_29752)){
var statearr_29787_31962 = state_29775__$1;
(statearr_29787_31962[(1)] = (4));

} else {
var statearr_29788_31963 = state_29775__$1;
(statearr_29788_31963[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29776 === (11))){
var inst_29766 = cljs.core.async.close_BANG_(ch);
var state_29775__$1 = state_29775;
var statearr_29790_31964 = state_29775__$1;
(statearr_29790_31964[(2)] = inst_29766);

(statearr_29790_31964[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29776 === (9))){
var state_29775__$1 = state_29775;
if(cljs.core.truth_(close_QMARK_)){
var statearr_29795_31965 = state_29775__$1;
(statearr_29795_31965[(1)] = (11));

} else {
var statearr_29797_31966 = state_29775__$1;
(statearr_29797_31966[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29776 === (5))){
var inst_29752 = (state_29775[(7)]);
var state_29775__$1 = state_29775;
var statearr_29800_31967 = state_29775__$1;
(statearr_29800_31967[(2)] = inst_29752);

(statearr_29800_31967[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29776 === (10))){
var inst_29771 = (state_29775[(2)]);
var state_29775__$1 = state_29775;
var statearr_29801_31969 = state_29775__$1;
(statearr_29801_31969[(2)] = inst_29771);

(statearr_29801_31969[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29776 === (8))){
var inst_29752 = (state_29775[(7)]);
var inst_29762 = cljs.core.next(inst_29752);
var inst_29752__$1 = inst_29762;
var state_29775__$1 = (function (){var statearr_29802 = state_29775;
(statearr_29802[(7)] = inst_29752__$1);

return statearr_29802;
})();
var statearr_29803_31972 = state_29775__$1;
(statearr_29803_31972[(2)] = null);

(statearr_29803_31972[(1)] = (2));


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
var cljs$core$async$state_machine__28585__auto__ = null;
var cljs$core$async$state_machine__28585__auto____0 = (function (){
var statearr_29805 = [null,null,null,null,null,null,null,null];
(statearr_29805[(0)] = cljs$core$async$state_machine__28585__auto__);

(statearr_29805[(1)] = (1));

return statearr_29805;
});
var cljs$core$async$state_machine__28585__auto____1 = (function (state_29775){
while(true){
var ret_value__28586__auto__ = (function (){try{while(true){
var result__28587__auto__ = switch__28584__auto__(state_29775);
if(cljs.core.keyword_identical_QMARK_(result__28587__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28587__auto__;
}
break;
}
}catch (e29806){var ex__28588__auto__ = e29806;
var statearr_29807_31978 = state_29775;
(statearr_29807_31978[(2)] = ex__28588__auto__);


if(cljs.core.seq((state_29775[(4)]))){
var statearr_29808_31979 = state_29775;
(statearr_29808_31979[(1)] = cljs.core.first((state_29775[(4)])));

} else {
throw ex__28588__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28586__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31980 = state_29775;
state_29775 = G__31980;
continue;
} else {
return ret_value__28586__auto__;
}
break;
}
});
cljs$core$async$state_machine__28585__auto__ = function(state_29775){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28585__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28585__auto____1.call(this,state_29775);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28585__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28585__auto____0;
cljs$core$async$state_machine__28585__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28585__auto____1;
return cljs$core$async$state_machine__28585__auto__;
})()
})();
var state__28763__auto__ = (function (){var statearr_29813 = f__28762__auto__();
(statearr_29813[(6)] = c__28761__auto__);

return statearr_29813;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28763__auto__);
}));

return c__28761__auto__;
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
var G__29815 = arguments.length;
switch (G__29815) {
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

var cljs$core$async$Mux$muxch_STAR_$dyn_31984 = (function (_){
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
return cljs$core$async$Mux$muxch_STAR_$dyn_31984(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_31987 = (function (m,ch,close_QMARK_){
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
return cljs$core$async$Mult$tap_STAR_$dyn_31987(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_31990 = (function (m,ch){
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
return cljs$core$async$Mult$untap_STAR_$dyn_31990(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_31992 = (function (m){
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
return cljs$core$async$Mult$untap_all_STAR_$dyn_31992(m);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async29863 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29863 = (function (ch,cs,meta29864){
this.ch = ch;
this.cs = cs;
this.meta29864 = meta29864;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async29863.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29865,meta29864__$1){
var self__ = this;
var _29865__$1 = this;
return (new cljs.core.async.t_cljs$core$async29863(self__.ch,self__.cs,meta29864__$1));
}));

(cljs.core.async.t_cljs$core$async29863.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29865){
var self__ = this;
var _29865__$1 = this;
return self__.meta29864;
}));

(cljs.core.async.t_cljs$core$async29863.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async29863.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async29863.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async29863.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async29863.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async29863.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async29863.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta29864","meta29864",-531688993,null)], null);
}));

(cljs.core.async.t_cljs$core$async29863.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async29863.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29863");

(cljs.core.async.t_cljs$core$async29863.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async29863");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29863.
 */
cljs.core.async.__GT_t_cljs$core$async29863 = (function cljs$core$async$mult_$___GT_t_cljs$core$async29863(ch__$1,cs__$1,meta29864){
return (new cljs.core.async.t_cljs$core$async29863(ch__$1,cs__$1,meta29864));
});

}

return (new cljs.core.async.t_cljs$core$async29863(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__28761__auto___31995 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28762__auto__ = (function (){var switch__28584__auto__ = (function (state_30034){
var state_val_30035 = (state_30034[(1)]);
if((state_val_30035 === (7))){
var inst_30028 = (state_30034[(2)]);
var state_30034__$1 = state_30034;
var statearr_30041_31996 = state_30034__$1;
(statearr_30041_31996[(2)] = inst_30028);

(statearr_30041_31996[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30035 === (20))){
var inst_29924 = (state_30034[(7)]);
var inst_29937 = cljs.core.first(inst_29924);
var inst_29938 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_29937,(0),null);
var inst_29939 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_29937,(1),null);
var state_30034__$1 = (function (){var statearr_30049 = state_30034;
(statearr_30049[(8)] = inst_29938);

return statearr_30049;
})();
if(cljs.core.truth_(inst_29939)){
var statearr_30050_31997 = state_30034__$1;
(statearr_30050_31997[(1)] = (22));

} else {
var statearr_30051_31998 = state_30034__$1;
(statearr_30051_31998[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30035 === (27))){
var inst_29976 = (state_30034[(9)]);
var inst_29981 = (state_30034[(10)]);
var inst_29889 = (state_30034[(11)]);
var inst_29974 = (state_30034[(12)]);
var inst_29981__$1 = cljs.core._nth(inst_29974,inst_29976);
var inst_29982 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_29981__$1,inst_29889,done);
var state_30034__$1 = (function (){var statearr_30055 = state_30034;
(statearr_30055[(10)] = inst_29981__$1);

return statearr_30055;
})();
if(cljs.core.truth_(inst_29982)){
var statearr_30056_32005 = state_30034__$1;
(statearr_30056_32005[(1)] = (30));

} else {
var statearr_30057_32006 = state_30034__$1;
(statearr_30057_32006[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30035 === (1))){
var state_30034__$1 = state_30034;
var statearr_30060_32007 = state_30034__$1;
(statearr_30060_32007[(2)] = null);

(statearr_30060_32007[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30035 === (24))){
var inst_29924 = (state_30034[(7)]);
var inst_29949 = (state_30034[(2)]);
var inst_29950 = cljs.core.next(inst_29924);
var inst_29898 = inst_29950;
var inst_29899 = null;
var inst_29900 = (0);
var inst_29901 = (0);
var state_30034__$1 = (function (){var statearr_30062 = state_30034;
(statearr_30062[(13)] = inst_29901);

(statearr_30062[(14)] = inst_29900);

(statearr_30062[(15)] = inst_29899);

(statearr_30062[(16)] = inst_29949);

(statearr_30062[(17)] = inst_29898);

return statearr_30062;
})();
var statearr_30063_32008 = state_30034__$1;
(statearr_30063_32008[(2)] = null);

(statearr_30063_32008[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30035 === (39))){
var state_30034__$1 = state_30034;
var statearr_30069_32013 = state_30034__$1;
(statearr_30069_32013[(2)] = null);

(statearr_30069_32013[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30035 === (4))){
var inst_29889 = (state_30034[(11)]);
var inst_29889__$1 = (state_30034[(2)]);
var inst_29890 = (inst_29889__$1 == null);
var state_30034__$1 = (function (){var statearr_30071 = state_30034;
(statearr_30071[(11)] = inst_29889__$1);

return statearr_30071;
})();
if(cljs.core.truth_(inst_29890)){
var statearr_30074_32014 = state_30034__$1;
(statearr_30074_32014[(1)] = (5));

} else {
var statearr_30075_32015 = state_30034__$1;
(statearr_30075_32015[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30035 === (15))){
var inst_29901 = (state_30034[(13)]);
var inst_29900 = (state_30034[(14)]);
var inst_29899 = (state_30034[(15)]);
var inst_29898 = (state_30034[(17)]);
var inst_29918 = (state_30034[(2)]);
var inst_29920 = (inst_29901 + (1));
var tmp30065 = inst_29900;
var tmp30066 = inst_29899;
var tmp30067 = inst_29898;
var inst_29898__$1 = tmp30067;
var inst_29899__$1 = tmp30066;
var inst_29900__$1 = tmp30065;
var inst_29901__$1 = inst_29920;
var state_30034__$1 = (function (){var statearr_30079 = state_30034;
(statearr_30079[(13)] = inst_29901__$1);

(statearr_30079[(14)] = inst_29900__$1);

(statearr_30079[(15)] = inst_29899__$1);

(statearr_30079[(18)] = inst_29918);

(statearr_30079[(17)] = inst_29898__$1);

return statearr_30079;
})();
var statearr_30080_32025 = state_30034__$1;
(statearr_30080_32025[(2)] = null);

(statearr_30080_32025[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30035 === (21))){
var inst_29953 = (state_30034[(2)]);
var state_30034__$1 = state_30034;
var statearr_30089_32029 = state_30034__$1;
(statearr_30089_32029[(2)] = inst_29953);

(statearr_30089_32029[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30035 === (31))){
var inst_29981 = (state_30034[(10)]);
var inst_29985 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_29981);
var state_30034__$1 = state_30034;
var statearr_30092_32050 = state_30034__$1;
(statearr_30092_32050[(2)] = inst_29985);

(statearr_30092_32050[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30035 === (32))){
var inst_29976 = (state_30034[(9)]);
var inst_29975 = (state_30034[(19)]);
var inst_29974 = (state_30034[(12)]);
var inst_29973 = (state_30034[(20)]);
var inst_29987 = (state_30034[(2)]);
var inst_29988 = (inst_29976 + (1));
var tmp30085 = inst_29975;
var tmp30086 = inst_29974;
var tmp30087 = inst_29973;
var inst_29973__$1 = tmp30087;
var inst_29974__$1 = tmp30086;
var inst_29975__$1 = tmp30085;
var inst_29976__$1 = inst_29988;
var state_30034__$1 = (function (){var statearr_30095 = state_30034;
(statearr_30095[(9)] = inst_29976__$1);

(statearr_30095[(19)] = inst_29975__$1);

(statearr_30095[(21)] = inst_29987);

(statearr_30095[(12)] = inst_29974__$1);

(statearr_30095[(20)] = inst_29973__$1);

return statearr_30095;
})();
var statearr_30098_32057 = state_30034__$1;
(statearr_30098_32057[(2)] = null);

(statearr_30098_32057[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30035 === (40))){
var inst_30001 = (state_30034[(22)]);
var inst_30005 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_30001);
var state_30034__$1 = state_30034;
var statearr_30100_32061 = state_30034__$1;
(statearr_30100_32061[(2)] = inst_30005);

(statearr_30100_32061[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30035 === (33))){
var inst_29991 = (state_30034[(23)]);
var inst_29994 = cljs.core.chunked_seq_QMARK_(inst_29991);
var state_30034__$1 = state_30034;
if(inst_29994){
var statearr_30101_32062 = state_30034__$1;
(statearr_30101_32062[(1)] = (36));

} else {
var statearr_30102_32063 = state_30034__$1;
(statearr_30102_32063[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30035 === (13))){
var inst_29912 = (state_30034[(24)]);
var inst_29915 = cljs.core.async.close_BANG_(inst_29912);
var state_30034__$1 = state_30034;
var statearr_30104_32067 = state_30034__$1;
(statearr_30104_32067[(2)] = inst_29915);

(statearr_30104_32067[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30035 === (22))){
var inst_29938 = (state_30034[(8)]);
var inst_29946 = cljs.core.async.close_BANG_(inst_29938);
var state_30034__$1 = state_30034;
var statearr_30106_32068 = state_30034__$1;
(statearr_30106_32068[(2)] = inst_29946);

(statearr_30106_32068[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30035 === (36))){
var inst_29991 = (state_30034[(23)]);
var inst_29996 = cljs.core.chunk_first(inst_29991);
var inst_29997 = cljs.core.chunk_rest(inst_29991);
var inst_29998 = cljs.core.count(inst_29996);
var inst_29973 = inst_29997;
var inst_29974 = inst_29996;
var inst_29975 = inst_29998;
var inst_29976 = (0);
var state_30034__$1 = (function (){var statearr_30108 = state_30034;
(statearr_30108[(9)] = inst_29976);

(statearr_30108[(19)] = inst_29975);

(statearr_30108[(12)] = inst_29974);

(statearr_30108[(20)] = inst_29973);

return statearr_30108;
})();
var statearr_30110_32072 = state_30034__$1;
(statearr_30110_32072[(2)] = null);

(statearr_30110_32072[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30035 === (41))){
var inst_29991 = (state_30034[(23)]);
var inst_30007 = (state_30034[(2)]);
var inst_30008 = cljs.core.next(inst_29991);
var inst_29973 = inst_30008;
var inst_29974 = null;
var inst_29975 = (0);
var inst_29976 = (0);
var state_30034__$1 = (function (){var statearr_30113 = state_30034;
(statearr_30113[(9)] = inst_29976);

(statearr_30113[(19)] = inst_29975);

(statearr_30113[(12)] = inst_29974);

(statearr_30113[(25)] = inst_30007);

(statearr_30113[(20)] = inst_29973);

return statearr_30113;
})();
var statearr_30115_32085 = state_30034__$1;
(statearr_30115_32085[(2)] = null);

(statearr_30115_32085[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30035 === (43))){
var state_30034__$1 = state_30034;
var statearr_30118_32086 = state_30034__$1;
(statearr_30118_32086[(2)] = null);

(statearr_30118_32086[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30035 === (29))){
var inst_30016 = (state_30034[(2)]);
var state_30034__$1 = state_30034;
var statearr_30120_32091 = state_30034__$1;
(statearr_30120_32091[(2)] = inst_30016);

(statearr_30120_32091[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30035 === (44))){
var inst_30025 = (state_30034[(2)]);
var state_30034__$1 = (function (){var statearr_30123 = state_30034;
(statearr_30123[(26)] = inst_30025);

return statearr_30123;
})();
var statearr_30124_32094 = state_30034__$1;
(statearr_30124_32094[(2)] = null);

(statearr_30124_32094[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30035 === (6))){
var inst_29965 = (state_30034[(27)]);
var inst_29964 = cljs.core.deref(cs);
var inst_29965__$1 = cljs.core.keys(inst_29964);
var inst_29966 = cljs.core.count(inst_29965__$1);
var inst_29967 = cljs.core.reset_BANG_(dctr,inst_29966);
var inst_29972 = cljs.core.seq(inst_29965__$1);
var inst_29973 = inst_29972;
var inst_29974 = null;
var inst_29975 = (0);
var inst_29976 = (0);
var state_30034__$1 = (function (){var statearr_30127 = state_30034;
(statearr_30127[(9)] = inst_29976);

(statearr_30127[(19)] = inst_29975);

(statearr_30127[(27)] = inst_29965__$1);

(statearr_30127[(12)] = inst_29974);

(statearr_30127[(28)] = inst_29967);

(statearr_30127[(20)] = inst_29973);

return statearr_30127;
})();
var statearr_30129_32098 = state_30034__$1;
(statearr_30129_32098[(2)] = null);

(statearr_30129_32098[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30035 === (28))){
var inst_29991 = (state_30034[(23)]);
var inst_29973 = (state_30034[(20)]);
var inst_29991__$1 = cljs.core.seq(inst_29973);
var state_30034__$1 = (function (){var statearr_30138 = state_30034;
(statearr_30138[(23)] = inst_29991__$1);

return statearr_30138;
})();
if(inst_29991__$1){
var statearr_30140_32099 = state_30034__$1;
(statearr_30140_32099[(1)] = (33));

} else {
var statearr_30141_32100 = state_30034__$1;
(statearr_30141_32100[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30035 === (25))){
var inst_29976 = (state_30034[(9)]);
var inst_29975 = (state_30034[(19)]);
var inst_29978 = (inst_29976 < inst_29975);
var inst_29979 = inst_29978;
var state_30034__$1 = state_30034;
if(cljs.core.truth_(inst_29979)){
var statearr_30142_32101 = state_30034__$1;
(statearr_30142_32101[(1)] = (27));

} else {
var statearr_30143_32102 = state_30034__$1;
(statearr_30143_32102[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30035 === (34))){
var state_30034__$1 = state_30034;
var statearr_30145_32103 = state_30034__$1;
(statearr_30145_32103[(2)] = null);

(statearr_30145_32103[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30035 === (17))){
var state_30034__$1 = state_30034;
var statearr_30146_32104 = state_30034__$1;
(statearr_30146_32104[(2)] = null);

(statearr_30146_32104[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30035 === (3))){
var inst_30030 = (state_30034[(2)]);
var state_30034__$1 = state_30034;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30034__$1,inst_30030);
} else {
if((state_val_30035 === (12))){
var inst_29958 = (state_30034[(2)]);
var state_30034__$1 = state_30034;
var statearr_30150_32105 = state_30034__$1;
(statearr_30150_32105[(2)] = inst_29958);

(statearr_30150_32105[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30035 === (2))){
var state_30034__$1 = state_30034;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30034__$1,(4),ch);
} else {
if((state_val_30035 === (23))){
var state_30034__$1 = state_30034;
var statearr_30153_32106 = state_30034__$1;
(statearr_30153_32106[(2)] = null);

(statearr_30153_32106[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30035 === (35))){
var inst_30014 = (state_30034[(2)]);
var state_30034__$1 = state_30034;
var statearr_30155_32111 = state_30034__$1;
(statearr_30155_32111[(2)] = inst_30014);

(statearr_30155_32111[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30035 === (19))){
var inst_29924 = (state_30034[(7)]);
var inst_29928 = cljs.core.chunk_first(inst_29924);
var inst_29929 = cljs.core.chunk_rest(inst_29924);
var inst_29930 = cljs.core.count(inst_29928);
var inst_29898 = inst_29929;
var inst_29899 = inst_29928;
var inst_29900 = inst_29930;
var inst_29901 = (0);
var state_30034__$1 = (function (){var statearr_30157 = state_30034;
(statearr_30157[(13)] = inst_29901);

(statearr_30157[(14)] = inst_29900);

(statearr_30157[(15)] = inst_29899);

(statearr_30157[(17)] = inst_29898);

return statearr_30157;
})();
var statearr_30158_32112 = state_30034__$1;
(statearr_30158_32112[(2)] = null);

(statearr_30158_32112[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30035 === (11))){
var inst_29924 = (state_30034[(7)]);
var inst_29898 = (state_30034[(17)]);
var inst_29924__$1 = cljs.core.seq(inst_29898);
var state_30034__$1 = (function (){var statearr_30166 = state_30034;
(statearr_30166[(7)] = inst_29924__$1);

return statearr_30166;
})();
if(inst_29924__$1){
var statearr_30167_32113 = state_30034__$1;
(statearr_30167_32113[(1)] = (16));

} else {
var statearr_30169_32114 = state_30034__$1;
(statearr_30169_32114[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30035 === (9))){
var inst_29960 = (state_30034[(2)]);
var state_30034__$1 = state_30034;
var statearr_30170_32115 = state_30034__$1;
(statearr_30170_32115[(2)] = inst_29960);

(statearr_30170_32115[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30035 === (5))){
var inst_29896 = cljs.core.deref(cs);
var inst_29897 = cljs.core.seq(inst_29896);
var inst_29898 = inst_29897;
var inst_29899 = null;
var inst_29900 = (0);
var inst_29901 = (0);
var state_30034__$1 = (function (){var statearr_30172 = state_30034;
(statearr_30172[(13)] = inst_29901);

(statearr_30172[(14)] = inst_29900);

(statearr_30172[(15)] = inst_29899);

(statearr_30172[(17)] = inst_29898);

return statearr_30172;
})();
var statearr_30173_32120 = state_30034__$1;
(statearr_30173_32120[(2)] = null);

(statearr_30173_32120[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30035 === (14))){
var state_30034__$1 = state_30034;
var statearr_30175_32121 = state_30034__$1;
(statearr_30175_32121[(2)] = null);

(statearr_30175_32121[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30035 === (45))){
var inst_30022 = (state_30034[(2)]);
var state_30034__$1 = state_30034;
var statearr_30176_32125 = state_30034__$1;
(statearr_30176_32125[(2)] = inst_30022);

(statearr_30176_32125[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30035 === (26))){
var inst_29965 = (state_30034[(27)]);
var inst_30018 = (state_30034[(2)]);
var inst_30019 = cljs.core.seq(inst_29965);
var state_30034__$1 = (function (){var statearr_30181 = state_30034;
(statearr_30181[(29)] = inst_30018);

return statearr_30181;
})();
if(inst_30019){
var statearr_30182_32130 = state_30034__$1;
(statearr_30182_32130[(1)] = (42));

} else {
var statearr_30184_32131 = state_30034__$1;
(statearr_30184_32131[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30035 === (16))){
var inst_29924 = (state_30034[(7)]);
var inst_29926 = cljs.core.chunked_seq_QMARK_(inst_29924);
var state_30034__$1 = state_30034;
if(inst_29926){
var statearr_30188_32132 = state_30034__$1;
(statearr_30188_32132[(1)] = (19));

} else {
var statearr_30189_32133 = state_30034__$1;
(statearr_30189_32133[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30035 === (38))){
var inst_30011 = (state_30034[(2)]);
var state_30034__$1 = state_30034;
var statearr_30191_32134 = state_30034__$1;
(statearr_30191_32134[(2)] = inst_30011);

(statearr_30191_32134[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30035 === (30))){
var state_30034__$1 = state_30034;
var statearr_30192_32135 = state_30034__$1;
(statearr_30192_32135[(2)] = null);

(statearr_30192_32135[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30035 === (10))){
var inst_29901 = (state_30034[(13)]);
var inst_29899 = (state_30034[(15)]);
var inst_29911 = cljs.core._nth(inst_29899,inst_29901);
var inst_29912 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_29911,(0),null);
var inst_29913 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_29911,(1),null);
var state_30034__$1 = (function (){var statearr_30193 = state_30034;
(statearr_30193[(24)] = inst_29912);

return statearr_30193;
})();
if(cljs.core.truth_(inst_29913)){
var statearr_30197_32137 = state_30034__$1;
(statearr_30197_32137[(1)] = (13));

} else {
var statearr_30198_32138 = state_30034__$1;
(statearr_30198_32138[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30035 === (18))){
var inst_29956 = (state_30034[(2)]);
var state_30034__$1 = state_30034;
var statearr_30199_32139 = state_30034__$1;
(statearr_30199_32139[(2)] = inst_29956);

(statearr_30199_32139[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30035 === (42))){
var state_30034__$1 = state_30034;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30034__$1,(45),dchan);
} else {
if((state_val_30035 === (37))){
var inst_29991 = (state_30034[(23)]);
var inst_30001 = (state_30034[(22)]);
var inst_29889 = (state_30034[(11)]);
var inst_30001__$1 = cljs.core.first(inst_29991);
var inst_30002 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_30001__$1,inst_29889,done);
var state_30034__$1 = (function (){var statearr_30204 = state_30034;
(statearr_30204[(22)] = inst_30001__$1);

return statearr_30204;
})();
if(cljs.core.truth_(inst_30002)){
var statearr_30205_32144 = state_30034__$1;
(statearr_30205_32144[(1)] = (39));

} else {
var statearr_30210_32145 = state_30034__$1;
(statearr_30210_32145[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30035 === (8))){
var inst_29901 = (state_30034[(13)]);
var inst_29900 = (state_30034[(14)]);
var inst_29904 = (inst_29901 < inst_29900);
var inst_29905 = inst_29904;
var state_30034__$1 = state_30034;
if(cljs.core.truth_(inst_29905)){
var statearr_30212_32148 = state_30034__$1;
(statearr_30212_32148[(1)] = (10));

} else {
var statearr_30213_32151 = state_30034__$1;
(statearr_30213_32151[(1)] = (11));

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
var cljs$core$async$mult_$_state_machine__28585__auto__ = null;
var cljs$core$async$mult_$_state_machine__28585__auto____0 = (function (){
var statearr_30218 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30218[(0)] = cljs$core$async$mult_$_state_machine__28585__auto__);

(statearr_30218[(1)] = (1));

return statearr_30218;
});
var cljs$core$async$mult_$_state_machine__28585__auto____1 = (function (state_30034){
while(true){
var ret_value__28586__auto__ = (function (){try{while(true){
var result__28587__auto__ = switch__28584__auto__(state_30034);
if(cljs.core.keyword_identical_QMARK_(result__28587__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28587__auto__;
}
break;
}
}catch (e30223){var ex__28588__auto__ = e30223;
var statearr_30224_32155 = state_30034;
(statearr_30224_32155[(2)] = ex__28588__auto__);


if(cljs.core.seq((state_30034[(4)]))){
var statearr_30226_32158 = state_30034;
(statearr_30226_32158[(1)] = cljs.core.first((state_30034[(4)])));

} else {
throw ex__28588__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28586__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32159 = state_30034;
state_30034 = G__32159;
continue;
} else {
return ret_value__28586__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__28585__auto__ = function(state_30034){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__28585__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__28585__auto____1.call(this,state_30034);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__28585__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__28585__auto____0;
cljs$core$async$mult_$_state_machine__28585__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__28585__auto____1;
return cljs$core$async$mult_$_state_machine__28585__auto__;
})()
})();
var state__28763__auto__ = (function (){var statearr_30228 = f__28762__auto__();
(statearr_30228[(6)] = c__28761__auto___31995);

return statearr_30228;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28763__auto__);
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
var G__30237 = arguments.length;
switch (G__30237) {
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

var cljs$core$async$Mix$admix_STAR_$dyn_32164 = (function (m,ch){
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
return cljs$core$async$Mix$admix_STAR_$dyn_32164(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_32166 = (function (m,ch){
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
return cljs$core$async$Mix$unmix_STAR_$dyn_32166(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_32167 = (function (m){
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
return cljs$core$async$Mix$unmix_all_STAR_$dyn_32167(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_32173 = (function (m,state_map){
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
return cljs$core$async$Mix$toggle_STAR_$dyn_32173(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_32174 = (function (m,mode){
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
return cljs$core$async$Mix$solo_mode_STAR_$dyn_32174(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___32175 = arguments.length;
var i__4737__auto___32176 = (0);
while(true){
if((i__4737__auto___32176 < len__4736__auto___32175)){
args__4742__auto__.push((arguments[i__4737__auto___32176]));

var G__32177 = (i__4737__auto___32176 + (1));
i__4737__auto___32176 = G__32177;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__30260){
var map__30261 = p__30260;
var map__30261__$1 = (((((!((map__30261 == null))))?(((((map__30261.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30261.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30261):map__30261);
var opts = map__30261__$1;
var statearr_30264_32181 = state;
(statearr_30264_32181[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts((function (val){
var statearr_30271_32182 = state;
(statearr_30271_32182[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_30276_32183 = state;
(statearr_30276_32183[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq30255){
var G__30256 = cljs.core.first(seq30255);
var seq30255__$1 = cljs.core.next(seq30255);
var G__30257 = cljs.core.first(seq30255__$1);
var seq30255__$2 = cljs.core.next(seq30255__$1);
var G__30258 = cljs.core.first(seq30255__$2);
var seq30255__$3 = cljs.core.next(seq30255__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__30256,G__30257,G__30258,seq30255__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async30296 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30296 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta30297){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta30297 = meta30297;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async30296.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30298,meta30297__$1){
var self__ = this;
var _30298__$1 = this;
return (new cljs.core.async.t_cljs$core$async30296(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta30297__$1));
}));

(cljs.core.async.t_cljs$core$async30296.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30298){
var self__ = this;
var _30298__$1 = this;
return self__.meta30297;
}));

(cljs.core.async.t_cljs$core$async30296.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30296.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async30296.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30296.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async30296.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async30296.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async30296.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async30296.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async30296.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta30297","meta30297",654577040,null)], null);
}));

(cljs.core.async.t_cljs$core$async30296.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async30296.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30296");

(cljs.core.async.t_cljs$core$async30296.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async30296");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30296.
 */
cljs.core.async.__GT_t_cljs$core$async30296 = (function cljs$core$async$mix_$___GT_t_cljs$core$async30296(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta30297){
return (new cljs.core.async.t_cljs$core$async30296(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta30297));
});

}

return (new cljs.core.async.t_cljs$core$async30296(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__28761__auto___32206 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28762__auto__ = (function (){var switch__28584__auto__ = (function (state_30425){
var state_val_30426 = (state_30425[(1)]);
if((state_val_30426 === (7))){
var inst_30337 = (state_30425[(2)]);
var state_30425__$1 = state_30425;
var statearr_30429_32207 = state_30425__$1;
(statearr_30429_32207[(2)] = inst_30337);

(statearr_30429_32207[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30426 === (20))){
var inst_30349 = (state_30425[(7)]);
var state_30425__$1 = state_30425;
var statearr_30430_32208 = state_30425__$1;
(statearr_30430_32208[(2)] = inst_30349);

(statearr_30430_32208[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30426 === (27))){
var state_30425__$1 = state_30425;
var statearr_30431_32209 = state_30425__$1;
(statearr_30431_32209[(2)] = null);

(statearr_30431_32209[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30426 === (1))){
var inst_30324 = (state_30425[(8)]);
var inst_30324__$1 = calc_state();
var inst_30326 = (inst_30324__$1 == null);
var inst_30327 = cljs.core.not(inst_30326);
var state_30425__$1 = (function (){var statearr_30432 = state_30425;
(statearr_30432[(8)] = inst_30324__$1);

return statearr_30432;
})();
if(inst_30327){
var statearr_30433_32210 = state_30425__$1;
(statearr_30433_32210[(1)] = (2));

} else {
var statearr_30434_32211 = state_30425__$1;
(statearr_30434_32211[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30426 === (24))){
var inst_30397 = (state_30425[(9)]);
var inst_30382 = (state_30425[(10)]);
var inst_30373 = (state_30425[(11)]);
var inst_30397__$1 = (inst_30373.cljs$core$IFn$_invoke$arity$1 ? inst_30373.cljs$core$IFn$_invoke$arity$1(inst_30382) : inst_30373.call(null,inst_30382));
var state_30425__$1 = (function (){var statearr_30436 = state_30425;
(statearr_30436[(9)] = inst_30397__$1);

return statearr_30436;
})();
if(cljs.core.truth_(inst_30397__$1)){
var statearr_30438_32212 = state_30425__$1;
(statearr_30438_32212[(1)] = (29));

} else {
var statearr_30439_32213 = state_30425__$1;
(statearr_30439_32213[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30426 === (4))){
var inst_30340 = (state_30425[(2)]);
var state_30425__$1 = state_30425;
if(cljs.core.truth_(inst_30340)){
var statearr_30441_32214 = state_30425__$1;
(statearr_30441_32214[(1)] = (8));

} else {
var statearr_30444_32215 = state_30425__$1;
(statearr_30444_32215[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30426 === (15))){
var inst_30367 = (state_30425[(2)]);
var state_30425__$1 = state_30425;
if(cljs.core.truth_(inst_30367)){
var statearr_30454_32216 = state_30425__$1;
(statearr_30454_32216[(1)] = (19));

} else {
var statearr_30455_32217 = state_30425__$1;
(statearr_30455_32217[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30426 === (21))){
var inst_30372 = (state_30425[(12)]);
var inst_30372__$1 = (state_30425[(2)]);
var inst_30373 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_30372__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_30374 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_30372__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_30375 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_30372__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_30425__$1 = (function (){var statearr_30457 = state_30425;
(statearr_30457[(12)] = inst_30372__$1);

(statearr_30457[(13)] = inst_30374);

(statearr_30457[(11)] = inst_30373);

return statearr_30457;
})();
return cljs.core.async.ioc_alts_BANG_(state_30425__$1,(22),inst_30375);
} else {
if((state_val_30426 === (31))){
var inst_30405 = (state_30425[(2)]);
var state_30425__$1 = state_30425;
if(cljs.core.truth_(inst_30405)){
var statearr_30464_32218 = state_30425__$1;
(statearr_30464_32218[(1)] = (32));

} else {
var statearr_30465_32219 = state_30425__$1;
(statearr_30465_32219[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30426 === (32))){
var inst_30381 = (state_30425[(14)]);
var state_30425__$1 = state_30425;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30425__$1,(35),out,inst_30381);
} else {
if((state_val_30426 === (33))){
var inst_30372 = (state_30425[(12)]);
var inst_30349 = inst_30372;
var state_30425__$1 = (function (){var statearr_30467 = state_30425;
(statearr_30467[(7)] = inst_30349);

return statearr_30467;
})();
var statearr_30468_32220 = state_30425__$1;
(statearr_30468_32220[(2)] = null);

(statearr_30468_32220[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30426 === (13))){
var inst_30349 = (state_30425[(7)]);
var inst_30356 = inst_30349.cljs$lang$protocol_mask$partition0$;
var inst_30357 = (inst_30356 & (64));
var inst_30358 = inst_30349.cljs$core$ISeq$;
var inst_30359 = (cljs.core.PROTOCOL_SENTINEL === inst_30358);
var inst_30360 = ((inst_30357) || (inst_30359));
var state_30425__$1 = state_30425;
if(cljs.core.truth_(inst_30360)){
var statearr_30469_32221 = state_30425__$1;
(statearr_30469_32221[(1)] = (16));

} else {
var statearr_30470_32222 = state_30425__$1;
(statearr_30470_32222[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30426 === (22))){
var inst_30382 = (state_30425[(10)]);
var inst_30381 = (state_30425[(14)]);
var inst_30380 = (state_30425[(2)]);
var inst_30381__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_30380,(0),null);
var inst_30382__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_30380,(1),null);
var inst_30383 = (inst_30381__$1 == null);
var inst_30384 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_30382__$1,change);
var inst_30385 = ((inst_30383) || (inst_30384));
var state_30425__$1 = (function (){var statearr_30472 = state_30425;
(statearr_30472[(10)] = inst_30382__$1);

(statearr_30472[(14)] = inst_30381__$1);

return statearr_30472;
})();
if(cljs.core.truth_(inst_30385)){
var statearr_30474_32227 = state_30425__$1;
(statearr_30474_32227[(1)] = (23));

} else {
var statearr_30476_32228 = state_30425__$1;
(statearr_30476_32228[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30426 === (36))){
var inst_30372 = (state_30425[(12)]);
var inst_30349 = inst_30372;
var state_30425__$1 = (function (){var statearr_30479 = state_30425;
(statearr_30479[(7)] = inst_30349);

return statearr_30479;
})();
var statearr_30480_32229 = state_30425__$1;
(statearr_30480_32229[(2)] = null);

(statearr_30480_32229[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30426 === (29))){
var inst_30397 = (state_30425[(9)]);
var state_30425__$1 = state_30425;
var statearr_30485_32230 = state_30425__$1;
(statearr_30485_32230[(2)] = inst_30397);

(statearr_30485_32230[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30426 === (6))){
var state_30425__$1 = state_30425;
var statearr_30491_32231 = state_30425__$1;
(statearr_30491_32231[(2)] = false);

(statearr_30491_32231[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30426 === (28))){
var inst_30393 = (state_30425[(2)]);
var inst_30394 = calc_state();
var inst_30349 = inst_30394;
var state_30425__$1 = (function (){var statearr_30492 = state_30425;
(statearr_30492[(15)] = inst_30393);

(statearr_30492[(7)] = inst_30349);

return statearr_30492;
})();
var statearr_30493_32234 = state_30425__$1;
(statearr_30493_32234[(2)] = null);

(statearr_30493_32234[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30426 === (25))){
var inst_30419 = (state_30425[(2)]);
var state_30425__$1 = state_30425;
var statearr_30494_32235 = state_30425__$1;
(statearr_30494_32235[(2)] = inst_30419);

(statearr_30494_32235[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30426 === (34))){
var inst_30417 = (state_30425[(2)]);
var state_30425__$1 = state_30425;
var statearr_30496_32237 = state_30425__$1;
(statearr_30496_32237[(2)] = inst_30417);

(statearr_30496_32237[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30426 === (17))){
var state_30425__$1 = state_30425;
var statearr_30497_32238 = state_30425__$1;
(statearr_30497_32238[(2)] = false);

(statearr_30497_32238[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30426 === (3))){
var state_30425__$1 = state_30425;
var statearr_30500_32240 = state_30425__$1;
(statearr_30500_32240[(2)] = false);

(statearr_30500_32240[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30426 === (12))){
var inst_30421 = (state_30425[(2)]);
var state_30425__$1 = state_30425;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30425__$1,inst_30421);
} else {
if((state_val_30426 === (2))){
var inst_30324 = (state_30425[(8)]);
var inst_30329 = inst_30324.cljs$lang$protocol_mask$partition0$;
var inst_30330 = (inst_30329 & (64));
var inst_30331 = inst_30324.cljs$core$ISeq$;
var inst_30332 = (cljs.core.PROTOCOL_SENTINEL === inst_30331);
var inst_30333 = ((inst_30330) || (inst_30332));
var state_30425__$1 = state_30425;
if(cljs.core.truth_(inst_30333)){
var statearr_30507_32241 = state_30425__$1;
(statearr_30507_32241[(1)] = (5));

} else {
var statearr_30508_32242 = state_30425__$1;
(statearr_30508_32242[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30426 === (23))){
var inst_30381 = (state_30425[(14)]);
var inst_30388 = (inst_30381 == null);
var state_30425__$1 = state_30425;
if(cljs.core.truth_(inst_30388)){
var statearr_30509_32243 = state_30425__$1;
(statearr_30509_32243[(1)] = (26));

} else {
var statearr_30510_32244 = state_30425__$1;
(statearr_30510_32244[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30426 === (35))){
var inst_30408 = (state_30425[(2)]);
var state_30425__$1 = state_30425;
if(cljs.core.truth_(inst_30408)){
var statearr_30511_32246 = state_30425__$1;
(statearr_30511_32246[(1)] = (36));

} else {
var statearr_30512_32247 = state_30425__$1;
(statearr_30512_32247[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30426 === (19))){
var inst_30349 = (state_30425[(7)]);
var inst_30369 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_30349);
var state_30425__$1 = state_30425;
var statearr_30513_32248 = state_30425__$1;
(statearr_30513_32248[(2)] = inst_30369);

(statearr_30513_32248[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30426 === (11))){
var inst_30349 = (state_30425[(7)]);
var inst_30353 = (inst_30349 == null);
var inst_30354 = cljs.core.not(inst_30353);
var state_30425__$1 = state_30425;
if(inst_30354){
var statearr_30514_32249 = state_30425__$1;
(statearr_30514_32249[(1)] = (13));

} else {
var statearr_30515_32250 = state_30425__$1;
(statearr_30515_32250[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30426 === (9))){
var inst_30324 = (state_30425[(8)]);
var state_30425__$1 = state_30425;
var statearr_30516_32251 = state_30425__$1;
(statearr_30516_32251[(2)] = inst_30324);

(statearr_30516_32251[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30426 === (5))){
var state_30425__$1 = state_30425;
var statearr_30517_32252 = state_30425__$1;
(statearr_30517_32252[(2)] = true);

(statearr_30517_32252[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30426 === (14))){
var state_30425__$1 = state_30425;
var statearr_30519_32253 = state_30425__$1;
(statearr_30519_32253[(2)] = false);

(statearr_30519_32253[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30426 === (26))){
var inst_30382 = (state_30425[(10)]);
var inst_30390 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_30382);
var state_30425__$1 = state_30425;
var statearr_30520_32254 = state_30425__$1;
(statearr_30520_32254[(2)] = inst_30390);

(statearr_30520_32254[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30426 === (16))){
var state_30425__$1 = state_30425;
var statearr_30526_32255 = state_30425__$1;
(statearr_30526_32255[(2)] = true);

(statearr_30526_32255[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30426 === (38))){
var inst_30413 = (state_30425[(2)]);
var state_30425__$1 = state_30425;
var statearr_30528_32260 = state_30425__$1;
(statearr_30528_32260[(2)] = inst_30413);

(statearr_30528_32260[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30426 === (30))){
var inst_30382 = (state_30425[(10)]);
var inst_30374 = (state_30425[(13)]);
var inst_30373 = (state_30425[(11)]);
var inst_30400 = cljs.core.empty_QMARK_(inst_30373);
var inst_30401 = (inst_30374.cljs$core$IFn$_invoke$arity$1 ? inst_30374.cljs$core$IFn$_invoke$arity$1(inst_30382) : inst_30374.call(null,inst_30382));
var inst_30402 = cljs.core.not(inst_30401);
var inst_30403 = ((inst_30400) && (inst_30402));
var state_30425__$1 = state_30425;
var statearr_30536_32267 = state_30425__$1;
(statearr_30536_32267[(2)] = inst_30403);

(statearr_30536_32267[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30426 === (10))){
var inst_30324 = (state_30425[(8)]);
var inst_30345 = (state_30425[(2)]);
var inst_30346 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_30345,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_30347 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_30345,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_30348 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_30345,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_30349 = inst_30324;
var state_30425__$1 = (function (){var statearr_30537 = state_30425;
(statearr_30537[(16)] = inst_30348);

(statearr_30537[(17)] = inst_30346);

(statearr_30537[(7)] = inst_30349);

(statearr_30537[(18)] = inst_30347);

return statearr_30537;
})();
var statearr_30538_32270 = state_30425__$1;
(statearr_30538_32270[(2)] = null);

(statearr_30538_32270[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30426 === (18))){
var inst_30364 = (state_30425[(2)]);
var state_30425__$1 = state_30425;
var statearr_30539_32271 = state_30425__$1;
(statearr_30539_32271[(2)] = inst_30364);

(statearr_30539_32271[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30426 === (37))){
var state_30425__$1 = state_30425;
var statearr_30540_32272 = state_30425__$1;
(statearr_30540_32272[(2)] = null);

(statearr_30540_32272[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30426 === (8))){
var inst_30324 = (state_30425[(8)]);
var inst_30342 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_30324);
var state_30425__$1 = state_30425;
var statearr_30542_32277 = state_30425__$1;
(statearr_30542_32277[(2)] = inst_30342);

(statearr_30542_32277[(1)] = (10));


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
var cljs$core$async$mix_$_state_machine__28585__auto__ = null;
var cljs$core$async$mix_$_state_machine__28585__auto____0 = (function (){
var statearr_30547 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30547[(0)] = cljs$core$async$mix_$_state_machine__28585__auto__);

(statearr_30547[(1)] = (1));

return statearr_30547;
});
var cljs$core$async$mix_$_state_machine__28585__auto____1 = (function (state_30425){
while(true){
var ret_value__28586__auto__ = (function (){try{while(true){
var result__28587__auto__ = switch__28584__auto__(state_30425);
if(cljs.core.keyword_identical_QMARK_(result__28587__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28587__auto__;
}
break;
}
}catch (e30548){var ex__28588__auto__ = e30548;
var statearr_30553_32282 = state_30425;
(statearr_30553_32282[(2)] = ex__28588__auto__);


if(cljs.core.seq((state_30425[(4)]))){
var statearr_30554_32287 = state_30425;
(statearr_30554_32287[(1)] = cljs.core.first((state_30425[(4)])));

} else {
throw ex__28588__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28586__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32288 = state_30425;
state_30425 = G__32288;
continue;
} else {
return ret_value__28586__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__28585__auto__ = function(state_30425){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__28585__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__28585__auto____1.call(this,state_30425);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__28585__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__28585__auto____0;
cljs$core$async$mix_$_state_machine__28585__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__28585__auto____1;
return cljs$core$async$mix_$_state_machine__28585__auto__;
})()
})();
var state__28763__auto__ = (function (){var statearr_30556 = f__28762__auto__();
(statearr_30556[(6)] = c__28761__auto___32206);

return statearr_30556;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28763__auto__);
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

var cljs$core$async$Pub$sub_STAR_$dyn_32291 = (function (p,v,ch,close_QMARK_){
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
return cljs$core$async$Pub$sub_STAR_$dyn_32291(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_32296 = (function (p,v,ch){
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
return cljs$core$async$Pub$unsub_STAR_$dyn_32296(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_32301 = (function() {
var G__32302 = null;
var G__32302__1 = (function (p){
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
var G__32302__2 = (function (p,v){
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
G__32302 = function(p,v){
switch(arguments.length){
case 1:
return G__32302__1.call(this,p);
case 2:
return G__32302__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__32302.cljs$core$IFn$_invoke$arity$1 = G__32302__1;
G__32302.cljs$core$IFn$_invoke$arity$2 = G__32302__2;
return G__32302;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__30590 = arguments.length;
switch (G__30590) {
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
return cljs$core$async$Pub$unsub_all_STAR_$dyn_32301(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_32301(p,v);
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
var G__30599 = arguments.length;
switch (G__30599) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__30596_SHARP_){
if(cljs.core.truth_((p1__30596_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__30596_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__30596_SHARP_.call(null,topic)))){
return p1__30596_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__30596_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async30605 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30605 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta30606){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta30606 = meta30606;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async30605.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30607,meta30606__$1){
var self__ = this;
var _30607__$1 = this;
return (new cljs.core.async.t_cljs$core$async30605(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta30606__$1));
}));

(cljs.core.async.t_cljs$core$async30605.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30607){
var self__ = this;
var _30607__$1 = this;
return self__.meta30606;
}));

(cljs.core.async.t_cljs$core$async30605.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30605.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async30605.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30605.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async30605.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
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

(cljs.core.async.t_cljs$core$async30605.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async30605.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async30605.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta30606","meta30606",1860908526,null)], null);
}));

(cljs.core.async.t_cljs$core$async30605.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async30605.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30605");

(cljs.core.async.t_cljs$core$async30605.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async30605");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30605.
 */
cljs.core.async.__GT_t_cljs$core$async30605 = (function cljs$core$async$__GT_t_cljs$core$async30605(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta30606){
return (new cljs.core.async.t_cljs$core$async30605(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta30606));
});

}

return (new cljs.core.async.t_cljs$core$async30605(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__28761__auto___32345 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28762__auto__ = (function (){var switch__28584__auto__ = (function (state_30695){
var state_val_30696 = (state_30695[(1)]);
if((state_val_30696 === (7))){
var inst_30691 = (state_30695[(2)]);
var state_30695__$1 = state_30695;
var statearr_30698_32347 = state_30695__$1;
(statearr_30698_32347[(2)] = inst_30691);

(statearr_30698_32347[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30696 === (20))){
var state_30695__$1 = state_30695;
var statearr_30702_32350 = state_30695__$1;
(statearr_30702_32350[(2)] = null);

(statearr_30702_32350[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30696 === (1))){
var state_30695__$1 = state_30695;
var statearr_30704_32351 = state_30695__$1;
(statearr_30704_32351[(2)] = null);

(statearr_30704_32351[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30696 === (24))){
var inst_30674 = (state_30695[(7)]);
var inst_30683 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_30674);
var state_30695__$1 = state_30695;
var statearr_30709_32352 = state_30695__$1;
(statearr_30709_32352[(2)] = inst_30683);

(statearr_30709_32352[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30696 === (4))){
var inst_30621 = (state_30695[(8)]);
var inst_30621__$1 = (state_30695[(2)]);
var inst_30622 = (inst_30621__$1 == null);
var state_30695__$1 = (function (){var statearr_30710 = state_30695;
(statearr_30710[(8)] = inst_30621__$1);

return statearr_30710;
})();
if(cljs.core.truth_(inst_30622)){
var statearr_30711_32364 = state_30695__$1;
(statearr_30711_32364[(1)] = (5));

} else {
var statearr_30712_32365 = state_30695__$1;
(statearr_30712_32365[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30696 === (15))){
var inst_30668 = (state_30695[(2)]);
var state_30695__$1 = state_30695;
var statearr_30716_32366 = state_30695__$1;
(statearr_30716_32366[(2)] = inst_30668);

(statearr_30716_32366[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30696 === (21))){
var inst_30688 = (state_30695[(2)]);
var state_30695__$1 = (function (){var statearr_30717 = state_30695;
(statearr_30717[(9)] = inst_30688);

return statearr_30717;
})();
var statearr_30718_32373 = state_30695__$1;
(statearr_30718_32373[(2)] = null);

(statearr_30718_32373[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30696 === (13))){
var inst_30649 = (state_30695[(10)]);
var inst_30652 = cljs.core.chunked_seq_QMARK_(inst_30649);
var state_30695__$1 = state_30695;
if(inst_30652){
var statearr_30723_32374 = state_30695__$1;
(statearr_30723_32374[(1)] = (16));

} else {
var statearr_30724_32375 = state_30695__$1;
(statearr_30724_32375[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30696 === (22))){
var inst_30680 = (state_30695[(2)]);
var state_30695__$1 = state_30695;
if(cljs.core.truth_(inst_30680)){
var statearr_30726_32376 = state_30695__$1;
(statearr_30726_32376[(1)] = (23));

} else {
var statearr_30727_32377 = state_30695__$1;
(statearr_30727_32377[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30696 === (6))){
var inst_30676 = (state_30695[(11)]);
var inst_30621 = (state_30695[(8)]);
var inst_30674 = (state_30695[(7)]);
var inst_30674__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_30621) : topic_fn.call(null,inst_30621));
var inst_30675 = cljs.core.deref(mults);
var inst_30676__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_30675,inst_30674__$1);
var state_30695__$1 = (function (){var statearr_30733 = state_30695;
(statearr_30733[(11)] = inst_30676__$1);

(statearr_30733[(7)] = inst_30674__$1);

return statearr_30733;
})();
if(cljs.core.truth_(inst_30676__$1)){
var statearr_30734_32378 = state_30695__$1;
(statearr_30734_32378[(1)] = (19));

} else {
var statearr_30739_32379 = state_30695__$1;
(statearr_30739_32379[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30696 === (25))){
var inst_30685 = (state_30695[(2)]);
var state_30695__$1 = state_30695;
var statearr_30740_32380 = state_30695__$1;
(statearr_30740_32380[(2)] = inst_30685);

(statearr_30740_32380[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30696 === (17))){
var inst_30649 = (state_30695[(10)]);
var inst_30659 = cljs.core.first(inst_30649);
var inst_30660 = cljs.core.async.muxch_STAR_(inst_30659);
var inst_30661 = cljs.core.async.close_BANG_(inst_30660);
var inst_30662 = cljs.core.next(inst_30649);
var inst_30633 = inst_30662;
var inst_30634 = null;
var inst_30635 = (0);
var inst_30636 = (0);
var state_30695__$1 = (function (){var statearr_30743 = state_30695;
(statearr_30743[(12)] = inst_30633);

(statearr_30743[(13)] = inst_30661);

(statearr_30743[(14)] = inst_30636);

(statearr_30743[(15)] = inst_30635);

(statearr_30743[(16)] = inst_30634);

return statearr_30743;
})();
var statearr_30748_32381 = state_30695__$1;
(statearr_30748_32381[(2)] = null);

(statearr_30748_32381[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30696 === (3))){
var inst_30693 = (state_30695[(2)]);
var state_30695__$1 = state_30695;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30695__$1,inst_30693);
} else {
if((state_val_30696 === (12))){
var inst_30670 = (state_30695[(2)]);
var state_30695__$1 = state_30695;
var statearr_30749_32389 = state_30695__$1;
(statearr_30749_32389[(2)] = inst_30670);

(statearr_30749_32389[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30696 === (2))){
var state_30695__$1 = state_30695;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30695__$1,(4),ch);
} else {
if((state_val_30696 === (23))){
var state_30695__$1 = state_30695;
var statearr_30750_32390 = state_30695__$1;
(statearr_30750_32390[(2)] = null);

(statearr_30750_32390[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30696 === (19))){
var inst_30676 = (state_30695[(11)]);
var inst_30621 = (state_30695[(8)]);
var inst_30678 = cljs.core.async.muxch_STAR_(inst_30676);
var state_30695__$1 = state_30695;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30695__$1,(22),inst_30678,inst_30621);
} else {
if((state_val_30696 === (11))){
var inst_30633 = (state_30695[(12)]);
var inst_30649 = (state_30695[(10)]);
var inst_30649__$1 = cljs.core.seq(inst_30633);
var state_30695__$1 = (function (){var statearr_30752 = state_30695;
(statearr_30752[(10)] = inst_30649__$1);

return statearr_30752;
})();
if(inst_30649__$1){
var statearr_30753_32393 = state_30695__$1;
(statearr_30753_32393[(1)] = (13));

} else {
var statearr_30754_32394 = state_30695__$1;
(statearr_30754_32394[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30696 === (9))){
var inst_30672 = (state_30695[(2)]);
var state_30695__$1 = state_30695;
var statearr_30755_32401 = state_30695__$1;
(statearr_30755_32401[(2)] = inst_30672);

(statearr_30755_32401[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30696 === (5))){
var inst_30629 = cljs.core.deref(mults);
var inst_30630 = cljs.core.vals(inst_30629);
var inst_30631 = cljs.core.seq(inst_30630);
var inst_30633 = inst_30631;
var inst_30634 = null;
var inst_30635 = (0);
var inst_30636 = (0);
var state_30695__$1 = (function (){var statearr_30756 = state_30695;
(statearr_30756[(12)] = inst_30633);

(statearr_30756[(14)] = inst_30636);

(statearr_30756[(15)] = inst_30635);

(statearr_30756[(16)] = inst_30634);

return statearr_30756;
})();
var statearr_30757_32404 = state_30695__$1;
(statearr_30757_32404[(2)] = null);

(statearr_30757_32404[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30696 === (14))){
var state_30695__$1 = state_30695;
var statearr_30762_32405 = state_30695__$1;
(statearr_30762_32405[(2)] = null);

(statearr_30762_32405[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30696 === (16))){
var inst_30649 = (state_30695[(10)]);
var inst_30654 = cljs.core.chunk_first(inst_30649);
var inst_30655 = cljs.core.chunk_rest(inst_30649);
var inst_30656 = cljs.core.count(inst_30654);
var inst_30633 = inst_30655;
var inst_30634 = inst_30654;
var inst_30635 = inst_30656;
var inst_30636 = (0);
var state_30695__$1 = (function (){var statearr_30763 = state_30695;
(statearr_30763[(12)] = inst_30633);

(statearr_30763[(14)] = inst_30636);

(statearr_30763[(15)] = inst_30635);

(statearr_30763[(16)] = inst_30634);

return statearr_30763;
})();
var statearr_30764_32406 = state_30695__$1;
(statearr_30764_32406[(2)] = null);

(statearr_30764_32406[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30696 === (10))){
var inst_30633 = (state_30695[(12)]);
var inst_30636 = (state_30695[(14)]);
var inst_30635 = (state_30695[(15)]);
var inst_30634 = (state_30695[(16)]);
var inst_30642 = cljs.core._nth(inst_30634,inst_30636);
var inst_30643 = cljs.core.async.muxch_STAR_(inst_30642);
var inst_30644 = cljs.core.async.close_BANG_(inst_30643);
var inst_30646 = (inst_30636 + (1));
var tmp30759 = inst_30633;
var tmp30760 = inst_30635;
var tmp30761 = inst_30634;
var inst_30633__$1 = tmp30759;
var inst_30634__$1 = tmp30761;
var inst_30635__$1 = tmp30760;
var inst_30636__$1 = inst_30646;
var state_30695__$1 = (function (){var statearr_30765 = state_30695;
(statearr_30765[(12)] = inst_30633__$1);

(statearr_30765[(17)] = inst_30644);

(statearr_30765[(14)] = inst_30636__$1);

(statearr_30765[(15)] = inst_30635__$1);

(statearr_30765[(16)] = inst_30634__$1);

return statearr_30765;
})();
var statearr_30766_32413 = state_30695__$1;
(statearr_30766_32413[(2)] = null);

(statearr_30766_32413[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30696 === (18))){
var inst_30665 = (state_30695[(2)]);
var state_30695__$1 = state_30695;
var statearr_30767_32414 = state_30695__$1;
(statearr_30767_32414[(2)] = inst_30665);

(statearr_30767_32414[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30696 === (8))){
var inst_30636 = (state_30695[(14)]);
var inst_30635 = (state_30695[(15)]);
var inst_30639 = (inst_30636 < inst_30635);
var inst_30640 = inst_30639;
var state_30695__$1 = state_30695;
if(cljs.core.truth_(inst_30640)){
var statearr_30768_32415 = state_30695__$1;
(statearr_30768_32415[(1)] = (10));

} else {
var statearr_30771_32416 = state_30695__$1;
(statearr_30771_32416[(1)] = (11));

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
var cljs$core$async$state_machine__28585__auto__ = null;
var cljs$core$async$state_machine__28585__auto____0 = (function (){
var statearr_30772 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30772[(0)] = cljs$core$async$state_machine__28585__auto__);

(statearr_30772[(1)] = (1));

return statearr_30772;
});
var cljs$core$async$state_machine__28585__auto____1 = (function (state_30695){
while(true){
var ret_value__28586__auto__ = (function (){try{while(true){
var result__28587__auto__ = switch__28584__auto__(state_30695);
if(cljs.core.keyword_identical_QMARK_(result__28587__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28587__auto__;
}
break;
}
}catch (e30773){var ex__28588__auto__ = e30773;
var statearr_30774_32417 = state_30695;
(statearr_30774_32417[(2)] = ex__28588__auto__);


if(cljs.core.seq((state_30695[(4)]))){
var statearr_30777_32418 = state_30695;
(statearr_30777_32418[(1)] = cljs.core.first((state_30695[(4)])));

} else {
throw ex__28588__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28586__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32419 = state_30695;
state_30695 = G__32419;
continue;
} else {
return ret_value__28586__auto__;
}
break;
}
});
cljs$core$async$state_machine__28585__auto__ = function(state_30695){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28585__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28585__auto____1.call(this,state_30695);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28585__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28585__auto____0;
cljs$core$async$state_machine__28585__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28585__auto____1;
return cljs$core$async$state_machine__28585__auto__;
})()
})();
var state__28763__auto__ = (function (){var statearr_30778 = f__28762__auto__();
(statearr_30778[(6)] = c__28761__auto___32345);

return statearr_30778;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28763__auto__);
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
var G__30780 = arguments.length;
switch (G__30780) {
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
var G__30786 = arguments.length;
switch (G__30786) {
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
var G__30792 = arguments.length;
switch (G__30792) {
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
var c__28761__auto___32427 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28762__auto__ = (function (){var switch__28584__auto__ = (function (state_30843){
var state_val_30844 = (state_30843[(1)]);
if((state_val_30844 === (7))){
var state_30843__$1 = state_30843;
var statearr_30851_32429 = state_30843__$1;
(statearr_30851_32429[(2)] = null);

(statearr_30851_32429[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30844 === (1))){
var state_30843__$1 = state_30843;
var statearr_30852_32430 = state_30843__$1;
(statearr_30852_32430[(2)] = null);

(statearr_30852_32430[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30844 === (4))){
var inst_30799 = (state_30843[(7)]);
var inst_30800 = (state_30843[(8)]);
var inst_30802 = (inst_30800 < inst_30799);
var state_30843__$1 = state_30843;
if(cljs.core.truth_(inst_30802)){
var statearr_30853_32431 = state_30843__$1;
(statearr_30853_32431[(1)] = (6));

} else {
var statearr_30854_32432 = state_30843__$1;
(statearr_30854_32432[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30844 === (15))){
var inst_30828 = (state_30843[(9)]);
var inst_30833 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_30828);
var state_30843__$1 = state_30843;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30843__$1,(17),out,inst_30833);
} else {
if((state_val_30844 === (13))){
var inst_30828 = (state_30843[(9)]);
var inst_30828__$1 = (state_30843[(2)]);
var inst_30829 = cljs.core.some(cljs.core.nil_QMARK_,inst_30828__$1);
var state_30843__$1 = (function (){var statearr_30855 = state_30843;
(statearr_30855[(9)] = inst_30828__$1);

return statearr_30855;
})();
if(cljs.core.truth_(inst_30829)){
var statearr_30857_32435 = state_30843__$1;
(statearr_30857_32435[(1)] = (14));

} else {
var statearr_30861_32436 = state_30843__$1;
(statearr_30861_32436[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30844 === (6))){
var state_30843__$1 = state_30843;
var statearr_30862_32437 = state_30843__$1;
(statearr_30862_32437[(2)] = null);

(statearr_30862_32437[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30844 === (17))){
var inst_30835 = (state_30843[(2)]);
var state_30843__$1 = (function (){var statearr_30880 = state_30843;
(statearr_30880[(10)] = inst_30835);

return statearr_30880;
})();
var statearr_30881_32438 = state_30843__$1;
(statearr_30881_32438[(2)] = null);

(statearr_30881_32438[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30844 === (3))){
var inst_30840 = (state_30843[(2)]);
var state_30843__$1 = state_30843;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30843__$1,inst_30840);
} else {
if((state_val_30844 === (12))){
var _ = (function (){var statearr_30884 = state_30843;
(statearr_30884[(4)] = cljs.core.rest((state_30843[(4)])));

return statearr_30884;
})();
var state_30843__$1 = state_30843;
var ex30871 = (state_30843__$1[(2)]);
var statearr_30886_32440 = state_30843__$1;
(statearr_30886_32440[(5)] = ex30871);


if((ex30871 instanceof Object)){
var statearr_30888_32441 = state_30843__$1;
(statearr_30888_32441[(1)] = (11));

(statearr_30888_32441[(5)] = null);

} else {
throw ex30871;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30844 === (2))){
var inst_30798 = cljs.core.reset_BANG_(dctr,cnt);
var inst_30799 = cnt;
var inst_30800 = (0);
var state_30843__$1 = (function (){var statearr_30890 = state_30843;
(statearr_30890[(7)] = inst_30799);

(statearr_30890[(8)] = inst_30800);

(statearr_30890[(11)] = inst_30798);

return statearr_30890;
})();
var statearr_30891_32442 = state_30843__$1;
(statearr_30891_32442[(2)] = null);

(statearr_30891_32442[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30844 === (11))){
var inst_30804 = (state_30843[(2)]);
var inst_30806 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_30843__$1 = (function (){var statearr_30893 = state_30843;
(statearr_30893[(12)] = inst_30804);

return statearr_30893;
})();
var statearr_30894_32443 = state_30843__$1;
(statearr_30894_32443[(2)] = inst_30806);

(statearr_30894_32443[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30844 === (9))){
var inst_30800 = (state_30843[(8)]);
var _ = (function (){var statearr_30896 = state_30843;
(statearr_30896[(4)] = cljs.core.cons((12),(state_30843[(4)])));

return statearr_30896;
})();
var inst_30814 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_30800) : chs__$1.call(null,inst_30800));
var inst_30815 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_30800) : done.call(null,inst_30800));
var inst_30816 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_30814,inst_30815);
var ___$1 = (function (){var statearr_30897 = state_30843;
(statearr_30897[(4)] = cljs.core.rest((state_30843[(4)])));

return statearr_30897;
})();
var state_30843__$1 = state_30843;
var statearr_30898_32444 = state_30843__$1;
(statearr_30898_32444[(2)] = inst_30816);

(statearr_30898_32444[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30844 === (5))){
var inst_30826 = (state_30843[(2)]);
var state_30843__$1 = (function (){var statearr_30899 = state_30843;
(statearr_30899[(13)] = inst_30826);

return statearr_30899;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30843__$1,(13),dchan);
} else {
if((state_val_30844 === (14))){
var inst_30831 = cljs.core.async.close_BANG_(out);
var state_30843__$1 = state_30843;
var statearr_30902_32451 = state_30843__$1;
(statearr_30902_32451[(2)] = inst_30831);

(statearr_30902_32451[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30844 === (16))){
var inst_30838 = (state_30843[(2)]);
var state_30843__$1 = state_30843;
var statearr_30906_32452 = state_30843__$1;
(statearr_30906_32452[(2)] = inst_30838);

(statearr_30906_32452[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30844 === (10))){
var inst_30800 = (state_30843[(8)]);
var inst_30819 = (state_30843[(2)]);
var inst_30820 = (inst_30800 + (1));
var inst_30800__$1 = inst_30820;
var state_30843__$1 = (function (){var statearr_30907 = state_30843;
(statearr_30907[(8)] = inst_30800__$1);

(statearr_30907[(14)] = inst_30819);

return statearr_30907;
})();
var statearr_30908_32453 = state_30843__$1;
(statearr_30908_32453[(2)] = null);

(statearr_30908_32453[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30844 === (8))){
var inst_30824 = (state_30843[(2)]);
var state_30843__$1 = state_30843;
var statearr_30911_32455 = state_30843__$1;
(statearr_30911_32455[(2)] = inst_30824);

(statearr_30911_32455[(1)] = (5));


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
var cljs$core$async$state_machine__28585__auto__ = null;
var cljs$core$async$state_machine__28585__auto____0 = (function (){
var statearr_30915 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30915[(0)] = cljs$core$async$state_machine__28585__auto__);

(statearr_30915[(1)] = (1));

return statearr_30915;
});
var cljs$core$async$state_machine__28585__auto____1 = (function (state_30843){
while(true){
var ret_value__28586__auto__ = (function (){try{while(true){
var result__28587__auto__ = switch__28584__auto__(state_30843);
if(cljs.core.keyword_identical_QMARK_(result__28587__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28587__auto__;
}
break;
}
}catch (e30919){var ex__28588__auto__ = e30919;
var statearr_30920_32460 = state_30843;
(statearr_30920_32460[(2)] = ex__28588__auto__);


if(cljs.core.seq((state_30843[(4)]))){
var statearr_30921_32461 = state_30843;
(statearr_30921_32461[(1)] = cljs.core.first((state_30843[(4)])));

} else {
throw ex__28588__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28586__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32462 = state_30843;
state_30843 = G__32462;
continue;
} else {
return ret_value__28586__auto__;
}
break;
}
});
cljs$core$async$state_machine__28585__auto__ = function(state_30843){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28585__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28585__auto____1.call(this,state_30843);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28585__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28585__auto____0;
cljs$core$async$state_machine__28585__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28585__auto____1;
return cljs$core$async$state_machine__28585__auto__;
})()
})();
var state__28763__auto__ = (function (){var statearr_30926 = f__28762__auto__();
(statearr_30926[(6)] = c__28761__auto___32427);

return statearr_30926;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28763__auto__);
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
var G__30930 = arguments.length;
switch (G__30930) {
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
var c__28761__auto___32466 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28762__auto__ = (function (){var switch__28584__auto__ = (function (state_30973){
var state_val_30974 = (state_30973[(1)]);
if((state_val_30974 === (7))){
var inst_30948 = (state_30973[(7)]);
var inst_30946 = (state_30973[(8)]);
var inst_30946__$1 = (state_30973[(2)]);
var inst_30948__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_30946__$1,(0),null);
var inst_30949 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_30946__$1,(1),null);
var inst_30950 = (inst_30948__$1 == null);
var state_30973__$1 = (function (){var statearr_30978 = state_30973;
(statearr_30978[(7)] = inst_30948__$1);

(statearr_30978[(8)] = inst_30946__$1);

(statearr_30978[(9)] = inst_30949);

return statearr_30978;
})();
if(cljs.core.truth_(inst_30950)){
var statearr_30981_32467 = state_30973__$1;
(statearr_30981_32467[(1)] = (8));

} else {
var statearr_30982_32468 = state_30973__$1;
(statearr_30982_32468[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30974 === (1))){
var inst_30933 = cljs.core.vec(chs);
var inst_30934 = inst_30933;
var state_30973__$1 = (function (){var statearr_30983 = state_30973;
(statearr_30983[(10)] = inst_30934);

return statearr_30983;
})();
var statearr_30984_32471 = state_30973__$1;
(statearr_30984_32471[(2)] = null);

(statearr_30984_32471[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30974 === (4))){
var inst_30934 = (state_30973[(10)]);
var state_30973__$1 = state_30973;
return cljs.core.async.ioc_alts_BANG_(state_30973__$1,(7),inst_30934);
} else {
if((state_val_30974 === (6))){
var inst_30969 = (state_30973[(2)]);
var state_30973__$1 = state_30973;
var statearr_30988_32473 = state_30973__$1;
(statearr_30988_32473[(2)] = inst_30969);

(statearr_30988_32473[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30974 === (3))){
var inst_30971 = (state_30973[(2)]);
var state_30973__$1 = state_30973;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30973__$1,inst_30971);
} else {
if((state_val_30974 === (2))){
var inst_30934 = (state_30973[(10)]);
var inst_30939 = cljs.core.count(inst_30934);
var inst_30940 = (inst_30939 > (0));
var state_30973__$1 = state_30973;
if(cljs.core.truth_(inst_30940)){
var statearr_30993_32474 = state_30973__$1;
(statearr_30993_32474[(1)] = (4));

} else {
var statearr_30994_32475 = state_30973__$1;
(statearr_30994_32475[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30974 === (11))){
var inst_30934 = (state_30973[(10)]);
var inst_30962 = (state_30973[(2)]);
var tmp30989 = inst_30934;
var inst_30934__$1 = tmp30989;
var state_30973__$1 = (function (){var statearr_30995 = state_30973;
(statearr_30995[(11)] = inst_30962);

(statearr_30995[(10)] = inst_30934__$1);

return statearr_30995;
})();
var statearr_30996_32477 = state_30973__$1;
(statearr_30996_32477[(2)] = null);

(statearr_30996_32477[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30974 === (9))){
var inst_30948 = (state_30973[(7)]);
var state_30973__$1 = state_30973;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30973__$1,(11),out,inst_30948);
} else {
if((state_val_30974 === (5))){
var inst_30967 = cljs.core.async.close_BANG_(out);
var state_30973__$1 = state_30973;
var statearr_30998_32478 = state_30973__$1;
(statearr_30998_32478[(2)] = inst_30967);

(statearr_30998_32478[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30974 === (10))){
var inst_30965 = (state_30973[(2)]);
var state_30973__$1 = state_30973;
var statearr_30999_32479 = state_30973__$1;
(statearr_30999_32479[(2)] = inst_30965);

(statearr_30999_32479[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30974 === (8))){
var inst_30934 = (state_30973[(10)]);
var inst_30948 = (state_30973[(7)]);
var inst_30946 = (state_30973[(8)]);
var inst_30949 = (state_30973[(9)]);
var inst_30953 = (function (){var cs = inst_30934;
var vec__30942 = inst_30946;
var v = inst_30948;
var c = inst_30949;
return (function (p1__30928_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__30928_SHARP_);
});
})();
var inst_30958 = cljs.core.filterv(inst_30953,inst_30934);
var inst_30934__$1 = inst_30958;
var state_30973__$1 = (function (){var statearr_31003 = state_30973;
(statearr_31003[(10)] = inst_30934__$1);

return statearr_31003;
})();
var statearr_31004_32481 = state_30973__$1;
(statearr_31004_32481[(2)] = null);

(statearr_31004_32481[(1)] = (2));


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
var cljs$core$async$state_machine__28585__auto__ = null;
var cljs$core$async$state_machine__28585__auto____0 = (function (){
var statearr_31005 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31005[(0)] = cljs$core$async$state_machine__28585__auto__);

(statearr_31005[(1)] = (1));

return statearr_31005;
});
var cljs$core$async$state_machine__28585__auto____1 = (function (state_30973){
while(true){
var ret_value__28586__auto__ = (function (){try{while(true){
var result__28587__auto__ = switch__28584__auto__(state_30973);
if(cljs.core.keyword_identical_QMARK_(result__28587__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28587__auto__;
}
break;
}
}catch (e31006){var ex__28588__auto__ = e31006;
var statearr_31011_32482 = state_30973;
(statearr_31011_32482[(2)] = ex__28588__auto__);


if(cljs.core.seq((state_30973[(4)]))){
var statearr_31012_32483 = state_30973;
(statearr_31012_32483[(1)] = cljs.core.first((state_30973[(4)])));

} else {
throw ex__28588__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28586__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32484 = state_30973;
state_30973 = G__32484;
continue;
} else {
return ret_value__28586__auto__;
}
break;
}
});
cljs$core$async$state_machine__28585__auto__ = function(state_30973){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28585__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28585__auto____1.call(this,state_30973);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28585__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28585__auto____0;
cljs$core$async$state_machine__28585__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28585__auto____1;
return cljs$core$async$state_machine__28585__auto__;
})()
})();
var state__28763__auto__ = (function (){var statearr_31013 = f__28762__auto__();
(statearr_31013[(6)] = c__28761__auto___32466);

return statearr_31013;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28763__auto__);
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
var G__31015 = arguments.length;
switch (G__31015) {
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
var c__28761__auto___32486 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28762__auto__ = (function (){var switch__28584__auto__ = (function (state_31040){
var state_val_31041 = (state_31040[(1)]);
if((state_val_31041 === (7))){
var inst_31021 = (state_31040[(7)]);
var inst_31021__$1 = (state_31040[(2)]);
var inst_31022 = (inst_31021__$1 == null);
var inst_31023 = cljs.core.not(inst_31022);
var state_31040__$1 = (function (){var statearr_31047 = state_31040;
(statearr_31047[(7)] = inst_31021__$1);

return statearr_31047;
})();
if(inst_31023){
var statearr_31049_32488 = state_31040__$1;
(statearr_31049_32488[(1)] = (8));

} else {
var statearr_31050_32489 = state_31040__$1;
(statearr_31050_32489[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31041 === (1))){
var inst_31016 = (0);
var state_31040__$1 = (function (){var statearr_31051 = state_31040;
(statearr_31051[(8)] = inst_31016);

return statearr_31051;
})();
var statearr_31052_32491 = state_31040__$1;
(statearr_31052_32491[(2)] = null);

(statearr_31052_32491[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31041 === (4))){
var state_31040__$1 = state_31040;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31040__$1,(7),ch);
} else {
if((state_val_31041 === (6))){
var inst_31035 = (state_31040[(2)]);
var state_31040__$1 = state_31040;
var statearr_31056_32494 = state_31040__$1;
(statearr_31056_32494[(2)] = inst_31035);

(statearr_31056_32494[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31041 === (3))){
var inst_31037 = (state_31040[(2)]);
var inst_31038 = cljs.core.async.close_BANG_(out);
var state_31040__$1 = (function (){var statearr_31060 = state_31040;
(statearr_31060[(9)] = inst_31037);

return statearr_31060;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_31040__$1,inst_31038);
} else {
if((state_val_31041 === (2))){
var inst_31016 = (state_31040[(8)]);
var inst_31018 = (inst_31016 < n);
var state_31040__$1 = state_31040;
if(cljs.core.truth_(inst_31018)){
var statearr_31061_32497 = state_31040__$1;
(statearr_31061_32497[(1)] = (4));

} else {
var statearr_31062_32498 = state_31040__$1;
(statearr_31062_32498[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31041 === (11))){
var inst_31016 = (state_31040[(8)]);
var inst_31026 = (state_31040[(2)]);
var inst_31028 = (inst_31016 + (1));
var inst_31016__$1 = inst_31028;
var state_31040__$1 = (function (){var statearr_31063 = state_31040;
(statearr_31063[(10)] = inst_31026);

(statearr_31063[(8)] = inst_31016__$1);

return statearr_31063;
})();
var statearr_31064_32500 = state_31040__$1;
(statearr_31064_32500[(2)] = null);

(statearr_31064_32500[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31041 === (9))){
var state_31040__$1 = state_31040;
var statearr_31067_32501 = state_31040__$1;
(statearr_31067_32501[(2)] = null);

(statearr_31067_32501[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31041 === (5))){
var state_31040__$1 = state_31040;
var statearr_31069_32502 = state_31040__$1;
(statearr_31069_32502[(2)] = null);

(statearr_31069_32502[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31041 === (10))){
var inst_31032 = (state_31040[(2)]);
var state_31040__$1 = state_31040;
var statearr_31070_32503 = state_31040__$1;
(statearr_31070_32503[(2)] = inst_31032);

(statearr_31070_32503[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31041 === (8))){
var inst_31021 = (state_31040[(7)]);
var state_31040__$1 = state_31040;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31040__$1,(11),out,inst_31021);
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
var cljs$core$async$state_machine__28585__auto__ = null;
var cljs$core$async$state_machine__28585__auto____0 = (function (){
var statearr_31074 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_31074[(0)] = cljs$core$async$state_machine__28585__auto__);

(statearr_31074[(1)] = (1));

return statearr_31074;
});
var cljs$core$async$state_machine__28585__auto____1 = (function (state_31040){
while(true){
var ret_value__28586__auto__ = (function (){try{while(true){
var result__28587__auto__ = switch__28584__auto__(state_31040);
if(cljs.core.keyword_identical_QMARK_(result__28587__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28587__auto__;
}
break;
}
}catch (e31075){var ex__28588__auto__ = e31075;
var statearr_31076_32505 = state_31040;
(statearr_31076_32505[(2)] = ex__28588__auto__);


if(cljs.core.seq((state_31040[(4)]))){
var statearr_31077_32506 = state_31040;
(statearr_31077_32506[(1)] = cljs.core.first((state_31040[(4)])));

} else {
throw ex__28588__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28586__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32507 = state_31040;
state_31040 = G__32507;
continue;
} else {
return ret_value__28586__auto__;
}
break;
}
});
cljs$core$async$state_machine__28585__auto__ = function(state_31040){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28585__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28585__auto____1.call(this,state_31040);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28585__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28585__auto____0;
cljs$core$async$state_machine__28585__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28585__auto____1;
return cljs$core$async$state_machine__28585__auto__;
})()
})();
var state__28763__auto__ = (function (){var statearr_31078 = f__28762__auto__();
(statearr_31078[(6)] = c__28761__auto___32486);

return statearr_31078;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28763__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31083 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31083 = (function (f,ch,meta31084){
this.f = f;
this.ch = ch;
this.meta31084 = meta31084;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31083.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31085,meta31084__$1){
var self__ = this;
var _31085__$1 = this;
return (new cljs.core.async.t_cljs$core$async31083(self__.f,self__.ch,meta31084__$1));
}));

(cljs.core.async.t_cljs$core$async31083.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31085){
var self__ = this;
var _31085__$1 = this;
return self__.meta31084;
}));

(cljs.core.async.t_cljs$core$async31083.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31083.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async31083.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async31083.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31083.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31102 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31102 = (function (f,ch,meta31084,_,fn1,meta31103){
this.f = f;
this.ch = ch;
this.meta31084 = meta31084;
this._ = _;
this.fn1 = fn1;
this.meta31103 = meta31103;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31102.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31104,meta31103__$1){
var self__ = this;
var _31104__$1 = this;
return (new cljs.core.async.t_cljs$core$async31102(self__.f,self__.ch,self__.meta31084,self__._,self__.fn1,meta31103__$1));
}));

(cljs.core.async.t_cljs$core$async31102.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31104){
var self__ = this;
var _31104__$1 = this;
return self__.meta31103;
}));

(cljs.core.async.t_cljs$core$async31102.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31102.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async31102.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async31102.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__31079_SHARP_){
var G__31107 = (((p1__31079_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__31079_SHARP_) : self__.f.call(null,p1__31079_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__31107) : f1.call(null,G__31107));
});
}));

(cljs.core.async.t_cljs$core$async31102.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta31084","meta31084",-1471794875,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async31083","cljs.core.async/t_cljs$core$async31083",1084116609,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta31103","meta31103",1541326561,null)], null);
}));

(cljs.core.async.t_cljs$core$async31102.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31102.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31102");

(cljs.core.async.t_cljs$core$async31102.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async31102");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31102.
 */
cljs.core.async.__GT_t_cljs$core$async31102 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async31102(f__$1,ch__$1,meta31084__$1,___$2,fn1__$1,meta31103){
return (new cljs.core.async.t_cljs$core$async31102(f__$1,ch__$1,meta31084__$1,___$2,fn1__$1,meta31103));
});

}

return (new cljs.core.async.t_cljs$core$async31102(self__.f,self__.ch,self__.meta31084,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4115__auto__ = ret;
if(cljs.core.truth_(and__4115__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4115__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__31115 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__31115) : self__.f.call(null,G__31115));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async31083.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31083.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async31083.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta31084","meta31084",-1471794875,null)], null);
}));

(cljs.core.async.t_cljs$core$async31083.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31083.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31083");

(cljs.core.async.t_cljs$core$async31083.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async31083");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31083.
 */
cljs.core.async.__GT_t_cljs$core$async31083 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async31083(f__$1,ch__$1,meta31084){
return (new cljs.core.async.t_cljs$core$async31083(f__$1,ch__$1,meta31084));
});

}

return (new cljs.core.async.t_cljs$core$async31083(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31116 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31116 = (function (f,ch,meta31117){
this.f = f;
this.ch = ch;
this.meta31117 = meta31117;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31116.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31118,meta31117__$1){
var self__ = this;
var _31118__$1 = this;
return (new cljs.core.async.t_cljs$core$async31116(self__.f,self__.ch,meta31117__$1));
}));

(cljs.core.async.t_cljs$core$async31116.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31118){
var self__ = this;
var _31118__$1 = this;
return self__.meta31117;
}));

(cljs.core.async.t_cljs$core$async31116.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31116.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async31116.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31116.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async31116.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31116.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async31116.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta31117","meta31117",-1612838953,null)], null);
}));

(cljs.core.async.t_cljs$core$async31116.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31116.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31116");

(cljs.core.async.t_cljs$core$async31116.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async31116");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31116.
 */
cljs.core.async.__GT_t_cljs$core$async31116 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async31116(f__$1,ch__$1,meta31117){
return (new cljs.core.async.t_cljs$core$async31116(f__$1,ch__$1,meta31117));
});

}

return (new cljs.core.async.t_cljs$core$async31116(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31123 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31123 = (function (p,ch,meta31124){
this.p = p;
this.ch = ch;
this.meta31124 = meta31124;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31123.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31125,meta31124__$1){
var self__ = this;
var _31125__$1 = this;
return (new cljs.core.async.t_cljs$core$async31123(self__.p,self__.ch,meta31124__$1));
}));

(cljs.core.async.t_cljs$core$async31123.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31125){
var self__ = this;
var _31125__$1 = this;
return self__.meta31124;
}));

(cljs.core.async.t_cljs$core$async31123.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31123.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async31123.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async31123.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31123.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async31123.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31123.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async31123.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta31124","meta31124",1711314130,null)], null);
}));

(cljs.core.async.t_cljs$core$async31123.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31123.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31123");

(cljs.core.async.t_cljs$core$async31123.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async31123");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31123.
 */
cljs.core.async.__GT_t_cljs$core$async31123 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async31123(p__$1,ch__$1,meta31124){
return (new cljs.core.async.t_cljs$core$async31123(p__$1,ch__$1,meta31124));
});

}

return (new cljs.core.async.t_cljs$core$async31123(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__31134 = arguments.length;
switch (G__31134) {
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
var c__28761__auto___32591 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28762__auto__ = (function (){var switch__28584__auto__ = (function (state_31155){
var state_val_31156 = (state_31155[(1)]);
if((state_val_31156 === (7))){
var inst_31151 = (state_31155[(2)]);
var state_31155__$1 = state_31155;
var statearr_31157_32605 = state_31155__$1;
(statearr_31157_32605[(2)] = inst_31151);

(statearr_31157_32605[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31156 === (1))){
var state_31155__$1 = state_31155;
var statearr_31158_32610 = state_31155__$1;
(statearr_31158_32610[(2)] = null);

(statearr_31158_32610[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31156 === (4))){
var inst_31137 = (state_31155[(7)]);
var inst_31137__$1 = (state_31155[(2)]);
var inst_31138 = (inst_31137__$1 == null);
var state_31155__$1 = (function (){var statearr_31160 = state_31155;
(statearr_31160[(7)] = inst_31137__$1);

return statearr_31160;
})();
if(cljs.core.truth_(inst_31138)){
var statearr_31161_32617 = state_31155__$1;
(statearr_31161_32617[(1)] = (5));

} else {
var statearr_31162_32619 = state_31155__$1;
(statearr_31162_32619[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31156 === (6))){
var inst_31137 = (state_31155[(7)]);
var inst_31142 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_31137) : p.call(null,inst_31137));
var state_31155__$1 = state_31155;
if(cljs.core.truth_(inst_31142)){
var statearr_31165_32620 = state_31155__$1;
(statearr_31165_32620[(1)] = (8));

} else {
var statearr_31166_32621 = state_31155__$1;
(statearr_31166_32621[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31156 === (3))){
var inst_31153 = (state_31155[(2)]);
var state_31155__$1 = state_31155;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31155__$1,inst_31153);
} else {
if((state_val_31156 === (2))){
var state_31155__$1 = state_31155;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31155__$1,(4),ch);
} else {
if((state_val_31156 === (11))){
var inst_31145 = (state_31155[(2)]);
var state_31155__$1 = state_31155;
var statearr_31171_32626 = state_31155__$1;
(statearr_31171_32626[(2)] = inst_31145);

(statearr_31171_32626[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31156 === (9))){
var state_31155__$1 = state_31155;
var statearr_31172_32629 = state_31155__$1;
(statearr_31172_32629[(2)] = null);

(statearr_31172_32629[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31156 === (5))){
var inst_31140 = cljs.core.async.close_BANG_(out);
var state_31155__$1 = state_31155;
var statearr_31173_32630 = state_31155__$1;
(statearr_31173_32630[(2)] = inst_31140);

(statearr_31173_32630[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31156 === (10))){
var inst_31148 = (state_31155[(2)]);
var state_31155__$1 = (function (){var statearr_31174 = state_31155;
(statearr_31174[(8)] = inst_31148);

return statearr_31174;
})();
var statearr_31175_32632 = state_31155__$1;
(statearr_31175_32632[(2)] = null);

(statearr_31175_32632[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31156 === (8))){
var inst_31137 = (state_31155[(7)]);
var state_31155__$1 = state_31155;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31155__$1,(11),out,inst_31137);
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
var cljs$core$async$state_machine__28585__auto__ = null;
var cljs$core$async$state_machine__28585__auto____0 = (function (){
var statearr_31180 = [null,null,null,null,null,null,null,null,null];
(statearr_31180[(0)] = cljs$core$async$state_machine__28585__auto__);

(statearr_31180[(1)] = (1));

return statearr_31180;
});
var cljs$core$async$state_machine__28585__auto____1 = (function (state_31155){
while(true){
var ret_value__28586__auto__ = (function (){try{while(true){
var result__28587__auto__ = switch__28584__auto__(state_31155);
if(cljs.core.keyword_identical_QMARK_(result__28587__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28587__auto__;
}
break;
}
}catch (e31181){var ex__28588__auto__ = e31181;
var statearr_31182_32640 = state_31155;
(statearr_31182_32640[(2)] = ex__28588__auto__);


if(cljs.core.seq((state_31155[(4)]))){
var statearr_31183_32641 = state_31155;
(statearr_31183_32641[(1)] = cljs.core.first((state_31155[(4)])));

} else {
throw ex__28588__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28586__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32645 = state_31155;
state_31155 = G__32645;
continue;
} else {
return ret_value__28586__auto__;
}
break;
}
});
cljs$core$async$state_machine__28585__auto__ = function(state_31155){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28585__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28585__auto____1.call(this,state_31155);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28585__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28585__auto____0;
cljs$core$async$state_machine__28585__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28585__auto____1;
return cljs$core$async$state_machine__28585__auto__;
})()
})();
var state__28763__auto__ = (function (){var statearr_31184 = f__28762__auto__();
(statearr_31184[(6)] = c__28761__auto___32591);

return statearr_31184;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28763__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__31188 = arguments.length;
switch (G__31188) {
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
var c__28761__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28762__auto__ = (function (){var switch__28584__auto__ = (function (state_31250){
var state_val_31251 = (state_31250[(1)]);
if((state_val_31251 === (7))){
var inst_31246 = (state_31250[(2)]);
var state_31250__$1 = state_31250;
var statearr_31258_32662 = state_31250__$1;
(statearr_31258_32662[(2)] = inst_31246);

(statearr_31258_32662[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31251 === (20))){
var inst_31216 = (state_31250[(7)]);
var inst_31227 = (state_31250[(2)]);
var inst_31228 = cljs.core.next(inst_31216);
var inst_31202 = inst_31228;
var inst_31203 = null;
var inst_31204 = (0);
var inst_31205 = (0);
var state_31250__$1 = (function (){var statearr_31263 = state_31250;
(statearr_31263[(8)] = inst_31203);

(statearr_31263[(9)] = inst_31205);

(statearr_31263[(10)] = inst_31202);

(statearr_31263[(11)] = inst_31227);

(statearr_31263[(12)] = inst_31204);

return statearr_31263;
})();
var statearr_31270_32664 = state_31250__$1;
(statearr_31270_32664[(2)] = null);

(statearr_31270_32664[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31251 === (1))){
var state_31250__$1 = state_31250;
var statearr_31272_32669 = state_31250__$1;
(statearr_31272_32669[(2)] = null);

(statearr_31272_32669[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31251 === (4))){
var inst_31191 = (state_31250[(13)]);
var inst_31191__$1 = (state_31250[(2)]);
var inst_31192 = (inst_31191__$1 == null);
var state_31250__$1 = (function (){var statearr_31273 = state_31250;
(statearr_31273[(13)] = inst_31191__$1);

return statearr_31273;
})();
if(cljs.core.truth_(inst_31192)){
var statearr_31274_32672 = state_31250__$1;
(statearr_31274_32672[(1)] = (5));

} else {
var statearr_31275_32673 = state_31250__$1;
(statearr_31275_32673[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31251 === (15))){
var state_31250__$1 = state_31250;
var statearr_31279_32674 = state_31250__$1;
(statearr_31279_32674[(2)] = null);

(statearr_31279_32674[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31251 === (21))){
var state_31250__$1 = state_31250;
var statearr_31280_32675 = state_31250__$1;
(statearr_31280_32675[(2)] = null);

(statearr_31280_32675[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31251 === (13))){
var inst_31203 = (state_31250[(8)]);
var inst_31205 = (state_31250[(9)]);
var inst_31202 = (state_31250[(10)]);
var inst_31204 = (state_31250[(12)]);
var inst_31212 = (state_31250[(2)]);
var inst_31213 = (inst_31205 + (1));
var tmp31276 = inst_31203;
var tmp31277 = inst_31202;
var tmp31278 = inst_31204;
var inst_31202__$1 = tmp31277;
var inst_31203__$1 = tmp31276;
var inst_31204__$1 = tmp31278;
var inst_31205__$1 = inst_31213;
var state_31250__$1 = (function (){var statearr_31281 = state_31250;
(statearr_31281[(14)] = inst_31212);

(statearr_31281[(8)] = inst_31203__$1);

(statearr_31281[(9)] = inst_31205__$1);

(statearr_31281[(10)] = inst_31202__$1);

(statearr_31281[(12)] = inst_31204__$1);

return statearr_31281;
})();
var statearr_31282_32686 = state_31250__$1;
(statearr_31282_32686[(2)] = null);

(statearr_31282_32686[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31251 === (22))){
var state_31250__$1 = state_31250;
var statearr_31283_32687 = state_31250__$1;
(statearr_31283_32687[(2)] = null);

(statearr_31283_32687[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31251 === (6))){
var inst_31191 = (state_31250[(13)]);
var inst_31200 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_31191) : f.call(null,inst_31191));
var inst_31201 = cljs.core.seq(inst_31200);
var inst_31202 = inst_31201;
var inst_31203 = null;
var inst_31204 = (0);
var inst_31205 = (0);
var state_31250__$1 = (function (){var statearr_31285 = state_31250;
(statearr_31285[(8)] = inst_31203);

(statearr_31285[(9)] = inst_31205);

(statearr_31285[(10)] = inst_31202);

(statearr_31285[(12)] = inst_31204);

return statearr_31285;
})();
var statearr_31286_32691 = state_31250__$1;
(statearr_31286_32691[(2)] = null);

(statearr_31286_32691[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31251 === (17))){
var inst_31216 = (state_31250[(7)]);
var inst_31220 = cljs.core.chunk_first(inst_31216);
var inst_31221 = cljs.core.chunk_rest(inst_31216);
var inst_31222 = cljs.core.count(inst_31220);
var inst_31202 = inst_31221;
var inst_31203 = inst_31220;
var inst_31204 = inst_31222;
var inst_31205 = (0);
var state_31250__$1 = (function (){var statearr_31288 = state_31250;
(statearr_31288[(8)] = inst_31203);

(statearr_31288[(9)] = inst_31205);

(statearr_31288[(10)] = inst_31202);

(statearr_31288[(12)] = inst_31204);

return statearr_31288;
})();
var statearr_31289_32700 = state_31250__$1;
(statearr_31289_32700[(2)] = null);

(statearr_31289_32700[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31251 === (3))){
var inst_31248 = (state_31250[(2)]);
var state_31250__$1 = state_31250;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31250__$1,inst_31248);
} else {
if((state_val_31251 === (12))){
var inst_31236 = (state_31250[(2)]);
var state_31250__$1 = state_31250;
var statearr_31290_32712 = state_31250__$1;
(statearr_31290_32712[(2)] = inst_31236);

(statearr_31290_32712[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31251 === (2))){
var state_31250__$1 = state_31250;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31250__$1,(4),in$);
} else {
if((state_val_31251 === (23))){
var inst_31244 = (state_31250[(2)]);
var state_31250__$1 = state_31250;
var statearr_31291_32729 = state_31250__$1;
(statearr_31291_32729[(2)] = inst_31244);

(statearr_31291_32729[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31251 === (19))){
var inst_31231 = (state_31250[(2)]);
var state_31250__$1 = state_31250;
var statearr_31293_32740 = state_31250__$1;
(statearr_31293_32740[(2)] = inst_31231);

(statearr_31293_32740[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31251 === (11))){
var inst_31216 = (state_31250[(7)]);
var inst_31202 = (state_31250[(10)]);
var inst_31216__$1 = cljs.core.seq(inst_31202);
var state_31250__$1 = (function (){var statearr_31294 = state_31250;
(statearr_31294[(7)] = inst_31216__$1);

return statearr_31294;
})();
if(inst_31216__$1){
var statearr_31295_32754 = state_31250__$1;
(statearr_31295_32754[(1)] = (14));

} else {
var statearr_31296_32755 = state_31250__$1;
(statearr_31296_32755[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31251 === (9))){
var inst_31238 = (state_31250[(2)]);
var inst_31239 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_31250__$1 = (function (){var statearr_31297 = state_31250;
(statearr_31297[(15)] = inst_31238);

return statearr_31297;
})();
if(cljs.core.truth_(inst_31239)){
var statearr_31298_32767 = state_31250__$1;
(statearr_31298_32767[(1)] = (21));

} else {
var statearr_31299_32769 = state_31250__$1;
(statearr_31299_32769[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31251 === (5))){
var inst_31194 = cljs.core.async.close_BANG_(out);
var state_31250__$1 = state_31250;
var statearr_31300_32775 = state_31250__$1;
(statearr_31300_32775[(2)] = inst_31194);

(statearr_31300_32775[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31251 === (14))){
var inst_31216 = (state_31250[(7)]);
var inst_31218 = cljs.core.chunked_seq_QMARK_(inst_31216);
var state_31250__$1 = state_31250;
if(inst_31218){
var statearr_31301_32783 = state_31250__$1;
(statearr_31301_32783[(1)] = (17));

} else {
var statearr_31302_32789 = state_31250__$1;
(statearr_31302_32789[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31251 === (16))){
var inst_31234 = (state_31250[(2)]);
var state_31250__$1 = state_31250;
var statearr_31306_32793 = state_31250__$1;
(statearr_31306_32793[(2)] = inst_31234);

(statearr_31306_32793[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31251 === (10))){
var inst_31203 = (state_31250[(8)]);
var inst_31205 = (state_31250[(9)]);
var inst_31210 = cljs.core._nth(inst_31203,inst_31205);
var state_31250__$1 = state_31250;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31250__$1,(13),out,inst_31210);
} else {
if((state_val_31251 === (18))){
var inst_31216 = (state_31250[(7)]);
var inst_31225 = cljs.core.first(inst_31216);
var state_31250__$1 = state_31250;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31250__$1,(20),out,inst_31225);
} else {
if((state_val_31251 === (8))){
var inst_31205 = (state_31250[(9)]);
var inst_31204 = (state_31250[(12)]);
var inst_31207 = (inst_31205 < inst_31204);
var inst_31208 = inst_31207;
var state_31250__$1 = state_31250;
if(cljs.core.truth_(inst_31208)){
var statearr_31310_32819 = state_31250__$1;
(statearr_31310_32819[(1)] = (10));

} else {
var statearr_31311_32821 = state_31250__$1;
(statearr_31311_32821[(1)] = (11));

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
var cljs$core$async$mapcat_STAR__$_state_machine__28585__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__28585__auto____0 = (function (){
var statearr_31312 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31312[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__28585__auto__);

(statearr_31312[(1)] = (1));

return statearr_31312;
});
var cljs$core$async$mapcat_STAR__$_state_machine__28585__auto____1 = (function (state_31250){
while(true){
var ret_value__28586__auto__ = (function (){try{while(true){
var result__28587__auto__ = switch__28584__auto__(state_31250);
if(cljs.core.keyword_identical_QMARK_(result__28587__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28587__auto__;
}
break;
}
}catch (e31313){var ex__28588__auto__ = e31313;
var statearr_31314_32827 = state_31250;
(statearr_31314_32827[(2)] = ex__28588__auto__);


if(cljs.core.seq((state_31250[(4)]))){
var statearr_31315_32828 = state_31250;
(statearr_31315_32828[(1)] = cljs.core.first((state_31250[(4)])));

} else {
throw ex__28588__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28586__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32830 = state_31250;
state_31250 = G__32830;
continue;
} else {
return ret_value__28586__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__28585__auto__ = function(state_31250){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__28585__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__28585__auto____1.call(this,state_31250);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__28585__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__28585__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__28585__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__28585__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__28585__auto__;
})()
})();
var state__28763__auto__ = (function (){var statearr_31316 = f__28762__auto__();
(statearr_31316[(6)] = c__28761__auto__);

return statearr_31316;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28763__auto__);
}));

return c__28761__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__31319 = arguments.length;
switch (G__31319) {
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
var G__31321 = arguments.length;
switch (G__31321) {
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
var G__31325 = arguments.length;
switch (G__31325) {
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
var c__28761__auto___32877 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28762__auto__ = (function (){var switch__28584__auto__ = (function (state_31353){
var state_val_31354 = (state_31353[(1)]);
if((state_val_31354 === (7))){
var inst_31348 = (state_31353[(2)]);
var state_31353__$1 = state_31353;
var statearr_31355_32883 = state_31353__$1;
(statearr_31355_32883[(2)] = inst_31348);

(statearr_31355_32883[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31354 === (1))){
var inst_31330 = null;
var state_31353__$1 = (function (){var statearr_31356 = state_31353;
(statearr_31356[(7)] = inst_31330);

return statearr_31356;
})();
var statearr_31357_32890 = state_31353__$1;
(statearr_31357_32890[(2)] = null);

(statearr_31357_32890[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31354 === (4))){
var inst_31333 = (state_31353[(8)]);
var inst_31333__$1 = (state_31353[(2)]);
var inst_31334 = (inst_31333__$1 == null);
var inst_31335 = cljs.core.not(inst_31334);
var state_31353__$1 = (function (){var statearr_31358 = state_31353;
(statearr_31358[(8)] = inst_31333__$1);

return statearr_31358;
})();
if(inst_31335){
var statearr_31359_32899 = state_31353__$1;
(statearr_31359_32899[(1)] = (5));

} else {
var statearr_31360_32904 = state_31353__$1;
(statearr_31360_32904[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31354 === (6))){
var state_31353__$1 = state_31353;
var statearr_31361_32914 = state_31353__$1;
(statearr_31361_32914[(2)] = null);

(statearr_31361_32914[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31354 === (3))){
var inst_31350 = (state_31353[(2)]);
var inst_31351 = cljs.core.async.close_BANG_(out);
var state_31353__$1 = (function (){var statearr_31362 = state_31353;
(statearr_31362[(9)] = inst_31350);

return statearr_31362;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_31353__$1,inst_31351);
} else {
if((state_val_31354 === (2))){
var state_31353__$1 = state_31353;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31353__$1,(4),ch);
} else {
if((state_val_31354 === (11))){
var inst_31333 = (state_31353[(8)]);
var inst_31342 = (state_31353[(2)]);
var inst_31330 = inst_31333;
var state_31353__$1 = (function (){var statearr_31363 = state_31353;
(statearr_31363[(7)] = inst_31330);

(statearr_31363[(10)] = inst_31342);

return statearr_31363;
})();
var statearr_31364_32935 = state_31353__$1;
(statearr_31364_32935[(2)] = null);

(statearr_31364_32935[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31354 === (9))){
var inst_31333 = (state_31353[(8)]);
var state_31353__$1 = state_31353;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31353__$1,(11),out,inst_31333);
} else {
if((state_val_31354 === (5))){
var inst_31330 = (state_31353[(7)]);
var inst_31333 = (state_31353[(8)]);
var inst_31337 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_31333,inst_31330);
var state_31353__$1 = state_31353;
if(inst_31337){
var statearr_31366_32951 = state_31353__$1;
(statearr_31366_32951[(1)] = (8));

} else {
var statearr_31367_32955 = state_31353__$1;
(statearr_31367_32955[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31354 === (10))){
var inst_31345 = (state_31353[(2)]);
var state_31353__$1 = state_31353;
var statearr_31368_32957 = state_31353__$1;
(statearr_31368_32957[(2)] = inst_31345);

(statearr_31368_32957[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31354 === (8))){
var inst_31330 = (state_31353[(7)]);
var tmp31365 = inst_31330;
var inst_31330__$1 = tmp31365;
var state_31353__$1 = (function (){var statearr_31369 = state_31353;
(statearr_31369[(7)] = inst_31330__$1);

return statearr_31369;
})();
var statearr_31370_32964 = state_31353__$1;
(statearr_31370_32964[(2)] = null);

(statearr_31370_32964[(1)] = (2));


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
var cljs$core$async$state_machine__28585__auto__ = null;
var cljs$core$async$state_machine__28585__auto____0 = (function (){
var statearr_31371 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_31371[(0)] = cljs$core$async$state_machine__28585__auto__);

(statearr_31371[(1)] = (1));

return statearr_31371;
});
var cljs$core$async$state_machine__28585__auto____1 = (function (state_31353){
while(true){
var ret_value__28586__auto__ = (function (){try{while(true){
var result__28587__auto__ = switch__28584__auto__(state_31353);
if(cljs.core.keyword_identical_QMARK_(result__28587__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28587__auto__;
}
break;
}
}catch (e31372){var ex__28588__auto__ = e31372;
var statearr_31373_32968 = state_31353;
(statearr_31373_32968[(2)] = ex__28588__auto__);


if(cljs.core.seq((state_31353[(4)]))){
var statearr_31374_32969 = state_31353;
(statearr_31374_32969[(1)] = cljs.core.first((state_31353[(4)])));

} else {
throw ex__28588__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28586__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32970 = state_31353;
state_31353 = G__32970;
continue;
} else {
return ret_value__28586__auto__;
}
break;
}
});
cljs$core$async$state_machine__28585__auto__ = function(state_31353){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28585__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28585__auto____1.call(this,state_31353);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28585__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28585__auto____0;
cljs$core$async$state_machine__28585__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28585__auto____1;
return cljs$core$async$state_machine__28585__auto__;
})()
})();
var state__28763__auto__ = (function (){var statearr_31376 = f__28762__auto__();
(statearr_31376[(6)] = c__28761__auto___32877);

return statearr_31376;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28763__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__31378 = arguments.length;
switch (G__31378) {
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
var c__28761__auto___32984 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28762__auto__ = (function (){var switch__28584__auto__ = (function (state_31425){
var state_val_31426 = (state_31425[(1)]);
if((state_val_31426 === (7))){
var inst_31421 = (state_31425[(2)]);
var state_31425__$1 = state_31425;
var statearr_31430_32995 = state_31425__$1;
(statearr_31430_32995[(2)] = inst_31421);

(statearr_31430_32995[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31426 === (1))){
var inst_31379 = (new Array(n));
var inst_31380 = inst_31379;
var inst_31381 = (0);
var state_31425__$1 = (function (){var statearr_31431 = state_31425;
(statearr_31431[(7)] = inst_31380);

(statearr_31431[(8)] = inst_31381);

return statearr_31431;
})();
var statearr_31432_33004 = state_31425__$1;
(statearr_31432_33004[(2)] = null);

(statearr_31432_33004[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31426 === (4))){
var inst_31385 = (state_31425[(9)]);
var inst_31385__$1 = (state_31425[(2)]);
var inst_31386 = (inst_31385__$1 == null);
var inst_31387 = cljs.core.not(inst_31386);
var state_31425__$1 = (function (){var statearr_31433 = state_31425;
(statearr_31433[(9)] = inst_31385__$1);

return statearr_31433;
})();
if(inst_31387){
var statearr_31434_33016 = state_31425__$1;
(statearr_31434_33016[(1)] = (5));

} else {
var statearr_31435_33018 = state_31425__$1;
(statearr_31435_33018[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31426 === (15))){
var inst_31414 = (state_31425[(2)]);
var state_31425__$1 = state_31425;
var statearr_31436_33021 = state_31425__$1;
(statearr_31436_33021[(2)] = inst_31414);

(statearr_31436_33021[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31426 === (13))){
var state_31425__$1 = state_31425;
var statearr_31437_33022 = state_31425__$1;
(statearr_31437_33022[(2)] = null);

(statearr_31437_33022[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31426 === (6))){
var inst_31381 = (state_31425[(8)]);
var inst_31404 = (inst_31381 > (0));
var state_31425__$1 = state_31425;
if(cljs.core.truth_(inst_31404)){
var statearr_31438_33028 = state_31425__$1;
(statearr_31438_33028[(1)] = (12));

} else {
var statearr_31440_33030 = state_31425__$1;
(statearr_31440_33030[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31426 === (3))){
var inst_31423 = (state_31425[(2)]);
var state_31425__$1 = state_31425;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31425__$1,inst_31423);
} else {
if((state_val_31426 === (12))){
var inst_31380 = (state_31425[(7)]);
var inst_31412 = cljs.core.vec(inst_31380);
var state_31425__$1 = state_31425;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31425__$1,(15),out,inst_31412);
} else {
if((state_val_31426 === (2))){
var state_31425__$1 = state_31425;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31425__$1,(4),ch);
} else {
if((state_val_31426 === (11))){
var inst_31398 = (state_31425[(2)]);
var inst_31399 = (new Array(n));
var inst_31380 = inst_31399;
var inst_31381 = (0);
var state_31425__$1 = (function (){var statearr_31442 = state_31425;
(statearr_31442[(7)] = inst_31380);

(statearr_31442[(8)] = inst_31381);

(statearr_31442[(10)] = inst_31398);

return statearr_31442;
})();
var statearr_31443_33042 = state_31425__$1;
(statearr_31443_33042[(2)] = null);

(statearr_31443_33042[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31426 === (9))){
var inst_31380 = (state_31425[(7)]);
var inst_31396 = cljs.core.vec(inst_31380);
var state_31425__$1 = state_31425;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31425__$1,(11),out,inst_31396);
} else {
if((state_val_31426 === (5))){
var inst_31380 = (state_31425[(7)]);
var inst_31381 = (state_31425[(8)]);
var inst_31391 = (state_31425[(11)]);
var inst_31385 = (state_31425[(9)]);
var inst_31389 = (inst_31380[inst_31381] = inst_31385);
var inst_31391__$1 = (inst_31381 + (1));
var inst_31392 = (inst_31391__$1 < n);
var state_31425__$1 = (function (){var statearr_31446 = state_31425;
(statearr_31446[(11)] = inst_31391__$1);

(statearr_31446[(12)] = inst_31389);

return statearr_31446;
})();
if(cljs.core.truth_(inst_31392)){
var statearr_31447_33052 = state_31425__$1;
(statearr_31447_33052[(1)] = (8));

} else {
var statearr_31449_33053 = state_31425__$1;
(statearr_31449_33053[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31426 === (14))){
var inst_31418 = (state_31425[(2)]);
var inst_31419 = cljs.core.async.close_BANG_(out);
var state_31425__$1 = (function (){var statearr_31453 = state_31425;
(statearr_31453[(13)] = inst_31418);

return statearr_31453;
})();
var statearr_31454_33058 = state_31425__$1;
(statearr_31454_33058[(2)] = inst_31419);

(statearr_31454_33058[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31426 === (10))){
var inst_31402 = (state_31425[(2)]);
var state_31425__$1 = state_31425;
var statearr_31459_33059 = state_31425__$1;
(statearr_31459_33059[(2)] = inst_31402);

(statearr_31459_33059[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31426 === (8))){
var inst_31380 = (state_31425[(7)]);
var inst_31391 = (state_31425[(11)]);
var tmp31450 = inst_31380;
var inst_31380__$1 = tmp31450;
var inst_31381 = inst_31391;
var state_31425__$1 = (function (){var statearr_31464 = state_31425;
(statearr_31464[(7)] = inst_31380__$1);

(statearr_31464[(8)] = inst_31381);

return statearr_31464;
})();
var statearr_31465_33069 = state_31425__$1;
(statearr_31465_33069[(2)] = null);

(statearr_31465_33069[(1)] = (2));


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
var cljs$core$async$state_machine__28585__auto__ = null;
var cljs$core$async$state_machine__28585__auto____0 = (function (){
var statearr_31468 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31468[(0)] = cljs$core$async$state_machine__28585__auto__);

(statearr_31468[(1)] = (1));

return statearr_31468;
});
var cljs$core$async$state_machine__28585__auto____1 = (function (state_31425){
while(true){
var ret_value__28586__auto__ = (function (){try{while(true){
var result__28587__auto__ = switch__28584__auto__(state_31425);
if(cljs.core.keyword_identical_QMARK_(result__28587__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28587__auto__;
}
break;
}
}catch (e31470){var ex__28588__auto__ = e31470;
var statearr_31471_33073 = state_31425;
(statearr_31471_33073[(2)] = ex__28588__auto__);


if(cljs.core.seq((state_31425[(4)]))){
var statearr_31476_33074 = state_31425;
(statearr_31476_33074[(1)] = cljs.core.first((state_31425[(4)])));

} else {
throw ex__28588__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28586__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33075 = state_31425;
state_31425 = G__33075;
continue;
} else {
return ret_value__28586__auto__;
}
break;
}
});
cljs$core$async$state_machine__28585__auto__ = function(state_31425){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28585__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28585__auto____1.call(this,state_31425);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28585__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28585__auto____0;
cljs$core$async$state_machine__28585__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28585__auto____1;
return cljs$core$async$state_machine__28585__auto__;
})()
})();
var state__28763__auto__ = (function (){var statearr_31477 = f__28762__auto__();
(statearr_31477[(6)] = c__28761__auto___32984);

return statearr_31477;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28763__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__31479 = arguments.length;
switch (G__31479) {
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
var c__28761__auto___33084 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28762__auto__ = (function (){var switch__28584__auto__ = (function (state_31521){
var state_val_31522 = (state_31521[(1)]);
if((state_val_31522 === (7))){
var inst_31517 = (state_31521[(2)]);
var state_31521__$1 = state_31521;
var statearr_31524_33090 = state_31521__$1;
(statearr_31524_33090[(2)] = inst_31517);

(statearr_31524_33090[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31522 === (1))){
var inst_31480 = [];
var inst_31481 = inst_31480;
var inst_31482 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_31521__$1 = (function (){var statearr_31526 = state_31521;
(statearr_31526[(7)] = inst_31481);

(statearr_31526[(8)] = inst_31482);

return statearr_31526;
})();
var statearr_31527_33096 = state_31521__$1;
(statearr_31527_33096[(2)] = null);

(statearr_31527_33096[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31522 === (4))){
var inst_31485 = (state_31521[(9)]);
var inst_31485__$1 = (state_31521[(2)]);
var inst_31486 = (inst_31485__$1 == null);
var inst_31487 = cljs.core.not(inst_31486);
var state_31521__$1 = (function (){var statearr_31528 = state_31521;
(statearr_31528[(9)] = inst_31485__$1);

return statearr_31528;
})();
if(inst_31487){
var statearr_31529_33099 = state_31521__$1;
(statearr_31529_33099[(1)] = (5));

} else {
var statearr_31530_33102 = state_31521__$1;
(statearr_31530_33102[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31522 === (15))){
var inst_31511 = (state_31521[(2)]);
var state_31521__$1 = state_31521;
var statearr_31531_33103 = state_31521__$1;
(statearr_31531_33103[(2)] = inst_31511);

(statearr_31531_33103[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31522 === (13))){
var state_31521__$1 = state_31521;
var statearr_31533_33106 = state_31521__$1;
(statearr_31533_33106[(2)] = null);

(statearr_31533_33106[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31522 === (6))){
var inst_31481 = (state_31521[(7)]);
var inst_31506 = inst_31481.length;
var inst_31507 = (inst_31506 > (0));
var state_31521__$1 = state_31521;
if(cljs.core.truth_(inst_31507)){
var statearr_31534_33107 = state_31521__$1;
(statearr_31534_33107[(1)] = (12));

} else {
var statearr_31535_33108 = state_31521__$1;
(statearr_31535_33108[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31522 === (3))){
var inst_31519 = (state_31521[(2)]);
var state_31521__$1 = state_31521;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31521__$1,inst_31519);
} else {
if((state_val_31522 === (12))){
var inst_31481 = (state_31521[(7)]);
var inst_31509 = cljs.core.vec(inst_31481);
var state_31521__$1 = state_31521;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31521__$1,(15),out,inst_31509);
} else {
if((state_val_31522 === (2))){
var state_31521__$1 = state_31521;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31521__$1,(4),ch);
} else {
if((state_val_31522 === (11))){
var inst_31485 = (state_31521[(9)]);
var inst_31489 = (state_31521[(10)]);
var inst_31499 = (state_31521[(2)]);
var inst_31500 = [];
var inst_31501 = inst_31500.push(inst_31485);
var inst_31481 = inst_31500;
var inst_31482 = inst_31489;
var state_31521__$1 = (function (){var statearr_31537 = state_31521;
(statearr_31537[(11)] = inst_31499);

(statearr_31537[(12)] = inst_31501);

(statearr_31537[(7)] = inst_31481);

(statearr_31537[(8)] = inst_31482);

return statearr_31537;
})();
var statearr_31538_33112 = state_31521__$1;
(statearr_31538_33112[(2)] = null);

(statearr_31538_33112[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31522 === (9))){
var inst_31481 = (state_31521[(7)]);
var inst_31497 = cljs.core.vec(inst_31481);
var state_31521__$1 = state_31521;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31521__$1,(11),out,inst_31497);
} else {
if((state_val_31522 === (5))){
var inst_31485 = (state_31521[(9)]);
var inst_31489 = (state_31521[(10)]);
var inst_31482 = (state_31521[(8)]);
var inst_31489__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_31485) : f.call(null,inst_31485));
var inst_31490 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_31489__$1,inst_31482);
var inst_31491 = cljs.core.keyword_identical_QMARK_(inst_31482,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_31492 = ((inst_31490) || (inst_31491));
var state_31521__$1 = (function (){var statearr_31539 = state_31521;
(statearr_31539[(10)] = inst_31489__$1);

return statearr_31539;
})();
if(cljs.core.truth_(inst_31492)){
var statearr_31540_33113 = state_31521__$1;
(statearr_31540_33113[(1)] = (8));

} else {
var statearr_31541_33114 = state_31521__$1;
(statearr_31541_33114[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31522 === (14))){
var inst_31514 = (state_31521[(2)]);
var inst_31515 = cljs.core.async.close_BANG_(out);
var state_31521__$1 = (function (){var statearr_31543 = state_31521;
(statearr_31543[(13)] = inst_31514);

return statearr_31543;
})();
var statearr_31546_33115 = state_31521__$1;
(statearr_31546_33115[(2)] = inst_31515);

(statearr_31546_33115[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31522 === (10))){
var inst_31504 = (state_31521[(2)]);
var state_31521__$1 = state_31521;
var statearr_31547_33116 = state_31521__$1;
(statearr_31547_33116[(2)] = inst_31504);

(statearr_31547_33116[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31522 === (8))){
var inst_31485 = (state_31521[(9)]);
var inst_31489 = (state_31521[(10)]);
var inst_31481 = (state_31521[(7)]);
var inst_31494 = inst_31481.push(inst_31485);
var tmp31542 = inst_31481;
var inst_31481__$1 = tmp31542;
var inst_31482 = inst_31489;
var state_31521__$1 = (function (){var statearr_31553 = state_31521;
(statearr_31553[(14)] = inst_31494);

(statearr_31553[(7)] = inst_31481__$1);

(statearr_31553[(8)] = inst_31482);

return statearr_31553;
})();
var statearr_31556_33126 = state_31521__$1;
(statearr_31556_33126[(2)] = null);

(statearr_31556_33126[(1)] = (2));


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
var cljs$core$async$state_machine__28585__auto__ = null;
var cljs$core$async$state_machine__28585__auto____0 = (function (){
var statearr_31561 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31561[(0)] = cljs$core$async$state_machine__28585__auto__);

(statearr_31561[(1)] = (1));

return statearr_31561;
});
var cljs$core$async$state_machine__28585__auto____1 = (function (state_31521){
while(true){
var ret_value__28586__auto__ = (function (){try{while(true){
var result__28587__auto__ = switch__28584__auto__(state_31521);
if(cljs.core.keyword_identical_QMARK_(result__28587__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28587__auto__;
}
break;
}
}catch (e31565){var ex__28588__auto__ = e31565;
var statearr_31570_33133 = state_31521;
(statearr_31570_33133[(2)] = ex__28588__auto__);


if(cljs.core.seq((state_31521[(4)]))){
var statearr_31572_33134 = state_31521;
(statearr_31572_33134[(1)] = cljs.core.first((state_31521[(4)])));

} else {
throw ex__28588__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28586__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33137 = state_31521;
state_31521 = G__33137;
continue;
} else {
return ret_value__28586__auto__;
}
break;
}
});
cljs$core$async$state_machine__28585__auto__ = function(state_31521){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28585__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28585__auto____1.call(this,state_31521);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28585__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28585__auto____0;
cljs$core$async$state_machine__28585__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28585__auto____1;
return cljs$core$async$state_machine__28585__auto__;
})()
})();
var state__28763__auto__ = (function (){var statearr_31577 = f__28762__auto__();
(statearr_31577[(6)] = c__28761__auto___33084);

return statearr_31577;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28763__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
