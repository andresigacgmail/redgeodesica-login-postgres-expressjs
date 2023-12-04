const db = require('./../conexion/Conexion');

const accesoGeneralPorEstacion = async (estacion) => {    
    let intEstacon = parseInt(estacion);
    try {
        return await db.one(`select me.t_id as estacion_id, identificador, ma.acceso_general, ma.descripción_detallada, 
                             ve.nombre as vereda, ma.observacion, ma.fecha_descripcion, ma.monumentado_por_1, 
                             ma.ancho_mts, ma.largo_mts, ma.altura_mts, ma.actualizó 
                             from main_estacion me left join materializacion ma on me.t_id = ma.estacion 
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


const departamentosFindAll = async () => {
    try {
        return await db.many(`select * from departamento`,[]);
    } catch (error) {
        console.log(error);
        return null;
    }
}

const municipioFindAll = async () => {
    try {
        return await db.many(`select * from municipio`,[]);
    } catch (error) {
        console.log(error);
        return null;
    }
}

const veredasFindAll = async () => {
    try {
        return await db.many(`select * from veredas`,[]);
    } catch (error) {
        console.log(error);
        return null;
    }
}


module.exports = {
    accesoGeneralPorEstacion, ondulacionEstacion, departamentosFindAll, municipioFindAll, veredasFindAll
}
