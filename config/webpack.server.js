const path = require('path');
const webpackNodeExternals = require('webpack-node-externals');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

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
  // for nodeJS, rather than for the browser
  target: 'node',

  // Tell webpack the root file of our
  // server application
  entry: './src/server/index.js',

  // Tell webpack where to put the output file
  // that is generated
  output: {
    filename: 'server.bundle.js',
    path: path.resolve(__dirname, '..', 'dist'),
    publicPath: '/',
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
        test: /\.(html)$/,
        loader: 'html-loader',
      },
      {
        test: /\.(svg)$/,
        loader: 'file-loader',
        options: {
          name: '/[name].[ext]',
          outputPath: 'public',
        },
      },
      {
        test: /\.(css)$/,
        include: path.join(__dirname, '..', 'src', 'client'),
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.(css)$/,
        include: path.join(__dirname, '..', 'src', 'components'),
        use: [
          MiniCssExtractPlugin.loader,
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

  plugins: [
    new MiniCssExtractPlugin({
      filename: 'public/[name].css',
    }),
  ],

  // Tell webpack not to bundle any libraries that exist in the 'node_modules' folder
  // into the server bundle
  externals: [webpackNodeExternals()],
};
