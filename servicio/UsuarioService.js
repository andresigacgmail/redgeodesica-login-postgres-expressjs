const db = require('./../conexion/Conexion');


const obtenerUsuarios = async () => {    
   //console.log( await db.any("select * from usuario where t_id = $1", [30]) )     
    return await db.any("select * from usuario",[]);       
}

const guardarUsuarios = async (usuario) => {
    console.log(usuario)
}




module.exports = {
    obtenerUsuarios, guardarUsuarios
}