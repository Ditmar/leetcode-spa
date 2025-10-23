import '@testing-library/jest-dom';
import { vi } from 'vitest';

// Configuración global para los tests
vi.mock('jsdom', () => {
  return {
    JSDOM: class MockJSDOM {
      constructor() {
        return {
          window: global.window,
          document: global.document,
        };
      }
    },
  };
});
global.ResizeObserver = class ResizeObserver {
  observe() {}
  unobserve() {}
  disconnect() {}
};

// Mock para window.matchMedia
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: (query: string) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: () => {},
    removeListener: () => {},
    addEventListener: () => {},
    removeEventListener: () => {},
    dispatchEvent: () => {},
  }),
});

// Mock para getComputedStyle
Object.defineProperty(window, 'getComputedStyle', {
  value: () => ({
    getPropertyValue: () => '',
  }),
});
