const choo = require('choo')
const html = require('choo/html')
const created = require('./created')
const form = require('./form')

module.exports = (state, emit) => {
  //if there's no event yet, show the form.  Otherwise, show the event details.
  return (state.event.name == '' ? showForm(state, emit) : showEvent(state, emit))

  function showEvent(state){
    return html`
    <div>
    ${created(state)}
    </div>
    `
  }

  function showForm(state, emit){
    return html`
      <div>
        ${form(state, emit)}
      </div>
    `
  }
}
