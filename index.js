//outdoor modules
const choo = require('choo')
const html = require('choo/html')
//indoor modules
const main = require('./views/main')
const awesome = require('./views/awesome')
//initialise choo
const app = choo()

if (process.env.NODE_ENV !== 'production'){
  app.use(require('choo-devtools')())
} else {
  app.use(require('choo-service-worker')())
}

app.use(require('./stores/events'))

app.route('/', main)
app.route('/awesome', awesome)
app.mount('div')
