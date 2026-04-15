const path = require('path');
const { getConfig } = require('react-native-builder-bob/babel-config');
const pkg = require('../package.json');

const root = path.resolve(__dirname, '..');

module.exports = function (api) {
  api.cache(true);

  const defaultConfig = {
    presets: ['babel-preset-expo'],
    plugins: [
      'react-native-worklets/plugin',
      ['react-native-unistyles/plugin', { root: path.resolve(__dirname, 'src') }],
    ],
  };

  return getConfig(defaultConfig, { root, pkg });
};
