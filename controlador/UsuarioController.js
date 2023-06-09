const usuarioService = require('./../servicio/UsuarioService');
const mail = require('./../utilidades/Mail');



const listaUsuarios = async (req, res) => {
    // console.log(req.protocol)     // "https"
    // console.log(req.hostname)     // "example.com"
    // console.log(req.path)         // "/creatures"
    // console.log(req.originalUrl)  // "/creatures?filter=sharks"
    // console.log(req.subdomains)   // "['ocean']"

    // console.log( req.header('Content-Type') ) // "application/json"
    // console.log( req.header('user-agent') )    // "Mozilla/5.0 (Macintosh Intel Mac OS X 10_8_5) AppleWebKi..."
    // console.log( req.header('Authorization') )


    //mail.enviarEmail();

    res.status(200).json(await usuarioService.obtenerUsuarios());
}

const registrarUsuario = async (req, res) => {
    const result = await usuarioService.guardarUsuarios(req.body);
    if(result.status){
        return res.status(201).json({
            status: result.status,
            message: result.message
        });
    }

    return res.status(400).json({
        status: result.status,
        message: result.message,        
    });
   
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

const logout = async (req, res) => {}

const reestablecerPassword = async (req, res) => {
    return res.status(200).json(await usuarioService.reestablecerPassword(req.body, req.header('token')));
}

const recuperarPassword = async (req, res) => {
    return res.status(200).json({
        status: await usuarioService.recuperarPassword(req.body)})        
}

module.exports = {
    listaUsuarios, registrarUsuario, obtenerUsuario, actualizarUsuario, eliminarUsuario, login, logout, reestablecerPassword, recuperarPassword
}