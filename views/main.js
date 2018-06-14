const html = require('choo/html')
const created = require('./created')
const form = require('./form')

module.exports = (state, emit) => {
  // if there's no event yet, show the form.  Otherwise, show the event details.
  return (state.party === undefined || state.party.name === ''
    ? showForm(state, emit)
    : showParty(state, emit))

  function showParty (state, emit) {
    return html`
    <div>
    ${created(state, emit)}
    </div>
    `
  }

  function showForm (state, emit) {
    return html`
      <div>
        ${form(state, emit)}
      </div>
    `
  }
}
