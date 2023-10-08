const materializacionRepositorio = require('./../repositorio/MaterializacionRepositorio');

const obtenerAccesoGeneral = async (estacion) => {    
    return await materializacionRepositorio.accesoGeneralPorEstacion(estacion);
}

module.exports = {
    obtenerAccesoGeneral
}