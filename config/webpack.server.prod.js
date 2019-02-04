const merge = require('webpack-merge');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const TerserPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

const config = require('./webpack.server');

module.exports = merge(config, {
  mode: 'production',
  plugins: [
    new BundleAnalyzerPlugin({
      analyzerMode: 'static',
      reportFilename: '../reports/server.html',
    }),
  ],
  optimization: {
    minimizer: [
      new TerserPlugin({
        sourceMap: true,
      }),
      new OptimizeCSSAssetsPlugin({}),
    ],
  },
});
