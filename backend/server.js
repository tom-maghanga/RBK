const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const multer = require('multer');

const app = express();
const port = 3000; // Or your desired port number

// Multer setup for handling file uploads
const upload = multer({ dest: 'uploads/' });

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Serve static files (optional)
app.use(express.static('public'));

// Route for handling form submissions
app.post('/send-email', upload.single('fileInput'), (req, res) => {
    const { name, email, number, message } = req.body;
    const file = req.file;

    // Create transporter object using SMTP transport
    const transporter = nodemailer.createTransport({
        service: 'gmail', // e.g., Gmail, Yahoo, etc.
        auth: {
            user: 'redberylkenya@gmail.com',
            pass: 'flfl wpsp uhyp vlxv'
        }
    });

    // Email message
    const mailOptions = {
        from: email,
        to: 'info@redberylkenya.com',
        subject: 'New Quote Request',
        text: `Name: ${name}\nEmail: ${email}\nPhone Number: ${number}\nMessage: ${message}`
    };

    // If file is uploaded, add it as an attachment
    if (file) {
        mailOptions.attachments = [{
            filename: file.originalname,
            path: file.path
        }];
    }

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
