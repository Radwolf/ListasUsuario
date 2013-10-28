var mongoose = require('mongoose'),
    Schema   = mongoose.Schema;

var usuarioSchema = new Schema({
  nombreUsuario:    { type: String },
  fechaAlta:     	{ type: Date, default: Date.now }   
});

module.exports = mongoose.model('Usuario', usuarioSchema);

