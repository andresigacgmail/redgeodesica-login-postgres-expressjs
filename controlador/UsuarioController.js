const usuarioService = require('./../servicio/UsuarioService');



const listaUsuarios = async (req, res) => {
    res.status(200).json(await usuarioService.obtenerUsuarios());
}

const registrarUsuario = async (req, res) => {
    res.status(201).json(await usuarioService.guardarUsuarios(req.body));
}

module.exports = {
    listaUsuarios, registrarUsuario
}