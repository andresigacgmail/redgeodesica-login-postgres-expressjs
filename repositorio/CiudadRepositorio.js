const db = require('./../conexion/Conexion');


const consultaCiudadPorCoordenadas = async (latitud, longitud) => {    
    try {
        return await db.any(`select mc.t_id as coor_id, latitud, mc.longitud, mc.municipio, m.t_id as municipio_id, m.codigo as municipio_codigo, m.nombre as municipio_nombre, m.departamento, 
        d.t_id as departamento_id, d.codigo as departamento_codigo, d.nombre as departamento_nombre from municipio_cordenadas mc inner join municipio m on mc.municipio = m.t_id inner join departamento d on m.departamento = d.t_id where mc.latitud like $1  and mc.longitud like $2`,[latitud, longitud]);
    } catch (error) {
        console.log(error);
        return null;
    }
}


module.exports = {
    consultaCiudadPorCoordenadas
}

