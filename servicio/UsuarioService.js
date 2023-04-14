const usuarioRepositorio = require('./../repositorio/UsuarioRepositorio');
const authService = require('./AuthService');





const obtenerUsuario = async (id) => {        
    return await usuarioRepositorio.obtenerUsuario(id);
}

const obtenerUsuarios = async () => {    
  return await usuarioRepositorio.obtenerUsuarios();
}


const guardarUsuarios = async (usuario) => {

    const usuarioEmail = await usuarioRepositorio.buscarUsuarioPorEmail(usuario.correo_electronico);;
    if(usuarioEmail != null){
        return ({message: "ya existe el correo"});
    }   
    
    const contrasenia = await authService.passwordBcript(usuario.contrasenia);

    usuario.contrasenia = contrasenia;
    usuario.agencia = 7;
    usuario.rol = 3;

    return await usuarioRepositorio.guardarUsuarios(usuario);
}


const actualizarUsuario = async (usuario, id) => {
    return await usuarioRepositorio.actualizarUsuario(usuario, id);
}

const eliminarUsuario = async (id) => {
    return await usuarioRepositorio.eliminarUsuario(id);
}


const login = async (usuario) => {
    const usuarioEmail = await usuarioRepositorio.buscarUsuarioPorEmail(usuario.correo_electronico);
    if(usuarioEmail == null){
        return ({message: "no existe el correo"});
    }   

    const contrasenia = await authService.validarContrasenia(usuarioEmail.contrasenia, usuario.contrasenia);
    if(!contrasenia){
        return ({message: "datos incorrectos"});
    }   
    console.log(contrasenia);
    return {
        token:authService.generarToken(usuarioEmail),
        usuario:usuarioEmail.usuario
    };
}





module.exports = {
    obtenerUsuarios, guardarUsuarios, obtenerUsuario, actualizarUsuario, eliminarUsuario, login
}