
const { mutipleMongooseToObject } = require("../../utils/mongoose");

class StudentController{
     
     showAllBlogs(req, res){
          res.render('blogs/blogsList');
     }
}

module.exports = new StudentController;