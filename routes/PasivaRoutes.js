const router = require('express').Router();


const materializacionController = require('./../controlador/MaterializacionController');

router.get('/pasiva/:estacion', materializacionController.accedoPorEstacion);

module.exports = router;

