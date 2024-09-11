const db = require('../db.js');

const Schema = db.Schema;

const canetaSchema = new Schema({
    cor: {
        type: String,
        required: true
    },
    ehBic: {
        type: String,
        required: true
    }
});

const Caneta = db.model('Caneta', canetaSchema);

module.exports = Caneta;