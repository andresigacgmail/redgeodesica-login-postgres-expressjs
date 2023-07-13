const express = require('express');
require('dotenv').config();
const fs = require('fs');
const https = require('https');
const app = express();

const options = {
    key: fs.readFileSync('/etc/letsencrypt/live/auth.homeristicodeath.tech/privkey.pem'),
    cert: fs.readFileSync('/etc/letsencrypt/live/auth.homeristicodeath.tech/fullchain.pem')
};

const cors = require('cors');

app.use(cors({origin:'*'}));
app.use(express.json());


const usuarioRoutes = require('./routes/UsuarioRoutes');

app.use('/api', usuarioRoutes);






const PORT = process.env.PORT || 3001;
// app.listen(PORT, () => {
//     console.log('listen...')
// });

https.createServer(options, app).listen(3001, function () {
    console.log('Servidor HTTPS escuchando en el puerto 3001');
});