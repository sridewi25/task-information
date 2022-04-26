const subjectRoute = require('express').Router();
const { subjectController } = require("../controllers");

subjectRoute.get('/',subjectController.getAllSubject);


module.exports = subjectRoute;