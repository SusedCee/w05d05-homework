const mongoose = require('mongoose');

//declare what properties and value types
//are allowed in documents
const carSchema = new mongoose.Schema({
	make: String, 
	model: String,
	year: Number,
	price: Number
})

//creates a model object which we are storing in Car
const Car = mongoose.model('Car', carSchema);

module.exports = Car;