import React from 'react';

function Footer() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const quickLinks = [
    { label: 'Home', id: 'intro' },
    { label: 'About', id: 'about' },
    { label: 'Education', id: 'education' },
    { label: 'Skills', id: 'skills' },
    { label: 'Experience', id: 'experience' },
    { label: 'Achievements', id: 'achievements' },
    { label: 'Contact', id: 'contact' }
  ];

  const socialLinks = [
    { icon: 'fab fa-linkedin', url: 'https://www.linkedin.com/in/saketh-pabbu-14342a291/', label: 'LinkedIn', color: 'hover:bg-blue-500' },
    { icon: 'fab fa-github', url: 'https://github.com/saketh169', label: 'GitHub', color: 'hover:bg-gray-700' },
    { icon: 'fab fa-twitter', url: 'https://x.com/PabbuSaketh', label: 'Twitter', color: 'hover:bg-sky-500' },
    { icon: 'fab fa-facebook', url: 'https://www.facebook.com/share/12MQ4JHgTgA/', label: 'Facebook', color: 'hover:bg-blue-600' },
    { icon: 'fas fa-code', url: 'https://leetcode.com/u/saketh1706/', label: 'LeetCode', color: 'hover:bg-orange-500' }
  ];

  return (
    <footer className="relative bg-linear-to-br from-gray-900 via-purple-900 to-gray-900 text-white overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-pink-500/10 rounded-full blur-3xl"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <h3 className="text-3xl font-bold bg-linear-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Saketh Pabbu
              </h3>
              <p className="text-purple-300 font-medium mt-1">Full-Stack Developer</p>
            </div>
            <p className="text-gray-400 leading-relaxed mb-6">
              Passionate Computer Science student driven to innovate through full-stack development, AI, and data science.
            </p>
            <div className="flex space-x-3">
              {socialLinks.map((social, idx) => (
                <a 
                  key={idx}
                  href={social.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  title={social.label}
                  className={`w-10 h-10 bg-white/10 rounded-full flex items-center justify-center ${social.color} hover:text-white transition-all duration-300 hover:scale-110`}
                >
                  <i className={`${social.icon} text-lg`}></i>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-white relative inline-block">
              Quick Links
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-linear-to-r from-purple-500 to-pink-500 rounded-full"></span>
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link, idx) => (
                <li key={idx}>
                  <button 
                    onClick={() => scrollToSection(link.id)}
                    className="text-gray-400 hover:text-purple-400 transition-all duration-300 flex items-center group"
                  >
                    <span className="w-0 h-0.5 bg-purple-500 group-hover:w-3 transition-all duration-300 mr-0 group-hover:mr-2"></span>
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-white relative inline-block">
              Get In Touch
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-linear-to-r from-purple-500 to-pink-500 rounded-full"></span>
            </h4>
            <div className="space-y-4">
              {[
                { icon: 'fas fa-envelope', text: 'sakethpabbu.works@gmail.com' },
                { icon: 'fas fa-phone', text: '+91 7075783143' },
                { icon: 'fas fa-map-marker-alt', text: 'Nellore, Andhra Pradesh' }
              ].map((item, idx) => (
                <div key={idx} className="flex items-start group">
                  <div className="w-8 h-8 bg-purple-500/20 rounded-lg flex items-center justify-center mr-3 group-hover:bg-purple-500/40 transition-colors">
                    <i className={`${item.icon} text-purple-400 text-sm`}></i>
                  </div>
                  <span className="text-gray-400 group-hover:text-gray-300 transition-colors">{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Newsletter / CTA */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-white relative inline-block">
              Let's Connect
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-linear-to-r from-purple-500 to-pink-500 rounded-full"></span>
            </h4>
            <p className="text-gray-400 mb-6">
              Open to opportunities and collaborations. Let's build something amazing together!
            </p>
            <button 
              onClick={() => scrollToSection('contact')}
              className="w-full py-3 bg-linear-to-r from-purple-600 to-pink-600 text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300 transform hover:-translate-y-1"
            >
              Send a Message
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} Saketh Pabbu. All Rights Reserved.
            </p>
            <p className="text-purple-400 font-semibold flex items-center">
              <span className="mr-2">✨</span> Building Tomorrow's Technology Today <span className="ml-2">🚀</span>
            </p>
          </div>
        </div>
      </div>
      
      {/* Scroll to top button */}
      <button 
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="absolute right-6 bottom-6 w-12 h-12 bg-linear-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center text-white shadow-lg hover:shadow-purple-500/30 transition-all duration-300 hover:-translate-y-1"
        aria-label="Scroll to top"
      >
        <i className="fas fa-arrow-up"></i>
      </button>
    </footer>
  );
}

export default Footer;