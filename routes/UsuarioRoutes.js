
const router = require('express').Router();
const usuarioController = require('./../controlador/UsuarioController');

router.get('/usuario', usuarioController.listaUsuarios);
router.post('/usuario', usuarioController.registrarUsuario);
router.get('/usuario/:id', usuarioController.obtenerUsuario);
router.put('/usuario/:id', usuarioController.actualizarUsuario);
router.delete('/usuario/:id', usuarioController.eliminarUsuario);





module.exports = router;

