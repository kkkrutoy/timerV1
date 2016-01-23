module.exports = {
	index: function(req, res){
		if (req.session.username){
			res.render('timer', {username: req.session.username});
		} else {
			res.render('main');
		}
	},
	login: function(req, res){
		res.render('loginform');
	},
	loginProcess: function(req, res){
		if (req.body.username && req.body.password && req.body.password == 'test') {
			req.session.username = req.body.username;
			res.redirect('/');
		} else {
			res.render('loginform', {lastUsername: req.body.username, error: 'Invalid Username or Password'});
		}
	},
	logout: function(req, res){
		req.session.username = null;
		res.redirect('/');
	},
	about: function(req, res){
		res.render('about', {username: req.session.username});
	}
};
