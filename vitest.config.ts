// vitest.config.ts
import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    // Run tests within Node.js (can change to 'jsdom' later if needed for DOM APIs)
    environment: 'node',
    // environment: 'jsdom', // Use this if you need browser globals like document/window

    // Look for test files in all packages
    include: ['packages/*/src/**/*.{test,spec}.{ts,tsx}'],

    // Exclude node_modules, dist, etc.
    exclude: ['**/node_modules/**', '**/dist/**', '**/coverage/**'],

    // Optional: Global setup file (similar to jest.setup.js if needed)
    setupFiles: './vitest.setup.ts', // Create this file if you need global setup
    globals: true, // Enable global variables like `describe`, `it`, etc.

    // Coverage configuration
    coverage: {
      provider: 'v8', // or 'istanbul'
      reporter: ['text', 'json', 'html', 'lcov', 'clover'],
      reportsDirectory: './coverage',
      include: ['packages/*/src/**/*.{ts,tsx}'],
      exclude: [
        // Same exclusions as before
        '**/node_modules/**',
        '**/dist/**',
        '**/coverage/**',
        '**/__tests__/**', // Exclude test files themselves
        '**/*.{test,spec}.{ts,tsx}',
        'packages/*/src/**/*.d.ts',
        'packages/*/src/**/index.ts',
        'packages/*/src/**/types.ts',
        'packages/*/src/**/_internal/**',
      ],
      // Optional: Thresholds
      // thresholds: {
      //   lines: 5,
      //   functions: 5,
      //   branches: 5,
      //   statements: 5,
      // },
    },

    // Optional: Alias configuration if needed for imports
    // alias: {
    //   '@react-api-kit/core': './packages/core/src',
    // }
  },
});