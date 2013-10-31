var mongoose = require('mongoose'),
    Schema   = mongoose.Schema;

var listaSchema = new Schema({
	  nombreLista:  {type: String, required: true},
	  usuario:		[{type : String, ref: 'Usuario'}],
	  fechaAlta:	{type: Date, default: Date.now}   
	});

module.exports = mongoose.model('Lista', listaSchema);