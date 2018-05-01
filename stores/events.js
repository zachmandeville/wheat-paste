module.exports = store

function store(state, emitter){

const event = require('../event.json')
state.event = event

emitter.on('submitForm', function(form){
  console.log('form submitted!')
  console.log({form})
  var archive = new DatArchive(window.location.host)
  var data = new FormData(form)
  var body = {}
  for (var pair of data.entries()) body[pair[0]] = pair[1]
  body = JSON.stringify(body, null, 2)
  console.log({body})
  archive.writeFile('event2.json', body)
  console.log({state})
})

}
