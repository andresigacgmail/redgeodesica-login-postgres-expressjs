const usuarioRepositorio = require('./../repositorio/UsuarioRepositorio');
const bcrypt = require('bcrypt');
const jsonwebtoken = require('jsonwebtoken');

const passwordBcript = (password) => {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(10), null);
}

const validarContrasenia = async (contraseniaDB, contraseniaLogin) => {    
    return bcrypt.compareSync(contraseniaLogin, contraseniaDB);
}

const generarToken = (usuario) => {
    return jsonwebtoken.sign({
        t_id: usuario.t_id,
        correo_electronico: usuario.correo_electronico,        
        usuario: usuario.usuario
    }, 'Igac2023*.');
}






module.exports = {
    passwordBcript, validarContrasenia, generarToken
}