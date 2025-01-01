// // metro.config.js
// const path = require('path');
// const { getDefaultConfig } = require('expo/metro-config');
// const withStorybook = require('@storybook/react-native/metro/withStorybook');
// const { withNativeWind } = require('nativewind/metro');

// /** @type {import('expo/metro-config').MetroConfig} */
// const config = getDefaultConfig(__dirname);

// module.exports = withNativeWind(config, { input: './global.css' });

// // module.exports = withStorybook(config, {
// //   // Set to false to remove storybook specific options
// //   // you can also use a env variable to set this
// //   enabled: true,
// //   // Path to your storybook config
// //   configPath: path.resolve(__dirname, './.storybook'),

// //   // Optional websockets configuration
// //   // Starts a websocket server on the specified port and host on metro start
// //   // websockets: {
// //   //   port: 7007,
// //   //   host: 'localhost',
// //   // },
// // });
const { getDefaultConfig } = require('expo/metro-config');
const { withNativeWind } = require('nativewind/metro');

const config = getDefaultConfig(__dirname);

module.exports = withNativeWind(config, { input: './global.css' });
