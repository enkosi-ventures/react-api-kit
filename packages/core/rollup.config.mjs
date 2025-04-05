// packages/core/rollup.config.js
import typescript from '@rollup/plugin-typescript';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import fs from 'node:fs'; // Use node:fs for explicit import
import path from 'node:path'; // Use node:path

// Read package.json reliably
const pkgPath = path.resolve(process.cwd(), 'package.json');
const rawPkg = fs.readFileSync(pkgPath, 'utf-8');
const pkg = JSON.parse(rawPkg);

// List of peer dependencies to exclude from the bundle
const peerDependencies = Object.keys(pkg.peerDependencies || {});
// Also exclude runtime dependencies if they shouldn't be bundled (common for libraries)
// const dependencies = Object.keys(pkg.dependencies || {});

export default {
  input: 'src/index.ts', // Entry point of your library
  output: [
    {
      file: pkg.main, // CommonJS output (e.g., dist/index.cjs.js)
      format: 'cjs',
      sourcemap: true,
      exports: 'named', // Use named exports
    },
    {
      file: pkg.module, // ES Module output (e.g., dist/index.esm.js)
      format: 'esm',
      sourcemap: true,
    },
  ],
  plugins: [
    resolve(), // Resolves node modules
    commonjs(), // Converts CommonJS modules to ES6
    typescript({
      tsconfig: './tsconfig.json', // Point to the package's tsconfig
      sourceMap: true,
      declaration: true, // Generate .d.ts files
      declarationDir: 'dist', // Output declarations to dist/
      exclude: ['**/__tests__', '**/*.test.ts', '**/*.test.tsx'], // Exclude test files from build
      // Ensure tslib is used helpers instead of emitting them inline
      // This usually requires tslib as a dependency in the core package
      // tslib: require('tslib').version
    }),
  ],
  // Exclude peer dependencies AND runtime dependencies if they are expected
  // to be provided by the consumer environment
  external: [...peerDependencies /*, ...dependencies */],
};