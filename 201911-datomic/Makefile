all: datomic repl

repl:
	clj -A:nrepl

datomic: datomic-free-0.9.5703.21.tar.gz
	mkdir datomic && tar zxf datomic-free-0.9.5703.21.tar.gz -C datomic --strip-components 1
	cd datomic && cp config/samples/free-transactor-template.properties transactor.properties
	cd datomic && bin/maven-install
	echo "now cd into `datomic` and run `bin/transactor transactor.properties`"

datomic-free-0.9.5703.21.tar.gz:
	wget -O $@ https://my.datomic.com/downloads/free/0.9.5703.21

clobber:
	rm -rf datomic datomic-free-0.9.5703.21.tar.gz

.PHONY=clobber
