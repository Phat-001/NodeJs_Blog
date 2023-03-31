const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const Student = new Schema(
    {
        name: { type: String, required: true },
        age: { type: String },
        math: { type: String },
        physical: { type: String, },
        chemistry: { type: String },
        average: { type: String },
    },
    {
        timestamps: true,
    },
);



module.exports = mongoose.model('Student', Student);