const express = require('express');
const nodemailer = requre('nodemailer');
const bodyParser = require('body-parser');


const app = express();
const port  = 3000;

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use(express.static('public'));

app.post('/send-email', (rep, res)=>{
    const {name, email, number, message} = req.body;

   // Create transporter object using SMTP transport
   const transporter = nodemailer.createTransport({
    service: 'gmail', // e.g., Gmail, Yahoo, etc.
    auth: {
        user: 'thomasmaghanga003@gmail.com',
        pass: 'Gm@5460#Cottey'
    }
});

// Email message
const mailOptions = {
    from: name,
    to: 'thomasmaghanga003@gmail.com',
    subject: 'New Quote Request',
    text: `Name: ${name}\nEmail: ${email}\nPhone Number: ${number}\nMessage: ${message}`
};

// Send email
transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        console.log(error);
        res.status(500).send('Error sending email');
    } else {
        console.log('Email sent: ' + info.response);
        res.status(200).send('Email sent successfully');
    }
});
});

// Start server
app.listen(port, () => {
console.log(`Server running on port ${port}`);
});