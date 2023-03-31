const students = require('./students.route');
const courses = require('./courses');

function routes(app){
     app.use('/students', students);
     app.use('/courses', courses);
}

module.exports = routes;