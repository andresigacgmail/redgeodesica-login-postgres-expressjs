const usuarioService = require('./../servicio/UsuarioService');



const listaUsuarios = async (req, res) => {
    console.log(req.protocol)     // "https"
    console.log(req.hostname)     // "example.com"
    console.log(req.path)         // "/creatures"
    console.log(req.originalUrl)  // "/creatures?filter=sharks"
    console.log(req.subdomains)   // "['ocean']"

    console.log( req.header('Content-Type') ) // "application/json"
    console.log( req.header('user-agent') )    // "Mozilla/5.0 (Macintosh Intel Mac OS X 10_8_5) AppleWebKi..."
    console.log( req.header('Authorization') )

    res.status(200).json(await usuarioService.obtenerUsuarios());
}

const registrarUsuario = async (req, res) => {
   return res.status(201).json(await usuarioService.guardarUsuarios(req.body));
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

const login = async (req, res) => {
    return res.status(200).json(await usuarioService.login(req.body));
}

module.exports = {
    listaUsuarios, registrarUsuario, obtenerUsuario, actualizarUsuario, eliminarUsuario, login
}