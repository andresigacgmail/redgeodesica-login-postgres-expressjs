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
    }, process.env.SECRET);
}


const TokenRecuperarPassword = (usuario) => {    
    return jsonwebtoken.sign({
        t_id: usuario.t_id,
        correo_electronico: usuario.correo_electronico,        
        usuario: usuario.usuario
    }, process.env.SECRET, {expiresIn: 1200});
}

const obtenerUsuariPorToken = (token) => {
    
    try {        
        return jsonwebtoken.verify(token, process.env.SECRET);       
    } catch (error) {
        console.error(error);        
    }
}





module.exports = {
    passwordBcript, validarContrasenia, generarToken, TokenRecuperarPassword, obtenerUsuariPorToken
}