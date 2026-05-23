# Saketh Pabbu - E-Portfolio Website

A modern, responsive portfolio website showcasing my skills, experience, and projects as a Full Stack Developer.

## 🚀 Live Demo
- View Portfolio : https://e-portfolio-sakethpabbu-zeta.vercel.app/
- backend server : https://e-portfolio-backend-zeta.vercel.app/

## 📋 Overview

This portfolio website is built with modern web technologies and features a clean, professional design with smooth animations and responsive layout. It includes multiple sections that highlight different aspects of my professional journey and technical expertise.

## 🛠️ Tech Stack

### Frontend
- **React 19** - Modern JavaScript library for building user interfaces
- **Vite** - Fast build tool and development server
- **Tailwind CSS** - Utility-first CSS framework for styling
- **React Router** - Client-side routing for navigation
- **Axios** - HTTP client for API requests

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web application framework
- **Nodemailer** - Email sending functionality
- **CORS** - Cross-origin resource sharing

## 📁 Project Structure

```
portfolio/
├── React/
│   ├── backend/          # Express.js server
│   │   ├── server.js     # Main server file with email functionality
│   │   ├── package.json  # Backend dependencies
│   │   └── .env         # Environment variables
│   └── frontend/         # React application
│       ├── src/
│       │   ├── components/
│       │   │   ├── Header.jsx    # Navigation component
│       │   │   └── Footer.jsx   # Footer component
│       │   ├── pages/
│       │   │   ├── Intro.jsx       # Landing/Hero section
│       │   │   ├── About.jsx       # About me section
│       │   │   ├── Skills.jsx      # Technical skills
│       │   │   ├── Experience.jsx  # Work experience
│       │   │   ├── Education.jsx   # Education background
│       │   │   ├── Achievements.jsx # Awards & achievements
│       │   │   └── Contact.jsx     # Contact form
│       │   ├── App.jsx          # Main app component
│       │   └── main.jsx         # App entry point
│       ├── package.json       # Frontend dependencies
│       └── vite.config.js     # Vite configuration
└── MVC/                    # Alternative MVC version
    ├── server.js          # Express server (MVC pattern)
    ├── package.json       # Dependencies
    └── views/             # EJS templates
```

## 🎯 Portfolio Sections

### 🏠 Intro Section
- Hero landing page with animated introduction
- Professional tagline and call-to-action buttons
- Smooth scroll animations and modern design

### 👨‍💻 About Section
- Personal introduction and background
- Professional summary and career goals
- Personal interests and motivation

### 🛠️ Skills Section
- Technical skills with proficiency levels
- Programming languages, frameworks, and tools
- Visual representation of skill expertise

### 💼 Experience Section
- Professional work experience timeline
- Company details, roles, and responsibilities
- Key achievements and contributions

### 🎓 Education Section
- Academic background and qualifications
- Degrees, certifications, and coursework
- Educational institutions and timelines

### 🏆 Achievements Section
- Awards, recognitions, and accomplishments
- Certifications and professional milestones
- Notable projects and contributions

### 📞 Contact Section
- Interactive contact form with validation
- Direct email integration via backend API
- Auto-reply functionality for user inquiries

## 🔧 Features

### ✨ Frontend Features
- **Responsive Design** - Works perfectly on all devices
- **Modern UI/UX** - Clean, professional design with gradients
- **Smooth Animations** - CSS transitions and hover effects
- **Fast Loading** - Optimized with Vite build tool
- **SEO Friendly** - Proper meta tags and structure

### 📧 Backend Features
- **Contact Form API** - Handles form submissions securely
- **Email Notifications** - Sends styled emails to portfolio owner
- **Auto-Reply System** - Automatic responses to user inquiries
- **Error Handling** - Comprehensive error management
- **CORS Support** - Cross-origin requests enabled

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn package manager
- Gmail account for email functionality

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/portfolio.git
   cd portfolio
   ```

2. **Install backend dependencies**
   ```bash
   cd React/backend
   npm install
   ```

3. **Install frontend dependencies**
   ```bash
   cd ../frontend
   npm install
   ```

4. **Configure environment variables**
   ```bash
   # In React/backend/.env
   EMAIL_USER=your-gmail@gmail.com
   EMAIL_PASS=your-app-password
   PORT=5000
   ```

5. **Start the backend server**
   ```bash
   cd ../backend
   npm start
   ```

6. **Start the frontend development server**
   ```bash
   cd ../frontend
   npm run dev
   ```

7. **Open your browser**
   ```
   http://localhost:5173
   ```

## 📧 Email Configuration

To enable the contact form functionality:

1. Enable 2-Factor Authentication on your Gmail account
2. Generate an App Password from Google Account settings
3. Add the App Password to your `.env` file as `EMAIL_PASS`

## 🎨 Customization

### Styling
- Modify `src/index.css` for global styles
- Update Tailwind classes in component files
- Customize color scheme in Tailwind config

### Content
- Update personal information in respective page components
- Modify email templates in `backend/server.js`
- Add new sections by creating new page components

### Adding New Sections
1. Create new component in `src/pages/`
2. Add route in `App.jsx`
3. Update navigation in `components/Header.jsx`

## 📱 Responsive Design

The portfolio is fully responsive and optimized for:
- 📱 Mobile devices (320px and up)
- 📟 Tablets (768px and up)
- 💻 Desktops (1024px and up)
- 🖥️ Large screens (1440px and up)

## 🔍 SEO Optimization

- Semantic HTML structure
- Proper meta tags and descriptions
- Fast loading times
- Mobile-friendly design
- Accessible navigation

## 🚀 Deployment

### Frontend Deployment
```bash
npm run build
# Deploy the dist/ folder to your hosting service
```

### Backend Deployment
- Deploy to services like Heroku, Railway, or Vercel
- Ensure environment variables are set
- Configure CORS for your frontend domain

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Contact

**Saketh Pabbu**
- Email: sakth.p23@iiits.in
- LinkedIn: [Your LinkedIn Profile]
- GitHub: [Your GitHub Profile]

---

⭐ **Star this repo if you found it helpful!**
