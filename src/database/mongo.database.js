const mongo = require('mongoose');
const URI = 'mongodb://localhost:27017/peliculas';

mongo.connect(URI).then(db => console.log('Conexión a la base de datos exitosa'))
    .catch(err => console.error(err));

module.exports = mongo;