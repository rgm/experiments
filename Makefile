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
repl: foreign-libs
	clojure --main rebel-readline.main --repl
	# clojure -A:figwheel

.PHONY: build foreign-libs
build: foreign-libs
	clojure --main "figwheel.main" --build-once "min"
	cp target/public/cljs-out/min-main.js dist/app.js
	cp -r resources/public/css dist

foreign-libs: target/public/js-out

target/public/js-out: node_modules src/frontend/foreign_libs/**
	yarn webpack --config dev.webpack.js
	yarn webpack --config prd.webpack.js
	@touch $@

node_modules: package.json
	yarn install
	@touch $@

.PHONY: clean clobber

clean:
	rm -rf target out nashorn_code_cache .cljs_nashorn_repl
	rm -rf dist/*.js dist/*.map dist/css
	find . -name .DS_Store -exec rm {} \;

clobber: clean
	rm -rf tmp node_modules

# utility tasks

show-figwheel-config:
	clojure -m figwheel.main -pc -b dev -r
