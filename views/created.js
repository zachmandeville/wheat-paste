const choo = require('choo')
const html = require('choo/html')

module.exports = view

function view (state, emit){
  console.log(state)
  return eventListing(state, emit)
  function eventListing(state){
    return html`
      <div>
        <h1 class='name'>${state.event.name}</h1>
        <img class="image" src="https://i.pinimg.com/originals/0e/f4/52/0ef4529efd255cf461396a502c322194.jpg"/>
        <h3 class='location'>${state.event.location}</h3>
        <h3 class='date'>${state.event.date}</h3>
        <div class='time'>Begins: ${state.event.startTime}</div>
        <div class='time'>Ends: ${state.event.endTime}</div>
        <p class='description'>
          ${state.event.description}
        </p>
        <h4 class='notes'>${state.event.notes}</h4>
      </div>
    `
  }
}
