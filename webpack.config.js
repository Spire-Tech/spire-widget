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
    extensions: ['*', '.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          {
            loader: 'style-loader',
            options: { injectType: 'singletonStyleTag' }
          },
          {
            // allows import CSS as modules
            loader: 'css-loader',
            options: {
              modules: {
                // css class names format
                localIdentName: '[name]-[local]-[hash:base64:5]'
              },
              sourceMap: !isProduction
            }
          },
          'postcss-loader'
        ]
      },
      {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      },
      {
        test: /\.(gif|png|svg|jpe?g)$/i,
        use: [
          'file-loader',
          {
            loader: 'image-webpack-loader',
          },
        ],
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                ['@babel/preset-env', {
                  'targets': {
                    'browsers': ['IE 11, last 2 versions']
                  },
                  // makes usage of @babel/polyfill because of IE11
                  // there is at least async functions and for..of
                  useBuiltIns: 'usage'
                }],
              ],
              'plugins': [
                // syntax sugar found in React components
                '@babel/proposal-class-properties',
                '@babel/proposal-object-rest-spread',
                ['@babel/plugin-transform-react-jsx', {
                  // we use Preact, which has `Preact.h` instead of `React.createElement`
                  pragma: 'h',
                  pragmaFrag: 'Fragment'
                }]
              ]
            }
          }
        ]
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