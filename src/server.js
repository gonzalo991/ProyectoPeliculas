const express = require('express');
const app = express();
const path = require('path');
const morgan = require('morgan');
const database = require('./database/mongo.database');
const dotenv = require('dotenv');
dotenv.config({ path: './.env' });
const PORT = process.env.PORT || 3000;

//Middlewares
app.use(morgan('dev'));

//Archivos estáticos
app.use(express.static(path.join(__dirname, '../public')));

//Indicamos que vamos a recibir y acceder a documentos en formato json
app.use(express.json());

//Rutas
app.use('/peliculas', require('./routes/peliculas.routes'));
app.use('/cartelera', require('./routes/cartelera.routes'));

// Recibimos el puerto y lo ejecutamos
app.listen(PORT, () => console.log(`Servidor establecido en el puerto ${PORT}`));