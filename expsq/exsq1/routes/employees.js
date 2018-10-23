const express = require('express')
const router = express.Router()
const {Employee} = require('../models/index')
const helper = require('../helpers/helper')
router.get('/', (req, res) => {
    Employee.findAll()
        .then((employees) => {
            res.render('employees/', {employees: employees,  err: null, helper: helper})
        })
        .catch((err) => {
            res.render('employees/', {employees: employees, err: err})
        })    
})

router.get('/add', (req, res) => {
    res.render('employees/add', {err: null})
})

router.post('/add', (req, res) => {
    Employee.create({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email
    })
    .then(() => {
        res.redirect('/employees')
    })
    .catch((err) => {
        // res.send(err.errors)
        res.render('employees/add', {err: err.errors})
    })
})

router.get('/:id/edit', (req, res) => {
    Employee.findById(req.params.id)
        .then((employee) => {
            res.render('employees/edit', {employee: employee, err: null})
        })
        .catch((err) => {
            res.render('employees/edit', {err: err})
        })
})

router.post('/:id/edit', (req, res) => {
    Employee.update({
        id: req.params.id,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email
    },
    {where: {id: req.params.id}}
    )
    .then(() => {
        res.redirect('/employees')
    })
    .catch((err) => {
        Employee.findById(req.params.id)
        .then((employee) => {
            res.render('employees/edit', {employee: employee, err: err.errors})
        })
        .catch((err) => {
            res.render(err)
        })
    })
})

router.get('/:id/delete', (req, res) => {
    Employee.destroy({where: {id: req.params.id}})
        .then (() => {
            res.redirect('/employees')
        })
        .catch((err) => {
            res.render('employees/', {err: 'failed on delete'})
        })
})
module.exports = router