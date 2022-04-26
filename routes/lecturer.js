const lecturerRoute = require('express').Router();
const { lecturerController } = require("../controllers");

lecturerRoute.get('/',lecturerController.getAllLecturer);
lecturerRoute.get('/task_student',lecturerController.getAllLecturerStudent);
lecturerRoute.post('/create',lecturerController.createLecturer);
lecturerRoute.get('/create',lecturerController.createLecturerPage);
lecturerRoute.get('/delete/:id',lecturerController.deleteLecturer);
lecturerRoute.post('/update/:id',lecturerController.updateLecturer);
lecturerRoute.get('/update/:id',lecturerController.updateLecturerPage);
lecturerRoute.get('/:id/subjects', lecturerController.getLecturerSubject);
lecturerRoute.post('/:id/subjects/create',lecturerController.createSubjects);
lecturerRoute.get('/:id/subjects/create',lecturerController.createSubjectsPage);




module.exports = lecturerRoute