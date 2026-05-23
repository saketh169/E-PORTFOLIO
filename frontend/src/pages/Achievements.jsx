import Projects from './Projects';

function Achievements() {
  const achievements = [
    {
      icon: "fas fa-trophy",
      title: "Agentica AI Hackathon 2025",
      subtitle: "1st Runner-Up, 2025",
      description: "Won a cash prize of ₹20,000 for developing an AI-Powered Intelligent Document Management System.",
      color: "from-yellow-400 to-orange-500",
      highlight: true
    },
    {
      icon: "fas fa-laptop",
      title: "LeetCode: 500+ Problems Solved",
      subtitle: "2024–2025",
      description: "Solved over 500 algorithmic problems with a 1436 contest rating. Earned 50 & 100-day active badges in 2024–2025. Strong problem-solving and consistent competitive programming practice.",
      color: "from-green-500 to-emerald-600"
    },
    {
      icon: "fas fa-medal",
      title: "Campus Ambassador, Techfest IIT Bombay",
      subtitle: "172nd Rank out of 1000+",
      description: "Secured 172nd rank among top ambassadors with 7500 points for festival promotion and event management.",
      color: "from-indigo-500 to-purple-600"
    },
    {
      icon: "fas fa-code",
      title: "CodeX - DSA Coding Competition",
      subtitle: "11th Place, Utkrishta Fest",
      description: "Achieved 11th place in CodeX DSA Coding Competition among skilled programmers during Utkrishta Technical Fest by Gradient Club.",
      color: "from-pink-500 to-rose-600"
    },
    {
      icon: "fab fa-cloud",
      title: "Google Cloud Skill Boost",
      subtitle: "Arcade Trooper Tier, 2024",
      description: "Completed advanced labs and Arcade games over 6 months, earning Arcade Trooper Tier rewards. Demonstrated proficiency in cloud computing and GCP services.",
      color: "from-blue-500 to-cyan-600"
    }
  ];

  const certifications = [
    {
      icon: "fas fa-certificate",
      title: "Web3 and Blockchain Summer School",
      subtitle: "Web3SSH, IIIT Sri City, 05/2025",
      description: "Completed Web3SSH program, gaining expertise in blockchain technology and decentralized systems.",
      color: "from-cyan-500 to-blue-600"
    },
    {
      icon: "fas fa-brain",
      title: "Career Essentials in Generative AI",
      subtitle: "Microsoft & LinkedIn Learning, 06/2025",
      description: "Successfully completed certification in Generative AI and modern AI applications.",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: "fas fa-python",
      title: "Python Fundamentals for Beginners",
      subtitle: "Great Learning",
      description: "Completed comprehensive Python fundamentals certification covering core programming concepts and best practices.",
      color: "from-blue-600 to-indigo-600"
    }
  ];

  const extracurriculars = [
    {
      title: "Decoration Team Member",
      organization: "Abhisarga Fest | 02/2025 - 02/2026",
      description: "Designed and implemented creative designs to enhance the visual appeal and festive atmosphere of the college event.",
      icon: "fas fa-palette"
    },
    {
      title: "Independence Day Meraki Team",
      organization: "College Event | 08/2024",
      description: "Collaborated to craft thematic arrangements for college Independence Day celebrations, establishing a patriotic setting.",
      icon: "fas fa-flag"
    }
  ];

  return (
    <>
      {/* Achievements Section */}
      <section id="achievements" className="py-16 bg-linear-to-b from-purple-50 to-purple-100 relative overflow-hidden border-b-4 border-purple-200/50">
        <div className="absolute top-20 left-10 w-72 h-72 bg-yellow-200/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-200/30 rounded-full blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <span className="text-purple-600 font-semibold text-lg tracking-wider uppercase">Recognition</span>
            <h2 className="text-5xl font-bold mt-2 bg-linear-to-r from-yellow-500 via-purple-600 to-pink-600 bg-clip-text text-transparent">Achievements & Awards</h2>
            <div className="w-24 h-1 bg-linear-to-r from-yellow-500 to-pink-600 mx-auto mt-4 rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <div 
                key={index}
                className={`group relative bg-white rounded-3xl shadow-xl p-6 border-2 ${achievement.highlight ? 'border-yellow-300' : 'border-purple-100'} hover:border-transparent transition-all duration-500 transform hover:-translate-y-3 hover:shadow-2xl overflow-hidden`}
              >
                {/* Gradient overlay on hover */}
                <div className={`absolute inset-0 bg-linear-to-br ${achievement.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                
                {achievement.highlight && (
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 bg-linear-to-r from-yellow-400 to-orange-500 text-white text-xs font-bold rounded-full animate-pulse">
                      TOP ACHIEVEMENT
                    </span>
                  </div>
                )}
                
                <div className={`w-16 h-16 bg-linear-to-br ${achievement.color} rounded-2xl flex items-center justify-center text-3xl mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <i className={`${achievement.icon} text-white`}></i>
                </div>
                
                <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-purple-700 transition-colors">{achievement.title}</h3>
                <p className={`font-semibold mb-3 bg-linear-to-r ${achievement.color} bg-clip-text text-transparent`}>{achievement.subtitle}</p>
                <p className="text-gray-600 leading-relaxed">{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Projects />

      {/* Certifications Section */}
      <section id="certifications" className="py-16 bg-linear-to-b from-purple-100 to-white relative overflow-hidden border-b-4 border-purple-200/50">
        <div className="absolute top-20 right-10 w-72 h-72 bg-blue-200/30 rounded-full blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <span className="text-purple-600 font-semibold text-lg tracking-wider uppercase">Professional Development</span>
            <h2 className="text-5xl font-bold mt-2 bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Certifications</h2>
            <div className="w-24 h-1 bg-linear-to-r from-blue-600 to-purple-600 mx-auto mt-4 rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <div 
                key={index}
                className={`group relative bg-white rounded-3xl shadow-xl p-6 border-2 border-blue-100 hover:border-transparent transition-all duration-500 transform hover:-translate-y-3 hover:shadow-2xl overflow-hidden`}
              >
                <div className={`absolute inset-0 bg-linear-to-br ${cert.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                
                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-4">
                    <i className={`${cert.icon} text-4xl`} style={{background: `linear-gradient(to right, var(--tw-gradient-stops))`, backgroundClip: 'text', color: 'transparent'}}></i>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{cert.title}</h3>
                  <p className={`text-transparent bg-linear-to-r ${cert.color} bg-clip-text font-semibold mb-3`}>{cert.subtitle}</p>
                  <p className="text-gray-600 leading-relaxed">{cert.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Co-Curricular Section */}
      <section id="extracurricular" className="py-16 bg-linear-to-b from-purple-50 to-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-72 h-72 bg-pink-200/30 rounded-full blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <span className="text-purple-600 font-semibold text-lg tracking-wider uppercase">Beyond Academics</span>
            <h2 className="text-5xl font-bold mt-2 bg-linear-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Co-Curricular Activities</h2>
            <div className="w-24 h-1 bg-linear-to-r from-purple-600 to-pink-600 mx-auto mt-4 rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {extracurriculars.map((item, index) => (
              <div 
                key={index}
                className="group bg-white rounded-3xl shadow-xl p-8 border border-purple-100 hover:border-purple-300 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-2xl"
              >
                <div className="flex items-start gap-4">
                  <i className={`${item.icon} text-4xl group-hover:scale-110 transition-transform duration-300`}></i>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-1">{item.title}</h3>
                    <p className="text-purple-600 font-semibold mb-3">{item.organization}</p>
                    <p className="text-gray-600 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Achievements;