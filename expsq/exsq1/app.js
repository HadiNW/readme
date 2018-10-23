const express = require('express')
const app = express()

const helper = require('./helpers/helper')
// app.locals.helper = helper
const employeesRoutes = require('./routes/employees')
const indexRoutes = require('./routes/index')
const taskRoutes = require('./routes/tasks')


app.set('view engine', 'ejs')
app.use(express.urlencoded({extended: false}))

app.use('/employees', employeesRoutes)
app.use('/tasks', taskRoutes)







const port = 8100   
app.listen(port, () => {
    console.log(`server started on port ${port}`)
})