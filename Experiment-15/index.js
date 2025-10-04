const express = require('express');
const { connection } = require('./config/db.js');
const productRouter = require('./routes/ProductRoutes.js');
const { seedIfEmpty } = require('./controllers/ProductController.js');

const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req, res) => {
	res.send('E-commerce Catalog API (Experiment-15)');
});

// Mount product routes
app.use('/', productRouter);

app.listen(port, async () => {
	try {
		await connection;
		console.log('connected to db');
		await seedIfEmpty();
	} catch (error) {
		console.log('unable to connect to db');
	}
	console.log(`Example app listening on port ${port}`);
});