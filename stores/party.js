var _ = require('lodash')

module.exports = store

var archive = new DatArchive(window.location.host)

function store (state, emitter) {
  // populate the state of the app with the values in  your event.json file.
  emitter.on('DOMContentLoaded', function () {
    renderPartyDetails(state, emitter)
  })

  emitter.on('submitForm', function (form) {
    var body = getFormData(form)
    var string = JSON.stringify(body, null, 2)
    archive.writeFile('party.json', string)
    // .then( () => archive.readFile('party.json'))
      .then(() => {
        state.party = body
        emitter.emit('replaceState')
      })
      .catch((err) => {
        console.log('oh fuck', err)
      })
  })
  emitter.on('party!', function () {
    renderImages()
  })
}
function getFormData (form) {
  var formData = new FormData(form)
  var data = {}
  for (var pair of formData.entries()) {
    console.log({pair})
    data[pair[0]] = pair[1]
  }
  return data
}

function renderPartyDetails (state, emitter) {
  archive.readFile('party.json')
    .then((party) => {
      state.party = JSON.parse(party)
      emitter.emit('render')
    })
}

function renderImages () {
  renderImage('cover-image')
  renderImage('background-image')
}

function renderImage (section) {
  archive.readdir(`assets/${section}`)
    .then(dir => {
      var imageFile = dir[0]
      dir.length > 0 && isImage(imageFile)
        ? assignImage(imageFile, section)
        : console.log(`no files for ${section}`)
    })
}

function isImage (file) {
  var imageExtensions = ['jpg', 'png', 'gif']
  var fileExtension = file.split('.').pop()
  return _.findIndex(imageExtensions, fileExtension)
}

function assignImage (image, section) {
  var imagePath = `assets/${section}/${image}`
  if (section === 'cover-image') {
    var imageTag = document.getElementById(section)
    imageTag.src = imagePath
  } else {
    console.log({imagePath})
    document.body.style.backgroundImage = `url(${imagePath})`
  }
}
