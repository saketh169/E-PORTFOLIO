

function About() {
  // Personal info data
  const personalInfo = [
    { icon: "fas fa-user", label: "Name", value: "Saketh Pabbu" },
    { icon: "fas fa-birthday-cake", label: "Age", value: "19 Years" },
    { icon: "fas fa-map-marker-alt", label: "Location", value: "Nellore, Andhra Pradesh, India" },
    { icon: "fas fa-envelope", label: "Email", value: "sakethpabbu.works@gmail.com" },
    { icon: "fas fa-phone", label: "Phone", value: "+91 7075783143" },
    { icon: "fas fa-graduation-cap", label: "Education", value: "B.Tech CSE (UG-3) @ IIIT SriCity" }
  ];

  const statements = [
    { icon: "fas fa-bullseye", text: "I'm a third-year Computer Science student passionate about building innovative tech solutions and actively exploring AI, machine learning, and data science." },
    { icon: "fas fa-laptop", text: "As a passionate Computer Science student, I am driven by a love for creating impactful technology through web development, data science, and machine learning. My proficiency in Java, C, and Python has been sharpened by solving over 300 algorithmic challenges on LeetCode. I excel at building user-friendly web applications using the MERN stack." },
    { icon: "fas fa-handshake", text: "I thrive on collaboration and continuous learning, leveraging my leadership, analytical, and communication skills to drive projects forward. My academic projects demonstrate my ability to blend technical expertise with real-world applications." },
    { icon: "fas fa-star", text: "With a strong foundation in CS fundamentals and a commitment to innovation, I aim to contribute to cutting-edge projects in data science and machine learning, creating technology that makes a meaningful difference in the world." }
  ];

  return (
    <>
      <section id="about" className="py-12 sm:py-16 bg-linear-to-b from-purple-50 to-purple-100 relative overflow-hidden border-b-4 border-purple-200/50">
        {/* Background decoration */}
        <div className="absolute top-0 right-0 w-72 sm:w-96 h-72 sm:h-96 bg-purple-100 rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-48 sm:w-72 h-48 sm:h-72 bg-pink-100 rounded-full blur-3xl opacity-50 translate-y-1/2 -translate-x-1/2" />
        
        <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-10 sm:mb-16">
            <span className="text-purple-600 font-semibold text-sm sm:text-lg tracking-wider uppercase">Get to Know Me</span>
            <h2 className="text-3xl sm:text-5xl font-bold mt-2 bg-linear-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Personal Information</h2>
            <div className="w-16 sm:w-24 h-1 bg-linear-to-r from-purple-600 to-pink-600 mx-auto mt-4 rounded-full" />
          </div>
          
          <div className="w-full sm:w-4/5 mx-auto">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl sm:rounded-3xl shadow-xl p-5 sm:p-8 md:p-12 border border-purple-100 card-hover">
              <div className="space-y-6 sm:space-y-8">
                <div className="flex items-center space-x-3 sm:space-x-4 mb-4 sm:mb-6">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-linear-to-br from-purple-500 to-pink-500 rounded-xl sm:rounded-2xl flex items-center justify-center shadow-lg">
                    <i className="fas fa-user text-xl sm:text-3xl text-white" />
                  </div>
                  <h3 className="text-xl sm:text-3xl font-bold text-gray-800">About Me</h3>
                </div>
                
                <p className="text-gray-600 leading-relaxed text-sm sm:text-lg w-full sm:w-4/5 mx-auto">
                  Welcome to my portfolio! I'm a passionate Computer Science student driven to innovate through full-stack development, AI, and data science, with a goal to create impactful, scalable technology solutions. I am currently pursuing a Bachelor of Technology (B.Tech) in Computer Science and Engineering in my third year, actively honing my skills through academic projects, internships, and competitive programming.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 pt-4 sm:pt-6">
                  {personalInfo.map((item, idx) => (
                    <div key={idx} className="flex items-center p-3 sm:p-4 bg-purple-50 rounded-xl hover:bg-purple-100 transition-colors">
                      <i className={`${item.icon} text-xl sm:text-2xl mr-3 sm:mr-4 text-purple-600`} />
                      <div>
                        <p className="text-xs sm:text-sm text-purple-600 font-medium">{item.label}</p>
                        <p className="text-gray-800 font-semibold text-sm sm:text-base">{item.value}</p>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-4 sm:mt-6 p-3 sm:p-4 bg-linear-to-r from-purple-500 to-pink-500 rounded-xl text-white">
                  <div className="flex items-center">
                    <i className="fas fa-rocket text-xl sm:text-2xl mr-3" />
                    <div>
                      <p className="font-semibold text-sm sm:text-base">Current Status</p>
                      <p className="text-purple-100 text-xs sm:text-base">Actively Seeking Internship Opportunities</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="reflections" className="py-12 sm:py-16 bg-linear-to-b from-purple-50 to-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-16">
            <span className="text-purple-600 font-semibold text-sm sm:text-lg tracking-wider uppercase">My Journey</span>
            <h2 className="text-3xl sm:text-5xl font-bold mt-2 bg-linear-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Personal Statement</h2>
            <div className="w-16 sm:w-24 h-1 bg-linear-to-r from-purple-600 to-pink-600 mx-auto mt-4 rounded-full" />
          </div>
          
          <div className="space-y-4 sm:space-y-6 max-w-4xl mx-auto">
            {statements.map((item, index) => (
              <div key={index} className="bg-white rounded-xl sm:rounded-2xl shadow-lg p-4 sm:p-6 border-l-4 border-purple-500 card-hover group">
                <div className="flex items-start">
                  <i className={`${item.icon} text-xl sm:text-3xl mr-3 sm:mr-4 group-hover:scale-110 transition-transform text-purple-600`} />
                  <p className="text-gray-600 leading-relaxed text-sm sm:text-base">{item.text}</p>
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