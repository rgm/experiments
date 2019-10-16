all: build

CLJ_SOURCES=$(sh find src)

build: my-skinny.jar lib

classes: deps.edn $(CLJ_SOURCES)
	mkdir -p classes
	clojure -A:build -m rgm.build

lib: pom.xml
	mvn dependency:copy-dependencies

my-skinny.jar: classes pom.xml Manifest.txt
	# jar cfm "$@" Manifest.txt -C classes rgm/ # doesn't seem to do anything
	jar cf "$@" resources -C classes rgm/

clean:
	rm -rf classes

clobber:
	rm -rf lib my-skinny.jar

pom.xml: deps.edn
	clojure -Spom

.PHONY=build clean
