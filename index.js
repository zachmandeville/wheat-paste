//outdoor modules
const choo = require('choo')
const html = require('choo/html')
//indoor modules
const main = require('./views/main')
const form = require('./views/form')

const created = require('./views/created')
//initialise choo
const app = choo()

//if in dev mode, use choo-devtools, if in production, use the service worker
if (process.env.NODE_ENV !== 'production'){
  app.use(require('choo-devtools')())
} else {
  app.use(require('choo-service-worker')())
}

//set the state of the app using the functions within stores/events
app.use(require('./stores/events'))

//use views/main when people go to root site
app.route('/', main)

//plant that choo seed
app.mount('div')
