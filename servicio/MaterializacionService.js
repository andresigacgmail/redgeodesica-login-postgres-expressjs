const materializacionRepositorio = require('./../repositorio/MaterializacionRepositorio');

const obtenerAccesoGeneral = async (estacion) => {    
    return await materializacionRepositorio.accesoGeneralPorEstacion(estacion);
}


const obtenerOndulacion = async (nomenclatura) => {    
    return await materializacionRepositorio.ondulacionEstacion(nomenclatura);
}

module.exports = {
    obtenerAccesoGeneral, obtenerOndulacion
}