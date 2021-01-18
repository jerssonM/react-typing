import url from '@rollup/plugin-url';
import babel from 'rollup-plugin-babel';
import { terser } from 'rollup-plugin-terser';
import commonjs from 'rollup-plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';

import pkg from './package.json';

export default {
  input: 'src/index.js',
  output: [
    {
      file: pkg.main,
      format: 'cjs'
    },
    {
      file: pkg.browser,
      format: 'umd',
      name: 'umd'
    },
    {
      file: pkg.module,
      format: 'es'
    }
  ],
  plugins: [
    resolve(),
    terser(),
    babel({
      exclude: 'node_modules/**'
    }),
    commonjs({
      include: /node_modules/,
      namedExports: {
        'react-dom': ['createPortal', 'findDOMNode']
      }
    }),
    url({
      include: ['**/*.ttf'],
      limit: Infinity
    })
  ],
  external: ['styled-components', 'react']
};
