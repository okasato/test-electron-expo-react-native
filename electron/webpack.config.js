const { withExpoWebpack } = require('@expo/electron-adapter');

module.exports = config => {
  console.log("what is config?", config)
  return withExpoWebpack(config);
};
