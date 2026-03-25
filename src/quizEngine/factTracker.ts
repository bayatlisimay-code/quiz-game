type Variant = "A" | "B" | "C";

type FactKey = string; // concept.id is enough for now

export type FactUsage = {
  [factId: string]: {
    count: number;
    variants: Variant[];
  };
};

export function createFactTracker() {
  const usage: FactUsage = {};

  function record(factId: FactKey, variant: Variant) {
    if (!usage[factId]) {
      usage[factId] = {
        count: 0,
        variants: [],
      };
    }

    usage[factId].count += 1;

    if (!usage[factId].variants.includes(variant)) {
      usage[factId].variants.push(variant);
    }
  }

  function getUsage(factId: FactKey) {
    return usage[factId] ?? { count: 0, variants: [] };
  }

  function getAll() {
    return usage;
  }

  return {
    record,
    getUsage,
    getAll,
  };
}