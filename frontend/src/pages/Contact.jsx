import { useState } from 'react';
import axios from '../axios';

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await axios.post('/api/contact', formData);

      alert('Thank you for your message! I will get back to you soon.');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error('Error:', error);
      alert('Sorry, there was an error sending your message. Please try again or contact me directly at sakethpabbu.works@gmail.com');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <section id="contact" className="py-16 bg-linear-to-b from-purple-50 to-purple-100 relative overflow-hidden border-b-4 border-purple-200/50">
        {/* Background decoration */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-purple-200/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-pink-200/30 rounded-full blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <span className="text-purple-600 font-semibold text-lg tracking-wider uppercase">Get In Touch</span>
            <h2 className="text-5xl font-bold mt-2 bg-linear-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Contact Me</h2>
            <div className="w-24 h-1 bg-linear-to-r from-purple-600 to-pink-600 mx-auto mt-4 rounded-full"></div>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">Feel free to reach out for collaborations, opportunities, or just a friendly hello! You can contact me directly at <strong>sakethpabbu.works@gmail.com</strong> or use the form below to send your details.</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Info */}
            <div className="space-y-8">
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl p-8 border border-purple-100">
                <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                  <i className="fas fa-mailbox text-3xl mr-3"></i> Let's Connect
                </h3>
                
                <div className="space-y-6">
                  {[
                    { icon: "fas fa-envelope", label: "Email", value: "sakethpabbu.works@gmail.com", link: "mailto:sakethpabbu.works@gmail.com" },
                    { icon: "fas fa-phone", label: "Phone", value: "+91-7075783143", link: "tel:+917075783143" },
                    { icon: "fas fa-map-marker-alt", label: "Location", value: "Nellore, Andhra Pradesh, India", link: null }
                  ].map((item, idx) => (
                    <a 
                      key={idx} 
                      href={item.link || '#'} 
                      className="flex items-center p-4 bg-purple-50 rounded-2xl hover:bg-purple-100 transition-all duration-300 group"
                    >
                      <i className={`${item.icon} text-3xl mr-4 group-hover:scale-110 transition-transform`}></i>
                      <div>
                        <p className="text-sm text-purple-600 font-medium">{item.label}</p>
                        <p className="text-gray-800 font-semibold">{item.value}</p>
                      </div>
                    </a>
                  ))}
                </div>
                
                {/* Resume Download */}
                <div className="mt-8">
                  <p className="text-gray-600 font-medium mb-4">Download Resume</p>
                  <a 
                    href="/assets/Resume.pdf" 
                    download="Saketh_Pabbu_Resume.pdf"
                    className="inline-flex items-center px-6 py-3 bg-linear-to-r from-purple-600 to-pink-600 text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300 hover:scale-105"
                  >
                    <i className="fas fa-file text-xl mr-3"></i>
                    Download CV
                  </a>
                </div>
                
                <div className="mt-8">
                  <p className="text-gray-600 font-medium mb-4">Follow me on social media</p>
                  <div className="flex space-x-4">
                    {[
                      { icon: "fab fa-linkedin", url: "https://www.linkedin.com/in/saketh-pabbu-14342a291/", color: "hover:bg-blue-500", label: "LinkedIn" },
                      { icon: "fab fa-github", url: "https://github.com/saketh169", color: "hover:bg-gray-800", label: "GitHub" },
                      { icon: "fab fa-twitter", url: "https://x.com/PabbuSaketh", color: "hover:bg-sky-500", label: "Twitter" },
                      { icon: "fab fa-facebook", url: "https://www.facebook.com/share/12MQ4JHgTgA/", color: "hover:bg-blue-600", label: "Facebook" },
                      { icon: "fas fa-code", url: "https://leetcode.com/u/saketh1706/", color: "hover:bg-orange-500", label: "LeetCode" }
                    ].map((social, idx) => (
                      <a 
                        key={idx}
                        href={social.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        title={social.label}
                        className={`w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 ${social.color} hover:text-white transition-all duration-300 hover:scale-110 shadow-lg`}
                      >
                        <i className={`${social.icon} text-xl`}></i>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl p-8 border border-purple-100">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <i className="fas fa-envelope-open text-3xl mr-3"></i> Send a Message
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Your Name</label>
                    <input 
                      type="text" 
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full p-4 bg-purple-50 border-2 border-transparent rounded-xl focus:outline-none focus:border-purple-500 focus:bg-white transition-all duration-300" 
                      placeholder="Your Name"
                      required 
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Your Email</label>
                    <input 
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full p-4 bg-purple-50 border-2 border-transparent rounded-xl focus:outline-none focus:border-purple-500 focus:bg-white transition-all duration-300" 
                      placeholder="user@gmail.com"
                      required 
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                  <input 
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({...formData, subject: e.target.value})}
                    className="w-full p-4 bg-purple-50 border-2 border-transparent rounded-xl focus:outline-none focus:border-purple-500 focus:bg-white transition-all duration-300" 
                    placeholder="Subject"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                  <textarea 
                    rows="5"
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="w-full p-4 bg-purple-50 border-2 border-transparent rounded-xl focus:outline-none focus:border-purple-500 focus:bg-white transition-all duration-300 resize-none" 
                    placeholder="Your message here..."
                    required
                  ></textarea>
                </div>
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="btn-shine w-full py-4 bg-linear-to-r from-purple-600 to-pink-600 text-white rounded-xl font-bold text-lg hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300 disabled:opacity-70"
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    <span className="flex items-center justify-center">
                      Send Message <i className="fas fa-rocket ml-2"></i>
                    </span>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Resume Section */}
      <section id="resume" className="py-16 bg-linear-to-br from-purple-900 via-purple-700 to-indigo-800 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <span className="text-purple-200 font-semibold text-lg tracking-wider uppercase">Download</span>
          <h2 className="text-5xl font-bold mt-2 text-white mb-6">Resume & References</h2>
          <p className="text-purple-200 text-lg mb-8 max-w-2xl mx-auto">
            Explore my resume to discover my skills, projects, and achievements in detail. Ready to discuss opportunities!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/assets/Resume.pdf" 
              download
              className="btn-shine inline-flex items-center justify-center px-8 py-4 bg-white text-purple-700 rounded-full font-bold text-lg hover:bg-purple-50 transition-all duration-300 shadow-xl"
            >
              <i className="fas fa-file mr-2"></i> Download Resume
            </a>
            <button 
              onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-white/30 text-white rounded-full font-bold text-lg hover:bg-white/10 transition-all duration-300"
            >
              <i className="fas fa-comments mr-2"></i> Request References
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
