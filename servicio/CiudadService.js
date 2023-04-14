const ciudadRepositorio = require('./../repositorio/CiudadRepositorio');

const obtenerCiudadPorCoordenadas = async (latitud, longitud) => {
    let lat  = latitud.concat('%');
    let lon = longitud.concat('%');    
    return await ciudadRepositorio.consultaCiudadPorCoordenadas(lat, lon);
}

module.exports = {
    obtenerCiudadPorCoordenadas
}