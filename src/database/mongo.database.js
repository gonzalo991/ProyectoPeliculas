const mongo = require('mongoose');
const URI = 'mongodb://us5c9pc4uumdcf4uhhtq:7d0X7TtPBw7ZKGNq1UJD@n1-c2-mongodb-clevercloud-customers.services.clever-cloud.com:27017,n2-c2-mongodb-clevercloud-customers.services.clever-cloud.com:27017/bc4dbbvajglrhe9?replicaSet=rs0';

mongo.connect(URI).then(db => console.log('Conexión a la base de datos exitosa'))
    .catch(err => console.error(err));

module.exports = mongo;