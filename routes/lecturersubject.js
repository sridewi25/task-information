const lecturer_subjectRoute = require('express').Router();
const { lecturersubjectController } = require("../controllers");

lecturer_subjectRoute.get('/',lecturersubjectController.getAll);
lecturer_subjectRoute.post('/create',lecturersubjectController.create);


module.exports = lecturer_subjectRoute