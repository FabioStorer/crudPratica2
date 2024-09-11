const express = require('express');
const refrigerante_controller = require('../controllers/refrigerante_controller.js');
const route = express.Router();

route.post('/', refrigerante_controller.store);
route.get('/', refrigerante_controller.index);
route.get('/', refrigerante_controller.show);
route.put('/', refrigerante_controller.update);
route.delete('/', refrigerante_controller.destroy);

module.exports = route;