const usuarioService = require('./../servicio/UsuarioService');



const listaUsuarios = async (req, res) => {
    res.status(200).json(await usuarioService.obtenerUsuarios());
}

const registrarUsuario = async (req, res) => {
    res.status(201).json(await usuarioService.guardarUsuarios(req.body));
}

const obtenerUsuario = async (req, res) => {
    res.status(200).json(await usuarioService.obtenerUsuario(req.params.id));
}

const actualizarUsuario = async (req, res) => {
    res.status(201).json(await usuarioService.actualizarUsuario(req.body, req.params.id));
}

const eliminarUsuario = async (req, res) => {
    res.status(204).json(await usuarioService.eliminarUsuario(req.params.id));
}

module.exports = {
    listaUsuarios, registrarUsuario, obtenerUsuario, actualizarUsuario, eliminarUsuario
}