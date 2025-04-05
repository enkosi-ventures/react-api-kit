# React API Kit Monorepo

[![CI](https://github.com/<your-username>/react-api-kit/actions/workflows/ci.yml/badge.svg)](https://github.com/<your-username>/react-api-kit/actions/workflows/ci.yml)

This monorepo contains the packages for the React API Kit project.

**Project Purpose:** Provide a focused middleware layer for React/React Native applications to unify client-side authentication, token management, API communication, and polling against a single backend.

## Packages

-   `packages/core` (`@react-api-kit/core`): The core library containing the main functionalities.

## Development Workflow

### Prerequisites

-   [Node.js](https://nodejs.org/) (v22 or later recommended)
-   [NPM](https://npmjs.com/) (v10 or later)

### Installation

Install all dependencies for the monorepo packages:

```bash
npm install
```

### Common Commands

Run these commands from the root directory:

-   **Build all packages:**
    ```bash
    npm run build
    ```
-   **Run tests for all packages:**
    ```bash
    npm test
    ```
-   **Run linter for all packages:**
    ```bash
    npm run lint
    ```
-   **Format code:**
    ```bash
    npm run format
    ```
-   **Clean build artifacts:**
    ```bash
    npm run clean
    ```
-   **Type check all packages:**
    ```bash
    npm run typecheck
    ```

### Developing a Specific Package

To run commands within a specific package (e.g., `core`), you can use `npm run <script> --workspace=@react-api-kit/core`:

```bash
# Build only the core package
npm run build --workspace=@react-api-kit/core

# Start core package build in watch mode (for development)
npm run dev --workspace=@react-api-kit/core
```

Tests are run from the root of the directory

```bash
# Run tests
npm run test

# Run tests in watch mode
npm run test:watch
```

## Contributing

Please see the [CONTRIBUTING.md](./CONTRIBUTING.md) file for details on how to contribute to this project.

## License

This project is licensed under the MIT License - see the [LICENSE](./LICENSE) file for details (You should add a LICENSE file).
