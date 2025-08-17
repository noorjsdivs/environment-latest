// Export all detection variables and functions
export {
  // Core runtime environments
  isBrowser,
  isNode,
  isBun,
  isDeno,
  isElectron,
  isJsDom,
  isReactNative,
  isWebView,
  isCloudflareWorkers,
  isVercelEdge,
  isNetlifyEdge,

  // Web Worker environments
  isWebWorker,
  isDedicatedWorker,
  isSharedWorker,
  isServiceWorker,

  // Operating Systems
  isMacOs,
  isWindows,
  isLinux,
  isIos,
  isAndroid,
  isFreeBSD,
  isOpenBSD,

  // Architecture
  isArm64,
  isX64,
  is32Bit,
  is64Bit,

  // Environment
  isDevelopment,
  isProduction,
  isTest,
  isCI,
  isDocker,

  // Browser engines
  isChrome,
  isFirefox,
  isSafari,
  isEdge,
  isOpera,

  // Device types
  isMobile,
  isTablet,
  isDesktop,
  isTouchDevice,

  // Helper functions
  getNodeVersion,
  getBrowserInfo,
  getSystemInfo,
} from './detection.js';

export { getCapabilities } from './capabilities.js';

export type {
  EnvironmentInfo,
  NodeVersionInfo,
  BrowserInfo,
  SystemInfo,
  EnvironmentDetectionResult,
} from './types.js';

// Main detection function that returns all information
import {
  isBrowser,
  isNode,
  isBun,
  isDeno,
  isElectron,
  isJsDom,
  isReactNative,
  isWebView,
  isCloudflareWorkers,
  isVercelEdge,
  isNetlifyEdge,
  isWebWorker,
  isDedicatedWorker,
  isSharedWorker,
  isServiceWorker,
  isMacOs,
  isWindows,
  isLinux,
  isIos,
  isAndroid,
  isFreeBSD,
  isOpenBSD,
  isArm64,
  isX64,
  is32Bit,
  is64Bit,
  isDevelopment,
  isProduction,
  isTest,
  isCI,
  isDocker,
  isChrome,
  isFirefox,
  isSafari,
  isEdge,
  isOpera,
  isMobile,
  isTablet,
  isDesktop,
  isTouchDevice,
  getSystemInfo,
} from './detection.js';

import { getCapabilities } from './capabilities.js';
import type { EnvironmentDetectionResult } from './types.js';

/**
 * Get comprehensive environment detection information
 */
export function detectEnvironment(): EnvironmentDetectionResult {
  return {
    // Runtime environments
    isBrowser,
    isNode,
    isBun,
    isDeno,
    isElectron,
    isJsDom,
    isReactNative,
    isWebView,
    isCloudflareWorkers,
    isVercelEdge,
    isNetlifyEdge,

    // Web Worker environments
    isWebWorker,
    isDedicatedWorker,
    isSharedWorker,
    isServiceWorker,

    // Operating Systems
    isMacOs,
    isWindows,
    isLinux,
    isIos,
    isAndroid,
    isFreeBSD,
    isOpenBSD,

    // Architecture
    isArm64,
    isX64,
    is32Bit,
    is64Bit,

    // Environment
    isDevelopment,
    isProduction,
    isTest,
    isCI,
    isDocker,

    // Browser engines
    isChrome,
    isFirefox,
    isSafari,
    isEdge,
    isOpera,

    // Device types
    isMobile,
    isTablet,
    isDesktop,
    isTouchDevice,

    // System information
    system: getSystemInfo(),

    // Capabilities
    capabilities: getCapabilities(),
  };
}

// Default export for convenience
export default detectEnvironment;
