import { isFeatureSupported } from './utils.js';

/**
 * Detect browser and environment capabilities
 */
export function getCapabilities() {
  return {
    hasLocalStorage: isFeatureSupported('localStorage'),
    hasSessionStorage: isFeatureSupported('sessionStorage'),
    hasIndexedDB: isFeatureSupported('indexedDB'),
    hasWebGL: isFeatureSupported('webgl'),
    hasWebGL2: isFeatureSupported('webgl2'),
    hasWebAssembly: isFeatureSupported('webassembly'),
    hasGeolocation: isFeatureSupported('geolocation'),
    hasCamera: isFeatureSupported('camera'),
    hasMicrophone: isFeatureSupported('microphone'),
    hasNotifications: isFeatureSupported('notifications'),
    hasServiceWorker: isFeatureSupported('serviceworker'),
    hasPushNotifications: isFeatureSupported('pushnotifications'),
  };
}
