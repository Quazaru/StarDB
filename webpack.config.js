const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');
const pug = require('pug');
// const cssLoader = require('css-loader');

const isDev = process.env.NODE_ENV === 'development';
const optimize = () => {
  const config = {
    splitChunks: {
      chunks: 'all',
    },
  };
  if (!isDev) {
    config.minimizer = [
      new OptimizeCssAssetsPlugin(),
      new TerserWebpackPlugin(),
    ];
  }
  return config;
};

module.exports = {
  mode: 'development',
  context: path.resolve(__dirname, 'src'),
  entry: ['@babel/polyfill', './js/script.js'],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  optimization: optimize(),

  devServer: {
    port: 3800,
    hot: isDev,
  },
  devtool: isDev ? 'source-map' : '',
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          { loader: 'style-loader' },
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              hmr: isDev,
              reloadAll: true,
            },
          },
          { loader: 'css-loader' },

        ],

      },
      {
        test: /\.s[ac]ss$/,
        use: [
          { loader: 'style-loader' },
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              hmr: isDev,
              reloadAll: true,
            },
          },
          { loader: 'css-loader' },
          { loader: 'sass-loader' },

        ],

      },
      {
        test: /\.mp3$/,
        loader: 'file-loader',
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/,
        loader: 'file-loader',
        options: {
          outputPath: 'img',
        },
      },
      {
        test: /\.(ttf|woff|woff2|txt|otf)$/,
        loader: 'file-loader',
        options: {
          outputPath: 'fonts',
        },
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              '@babel/react',
            ],
          },
        },
      },
      {
        test: /\.pug$/,
        loader: 'pug-loader',
      },

    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './pug/pages/index.pug',
      filename: 'index.html',
    }),

    new CleanWebpackPlugin(),
    new CopyWebpackPlugin([
      { from: 'assets/***/*', to: '' },
    ]),
    new MiniCssExtractPlugin({
      exclude: '/\.map$/',
      filename: '[name].css',
    }),

  ],
};
