.PHONY: repl prd min show-figwheel-config foreign-libs clean clobber

repl: foreign-libs
	clojure --main rebel-readline.main --repl
	# clojure -A:figwheel

prd: foreign-libs
	clojure --main "figwheel.main" --build-once "prd"
	cp target/public/cljs-out/prd-main.js dist/app.js
	cp -r resources/public/css dist

min: foreign-libs
	clojure --main "figwheel.main" --build-once "min"
	cp target/public/cljs-out/min-main.js dist/app.js
	cp -r resources/public/css dist

show-figwheel-config:
	clojure -m figwheel.main -pc -b dev -r

foreign-libs: target/public/js-out

target/public/js-out: node_modules src/frontend/foreign_libs/**
	yarn webpack --config dev.webpack.js
	yarn webpack --config prd.webpack.js
	@touch $@

node_modules: package.json
	yarn install
	@touch $@

clean:
	rm -rf target out nashorn_code_cache .cljs_nashorn_repl
	rm -rf dist/*.js dist/*.map dist/css

clobber: clean
	rm -rf tmp node_modules
