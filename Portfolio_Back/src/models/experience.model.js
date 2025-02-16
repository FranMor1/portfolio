const { Schema, model } = require('mongoose')
const experienceSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    company: {
        type: String,
        required: true
    },
    startDate: {
        type: Date,
        required: true
    },
    finishDate: {
        type: Date,
        required: true
    },
    contract: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    tools: {
        type: [String],

    }

})

const Experience = model('experience', experienceSchema);

module.exports = Experience;