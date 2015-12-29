var usrRouter = require('./users');

module.exports = function(app) {
	/* GET home page. */
	app.get('/', function(req, res, next) {
	  res.render('index', { title: 'Angular-Express-Seed' });
	});

    //routes distribution
    app.get('/partials/:name', function (req, res, next) {
        var name = req.params.name;
        res.render('partials/' + name);
    });

	//user routes handler
    usrRouter(app);
};

