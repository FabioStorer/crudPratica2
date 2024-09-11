const express = require('express');
const aeroporto_controller = require('../controllers/aeroporto_controller.js');
const endereco = require('../middlewares/cep_endereco.js');
const route = express.Router();

route.post('/', endereco, aeroporto_controller.store);
route.get('/', endereco, aeroporto_controller.index);
route.get('/:id', endereco, aeroporto_controller.show);
route.put('/:id', endereco, aeroporto_controller.update);
route.delete('/:id', endereco, aeroporto_controller.destroy);

module.exports = route;