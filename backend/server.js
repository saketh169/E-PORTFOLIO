const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Create transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

// Email template functions
const createOwnerEmailTemplate = (name, email, subject, message) => `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>New Contact Message</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            color: #333;
            max-width: 600px;
            margin: 0 auto;
            background-color: #f4f4f4;
        }
        .container {
            background-color: #ffffff;
            margin: 20px;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }
        .header {
            background-color: #4a5568;
            color: white;
            padding: 20px;
            text-align: center;
            border-radius: 8px 8px 0 0;
        }
        .content {
            padding: 20px;
        }
        .field {
            margin-bottom: 15px;
        }
        .field-label {
            font-weight: bold;
            color: #2d3748;
        }
        .message-box {
            background-color: #f7fafc;
            border-left: 4px solid #4a5568;
            padding: 15px;
            margin: 15px 0;
        }
        .footer {
            background-color: #2d3748;
            color: white;
            text-align: center;
            padding: 15px;
            border-radius: 0 0 8px 8px;
            font-size: 12px;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>New Contact Message</h1>
            <p>You have received a new message from your portfolio contact form</p>
        </div>
        <div class="content">
            <div class="field">
                <div class="field-label">From:</div>
                <div>${name} (${email})</div>
            </div>
            <div class="field">
                <div class="field-label">Subject:</div>
                <div>${subject}</div>
            </div>
            <div class="field">
                <div class="field-label">Message:</div>
                <div class="message-box">${message.replace(/\n/g, '<br>')}</div>
            </div>
        </div>
        <div class="footer">
            Portfolio Contact System - Automated Message
        </div>
    </div>
</body>
</html>
`;

const createReplyEmailTemplate = (name) => `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Thank You for Contacting Me</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            color: #333;
            max-width: 600px;
            margin: 0 auto;
            background-color: #f4f4f4;
        }
        .container {
            background-color: #ffffff;
            margin: 20px;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }
        .header {
            background-color: #48bb78;
            color: white;
            padding: 20px;
            text-align: center;
            border-radius: 8px 8px 0 0;
        }
        .content {
            padding: 20px;
        }
        .signature {
            border-top: 1px solid #e2e8f0;
            padding-top: 20px;
            margin-top: 20px;
            text-align: center;
        }
        .footer {
            background-color: #2d3748;
            color: white;
            text-align: center;
            padding: 15px;
            border-radius: 0 0 8px 8px;
            font-size: 12px;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>Thank You for Your Message</h1>
        </div>
        <div class="content">
            <p>Dear ${name},</p>
            <p>Thank you for contacting me through my portfolio. I have received your message and will review it shortly.</p>
            <p>I typically respond to all inquiries within 24-48 hours. I appreciate your interest and look forward to connecting with you.</p>
            <p>Best regards,</p>
            <div class="signature">
                <strong>Saketh Pabbu</strong><br>
                Full Stack Developer<br>
                Portfolio: sakethpabbu.works@gmail.com
            </div>
        </div>
        <div class="footer">
            This is an automated response - Portfolio Contact System
        </div>
    </div>
</body>
</html>
`;

// Contact endpoint
app.post('/api/contact', async (req, res) => {
  const { name, email, subject, message } = req.body;

  // Validate input
  if (!name || !email || !subject || !message) {
    return res.status(400).json({
      success: false,
      message: 'All fields are required'
    });
  }

  try {
    // Email to portfolio owner
    const ownerMailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: `Portfolio Contact: ${subject}`,
      html: createOwnerEmailTemplate(name, email, subject, message)
    };

    // Auto-reply email to sender
    const replyMailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Thank you for contacting me',
      html: createReplyEmailTemplate(name)
    };

    // Send both emails
    await Promise.all([
      transporter.sendMail(ownerMailOptions),
      transporter.sendMail(replyMailOptions)
    ]);

    res.json({
      success: true,
      message: 'Message sent successfully. Thank you for contacting me!'
    });

  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to send message. Please try again later.'
    });
  }
});

app.get('/', (req, res) => {
  res.status(200).json({ status: 'ok', message: 'E-Portfoilo Backend Server is running' });
});


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

module.exports = app;