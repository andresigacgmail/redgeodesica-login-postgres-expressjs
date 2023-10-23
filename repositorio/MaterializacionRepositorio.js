const db = require('./../conexion/Conexion');

const accesoGeneralPorEstacion = async (estacion) => {    
    let intEstacon = parseInt(estacion);
    try {
        return await db.one(`select me.t_id as estacion_id, identificador, ma.acceso_general, ma.descripción_detallada, 
                            ve.nombre as vereda from main_estacion me left join materializacion ma on me.t_id = ma.estacion 
                            left join veredas ve on me.vereda = ve.codigo where me.t_id = $1`,[intEstacon]);
    } catch (error) {
        console.log(error);
        return null;
    }
}

const ondulacionEstacion = async (nomenclatura) => { 

    //let intEstacon = parseInt(estacion);
    try {
        return await db.one(`select * from main_estacion where nomenclatura = $1`,[nomenclatura]);
    } catch (error) {
        console.log(error);
        return null;
    }
}


module.exports = {
    accesoGeneralPorEstacion, ondulacionEstacion
}
