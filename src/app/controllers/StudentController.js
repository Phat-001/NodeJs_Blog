const students = require("../../app/models/students");
const { mutipleMongooseToObject } = require("../../utils/mongoose");

class StudentController{
     //GET /students
     showAllStudent(req, res, next){
          students.find({})
          .then(students => 
                    res.render('students/students', {
                    studentsList: mutipleMongooseToObject(students)
               })
          )
          .catch(next);
     }
     show(req, res){
          res.send('hahaha');
     }
}

module.exports = new StudentController;