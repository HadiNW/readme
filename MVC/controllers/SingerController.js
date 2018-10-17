const Singer = require('../models/Singer')
const View = require('../views/view')

class SingerController {

    static findBy (field, value) {        
        Singer.findBy(field, value, (err, data) => {
            if (err) throw err
            View.display(data)
        })
    }

    static last (limit) {
        Singer.last(limit, (err, data) => {
            if (err) throw err
            View.display(data)
        })
    }

}

module.exports = SingerController