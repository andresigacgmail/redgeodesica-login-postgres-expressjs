const materializacionServicio = require('./../servicio/MaterializacionService');

const accedoPorEstacion = async (req, res) => {    
    return res.status(200).json(await materializacionServicio.obtenerAccesoGeneral(req.params.estacion));        
}


module.exports = {
    accedoPorEstacion
}