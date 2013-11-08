//File: routes/usuario.js
module.exports = function(app) {

  var Usuario = require('../models/usuario.js');

  // GET - Return all usuarios in the DB
  findAllUsuariosForView = function(req, res) {
  	Usuario.find().populate('listas').exec(function(err, usuarios) {
  		if(!err) {
  			return res.render('usuarios', {
  				pageTitle : 'Lista de Usuarios',
  				usuarios : usuarios
  			});
  		} else {
  			console.log('ERROR: ' + err);
  		}
  	});
  };
  
  // POST - Insert a new Usuario in the DB
  addUsuario = function(req, res, next) {
	  if (req.method === 'GET') {
		  return res.render('usuarioCreate', {pageTitle: 'Alta usuario', title: 'Formulario de alta de usuario', usuario: {}});
	  } else if (req.method === 'POST') {
		  // Obtenemos las variables y las validamos
		  var nombreUsuario = req.body._id || '';
		  var fechaAlta = new Date(req.body.fechaAlta);

		  // Validemos que nombre 
		  if (nombreUsuario === '') {
			  console.log('ERROR: Campos vacios');
		      return res.send('Hay campos vacíos, revisar');
		  }

		  var usuario = new Usuario({
			  _id:    	nombreUsuario,
			  fechaAlta:fechaAlta
		  });

		  usuario.save(function(err) {
			  if(!err) {
				  console.log('Created');
			  } else {
				  console.log('ERROR: ' + err);
			  }
		  });
		  
		  return res.redirect('/view/usuarios');
	  }
  };
  
  // PUT - Update a register already exists
  updateUsuario = function(req, res) {
	  if (req.method === 'GET') {
		  Usuario.findById(req.params.id, function(err, usuario) {
			  console.log(usuario);
			  var editVar = {
					  pageTitle: 'Formulario de modificación de usuario', 
					  title: 'Modificación de usuario', 
					  usuari: usuario
			  };
			  console.log(editVar);
			  var jpost = JSON.stringify(editVar);
			  console.log(jpost);
			  return res.render('usuarioEdit', editVar);
		  });
	  } else if (req.method === 'PUT') {
		  Usuario.findById(req.params.id, function(err, usuario) {
			  usuario.nombreUsuario = req.body.nombreUsuario;
			  usuario.fechaAlta    	= req.body.fechaUsuario;

			  usuario.save(function(err) {
				  if(!err) {
					  console.log('Updated');
				  } else {
					  console.log('ERROR: ' + err);
				  }

				  return res.redirect('/view/usuarios');
			  });
		  });
	  }
  };
  
  // Link routes and functions
  app.get('/view/usuarios', findAllUsuariosForView);
  app.get('/view/usuario', addUsuario);
  app.post('/view/usuario', addUsuario);
  app.get('/view/usuario/:id', updateUsuario);
  app.put('/view/usuario/:id', updateUsuario);
  
};