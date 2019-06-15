var path = require("path");

module.exports = {
  entry: {
    react: "./foreign_libs/src/react.js"
  },
  mode: "development",
  devtool: "source-map",
  output: {
    path: path.resolve(path.join(__dirname, "/foreign_libs/dist")),
    filename: "[name].js"
  }
};
