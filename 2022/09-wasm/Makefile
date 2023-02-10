test: math.wasm
	node test.js
.PHONY: test

math.wasm: math.zig
	zig build-lib math.zig -target wasm32-freestanding -dynamic
