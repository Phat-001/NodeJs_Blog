
const express = require('express');
const router = express.Router();

const coursesController = require('../app/controllers/CoursesController');

router.get('/courses', coursesController.showAllCourses)

module.exports = router;
