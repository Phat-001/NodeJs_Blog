const mongoose = require('mongoose');

async function connect() {
     mongoose.connect('mongodb://localhost:27017/university', {
          useNewUrlParser: true,
          useUnifiedTopology: true,
     }).then(() => {
          console.log('Connected to database!');
     }).catch((error) => {
          console.log('Error connecting to database: ', error.message);
     });
}

module.exports = {connect};