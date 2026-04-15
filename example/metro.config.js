const path = require('path');
const { getDefaultConfig } = require('@expo/metro-config');
const pkg = require('../package.json');

const root = path.resolve(__dirname, '..');
const projectNodeModules = path.resolve(__dirname, 'node_modules');

// Modules that should only be resolved from the example project's node_modules
// to avoid duplicate versions (peer dependencies of the library)
const modules = [
  '@react-native/assets-registry',
  ...Object.keys({ ...pkg.peerDependencies }),
];

/** @type {import('@expo/metro-config').MetroConfig} */
const config = getDefaultConfig(__dirname);

config.watchFolders = [root];
config.resolver.extraNodeModules = modules.reduce((acc, name) => {
  acc[name] = path.join(projectNodeModules, name);
  return acc;
}, {});
config.resolver.nodeModulesPaths = [
  projectNodeModules,
  path.resolve(root, 'node_modules'),
];

module.exports = config;
