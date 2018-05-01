const html = require('choo/html')
const created = require('./created')

module.exports = (state, emit) => {
  return html`
  <div>
  <h1>Sup</h1>
  <h3>${created()}</h3>
  </div>
  `
}
