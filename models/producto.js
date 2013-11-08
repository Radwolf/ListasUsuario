var mongoose = require('mongoose'),
    Schema   = mongoose.Schema;

var productoSchema = new Schema({
	  nombreProducto:  	{ type: String, required: true },
	  categoria:		[ {type : mongoose.Schema.ObjectId, ref : 'Categoria'} ],
	  tipoProducto:		[ {type : mongoose.Schema.ObjectId, ref : 'TipoProducto'}],
	  marca:			[ {type : mongoose.Schema.ObjectId, ref : 'Marca'}],
	  fechaAlta:		{ type: Date, default: Date.now }   
	});

module.exports = mongoose.model('Producto', productoSchema);