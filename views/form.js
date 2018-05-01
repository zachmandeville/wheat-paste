const choo = require('choo')
const html = require('choo/html')

module.exports = form

function form (state, emit) {
  console.log({thirdEmit: emit})
  return html`
  <div>
  <h1> hi</h1>
    <form id='eventForm' onsubmit=${onsubmit}>
      <label for='name'>What is the Name of your event?</label>
      <input id='name' name='name' type='text' placeholder='event name'required pattern='.{1,250}' title="please enter something here.  Anything."/>
      <label for='location'>Where is it Happening?</label>
      <input id='eventLocation' name='eventLocation' type='text' placeholder='event location'required pattern='.{1,250}' title="please enter something here.  Anything."/>
      <label for='date'>When is it Happening?</label>
      <input id='date' name='date' type='text' placeholder='event location'required pattern='.{1,250}' title="please enter something here.  Anything."/>
      <label for='start time'>What time does it start?</label>
      <input id='startTime' name='startTime' type='text' placeholder='Starting Time'required pattern='.{1,250}' title="please enter something here.  Anything."/>
      <label for='end time'>What time does it end?</label>
      <input id='endTime' name='endTime' type='text' placeholder='Ending Time'required pattern='.{1,250}' title="please enter something here.  Anything."/>
      <label for='event description'>Tell us about it!</label>
      <input type='text' id='description' name='description' placeholder='Description'required pattern='.{1,250}' title="please enter something here.  Anything."/>
      <label for='event notes'>Tell us about it!</label>
      <input type='text' id='notes' name='notes' placeholder='notes'required pattern='.{1,250}' title="please enter something here.  Anything."/>
      <input type='submit'>
    </form>
  </div>
  `
  function onsubmit (e) {
    e.preventDefault()
    console.log({fourthEmit: emit})
    var form = e.currentTarget
    emit('submitForm', form)
   
  }
}

