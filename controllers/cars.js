const express = require('express');
const router = express.Router();
const Car = require('../models/car');

//check to see if I am connected to the server
// router.get('/', (req, res) => {
// 	res.send("cars!!");
// });


// //Telling the model to do something with list
router.get('/', (req, res) => {
	Car.find({}, (err, cars) => {
		console.log(cars, '<-- an array of objects')//cars is the response from the database
		if(err){
			res.send(err);
		} else {
			res.render('index.ejs', {
				cars: cars //comes from the callback
			});
		}
	});
});








module.exports = router;