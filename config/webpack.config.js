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
}
