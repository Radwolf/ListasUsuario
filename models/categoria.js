var mongoose = require('mongoose'),
    Schema   = mongoose.Schema;

var categoriaSchema = new Schema({
	  nombreCategoria:  	{ type: String, required: true }
	});

module.exports = mongoose.model('Categoria', categoriaSchema);