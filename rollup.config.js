import babel from 'rollup-plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import external from 'rollup-plugin-peer-deps-external';
import { terser } from 'rollup-plugin-terser';
import postcss from 'rollup-plugin-postcss';
import typescript from 'rollup-plugin-typescript';
import filesize from "rollup-plugin-filesize";

export default [
  {
    input: './src/index.ts',
    output: [
      {
        file: 'dist/index.js',
        format: 'cjs'
      },
      {
        file: 'dist/index.es.js',
        format: 'es',
        exports: 'named'
      }
    ],
    plugins: [
      postcss({
        plugins: [],
        extract: true,
        extensions: [".css"],
        minimize: true
      }),
      typescript(),
      babel({
        exclude: 'node_modules/**',
        presets: ['@babel/preset-typescript', '@babel/preset-react']
      }),
      external(),
      resolve(),
      terser(),
      filesize()
    ],
    external: ['react', 'react-dom', 'classnames', 'react-lazyload']
  }
];
