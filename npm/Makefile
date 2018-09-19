bundle-dev: node_modules src/**
	yarn webpack --config webpack-dev.config.js

bundle-prd: node_modules src/**
	yarn webpack --config webpack-prd.config.js

node_modules: package.json
	yarn install
	touch node_modules

clean:
	rm -f dist/*

clobber: clean
	rm -rf node_modules
