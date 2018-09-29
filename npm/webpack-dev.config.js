module.exports = {
  entry: {
    'leaflet': './src/leaflet.js',
    'react': './src/react.js',
    'reframe10x': './src/reframe10x.js',
    'semantic_ui': './src/semantic_ui.js',
    'three': './src/three.js',
    'vega': './src/vega.js'
  },
  mode: 'development',
  devtool: "source-map",
  output: {
    filename: '[name].js'
  }
}
