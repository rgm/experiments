all: target/app.jar

CLJ_SOURCES=$(shell  find src/clj -name "*.clj")
CLJS_SOURCES=$(shell find src/clj -name "*.cljs")
CLJC_SOURCES=$(shell find src/clj -name "*.cljc")
CSS_SOURCES=$(shell  find src/css -name "*.css")

INTERMEDIATE_BUILD_PRODUCTS=resources/public/screen.min.css resources/public/app.min.js

target/app.jar: deps.edn $(CLJ_SOURCES) $(CLJC_SOURCES) $(INTERMEDIATE_BUILD_PRODUCTS)
	clojure -A:build \
		--main uberdeps.uberjar \
		--target "$@"

resources/public/screen.min.css: node_modules src/css/postcss.config.js $(CSS_SOURCES)
	npx postcss -c styles/postcss.config.js -o "$@" $(CSS_SOURCES)

resources/public/app.min.js: deps.edn $(CLJS_SOURCES) $(CLJC_SOURCES)
	clojure --main figwheel.main --build-once min

node_modules: package.json
	npm install
	@touch node_modules

TMP_FILES=.cljs_nashorn_repl \
					.cljs_node_repl \
					.nrepl-port\
					nashorn_code_cache\
					out\
					target

clean:
	rm -rf $(TMP_FILES)
	find . -name .DS_Store -exec rm {} \;

clobber: clean
	rm -rf $(INTERMEDIATE_BUILD_PRODUCTS)
	rm -rf node_modules
	rm -rf .cpcache .rebel_readline_history

.PHONY: build clean clobber
