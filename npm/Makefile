dist/bundle.js: node_modules src/index.js
	yarn webpack

node_modules: package.json
	yarn install
	touch node_modules

clean:
	rm -f dist/*

clobber: clean
	rm -rf node_modules
