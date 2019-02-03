const merge = require('webpack-merge');
const config = require('./webpack.client');

module.exports = merge(config, {
  mode: 'production',
});
