npm install sendgrid

function sendEmail(toList, userEmail, subjectText, emailText)
{
	var sendgrid = require('sendgrid')(jaj2610, statefarm);
	sendgrid.send({
		to: toList,
		from: userEmail,
		subject: subjectText,
		text: emailText
	});
}