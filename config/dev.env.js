var merge = require('webpack-merge')
var prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  proxyTable: {
<<<<<<< HEAD
  	'/youwutu/': {target: 'http://localhost/youwutuphp', changeOrigin: true},
  	'/rightbe/api/': {target: 'http://www.daydayrise.net', changeOrigin: true},
  	'/api/': {target: 'http://localhost/h51701/public', changeOrigin: true}
=======
  	'/youwutu/': {target: 'http://10.2.153.97/youwutuphp', changeOrigin: true},
  	'/rightbe/api/': {target: 'http://www.daydayrise.net', changeOrigin: true}
>>>>>>> b884d8f25bb7767111f55a6ee8463ab4173702f3
  }
})
