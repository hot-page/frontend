const makeUnnamedDevelopmentServer = require('../dev-server')

makeUnnamedDevelopmentServer({
  site: 'hot.page',
  port: 8000,
  replaceAssets: {
    'https://hot-page.s3.amazonaws.com/assets/skeleton.css':
      'http://localhost:8001/skeleton.js'
  }
})

