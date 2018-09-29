module.exports = {
  entry: {
    'leaflet': './src/leaflet.js',
    'react': './src/react.js',
    'semantic_ui': './src/semantic_ui.js',
    'three': './src/three.js',
    'vega': './src/vega.js'
  },
  mode: 'production',
  output: {
    filename: '[name].min.js'
  }
}
