/* Ruteo del home */
const express = require('express');
const router = express.Router(); /* Router permiete crear rutas montables y desmontables */

/* el metodo HTTP es llamado desde Router */

const test_controller = require('../controllers/test_controller.js');

/* rutas con controladores */
router.get('/test', test_controller.show);

module.exports = router;