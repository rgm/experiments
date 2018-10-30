# Re-frame template with figwheel.main

Starting point for a re-frame/figwheel project using tools.deps. I'm not at all
sure how robust or best-practicey this is (caveat emptor). There are probably
better templates out there. This one is documenting my own learning path as I
try to dupe and understand what `lein` and `boot` will usually do for me (and
do better).

Bootstrapping:
  - `brew install clojure`
  - provide Node and Yarn somehow (for foreign deps)

Running figwheel:
  - `make dev`
  - wait for repl to start
  -`(go)` will start nrepl and figwheel
  - if figwheel doesn't open a browser page itself, head to http://localhost:9500
    (or http://localhost:9500/cards.html for the devcards UI)
  - (alternate: just `clojure -A:figwheel` if you don't care about nrepl)

(see https://figwheel.org/docs/vim.html for nrepl/piggieback tips)

Production build:
  - `make prd` (google closure whitespace compile), or
  - `make min` (google closure advanced compile)

## Major concepts

A laundry list of things I'm trying to plug together and that you'll find herein:

- the new tools.deps stuff via a Makefile
- consuming js foreign libs via a separate webpack build and npm/yarn
- excluding cljsjs deps so that npm foreign libs can dominate (eg. React)
- running figwheel both from the figwheel.main module and programmatically
- adding devcards as a figwheel `extra-mains` thing
- using externs inference for google closure compiler advanced builds
- starting up my own nrepl server without using lein
- setting up piggieback for connecting a browser repl to vim
- reagent interop using `:>` instead of relying on clojurescript wrappers for semantic-ui
- using macros to suck in JSON specs for Vega at build-time ... lets me keep the Vega in JSON for easy pasting into online Vega editors instead of doing a translation to and from cljs
- a minimal re-frame setup within a single file
- expound and orchestra for some clojure.spec support, and doing a re-frame spec-check on every change to the store
- stylefy for local spot-styling of components
