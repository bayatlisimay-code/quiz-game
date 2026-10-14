import { createRequire } from 'node:module';
import { execFileSync, spawnSync } from 'node:child_process';
import { readFileSync, readdirSync } from 'node:fs';
import { createHash } from 'node:crypto';
import { createRuntimeRegistry } from '../createRuntimeRegistry';
import type { ImageCurationDataset } from '../types';
import { activeSemanticContext, activeRegisteredConcepts } from '../../quizEngine/contentSnapshot';
import { planAssessmentStimulus } from '../assessmentImages';

const datasets: ImageCurationDataset[] = readdirSync('data/imageCuration/art').filter(name => name.endsWith('.json')).sort().map(name=>JSON.parse(readFileSync(`data/imageCuration/art/${name}`,'utf8')) as ImageCurationDataset).filter(d => d.assets.length > 0);

test('actual staged derivatives pass offline identity, license, byte, metadata, size and concept checks', () => {
  const result=execFileSync(process.execPath,['scripts/art-image-assets.cjs','--check'],{encoding:'utf8'});
  expect(JSON.parse(result)).toEqual({assets:18,staged:18,approved:0,stagingApproved:18});
  for (const dataset of datasets) for(const asset of dataset.assets) {
    const bytes=readFileSync(asset.staged!.path);
    expect(createHash('sha256').update(bytes).digest('hex')).toBe(asset.staged!.sha256);
    expect(bytes.includes(Buffer.from('Exif\0\0'))).toBe(false);
    expect(bytes.includes(Buffer.from('http://ns.adobe.com/xap/1.0/'))).toBe(false);
    expect(asset.staged!.path).not.toMatch(/arnolfini|david|michelangelo|eyck/i);
    expect(Math.max(asset.staged!.width,asset.staged!.height)).toBeLessThanOrEqual(1280);
  }
});

test('staging and license review do not grant runtime approval or third-party hotlinking', () => {
  expect(createRuntimeRegistry(datasets,[]).bindings).toEqual({});
  for(const dataset of datasets) for(const binding of dataset.bindings) {
    const c=activeRegisteredConcepts().find(c=>c.id===binding.conceptId)!;
    expect(planAssessmentStimulus(c,activeSemanticContext,'mcq').stimulus?.kind).toBe('text');
    expect(binding.reviewStatus).toBe('needs-review');
  }
  const result=spawnSync(process.execPath,['scripts/art-image-assets.cjs','--build','--hosts','images.example.invalid','--output','/tmp/unapproved-art-registry.json'],{encoding:'utf8'});
  expect(result.status).toBe(1);
  expect(result.stderr).toContain('No approved, hosted bindings');
});

const pipeline: {validate: (input: readonly {data: unknown}[]) => unknown; checkBytes: (asset: unknown) => Promise<void>; validateSourceBytes: (asset: unknown, bytes: Buffer) => void} = createRequire(`${process.cwd()}/package.json`)('./scripts/art-image-assets.cjs');
test('offline qualification rejects unsupported licenses, false approval, invalid identity and duplicate bindings', () => {
  const d=datasets[0], a=d.assets[0], b=d.bindings[0];
  const run=(data:unknown)=>pipeline.validate([{data}]);
  expect(()=>run({...d,assets:[{...a,provenance:{...a.provenance,license:{status:'CC-BY-SA'}}}]})).toThrow('Unsupported license');
  expect(()=>run({...d,assets:[{...a,reviewStatus:'approved',reviewedBy:'test',reviewedAt:'not-a-date'}]})).toThrow('Approval needs');
  expect(()=>run({...d,bindings:[{...b,candidateIdentity:'artwork:wrong-version'}]})).toThrow('Invalid/duplicate binding');
  expect(()=>run({...d,bindings:[b,b]})).toThrow('Invalid/duplicate binding');
  expect(()=>run({...d,assets:[{...a,provenance:{...a.provenance,retrievedAt:'invalid'}}]})).toThrow('Missing provenance');
});
test('actual derivative checksum, path and aspect ratio tampering fail closed', async () => {
  const a=datasets[0].assets[0];
  await expect(pipeline.checkBytes({...a,staged:{...a.staged,sha256:'0'.repeat(64)}})).rejects.toThrow('checksum mismatch');
  await expect(pipeline.checkBytes({...a,staged:{...a.staged,path:'../../etc/passwd'}})).rejects.toThrow('Unsafe staged path');
  await expect(pipeline.checkBytes({...a,staged:{...a.staged,sourceWidth:1}})).rejects.toThrow('Aspect ratio changed');
});


test.each(['CC-BY','CC-BY-SA','CC-BY-NC','editorial-only'])('offline ingestion rejects %s regardless of credits', status => {
  const d=datasets[0], a=d.assets[0];
  expect(()=>pipeline.validate([{data:{...d,assets:[{...a,provenance:{...a.provenance,license:{status,evidenceUrl:a.provenance.sourceUrl}}}]}}])).toThrow('Unsupported license');
});
test('staging requires actual-image rights, original identity/version, visual review and no unresolved restriction', () => {
  const d=datasets[0], a=d.assets[0];
  for (const stagingApproval of [undefined, {...a.stagingApproval,scope:'artwork'}, {...a.stagingApproval,commercialUse:false},
    {...a.stagingApproval,attributionRequired:true}, {...a.stagingApproval,version:''},
    {...a.stagingApproval,candidateIdentity:'artwork:replica'}, {...a.stagingApproval,unresolvedRestrictions:['permission pending']}]) {
    expect(()=>pipeline.validate([{data:{...d,assets:[{...a,stagingApproval}]}}])).toThrow(/staging approval/);
  }
});
test('caption-removal crops are explicit, bounded and cannot change derivative aspect ratio', async () => {
  const a=datasets.flatMap(d=>d.assets).find(a=>a.staged?.crop)!;
  await expect(pipeline.checkBytes(a)).resolves.toBeUndefined();
  await expect(pipeline.checkBytes({...a,staged:{...a.staged,crop:{...a.staged!.crop,x:-1}}})).rejects.toThrow('Invalid source crop');
  await expect(pipeline.checkBytes({...a,staged:{...a.staged,crop:undefined}})).rejects.toThrow('Unreviewed source crop');
});

test('ingestion cannot replace a visually reviewed image with different downloaded bytes', () => {
  const a=datasets[0].assets[0], bytes=Buffer.from('source-byte-fixture-only');
  expect(()=>pipeline.validateSourceBytes(a,bytes)).toThrow('Source bytes differ');
  const expected=createHash('sha256').update(bytes).digest('hex');
  expect(()=>pipeline.validateSourceBytes({...a,stagingApproval:{...a.stagingApproval,sourceSha256:expected}},bytes)).not.toThrow();
});
