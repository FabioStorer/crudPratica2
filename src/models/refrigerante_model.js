const db = require('../db.js');

const Schema = db.Schema;

const refrigeranteSchema = new Schema({
    porcentagem_suco: {
        type: Number,
        required: true
    },
    kcal200Ml: {
        type: Number,
        required: true
    },
    sabor: {
        type: String,
        required: true
    },
    tamanhoMl: {
        type: String,
        required: true
    }
});

const Refrigerante = db.model('Refrigerante', refrigeranteSchema);

module.exports = Refrigerante;