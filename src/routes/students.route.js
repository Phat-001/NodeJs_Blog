const express = require('express');
const router = express.Router();

const studentController = require('../app/controllers/StudentController');

router.get('/create', studentController.createStudent)
router.post('/store', studentController.store)
router.get('/:slug', studentController.detail)
router.get('/:id/edit', studentController.editStudent)
router.put('/:id/', studentController.updateStudent)
router.delete('/:id/', studentController.deleteStudent)
router.get('/', studentController.showAllStudent)

module.exports = router;