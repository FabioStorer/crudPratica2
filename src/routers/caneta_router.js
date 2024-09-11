const express = require('express');
const caneta_controller = require('../controllers/caneta_controller.js');
const route = express.Router();

route.post('/', caneta_controller.store);
route.get('/', caneta_controller.index);
route.get('/:id', caneta_controller.show);
route.put('/:id', caneta_controller.update);
route.delete('/:id', caneta_controller.destroy);

module.exports = route;