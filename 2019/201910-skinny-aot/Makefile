all: build

CLJ_SOURCES=$(sh find src)

build: my-skinny.jar lib

classes: deps.edn $(CLJ_SOURCES)
	mkdir -p classes
	clojure -A:build -m rgm.build

lib: pom.xml
	mvn dependency:copy-dependencies

my-skinny.jar: classes pom.xml Manifest.mf
	jar cfm "$@" Manifest.mf -C classes rgm/

clean:
	rm -rf classes

clobber: clean
	rm -rf lib target my-skinny.jar

pom.xml: deps.edn
	clojure -Spom

.PHONY=build clean
