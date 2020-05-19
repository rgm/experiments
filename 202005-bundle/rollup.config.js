import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
// import globals from 'rollup-plugin-node-globals';

export default {
  input: 'out/index.js',
  output: {
    file: 'resources/public/main.rollup.js',
    // format: 'cjs'
    format: 'es'
  },
  plugins: [commonjs()
    , resolve(),
    // globals()
  ]
};
