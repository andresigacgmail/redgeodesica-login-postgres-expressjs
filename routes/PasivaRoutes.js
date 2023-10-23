const router = require('express').Router();


const materializacionController = require('./../controlador/MaterializacionController');

router.get('/pasiva/:estacion', materializacionController.accedoPorEstacion);
router.get('/pasiva/ondulacion/:nomenclatura', materializacionController.ondulacionNomenclatura);

module.exports = router;

