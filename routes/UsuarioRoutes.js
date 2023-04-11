
const router = require('express').Router();
const usuarioController = require('./../controlador/UsuarioController');

router.get('/usuario', usuarioController.listaUsuarios);
router.post('/usuario', usuarioController.registrarUsuario);





module.exports = router;

