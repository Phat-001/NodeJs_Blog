
class CoursesController{
     //GET /courses
     showAllCourses(req, res, next){
          res.render('students/students');
     }
}

module.exports = new CoursesController;
