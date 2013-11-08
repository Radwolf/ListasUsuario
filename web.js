var express = require("express"), app = express(), http = require("http"), server = http
		.createServer(app);
var mongoose = require("mongoose"); // The reason for this demo.

var uristring = process.env.MONGOLAB_URI || process.env.MONGOHQ_URL
		|| 'mongodb://localhost/ListasUsuario';

app.configure(function() {
	app.set('views', __dirname + '/views');
	app.set('view engine', 'jade');
	app.use(express.logger());
	app.use(express.bodyParser());
	app.use(express.methodOverride());
	app.use(app.router);
	app.use(express.static(__dirname + '/public'));
});

app.configure('development', function() {
	app.use(express.errorHandler({
		dumpExceptions : true,
		showStack : true
	}));
});

app.configure('production', function() {
	app.use(express.errorHandler());
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
	console.log("Listening on " + port);
});

mongoose.connect(uristring, function(err, res) {
	if (err) {
		console.log('ERROR connecting to: ' + uristring + '. ' + err);
	} else {
		console.log('Succeeded connected to: ' + uristring);
	}
});

// Llamadas REST para la API
usuario = require('./routes/usuario')(app);
lista = require('./routes/lista')(app);
categoria = require('./routes/categoria')(app);

// Controladores para la para las vistas del BackOffice
listaController = require('./controllers/lista')(app);
usuarioController = require('./controllers/usuario')(app);