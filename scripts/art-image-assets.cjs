/* Offline, explicit ingestion. Never searches, approves rights, or uploads assets.
 * node scripts/art-image-assets.cjs --check
 * node scripts/art-image-assets.cjs --ingest IMAGE_ID --source /path/to/download.jpg
 * node scripts/art-image-assets.cjs --build --hosts images.your-domain --output /tmp/registry.json
 */
const fs = require('node:fs');
const path = require('node:path');
const crypto = require('node:crypto');
const Jimp = require('jimp-compact'); // Existing Expo tooling dependency; no runtime dependency.
const root = path.resolve(__dirname, '..');
// One policy implementation for ingestion and the release projection.
const ts = require('typescript');
require.extensions['.ts'] = (module,filename) => module._compile(ts.transpileModule(fs.readFileSync(filename,'utf8'),{ compilerOptions:{module:ts.ModuleKind.CommonJS,target:ts.ScriptTarget.ES2022,esModuleInterop:true} }).outputText,filename);
const { imageLicenseIssue, stagingApprovalIssue } = require('../src/images/licensePolicy.ts');
const digest = bytes => crypto.createHash('sha256').update(bytes).digest('hex');
const fail = message => { throw new Error(message); };
const assert = (condition, message) => { if (!condition) fail(message); };
const https = value => { try { const url = new URL(value); return url.protocol === 'https:' && !url.username && !url.password; } catch { return false; } };
const nonempty = value => typeof value === 'string' && value.trim().length > 0;
const timestamp = value => nonempty(value) && /^\d{4}-\d{2}-\d{2}T/.test(value) && Number.isFinite(Date.parse(value));
function load() {
  return fs.readdirSync(path.join(root,'data/imageCuration/art')).filter(name=>name.endsWith('.json')).sort().map(topic => {
    const file = path.join(root, 'data/imageCuration/art', topic);
    const data = JSON.parse(fs.readFileSync(file, 'utf8'));
    assert(data.schemaVersion === 1 && Array.isArray(data.assets) && Array.isArray(data.bindings), `Invalid dataset: ${topic}`);
    return { file, data };
  });
}
function validate(datasets) {
  const assets = new Map(), concepts = new Set();
  for (const { data } of datasets) for (const asset of data.assets) {
    assert(nonempty(asset.imageId) && /^[a-z0-9-]+$/.test(asset.imageId) && !assets.has(asset.imageId), 'Invalid/duplicate asset ID');
    assets.set(asset.imageId, asset);
    const p = asset.provenance, license = p?.license;
    assert(p && nonempty(p.candidateIdentity) && nonempty(p.source) && https(p.sourceUrl) && timestamp(p.retrievedAt) &&
      (p.creator === null || nonempty(p.creator)) && nonempty(p.rightsNotes) && Array.isArray(p.evidenceRefs) && p.evidenceRefs.length && p.evidenceRefs.every(nonempty), `Missing provenance: ${asset.imageId}`);
    // Unknown candidates can be researched, but cannot be ingested or published.
    const licenseIssue = imageLicenseIssue(license);
    assert(license?.status === 'unknown' || !licenseIssue, licenseIssue);
    if (asset.staged || asset.stagingApproval || asset.reviewStatus === 'approved') {
      assert(!licenseIssue, licenseIssue);
      const approvalIssue = stagingApprovalIssue(asset);
      assert(!approvalIssue, approvalIssue);
    }
    assert(['pending','needs-review','approved','rejected'].includes(asset.reviewStatus), 'Invalid asset status');
    if (asset.reviewStatus === 'approved') assert(nonempty(asset.reviewedBy) && timestamp(asset.reviewedAt) && asset.hosted && license.status !== 'unknown', 'Approval needs review, license and owned hosting');
    else assert(nonempty(asset.reviewReason), 'Unapproved asset needs reason');
  }
  for (const { data } of datasets) for (const binding of data.bindings) {
    const asset = assets.get(binding.imageId);
    assert(asset && nonempty(binding.conceptId) && !concepts.has(binding.conceptId) && nonempty(binding.altText) &&
      binding.candidateIdentity === asset.provenance.candidateIdentity && Array.isArray(binding.allowedExerciseTypes) && binding.allowedExerciseTypes.length &&
      binding.allowedExerciseTypes.every(t => ['mcq','true_false','fill_blank','matching'].includes(t)), 'Invalid/duplicate binding');
    concepts.add(binding.conceptId);
    assert(['pending','needs-review','approved','rejected'].includes(binding.reviewStatus), 'Invalid binding status');
    if (binding.reviewStatus === 'approved') assert(nonempty(binding.reviewedBy) && timestamp(binding.reviewedAt) && asset.reviewStatus === 'approved' &&
      binding.recognition?.answerId === binding.candidateIdentity && binding.recognition.answerLeakageReviewed === true, 'Recognition approval incomplete');
    else assert(nonempty(binding.reviewReason), 'Unapproved binding needs reason');
  }
  return assets;
}
function validateSourceBytes(asset, bytes) {
  assert(!imageLicenseIssue(asset.provenance?.license) && !stagingApprovalIssue(asset), 'Source needs eligible rights and pixel review');
  assert(digest(bytes) === asset.stagingApproval.sourceSha256, 'Source bytes differ from reviewed image');
}
async function checkBytes(asset, preparedBytes) {
  if (!asset.staged) return;
  const s = asset.staged;
  assert(s.sourceSha256 === asset.stagingApproval?.sourceSha256, 'Source checksum differs from staging approval');
  assert(/^assets\/staged-art\/[a-z0-9-]+\.jpg$/.test(s.path), 'Unsafe staged path');
  const bytes = preparedBytes ?? fs.readFileSync(path.join(root, s.path));
  assert(bytes.length <= 600000 && bytes[0] === 255 && bytes[1] === 216 && bytes[2] === 255, 'Oversized or non-JPEG derivative');
  assert(!bytes.includes(Buffer.from('Exif\0\0')) && !bytes.includes(Buffer.from('http://ns.adobe.com/xap/1.0/')), 'Leaking EXIF/XMP metadata');
  assert(digest(bytes) === s.sha256 && /^[a-f0-9]{64}$/.test(s.sourceSha256), 'Derivative checksum mismatch');
  const image = await Jimp.read(bytes);
  assert(image.bitmap.width === s.width && image.bitmap.height === s.height && Math.max(s.width,s.height) <= 1280 &&
    s.width > 0 && s.height > 0 && s.mimeType === 'image/jpeg', 'Invalid derivative dimensions');
  const crop = s.crop;
  if (crop) assert([crop.x,crop.y,crop.width,crop.height].every(Number.isInteger) && crop.x >= 0 && crop.y >= 0 &&
    crop.width > 0 && crop.height > 0 && crop.x+crop.width <= s.sourceWidth && crop.y+crop.height <= s.sourceHeight && nonempty(crop.reason), 'Invalid source crop');
  assert(JSON.stringify(crop) === JSON.stringify(asset.stagingApproval?.crop), 'Unreviewed source crop');
  const baseWidth = crop?.width ?? s.sourceWidth, baseHeight = crop?.height ?? s.sourceHeight;
  const ratio = Math.min(1,1280 / Math.max(baseWidth,baseHeight));
  assert(Number.isInteger(s.sourceWidth) && Number.isInteger(s.sourceHeight) && s.sourceWidth > 0 && s.sourceHeight > 0 &&
    s.width === Math.round(baseWidth*ratio) && s.height === Math.round(baseHeight*ratio), 'Aspect ratio changed or image enlarged');
}
async function main() {
  const args = process.argv.slice(2), datasets = load(), assets = validate(datasets);
  if (args[0] === '--ingest') {
    const id = args[1], source = args[args.indexOf('--source') + 1], asset = assets.get(id);
    assert(asset && args.includes('--source') && source && !imageLicenseIssue(asset.provenance.license) && !stagingApprovalIssue(asset) &&
      asset.reviewStatus !== 'approved' && !asset.staged, 'Ingestion requires a reviewed license candidate; does not change approvals');
    const raw = fs.readFileSync(source);
    validateSourceBytes(asset, raw);
    const image = await Jimp.read(raw);
    const sourceWidth = image.bitmap.width, sourceHeight = image.bitmap.height;
    const crop = asset.stagingApproval.crop;
    if (crop) {
      assert(crop.x+crop.width <= sourceWidth && crop.y+crop.height <= sourceHeight, 'Invalid source crop');
      image.crop(crop.x,crop.y,crop.width,crop.height);
    }
    const ratio = Math.min(1,1280 / Math.max(image.bitmap.width,image.bitmap.height));
    if (ratio < 1) image.resize(Math.round(image.bitmap.width*ratio),Math.round(image.bitmap.height*ratio));
    // Re-encode pixels in a fresh image: Jimp can otherwise preserve source EXIF.
    const clean = new Jimp(image.bitmap.width,image.bitmap.height);
    clean.bitmap.data = Buffer.from(image.bitmap.data);
    const bytes = await clean.quality(82).getBufferAsync(Jimp.MIME_JPEG), hash = digest(bytes);
    const relative = `assets/staged-art/${id}-${hash.slice(0,12)}.jpg`;
    fs.mkdirSync(path.join(root,'assets/staged-art'),{ recursive:true });
    asset.staged = { path:relative, width:image.bitmap.width, height:image.bitmap.height, sourceWidth, sourceHeight, ...(crop ? {crop} : {}), sha256:hash, sourceSha256:digest(raw), mimeType:'image/jpeg' };
    await checkBytes(asset,bytes);
    fs.writeFileSync(path.join(root,relative),bytes,{ flag:'wx' });
    const dataset = datasets.find(d => d.data.assets.includes(asset));
    fs.writeFileSync(dataset.file,JSON.stringify(dataset.data,null,2)+'\n');
    console.log(`Staged ${id}; approval unchanged.`);
  } else {
    assert(args[0] === '--check' || args[0] === '--build', 'Specify --check, --ingest or --build');
    for (const asset of assets.values()) await checkBytes(asset);
    // Load the same production projection and content snapshot, not a parallel registry builder.
    const { activeRegisteredConcepts } = require('../src/quizEngine/contentSnapshot.ts');
    const known = new Map(activeRegisteredConcepts().map(c => [c.id,c]));
    for (const { data } of datasets) for (const binding of data.bindings) assert(known.get(binding.conceptId)?.semantic?.value?.id === binding.candidateIdentity,'Unknown concept or incorrect identity binding');
    if (args[0] === '--build') {
      assert(args.includes('--hosts') && args.includes('--output'), 'Build requires explicit owned host list and output path');
      const hosts = args[args.indexOf('--hosts')+1].split(',');
      const { createRuntimeRegistry } = require('../src/images/createRuntimeRegistry.ts');
      for (const asset of assets.values()) if (asset.reviewStatus === 'approved') {
        assert(asset.staged && asset.hosted.sha256 === asset.staged.sha256 && asset.hosted.width === asset.staged.width && asset.hosted.height === asset.staged.height && asset.hosted.mimeType === asset.staged.mimeType,'Hosted derivative does not match checked local bytes');
      }
      const registry = createRuntimeRegistry(datasets.map(d => d.data),hosts);
      assert(Object.keys(registry.bindings).length > 0,'No approved, hosted bindings; refusing empty release manifest');
      fs.writeFileSync(args[args.indexOf('--output')+1],JSON.stringify(registry,null,2)+'\n',{flag:'wx'});
    }
    console.log(JSON.stringify({assets:assets.size, staged:[...assets.values()].filter(a=>a.staged).length, approved:[...assets.values()].filter(a=>a.reviewStatus==='approved').length, stagingApproved:[...assets.values()].filter(a=>a.stagingApproval).length}));
  }
}
module.exports = { validate, checkBytes, validateSourceBytes };
if (require.main === module) main().catch(error => { console.error(error.message); process.exitCode=1; });
