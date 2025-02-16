const { Schema, model } = require('mongoose')
const studiesSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    school: {
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
    }
})

const Studies = model('studies', studiesSchema);

module.exports = Studies;