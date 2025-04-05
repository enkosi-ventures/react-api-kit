# Contributing to React API Kit

We welcome contributions to the React API Kit! Please follow these guidelines to ensure a smooth process.

## Code of Conduct

This project adheres to a [Code of Conduct](CODE_OF_CONDUCT.md). By participating, you are expected to uphold this code. (You should add a CODE_OF_CONDUCT.md file).

## Getting Started

1.  **Fork the repository:** Click the "Fork" button on the GitHub repository page.
2.  **Clone your fork:** `git clone https://github.com/enkosi-ventures/react-api-kit.git`
3.  **Navigate to the project directory:** `cd react-api-kit`
4.  **Install dependencies:** `npm install`

## Development Process

1.  **Create a feature branch:** `git checkout -b feat/your-feature-name` or `fix/your-bug-fix`.
2.  **Make your changes:** Implement your feature or bug fix. Ensure code follows the established style and conventions.
3.  **Add tests:** Write unit or integration tests for your changes in the relevant package's `__tests__` directory.
4.  **Ensure tests pass:** Run `npm test` from the root.
5.  **Ensure linter passes:** Run `npm run lint` from the root. Fix any reported issues.
6.  **Ensure code builds:** Run `npm run build` from the root.
7.  **Commit your changes:** Use clear and concise commit messages. Consider using [Conventional Commits](https://www.conventionalcommits.org/).
8.  **Push to your fork:** `git push origin feat/your-feature-name`
9.  **Open a Pull Request (PR):** Go to the original repository and open a PR from your fork's branch to the `main` branch. Provide a clear description of your changes in the PR.

## Code Style

-   Follow the rules defined in the `.eslintrc.js` and `.prettierrc.js` files.
-   Use TypeScript with strict settings.
-   Write clear, concise, and commented code where necessary.

## Reporting Issues

If you encounter a bug or have a feature request, please open an issue on the GitHub repository. Provide as much detail as possible, including steps to reproduce (for bugs) or the use case (for features).

Thank you for contributing!