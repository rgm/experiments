const path = require("path");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const pkg = require("./package.json");

module.exports = {
  // devtool: "eval-source-map",
  devtool: false,
  entry: './src/exports.ts',
  output: {
    filename: "index.cjs.js",
    path: path.resolve(__dirname, "dist"),
    library: 'mylib',
    libraryTarget: 'commonjs',
    // libraryTarget: 'module'
  },
  plugins: [new CleanWebpackPlugin()],
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ]
  }
};
