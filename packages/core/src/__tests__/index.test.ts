import { version } from '../index';

describe('@react-api-kit/core', () => {
  it('should export the correct version', () => {
    // This is a basic test to ensure Jest is configured and can import from src
    expect(version).toBe('0.1.0');
  });

  it('runs a basic test successfully', () => {
    expect(1 + 1).toBe(2);
  });
});