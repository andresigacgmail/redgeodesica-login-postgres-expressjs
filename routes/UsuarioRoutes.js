
const router = require('express').Router();
const validarToken = require('./../middleware/ValidateToken');

const usuarioController = require('./../controlador/UsuarioController');
const ciudadController = require('./../controlador/CiudadController');

router.get('/usuario', validarToken, usuarioController.listaUsuarios);
router.post('/usuario', usuarioController.registrarUsuario);
router.get('/usuario/:id', usuarioController.obtenerUsuario);
router.put('/usuario/:id', validarToken, usuarioController.actualizarUsuario);
router.delete('/usuario/:id', validarToken, usuarioController.eliminarUsuario);

router.post('/login', usuarioController.login);
router.post('/logout',  usuarioController.logout);
router.post('/recuperarPassword', usuarioController.recuperarPassword);
router.post('/reestablecerPassword',validarToken, usuarioController.reestablecerPassword);



router.get('/ciudad', ciudadController.consultaCiudadPorCoordenadas);





module.exports = router;

