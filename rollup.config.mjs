import resolve from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import typescript from '@rollup/plugin-typescript';
import commonjs from '@rollup/plugin-commonjs';
import postcss from 'rollup-plugin-postcss';
import dts from 'rollup-plugin-dts';
export default [
  // JavaScript/TypeScript Bundle Configuration
  {
    input: './src/index.ts',
    output: [
      {
        file: 'dist/index.cjs.js',
        format: 'cjs',
        sourcemap: true,
      },
      {
        file: 'dist/index.esm.js',
        format: 'esm',
        sourcemap: true,
      },
    ],
    plugins: [
      peerDepsExternal(),
      resolve(),
      commonjs(),
      typescript({
        tsconfig: './tsconfig.json',
        declaration: true,
        declarationDir: './dist/types',
        rootDir: './src',
      }),
      postcss({
        extract: true,
        minimize: true,
        sourceMap: true,
      }),
      babel({
        babelHelpers: 'runtime',
        extensions: ['.js', '.jsx', '.ts', '.tsx'], // Include TypeScript and JSX files
        exclude: 'node_modules/**',
        presets: [
          '@babel/preset-env', // Transpile modern JS for compatibility
          '@babel/preset-react', // Handle React JSX syntax
          '@babel/preset-typescript', // Handle TypeScript syntax
        ],
        plugins: ['@babel/plugin-transform-runtime'],
      }),
    ],
    external: [
    /node_modules/,
    'react',
    'react-dom',
    '@floating-ui/react',
    '@reduxjs/toolkit',
    ],
  },

  // Type Declarations Bundle Configuration
  {
    input: './dist/index.d.ts',
    output: [{ file: 'dist/index.d.ts', format: 'es' }],
    plugins: [dts()],
  },
];
