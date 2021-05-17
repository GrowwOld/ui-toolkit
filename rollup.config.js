import babel from 'rollup-plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import external from 'rollup-plugin-peer-deps-external';
import { terser } from 'rollup-plugin-terser';
import postcss from 'rollup-plugin-postcss';
import typescript from 'rollup-plugin-typescript';
import filesize from "rollup-plugin-filesize";
import copy from 'rollup-plugin-copy'


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
      commonjs(),
      postcss({
        plugins: [],
        extract: true,
        extensions: [".css"],
        minimize: true
      }),
      typescript(),
      babel({
        exclude: 'node_modules/**',
        presets: ['@babel/preset-typescript', '@babel/preset-react'],
        plugins: [
          '@babel/plugin-proposal-class-properties',
          '@babel/plugin-proposal-private-methods',
        ]
      }),
      external(),
      resolve(),
      terser(),
      filesize(),
      copy({
      targets: [
        { src: 'src/types', dest: 'dist' },
      ]
    })
    ],
    external: ['react', 'react-dom', 'classnames', 'react-lazyload']
  }
];
