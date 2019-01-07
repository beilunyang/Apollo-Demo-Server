const fs = require('fs')
const path = require('path')
const commonConfig = require('./common')

const NODE_ENV = process.env.NODE_ENV || 'development'
const config = Object.assign(
  {
    NODE_ENV,
  },
  commonConfig,
)
const root = path.join(__dirname, NODE_ENV)

const _config = {}
fs.readdirSync(root).forEach(filename => {
  filename = filename.replace('.js', '')
  _config[filename] = require(path.join(root, filename))
})

module.exports = Object.assign(config, _config)
