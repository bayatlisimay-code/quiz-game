import type { RuntimeImageRegistry } from "./types";
import developmentRegistry from './developmentRegistry.generated.json';
import { selectRuntimeRegistry } from './selectRuntimeRegistry';

// Only the offline uploader can populate this public-URL-only development manifest.
// Release builds never select r2.dev bindings. Resolution validates manifest data.
export const runtimeImageRegistry = selectRuntimeRegistry(
  typeof __DEV__ !== 'undefined' && __DEV__,
  developmentRegistry as RuntimeImageRegistry,
);
