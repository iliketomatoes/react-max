const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const CleanWebpackPlugin = require('clean-webpack-plugin');

// TODO minify CSS and JS?
module.exports = merge(common, {
  mode: 'production',
  devtool: 'source-map',
  entry: './src/index.tsx',
  plugins: [
    new CleanWebpackPlugin(['dist'])
  ]
});
