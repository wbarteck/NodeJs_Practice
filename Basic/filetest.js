var http = require('http');
var fs = require('fs');
var dt = require('./dateModule');

http.createServer(function (req, res) {
	fs.readFile('demohtml.html', function(err, data) {
		res.writeHead(200, {'Content-Type':'text/html'});
		res.write(data);
		res.end();
	});
}).listen(8000);

console.log('server up with html content from demohtml.html');

// Create File
fs.appendFile('newTextFile.txt', '\nCreated On '+dt.myDateTime(), function (err) {
	if (err) throw err;
	console.log('Saved File');
});

// Create Empty fileCreatedDate
fs.open('emptyFile.txt', 'w', function(err, file) {
	if (err) throw err;
	console.log('New Empty File');
});

// Delete Empty File
fs.unlink('emptyFile.txt', function (err){
	if (err) throw err;
	console.log('Deleted empty file');
});

// Rename File
fs.rename('newTextFile.txt', 'renamedTextFile.txt', function(err) {
	if (err) throw err;
	console.log('renamed file');
});