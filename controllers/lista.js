//File: routes/usuario.js
module.exports = function(app) {

	var Lista = require('../models/lista.js');
	var Usuario = require('../models/usuario.js');

	// GET - Return all listas by usuario in the DB
	findAllListasForView = function(req, res) {
		Lista.find().exec(function(err, listas) {
			if (err) {
				return handleError(err);
			}
  			return res.render('listas', {
  				pageTitle : 'Listas de la compra de Usuarios',
  				mostrarUsuario : true,
  				listas : listas
  			});
		});
	};
	
	// GET - Return all listas by usuario in the DB
	findAllListasByUsuarioForView = function(req, res) {
		Lista.find({
			usuario : req.params.id
		}).exec(function(err, listas) {
			if (err) {
				return handleError(err);
			}
  			return res.render('listas', {
  				pageTitle : 'Listas de la compra de usuario: ' + req.params.id,
  				mostrarUsuario: false,
  				listas : listas
  			});
		});
	};
	
	app.get('/view/usuario/:id/listas', findAllListasByUsuarioForView);
	app.get('/view/listas', findAllListasForView);

};