const webpack = require('webpack')
const glob = require('glob')
const fs = require('fs')

const appPath = fs.realpathSync(process.cwd())

module.exports = {
  entry: {
    index: glob.sync('./app/**/*.js'),
  },
  output: {
    filename: 'index.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/i,
        exclude: [/node_modules/],
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [ 'env' ],
            },
          },
        ],
      },
    ],
  },
}
