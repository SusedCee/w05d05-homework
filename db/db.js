const mongoose = require('mongoose');

const connectionString ='mongodb://localhost/car';

mongoose.connect(connectionString,
	{userUrlParser: true,
		userCreateIndex: true //gets rid of depracation warning
	});

mongoose.connection.on('connected', () => {
	console.log(`mongoose connected to ${connectionString}`)
})

mongoose.connection.on('disconnected', () => {
	console.log(`mongoose disconnected to ${connectionString}`)
})

monsoose.connection.on('error', (err) => {
	console.log(`mongoose error: ${err}`)
})