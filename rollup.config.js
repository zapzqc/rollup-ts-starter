/* eslint-disable @typescript-eslint/no-unsafe-call */
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import babel from '@rollup/plugin-babel';
import scss from 'rollup-plugin-scss';
import postcss from 'postcss';
import autoprefixer from 'autoprefixer';
import { terser } from 'rollup-plugin-terser';

const extensions = [
  '.js', '.ts',
];

export default {
  input: 'src/index.ts',
  output: {
    file: 'dist/bundle.js',
    format: 'umd',
  },
  plugins: [
    scss({
      outputStyle: 'compressed',
      // eslint-disable-next-line @typescript-eslint/no-unsafe-return
      processor: () => postcss([autoprefixer()]),
      includePaths: [
        '../../node_modules/',
        'node_modules/',
      ],
    }),
    resolve(),
    commonjs(),
    babel({
      extensions,
      babelHelpers: 'runtime',
      exclude: 'node_modules/**',
    }),
    terser(),
  ],
};
