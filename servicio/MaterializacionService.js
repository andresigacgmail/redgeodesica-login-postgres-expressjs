const materializacionRepositorio = require('./../repositorio/MaterializacionRepositorio');

const obtenerAccesoGeneral = async (estacion) => {    
    return await materializacionRepositorio.accesoGeneralPorEstacion(estacion);
}


const obtenerOndulacion = async (nomenclatura) => {    
    return await materializacionRepositorio.ondulacionEstacion(nomenclatura);
}

const departamentos = async () => {    
    return await materializacionRepositorio.departamentosFindAll();
}

const municipios = async () => {    
    return await materializacionRepositorio.municipioFindAll();
}

const veredas = async () => {    
    return await materializacionRepositorio.veredasFindAll();
}

module.exports = {
    obtenerAccesoGeneral, obtenerOndulacion, departamentos, municipios, veredas
}