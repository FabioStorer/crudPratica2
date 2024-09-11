const Refrigerante = require('../models/refrigerante_model.js');

const store = async (req, res) => {
    try {
        await Refrigerante.create(req.body);
        res.json();
    } catch (error) {
        res.status(400).json(error);
    }
};

const index = async (req, res) => {
    try {
        const content = await Refrigerante.findById(req.query).exec();
        res.json(content);
    } catch {
        res.status(400).json(error);
    }
};

const show = async (req, res) => {
    try {
        const content = await Refrigerante.findById(req.params.id).exec();
        res.json(content);
    } catch (error) {
        res.status(400).json(error);
    }
};

const update = async (req, res) => {
    try {
        await Refrigerante.findByIdAndUpdate(req.params.id, req.body).exec();
        res.json();
    } catch {
        res.status(400).json(error);
    }
};

const destroy = async (req, res) => {
    try {
        await Refrigerante.findByIdAndDelete(req.params.id).exec();
        res.json();
    } catch (error) {
        res.status(400).json(error);
    }
};

module.exports = {
    store,
    index,
    show,
    update,
    destroy
};