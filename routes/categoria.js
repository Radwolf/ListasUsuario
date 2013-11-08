//File: routes/categoria.js
module.exports = function(app) {

	var Categoria = require('../models/categoria.js');

	// GET - Return all Categorias in the DB
	findAll = function(req, res) {
		Categoria.find().exec(function(err, categorias) {
			if (err) {
				return handleError(err);
			}
			res.send(categorias);
		});
	};

	// GET - Return a Categoria with specified ID
	findById = function(req, res) {
		Categoria.findById(req.params.id, function(err, categoria) {
			if (!err) {
				res.send(categoria);
			} else {
				console.log('ERROR: ' + err);
			}
		});
	};

	// POST - Insert a new Categoria in the DB
	addCategoria = function(req, res) {

		var categoria = new Categoria({
			nombreCategoria : req.body.nombreCategoria
		});

		categoria.save(function(err) {
			if (!err) {
				console.log('Created');
			} else {
				console.log('ERROR: ' + err);
			}
		});

		res.send(categoria);
	};

	// PUT - Update a register already exists
	updateCategoria = function(req, res) {
		Categoria.findById(req.params.id, function(err, categoria) {
			categoria.nombreCategoria = req.body.nombreCategoria;

			categoria.save(function(err) {
				if (!err) {
					console.log('Updated');
				} else {
					console.log('ERROR: ' + err);
				}

				res.send(categoria);
			});
		});
	};

	// DELETE - Delete a Categoria with specified ID
	deleteCategoria = function(req, res, next) {
		var id = req.params.id;
		Categoria.findById(id, function(err, categoria) {
			if (err) {
				console.log(err);
				return next(err);
			}
			if (!usuario) {
				return res.send('Invalid ID. (De algún otro lado la sacaste tú...)');
			}
			// Tenemos el producto, eliminemoslo
				categoria.remove(onRemoved);
			});

		function onRemoved(err) {
			if (err) {
				console.log(err);
				return next(err);
			}

			return res.redirect('/view/categorias');
		}
	};
	app.get('/categorias', findAll);
	app.get('/categoria/:id', findById);
	app.post('/categoria', addCategoria);
	app.put('/categoria/:id', updateCategoria);
	app.post('/categoria/:id', deleteCategoria);

};