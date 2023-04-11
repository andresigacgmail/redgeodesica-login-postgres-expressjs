const express = require('express');
const app = express();


app.use(express.json());


const usuarioRoutes = require('./routes/UsuarioRoutes');

app.use('/api', usuarioRoutes);






const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log('listen...')
});