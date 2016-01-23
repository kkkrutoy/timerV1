var express = require('express'),
router = express.Router(),
home = require('../controllers/home');

module.exports = function(app){
	router.get('/', home.index);
	router.get('/login', home.login);
	router.post('/login', home.loginProcess);
	router.get('/logout', home.logout);
	router.get('/about', home.about);
	//router.get('/timer', home.timer);
	app.use(router);
};
