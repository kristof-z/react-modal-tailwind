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
      peerDepsExternal(),  // Exclude peer dependencies from the bundle
      resolve({
        extensions: ['.js', '.jsx', '.ts', '.tsx'],  // Resolve these extensions
      }),
      commonjs(),  // Convert CommonJS modules to ESM
      typescript({
        tsconfig: './tsconfig.json',
        declaration: true,              // Generate declaration files
        declarationDir: './dist/types', // Keep declaration files organized
        rootDir: './src',               // Ensure relative imports are handled correctly
      }),
      postcss({
        extract: true,       // Extract CSS to a separate file
        minimize: true,      // Minify CSS
        sourceMap: true,     // Include sourcemaps for CSS
      }),
      babel({
        babelHelpers: 'runtime',
        extensions: ['.js', '.jsx', '.ts', '.tsx'],  // Handle TypeScript and React JSX
        exclude: 'node_modules/**',
        presets: [
          '@babel/preset-env',
          '@babel/preset-react',
          '@babel/preset-typescript',
        ],
        plugins: ['@babel/plugin-transform-runtime'],
      }),
    ],
    external: [
      /node_modules/, // Exclude all node_modules
      'react',
      'react-dom',
      '@floating-ui/react',
      '@reduxjs/toolkit',
    ],
  },

  // Type Declarations Bundle Configuration
  {
    input: './dist/types/index.d.ts',
    output: [{ file: 'dist/index.d.ts', format: 'es' }],
    plugins: [dts()],
    external: [/node_modules/],  // Exclude dependencies
  },
];
