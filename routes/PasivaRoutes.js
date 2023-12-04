const router = require('express').Router();


const materializacionController = require('./../controlador/MaterializacionController');

router.get('/pasiva/:estacion', materializacionController.accedoPorEstacion);
router.get('/pasiva/ondulacion/:nomenclatura', materializacionController.ondulacionNomenclatura);

router.get('/departamentos', materializacionController.departamentos);
router.get('/municipios', materializacionController.municipios);
router.get('/veredas', materializacionController.veredas);

module.exports = router;

