var path = require('path');

module.exports = {
  entry: {
    'leaflet': './src/js/leaflet.js',
    'react': './src/js/react.js',
    'reframe10x': './src/js/reframe10x.js',
    'semantic_ui': './src/js/semantic_ui.js',
    'three': './src/js/three.js',
    'vega': './src/js/vega.js'
  },
  mode: 'development',
  devtool: "source-map",
  output: {
    path: path.resolve(path.join(__dirname, "../target/public/js-out")),
    filename: '[name].js'
  }
}
