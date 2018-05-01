const html = require('choo/html')
const created = require('./created')

module.exports = (state, emit) => {
  return html`
  <div>
  ${created(state)}
  </div>
  `
}
