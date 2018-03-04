const path = require('path')

const basePath = () => process.cwd()

const appPath = basePath => () => path.resolve(basePath, 'app/')(basePath())

module.exports = {
  basePath,
  appPath,
}
