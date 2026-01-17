import React from 'react';

function Achievements() {
  const achievements = [
    {
      icon: "🏆",
      title: "Agentica AI Hackathon 2025",
      subtitle: "1st Runner-Up, 2025",
      description: "Won a cash prize of ₹20,000 for creating an AI-Powered Intelligent Document Management System.",
      color: "from-yellow-400 to-orange-500",
      highlight: true
    },
    {
      icon: "🎯",
      title: "Technova Coding Competition",
      subtitle: "Qualified Coding Round, 2024",
      description: "Successfully qualified for the coding round, demonstrating strong problem-solving and algorithmic skills.",
      color: "from-purple-500 to-indigo-600"
    },
    {
      icon: "💻",
      title: "LeetCode Streak Badges",
      subtitle: "2023–Present",
      description: "Solved over 300 algorithmic problems, earning 50-day and 100-day active streak badges.",
      color: "from-green-500 to-emerald-600"
    },
    {
      icon: "☁️",
      title: "Google Cloud Skill Boost",
      subtitle: "2023",
      description: "Received branded goodies for completing advanced cloud technology labs.",
      color: "from-blue-500 to-cyan-600"
    },
    {
      icon: "🥇",
      title: "CodeX by Gradient Club",
      subtitle: "2023",
      description: "Achieved 11th place in a competitive DSA Coding Competition among skilled programmers.",
      color: "from-pink-500 to-rose-600"
    },
    {
      icon: "🎯",
      title: "Campus Ambassador, Techfest IIT Bombay",
      subtitle: "2022",
      description: "Secured 172nd rank among top 1000 ambassadors, earning 7500 points for festival promotion.",
      color: "from-indigo-500 to-purple-600"
    }
  ];

  const projects = [
    {
      icon: "🖼️",
      category: "BTP Project",
      title: "Image Copy Detection using CNN, CV, DL",
      description: "Developed an advanced image copy detection system using Convolutional Neural Networks (CNN), Computer Vision (CV), and Deep Learning (DL) techniques for accurate image plagiarism detection and copyright protection.",
      link: "https://github.com/saketh169/BTP-Image-Copy-Detection.git",
      tags: ["CNN", "Computer Vision", "Deep Learning", "Image Processing", "Python"]
    },
    {
      icon: "☁️",
      category: "Cloud Computing",
      title: "A Hybrid Load Balancing Method to Achieve Quality of Service (QoS) in Cloud-based Environment",
      description: "Developed a hybrid load balancing algorithm combining Round Robin (RR) and Ant Colony Optimization (ACO) techniques to achieve optimal Quality of Service in cloud environments. Implemented on AWS platform.",
      link: "https://github.com/saketh169/Hybrid_load_balancer.git",
      tags: ["Cloud Computing", "Load Balancing", "AWS", "QoS", "ACO", "RR"]
    },
    {
      icon: "🚗",
      category: "UVS Project",
      title: "Unmanned Vehicle Scheduling System",
      description: "Developed a scheduling system for unmanned vehicles using RDR and RAR techniques, inspired by IEEE Transactions. Ensures optimal resource utilization and scalability.",
      link: "https://github.com/saketh169/UVS_AI",
      tags: ["Python", "AI", "Scheduling"]
    },
    {
      icon: "💻",
      category: "Nutri Connect",
      title: "Nutri Connect Web Application",
      description: "Built a full-stack web app for digital nutrition consultations, featuring booking and personalized diet planning.",
      link: "https://github.com/saketh169/FFSD-NUTRI-CONNECT",
      tags: ["MERN Stack", "Full-Stack", "Healthcare"]
    },
    {
      icon: "🌐",
      category: "IOTA Project",
      title: "IoT-based Smart Jacket",
      description: "Creating an IoT-based smart jacket for ML-powered real-time data analytics with sensors and machine learning algorithms.",
      link: "https://github.com/saketh169/IOT_Based_Smart_Jacket.git",
      tags: ["IoT", "Machine Learning", "Sensors"]
    }
  ];

  const extracurriculars = [
    {
      title: "Decoration Team Member",
      organization: "Abhisarga Fest | 2024",
      description: "Contributed creatively to enhance the visual appeal and ambiance of the college fest through innovative designs.",
      icon: "🎨"
    },
    {
      title: "Independence Day Meraki Team",
      organization: "College Event | 2023",
      description: "Worked on the decoration team for college Independence Day celebrations, creating a festive and patriotic ambiance.",
      icon: "🇮🇳"
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
                  {achievement.icon}
                </div>
                
                <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-purple-700 transition-colors">{achievement.title}</h3>
                <p className={`font-semibold mb-3 bg-linear-to-r ${achievement.color} bg-clip-text text-transparent`}>{achievement.subtitle}</p>
                <p className="text-gray-600 leading-relaxed">{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="samples" className="py-16 bg-linear-to-br from-purple-900 via-purple-800 to-indigo-900 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-pink-500/20 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <span className="text-purple-300 font-semibold text-lg tracking-wider uppercase">Portfolio</span>
            <h2 className="text-5xl font-bold mt-2 text-white">Academic Projects</h2>
            <div className="w-24 h-1 bg-linear-to-r from-purple-400 to-pink-400 mx-auto mt-4 rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div 
                key={index}
                className="group bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-purple-400/30 hover:border-purple-400 hover:bg-white/15 transition-all duration-500 transform hover:-translate-y-2"
              >
                <div className="flex items-center justify-between mb-6">
                  <span className="text-5xl group-hover:scale-110 transition-transform duration-300">{project.icon}</span>
                  <span className="px-3 py-1 bg-purple-500/30 text-purple-200 text-sm rounded-full">{project.category}</span>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors">{project.title}</h3>
                <p className="text-purple-200 mb-6 leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, idx) => (
                    <span key={idx} className="px-3 py-1 bg-purple-500/20 text-purple-300 text-sm rounded-full border border-purple-400/30">
                      {tag}
                    </span>
                  ))}
                </div>
                
                {project.link && (
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-purple-300 hover:text-white font-medium transition-colors"
                  >
                    <i className="fab fa-github mr-2"></i> View on GitHub
                    <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                    </svg>
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Extracurricular Section */}
      <section id="extracurricular" className="py-16 bg-linear-to-b from-purple-50 to-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-72 h-72 bg-pink-200/30 rounded-full blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <span className="text-purple-600 font-semibold text-lg tracking-wider uppercase">Beyond Academics</span>
            <h2 className="text-5xl font-bold mt-2 bg-linear-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Extracurricular & Volunteering</h2>
            <div className="w-24 h-1 bg-linear-to-r from-purple-600 to-pink-600 mx-auto mt-4 rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {extracurriculars.map((item, index) => (
              <div 
                key={index}
                className="group bg-white rounded-3xl shadow-xl p-8 border border-purple-100 hover:border-purple-300 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-2xl"
              >
                <div className="flex items-start gap-4">
                  <span className="text-4xl group-hover:scale-110 transition-transform duration-300">{item.icon}</span>
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