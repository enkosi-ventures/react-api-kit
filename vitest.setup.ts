import { afterEach, vi } from 'vitest';
import '@testing-library/jest-dom/vitest'; // Provides helpful DOM assertion matchers (like .toBeInTheDocument) via the 'vitest' export

// --- Explanation ---
// This file runs once before all tests.
// It's the ideal place for global setup, mocks, or importing libraries that extend Vitest's capabilities.

// --- Common Use Cases ---

// 1. Extending `expect` with custom matchers:
//    The import '@testing-library/jest-dom/vitest' above is a prime example.

// 2. Global Mocks:
//    If you need to mock global objects like `fetch`, `localStorage`, etc., for all tests.
//    Example (commented out):
// vi.mock('axios'); // Mock axios globally (implement mock in __mocks__/axios.ts)
/*
const localStorageMock = (() => {
  let store: Record<string, string> = {};
  return {
    getItem: (key: string) => store[key] || null,
    setItem: (key: string, value: string) => { store[key] = value.toString(); },
    removeItem: (key: string) => { delete store[key]; },
    clear: () => { store = {}; },
  };
})();
vi.stubGlobal('localStorage', localStorageMock);
vi.stubGlobal('sessionStorage', localStorageMock); // Often useful to mock both
*/

// 3. Cleaning up between tests:
//    Ensures mocks or DOM changes don't leak between tests.
//    Example: Clearing all mocks after each test
afterEach(() => {
  vi.clearAllMocks(); // Clears call history, reset mock implementations added with vi.fn().mockImplementation()
  // vi.resetAllMocks(); // Resets mocks to their initial state (removes implementations, clears history) - choose one based on need
});

// --- Project-Specific Setup ---
// Add any setup specific to react-api-kit here as needed later.

console.log('🚀 Vitest Global Setup: Loaded'); // Optional log to confirm execution