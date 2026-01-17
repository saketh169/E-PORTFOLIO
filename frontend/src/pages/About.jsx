import React from 'react';

function About() {
  return (
    <>
      <section id="about" className="py-16 bg-linear-to-b from-purple-50 to-purple-100 relative overflow-hidden border-b-4 border-purple-200/50">
        {/* Background decoration */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-100 rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-pink-100 rounded-full blur-3xl opacity-50 translate-y-1/2 -translate-x-1/2"></div>
        
        <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <span className="text-purple-600 font-semibold text-lg tracking-wider uppercase">Get to Know Me</span>
            <h2 className="text-5xl font-bold mt-2 bg-linear-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Personal Information</h2>
            <div className="w-24 h-1 bg-linear-to-r from-purple-600 to-pink-600 mx-auto mt-4 rounded-full"></div>
          </div>
          
          <div className="w-4/5 mx-auto">
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl p-8 md:p-12 border border-purple-100 card-hover">
              <div className="space-y-8">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-16 h-16 bg-linear-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center shadow-lg">
                    <span className="text-3xl">👋</span>
                  </div>
                  <h3 className="text-3xl font-bold text-gray-800">About Me</h3>
                </div>
                
                <p className="text-gray-600 leading-relaxed text-lg w-4/5 mx-auto">
                  Welcome to my portfolio! I'm a passionate Computer Science student driven to innovate through full-stack development, AI, and data science, with a goal to create impactful, scalable technology solutions. I am currently pursuing a Bachelor of Technology (B.Tech) in Computer Science and Engineering in my third year, actively honing my skills through academic projects, internships, and competitive programming.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6">
                  <div className="space-y-4">
                    <div className="flex items-center p-4 bg-purple-50 rounded-xl hover:bg-purple-100 transition-colors">
                      <span className="text-2xl mr-4">👤</span>
                      <div>
                        <p className="text-sm text-purple-600 font-medium">Name</p>
                        <p className="text-gray-800 font-semibold">Saketh Pabbu</p>
                      </div>
                    </div>
                    <div className="flex items-center p-4 bg-purple-50 rounded-xl hover:bg-purple-100 transition-colors">
                      <span className="text-2xl mr-4">🎂</span>
                      <div>
                        <p className="text-sm text-purple-600 font-medium">Age</p>
                        <p className="text-gray-800 font-semibold">19 Years</p>
                      </div>
                    </div>
                    <div className="flex items-center p-4 bg-purple-50 rounded-xl hover:bg-purple-100 transition-colors">
                      <span className="text-2xl mr-4">📍</span>
                      <div>
                        <p className="text-sm text-purple-600 font-medium">Location</p>
                        <p className="text-gray-800 font-semibold">Nellore, Andhra Pradesh, India</p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center p-4 bg-purple-50 rounded-xl hover:bg-purple-100 transition-colors">
                      <span className="text-2xl mr-4">📧</span>
                      <div>
                        <p className="text-sm text-purple-600 font-medium">Email</p>
                        <p className="text-gray-800 font-semibold">sakethpabbu.works@gmail.com</p>
                      </div>
                    </div>
                    <div className="flex items-center p-4 bg-purple-50 rounded-xl hover:bg-purple-100 transition-colors">
                      <span className="text-2xl mr-4">📱</span>
                      <div>
                        <p className="text-sm text-purple-600 font-medium">Phone</p>
                        <p className="text-gray-800 font-semibold">+91 7075783143</p>
                      </div>
                    </div>
                    <div className="flex items-center p-4 bg-purple-50 rounded-xl hover:bg-purple-100 transition-colors">
                      <span className="text-2xl mr-4">🎓</span>
                      <div>
                        <p className="text-sm text-purple-600 font-medium">Education</p>
                        <p className="text-gray-800 font-semibold">B.Tech CSE (UG-3) @ IIIT SriCity</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 p-4 bg-linear-to-r from-purple-500 to-pink-500 rounded-xl text-white">
                  <div className="flex items-center">
                    <span className="text-2xl mr-3">🚀</span>
                    <div>
                      <p className="font-semibold">Current Status</p>
                      <p className="text-purple-100">Actively Seeking Internship Opportunities</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="reflections" className="py-16 bg-linear-to-b from-purple-50 to-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-purple-600 font-semibold text-lg tracking-wider uppercase">My Journey</span>
            <h2 className="text-5xl font-bold mt-2 bg-linear-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Personal Statement</h2>
            <div className="w-24 h-1 bg-linear-to-r from-purple-600 to-pink-600 mx-auto mt-4 rounded-full"></div>
          </div>
          
          <div className="space-y-6 max-w-4xl mx-auto">
            {[
              {
                icon: "🎯",
                text: "I'm a third-year Computer Science student passionate about building innovative tech solutions and actively exploring AI, machine learning, and data science."
              },
              {
                icon: "💻",
                text: "As a passionate Computer Science student, I am driven by a love for creating impactful technology through web development, data science, and machine learning. My proficiency in Java, C, and Python has been sharpened by solving over 300 algorithmic challenges on LeetCode. I excel at building user-friendly web applications using the MERN stack."
              },
              {
                icon: "🤝",
                text: "I thrive on collaboration and continuous learning, leveraging my leadership, analytical, and communication skills to drive projects forward. My academic projects demonstrate my ability to blend technical expertise with real-world applications."
              },
              {
                icon: "🌟",
                text: "With a strong foundation in CS fundamentals and a commitment to innovation, I aim to contribute to cutting-edge projects in data science and machine learning, creating technology that makes a meaningful difference in the world."
              }
            ].map((item, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg p-6 border-l-4 border-purple-500 card-hover group">
                <div className="flex items-start">
                  <span className="text-3xl mr-4 group-hover:scale-110 transition-transform">{item.icon}</span>
                  <p className="text-gray-600 leading-relaxed">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default About;