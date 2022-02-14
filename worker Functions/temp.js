require('dotenv').config();
let mysql = require('mysql');

let connection = mysql.createConnection({
	host: 'br3whvot8whxjfdimycm-mysql.services.clever-cloud.com',
	user: 'ult3ietvxt69bvok',
	password: '0Y1cTF7gMYSc6RT2HPMV',
	database: 'br3whvot8whxjfdimycm'
})


connection.connect(err => {
	console.log(err)
	if (err){
		console.log('Connection Failed');
	} else {
		console.log('Connected!!');
		connection.query('select 1+1 as Selection', (err, results, fields) => {
			if (err) console.log(err);
			else console.log(results);
		})
	}
})



