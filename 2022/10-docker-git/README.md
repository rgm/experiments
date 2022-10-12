# stupid docker bug

working hypothesis: Seems (maybe) docker desktop 4.2.0 on arm macs makes `circleci local execute`
work ok, at the cost of killing the ability of clojure in a container to pull any ssh deps at all.

run with docker desktop 4.2.0
```
❯ make
docker build . --platform linux/amd64
[+] Building 6.5s (9/9) FINISHED
 => [internal] load build definition from Dockerfile                                                     0.0s
 => => transferring dockerfile: 37B                                                                      0.0s
 => [internal] load .dockerignore                                                                        0.0s
 => => transferring context: 2B                                                                          0.0s
 => [internal] load metadata for docker.io/library/clojure:temurin-17-tools-deps-1.11.1.1165-bullseye    0.6s
 => [internal] load build context                                                                        0.0s
 => => transferring context: 29B                                                                         0.0s
 => [1/5] FROM docker.io/library/clojure:temurin-17-tools-deps-1.11.1.1165-bullseye@sha256:1569bd1f8964  0.0s
 => CACHED [2/5] WORKDIR /app                                                                            0.0s
 => CACHED [3/5] RUN apt-get update && apt-get install -y git                                            0.0s
 => CACHED [4/5] COPY deps.edn ./                                                                        0.0s
 => ERROR [5/5] RUN clojure -P                                                                           5.7s
------
 > [5/5] RUN clojure -P:
#9 5.648 Cloning: https://github.com/clojure/tools.build.git
#9 5.684 Error building classpath. Cannot run program "git": error=0, Failed to exec spawn helper: pid: 51, exit value: 1
#9 5.686 java.io.IOException: Cannot run program "git": error=0, Failed to exec spawn helper: pid: 51, exit value: 1
#9 5.689 	at java.base/java.lang.ProcessBuilder.start(ProcessBuilder.java:1143)
#9 5.689 	at java.base/java.lang.ProcessBuilder.start(ProcessBuilder.java:1073)
#9 5.689 	at clojure.tools.gitlibs.impl$run_git.invokeStatic(impl.clj:36)
#9 5.690 	at clojure.tools.gitlibs.impl$git_clone_bare.invokeStatic(impl.clj:100)
#9 5.690 	at clojure.tools.gitlibs.impl$ensure_git_dir.invokeStatic(impl.clj:111)
#9 5.690 	at clojure.tools.gitlibs$tags.invokeStatic(gitlibs.clj:87)
#9 5.690 	at clojure.tools.deps.alpha.extensions.git$fn__1414.invokeStatic(git.clj:67)
#9 5.690 	at clojure.tools.deps.alpha.extensions.git$fn__1414.invoke(git.clj:56)
#9 5.691 	at clojure.lang.MultiFn.invoke(MultiFn.java:239)
#9 5.691 	at clojure.tools.deps.alpha$canonicalize_deps$fn__749.invoke(alpha.clj:365)
#9 5.691 	at clojure.core.protocols$iter_reduce.invokeStatic(protocols.clj:49)
#9 5.691 	at clojure.core.protocols$fn__8230.invokeStatic(protocols.clj:75)
#9 5.691 	at clojure.core.protocols$fn__8230.invoke(protocols.clj:75)
#9 5.691 	at clojure.core.protocols$fn__8178$G__8173__8191.invoke(protocols.clj:13)
#9 5.691 	at clojure.core$reduce.invokeStatic(core.clj:6886)
#9 5.691 	at clojure.tools.deps.alpha$canonicalize_deps.invokeStatic(alpha.clj:362)
#9 5.692 	at clojure.tools.deps.alpha$resolve_deps.invokeStatic(alpha.clj:494)
#9 5.692 	at clojure.tools.deps.alpha$calc_basis.invokeStatic(alpha.clj:743)
#9 5.692 	at clojure.tools.deps.alpha.script.make_classpath2$run_core.invokeStatic(make_classpath2.clj:132)
#9 5.692 	at clojure.tools.deps.alpha.script.make_classpath2$run.invokeStatic(make_classpath2.clj:174)
#9 5.692 	at clojure.tools.deps.alpha.script.make_classpath2$_main.invokeStatic(make_classpath2.clj:228)
#9 5.692 	at clojure.tools.deps.alpha.script.make_classpath2$_main.doInvoke(make_classpath2.clj:195)
#9 5.693 	at clojure.lang.RestFn.applyTo(RestFn.java:137)
#9 5.693 	at clojure.lang.Var.applyTo(Var.java:705)
#9 5.693 	at clojure.core$apply.invokeStatic(core.clj:667)
#9 5.693 	at clojure.main$main_opt.invokeStatic(main.clj:514)
#9 5.693 	at clojure.main$main_opt.invoke(main.clj:510)
#9 5.693 	at clojure.main$main.invokeStatic(main.clj:664)
#9 5.693 	at clojure.main$main.doInvoke(main.clj:616)
#9 5.694 	at clojure.lang.RestFn.applyTo(RestFn.java:137)
#9 5.694 	at clojure.lang.Var.applyTo(Var.java:705)
#9 5.694 	at clojure.main.main(main.java:40)
#9 5.695 Caused by: java.io.IOException: error=0, Failed to exec spawn helper: pid: 51, exit value: 1
#9 5.695 	at java.base/java.lang.ProcessImpl.forkAndExec(Native Method)
#9 5.695 	at java.base/java.lang.ProcessImpl.<init>(ProcessImpl.java:314)
#9 5.695 	at java.base/java.lang.ProcessImpl.start(ProcessImpl.java:244)
#9 5.695 	at java.base/java.lang.ProcessBuilder.start(ProcessBuilder.java:1110)
#9 5.695 	... 31 more
------
executor failed running [/bin/sh -c clojure -P]: exit code: 1
make: *** [all] Error 1
```
