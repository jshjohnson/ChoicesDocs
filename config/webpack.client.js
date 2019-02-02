const path = require('path');

module.exports = {
  // production || development
  mode: 'production',

  // Inform webpack that we're building a bundle
  // for nodeJS, rather then for the browser
  target: 'web',

  // Tell webpack the root file of our
  // server application
  entry: './src/client/index.js',

  // Tell webpack where to put the output file
  // that is generated
  output: {
    filename: 'client.bundle.js',
    path: path.resolve(__dirname, '..', 'dist', 'public'),
    publicPath: '/dist/public',
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
    ],
  },
};
