/* Ruteo del home */
const express = require('express');
const router = express.Router(); /* Router permiete crear rutas montables y desmontables */

/* el metodo HTTP es llamado desde Router */

const home_controller = require('../controllers/home_controller.js');

/* rutas con controladores */
router.get('/', home_controller.index);
router.get('/home', home_controller.index);




module.exports = router;