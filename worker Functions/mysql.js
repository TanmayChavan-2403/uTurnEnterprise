let mysql = require('mysql');
require('dotenv').config();
let Encrypt = require('./Encrypt.js');

class MySql extends Encrypt{
	connectToDatabase(){
		if (MySql.connection){
			return MySql.connection;
		}
		try{
			let connection = mysql.createConnection({
				host: process.env.HOST,
				user: 'ult3ietvxt69bvok',
				password: process.env.PASSWORD,
				database: process.env.DATABASE
			})
			MySql.connection = connection;
			return connection	
		} catch (err){
			return 0
		}
		
	}

	connectToProductDatabase(){
		let connection = mysql.createConnection({
			host: 'sql100.epizy.com',
			user: 'epiz_30640217',
			password: 'icnNcdrKu2AMSN',
			database: 'epiz_30640217_products'

		})
		return connection;
	}

	createTable(){
		let sqlquery = "select username from users where username='hackytech';";

		MySql.connection.query(sqlquery, (err, results, fields) => {
			if (err) console.log(err);
			else console.log(results);
		})
	}

	registerUser(email, username, password){
		return new Promise((resolve, reject) => {
			super.encryptPassword(password, 10)
			.then(hash => {
				let sqlQuery = `insert into users(username, email, password) values('${username}', '${email}', '${hash}');`;
				MySql.connection.query(sqlQuery, (err, results, fields) => {
					if (err) {
						console.log(err);
						reject(['ERROR', `Internal Error: ${err}`]);
					}
					else resolve(['SUCCESS', "Registration Successfull"]);
				})
			})
			.catch(err => reject(err));

		})
	}


	loginUser(username, password){
		return new Promise((resolve, reject) => {
			console.log('From Mysql module');
			let sqlQuery = `select password from users where username = '${username}'`;
			MySql.connection.query(sqlQuery, (error, result, fields) => {
				if (error) reject(error);
				else{
					super.decryptPassword(password ,result[0].password)
					.then(res => resolve(['SUCCESS', res]))
					.catch(err => reject(['ERROR', err]))
				}
			})
		})
	}
}



module.exports = MySql;


