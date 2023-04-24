const usuarioRepositorio = require('./../repositorio/UsuarioRepositorio');
const authService = require('./AuthService');
const mail = require('./../utilidades/Mail');





const obtenerUsuario = async (id) => {        
    return await usuarioRepositorio.obtenerUsuario(id);
}

const obtenerUsuarios = async () => {    
  return await usuarioRepositorio.obtenerUsuarios();
}


const guardarUsuarios = async (usuario) => {
    console.log(usuario)

    try {
        
        const usuarioEmail = await usuarioRepositorio.buscarUsuarioPorEmail(usuario.correo_electronico);        

        if(usuarioEmail != null){
            return {
                message: "ya existe el correo",
                status: false
            };
        }   
        
        const contrasenia = await authService.passwordBcript(usuario.contrasenia);
    
        usuario.contrasenia = contrasenia;
        usuario.agencia = 7;
        usuario.rol = 3;

        const usuarioGuardado = await usuarioRepositorio.guardarUsuarios(usuario);
        if(usuarioGuardado != null) {
            return {
                usuario: usuarioGuardado,            
                status: true,
                message: "registrado correctamente"
            }; 
        }

        return {           
            status: false,
            message: "error al registrar usuario"
        }; 
    
        

    } catch (error) {
        console.log(error.error);
        return {           
            status: false,
            message: error.message
        }; 
    }

    
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
        return ({
            status: false,
            message: "no existe el correo"
        });
    }   

    const contrasenia = await authService.validarContrasenia(usuarioEmail.contrasenia, usuario.contrasenia);
    if(!contrasenia){
        return ({
            status: false,
            message: "datos incorrectos"});
    }   
    console.log(contrasenia);
    return {
        status: true,
        token:authService.generarToken(usuarioEmail),
        usuario:usuarioEmail
    };
}

const recuperarPassword = async (correo) => {
    try {
        const usuario = await usuarioRepositorio.buscarUsuarioPorEmail(correo.email);        
        texto = "<img src="+'"https://raw.githubusercontent.com/dhbello/Centro-de-Control/main/images/nav/logo.png"'+"></img>   <p>Has click en el link para restablecer la contraseña, si no la has solicitado, has caso omiso a este correo. <br> <a href='"+correo.origin+"/herramientas/auth/recuperarContrasenia.html?token="+authService.TokenRecuperarPassword(usuario)+"'>Restablecer Contraseña</a></p>";
        mail.enviarEmail(correo.email, 'Reestablecer Contraseña', texto);        
    } catch (error) {
        console.log(error);
    }
}

const reestablecerPassword = async (password, token) => {
    try {
        const usuario = authService.obtenerUsuariPorToken(token);    
        usuario.contrasenia = await authService.passwordBcript(password.contrasenia);
        return await usuarioRepositorio.actualizarPassword(usuario.t_id, usuario.contrasenia);           
    } catch (error) {
        console.log(error);
    }
}




module.exports = {
    obtenerUsuarios, guardarUsuarios, obtenerUsuario, actualizarUsuario, eliminarUsuario, login, reestablecerPassword, recuperarPassword
}