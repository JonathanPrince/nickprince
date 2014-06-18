var express = require('express');
var hbs     = require('hbs');
var app     = express();

var fotos = {
		dave  : ['1069275_orig','8149360_orig','6076475_orig','5685992_orig','1479257_orig','1345963_orig'],
		onset : ['5604157_orig','1702676_orig'],
		prod  : ['9494796_orig','8405911_orig','7917996_orig','186355_orig']
	};

var news = [
		{
			"id"    : "1002",
			"title" : "METHOD TO MADNESS-UPDATE", 
			"date"  : "04/04/2014",
			"text"  : "Exciting development as we now have a Director and lead character attached. I'm not going to name this person as yet until all the ducks are in a row. Now need an experienced producer to help make this happen. Low to no budget as yet but with the right producer this should change. Watch this space. If you know anyone or are interested let me know." 
		},
		{
			"id"    : "1001",
			"title" : "METHOD TO MADNESS IN PRE PRODUCTION", 
			"date"  : "07/01/2014",
			"text"  : "Will update as we go."
		}
	];

app.set('view engine', 'html');

app.engine('html', hbs.__express);

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
		res.render('index', {
			title: "Actor"
		});
	})

	.get('/bio', function(req, res) {
		res.render('bio', {
			title      : "Bio",
			bio_active : true
		});
	})

	.get('/photos', function(req, res) {
		res.render('photos', {
			title         : "Photos",
			data          : fotos,
			photos_active : true
		});
	})

	.get('/videos', function(req, res) {
		res.render('videos', {
			title         : "Videos",
			videos_active : true
		});
	})

	.get('/news', function(req, res) {
		res.render('news', {
			title         : "News",
			data          : news,
			news_active   : true
		});
	});

app.listen(8000);