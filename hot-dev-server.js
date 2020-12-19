const makeUnnamedDevelopmentServer = require('../hot-dev-server')

makeUnnamedDevelopmentServer({
  site: 'first',
  port: 8000,
  replaceAssets: {
    'https://unpkg.com/skeleton-css@2.0.4/css/skeleton.css': 'http://localhost:8001/skeleton.js'
  }
})

