require('dotenv');
let Encrypt = require('./worker Functions/Encrypt.js');
let Database = require('./worker Functions/Database.js');
let Middleware = require('./worker Functions/middlewares.js');
let fs = require('fs')
let express = require('express');
let cors = require('cors');
const mongoose = require('mongoose');

// Creating an instance of Middleware class
let middleWare = new Middleware();

// Importing the product model
const Product = require('./models/products.model');

app = express();

// connecting to database
mongoose.connect('mongodb+srv://TanmayChavan:KkaXNKRlDn79UU2r@cluster0.sl8ip.mongodb.net/products')
.then(() => {
	console.log('Mongodb connected ...');
})
.catch((err) => console.log(err))

app.use(cors())

app.use(express.json())

app.get('/', (req, res) => {
	console.log('Fronted Connected!!');
	console.log('Processing data');
	res.send({'Response': 'sent by Natsu_Dragneel'});
})

app.post('/register',middleWare.authenticateReg ,(req, res) => {
	console.log(`Received response is =>`, req.body);
	console.log(req.query.name, '=', req.query.price);
	res.send('Data Received');
})

app.post('/login', middleWare.authenticateLog, (req, res) => {
	res.statusMessage = 'Login process started successfully'
	res.sendStatus(200).end();
})

app.post('/saveProduct', async (req, res, next) => {
	try {
		console.log(req.body);
		const product = new Product(req.body)
		const results = await product.save()
		res.send('success')
	} catch (error) {
		res.send(error);
	}
})

app.get('/getAllProducts', async(req, res, next) => {
	try {
		const results = await Product.find({}, {__v: 0})
		res.json(results)
	} catch (error) {
		res.status(400).send(error)
	}
})

app.listen(8080, () => {
	console.log(`Listening on port ${8080}`);
})

// [

// "3) Height: 42 Millimeters",
// "4) Width: 13.5 Centimeters",
// "5) Product Dimensions: 36.5 x 13.5 x 4.2 cm; 940 Grams",
// "6) Item Weight: 940g",
// "7) Batteries: 1 AA batteries required",
// "8) Are Batteries Included: No",
// "9) Included Components: Mechanical Keyboard and Quick start guide"
// ]