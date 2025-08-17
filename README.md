# environment-latest

[![npm version](https://badge.fury.io/js/environment-latest.svg)](https://badge.fury.io/js/environment-latest)
[![TypeScript](https://img.shields.io/badge/TypeScript-Ready-blue.svg)](https://www.typescriptlang.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![YouTube](https://img.shields.io/badge/YouTube-ReactJS%20BD-red.svg?logo=youtube)](https://www.youtube.com/@reactjsBD)
[![Buy Me a Coffee](https://img.shields.io/badge/Buy%20Me%20a%20Coffee-Support-orange.svg?logo=buy-me-a-coffee)](https://buymeacoffee.com/reactbd)

> Modern TypeScript package for detecting JavaScript runtime environments and operating systems

A comprehensive, zero-dependency TypeScript library for detecting JavaScript runtime environments, operating systems, browser engines, device types, and capabilities. This is an enhanced, modern alternative to the original `environment` package with additional features and better TypeScript support.

## Why Choose environment-latest?

| Feature                     | environment-latest | environment       |
| --------------------------- | ------------------ | ----------------- |
| TypeScript Support          | ✅ Built-in        | ❌ External types |
| Zero Dependencies           | ✅                 | ✅                |
| Modern Runtimes (Bun, Deno) | ✅                 | ✅                |
| Edge Functions Support      | ✅                 | ❌                |
| Device Type Detection       | ✅                 | ❌                |
| Browser Engine Detection    | ✅                 | ❌                |
| Capability Detection        | ✅                 | ❌                |
| Architecture Detection      | ✅                 | ❌                |
| Environment Variables       | ✅                 | ❌                |
| Comprehensive API           | ✅                 | ❌                |

## Features

✨ **Zero Runtime Dependencies** - No external dependencies for maximum compatibility  
🎯 **TypeScript First** - Built with TypeScript 5.6+, includes complete type definitions  
🔍 **Comprehensive Detection** - Detects 40+ different environments and capabilities  
🚀 **Modern Runtimes** - Supports latest JavaScript runtimes (Bun, Deno, Edge Functions)  
🔧 **Tree Shakable** - Import only what you need  
📱 **Device Detection** - Mobile, tablet, desktop, and touch device detection  
🌐 **Browser Engine Detection** - Chrome, Firefox, Safari, Edge, Opera  
⚡ **Performance Focused** - Lazy evaluation and efficient detection algorithms  
🏗️ **Minimal Build** - Built with native TypeScript compiler, no bundlers required

## Installation

```bash
npm install environment-latest
```

```bash
yarn add environment-latest
```

```bash
pnpm add environment-latest
```

```bash
bun add environment-latest
```

## Usage

### Basic Usage

```typescript
import { isBrowser, isNode, isMobile } from "environment-latest";

if (isBrowser) {
  console.log("Running in a browser!");
}

if (isNode) {
  console.log("Running in Node.js!");
}

if (isMobile) {
  console.log("Running on a mobile device!");
}
```

### Comprehensive Detection

```typescript
import { detectEnvironment } from "environment-latest";

const env = detectEnvironment();

console.log("Environment:", {
  runtime: env.isNode ? "Node.js" : env.isBrowser ? "Browser" : "Other",
  platform: env.system.platform,
  architecture: env.system.arch,
  capabilities: env.capabilities,
});
```

### Specific Feature Detection

```typescript
import {
  isChrome,
  isIos,
  isArm64,
  isDevelopment,
  getNodeVersion,
  getBrowserInfo,
} from "environment-latest";

// Browser detection
if (isChrome) {
  const browser = getBrowserInfo();
  console.log(`Chrome version: ${browser?.version}`);
}

// Platform detection
if (isIos) {
  console.log("iOS device detected");
}

// Architecture detection
if (isArm64) {
  console.log("ARM64 architecture");
}

// Environment detection
if (isDevelopment) {
  console.log("Development mode");
}

// Node.js version
const nodeVersion = getNodeVersion();
if (nodeVersion) {
  console.log(
    `Node.js ${nodeVersion.major}.${nodeVersion.minor}.${nodeVersion.patch}`
  );
}
```

## API Reference

### Runtime Environments

| Export                | Type      | Description                    |
| --------------------- | --------- | ------------------------------ |
| `isBrowser`           | `boolean` | Web browser environment        |
| `isNode`              | `boolean` | Node.js environment            |
| `isBun`               | `boolean` | Bun runtime environment        |
| `isDeno`              | `boolean` | Deno runtime environment       |
| `isElectron`          | `boolean` | Electron environment           |
| `isJsDom`             | `boolean` | jsdom environment              |
| `isReactNative`       | `boolean` | React Native environment       |
| `isWebView`           | `boolean` | WebView environment            |
| `isCloudflareWorkers` | `boolean` | Cloudflare Workers environment |
| `isVercelEdge`        | `boolean` | Vercel Edge Functions          |
| `isNetlifyEdge`       | `boolean` | Netlify Edge Functions         |

### Web Worker Environments

| Export              | Type      | Description                  |
| ------------------- | --------- | ---------------------------- |
| `isWebWorker`       | `boolean` | Any Web Worker environment   |
| `isDedicatedWorker` | `boolean` | Dedicated Worker environment |
| `isSharedWorker`    | `boolean` | Shared Worker environment    |
| `isServiceWorker`   | `boolean` | Service Worker environment   |

### Operating Systems

| Export      | Type      | Description              |
| ----------- | --------- | ------------------------ |
| `isMacOs`   | `boolean` | macOS operating system   |
| `isWindows` | `boolean` | Windows operating system |
| `isLinux`   | `boolean` | Linux operating system   |
| `isIos`     | `boolean` | iOS operating system     |
| `isAndroid` | `boolean` | Android operating system |
| `isFreeBSD` | `boolean` | FreeBSD operating system |
| `isOpenBSD` | `boolean` | OpenBSD operating system |

### Architecture

| Export    | Type      | Description                |
| --------- | --------- | -------------------------- |
| `isArm64` | `boolean` | ARM64/AArch64 architecture |
| `isX64`   | `boolean` | x64/x86_64 architecture    |
| `is32Bit` | `boolean` | 32-bit architecture        |
| `is64Bit` | `boolean` | 64-bit architecture        |

### Environment Types

| Export          | Type      | Description                        |
| --------------- | --------- | ---------------------------------- |
| `isDevelopment` | `boolean` | Development environment            |
| `isProduction`  | `boolean` | Production environment             |
| `isTest`        | `boolean` | Test environment                   |
| `isCI`          | `boolean` | Continuous Integration environment |
| `isDocker`      | `boolean` | Docker container environment       |

### Browser Engines

| Export      | Type      | Description             |
| ----------- | --------- | ----------------------- |
| `isChrome`  | `boolean` | Chrome/Chromium browser |
| `isFirefox` | `boolean` | Firefox browser         |
| `isSafari`  | `boolean` | Safari browser          |
| `isEdge`    | `boolean` | Microsoft Edge browser  |
| `isOpera`   | `boolean` | Opera browser           |

### Device Types

| Export          | Type      | Description          |
| --------------- | --------- | -------------------- |
| `isMobile`      | `boolean` | Mobile device        |
| `isTablet`      | `boolean` | Tablet device        |
| `isDesktop`     | `boolean` | Desktop device       |
| `isTouchDevice` | `boolean` | Touch-enabled device |

### Helper Functions

#### `getNodeVersion(): NodeVersionInfo | null`

Returns Node.js version information or `null` if not in Node.js environment.

```typescript
const version = getNodeVersion();
if (version) {
  console.log(`Node.js ${version.major}.${version.minor}.${version.patch}`);
}
```

#### `getBrowserInfo(): BrowserInfo | null`

Returns browser information or `null` if not in browser environment.

```typescript
const browser = getBrowserInfo();
if (browser) {
  console.log(`${browser.name} ${browser.version} (${browser.engine})`);
}
```

#### `getSystemInfo(): SystemInfo`

Returns comprehensive system information.

```typescript
const system = getSystemInfo();
console.log(`Platform: ${system.platform}, Architecture: ${system.arch}`);
```

#### `getCapabilities(): Capabilities`

Returns available platform capabilities.

```typescript
const capabilities = getCapabilities();
if (capabilities.hasWebGL) {
  console.log("WebGL is supported");
}
```

#### `detectEnvironment(): EnvironmentDetectionResult`

Returns comprehensive environment detection result including all boolean flags, system info, and capabilities.

```typescript
const env = detectEnvironment();
console.log("Complete environment info:", env);
```

## TypeScript Support

This package is written in TypeScript and includes complete type definitions:

```typescript
import type {
  EnvironmentInfo,
  NodeVersionInfo,
  BrowserInfo,
  SystemInfo,
  EnvironmentDetectionResult,
} from "environment-latest";

const handleEnvironment = (env: EnvironmentDetectionResult) => {
  // Full type safety
  if (env.isBrowser && env.capabilities.hasWebGL) {
    // Browser with WebGL support
  }
};
```

## Performance

- **Zero Runtime Dependencies**: No external dependencies to minimize bundle size
- **Lazy Evaluation**: Detection logic runs only when accessed
- **Tree Shaking**: Import only the detectors you need
- **Caching**: Results are computed once and cached
- **Small Bundle Size**: < 5KB minified and gzipped
- **Modern Build**: Built with TypeScript 5.6+ and native compiler

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## Development

```bash
# Install dependencies (only TypeScript!)
npm install

# Run tests
npm test

# Build the package
npm run build

# Type checking
npm run typecheck
```

## License

MIT © [Noor Mohammad](https://github.com/noorjsdivs)

## Changelog

### 1.0.0

- Initial release
- Comprehensive environment detection
- TypeScript support
- Zero dependencies
- 40+ detection capabilities

---

Made with ❤️ by [Noor Mohammad](https://github.com/noorjsdivs)
