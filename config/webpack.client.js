const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  // production || development
  mode: 'development',

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

  optimization: {
    minimizer: [
      new TerserPlugin({
        sourceMap: process.env.NODE_ENV === 'production',
      }),
    ],
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /node_modules/,
          chunks: 'initial',
          name: 'vendor',
          enforce: true,
        },
      },
    },
  },
};
