/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  safeGet,
  hasGlobalObject,
  userAgentIncludes,
  getEnvVar,
  parseVersion,
} from './utils.js';
import type { NodeVersionInfo, BrowserInfo, SystemInfo } from './types.js';

/**
 * Runtime Environment Detection
 */

// Core runtime environments
export const isBrowser = (() => {
  try {
    return (
      typeof window !== 'undefined' &&
      typeof document !== 'undefined' &&
      typeof window.document !== 'undefined'
    );
  } catch {
    return false;
  }
})();

export const isNode = (() => {
  try {
    return (
      typeof globalThis !== 'undefined' &&
      safeGet(globalThis, 'process.versions.node') !== undefined &&
      !safeGet(globalThis, 'process.versions.electron') &&
      !safeGet(globalThis, 'process.versions.bun')
    );
  } catch {
    return false;
  }
})();

export const isBun = (() => {
  try {
    return (
      typeof globalThis !== 'undefined' &&
      safeGet(globalThis, 'process.versions.bun') !== undefined
    );
  } catch {
    return false;
  }
})();

export const isDeno = (() => {
  try {
    return (
      hasGlobalObject('Deno') &&
      safeGet(globalThis, 'Deno.version.deno') !== undefined
    );
  } catch {
    return false;
  }
})();

export const isElectron = (() => {
  try {
    return (
      typeof globalThis !== 'undefined' &&
      safeGet(globalThis, 'process.versions.electron') !== undefined
    );
  } catch {
    return false;
  }
})();

export const isJsDom = (() => {
  try {
    return typeof navigator !== 'undefined' && userAgentIncludes('jsdom');
  } catch {
    return false;
  }
})();

export const isReactNative = (() => {
  try {
    return (
      typeof navigator !== 'undefined' &&
      typeof navigator.product === 'string' &&
      navigator.product === 'ReactNative'
    );
  } catch {
    return false;
  }
})();

export const isWebView = (() => {
  try {
    if (!isBrowser) return false;
    return (
      userAgentIncludes('wv') ||
      userAgentIncludes('webview') ||
      (typeof window !== 'undefined' && !(window as any).chrome)
    );
  } catch {
    return false;
  }
})();

// Edge runtime environments
export const isCloudflareWorkers = (() => {
  try {
    return (
      hasGlobalObject('caches') &&
      hasGlobalObject('addEventListener') &&
      !hasGlobalObject('window') &&
      !hasGlobalObject('document')
    );
  } catch {
    return false;
  }
})();

export const isVercelEdge = (() => {
  try {
    return (
      getEnvVar('VERCEL') === '1' &&
      getEnvVar('VERCEL_REGION') !== undefined &&
      !isNode
    );
  } catch {
    return false;
  }
})();

export const isNetlifyEdge = (() => {
  try {
    return (
      getEnvVar('NETLIFY') === 'true' && hasGlobalObject('Netlify') && !isNode
    );
  } catch {
    return false;
  }
})();

// Web Worker environments
export const isWebWorker = (() => {
  try {
    return (
      typeof WorkerGlobalScope !== 'undefined' &&
      typeof self !== 'undefined' &&
      self instanceof WorkerGlobalScope
    );
  } catch {
    return false;
  }
})();

export const isDedicatedWorker = (() => {
  try {
    return (
      typeof DedicatedWorkerGlobalScope !== 'undefined' &&
      typeof self !== 'undefined' &&
      self instanceof DedicatedWorkerGlobalScope
    );
  } catch {
    return false;
  }
})();

export const isSharedWorker = (() => {
  try {
    return (
      typeof SharedWorkerGlobalScope !== 'undefined' &&
      typeof self !== 'undefined' &&
      self instanceof SharedWorkerGlobalScope
    );
  } catch {
    return false;
  }
})();

export const isServiceWorker = (() => {
  try {
    return (
      typeof ServiceWorkerGlobalScope !== 'undefined' &&
      typeof self !== 'undefined' &&
      self instanceof ServiceWorkerGlobalScope
    );
  } catch {
    return false;
  }
})();

// Operating System Detection
const platform =
  safeGet(globalThis, 'navigator.userAgentData.platform') ||
  safeGet(globalThis, 'navigator.platform') ||
  safeGet(globalThis, 'process.platform') ||
  '';

const userAgent = safeGet(globalThis, 'navigator.userAgent') || '';

export const isMacOs = (() => {
  try {
    return (
      platform === 'macOS' ||
      platform === 'MacIntel' ||
      userAgentIncludes(' Mac ') ||
      safeGet(globalThis, 'process.platform') === 'darwin'
    );
  } catch {
    return false;
  }
})();

export const isWindows = (() => {
  try {
    return (
      platform === 'Windows' ||
      platform === 'Win32' ||
      platform.includes('Win') ||
      safeGet(globalThis, 'process.platform') === 'win32'
    );
  } catch {
    return false;
  }
})();

export const isLinux = (() => {
  try {
    return (
      platform === 'Linux' ||
      platform.startsWith('Linux') ||
      userAgentIncludes(' Linux ') ||
      safeGet(globalThis, 'process.platform') === 'linux'
    );
  } catch {
    return false;
  }
})();

export const isIos = (() => {
  try {
    const maxTouchPoints = safeGet(globalThis, 'navigator.maxTouchPoints') as
      | number
      | undefined;
    return (
      platform === 'iOS' ||
      (platform === 'MacIntel' && (maxTouchPoints || 0) > 1) ||
      /iPad|iPhone|iPod/.test(platform) ||
      /iPad|iPhone|iPod/.test(userAgent)
    );
  } catch {
    return false;
  }
})();

export const isAndroid = (() => {
  try {
    return (
      platform === 'Android' ||
      userAgentIncludes(' Android ') ||
      safeGet(globalThis, 'process.platform') === 'android'
    );
  } catch {
    return false;
  }
})();

export const isFreeBSD = (() => {
  try {
    return (
      safeGet(globalThis, 'process.platform') === 'freebsd' ||
      platform.includes('FreeBSD')
    );
  } catch {
    return false;
  }
})();

export const isOpenBSD = (() => {
  try {
    return (
      safeGet(globalThis, 'process.platform') === 'openbsd' ||
      platform.includes('OpenBSD')
    );
  } catch {
    return false;
  }
})();

// Architecture Detection
const arch = safeGet(globalThis, 'process.arch') || '';

export const isArm64 = (() => {
  try {
    return arch === 'arm64' || arch === 'aarch64';
  } catch {
    return false;
  }
})();

export const isX64 = (() => {
  try {
    return arch === 'x64' || arch === 'x86_64';
  } catch {
    return false;
  }
})();

export const is32Bit = (() => {
  try {
    return arch === 'ia32' || arch === 'x86' || arch.includes('32');
  } catch {
    return false;
  }
})();

export const is64Bit = (() => {
  try {
    return isX64 || isArm64 || arch.includes('64');
  } catch {
    return false;
  }
})();

// Environment Detection
export const isDevelopment = (() => {
  try {
    const nodeEnv = getEnvVar('NODE_ENV');
    return nodeEnv === 'development' || nodeEnv === 'dev';
  } catch {
    return false;
  }
})();

export const isProduction = (() => {
  try {
    const nodeEnv = getEnvVar('NODE_ENV');
    return nodeEnv === 'production' || nodeEnv === 'prod';
  } catch {
    return false;
  }
})();

export const isTest = (() => {
  try {
    const nodeEnv = getEnvVar('NODE_ENV');
    return (
      nodeEnv === 'test' ||
      getEnvVar('JEST_WORKER_ID') !== undefined ||
      getEnvVar('VITEST') !== undefined ||
      getEnvVar('MOCHA') !== undefined
    );
  } catch {
    return false;
  }
})();

export const isCI = (() => {
  try {
    return (
      getEnvVar('CI') === 'true' ||
      getEnvVar('CONTINUOUS_INTEGRATION') === 'true' ||
      getEnvVar('GITHUB_ACTIONS') === 'true' ||
      getEnvVar('TRAVIS') === 'true' ||
      getEnvVar('CIRCLECI') === 'true' ||
      getEnvVar('JENKINS_URL') !== undefined ||
      getEnvVar('GITLAB_CI') === 'true'
    );
  } catch {
    return false;
  }
})();

export const isDocker = (() => {
  try {
    return (
      getEnvVar('DOCKER') === 'true' || getEnvVar('CONTAINER') !== undefined
    );
  } catch {
    return false;
  }
})();

// Browser Engine Detection
export const isChrome = (() => {
  try {
    return (
      isBrowser &&
      userAgentIncludes('Chrome') &&
      !userAgentIncludes('Edg') &&
      !userAgentIncludes('OPR')
    );
  } catch {
    return false;
  }
})();

export const isFirefox = (() => {
  try {
    return isBrowser && userAgentIncludes('Firefox');
  } catch {
    return false;
  }
})();

export const isSafari = (() => {
  try {
    return (
      isBrowser &&
      userAgentIncludes('Safari') &&
      !userAgentIncludes('Chrome') &&
      !userAgentIncludes('Chromium')
    );
  } catch {
    return false;
  }
})();

export const isEdge = (() => {
  try {
    return isBrowser && userAgentIncludes('Edg');
  } catch {
    return false;
  }
})();

export const isOpera = (() => {
  try {
    return (
      isBrowser && (userAgentIncludes('OPR') || userAgentIncludes('Opera'))
    );
  } catch {
    return false;
  }
})();

// Device Type Detection
export const isMobile = (() => {
  try {
    return (
      isIos ||
      isAndroid ||
      userAgentIncludes('Mobile') ||
      (isBrowser && window.innerWidth <= 768)
    );
  } catch {
    return false;
  }
})();

export const isTablet = (() => {
  try {
    return (
      (userAgentIncludes('Tablet') ||
        userAgentIncludes('iPad') ||
        (isBrowser && window.innerWidth > 768 && window.innerWidth <= 1024)) &&
      !userAgentIncludes('Mobile')
    );
  } catch {
    return false;
  }
})();

export const isDesktop = (() => {
  try {
    return !isMobile && !isTablet && isBrowser;
  } catch {
    return false;
  }
})();

export const isTouchDevice = (() => {
  try {
    return (
      isBrowser && ('ontouchstart' in window || navigator.maxTouchPoints > 0)
    );
  } catch {
    return false;
  }
})();

// Helper functions for additional information
export function getNodeVersion(): NodeVersionInfo | null {
  try {
    if (!isNode) return null;
    const version = safeGet(globalThis, 'process.versions.node');
    if (!version) return null;
    return parseVersion(version);
  } catch {
    return null;
  }
}

export function getBrowserInfo(): BrowserInfo | null {
  try {
    if (!isBrowser) return null;

    let name = 'Unknown';
    let version = '';
    let engine = 'Unknown';

    if (isChrome) {
      name = 'Chrome';
      engine = 'Blink';
      const match = userAgent.match(/Chrome\/([0-9.]+)/);
      version = match ? match[1] : '';
    } else if (isFirefox) {
      name = 'Firefox';
      engine = 'Gecko';
      const match = userAgent.match(/Firefox\/([0-9.]+)/);
      version = match ? match[1] : '';
    } else if (isSafari) {
      name = 'Safari';
      engine = 'WebKit';
      const match = userAgent.match(/Version\/([0-9.]+)/);
      version = match ? match[1] : '';
    } else if (isEdge) {
      name = 'Edge';
      engine = 'Blink';
      const match = userAgent.match(/Edg\/([0-9.]+)/);
      version = match ? match[1] : '';
    } else if (isOpera) {
      name = 'Opera';
      engine = 'Blink';
      const match = userAgent.match(/(?:OPR|Opera)\/([0-9.]+)/);
      version = match ? match[1] : '';
    }

    return { name, version, engine };
  } catch {
    return null;
  }
}

export function getSystemInfo(): SystemInfo {
  try {
    const system: SystemInfo = {
      platform: platform || 'Unknown',
      arch: arch || 'Unknown',
    };

    if (isNode) {
      const nodeVersion = getNodeVersion();
      if (nodeVersion) {
        system.nodeVersion = nodeVersion;
      }
    }

    if (isBrowser) {
      const browserInfo = getBrowserInfo();
      if (browserInfo) {
        system.browserInfo = browserInfo;
      }
      system.userAgent = userAgent;
    }

    return system;
  } catch {
    return {
      platform: 'Unknown',
      arch: 'Unknown',
    };
  }
}
