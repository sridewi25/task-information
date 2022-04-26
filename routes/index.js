const route = require('express').Router()

route.get('/',(req, res) => {
    res.render('index.ejs')
})

const lecturerRoutes = require('./lecturer')
const subjectRoutes = require('./subject')
const lecturersubjectRoutes = require('./lecturersubject')

route.use('/lecturers',lecturerRoutes)
route.use('/subjects',subjectRoutes)
route.use('/lecturer_subjects',lecturersubjectRoutes)


module.exports = route