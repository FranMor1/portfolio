const { Schema, model } = require('mongoose')
const projectsSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
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
    tools: {
        type: [String],

    },
    images: {
        type: [String],
        required: true
    },
    links: {
        type: [String],

    },
    technologies: {
        type: [String],

    },
    longDescription: {
        type: String,
        required: true
    }
})

const Projects = model('projects', projectsSchema);

module.exports = Projects;