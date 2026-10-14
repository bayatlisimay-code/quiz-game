import { mkdtempSync, writeFileSync, copyFileSync, mkdirSync, realpathSync, symlinkSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { execFileSync } from 'node:child_process';

test('a real worktree-style dependency symlink preserves native virtual entry URLs and Expo transform options',()=>{
 const fixture=mkdtempSync(join(tmpdir(),'quizgame-metro-worktree-'));
 try {
  writeFileSync(join(fixture,'package.json'),JSON.stringify({name:'metro-worktree-test',main:'expo-router/entry'}));
  copyFileSync('metro.config.js',join(fixture,'metro.config.js'));
  mkdirSync(join(fixture,'app'));symlinkSync(realpathSync('node_modules'),join(fixture,'node_modules'),'dir');
  const script=`const c=require('./metro.config.js');const urls=['ios','android'].map(p=>c.server.rewriteRequestUrl('/.expo/.virtual-metro-entry.bundle?platform='+p+'&dev=true&minify=false'));console.log(JSON.stringify({urls,watch:c.watchFolders,other:c.server.rewriteRequestUrl('/status')}));`;
  const result: {urls:string[];watch:string[];other:string}=JSON.parse(execFileSync(process.execPath,['-e',script],{cwd:fixture,encoding:'utf8'}));
  expect(result.watch).toContain(realpathSync('node_modules'));
  expect(result.other).toBe('/status');
  for(const [index,url] of result.urls.entries()) {
   expect(url).toMatch(/^\/node_modules\/expo-router\/entry\.bundle\?/);
   const parsed=new URL(url,'http://localhost');
   expect(parsed.pathname).not.toContain('..');
   expect(parsed.searchParams.get('platform')).toBe(index===0?'ios':'android');
   expect(parsed.searchParams.get('dev')).toBe('true');
   expect(parsed.searchParams.get('transform.routerRoot')).toBe('app');
   expect(parsed.searchParams.get('transform.engine')).toBe('hermes');
  }
 } finally {rmSync(fixture,{recursive:true,force:true});}
},15000);
