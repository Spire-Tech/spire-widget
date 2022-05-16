const path = require('path');
const webpack = require('webpack');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const isProduction = process.env.NODE_ENV === 'production';
module.exports = {
  entry: './src/index.js',
  mode: isProduction ? 'production' : 'development',
  output: {
    library: 'SpireWidget',
    libraryTarget: 'umd',
    libraryExport: 'default',
    path: path.resolve(__dirname, 'dist'),
    filename: `widget${isProduction ? '.min' : ''}.js`,
  },
  resolve: {
    extensions: ['.js'],
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['css-loader', 'postcss-loader'],
      },
      {
        test: /\.svg$/,
        loader: 'svg-inline-loader'
    },
    {
      test: /\.(gif|png|jpe?g)$/i,
      use: [
        'file-loader',
        {
          loader: 'image-webpack-loader',
        },
      ],
    }
    ],
  },
  plugins: [
    isProduction
      ? null
      : new HTMLWebpackPlugin({
          template: path.resolve(__dirname, 'index.html'),
        }),
    isProduction ? null : new webpack.HotModuleReplacementPlugin(),
    // removes the null conditional entries
  ].filter(Boolean),
};