var mongoose = require('mongoose'),
    Schema   = mongoose.Schema;

var productoTiendaSchema = new Schema({
	  producto:		[ {type : mongoose.Schema.ObjectId, ref : 'Producto'} ],
	  tienda:		[ {type : mongoose.Schema.ObjectId, ref : 'Tienda'}],
	  precio:		{ type: Number, required: true },
	  elMasBarato:  { type: Boolean, default: false}
	});

module.exports = mongoose.model('ProductoTienda', productoTiendaSchema);