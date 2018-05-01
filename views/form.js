const html = require('choo/html')

module.exports = form

function form (state, emit) {
  return html`
  <div>
  <h1> hi</h1>
    <form id='eventForm' onsubmit=${onsubmit}>
      <label for='name'>What is the Name of your event?</label>
      <input id='eventName' name='eventName' type='text' placeholder='event name'required pattern='.{1,250}' title="please enter something here.  Anything."/>
      <label for='location'>Where is it Happening?</label>
      <input id='eventLocation' name='eventLocation' type='text' placeholder='event location'required pattern='.{1,250}' title="please enter something here.  Anything."/>
      <label for='event name'>What time does it start?</label>
      <input id='eventStart' name='eventStart' type='text' placeholder='Starting Time'required pattern='.{5,250}' title="please enter something here.  Anything."/>
      <label for='event end'>What time does it end?</label>
      <input id='eventEnd' name='eventEnd' type='text' placeholder='Ending Time'required pattern='.{5,250}' title="please enter something here.  Anything."/>
      <label for='event description'>Tell us about it!</label>
      <input type='text' id='eventDescription' name='eventDescription' placeholder='Description'required pattern='.{5,250}' title="please enter something here.  Anything."/>
      <input type='submit'>
    </form>
  </div>
  `
  function onsubmit (e) {
    e.preventDefault()
    var archive = new DatArchive(window.location.host)
    var form = e.currentTarget
    var data = new FormData(form)
    var headers = new Headers({'Content-Type':'application/json'})
    var body = {}
    for (var pair of data.entries()) body[pair[0]] = pair[1]
    body = JSON.stringify(body)
    console.log(body)
    archive.writeFile('event.json',body)
  }

}

