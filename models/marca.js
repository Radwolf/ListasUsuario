var mongoose = require('mongoose'),
    Schema   = mongoose.Schema;

var marcaSchema = new Schema({
	  nombreMarca:  	{ type: String, required: true },
	});

module.exports = mongoose.model('Marca', marcaSchema);