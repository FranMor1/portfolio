const Experience = require('../models/experience.model');

const getAll = async (req, res, next) => {
    try {
        const experiencia = await Experience.find().sort({ date: 1 });
        res.json(experiencia);
    } catch (error) {
        next(error)
    }
}

const getById = async (req, res, next) => {
    const { id } = req.params
    try {
        const experiencia = await Experience.findById(id);
        res.json(experiencia);

    } catch (error) {
        next(error)
    }
}

const create = async (req, res, next) => {
    try {
        const experience = await Experience.create(req.body)
        studies.save();
        res.json(experience);
    } catch (error) {
        next(error)
    }
}

module.exports = {
    getAll, getById, create
};