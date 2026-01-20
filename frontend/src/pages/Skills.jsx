

const softSkills = ["Leadership", "Problem-Solving", "Analytical Skills", "Communication", "Presentation", "Team Collaboration"];

const csFundamentals = [
  { name: "Operating Systems", icon: "fas fa-desktop" },
  { name: "OOP", icon: "fas fa-building" },
  { name: "DBMS", icon: "fas fa-archive" },
  { name: "Computer Networks", icon: "fas fa-network-wired" }
];

function Skills() {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: "fas fa-keyboard",
      skills: [
        { name: "Java", icon: "fab fa-java", level: 90 },
        { name: "C", icon: "fas fa-cog", level: 85 },
        { name: "Python", icon: "fab fa-python", level: 88 }
      ]
    },
    {
      title: "Web Development",
      icon: "fas fa-globe",
      skills: [
        { name: "HTML", icon: "fab fa-html5", level: 95 },
        { name: "CSS", icon: "fab fa-css3", level: 90 },
        { name: "JavaScript", icon: "fab fa-js", level: 85 },
        { name: "React", icon: "fab fa-react", level: 82 },
        { name: "Node.js", icon: "fab fa-node-js", level: 78 },
        { name: "MongoDB", icon: "fas fa-leaf", level: 80 }
      ]
    },
    {
      title: "Tools & Platforms",
      icon: "fas fa-tools",
      skills: [
        { name: "Linux", icon: "fab fa-linux", level: 75 },
        { name: "Git", icon: "fab fa-git", level: 85 },
        { name: "GitHub", icon: "fab fa-github", level: 88 },
        { name: "Matlab", icon: "fas fa-chart-bar", level: 70 },
        { name: "AWS", icon: "fab fa-aws", level: 75 },
        { name: "VS Code", icon: "fas fa-code", level: 95 },
        { name: "IntelliJ IDEA", icon: "fas fa-laptop-code", level: 80 },
        { name: "MySQL", icon: "fas fa-database", level: 85 }
      ]
    },
    {
      title: "Libraries & Frameworks",
      icon: "fas fa-book",
      skills: [
        { name: "NumPy", icon: "fas fa-calculator", level: 80 },
        { name: "Pandas", icon: "fas fa-table", level: 78 },
        { name: "Matplotlib", icon: "fas fa-chart-line", level: 75 },
        { name: "Seaborn", icon: "fas fa-chart-bar", level: 70 },
        { name: "Tailwind CSS", icon: "fas fa-wind", level: 90 },
        { name: "Bootstrap", icon: "fas fa-crosshairs", level: 85 },
        { name: "EJS", icon: "fas fa-file-code", level: 75 },
        { name: "Express", icon: "fas fa-server", level: 80 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-16 bg-linear-to-b from-purple-100 to-purple-50 relative overflow-hidden border-b-4 border-purple-300/50">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-200/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-pink-200/30 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="text-purple-600 font-semibold text-lg tracking-wider uppercase">What I Excel At</span>
          <h2 className="text-5xl font-bold mt-2 bg-linear-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Skills & Expertise</h2>
          <div className="w-24 h-1 bg-linear-to-r from-purple-600 to-pink-600 mx-auto mt-4 rounded-full"></div>
        </div>
        
        <div className="space-y-16">
          {skillCategories.map((category, catIndex) => (
            <div key={catIndex} className="animate-fade-in-up" style={{ animationDelay: `${catIndex * 0.1}s` }}>
              <div className="flex items-center mb-8">
                <div className="w-12 h-12 bg-linear-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mr-4 shadow-lg">
                  <i className={`${category.icon} text-2xl text-white`}></i>
                </div>
                <h3 className="text-2xl font-bold text-gray-800">{category.title}</h3>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="group bg-white p-6 rounded-2xl shadow-lg border border-purple-100 card-hover">
                    <div className="flex items-center">
                      <i className={`${skill.icon} text-3xl mr-3 group-hover:scale-110 transition-transform`}></i>
                      <span className="text-lg font-semibold text-gray-800">{skill.name}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
          
          {/* CS Fundamentals */}
          <div>
            <div className="flex items-center mb-8">
              <div className="w-12 h-12 bg-linear-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mr-4 shadow-lg">
                <i className="fas fa-brain text-2xl text-white"></i>
              </div>
              <h3 className="text-2xl font-bold text-gray-800">CS Fundamentals</h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {csFundamentals.map((item, idx) => (
                <div key={idx} className="bg-white p-6 rounded-2xl shadow-lg border border-purple-100 text-center card-hover group">
                  <i className={`fas ${item.icon} text-4xl block mb-3 group-hover:scale-110 transition-transform text-purple-600`}></i>
                  <span className="text-lg font-semibold text-gray-800">{item.name}</span>
                </div>
              ))}
            </div>
          </div>
          
          {/* Soft Skills */}
          <div>
            <div className="flex items-center mb-8">
              <div className="w-12 h-12 bg-linear-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mr-4 shadow-lg">
                <i className="fas fa-lightbulb text-2xl text-white"></i>
              </div>
              <h3 className="text-2xl font-bold text-gray-800">Soft Skills</h3>
            </div>
            <div className="flex flex-wrap gap-4">
              {softSkills.map((skill, idx) => (
                <span 
                  key={idx} 
                  className="bg-linear-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
