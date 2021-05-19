import babel from 'rollup-plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import external from 'rollup-plugin-peer-deps-external';
import { terser } from 'rollup-plugin-terser';
import postcss from 'rollup-plugin-postcss';
import postcssImport from 'postcss-import';
import postcssUrl from 'postcss-url';
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
        plugins: [postcssImport(), postcssUrl()],
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
          { src: 'src/components/atoms/Loader/images', dest: 'dist' },
          {
            src: [
              'src/utils/styles/fonts/KFOlCnqEu92Fr1MmEU9fBBc4AMP6lQ.woff2',
              'src/utils/styles/fonts/KFOmCnqEu92Fr1Mu4mxKKTU1Kg.woff2'
            ], dest: 'dist/fonts'
          },
          {
            src: 'src/utils/styles/icons/flUhRq6tzZclQEJ-Vdg-IuiaDsNcIhQ8tQ.woff2', dest: 'dist/icons'
          }
        ]
      })
    ],
    external: ['react', 'react-dom', 'classnames', 'react-lazyload']
  }
];
