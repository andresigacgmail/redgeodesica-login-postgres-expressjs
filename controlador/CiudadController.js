const ciudadService = require('./../servicio/CiudadService');

const consultaCiudadPorCoordenadas = async (req, res) => {
    let lat = req.query.latitud.substring(0, 3);
    let lng = req.query.longitud.substring(0, 5);     
    return res.status(200).json(await ciudadService.obtenerCiudadPorCoordenadas(lat, lng));        
}


module.exports = {
    consultaCiudadPorCoordenadas
}