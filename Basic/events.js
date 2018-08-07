var events = require('events');

var eventEmitter = new events.EventEmitter();

// Create event handler
var myEventHandler = function () {
	console.log("Event triggered");
}

// Assign the even handler
eventEmitter.on('trigger', myEventHandler);

//Fire event
eventEmitter.emit('trigger');