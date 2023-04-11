


const pool = require('./conexion/conexion');


const getUsuarios = async () => {

    const usuarios = await pool.query('SELECT * FROM usuario', (error, results) => {
        if (error) {
          throw error
        }
        console.log(results.rows);
      })

      console.log(usuarios)
}







module.exports = {
    getUsuarios
};


