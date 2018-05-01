module.exports = store

function store(state, emitter){
  state.events = {}

  emitter.on('formSubmitted', function (form) {
    state.events = form
    emitter.emit(console.log(state.events))
  })
}
