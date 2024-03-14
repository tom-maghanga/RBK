const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

const app = express();
const port = 3000; // Or your desired port number

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Serve static files (optional)
app.use(express.static('public'));

// Route for handling form submissions
app.post('/send-email', (req, res) => {
    const { name, email, number, message } = req.body;

    // Create transporter object using SMTP transport
    const transporter = nodemailer.createTransport({
        service: 'gmail', // e.g., Gmail, Yahoo, etc.
        auth: {
            user: 'thomasmaghanga003@gmail.com',
            pass: 'gwqu crpt cpbd dhwi'
        }
    });

    // Email message
    const mailOptions = {
        from: email,
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
