var CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: './',
  },
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        { from: "./src/index.html", to: "./" }
      ],
    })
  ],
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 4200,
  }
};
