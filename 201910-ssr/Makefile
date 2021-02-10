all: test

help:
	@echo "Usage:"
	@echo "make bootstrap   # what to install to get started"
	@echo "make test        # run tests"
	@echo "make repl        # start a dev REPL"
	@echo "make build       # production build"
	@echo "make clean       # clear intermediate build products"
	@echo "make clobber     # clear all libs, node_modules, etc."

bootstrap:
	@bin/bootstrap

.PHONY: test
test:
	bin/kaocha

.PHONY: repl
repl:
	clojure -A:dev:frontend:test --main "rebel-readline.main"
	# clojure -A:dev:frontend:test -A:rgm/rebl-11 # --main "rebel-readline.main"

.PHONY: build
build: resources/public/min-main.js uberjar

resources/public/min-main.js:
	clojure -A:frontend --main "figwheel.main" --build-once "min"

uberjar:
	clojure -A:build

node_modules: package.json
	npm install
	@touch $@

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
