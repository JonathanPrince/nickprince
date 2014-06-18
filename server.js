var express = require('express');
var hbs     = require('hbs');
var fs      = require('fs');
var app     = express();
var fotos   = [];

fs.readdir('./public/photo/', function(err, files){
	if (err) { 
		throw err;
	}

	files.forEach(function(file) {
		fotos.push(file);
	});
});

app.set('view engine', 'html');

app.engine('html', hbs.__express);

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
		res.render('index', {title: "Actor"});
	})

	.get('/bio', function(req, res) {
		res.render('bio', {title: "Bio"});
	})

	.get('/photos', function(req, res) {
		res.render('photos', {title: "Photos", photos: fotos});
	})

	.get('/videos', function(req, res) {
		res.render('videos', {title: "Videos"});
	})

	.get('/news', function(req, res) {
		res.render('news', {title: "News"});
	});

app.listen(8000);