let MySql = require('./mysql.js');

class Temp extends MySql{
	constructor(){
		super();
		let conn = this.connectToProductDatabase();
		conn.query('select 1+1 as selection', (err, results, fields) => {
			if (err) console.log(err);
			else console.log(results);
		})
	}
}

let obj = new Temp();
