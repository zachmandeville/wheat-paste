module.exports = store

function store(state, emitter){

//populate the state of the app with the values in  your event.json file.
const event = require('../event.json')
state.event = event

//when you receive a submitform submission, take the form data, convert it to json, and write it to
//event.json, then set the state of the app with these newly written values.
emitter.on('submitForm', function(form){
  console.log('form submitted!')
  //set the archive to the current url(uri?) of the window we at.  in other words, 'I want archive to be
  //the current dat archive i'm on'.  
  var archive = new DatArchive(window.location.host)
  var data = new FormData(form)
  var body = {}
  //using the choo tutorial to turn form data into json.
  for (var pair of data.entries()) body[pair[0]] = pair[1]
  body = JSON.stringify(body, null, 2)
  //overwrite the file 'event.json' in our archive with this new json
  archive.writeFile('event.json', body)
  //read this newly written file and set it's values to be the new state.
  archive.readFile('event.json').then(file => state.event = file)
  //confirm that state has changed before going further.
  console.log(state)
})

}
