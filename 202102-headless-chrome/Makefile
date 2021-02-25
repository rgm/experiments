# shadow build for cljs
watch:
	shadow-cljs watch app

repl:
	clj -A:dev -M -m nrepl.cmdline --middleware [cider.nrepl/cider-middleware] --interactive --color

server:
	clj -M -m rgm.main

CONTAINER_NAME="rgm_headless_chrome"
 # CHROME_PORT on *host*: clojure needs to know this
CHROME_PORT=9222

start-chrome:
	docker container run --detach --rm --name $(CONTAINER_NAME) --publish $(CHROME_PORT):9222 zenika/alpine-chrome --no-sandbox --remote-debugging-address=0.0.0.0 --remote-debugging-port=9222 --disable-gpu

stop-chrome:
	docker container stop $(CONTAINER_NAME)

test-chrome:
	docker container run -it --rm -v $(pwd):/usr/src/app zenika/alpine-chrome --no-sandbox --print-to-pdf=/usr/src/app/foo.pdf --hide-scrollbars https://www.chromestatus.com/
