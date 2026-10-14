// Offline curation projection; not imported by the app's runtime registry or screen.
import { isOwnedImageUrl } from "./resolveQuizImage";
import { imageLicenseIssue, stagingApprovalIssue } from "./licensePolicy";
import type { ImageCurationDataset, RuntimeImageBinding, RuntimeImageRegistry } from "./types";

export function createRuntimeRegistry(
  datasets: readonly ImageCurationDataset[],
  ownedHosts: readonly string[],
): RuntimeImageRegistry {
  const assets = new Map(datasets.flatMap(dataset => dataset.assets).map(asset => [asset.imageId, asset]));
  const allAssets = datasets.flatMap(dataset => dataset.assets);
  if (datasets.some(dataset => dataset.schemaVersion !== 1) || assets.size !== allAssets.length) {
    throw new Error("Invalid schema or duplicate image asset ID");
  }
  const bindings: Record<string, RuntimeImageBinding> = Object.create(null);
  for (const binding of datasets.flatMap(dataset => dataset.bindings)) {
    if (binding.reviewStatus !== "approved") continue;
    const asset = assets.get(binding.imageId);
    if (!asset) {
      throw new Error(`Approved concept binding ${binding.conceptId} references missing imageId: ${binding.imageId}`);
    }
    if (asset.reviewStatus !== "approved") continue;
    const license = asset.provenance.license;
    if (license.status === "unknown") throw new Error(`Ineligible image ${asset.imageId}: unknown rights`);
    const issue = imageLicenseIssue(license) ?? stagingApprovalIssue(asset);
    if (issue) throw new Error(`Ineligible image ${asset.imageId}: ${issue}`);
    if (!binding.reviewedBy.trim() || !binding.reviewedAt.trim() ||
        !asset.reviewedBy.trim() || !asset.reviewedAt.trim() ||
        !asset.provenance.source.trim() || !asset.provenance.sourceUrl.trim() ||
        !asset.provenance.retrievedAt.trim() || !license.evidenceUrl.trim() ||
        !binding.candidateIdentity.trim() || !asset.provenance.candidateIdentity.trim() ||
        !binding.conceptId.trim() || !binding.altText.trim() ||
        !isOwnedImageUrl(asset.hosted.hostedUrl, ownedHosts) ||
        !Number.isFinite(asset.hosted.width) || asset.hosted.width <= 0 ||
        !Number.isFinite(asset.hosted.height) || asset.hosted.height <= 0 ||
        !asset.hosted.storageKey.trim() || !/^[a-f0-9]{64}$/i.test(asset.hosted.sha256) ||
        binding.allowedExerciseTypes.length === 0 ||
        binding.allowedExerciseTypes.some(type => !["mcq", "true_false", "fill_blank", "matching"].includes(type)) ||
        (binding.allowedExerciseTypes.includes("matching") && !binding.recognition) ||
        (binding.recognition && (!binding.recognition.answerLeakageReviewed || binding.recognition.answerId !== binding.candidateIdentity || binding.recognition.answerId !== asset.provenance.candidateIdentity))) {
      throw new Error(`Incomplete approved image binding: ${binding.conceptId}`);
    }
    if (bindings[binding.conceptId]) throw new Error(`Duplicate approved concept binding: ${binding.conceptId}`);
    bindings[binding.conceptId] = {
      reviewStatus: "approved",
      conceptId: binding.conceptId,
      ...(binding.recognition ? { recognition: binding.recognition } : {}),
      allowedExerciseTypes: [...binding.allowedExerciseTypes],
      image: {
        licenseStatus: license.status,
        imageId: asset.imageId, uri: asset.hosted.hostedUrl,
        width: asset.hosted.width, height: asset.hosted.height, altText: binding.altText,
      },
    };
  }
  return { schemaVersion: 1, ownedHosts: [...ownedHosts], bindings };
}
