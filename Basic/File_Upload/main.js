var formidable = require('formidable');
var http = require('http');
var fs = require('fs');

http.createServer(function(req,res) {
	if (req.url == '/fileupload') {
		var form = new formidable.IncomingForm();
		form.parse(req,function(err,fields,files) {
			var oldpath = files.filetoupload.path;
			var newpath = './'+files.filetoupload.name;
			fs.rename(oldpath,newpath, function(err) {
				if (err) throw err;
				res.write('File Uploaded');
				res.end();
			});
		});
	} else {
		res.writeHead(200, {'Content-type':'text/html'});
		res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
		res.write('<input type="file" name="filetoupload"><br>');
		res.write('<input type="submit"></form>');
		return res.end();
	}
}).listen(8000);