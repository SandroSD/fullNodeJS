const mongoose = require('mongoose');

const Pets = mongoose.model('Pet',{
    nombre: String, //Number, Boolean, {}, []
    tipo: String,
    descripcion: String
})

module.exports = Pets