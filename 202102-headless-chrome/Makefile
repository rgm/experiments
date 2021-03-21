# shadow build for cljs
watch:
	shadow-cljs watch app

repl:
	clj -A:dev -M -m nrepl.cmdline --middleware [cider.nrepl/cider-middleware] --interactive --color

server:
	clj -M -m rgm.main

CONTAINER_NAME="rgm_headless_chrome"
 # CHROME_PORT on *host* (ie. outside docker): clojure needs to know this
CHROME_PORT=9222
# test url needs to be visible to chrome within the docker instance so *not* localhost
# see https://docs.docker.com/docker-for-mac/networking/
# TEST_URL="http://localhost:4000"
TEST_URL="http://host.docker.internal:4000/"

start-docker-chrome:
	docker container run --detach --rm --name $(CONTAINER_NAME) --publish $(CHROME_PORT):9222 zenika/alpine-chrome --no-sandbox --remote-debugging-address=0.0.0.0 --remote-debugging-port=9222 --disable-gpu

stop-docker-chrome:
	docker container stop $(CONTAINER_NAME)

test-docker-chrome:
	docker container run -it --rm -v $(shell pwd):/usr/src/app zenika/alpine-chrome --headless --no-sandbox --print-to-pdf=/usr/src/app/testpage-docker.pdf --hide-scrollbars $(TEST_URL)

shell-docker-chrome:
	docker exec -it --user root $(CONTAINER_NAME) /bin/sh

start-desktop-chrome:
	"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" --remote-debugging-port $(CHROME_PORT)

clean:
	rm testpage-*.pdf
