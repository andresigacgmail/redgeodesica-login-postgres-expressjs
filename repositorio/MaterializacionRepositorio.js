const db = require('./../conexion/Conexion');

const accesoGeneralPorEstacion = async (estacion) => {    
    let intEstacon = parseInt(estacion);
    try {
        return await db.one(`select * from materializacion where estacion = $1`,[intEstacon]);
    } catch (error) {
        console.log(error);
        return null;
    }
}


module.exports = {
    accesoGeneralPorEstacion
}
