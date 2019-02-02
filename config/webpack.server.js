const path = require('path');
const webpackNodeExternals = require('webpack-node-externals');

module.exports = {
  // production || development
  mode: 'production',

  // Inform webpack that we're building a bundle
  // for nodeJS, rather then for the browser
  target: 'node',

  // Tell webpack the root file of our
  // server application
  entry: './src/server/index.js',

  // Tell webpack where to put the output file
  // that is generated
  output: {
    filename: 'server.bundle.js',
    path: path.resolve(__dirname, '..', 'dist'),
    publicPath: '/dist',
  },

  module: {
    rules: [
      {
        test: /\.js?$/,
        loader: 'babel-loader',
        exclude: '/node_modules/',
        options: {
          babelrc: true
        },
      },
      {
        test: /\.(html)$/,
        use: {
          loader: 'html-loader',
        },
      },
    ],
  },

  // Tell webpack not to bundle any libraries that exist in the 'node_modules' folder
  // into the server bundle
  externals: [webpackNodeExternals()],
};
