.PHONY: dev prd min show-figwheel-config foreign-dev foreign-prd clean clobber

dev: foreign-dev
	clojure --main rebel-readline.main --repl
	# clojure -A:figwheel

prd: foreign-prd
	clojure --main "figwheel.main" --build-once "config/prd"
	cp target/public/cljs-out/prd-main.js dist/app.js
	cp -r resources/public/css dist

min: foreign-prd
	clojure --main "figwheel.main" --build-once "config/min"
	cp target/public/cljs-out/min-main.js dist/app.js
	cp -r resources/public/css dist

show-figwheel-config:
	clojure -m figwheel.main -pc -b dev -r

foreign-dev: node_modules src/frontend/foreign_libs/**
	yarn webpack --config config/webpack-dev.config.js

foreign-prd: node_modules src/frontend/foreign_libs/**
	yarn webpack --config config/webpack-prd.config.js

node_modules: package.json
	yarn install
	touch node_modules

clean:
	rm -rf target out nashorn_code_cache .cljs_nashorn_repl
	rm -rf dist/*.js dist/*.map dist/css

clobber: clean
	rm -rf tmp node_modules

