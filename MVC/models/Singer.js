var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('./data.db');

class Singer {

    static findBy (field, value, callback) {
        let query = ''        
        if (field === 'name') {
            query = `SELECT * FROM singers WHERE ${field} LIKE "%${value}%"`
        } else {
            query = `SELECT * FROM singers WHERE ${field} = "${value}"`
        }

        db.all(query, (err, singers) => {
            if (err) throw err
            callback(null, singers)
        })
    }

    static last(limit, callback) {
        let query =  `SELECT * FROM singers order by id DESC LIMIT ${limit}`
        db.all(query, (err, singers) => {
            if (err) throw err
            callback(null, singers)
        })
    }

}

module.exports = Singer