const html = require('choo/html')

module.exports = view

function view (state, emit) {
  return eventListing(state, emit)
}
function eventListing (state, emit) {
  emit('party!')
  return html`
    <div>
      <h1 class='name'>${state.party.name}</h1>
      <img id="cover-image" src="https://i.pinimg.com/originals/0e/f4/52/0ef4529efd255cf461396a502c322194.jpg"/>
      <h3 class='location'>${state.party.location}</h3>
      <h3 class='date'>${state.party.date}</h3>
      <div class='time'>Begins: ${state.party.startTime}</div>
      <div class='time'>Ends: ${state.party.endTime}</div>
      <p class='description'>
      ${state.party.description}
      </p>
      <h4 class='notes'>${state.party.notes}</h4>
    </div>
  `
}
