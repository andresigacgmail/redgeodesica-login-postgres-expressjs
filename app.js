const express = require('express');
require('dotenv').config();
const app = express();
const cors = require('cors');

app.use(cors({origin:'*'}));
app.use(express.json());


const usuarioRoutes = require('./routes/UsuarioRoutes');

app.use('/api', usuarioRoutes);






const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log('listen...')
});