const fs = require("fs");
const source = fs.readFileSync("./math.wasm");
const typedArray = new Uint8Array(source);

const imports = {
  env: {
    print: (result) => {
      console.log(`The result is ${result}`);
    },
  },
};

WebAssembly.instantiate(typedArray, imports).then((result) => {
  const add = result.instance.exports.add;
  console.log(result.instance);
  add(1, 2);
});
