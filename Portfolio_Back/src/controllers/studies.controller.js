const Studies = require('../models/studies.model')

const getAll = async (req, res, next) => {
    try {
        const studies = await Studies.find().sort({ date: 1 });
        res.json(studies);
    } catch (error) {
        next(error)
    }
}

const getById = async (req, res, next) => {
    const { id } = req.params
    try {
        const studies = await Studies.findById(id);
        res.json(studies);

    } catch (error) {
        next(error)
    }
}

const create = async (req, res, next) => {
    try {
        const studies = await Studies.create(req.body)
        studies.save();
        res.json(studies);
    } catch (error) {
        next(error)
    }
}

module.exports = {
    getAll, getById, create
};