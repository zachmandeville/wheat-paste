// outdoor modules
const choo = require('choo')

// indoor modules
const main = require('./views/main')

// initialise choo
const app = choo()

// if in dev mode, use choo-devtools, if in production, use the service worker
if (process.env.NODE_ENV !== 'production') {
  app.use(require('choo-devtools')())
} else {
  app.use(require('choo-service-worker')())
}

// set the state of the app using the functions within our stores directory
app.use(require('./stores/party'))

// set the first view someone sees when going onto the site.
app.route('/', main)

// plant that choo seed.
app.mount('div')
