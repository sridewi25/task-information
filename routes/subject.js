const subjectRoute = require('express').Router();
const { subjectController } = require("../controllers");

subjectRoute.get('/',subjectController.getAllSubject);
subjectRoute.post('/create',subjectController.createSubject);
subjectRoute.get('/create',subjectController.createSubjectPage);
subjectRoute.get('/delete/:id',subjectController.deleteSubject);
subjectRoute.post('/update/:id',subjectController.updateSubject);
subjectRoute.get('/update/:id',subjectController.updateSubjectPage);

module.exports = subjectRoute;