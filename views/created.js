const html = require('choo/html')

module.exports = view

function view (state, emit) {
  emit('party!')
  return html`
    <div id='main-box' class="h-event vevent">
      <h1 id="name" class="p-name">${state.party.name}</h1>
      <img id="cover-image" src="https://i.pinimg.com/originals/0e/f4/52/0ef4529efd255cf461396a502c322194.jpg"/>
      <p id='date'>${state.party.date}</p>
      <p id='summary' class=" p-summary summary">
      ${state.party.description}
      </p>
      <p id='location' class="p-location location">${state.party.location}</p>
      <p id='time-begins' class="dt-start dtstart">Begins: ${state.party.startTime}</p>
      <p id='time-ends' class="dt-end dtend">Ends: ${state.party.endTime}</p>
      <h2>Additional Details:!</h2>
      <p id='description' class="p-description description">${state.party.notes}</p>
      <a download='party.json' href='party.json' target='blank'>download party</a>
    </div>
  `
}
