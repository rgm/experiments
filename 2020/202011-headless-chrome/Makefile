all:
	clj -M -m rgm.core

pdfservice:
	docker container run -p 9222:9222 zenika/alpine-chrome --no-sandbox --remote-debugging-address=0.0.0.0 --remote-debugging-port=9222 --disable-gpu

repl:
	clj -A:nrepl

clean:
	rm github-test.pdf
