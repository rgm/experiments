# 201910-skinny-aot

## Usage

`make && bin/run`

## Background

Trying to produce an executable JAR with *only* our clojure, AOT-compiled and
relying on dependencies yanked down by Maven.

Has some experiments with badigeon, pack.alpha and `lein jar`, but in the end
didn't need anything but `clojure.core/compile`, `jar` and `mvn`.

See also:

https://docs.oracle.com/javase/tutorial/deployment/jar/build.html
https://clojure.org/reference/compilation
