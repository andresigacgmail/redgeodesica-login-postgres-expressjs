const usuarioService = require('./../servicio/UsuarioService');



const listaUsuarios = async (req, res) => {
    res.status(200).json(usuarioService.getUsuarios());
}

module.exports = {
    listaUsuarios
}