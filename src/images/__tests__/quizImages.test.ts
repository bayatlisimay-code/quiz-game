import { attachQuizImages } from "../attachQuizImages";
import { createRuntimeRegistry } from "../createRuntimeRegistry";
import { resolveQuizImage } from "../resolveQuizImage";
import { runtimeImageRegistry } from "../runtimeRegistry";
import type { ConceptImageBinding, ImageAssetRecord, ImageCurationDataset, ImageReviewStatus, RuntimeImageRegistry } from "../types";
import type { Exercise } from "../../quizEngine/conceptTypes";

// Reserved test domain: never production delivery data.
const host = "artwork.example.test";
const asset: ImageAssetRecord = {
  imageId: "test-art", reviewStatus: "approved", reviewedBy: "test reviewer", reviewedAt: "2026-10-06T00:00:00Z",
  provenance: {
    candidateIdentity: "test subject", source: "test source", sourceUrl: "https://source.example.test/record",
    creator: null, retrievedAt: "2026-10-06T00:00:00Z", rightsNotes: "test only", evidenceRefs: [],
    license: { status: "public-domain", evidenceUrl: "https://source.example.test/rights" },
  },
  hosted: { hostedUrl: `https://${host}/test.jpg`, storageKey: "test.jpg", width: 400, height: 600,
    sha256: "a".repeat(64), mimeType: "image/jpeg" },
};
const binding: ConceptImageBinding = {
  conceptId: "mapped", imageId: asset.imageId, candidateIdentity: "test subject", altText: "Test artwork",
  allowedExerciseTypes: ["mcq", "true_false", "fill_blank"], reviewStatus: "approved",
  reviewedBy: "test reviewer", reviewedAt: "2026-10-06T00:00:00Z",
};
const dataset: ImageCurationDataset = { schemaVersion: 1, assets: [asset], bindings: [binding] };
const registry = createRuntimeRegistry([dataset], [host]);
const exercises: Exercise[] = [
  { type: "mcq", conceptId: "mapped", prompt: "Same subject", options: ["A", "B"], correctIndex: 0, answerText: "A" },
  { type: "true_false", conceptId: "mapped", statement: "Original statement", correctAnswer: false, answerText: "A" },
  { type: "fill_blank", conceptId: "mapped", prompt: "Original blank", answerText: "A", options: ["B", "A"], correctIndex: 1 },
  { type: "mcq", conceptId: "unmapped", prompt: "Same subject", options: ["A", "B"], correctIndex: 0, answerText: "A" },
  { type: "matching", prompt: "Match", pairs: [{ left: "L", right: "R" }] },
];

function freezeDeep(value: unknown): void {
  if (value && typeof value === "object") {
    Object.values(value).forEach(freezeDeep);
    Object.freeze(value);
  }
}

it("starts with an empty production registry and preserves text-only exercises", () => {
  expect(runtimeImageRegistry.bindings).toEqual({});
  expect(runtimeImageRegistry.ownedHosts).toEqual([]);
  expect(attachQuizImages(exercises)).toEqual(exercises);
  expect(resolveQuizImage("mapped", "mcq")).toBeUndefined();
});

it("attaches approved images by conceptId without changing order or any quiz fields", () => {
  const before = JSON.stringify(exercises);
  freezeDeep(exercises);
  const result = attachQuizImages(exercises, registry);
  expect(result).toHaveLength(exercises.length);
  result.forEach((exercise, index) => {
    const original = exercises[index];
    if (exercise.type === "matching") {
      expect(exercise).toBe(original);
      expect("image" in exercise).toBe(false);
    } else {
      const { image, ...quizFields } = exercise;
      expect(quizFields).toEqual(original);
      expect(image).toEqual(index < 3 ? registry.bindings.mapped.image : undefined);
    }
  });
  expect(JSON.stringify(exercises)).toBe(before);
  expect("image" in exercises[0]).toBe(false);
  expect(result[0]).not.toBe(exercises[0]);
});

it("does not resolve matching or an unmapped ID even with identical prompt text", () => {
  expect(resolveQuizImage("mapped", "matching", registry)).toBeUndefined();
  expect(resolveQuizImage("unmapped", "mcq", registry)).toBeUndefined();
});

it.each(["pending", "needs-review", "rejected"] as const)("excludes %s asset and binding approvals", status => {
  const review = { reviewStatus: status, reviewReason: "test review" };
  const assetDataset: ImageCurationDataset = { ...dataset, assets: [{ ...asset, ...review }] };
  const bindingDataset: ImageCurationDataset = { ...dataset, bindings: [{ ...binding, ...review }] };
  for (const candidate of [assetDataset, bindingDataset]) {
    expect(resolveQuizImage("mapped", "mcq", createRuntimeRegistry([candidate], [host]))).toBeUndefined();
  }
});

it.each(["pending", "needs-review", "rejected"] as ImageReviewStatus[])("fails closed for a malformed runtime %s binding", status => {
  const malformed = { ...registry, bindings: { mapped: { ...registry.bindings.mapped, reviewStatus: status } } };
  expect(resolveQuizImage("mapped", "mcq", malformed as RuntimeImageRegistry)).toBeUndefined();
});

it("rejects unowned delivery URLs, disallowed exercise types and key mismatches", () => {
  const mapped = registry.bindings.mapped;
  expect(resolveQuizImage("mapped", "mcq", { ...registry, ownedHosts: [] })).toBeUndefined();
  expect(resolveQuizImage("mapped", "mcq", { ...registry, bindings: {
    mapped: { ...mapped, allowedExerciseTypes: ["fill_blank"] },
  } })).toBeUndefined();
  expect(resolveQuizImage("mapped", "mcq", { ...registry, bindings: {
    mapped: { ...mapped, conceptId: "another" },
  } })).toBeUndefined();
  expect(resolveQuizImage("toString", "mcq", registry)).toBeUndefined();
});

it("projects display data without provenance and rejects duplicate approved keys", () => {
  expect(registry.bindings.mapped.image).not.toHaveProperty("provenance");
  expect(registry.bindings.mapped.image).not.toHaveProperty("attribution");
  expect(() => createRuntimeRegistry([{ ...dataset, bindings: [binding, binding] }], [host])).toThrow("Duplicate");
});

it("only publishes CC BY assets with complete required credits", () => {
  const credit = { creator: "Test creator", source: "Test source", sourceUrl: "https://source.example.test/record",
    licenseLabel: "CC BY 4.0", licenseUrl: "https://license.example.test/by", changes: "Resized" };
  const ccAsset: ImageAssetRecord = { ...asset, provenance: { ...asset.provenance, license: {
    status: "CC-BY", version: "4.0", licenseUrl: credit.licenseUrl,
    evidenceUrl: "https://source.example.test/rights", attribution: credit,
  } } };
  expect(createRuntimeRegistry([{ ...dataset, assets: [ccAsset] }], [host]).bindings.mapped.image.attribution).toEqual(credit);
  const invalid: ImageAssetRecord = { ...ccAsset, provenance: { ...ccAsset.provenance, license: {
    status: "CC-BY", version: "4.0", licenseUrl: credit.licenseUrl,
    evidenceUrl: "https://source.example.test/rights", attribution: { ...credit, creator: "" },
  } } };
  expect(() => createRuntimeRegistry([{ ...dataset, assets: [invalid] }], [host])).toThrow("Incomplete");
});

// These intentionally bypass static types to exercise the runtime validation boundary.
const malformedImageFields: readonly (readonly [string, unknown])[] = [
  ["altText", undefined], ["altText", ""], ["altText", "   "], ["altText", 42],
  ["width", undefined], ["width", 0], ["width", -1], ["width", NaN], ["width", Infinity], ["width", "400"],
  ["height", undefined], ["height", 0], ["height", -1], ["height", NaN], ["height", Infinity], ["height", "600"],
  ["uri", undefined], ["uri", ""], ["uri", 42], ["uri", {}], ["uri", "not a URL"],
  ["uri", "https://bad host/image.jpg"], ["uri", "https://bad_host.test/image.jpg"],
  ["uri", "https://third-party.example.test/image.jpg"], ["uri", `http://${host}/image.jpg`],
  ["imageId", undefined], ["attribution", null], ["attribution", {}],
];

it.each(malformedImageFields)("fails closed for malformed image field %s (%p)", (field, value) => {
  const candidate = { ...registry, bindings: { mapped: {
    ...registry.bindings.mapped, image: { ...registry.bindings.mapped.image, [field]: value },
  } } } as unknown as RuntimeImageRegistry;
  expect(() => resolveQuizImage("mapped", "mcq", candidate)).not.toThrow();
  expect(resolveQuizImage("mapped", "mcq", candidate)).toBeUndefined();
});

const malformedRegistries: unknown[] = [
  null, [], {}, { ...registry, bindings: null }, { ...registry, bindings: [] },
  { ...registry, ownedHosts: null }, { ...registry, ownedHosts: [42] },
  { ...registry, ownedHosts: ["bad_host.test"] },
  { ...registry, bindings: { mapped: null } },
  { ...registry, bindings: { mapped: { ...registry.bindings.mapped, image: null } } },
  { ...registry, bindings: { mapped: { ...registry.bindings.mapped, allowedExerciseTypes: null } } },
  { ...registry, bindings: { mapped: { ...registry.bindings.mapped, allowedExerciseTypes: "mcq" } } },
  { ...registry, bindings: { mapped: { ...registry.bindings.mapped, allowedExerciseTypes: ["mcq", "unsupported"] } } },
];

it.each(malformedRegistries)("fails closed for malformed registry %p", candidate => {
  expect(() => resolveQuizImage("mapped", "mcq", candidate as RuntimeImageRegistry)).not.toThrow();
  expect(resolveQuizImage("mapped", "mcq", candidate as RuntimeImageRegistry)).toBeUndefined();
});

it("fails closed for an unsupported exercise type", () => {
  const type = "unsupported" as Exercise["type"];
  expect(() => resolveQuizImage("mapped", type, registry)).not.toThrow();
  expect(resolveQuizImage("mapped", type, registry)).toBeUndefined();
});

it("reports conceptId and missing imageId for an approved dangling binding", () => {
  const candidate = { ...dataset, bindings: [{ ...binding, imageId: "missing-asset" }] };
  expect(() => createRuntimeRegistry([candidate], [host])).toThrow(
    "Approved concept binding mapped references missing imageId: missing-asset",
  );
});

it.each(["pending", "needs-review", "rejected"] as const)("still skips a %s dangling binding", reviewStatus => {
  const candidate: ImageCurationDataset = { ...dataset, bindings: [{ ...binding,
    imageId: "missing-asset", reviewStatus, reviewReason: "Not approved",
  }] };
  expect(createRuntimeRegistry([candidate], [host]).bindings).toEqual({});
});
