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
  - (alternate: just `clojure -A:figwheel` if you don't care about nrepl)

(see https://figwheel.org/docs/vim.html for nrepl/piggieback tips)

Production build:
  - `make prd` (google closure whitespace compile), or
  - `make min` (google closure advanced compile)
