var express =  require('express');
var app = express();
var path = require('path');

app.use('/', express.static('./'));

app.get('/', function(req, res){
	res.sendFile(path.join(__dirname, 'index.html'));
});

  var server = app.listen(process.env.PORT || 8086, ()=> {
	var host = server.address().address
	var port = server.address().port

	console.log('Conectado al puerto 8087')
});
