const express = require('express')
const router = express.Router()
const {Task, Employee} = require('../models/index')

router.get('/', (req, res) => {
    let limit = 4
    let page = req.query.page   
    if (!req.query.page) {
        page = 1
    }
    
    let offset = (page * limit) - limit 
    Task.findAndCountAll({include: [Employee], limit: limit, offset:offset})
        .then((tasks) => {       
            let of = Math.ceil(1.000000001)    
            console.log(of, tasks.count)
            res.render('tasks/', {tasks: tasks.rows, page: page, offset: of})
        })
        .catch((err) => {
            res.send(err)
        })
})

router.get('/add', (req, res) => {
    Employee.findAll({
        order: [
            ['firstName', 'ASC']
        ]
    })
        .then((employees) => {
            res.render('tasks/add', {employees: employees ,err: null})
        })
        .catch((err) => {
            res.send(err)
        }) 
})

router.post('/add', (req, res) => {
    Task.create({
        title: req.body.title,
        description: req.body.description,
        points: req.body.points,
        EmployeeId: req.body.employee
    })
    .then(() => {
        res.redirect('/tasks')
    })
    .then((err) => {
        res.send(err)
    })
})

router.get('/:id/complete', (req, res) => {
    Task.update({
        isComplete: true
    },
    {
        where: {id: req.params.id},  individualHooks: true
    },)
    .then(() => {
        res.redirect('/tasks')
    })
    .catch(err => {
        res.send(err)
    })
})

router.get('/:id/delete', (req, res) => {
    Task.destroy({where : {id: req.params.id}})
        .then(() => {
            res.redirect('/tasks')
        })
        .catch(err => {
            res.send(err)
        })
})

module.exports = router