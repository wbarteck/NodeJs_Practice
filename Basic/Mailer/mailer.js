var nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport({
	service: 'gmail', //must use less secure apps option
	auth: {
		user: 'user@gmail.com',
		pass: 'password'
	}
});

var mailOptions = {
	from: 'user@gmail.com',
	to: 'user@gmail.com',
	subject: 'test email',
	text: 'super simple!'
	//html: '<h1>Can do HTML too!</h1><p>neat</p>'
};

transporter.sendMail(mailOptions, function(error, info) {
	if (error) console.log(error);
	else console.log('Email sent');
});