var http = require('http');
var url = require('url');
var dt = require('./dateModule');

http.createServer(function (req, res) {
	res.writeHead(200, {'Content-Type':'text/html'});
	res.write("The date and time: " + dt.myDateTime());
	//http://localhost:8000/anyurl
	res.write("<br> The url is: " + req.url); // returns /anyurl
	var q = url.parse(req.url,true).query;
	//http://localhost:8000/?year=2017&month=July
	res.write("<br> The query is: " + q.year + ' ' + q.month);
	res.end('<br>Hello World!');
}).listen(8000);

console.log('Console Log Test');