# tools.build example

See https://clojurians.slack.com/archives/C6QH853H8/p1632501839306000

## Usage

```
% ./bin/build
% java -cp target/test-0.1.0-standalone.jar clojure.main -m rgm.core
1
```

## Experiment

Does tools.build `b/uber` pull in non-code resources from libs?

If the uberjar includes `lib/rgmlib/resources/hug.sql`, you'll see a `1` output.
If it doesn't, then probably the `(hug/def-db-fns ,,,)` call in `rgmlib.core`
will blow up and throw an exception.

## Result

Yep, got a `1` and I can see `hug.sql` in the uberjar. Verdict: Yes, non-code
stuff on the dependency tree *does* get pulled in to the overall uberjar.
