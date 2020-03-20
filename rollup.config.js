import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import sourceMaps from 'rollup-plugin-sourcemaps'
import {terser} from 'rollup-plugin-terser'
import gzip from 'rollup-plugin-gzip'
import ts from '@wessberg/rollup-plugin-ts'
import sass from 'rollup-plugin-sass'
import copy from 'rollup-plugin-copy'

const pkg = require('./package.json')
const isProductionBuild = process.env.NODE_ENV === 'production'

let plugins = [
  resolve(),
  commonjs({
    namedExports: {
      'react-draggable': ['DraggableCore'],
    },
  }),
  ts(),
  sass({
    output: 'dist/index.css',
    options: {
      outputStyle: isProductionBuild ? 'compressed' : 'expanded',
    },
  }),
  copy({
    targets: [
      {src: 'src/Styles/Fonts', dest: 'dist'},
      {src: 'src/Styles/variables.scss', dest: 'dist'},
      {src: '*/**/Images/*', dest: 'dist/Images'}
    ],
  }),
  sourceMaps(),
]

// Minify and compress output when in production
if (isProductionBuild) {
  plugins = [...plugins, terser(), gzip()]
}

const input = 'src/index.ts'

const globals = {
  react: 'React',
  'react-dom': 'ReactDOM',
  uuid: 'uuid',
  lodash: '_',
  'prop-types': 'PropTypes',
}

// Do not bundle peer dependencies
const external = ['react', 'react-dom', 'lodash', 'uuid', 'prop-types']

export default [
  {
    input,
    plugins,
    external,
    output: {
      name: pkg.name,
      file: pkg.main,
      format: 'umd',
      sourcemap: true,
      globals,
    },
  },
]
