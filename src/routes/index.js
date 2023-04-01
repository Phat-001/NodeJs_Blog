const students = require('./students.route');
const courses = require('./courses');
const blogs = require('./blog.route');

function routes(app){
     app.use('/students', students);
     app.use('/courses', courses);
     app.use('/blogs', blogs);
}

module.exports = routes;