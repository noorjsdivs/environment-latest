/**
 * Runtime Environment Detection Types
 */
export interface EnvironmentInfo {
  // Runtime environments
  isBrowser: boolean;
  isNode: boolean;
  isBun: boolean;
  isDeno: boolean;
  isElectron: boolean;
  isJsDom: boolean;
  isReactNative: boolean;
  isWebView: boolean;
  isCloudflareWorkers: boolean;
  isVercelEdge: boolean;
  isNetlifyEdge: boolean;

  // Web Worker environments
  isWebWorker: boolean;
  isDedicatedWorker: boolean;
  isSharedWorker: boolean;
  isServiceWorker: boolean;

  // Operating Systems
  isMacOs: boolean;
  isWindows: boolean;
  isLinux: boolean;
  isIos: boolean;
  isAndroid: boolean;
  isFreeBSD: boolean;
  isOpenBSD: boolean;

  // Architecture
  isArm64: boolean;
  isX64: boolean;
  is32Bit: boolean;
  is64Bit: boolean;

  // Development/CI environments
  isDevelopment: boolean;
  isProduction: boolean;
  isTest: boolean;
  isCI: boolean;
  isDocker: boolean;

  // Browser engines
  isChrome: boolean;
  isFirefox: boolean;
  isSafari: boolean;
  isEdge: boolean;
  isOpera: boolean;

  // Mobile specific
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
  isTouchDevice: boolean;
}

/**
 * Node.js version information
 */
export interface NodeVersionInfo {
  major: number;
  minor: number;
  patch: number;
  raw: string;
}

/**
 * Browser information
 */
export interface BrowserInfo {
  name: string;
  version: string;
  engine: string;
}

/**
 * System information
 */
export interface SystemInfo {
  platform: string;
  arch: string;
  nodeVersion?: NodeVersionInfo;
  browserInfo?: BrowserInfo;
  userAgent?: string;
}

/**
 * Comprehensive environment detection result
 */
export interface EnvironmentDetectionResult extends EnvironmentInfo {
  system: SystemInfo;
  capabilities: {
    hasLocalStorage: boolean;
    hasSessionStorage: boolean;
    hasIndexedDB: boolean;
    hasWebGL: boolean;
    hasWebGL2: boolean;
    hasWebAssembly: boolean;
    hasGeolocation: boolean;
    hasCamera: boolean;
    hasMicrophone: boolean;
    hasNotifications: boolean;
    hasServiceWorker: boolean;
    hasPushNotifications: boolean;
  };
}
