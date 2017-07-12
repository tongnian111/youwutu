var merge = require('webpack-merge')
var prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  proxyTable: {
  	'/youwutu/': {target: 'http://10.2.153.97/youwutuphp', changeOrigin: true},
  	'/rightbe/api/': {target: 'http://www.daydayrise.net', changeOrigin: true},
  	'/api/': {target: 'http://10.2.153.227/h51701/public', changeOrigin: true}
  }
})
