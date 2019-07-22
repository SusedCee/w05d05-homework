// requiring access to use three modules from express_modules
const express = require('express');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');

const app = express();// defining app which is an express function

//require the database(folder db and file db)
require('./db/db')

//require controller
const carController = require('./controllers/cars');

//before routes, set up middleware
app.use(bodyParser.urlencoded({extended: false}));
app.use(methodOverride('_method'));
app.use('/cars', carController);



app.listen(3000, () => {
	console.log('my server is listening')
});