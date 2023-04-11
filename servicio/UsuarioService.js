
const usuarioRepo = require('./../repositorio/UsuarioRepo');


const getUsuarios = () => {
    return usuarioRepo.getUsuarios();
}

module.exports = {
    getUsuarios
}