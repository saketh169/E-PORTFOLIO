

function Experience() {
  const experiences = [
    {
      title: "Full Stack Developer Intern",
      company: "Code My FYP (Virtual)",
      period: "07/2026 – 08/2026",
      icon: "fas fa-code-branch",
      color: "from-purple-600 to-indigo-600",
      description: "Developed a comprehensive School ERP platform with granular role-based access control and scalable web components.",
      bullets: [
        "Architected a School ERP system with role-based access control (RBAC) across super admin, principal, teacher, and student portals.",
        "Built modular full-stack UI components in React and optimized backend API response handling in Express/Node.js.",
        "Collaborated in a team of 3 using GitLab for version control, merge requests, code reviews, and industry-standard workflows."
      ],
      skills: ["React", "Node.js", "Role-Based Access Control", "REST APIs", "GitLab", "Team Collaboration"]
    },
    {
      title: "UI/UX & Web Design Intern",
      company: "InAmigos Foundation (Virtual)",
      period: "08/2025 – 09/2025",
      icon: "fas fa-figma",
      color: "from-emerald-500 to-teal-600",
      description: "Analyzed NGO web platforms and designed high-fidelity UI/UX feature proposals and Figma wireframes.",
      bullets: [
        "Analyzed NGO website architecture to identify usability gaps, navigation friction, and transparency improvement opportunities.",
        "Created interactive wireframes, component libraries, and high-fidelity feature proposals in Figma to optimize donation flows.",
        "Redesigned volunteer engagement interfaces and community outreach pages to boost donor trust and user retention."
      ],
      skills: ["Figma", "UI/UX Design", "Wireframing", "Usability Testing", "Web Design", "Design Thinking"]
    },
    {
      title: "Full Stack Web Development & AI-Integrated Marketing Intern",
      company: "Myna Seva Foundation (Virtual)",
      period: "07/2025 – 08/2025",
      icon: "fas fa-laptop-code",
      color: "from-amber-500 to-orange-600",
      description: "Completed a 4-week internship focused on Full Stack Web Development and AI-Integrated Marketing Strategies.",
      bullets: [
        "Architected and customized responsive website platforms across Wix, Google Sites, WordPress, and Blogger to expand community reach.",
        "Formulated smart AI-integrated marketing strategies and promotional campaigns to amplify non-profit visibility and engagement.",
        "Collaborated through regular instructor-led reviews and team meetings to execute web building and digital outreach initiatives."
      ],
      skills: ["Full Stack Web Dev", "WordPress", "Wix", "Google Sites", "Blogger", "AI Marketing", "Digital Strategy"]
    }
  ];

  return (
    <section id="experience" className="py-16 bg-linear-to-b from-purple-100 to-purple-50 relative overflow-hidden border-b-4 border-purple-300/50">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-200/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-pink-200/30 rounded-full blur-3xl"></div>
      
      <div className="w-4/5 mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="text-purple-600 font-semibold text-lg tracking-wider uppercase">WORK EXPERIENCE & INTERNSHIPS</span>
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
                    <h3 className="text-2xl font-bold text-gray-900 mb-1">{exp.company}</h3>
                    <h4 className={`text-base font-semibold text-transparent bg-linear-to-r ${exp.color} bg-clip-text mb-4`}>{exp.title}</h4>
                    {exp.bullets ? (
                      <ul className="space-y-2 text-gray-600 mb-6 text-sm sm:text-base leading-relaxed">
                        {exp.bullets.map((bullet, bIdx) => (
                          <li key={bIdx} className="flex items-start gap-2">
                            <span className="text-purple-600 font-bold mt-1">•</span>
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p className="text-gray-600 mb-6 leading-relaxed">{exp.description}</p>
                    )}
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