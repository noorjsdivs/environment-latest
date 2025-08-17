/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 * Utility functions for environment detection
 */

/**
 * Safely access nested properties without throwing errors
 */
export function safeGet<T = any>(
  obj: any,
  path: string,
  defaultValue?: T
): T | undefined {
  try {
    return (
      path.split('.').reduce((current, key) => current?.[key], obj) ??
      defaultValue
    );
  } catch {
    return defaultValue;
  }
}

/**
 * Check if a global variable exists
 */
export function hasGlobal(name: string): boolean {
  try {
    return typeof globalThis !== 'undefined' && name in globalThis;
  } catch {
    return false;
  }
}

/**
 * Check if running in a specific environment by checking global objects
 */
export function hasGlobalObject(name: string): boolean {
  try {
    return (
      typeof globalThis !== 'undefined' &&
      (globalThis as any)[name] !== undefined &&
      (globalThis as any)[name] !== null
    );
  } catch {
    return false;
  }
}

/**
 * Parse version string into major.minor.patch
 */
export function parseVersion(version: string): {
  major: number;
  minor: number;
  patch: number;
  raw: string;
} {
  const parts = version
    .split('.')
    .map(part => parseInt(part.split(/[^0-9]/)[0] || '0', 10));
  return {
    major: parts[0] || 0,
    minor: parts[1] || 0,
    patch: parts[2] || 0,
    raw: version,
  };
}

/**
 * Check if user agent contains specific string
 */
export function userAgentIncludes(search: string): boolean {
  try {
    return (
      typeof navigator !== 'undefined' &&
      typeof navigator.userAgent === 'string' &&
      navigator.userAgent.toLowerCase().includes(search.toLowerCase())
    );
  } catch {
    return false;
  }
}

/**
 * Get environment variable (Node.js only)
 */
export function getEnvVar(name: string): string | undefined {
  try {
    return safeGet(globalThis, 'process.env.' + name);
  } catch {
    return undefined;
  }
}

/**
 * Check if feature is supported
 */
export function isFeatureSupported(feature: string): boolean {
  try {
    switch (feature) {
      case 'localStorage':
        return typeof Storage !== 'undefined' && 'localStorage' in globalThis;
      case 'sessionStorage':
        return typeof Storage !== 'undefined' && 'sessionStorage' in globalThis;
      case 'indexedDB':
        return 'indexedDB' in globalThis;
      case 'webgl':
        if (typeof HTMLCanvasElement === 'undefined') return false;
        const canvas = document?.createElement('canvas');
        return canvas?.getContext('webgl') !== null;
      case 'webgl2':
        if (typeof HTMLCanvasElement === 'undefined') return false;
        const canvas2 = document?.createElement('canvas');
        return canvas2?.getContext('webgl2') !== null;
      case 'webassembly':
        return typeof WebAssembly !== 'undefined';
      case 'geolocation':
        return 'geolocation' in navigator;
      case 'camera':
        return (
          'mediaDevices' in navigator &&
          'getUserMedia' in navigator.mediaDevices
        );
      case 'microphone':
        return (
          'mediaDevices' in navigator &&
          'getUserMedia' in navigator.mediaDevices
        );
      case 'notifications':
        return 'Notification' in globalThis;
      case 'serviceworker':
        return 'serviceWorker' in navigator;
      case 'pushnotifications':
        return 'PushManager' in globalThis;
      default:
        return false;
    }
  } catch {
    return false;
  }
}
