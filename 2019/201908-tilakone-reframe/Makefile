all: test

.PHONY: repl
repl:
	clojure -A:dev:frontend:test --main "rebel-readline.main"

.PHONY: clean clobber
clean:
	rm -rf target out pom.xml
	rm -rf nashorn_code_cache .cljs_nashorn_repl .cljs_node_repl
	rm -rf dist/*.js dist/*.map dist/css
	rm -rf .nrepl-port
	find . -name .DS_Store -exec rm {} \;

clobber: clean
	rm -rf tmp node_modules .cpcache .rebel_readline_history

# utility tasks

show-figwheel-config:
	clojure -m figwheel.main -pc -b dev -r
