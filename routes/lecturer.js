const lecturerRoute = require('express').Router();
const { lecturerController } = require("../controllers");

lecturerRoute.get('/',lecturerController.getAllLecturer);
lecturerRoute.post('/create',lecturerController.createLecturer);
lecturerRoute.get('/create',lecturerController.createLecturerPage);
lecturerRoute.get('/delete/:id',lecturerController.deleteLecturer);
lecturerRoute.post('/update/:id',lecturerController.updateLecturer);
lecturerRoute.get('/update/:id',lecturerController.updateLecturerPage);


module.exports = lecturerRoute