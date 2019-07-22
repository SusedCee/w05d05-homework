const mongoose = require('mongoose');

const connectionString ='mongodb://localhost/car';

mongoose.connect(connectionString,
	{useNewUrlParser: true,
	 useCreateIndex: true //gets rid of depracation warning
	});

mongoose.connection.on('connected', () => {
	console.log(`mongoose connected to ${connectionString}`)
})

mongoose.connection.on('disconnected', () => {
	console.log(`mongoose disconnected to ${connectionString}`)
})

mongoose.connection.on('error', (err) => {
	console.log(`mongoose error: ${err}`)
})