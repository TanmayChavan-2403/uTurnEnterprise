let MySql = require('./mysql.js');


class Database extends MySql{
	constructor(){
		super();
	}

	authenticateBeforeStoring(email, username, password, confirmPassword){

		return new Promise((resolve, reject) => {

			// Validation for Xss attack 
			if (username.split(" ").length > 1 || email.split(" ").length > 1){
				reject([`ERROR`, `Prone to XSS attack! don't use space between username and email`])
				return;
			} 

			let conn = super.connectToDatabase()
			let sqlquery = `select username from users where username = '${username}' UNION
							select email from users where email = '${email}'`;

			conn.query(sqlquery, (err, results, fields) => {
				if (err){
					reject(['ERROR', 'Connection Lost to the database']);
				}
				else {
					// condition to check if username or email is already in use or not.
					if (Object.keys(results).length === 0){
						super.registerUser(email, username, password)
						.then(response => resolve(response))
						.catch(error => reject(error));
					} else {
						reject(['ERROR', `username or email already in use`]);
					}
				};
			})
		})

	}

	authenticateBeforeFetching(username, password){
		return new Promise((resolve, reject) => {

			// Validation for Xss attack 
			if (username.split(" ").length > 1){
				reject([`ERROR`, `Prone to XSS attack! don't use space between username and email`])
				return;
			} 

			// Getting connection object from mysql module
			let conn = super.connectToDatabase()
			if (!conn){
				reject(['ERROR', 'Connection lost to the database'])
			}

			let sqlQuery = `select username from users where username = '${username}';`;
			console.log('In Database.js');
			try{
				conn.query(sqlQuery, (error, result, fields) => {
					if (error){
						reject(['ERROR', 'Connection Lost to the database'])
					}
					else{
						if (Object.keys(result).length === 0){
							reject(['ERROR', `username not found`]);
						} else {
							super.loginUser(username, password)
							.then(res => resolve(res))
							.catch(err => {
								reject(err)
							})
						}
					}
				})	
			}
			catch (err){
				console.log('ERROR ENCOUNTERED IN DATABASE.js', err);
			}
			

		})
	}

	getProductDetails(){

	}

}

module.exports = Database;