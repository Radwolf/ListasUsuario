//File: routes/usuario.js
module.exports = function(app) {

  var Usuario = require('../models/usuario.js');

  // GET - Return all usuarios in the DB
  findAllUsuarios = function(req, res) {
  	Usuario.find(function(err, usuarios) {
  		if(!err) {
  			res.send(usuarios);
  		} else {
  			console.log('ERROR: ' + err);
  		}
  	});
  };

  // GET - Return a Usuario with specified ID
  findById = function(req, res) {
    Usuario.findById(req.params.id, function(err, usuario) {
      if(!err) {
        res.send(usuario);
      } else {
        console.log('ERROR: ' + err);
      }
    });
  };
  
  // POST - Insert a new Usuario in the DB
  addUsuario = function(req, res) {
    console.log('POST');
    console.log(req.body);

    var usuario = new Usuario({
      nombreUsuario:    req.body.nombreUsuario,
      fechaAlta:     	new Date(req.body.fechaAlta)
    });

    usuario.save(function(err) {
      if(!err) {
        console.log('Created');
      } else {
        console.log('ERROR: ' + err);
      }
    });
    res.send(usuario);
  };
  
  //PUT - Update a register already exists
  updateUsuario = function(req, res) {
    Usuario.findById(req.params.id, function(err, usuario) {
      usuario.nombreUsuario = req.body.nombreUsuario;
      usuario.fechaAlta    	= req.body.fechaUsuario;

      usuario.save(function(err) {
        if(!err) {
    	console.log('Updated');
        } else {
    	console.log('ERROR: ' + err);
        }

        res.send(usuario);
      });
    });
  };
  
  //DELETE - Delete a Usuario with specified ID
  deleteUsuario = function(req, res) {
    Usuario.findById(req.params.id, function(err, usuario) {
      usuario.remove(function(err) {
        if(!err) {
    	console.log('Removed');
        } else {
    	console.log('ERROR: ' + err);
        }
      });
    });
  };
  
  // Link routes and functions
  app.get('/usuarios', findAllUsuarios);
  app.get('/usuario/:id', findById);
  app.post('/usuario', addUsuario);
  app.put('/usuario/:id', updateUsuario);
  app.delete('/usuario/:id', deleteUsuario);
  
};