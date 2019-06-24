var path = require('path');

module.exports = {
  entry: {
    'file_saver': './src/frontend/foreign_libs/file_saver.js',
    'leaflet': './src/frontend/foreign_libs/leaflet.js',
    'react': './src/frontend/foreign_libs/react.js',
    'semantic_ui': './src/frontend/foreign_libs/semantic_ui.js',
    'three': './src/frontend/foreign_libs/three.js',
    'vega': './src/frontend/foreign_libs/vega.js'
  },
  mode: 'production',
  output: {
    path: path.resolve(path.join(__dirname, "target/public/js-out")),
    filename: '[name].min.js'
  }
}
