const jsonWebToken = require('jsonwebtoken');

const validarToken = (req, res, next) => {
    const token = req.header('token');
    if (!token) {
        return res.status(401).json({ message: 'Token no valido' });
    }

    try {        
        req.user = jsonWebToken.verify(token, process.env.SECRET);
        next();
    } catch (error) {
        console.error(error.message, error.expiredAt);
        return res.status(401).json({ message: 'Token no valido' });
    }
}


module.exports = validarToken;