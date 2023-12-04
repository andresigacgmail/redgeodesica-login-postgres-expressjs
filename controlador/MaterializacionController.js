const materializacionServicio = require('./../servicio/MaterializacionService');

const accedoPorEstacion = async (req, res) => {    
    return res.status(200).json(await materializacionServicio.obtenerAccesoGeneral(req.params.estacion));        
}

const ondulacionNomenclatura = async (req, res) => {    
    return res.status(200).json(await materializacionServicio.obtenerOndulacion(req.params.nomenclatura));        
}

const departamentos = async (req, res) => {    
    return res.status(200).json(await materializacionServicio.departamentos());        
}

const municipios = async (req, res) => {    
    return res.status(200).json(await materializacionServicio.municipios());        
}
const veredas = async (req, res) => {    
    return res.status(200).json(await materializacionServicio.veredas());        
}


module.exports = {
    accedoPorEstacion, ondulacionNomenclatura, departamentos, municipios, veredas
}