
const SongController = require('./controllers/SongController')
const SingerController = require('./controllers/SingerController')
const command = process.argv

if (command[2] === 'song') {

    if (command[3] === 'add') {
        SongController.add(command[4], command[5], command[6])
    }

    if ( command[3] === 'delete') {
        SongController.delete(command[4])
    }

    if (command[3] === 'firstOrCreate') {
        SongController.firstOrCreate(command[4], command[5], command[6])
    }

   
} else if (command[2] === 'singer') {

    if (command[3] === 'findBy') {
        let params = command[4].split(':')
        SingerController.findBy(params[0], params[1])
    }

    if (command[3] === 'last') {
        if (command[4]) {
            SingerController.last(command[4])
        } else {
            SingerController.last(1)
        }
    }
}