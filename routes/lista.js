//File: routes/usuario.js
module.exports = function(app) {

	var Lista = require('../models/lista.js');
	var Usuario = require('../models/usuario.js');

	// GET - Return all listas by usuario in the DB
	findAllListasByUsuario = function(req, res) {
		Lista.find({
			usuario : req.params.id
		}).exec(function(err, listas) {
			if (err) {
				return handleError(err);
			}
			console.log('Las listas de ' + req.params.id + ': ', listas);
			res.send(listas);
		});
	};

	// GET - Return a Lista with specified ID
	findById = function(req, res) {
		Lista.findById(req.params.id, function(err, lista) {
			if (!err) {
				res.send(lista);
			} else {
				console.log('ERROR: ' + err);
			}
		});
	};

	// POST - Insert a new Lista in the DB
	addLista = function(req, res) {
		console.log('POST');
		console.log(req.body);

		var lista = new Lista({
			nombreLista : req.body.nombreLista,
			usuario : req.params.id,
			fechaAlta : new Date(req.body.fechaAlta)
		});

		lista.save(function(err) {
			if (!err) {
				console.log('Created');
				Usuario.findById(req.params.id, function(errUsu, usuario) {
					usuario.listas.push(lista);
					console.log(usuario);

					usuario.save(function(errUsu) {
						if (!errUsu) {
							console.log('Updated');
						} else {
							console.log('ERROR: ' + errUsu);
						}
					});
				});
			} else {
				console.log('ERROR: ' + err);
			}
		});

		res.send(lista);
	};

	app.get('/usuario/:id/listas', findAllListasByUsuario);
	app.get('/lista/:id', findById);
	app.post('/usuario/:id/lista', addLista);

};