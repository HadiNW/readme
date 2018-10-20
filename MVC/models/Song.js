const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./data.db');

class Song {

    static add(released, genre, title, callback) {
        let query = `INSERT INTO songs (title, released, genre) values ("${title}", "${released}", "${genre}")`
        db.run(query, function(err) {
            if (err) err
            callback(null, this.lastID)
        })
    }

    static delete (id, callback) {
        db.serialize(() => {

            db.run(`DELETE FROM songs WHERE id = "${id}"`, function(err) {
                if (err) throw err
            })

            db.run(`UPDATE singers SET song_id = ${null} WHERE song_id = "${id}"`, function(err) {
                if (err) throw err
                callback(null, this.changes)
            })
        })        
    }

    static firstOrCreate(released, genre, title, callback) {
        let seach = `SELECT * FROM songs WHERE released = "${released}" AND genre = "${genre}" AND title = "${title}" LIMIT 1`
        db.get(seach, (err, song) => {
            if (err) throw err
            // jika song sudah ada ??
            if (song) {
                callback(null, `Song already exists with ID ${song.id}`)
            } else {
                let query = `INSERT INTO songs (released, genre, title) VALUES ("${released}", "${genre}", "${title}")`
                db.run(query, function(err) {
                    if (err) throw err
                    callback(null, `successfull create song with ID : ${this.lastID}`)
                })
            }
        })
    }


}

module.exports = Song