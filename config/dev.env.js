var merge = require('webpack-merge')
var prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  proxyTable: {
  	'/youwutuphp/youwutu/': {target: 'http://10.2.153.97', changeOrigin: true},
  	'/rightbe/api/': {target: 'http://www.daydayrise.net', changeOrigin: true}
  }
})
