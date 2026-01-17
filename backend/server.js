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

// Contact endpoint
app.post('/api/contact', async (req, res) => {
  const { name, email, message } = req.body;

  try {
    // Email to portfolio owner
    const ownerMailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: `Portfolio Contact: New Message from ${name}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>New Contact Message</title>
        </head>
        <body style="margin: 0; padding: 0; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; min-height: 100vh;">
          <div style="max-width: 600px; margin: 0 auto; background: white; border-radius: 16px; overflow: hidden; box-shadow: 0 20px 40px rgba(0,0,0,0.1);">
            <!-- Header -->
            <div style="background: linear-gradient(135deg, #7c3aed 0%, #a855f7 100%); padding: 40px 30px; text-align: center; color: white;">
              <h1 style="margin: 0; font-size: 28px; font-weight: 700; text-shadow: 0 2px 4px rgba(0,0,0,0.2);">📧 New Contact Message</h1>
              <p style="margin: 10px 0 0 0; opacity: 0.9; font-size: 16px;">Someone reached out to you!</p>
            </div>

            <!-- Content -->
            <div style="padding: 40px 30px;">
              <div style="background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%); border-radius: 12px; padding: 30px; margin-bottom: 30px; border: 1px solid #e5e7eb;">
                <div style="display: flex; align-items: center; margin-bottom: 20px;">
                  <div style="width: 50px; height: 50px; background: linear-gradient(135deg, #7c3aed 0%, #a855f7 100%); border-radius: 50%; display: flex; align-items: center; justify-content: center; color: white; font-size: 20px; margin-right: 15px;">
                    👤
                  </div>
                  <div>
                    <h3 style="margin: 0; color: #1f2937; font-size: 20px; font-weight: 600;">${name}</h3>
                    <p style="margin: 5px 0 0 0; color: #6b7280; font-size: 14px;">${email}</p>
                  </div>
                </div>

                <div style="background: white; border-radius: 8px; padding: 20px; border-left: 4px solid #7c3aed; box-shadow: 0 2px 8px rgba(0,0,0,0.05);">
                  <h4 style="margin: 0 0 15px 0; color: #374151; font-size: 16px; font-weight: 600;">📝 Message:</h4>
                  <div style="color: #4b5563; line-height: 1.6; white-space: pre-wrap;">${message.replace(/\n/g, '<br>')}</div>
                </div>
              </div>

              <div style="text-align: center; padding: 20px; background: #f8fafc; border-radius: 8px; border: 1px solid #e5e7eb;">
                <p style="margin: 0; color: #6b7280; font-size: 14px;">
                  💡 <strong>Tip:</strong> This message was sent through your portfolio contact form
                </p>
              </div>
            </div>

            <!-- Footer -->
            <div style="background: #1f2937; color: white; padding: 20px 30px; text-align: center;">
              <p style="margin: 0; font-size: 12px; opacity: 0.8;">
                Portfolio Contact System • Automated Message
              </p>
            </div>
          </div>
        </body>
        </html>
      `
    };

    // Auto-reply email to sender
    const replyMailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Thank you for contacting me - Portfolio Inquiry',
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Thank you for your message</title>
        </head>
        <body style="margin: 0; padding: 0; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; min-height: 100vh;">
          <div style="max-width: 600px; margin: 0 auto; background: white; border-radius: 16px; overflow: hidden; box-shadow: 0 20px 40px rgba(0,0,0,0.1);">
            <!-- Header -->
            <div style="background: linear-gradient(135deg, #10b981 0%, #059669 100%); padding: 40px 30px; text-align: center; color: white;">
              <h1 style="margin: 0; font-size: 28px; font-weight: 700; text-shadow: 0 2px 4px rgba(0,0,0,0.2);">🙏 Thank You!</h1>
              <p style="margin: 10px 0 0 0; opacity: 0.9; font-size: 16px;">Your message has been received</p>
            </div>

            <!-- Content -->
            <div style="padding: 40px 30px;">
              <div style="background: linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%); border-radius: 12px; padding: 30px; margin-bottom: 30px; border: 1px solid #bbf7d0;">
                <div style="text-align: center; margin-bottom: 25px;">
                  <div style="width: 60px; height: 60px; background: linear-gradient(135deg, #10b981 0%, #059669 100%); border-radius: 50%; display: inline-flex; align-items: center; justify-content: center; color: white; font-size: 24px; margin-bottom: 15px;">
                    ✨
                  </div>
                  <h2 style="margin: 0; color: #065f46; font-size: 24px; font-weight: 600;">Hello ${name}!</h2>
                </div>

                <div style="color: #374151; line-height: 1.7; font-size: 16px;">
                  <p style="margin: 0 0 20px 0;">Thank you for reaching out and showing interest in my portfolio! I'm truly grateful for your message.</p>

                  <div style="background: white; border-radius: 8px; padding: 20px; margin: 25px 0; border-left: 4px solid #10b981;">
                    <p style="margin: 0; font-weight: 500;">⏰ <strong>Response Time:</strong> I typically respond to all inquiries within 24-48 hours.</p>
                  </div>

                  <p style="margin: 15px 0;">In the meantime, feel free to explore more of my work and projects on my portfolio website. I'm always excited to connect with fellow developers and potential collaborators!</p>

                  <p style="margin: 20px 0 0 0; font-weight: 500;">Looking forward to connecting with you soon! 🚀</p>
                </div>
              </div>

              <!-- Signature -->
              <div style="text-align: center; padding: 30px; background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%); border-radius: 12px;">
                <div style="margin-bottom: 20px;">
                  <h3 style="margin: 0; color: #1f2937; font-size: 20px; font-weight: 600;">Saketh Pabbu</h3>
                  <p style="margin: 5px 0 0 0; color: #6b7280; font-size: 14px;">Full Stack Developer & Portfolio Creator</p>
                </div>
                <div style="width: 80px; height: 3px; background: linear-gradient(90deg, #7c3aed 0%, #10b981 100%); border-radius: 2px; margin: 0 auto;"></div>
              </div>

              <!-- Footer Note -->
              <div style="text-align: center; margin-top: 30px; padding: 20px; background: #f8fafc; border-radius: 8px; border: 1px solid #e5e7eb;">
                <p style="margin: 0; color: #6b7280; font-size: 13px; line-height: 1.5;">
                  🤖 <strong>Automated Response:</strong> This is an automated confirmation that your message has been received and will be reviewed shortly.
                </p>
              </div>
            </div>

            <!-- Footer -->
            <div style="background: #1f2937; color: white; padding: 20px 30px; text-align: center;">
              <p style="margin: 0; font-size: 12px; opacity: 0.8;">
                Portfolio Contact System • sakethpabbu.works@gmail.com
              </p>
            </div>
          </div>
        </body>
        </html>
      `
    };

    // Send both emails
    await Promise.all([
      transporter.sendMail(ownerMailOptions),
      transporter.sendMail(replyMailOptions)
    ]);

    res.json({ success: true, message: 'Email sent successfully!' });

  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ success: false, message: 'Failed to send email. Please try again.' });
  }
});

app.get('/', (req, res) => {
  res.status(200).json({ status: 'ok', message: 'E-Portfoilo Backend Server is running' });
});


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});