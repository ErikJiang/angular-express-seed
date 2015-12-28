var usrRouter = require('./users');

module.exports = function(app) {
	/* GET home page. */
	app.get('/', function(req, res, next) {
	  res.render('index', { title: 'Angular-Express-Seed' });
	});

	//user routes handler
    usrRouter(app);
};

