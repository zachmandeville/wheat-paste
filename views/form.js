const html = require('choo/html')

module.exports = form

function form (state, emit) {
  return html`
  <div>
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
// When the form is submitted, prevent the site from refreshing, bundle up the entire form data as a variable, and emit that variable to your store.
  function onsubmit (e) {
    e.preventDefault()
    var form = e.currentTarget
    emit('submitForm', form)
  }
}
