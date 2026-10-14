const fs = require('node:fs');
const path = require('node:path');
const { getDefaultConfig } = require('expo/metro-config');
const { resolveEntryPoint } = require('@expo/config/paths');

const config = getDefaultConfig(__dirname);
const modulesPath = path.join(__dirname, 'node_modules');
const realModulesPath = fs.realpathSync(modulesPath);
if (realModulesPath !== modulesPath) {
  // Git worktrees may reuse an existing installation through a node_modules
  // symlink. Metro needs its real target watched, and the native virtual entry
  // must stay inside the project URL namespace rather than escaping via ../.
  config.watchFolders = [...new Set([...config.watchFolders, realModulesPath])];
  const rewrite = config.server.rewriteRequestUrl;
  config.server.rewriteRequestUrl = url => {
    const result = rewrite(url);
    if (!url.includes('/.expo/.virtual-metro-entry.bundle?')) return result;
    const parsed = new URL(result, 'http://localhost');
    const entry = resolveEntryPoint(__dirname, { platform: parsed.searchParams.get('platform') ?? 'ios' });
    const relative = path.relative(realModulesPath, fs.realpathSync(entry));
    if (relative.startsWith('..') || path.isAbsolute(relative)) return result;
    parsed.pathname = '/node_modules/' + relative.replace(/\\/g, '/').replace(/\.[tj]sx?$/, '') + '.bundle';
    return url.startsWith('/') ? parsed.pathname + parsed.search : parsed.toString();
  };
}
module.exports = config;
