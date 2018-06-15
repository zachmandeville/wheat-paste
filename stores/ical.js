var ics = require('ics')

var archive = new DatArchive(window.location.host)

function create () {
  console.log('hi')
  var event = {
    title: 'art~hack',
    description: 'a fun time for all',
    start: [2018, 5, 30, 6, 30]
  }

  ics.createEvent(event, (error, value) => {
    if (error) {
      console.log(error)
    } else {
      archive.writeFile('calendar.ics', value)
    }
  })
}

module.exports = create
