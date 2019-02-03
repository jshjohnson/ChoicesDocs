const path = require('path');
// const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  // production || development
  mode: 'production',

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
    path: path.resolve(__dirname, '..', 'dist', 'public'),
    publicPath: '/static',
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
