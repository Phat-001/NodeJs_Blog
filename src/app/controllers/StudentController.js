const students = require("../../app/models/students");
const { mutipleMongooseToObject } = require("../../utils/mongoose");
const { mongooseToObject } = require("../../utils/mongoose");

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

     //GET /students/create
     createStudent(req, res, next){
          res.render('students/create')
     }

     //POST /students/store
     store(req, res, next){
          const student = new students(req.body);
          student.save()
          .then(()=> res.redirect('/students/'))
          .catch(next);
     }

     //GET /students/:slug
     detail(req, res, next){
          students.findOne({ slug: req.params.slug })
            .then((student) =>
                res.render('students/detail', {
                    student: mongooseToObject(student),
                }),
            )
            .catch(next);
     }

     //GET /:id/edit
     editStudent(req, res, next) {
          students.findById(req.params.id)
          .then(student => 
               res.render('students/edit', {
                    student: mongooseToObject(student),
               })
               )
          .catch(next);
     }

     //PUT students/:id
     updateStudent(req, res, next){
          students.updateOne( {_id: req.params.id}, req.body )
          .then(()=> res.redirect('/students'))
          .catch(next)
     }

     //DELETE students/:id
     deleteStudent(req, res, next){
          students.deleteOne( {_id: req.params.id} )
          .then(() => res.redirect('back'))
          .catch(next) 
     }

     
}

module.exports = new StudentController;