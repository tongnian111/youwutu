var merge = require('webpack-merge')
var prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  proxyTable: {
  	'/eleme_thinkPhp/eleme/': {target: 'http://localhost', changeOrigin: true},
  	'/rightbe/api/': {target: 'http://www.daydayrise.net', changeOrigin: true}
  }
})
