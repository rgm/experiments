.PHONY: repl
repl:
	clojure --main "rebel-readline.main"

.PHONY: clean clobber
clean:
	rm -rf target out pom.xml
	rm -rf nashorn_code_cache .cljs_nashorn_repl .cljs_node_repl
	rm -rf .nrepl-port
	find . -name .DS_Store -exec rm {} \;

clobber: clean
	rm -rf tmp .cpcache .rebel_readline_history
