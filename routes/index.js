var usrRouter = require('./users');

module.exports = function(app) {
	/* GET home page. */
	app.get('/', function(req, res, next) {
	  res.render('index', { title: 'Express' });
	});

	//user routes handler
    usrRouter(app);
};

