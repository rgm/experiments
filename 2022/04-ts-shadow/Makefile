JSXSRC=$(shell find mylib/src)

mylib/dist/index.js: $(JSXSRC)
	cd mylib && npm run compile

prepare: mylib/node_modules myapp/node_modules

mylib/node_modules:
	cd mylib && npm i
	touch $@

myapp/node_modules:
	cd myapp && npm i
	myapp/script/bootstrap
	touch $@
