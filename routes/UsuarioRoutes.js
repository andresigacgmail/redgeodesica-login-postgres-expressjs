
const router = require('express').Router();
const usuarioController = require('./../controlador/UsuarioController');
const ciudadController = require('./../controlador/CiudadController');

router.get('/usuario', usuarioController.listaUsuarios);
router.post('/usuario', usuarioController.registrarUsuario);
router.get('/usuario/:id', usuarioController.obtenerUsuario);
router.put('/usuario/:id', usuarioController.actualizarUsuario);
router.delete('/usuario/:id', usuarioController.eliminarUsuario);

router.post('/login', usuarioController.login);


router.get('/ciudad', ciudadController.consultaCiudadPorCoordenadas);





module.exports = router;

