# Portfolio Backend - Nodemailer Server

This backend server handles contact form submissions and sends emails using Nodemailer.

## Setup Instructions

### 1. Install Dependencies
```bash
npm install
```

### 2. Configure Gmail App Password
1. Go to your Google Account settings
2. Enable 2-Factor Authentication
3. Go to "App passwords" in Security settings
4. Generate an app password for "Mail"
5. Copy the 16-character password

### 3. Update Environment Variables
Edit the `.env` file with your credentials:
```
EMAIL_USER=your-gmail@gmail.com
EMAIL_PASS=your-16-character-app-password
```

### 4. Start the Server
```bash
npm start
```

The server will run on `http://localhost:5000`

## API Endpoints

- `POST /api/contact` - Send contact form email
- `GET /api/health` - Health check

## Deployment

For production deployment, you'll need to:
1. Set up environment variables on your hosting platform
2. Update CORS settings for your domain
3. Use a proper email service instead of Gmail for better deliverability

## Security Notes

- Never commit the `.env` file to version control
- Use environment variables for all sensitive data
- Consider using services like SendGrid for production