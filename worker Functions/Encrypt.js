let bcrypt = require('bcrypt');

class Encrypt{
	constructor(password, hash){
		this.password = password;
		this.saltRounds = 10;
		this.hash = hash;
	}

	encryptPassword(password, saltRounds) {
		return new Promise((resolve, reject) => {
			bcrypt.hash(password, saltRounds, function(err, hash){
				if (err) reject(err);
				else resolve(hash);
			})
		})
	}

	decryptPassword(password, hash){
		return new Promise((resolve, reject) => {
			bcrypt.compare(password, hash, function(err, result){
				console.log(result);
				if (result) resolve('Login Successfull')
				else reject('Password Incorrect')
			})
		})
	}
}

module.exports = Encrypt;