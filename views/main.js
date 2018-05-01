const choo = require('choo')
const html = require('choo/html')
const created = require('./created')
const form = require('./form')

module.exports = (state, emit) => {
  console.log({emit})
  return (state.event.name == '' ? showForm(state, emit) : showEvent(state, emit))

  function showEvent(state){
    return html`
    <div>
    ${created(state)}
    </div>
    `
  }

  function showForm(state, emit){
    console.log({secondEmit: emit})
    return html`
      <div>
        ${form(state, emit)}
      </div>
    `
  }
}
