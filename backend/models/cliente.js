const mongoose = require('mongoose')

const ClienteSchema = new mongoose.Schema({
  nombre: String,
  telefono: String,
  correo: String
})

module.exports = mongoose.model('Cliente', ClienteSchema)