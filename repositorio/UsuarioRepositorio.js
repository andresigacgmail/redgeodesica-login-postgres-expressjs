const db = require('./../conexion/Conexion');



const obtenerUsuario = async (id) => {
    try {
        return  await db.one("select t_id, usuario, tipo_documento, numero_documento, nombre, correo_electronico, telefono, numero_contrato, cargo, fecha_creacion, fecha_vencimiento, rol, agencia from usuario where t_id = $1",[id]);                 
    } catch (error) {
        console.log(error)       
        return null;         
    }
}

const obtenerUsuarios = async () => {    
   //console.log( await db.any("select * from usuario where t_id = $1", [30]) ) 
   try {
        return await db.any("select t_id, usuario, tipo_documento, numero_documento, nombre, correo_electronico, telefono, numero_contrato, cargo, fecha_creacion, fecha_vencimiento, rol, agencia from usuario",[]);       
   } catch (error) {
    console.log(error)
   }    
    return await db.any("select * from usuario",[]);       
}


const guardarUsuarios = async (usuario) => {    
    try {
        return await db.one(`insert into usuario (usuario, tipo_documento, numero_documento, nombre, correo_electronico, telefono, numero_contrato, cargo, contrasenia, fecha_creacion, fecha_vencimiento, rol, agencia) values ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13) returning *`, [usuario.usuario, usuario.tipo_documento, usuario.numero_documento, usuario.nombre, usuario.correo_electronico, usuario.telefono, usuario.numero_contrato, usuario.cargo, usuario.contrasenia, usuario.fecha_creacion, usuario.fecha_vencimiento, usuario.rol, usuario.agencia]);        
    } catch (error) {
        console.log(error)
        return null;
    }
}


const actualizarUsuario = async (usuario, id) => {
    console.log(usuario, id)
    try {
        return await db.one(`update usuario set usuario = $1, tipo_documento = $2, numero_documento = $3, nombre = $4, telefono = $5, numero_contrato = $6, cargo = $7, fecha_creacion = $8, fecha_vencimiento = $9 where t_id = ${id} returning *`,[usuario.usuario,usuario.tipo_documento,usuario.numero_documento,usuario.nombre,usuario.telefono,usuario.numero_contrato,usuario.cargo,usuario.fecha_creacion,usuario.fecha_vencimiento]);        
    } catch (error) {
        console.log(error)
    }
}

const eliminarUsuario = async (id) => {
    try {
        return await db.none(`delete from usuario where t_id = ${id}`);
    } catch (error) {
        console.log(error)
    }
}


const buscarUsuarioPorEmail = async (email) => {    
    try {        
        return await db.one(`select * from usuario where correo_electronico = '${email}'`);
    } catch (error) {
        console.log(error)
        return null;
    }
}

const actualizarPassword = async (id, password) => {
    try {
        await db.none(`update usuario set contrasenia = $1 where t_id = $2`,[password, id]);
        return true;
    } catch (error) {
        console.log(error)
    }
}





module.exports = {
    obtenerUsuarios, guardarUsuarios, obtenerUsuario, actualizarUsuario, eliminarUsuario, buscarUsuarioPorEmail, actualizarPassword
}