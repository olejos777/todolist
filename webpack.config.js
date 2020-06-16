const path = require('path');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const baseConfig = () => ({
  entry: './src/index.js',                                                        // all the files are imported to this file
  output: {                                                                       // localization of production version
    path: path.join(__dirname, 'dist'),
    filename: 'scripts_bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
  ],
});

const devConfig = () => ({
  module: {
    rules: [
      {
        test: /\.(s*)css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            query: {
              modules: true,
              localIdentName: '[name]_[local]_[hash:base64:5]',
            },
          },
          'sass-loader',
        ],
      },
    ],
  },
});

const prodConfig = () => ({
  module: {
    rules: [
      {
        test: /\.(s*)css$/,
        use: [
          MiniCssExtractPlugin.loader,                                                                //This plugin extracts CSS into separate files. It creates a CSS file per JS file which contains CSS. It supports On-Demand-Loading of CSS and SourceMaps.
          {
            loader: 'css-loader',
            query: {
              modules: true,
              localIdentName: '[name]_[local]_[hash:base64:5]',                                       // it configures name of the class for tag/component e.g App_title_2f21O which is built from name of component + name of selector + hash for class to make it unique
            },
          },
          'sass-loader',
        ],
      },
    ],
  },
  plugins: [
    // MiniCssExtractPluginsimplifies creation of HTML files to serve your webpack bundles.
    // This is especially useful for webpack bundles that include a hash in the filename which changes every compilation.
    // You can either let the plugin generate an HTML file for you, supply your own template using lodash templates, or use your own loader.
    new MiniCssExtractPlugin({
      filename: 'styles_bundle_[name].css',
      chunkFilename: '[id].css',
    }),
  ],
});

module.exports = (env, argv) => {
  const modeConfig = argv.mode == 'production' ? prodConfig : devConfig;

  return merge(baseConfig(), modeConfig());
};
