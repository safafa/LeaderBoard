 /* eslint-disable */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  devServer: {
      contentBase: './dist',
      port: '8081',
  },
  plugins: [
   new HtmlWebpackPlugin({
    title: 'Output Management',
    template: './src/index.html'
  }),
 ],
 module: {
     rules: [
         {
             test: /\.css$/i,
             use: ['style-loader','css-loader'],
         },
     ],
 },
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
};
 /* eslint-enable */