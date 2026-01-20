

function Experience() {
  const experiences = [
    {
      title: "Full Stack Web Development and AI-Integrated Marketing Strategies Intern",
      company: "Myna Seva Foundation",
      period: "Jul 2025 - Aug 2025",
      icon: "fas fa-briefcase",
      color: "from-purple-500 to-indigo-600",
      description: "Developed dynamic web applications using Full-Stack Development technologies, including HTML, CSS, JavaScript, and MERN Stack. Integrated AI-driven marketing strategies to enhance user engagement.",
      skills: ["Full-Stack Development", "HTML", "CSS", "JavaScript", "MERN Stack", "AI Marketing"]
    },
    {
      title: "Decoration Team Member",
      company: "Abhisarga",
      period: "Mar 2025 - Apr 2025",
      icon: "fas fa-palette",
      color: "from-pink-500 to-rose-600",
      description: "Contributed to event planning and execution, focusing on creative design and logistics. Applied Team Leadership and Communication Skills to coordinate with team members.",
      skills: ["Team Leadership", "Communication", "Event Planning", "Creative Design"]
    },
    {
      title: "Campus Ambassador Program",
      company: "Techfest, IIT Bombay",
      period: "Jul 2024 - Dec 2024",
      icon: "fas fa-rocket",
      color: "from-blue-500 to-cyan-600",
      description: "Promoted Techfest across colleges, earning 7500 points and ranking in the top 1000 ambassadors. Utilized Communication Skills and Event Management.",
      skills: ["Communication", "Event Management", "Marketing", "Leadership"]
    },
    {
      title: "Python Internship",
      company: "CodSoft",
      period: "Jul 2024 - Aug 2024",
      icon: "fab fa-python",
      color: "from-green-500 to-emerald-600",
      description: "Built and optimized Python-based projects, applying Python programming skills to develop efficient solutions. Collaborated on real-world applications.",
      skills: ["Python", "Problem Solving", "Data Structures", "APIs"]
    }
  ];

  return (
    <section id="experience" className="py-16 bg-linear-to-b from-purple-100 to-purple-50 relative overflow-hidden border-b-4 border-purple-300/50">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-200/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-pink-200/30 rounded-full blur-3xl"></div>
      
      <div className="w-4/5 mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="text-purple-600 font-semibold text-lg tracking-wider uppercase">My Journey</span>
          <h2 className="text-5xl font-bold mt-2 bg-linear-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Work Experience</h2>
          <div className="w-24 h-1 bg-linear-to-r from-purple-600 to-pink-600 mx-auto mt-4 rounded-full"></div>
        </div>
        
        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-linear-to-b from-purple-500 via-pink-500 to-indigo-500 rounded-full hidden md:block"></div>
          
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div 
                key={index}
                className={`flex flex-col md:flex-row gap-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
              >
                {/* Content */}
                <div className="flex-1 md:w-1/2">
                  <div className={`bg-white rounded-3xl shadow-xl p-8 border border-purple-100 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 ${index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'}`}>
                    <div className="flex items-start justify-between mb-4">
                      <div className={`w-16 h-16 bg-linear-to-br ${exp.color} rounded-2xl flex items-center justify-center text-3xl shadow-lg`}>
                        <i className={`${exp.icon} text-white`}></i>
                      </div>
                      <span className="text-sm font-medium text-purple-600 bg-purple-100 px-4 py-2 rounded-full">
                        {exp.period}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{exp.title}</h3>
                    <p className={`text-transparent bg-linear-to-r ${exp.color} bg-clip-text font-semibold mb-4`}>{exp.company}</p>
                    <p className="text-gray-600 mb-6 leading-relaxed">{exp.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill, idx) => (
                        <span 
                          key={idx}
                          className="px-3 py-1 bg-purple-50 text-purple-600 text-sm rounded-full font-medium hover:bg-purple-100 transition-colors"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                
                {/* Timeline dot */}
                <div className="hidden md:flex items-center justify-center w-8">
                  <div className={`w-6 h-6 bg-linear-to-br ${exp.color} rounded-full border-4 border-white shadow-lg animate-pulse`}></div>
                </div>
                
                {/* Empty space for alternating layout */}
                <div className="hidden md:block flex-1 md:w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;