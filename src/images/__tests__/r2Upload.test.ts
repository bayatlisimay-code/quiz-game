import { createRequire } from 'node:module';
import { createHash } from 'node:crypto';
import { mkdtempSync, writeFileSync, chmodSync, readFileSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { execFileSync } from 'node:child_process';
import type { ImageCurationDataset, ImageAssetRecord } from '../types';
import { productionImageRegistry, selectRuntimeRegistry } from '../selectRuntimeRegistry';

type Config = {accountId:string;accessKeyId:string;secretAccessKey:string;bucket:string;publicBase:string};
type Response = {status:number;headers:Record<string,string>;bytes:Buffer};
type Transport = (url:URL,method:string,headers?:Record<string,string>,body?:Buffer)=>Promise<Response>;
type Item = {imageId:string;key:string;sha256:string;bytes:Buffer;publicUrl:string;asset:ImageAssetRecord};
const uploader: {
  readConfig: (env:Record<string,string>,file:string)=>Config;
  signRequest: (input:{method:string;url:URL;headers?:Record<string,string>;body?:Buffer;config:Config;now:Date;region?:string})=>Record<string,string>;
  objectUrl: (config:Config,key:string)=>URL;
  uploadOne: (config:Config,item:Item,transport:Transport)=>Promise<unknown>;
  prepare: (datasets:readonly {data:ImageCurationDataset}[],config:Config)=>Promise<Item[]>;
  developmentRegistry: (datasets:readonly {data:ImageCurationDataset}[],hosted:readonly unknown[],host:string,now:string)=>typeof productionImageRegistry;
} = createRequire(`${process.cwd()}/package.json`)('./scripts/art-r2-upload.cjs');
// Reserved test identities only; these are not real storage credentials.
const env = {R2_ACCOUNT_ID:'0'.repeat(32),R2_ACCESS_KEY_ID:'testaccess',R2_SECRET_ACCESS_KEY:'testsecret',
  R2_BUCKET_NAME:'quiz-game-art-images',R2_PUBLIC_BASE_URL:'https://pub-00000000000000000000000000000000.r2.dev'};
const config=uploader.readConfig(env,'/tmp/nonexistent-r2-unit-fixture');
const dataset=JSON.parse(readFileSync('data/imageCuration/art/painting.json','utf8')) as ImageCurationDataset;
const asset=dataset.assets[0],bytes=readFileSync(asset.staged!.path),hash=createHash('sha256').update(bytes).digest('hex');
const key=`art/v1/${asset.imageId}/${hash}.jpg`;
const item:Item={imageId:asset.imageId,key,sha256:hash,bytes,asset,publicUrl:`${config.publicBase}/${key}`};
const metadata={'content-type':'image/jpeg','cache-control':'public, max-age=31536000, immutable'};
const response=(status:number,body=Buffer.alloc(0),headers:Record<string,string>={...metadata}):Response=>({status,bytes:body,headers});

test('private local setup is ignored, literal-only, rejects loose permissions and never reports secret values',()=>{
  const dir=mkdtempSync(join(tmpdir(),'quiz-r2-'));const file=join(dir,'r2.env');
  try {
    writeFileSync(file,Object.entries(env).map(([k,v])=>`${k}=${v}`).join('\n'),{mode:0o600});
    expect(uploader.readConfig({},file)).toEqual(config);
    chmodSync(file,0o644);expect(()=>uploader.readConfig({},file)).toThrow('private file');
    chmodSync(file,0o600);writeFileSync(file,'R2_SECRET_ACCESS_KEY=private-fixture-value\n');
    expect(()=>uploader.readConfig({},file)).toThrow('Missing configuration: R2_ACCOUNT_ID');
    expect(()=>uploader.readConfig({},file)).not.toThrow('private-fixture-value');
    writeFileSync(file,'R2_SECRET_ACCESS_KEY=one\nR2_SECRET_ACCESS_KEY=two\n');
    expect(()=>uploader.readConfig(env,file)).toThrow('duplicate');
    expect(execFileSync('git',['check-ignore','.r2.env.local'],{encoding:'utf8'}).trim()).toBe('.r2.env.local');
  } finally {rmSync(dir,{recursive:true,force:true});}
});
test.each(['http://pub-123.r2.dev','https://attacker.example.test','https://user:password@pub-123.r2.dev',
  'https://pub-123.r2.dev/path','https://pub-123.r2.dev?secret=value'])('rejects unsafe development endpoint %s',url=>{
  expect(()=>uploader.readConfig({...env,R2_PUBLIC_BASE_URL:url},'/tmp/nonexistent-r2-unit-fixture')).toThrow();
});
test('AWS published GET signature vector matches, and fixed object URL cannot escape bucket scope',()=>{
  // Official AWS documentation example keys, not operational credentials.
  // https://docs.aws.amazon.com/AmazonS3/latest/developerguide/sig-v4-header-based-auth.html
  const signed=uploader.signRequest({method:'GET',url:new URL('https://examplebucket.s3.amazonaws.com/test.txt'),headers:{range:'bytes=0-9'},
    config:{...config,accessKeyId:'AKIAIOSFODNN7EXAMPLE',secretAccessKey:'wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY'},
    now:new Date('2013-05-24T00:00:00Z'),region:'us-east-1'});
  expect(signed.authorization.split('Signature=')[1]).toBe('f0e8bdb87c964420e857bd35b5d6ed310bd44f0170aba48dd91039c6036bdb41');
  expect(uploader.objectUrl(config,key).pathname).toBe(`/quiz-game-art-images/${key}`);
  expect(()=>uploader.objectUrl(config,'../another-bucket/file.jpg')).toThrow();
});
test('new upload is conditional, carries MIME/cache/integrity metadata and verifies private/public bytes',async()=>{
  const calls:{url:URL;method:string;headers?:Record<string,string>}[]=[];
  const transport:Transport=async(url,method,headers,body)=>{
    calls.push({url,method,headers});
    if(method==='HEAD')return response(404);
    if(method==='PUT'){expect(body).toEqual(bytes);return response(200);}
    return response(200,bytes);
  };
  await expect(uploader.uploadOne(config,item,transport)).resolves.toMatchObject({imageId:item.imageId,hostedUrl:item.publicUrl,sha256:hash});
  expect(calls.map(c=>c.method)).toEqual(['HEAD','PUT','GET','GET']);
  expect(calls[1].headers).toMatchObject({'if-none-match':'*','content-type':'image/jpeg','cache-control':metadata['cache-control'],'x-amz-meta-sha256':hash});
  expect(calls[1].headers?.authorization).toContain('/auto/s3/aws4_request');
  expect(calls[3].headers).toBeUndefined(); // Public delivery has no Authorization.
});
test('existing object is verified without any PUT and conflicting bytes are never overwritten',async()=>{
  const calls:string[]=[];
  await uploader.uploadOne(config,item,async(_url,method)=>{calls.push(method);return response(200,method==='GET'?bytes:Buffer.alloc(0));});
  expect(calls).toEqual(['HEAD','GET','GET']);
  const conflict:string[]=[];
  await expect(uploader.uploadOne(config,item,async(_url,method)=>{conflict.push(method);return response(200,Buffer.from('different'));})).rejects.toThrow('checksum mismatch');
  expect(conflict).toEqual(['HEAD','GET']);
});
test.each([409,412])('conditional write race %s verifies winning bytes without overwrite retry',async status=>{
  const calls:string[]=[];
  await uploader.uploadOne(config,item,async(_url,method)=>{calls.push(method);return method==='HEAD'?response(404):method==='PUT'?response(status):response(200,bytes);});
  expect(calls).toEqual(['HEAD','PUT','GET','GET']);
});
test.each(['authentication','public-bytes','public-redirect','mime','cache'])('fails closed for %s before activation',async scenario=>{
  const transport:Transport=async(url,method)=>{
    if(scenario==='authentication')return response(403);
    if(method==='HEAD')return response(200);
    if(url.hostname.endsWith('.r2.dev'))return scenario==='public-bytes'?response(200,Buffer.from('bad')):scenario==='public-redirect'?response(302):response(200,bytes);
    return response(200,bytes,{...metadata,...(scenario==='mime'?{'content-type':'text/html'}:scenario==='cache'?{'cache-control':'no-store'}:{})});
  };
  await expect(uploader.uploadOne(config,item,transport)).rejects.toThrow();
});
test('all actual staging assets prepare deterministically; restricted or wrong-version assets fail qualification',async()=>{
  const sculpture=JSON.parse(readFileSync('data/imageCuration/art/sculpture.json','utf8')) as ImageCurationDataset;
  const datasets=[{data:dataset},{data:sculpture}];
  const items=await uploader.prepare(datasets,config);
  expect(items).toHaveLength(8);expect(items.map(i=>i.key)).toEqual((await uploader.prepare(datasets,config)).map(i=>i.key));
  const restricted={...asset,provenance:{...asset.provenance,license:{status:'CC-BY'}}} as unknown as ImageAssetRecord;
  await expect(uploader.prepare([{data:{...dataset,assets:[restricted,...dataset.assets.slice(1)]}}],config)).rejects.toThrow('Unsupported license');
  await expect(uploader.prepare([{data:{...dataset,bindings:[{...dataset.bindings[0],candidateIdentity:'artwork:replica'},...dataset.bindings.slice(1)]}}],config)).rejects.toThrow('Invalid/duplicate binding');
  const hosted=items.map(i=>({imageId:i.imageId,hostedUrl:i.publicUrl,storageKey:i.key,width:i.asset.staged!.width,height:i.asset.staged!.height,sha256:i.sha256,mimeType:'image/jpeg'}));
  const registry=uploader.developmentRegistry(datasets,hosted,new URL(config.publicBase).hostname,'2026-10-14T00:00:00Z');
  expect(Object.keys(registry.bindings)).toHaveLength(8);
  expect(selectRuntimeRegistry(true,registry)).toBe(registry);
  expect(selectRuntimeRegistry(false,registry)).toBe(productionImageRegistry);
  expect(productionImageRegistry.bindings).toEqual({});
  expect(JSON.stringify(registry)).not.toContain(config.secretAccessKey);
  expect(dataset.assets[0].reviewStatus).toBe('needs-review');
});
