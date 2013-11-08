var mongoose = require('mongoose'),
    Schema   = mongoose.Schema;

var tipoProductoSchema = new Schema({
	  nombreTipoProducto:  	{ type: String, required: true },
	});

module.exports = mongoose.model('TipoProducto', tipoProductoSchema);