const mongoose = require('mongoose');
const {Schema} = mongoose;

const CarteleraSchema = new Schema({
    titulo: {type: String, require: true},
    duracion: {type: String, require: true},
    año: {type: Number, require: true},
    descripcion: {type: String, require: true},
    imagen: {type: String, require: true}
});

module.exports = mongoose.model('cartelera', CarteleraSchema);