// Shared by offline ingestion and release projection. Structure is checked here;
// the cited source and actual pixels must still be reviewed by an author.
function record(value: unknown): value is Record<string, unknown> {
  return value !== null && typeof value === "object" && !Array.isArray(value);
}
function nonempty(value: unknown): value is string {
  return typeof value === "string" && value.trim().length > 0;
}
function https(value: unknown): boolean {
  if (!nonempty(value)) return false;
  try { const url = new URL(value); return url.protocol === "https:" && !url.username && !url.password; }
  catch { return false; }
}
export function imageLicenseIssue(license: unknown): string | undefined {
  if (!record(license) || !["public-domain", "CC0"].includes(String(license.status))) {
    return "Unsupported license: only verified Public Domain or CC0 digital images are eligible";
  }
  if (!https(license.evidenceUrl)) return "Missing digital-image rights evidence URL";
  if (license.attribution !== undefined || license.attributionRequired === true ||
      (license.status === "public-domain" && license.licenseUrl !== undefined &&
        license.licenseUrl !== "https://creativecommons.org/publicdomain/mark/1.0/")) {
    return "Conflicting digital-image rights claims";
  }
  if (license.status === "CC0" && license.licenseUrl !== "https://creativecommons.org/publicdomain/zero/1.0/") {
    return "Invalid CC0 URL";
  }
  return undefined;
}
export function stagingApprovalIssue(asset: unknown): string | undefined {
  if (!record(asset) || !record(asset.provenance) || !record(asset.stagingApproval)) return "Missing staging approval";
  const a = asset.stagingApproval;
  if (!nonempty(a.sourceSha256) || !/^[a-f0-9]{64}$/.test(a.sourceSha256) ||
      ![a.reviewedBy, a.collection, a.version, a.rightsBasis, a.candidateIdentity].every(nonempty) ||
      !nonempty(a.reviewedAt) || !/^\d{4}-\d{2}-\d{2}T/.test(a.reviewedAt) || !Number.isFinite(Date.parse(a.reviewedAt)) ||
      a.candidateIdentity !== asset.provenance.candidateIdentity ||
      !https(a.identityEvidenceUrl) || !https(a.rightsEvidenceUrl) ||
      !record(asset.provenance.license) || a.rightsEvidenceUrl !== asset.provenance.license.evidenceUrl ||
      a.scope !== "digital-image" || a.commercialUse !== true || a.modification !== true ||
      a.distribution !== true || a.attributionRequired !== false ||
      !Array.isArray(a.unresolvedRestrictions) || a.unresolvedRestrictions.length !== 0 ||
      a.visualReview !== "reviewed-no-watermark-no-answer-caption" ||
      (a.crop !== undefined && (!record(a.crop) || !nonempty(a.crop.reason) ||
        ![a.crop.x, a.crop.y, a.crop.width, a.crop.height].every(Number.isInteger) ||
        Number(a.crop.x) < 0 || Number(a.crop.y) < 0 || Number(a.crop.width) <= 0 || Number(a.crop.height) <= 0))) {
    return "Incomplete staging approval: identity/version, unrestricted digital-image rights and visual review required";
  }
  return undefined;
}
