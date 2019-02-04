const path = require('path');

module.exports = {
  // production || development
  mode: 'development',

  // Tweak what is outputted to console
  stats: {
    all: false,
    modules: true,
    maxModules: 5,
    errors: true,
    warnings: true,
    moduleTrace: true,
    errorDetails: true,
    chunks: false,
    version: true,
  },

  // Inform webpack that we're building a bundle
  // for a browser, rather than node
  target: 'web',

  // Tell webpack the root file of our
  // server application
  entry: './src/client/index.js',

  // Tell webpack where to put the output file
  // that is generated
  output: {
    filename: 'client.bundle.js',
    chunkFilename: '[name].bundle.js',
    path: path.resolve(__dirname, '..', 'dist', 'public'),
    publicPath: '/public',
  },

  module: {
    rules: [
      {
        test: /\.js?$/,
        loader: 'babel-loader',
        exclude: '/node_modules/',
        options: {
          babelrc: true,
        },
      },
      {
        test: /\.(svg)$/,
        loader: 'file-loader',
        options: {
          name: '/[name].[ext]',
          outputPath: '',
        },
      },
      {
        test: /\.(css)$/,
        include: path.join(__dirname, '..', 'src', 'client'),
        loader: 'css-loader',
      },
      {
        test: /\.(css)$/,
        include: path.join(__dirname, '..', 'src', 'components'),
        use: [
          {
            loader: 'css-loader',
            options: {
              modules: true,
              camelCase: true,
              localIdentName: '[name]__[local]___[hash:base64:5]',
            },
          },
        ],
      },
    ],
  },
};
