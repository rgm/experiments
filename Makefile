figwheel: bundle
	clojure -A:figwheel

.PHONY=show-figwheel-config
show-figwheel-config:
	clojure -m figwheel.main -pc -b dev -r

.PHONY=bundle
bundle:
	make -C npm dist/bundle.js

.PHONY=clean
clean:
	make -C npm clean
	rm -rf target/public

.PHONY=clobber
clobber: clean
	make -C npm clobber
