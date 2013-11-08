var mongoose = require('mongoose'),
    Schema   = mongoose.Schema;

var tiendaSchema = new Schema({
	  nombreTienda:	{ type: String, required: true },
	  ubicacion:  	{ type: String, required: false },
	});

module.exports = mongoose.model('Tienda', tiendaSchema);