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

//listens for post requests to add car
router.post('/', (req, res) => {
	console.log(req.body, "<--- content of form");
	Car.create(req.body, (error, addCar) => {
		console.log(addCar, "<-- post route cars, addedCar")
		if(error){
			res.send(error)
			} else {
				res.redirect('/cars')
		}
	});
});

//new - send car
router.get('/new', (req, res) => {
	res.render('new.ejs')
});



//show params inside routing docs in express
//localhost:3000/cars/0
router.get('/:id', (req, res) => {
	console.log(req.params, "<-- req.params");
	console.log('/cars/:id')
	Car.findById(req.params.id, (err, car) => {
			if(err) {
				res.send(err);
			} else {
				res.render('show.ejs', {
					car: car
			});
		}
	});
});

//edit the list
router.get('/:id/edit', (req, res) => {
  Car.findById(req.params.id, (err, car) => {
    if(err){
      console.log(err);
    }else {
      res.render('edit.ejs', {
        car: car
      })
    }
  })
});

router.put('/:id', (req, res) => {
  console.log(req.body, ' in put route')
  console.log('/cars/:id')
})


//delete
router.delete('/:id', (req, res) => {
	Car.findOneAndDelete(req.params.id, (err, deleteCar) => {
		if(err){
			res.send(err);
		} else {
		res.redirect('/cars');
		};
	});
});


module.exports = router;