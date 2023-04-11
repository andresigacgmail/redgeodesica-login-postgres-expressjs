
const router = require('express').Router();
const usuarioController = require('./../controlador/UsuarioController');

router.get('/usuario', usuarioController.listaUsuarios);


module.exports = {
    router
}

