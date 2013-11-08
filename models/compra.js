var mongoose = require('mongoose'),
    Schema   = mongoose.Schema;

var compraSchema = new Schema({
	  lista:			[{type : mongoose.Schema.ObjectId, ref : 'Lista'}],
	  productoTienda:	[{type : mongoose.Schema.ObjectId, ref : 'ProductoTienda'}],
	  cantidad:	{type: Number, default: 0} 
	});

module.exports = mongoose.model('Compra', compraSchema);