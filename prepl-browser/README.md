# vim-conjure + prepl + figwheel + webpack

Trying to get a browser connection going via prepl since nrepl/piggieback has
been so challenging for me. This combines:

- tools.deps
- figwheel
- conjure and prepls
- webpack foreign libs (here just react, but aspirationally more things that
- cljsjs tends not to be too up-the-minute on).

## Getting going

1. Bootstrap: node, clj
2. `make repl`
3. From the repl, type `(go)` to start the jvm prepl
4. From repl or vim/conjure, eval `(start-all-fig)` to start figwheel plus a
   prepl into figwheel
5. Browser should be connected on 9500
6. `:ConjureUp` to connect the jvm and fig prepls within vim
7. Go into the `pfig.test` namespace and try evaluating cljs. It should run in
   the browser.

## Known issues

- For reasons that are not clear to me, some parts of the compiled cljs end up
  in `out/` instead of `target/public/cljs-out/` when I introduce webpack
  foreign libs. It tends to be eg. spec.alpha and test namespaces, and not
  anything I've required directly.

- https://oli.me.uk/2019-03-22-clojure-socket-prepl-cookbook/
- https://github.com/Olical/conjure
