This is the core package for the React API Kit. It provides a unified middleware layer for React and React Native applications, handling:

-   **Authentication:** JWT, OAuth2/OIDC, Server-Side Sessions.
-   **Token Management:** Secure storage, automatic refresh, request attachment.
-   **HTTP Client:** Robust Axios wrapper with interceptors, retries, queuing, error handling.
-   **Polling:** Reliable polling service with backoff and network awareness.
-   **State Management:** Internal state exposed via React hooks (`useAuthState`, `useNetworkStatus`, etc.).
-   **Platform Abstraction:** Handles differences between Web and React Native for storage, navigation, and network info.

## Installation

```bash
yarn add @react-api-kit/core axios zustand react
# or
npm install @react-api-kit/core axios zustand react
```

## Usage

*(Detailed usage examples will be added as features are implemented)*

```typescript
import { configure, useAuthState, httpClient } from '@react-api-kit/core';

// Configure the kit (example for JWT)
// configure({
//   authType: 'jwt',
//   baseUrl: 'https://api.example.com',
//   // ... other config
// });

function App() {
  // const authState = useAuthState();
  // ... use httpClient, etc.
  return <div>React API Kit Core</div>;
}
```

## Documentation

Full documentation will be available once the package reaches a stable release. Key features and configurations will be documented here as they are developed.
