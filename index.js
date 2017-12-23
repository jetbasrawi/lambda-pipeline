var time = require('time');

exports.handler = (event, context, callback) => {
	var currentTime = new time.Date();
	currentTime.setTimeZone("America/Los_Angeles");
	callback(null, {
			statusCode: '200',
			body: 'The time in los Angeles is: ' + currentTime.toString(),
	});
}