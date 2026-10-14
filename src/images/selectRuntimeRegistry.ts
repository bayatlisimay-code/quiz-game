import type { RuntimeImageRegistry } from './types';

// Development delivery is deliberately separate from editorial production approval.
// Public URLs only: offline R2 credentials never enter a mobile bundle.
export const productionImageRegistry: RuntimeImageRegistry = Object.freeze({
  schemaVersion: 1,
  ownedHosts: Object.freeze([]),
  bindings: Object.freeze({}),
});

export function selectRuntimeRegistry(development: boolean, registry: RuntimeImageRegistry): RuntimeImageRegistry {
  return development ? registry : productionImageRegistry;
}
