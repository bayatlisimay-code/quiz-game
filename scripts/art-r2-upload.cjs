/* Offline R2 uploader. No storage credentials are imported by the mobile app.
 * --init-config; --dry-run; --upload (requires a matching successful dry run).
 */
const fs = require('node:fs');
const path = require('node:path');
const crypto = require('node:crypto');
const https = require('node:https');
const pipeline = require('./art-image-assets.cjs');
const root = path.resolve(__dirname, '..');
const configPath = path.join(root, '.r2.env.local');
const receiptDir = path.join(root, '.art-r2-upload');
const names = ['R2_ACCOUNT_ID','R2_ACCESS_KEY_ID','R2_SECRET_ACCESS_KEY','R2_BUCKET_NAME','R2_PUBLIC_BASE_URL'];
const sha = bytes => crypto.createHash('sha256').update(bytes).digest('hex');
const assert = (condition, message) => { if (!condition) throw new Error(message); };
const cacheControl = 'public, max-age=31536000, immutable';

function initConfig() {
  fs.writeFileSync(configPath, names.map(n => `${n}=${n === 'R2_BUCKET_NAME' ? 'quiz-game-art-images' : ''}`).join('\n')+'\n', { mode:0o600, flag:'wx' });
  console.log('Created private .r2.env.local. Fill it locally; never paste credentials into chat.');
}
function readConfig(env = process.env, file = configPath) {
  const local = {};
  if (fs.existsSync(file)) {
    const stat = fs.lstatSync(file);
    assert(stat.isFile() && !stat.isSymbolicLink() && (stat.mode & 0o077) === 0, 'R2 secret file must be a regular private file (chmod 600)');
    for (const line of fs.readFileSync(file,'utf8').split(/\r?\n/)) {
      if (!line.trim() || line.trim().startsWith('#')) continue;
      const match = line.match(/^([A-Z][A-Z0-9_]+)=(.*)$/);
      assert(match && names.includes(match[1]) && !(match[1] in local), 'Invalid or duplicate R2 configuration name');
      // Literal values only. No shell evaluation, interpolation or sourcing.
      local[match[1]] = match[2].trim().replace(/^(["'])(.*)\1$/, '$2');
    }
  }
  const values = Object.fromEntries(names.map(n => [n, env[n] || local[n]]));
  const missing = names.filter(n => !values[n]);
  assert(!missing.length, `Missing configuration: ${missing.join(', ')}. Fill .r2.env.local locally or use offline environment variables.`);
  assert(/^[a-f0-9]{32}$/i.test(values.R2_ACCOUNT_ID), 'Invalid R2_ACCOUNT_ID');
  assert(/^[A-Za-z0-9]+$/.test(values.R2_ACCESS_KEY_ID) && /^[A-Za-z0-9/+_=.-]+$/.test(values.R2_SECRET_ACCESS_KEY), 'Invalid R2 credential format');
  assert(/^[a-z0-9][a-z0-9-]{1,61}[a-z0-9]$/.test(values.R2_BUCKET_NAME), 'Invalid R2_BUCKET_NAME');
  let url;
  try { url = new URL(values.R2_PUBLIC_BASE_URL); } catch { throw new Error('Invalid R2_PUBLIC_BASE_URL'); }
  assert(url.protocol === 'https:' && /^pub-[a-f0-9]+\.r2\.dev$/.test(url.hostname) && !url.port && !url.username && !url.password &&
    !url.search && !url.hash && url.pathname === '/', 'Development delivery requires the exact HTTPS pub-*.r2.dev bucket origin');
  return { accountId:values.R2_ACCOUNT_ID, accessKeyId:values.R2_ACCESS_KEY_ID, secretAccessKey:values.R2_SECRET_ACCESS_KEY,
    bucket:values.R2_BUCKET_NAME, publicBase:url.origin };
}

// Narrow AWS Signature V4 client: region auto, service s3, fixed bucket paths,
// no presigned URLs, ACL changes, listing, deletes or arbitrary endpoints.
function signRequest({ method, url, headers = {}, body = Buffer.alloc(0), config, now = new Date(), region = 'auto' }) {
  const date = now.toISOString().replace(/[:-]|\.\d{3}/g,''), day = date.slice(0,8);
  const signed = Object.fromEntries(Object.entries(headers).map(([k,v]) => [k.toLowerCase(),String(v).trim().replace(/\s+/g,' ')]));
  signed.host = url.host; signed['x-amz-date'] = date; signed['x-amz-content-sha256'] = sha(body);
  const keys = Object.keys(signed).sort(), headerNames = keys.join(';');
  assert(!url.search && !url.hash, 'S3 signing does not permit query operations');
  const canonical = [method,url.pathname,'',keys.map(k=>`${k}:${signed[k]}\n`).join(''),headerNames,sha(body)].join('\n');
  const scope = `${day}/${region}/s3/aws4_request`;
  const stringToSign = ['AWS4-HMAC-SHA256',date,scope,sha(canonical)].join('\n');
  const hmac = (key,value) => crypto.createHmac('sha256',key).update(value).digest();
  const key = hmac(hmac(hmac(hmac(`AWS4${config.secretAccessKey}`,day),region),'s3'),'aws4_request');
  const signature = crypto.createHmac('sha256',key).update(stringToSign).digest('hex');
  signed.authorization = `AWS4-HMAC-SHA256 Credential=${config.accessKeyId}/${scope}, SignedHeaders=${headerNames}, Signature=${signature}`;
  return signed;
}
function objectUrl(config, key) {
  assert(/^art\/v1\/[a-z0-9-]+\/[a-f0-9]{64}\.jpg$/.test(key), 'Invalid immutable object key');
  return new URL(`https://${config.accountId}.r2.cloudflarestorage.com/${config.bucket}/${key}`);
}
function request(url, method, headers = {}, body) {
  return new Promise((resolve,reject) => {
    // https.request does not follow redirects: credentials never cross hosts.
    const req = https.request(url,{method,headers},res => {
      const chunks = []; let size = 0;
      res.on('data',chunk => { size += chunk.length; if (size > 600000) { res.destroy(); reject(new Error('Oversized R2 response')); } else chunks.push(chunk); });
      res.on('end',()=>resolve({status:res.statusCode,headers:res.headers,bytes:Buffer.concat(chunks)}));
      res.on('error',()=>reject(new Error('R2 response interrupted')));
    });
    // Absolute timeout also bounds a server that continually sends tiny chunks.
    const timer = setTimeout(()=>req.destroy(new Error('R2 request timed out')),20000);
    req.on('close',()=>clearTimeout(timer));
    req.on('error',()=>reject(new Error('R2 network request failed or timed out')));
    req.end(body);
  });
}
function s3(config, key, method, headers = {}, body, transport = request) {
  assert(['GET','HEAD','PUT'].includes(method), 'Unsupported R2 operation');
  const url = objectUrl(config,key);
  return transport(url,method,signRequest({url,method,headers,body,config}),body);
}
function verifyResponse(response, item, channel) {
  assert(response.status === 200, `${channel} delivery failed (HTTP ${response.status}) for ${item.imageId}`);
  assert(String(response.headers['content-type']).split(';')[0].trim() === 'image/jpeg', `${channel} MIME mismatch for ${item.imageId}`);
  assert(response.bytes.length === item.bytes.length && sha(response.bytes) === item.sha256, `${channel} checksum mismatch for ${item.imageId}`);
}
async function uploadOne(config, item, transport = request) {
  const head = await s3(config,item.key,'HEAD',{},undefined,transport);
  if (head.status === 404) {
    const result = await s3(config,item.key,'PUT',{
      'if-none-match':'*', 'content-type':'image/jpeg', 'cache-control':cacheControl,
      'content-md5':crypto.createHash('md5').update(item.bytes).digest('base64'),
      'x-amz-meta-sha256':item.sha256,
    },item.bytes,transport);
    assert([200,201,409,412].includes(result.status), `R2 upload failed (HTTP ${result.status}) for ${item.imageId}`);
    // 409/412: another writer won. Verify bytes; never retry an unconditional PUT.
  } else assert(head.status === 200, `R2 authentication/object inspection failed (HTTP ${head.status}) for ${item.imageId}`);
  const stored = await s3(config,item.key,'GET',{},undefined,transport);
  verifyResponse(stored,item,'Authenticated R2');
  assert(stored.headers['cache-control'] === cacheControl, `R2 cache metadata mismatch for ${item.imageId}`);
  const delivered = await transport(new URL(item.publicUrl),'GET');
  verifyResponse(delivered,item,'Public HTTPS');
  return { imageId:item.imageId, hostedUrl:item.publicUrl, storageKey:item.key, sha256:item.sha256,
    width:item.asset.staged.width,height:item.asset.staged.height,mimeType:'image/jpeg' };
}
async function prepare(datasets, config) {
  const assets = pipeline.validate(datasets);
  const { activeRegisteredConcepts } = require('../src/quizEngine/contentSnapshot.ts');
  const known = new Map(activeRegisteredConcepts().map(c=>[c.id,c]));
  for (const { data } of datasets) for (const b of data.bindings) assert(known.get(b.conceptId)?.semantic?.value?.id === b.candidateIdentity &&
    b.recognition?.answerId === b.candidateIdentity && b.recognition.answerLeakageReviewed === true, 'Recognition binding identity/review incomplete');
  const items = [];
  for (const asset of [...assets.values()].sort((a,b)=>a.imageId.localeCompare(b.imageId))) {
    assert(asset.staged && asset.stagingApproval && asset.reviewStatus !== 'rejected' && asset.reviewStatus !== 'pending', 'Only reviewed staging images can be uploaded');
    await pipeline.checkBytes(asset);
    const key = `art/v1/${asset.imageId}/${asset.staged.sha256}.jpg`;
    items.push({imageId:asset.imageId,asset,key,sha256:asset.staged.sha256,bytes:fs.readFileSync(path.join(root,asset.staged.path)),publicUrl:`${config.publicBase}/${key}`});
  }
  assert(items.length > 0, 'No eligible staging images');
  return items;
}
function developmentRegistry(datasets, hosted, host, now) {
  const byId = new Map(hosted.map(h=>[h.imageId,h]));
  const review = {reviewStatus:'approved',reviewedBy:'Development upload: staging review plus authenticated and public byte verification',reviewedAt:now};
  const copies = datasets.map(({data})=>({...data,
    assets:data.assets.map(a=>{ assert(byId.has(a.imageId),'Incomplete hosted receipt'); return {...a,...review,hosted:byId.get(a.imageId)}; }),
    bindings:data.bindings.map(b=>({...b,...review})),
  }));
  const { createRuntimeRegistry } = require('../src/images/createRuntimeRegistry.ts');
  return createRuntimeRegistry(copies,[host]);
}
async function main() {
  const mode = process.argv[2];
  if (mode === '--init-config') return initConfig();
  assert(['--dry-run','--upload'].includes(mode) && process.argv.length === 3, 'Use --init-config, --dry-run or --upload');
  const config = readConfig();
  const datasets = pipeline.load();
  const items = await prepare(datasets,config);
  // Fingerprint excludes secret values. A changed bucket/origin/content requires another dry run.
  const plan = {bucket:config.bucket,publicBase:config.publicBase,assets:items.map(i=>({imageId:i.imageId,key:i.key,sha256:i.sha256,bytes:i.bytes.length,publicUrl:i.publicUrl}))};
  const fingerprint = sha(JSON.stringify(plan)+config.accountId);
  fs.mkdirSync(receiptDir,{recursive:true,mode:0o700});
  const dryPath = path.join(receiptDir,'dry-run.json');
  if (mode === '--dry-run') {
    fs.writeFileSync(dryPath,JSON.stringify({fingerprint,plan},null,2)+'\n',{mode:0o600});
    console.log(JSON.stringify({mode:'dry-run',...plan,networkRequests:0},null,2));
    return;
  }
  assert(fs.existsSync(dryPath) && JSON.parse(fs.readFileSync(dryPath,'utf8')).fingerprint === fingerprint,'Run a matching --dry-run before uploading');
  const hosted = [];
  for (const item of items) {
    hosted.push(await uploadOne(config,item));
    console.log(`Verified ${item.imageId}: ${item.publicUrl}`);
  }
  const now = new Date().toISOString();
  const registry = developmentRegistry(datasets,hosted,new URL(config.publicBase).hostname,now);
  // Publish only after every object passed both authenticated and public GET checks.
  const output = path.join(root,'src/images/developmentRegistry.generated.json');
  const temporary = path.join(receiptDir,'verified-registry.json');
  fs.writeFileSync(temporary,JSON.stringify(registry,null,2)+'\n',{mode:0o600});
  fs.renameSync(temporary,output);
  fs.writeFileSync(path.join(receiptDir,'upload.json'),JSON.stringify({fingerprint,verifiedAt:now,hosted},null,2)+'\n',{mode:0o600});
  console.log(`Activated ${hosted.length} DEVELOPMENT bindings only; production registry unchanged.`);
}
module.exports = {readConfig,signRequest,objectUrl,uploadOne,prepare,developmentRegistry,verifyResponse};
if (require.main === module) main().catch(error=>{ console.error(error.message); process.exitCode=1; });
