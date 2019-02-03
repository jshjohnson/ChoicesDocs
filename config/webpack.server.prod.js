const merge = require('webpack-merge');
const config = require('./webpack.server');

module.exports = merge(config, {
  mode: 'production',
});
