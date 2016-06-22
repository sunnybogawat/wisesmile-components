var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: {
    Awesome: "./src/Awesome"
  },
  module: {
    loaders: [
      { test: /.jsx?$/, loader: 'babel-loader', exclude: /node_modules/ }
    ]
  },
  output: {
    path: __dirname + "/dist",
    filename: "wisesmile-components.js",
    library: 'wisesmile-components',
    libraryTarget: 'umd',
    externals: {
        react: 'react',
        ReactDOM: 'ReactDOM'
    }
  },
};
