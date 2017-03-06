const path = require('path');

module.exports = {

  entry: './app/index.js',

  output: {
    path: './dist',
    filename: 'app.js'
  },

  module: {
    loaders: [{
        test: /\.js$/,
        loader: 'babel-loader',
        query: {presets: ['es2015', 'react']}
    }]
  }

}
