mylib/dist/index.js:
	cd mylib && npm run build

prepare: mylib/node_modules myapp/node_modules

mylib/node_modules:
	cd mylib && npm i
	touch $@

myapp/node_modules:
	cd mylib && npm i
	touch $@
