const express = require('express');
const moto_controller = require('../controllers/moto_controller.js');
const route = express.Router();

route.post('/', moto_controller.store);
route.get('/', moto_controller.index);
route.get('/:id', moto_controller.show);
route.put('/:id', moto_controller.update);
route.delete('/:id', moto_controller.destroy);

module.exports = route;