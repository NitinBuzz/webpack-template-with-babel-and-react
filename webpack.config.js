const path = require('path');

module.exports = {
  entry: './app.js',

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'tryout-bundle.js'
  },

  devtool: 'eval-source-map',

  module: {
    rules: [
      {
        loader: 'babel-loader',
        test: /\.js$/,
        exclude: /node_modules/
      }
    ]
  }
};
