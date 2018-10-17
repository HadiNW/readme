const Song = require('../models/Song')
const View = require('../views/view')

class SongController {

    static add (released, genre, title) {
        Song.add(released, genre, title, (err, data) => {
            if (err) throw err
            View.display(`Successfully created a new song with ID: ${data}`)
        })
    }

    static delete (id) {
        Song.delete(id, (err, data) => {
            if (err) throw err
            View.display(`Successfully deleted a song, ${data} singers were updated.`)
        })
    }

    static firstOrCreate(released, genre, title) {
        Song.firstOrCreate(released, genre, title, (err, data) => {
            if (err) throw err
            View.display(data)
        })
    }

    
}

module.exports = SongController