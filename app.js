require('dotenv');
let Encrypt = require('./worker Functions/Encrypt.js');
let Database = require('./worker Functions/Database.js');
let Middleware = require('./worker Functions/middlewares.js');
let fs = require('fs')
let express = require('express');
let cors = require('cors');

let middleWare = new Middleware();

app = express();

app.use(cors())

app.use(express.json())

app.get('/', (req, res) => {
	console.log('Fronted Connected!!');
	console.log('Processing data');
	res.send({'Response': 'sent by Natsu_Dragneel'});
})

app.post('/register',middleWare.authenticateReg ,(req, res) => {
	console.log(`Received response is =>`, req.body);
	res.send('Data Received');
})

app.post('/login', middleWare.authenticateLog, (req, res) => {
	res.statusMessage = 'Login process started successfully'
	res.sendStatus(200).end();
})

app.listen(8080, () => {
	console.log(`Listening on port ${8080}`);
})

