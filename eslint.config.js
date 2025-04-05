import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint'; // Combined parser/plugin package
import pluginReactConfig from 'eslint-plugin-react/configs/recommended.js';
import pluginReactJSXRuntime from 'eslint-plugin-react/configs/jsx-runtime.js';
import pluginReactHooks from 'eslint-plugin-react-hooks';
import pluginImport from 'eslint-plugin-import';
import pluginJsxA11y from 'eslint-plugin-jsx-a11y';
import pluginVitest from '@vitest/eslint-plugin';
import eslintConfigPrettier from 'eslint-config-prettier';

export default [
  // Global ignores
  { ignores: ['node_modules/', 'dist/', 'coverage/', '.turbo/', '*.config.js', '*.config.mjs', '*.config.ts'] }, // Added Vitest config file

  // Base JS configuration (eslint:recommended)
  pluginJs.configs.recommended,

  // Base TypeScript configuration
  ...tseslint.configs.recommended, // Apply recommended TS rules

  // React configurations
  {
    files: ['**/*.{js,mjs,cjs,jsx,ts,tsx}'],
    ...pluginReactConfig,
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
  pluginReactJSXRuntime,

  // React Hooks configuration
  {
    files: ['**/*.{js,mjs,cjs,jsx,ts,tsx}'],
    plugins: {
      'react-hooks': pluginReactHooks,
    },
    rules: pluginReactHooks.configs.recommended.rules,
  },

  // Import plugin configuration
  {
    files: ['**/*.{js,mjs,cjs,jsx,ts,tsx}'],
    plugins: {
       import: pluginImport,
    },
    settings: {
      'import/resolver': {
        typescript: true,
        node: true,
      },
    },
    rules: {
      ...pluginImport.configs.recommended.rules,
      ...pluginImport.configs.typescript.rules,
      'import/order': [
        'warn',
        {
          groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index', 'object', 'type'],
          'newlines-between': 'always',
          alphabetize: { order: 'asc', caseInsensitive: true },
        },
      ],
      'import/no-unresolved': 'error',
      'import/prefer-default-export': 'off',
      // Allow dev dependencies in test files and setup files
      'import/no-extraneous-dependencies': ['error', {
          devDependencies: [
            '**/__tests__/**/*',     // Test files directory
            '**/*.{test,spec}.{ts,tsx,js,jsx}', // Common test file extensions
            'vitest.config.ts',   // Vitest config file
            'vitest.setup.ts',    // Vitest setup file (if you create one)
          ]
      }],
    },
  },

  // Accessibility configuration
  {
    files: ['**/*.{jsx,tsx}'],
    plugins: {
      'jsx-a11y': pluginJsxA11y,
    },
    rules: pluginJsxA11y.configs.recommended.rules,
  },

  // --- Vitest Configuration --- //
  {
    files: ['**/*.{test,spec}.{ts,tsx,js,jsx}'], // Target test files
    plugins: {
      vitest: pluginVitest, // Use Vitest plugin
    },
    rules: {
      ...pluginVitest.configs.recommended.rules, // Apply recommended Vitest rules
      // Add any specific Vitest rule overrides here if needed
    },
    languageOptions: {
      globals: {
        ...pluginVitest.environments.env.globals, // Add Vitest globals like describe, it, expect
      },
    },
  },
  // --- End Vitest Configuration --- //

  // Prettier configuration (MUST be last)
  eslintConfigPrettier,

  // Custom rules/overrides for the entire project
  {
    rules: {
      'no-console': ['warn', { allow: ['warn', 'error'] }],
      '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_', varsIgnorePattern: '^_' }],
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/no-explicit-any': 'warn',
    },
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.es2021,
      },
      parser: tseslint.parser,
      parserOptions: {
         project: ['./tsconfig.json', './packages/*/tsconfig.json'],
         tsconfigRootDir: import.meta.dirname,
         ecmaFeatures: {
           jsx: true,
         },
      },
    },
  },
];