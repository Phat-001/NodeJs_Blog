const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');

// Add plugins
mongoose.plugin(slug);


const Schema = mongoose.Schema;

const Student = new Schema(
    {
        name: { type: String, required: true },
        age: { type: Date },
        math: { type: Number },
        physical: { type: Number, },
        chemistry: { type: Number },
        average: { type: Number },
        slug: { type: String, slug: ['name','average','_id']},
    },
    {
        timestamps: true,
    },
);



module.exports = mongoose.model('Student', Student);