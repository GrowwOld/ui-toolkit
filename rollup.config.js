import postcssImport from 'postcss-import';
import postcssUrl from 'postcss-url';
import babel from 'rollup-plugin-babel';
import copy from 'rollup-plugin-copy';
import filesize from 'rollup-plugin-filesize';
import external from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';
import { terser } from 'rollup-plugin-terser';
import typescript from 'rollup-plugin-typescript';

import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';

import { getInputFiles } from './rollup.input';

// import pkg from './package.json';

const commonConfig = {
  plugins: [
    commonjs(),
    postcss({
      plugins: [ postcssImport(), postcssUrl({ url: 'inline' }) ],
      extract: true,
      extract: 'index.css',
      extensions: [ '.css' ]
    }),
    typescript(),
    babel({
      exclude: 'node_modules/**',
      presets: [ '@babel/preset-typescript', '@babel/preset-react' ],
      plugins: [
        '@babel/plugin-proposal-class-properties',
        '@babel/plugin-proposal-private-methods'
      ]
    }),
    external(),
    resolve(),
    terser(),
    filesize(),
    copy({
      targets: [
        { src: 'src/types', dest: 'dist' }
      ]
    })
  ],
  external: [ 'react', 'react-dom', 'classnames', 'react-lazyload' ]

};

export default [
  {
    input: './src/index.ts',
    output: [
      {
        dir: 'dist/cjs',
        format: 'cjs',
        intro: `
        (function (Object) {
  typeof globalThis !== 'object' && (
    this ?
      get() :
      (Object.defineProperty(Object.prototype, '_T_', {
        configurable: true,
        get: get
      }), _T_)
  );
  function get() {
    var global = this || self;
    global.globalThis = global;
    delete Object.prototype._T_;
  }
}(Object));
        `
      }
    ],
    ...commonConfig
  },
  {
    input: getInputFiles(),
    output: [
      {
        dir: 'dist/esm',
        format: 'es',
        intro: `
        (function (Object) {
  typeof globalThis !== 'object' && (
    this ?
      get() :
      (Object.defineProperty(Object.prototype, '_T_', {
        configurable: true,
        get: get
      }), _T_)
  );
  function get() {
    var global = this || self;
    global.globalThis = global;
    delete Object.prototype._T_;
  }
}(Object));
        `
      }
    ],
    ...commonConfig
  }
];
