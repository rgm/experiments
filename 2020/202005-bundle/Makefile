repl:
	clojure -A:test -m rebel-readline.main
.PHONY: repl

bundle:
	clj -m cljs.main -co bundle.cljs.edn -v -c -r

min:
	clj -m figwheel.main -bo min

rollup:
	npx rollup -c

webpack:
	npx webpack

clean:
	rm -rf target out pom.xml
	rm -rf nashorn_code_cache .cljs_nashorn_repl .cljs_node_repl
	rm -rf dist/*.js dist/*.map dist/css
	rm -rf .nrepl-port
	find . -name .DS_Store -exec rm {} \;

clobber: clean
	rm -rf tmp node_modules .cpcache .rebel_readline_history

.PHONY: clean clobber

# utility tasks

show-figwheel-config:
	clojure -m figwheel.main -pc -b dev -r
