var mongoose = require('mongoose'),
    Schema   = mongoose.Schema;

var productoSchema = new Schema({
	  nombreProducto:  	{ type: String, required: true },
	  categoria:		[ {type : mongoose.Schema.ObjectId, ref : 'Categoria'} ],
	  fechaAlta:		{ type: Date, default: Date.now }   
	});

module.exports = mongoose.model('Producto', listaSchema);