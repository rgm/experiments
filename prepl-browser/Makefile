repl: foreign_libs/dist/react.js
	clj

cljs:
	clojure --main "figwheel.main" --build-once "dev"

foreign_libs/dist/react.js: node_modules foreign_libs/src/react.js
	npx webpack --config webpack.js

node_modules: package.json
	npm install
	@touch $@ # prevent re-runs

clean:
	rm -rf out target foreign_libs/dist

.PHONY: repl cljs clean
