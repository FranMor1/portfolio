const Projects = require('../models/projects.model');

const getAll = async (req, res, next) => {
    try {
        const projects = await Projects.find().sort({ date: 1 });
        res.json(projects);
    } catch (error) {
        next(error)
    }
}

const getById = async (req, res, next) => {
    const { id } = req.params
    try {
        const projects = await Projects.findById(id);
        res.json(projects);

    } catch (error) {
        next(error)
    }
}

const create = async (req, res, next) => {
    try {
        const project = await Projects.create(req.body)
        project.save();
        res.json(project);
    } catch (error) {
        next(error)
    }
}

module.exports = {
    getAll, getById, create
};