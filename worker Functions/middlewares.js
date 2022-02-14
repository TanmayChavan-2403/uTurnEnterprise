let Database = require('./Database.js');

class Middleware extends Database{
	constructor(){
		super();
	}

	authenticateReg(req, res, next){
		let { email, username, password, confirmPassword } = req.body;
		super.authenticateBeforeStoring(email, username, password, confirmPassword)
		.then(status => {
			res.statusMessage = status[1];
			res.send(200)
		})
		.catch(err => {
			if (err[0] == 'ERROR'){
				res.statusMessage = err[1];
				res.status(400).end();
			}
		})
		
	}

	authenticateLog(req, res, next){
		let { Lusername, Lpassword } = req.body;
		super.authenticateBeforeFetching(Lusername, Lpassword)
		.then(status=> {
			res.statusMessage = status[1];
			res.sendStatus(200).end();
		})
		.catch(err => {
			if (err[0] == 'ERROR'){
				res.statusMessage = err[1];
				res.status(400).end();
			} else {
				res.statusMessage = err;
				res.status(400).end();	
			}
		})
	}

}

module.exports = Middleware;