import React from 'react';

function Skills() {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: "⌨️",
      skills: [
        { name: "Java", icon: "☕", level: 90 },
        { name: "C", icon: "⚙️", level: 85 },
        { name: "Python", icon: "🐍", level: 88 }
      ]
    },
    {
      title: "Web Development",
      icon: "🌐",
      skills: [
        { name: "HTML", icon: "📄", level: 95 },
        { name: "CSS", icon: "🎨", level: 90 },
        { name: "JavaScript", icon: "⚡", level: 85 },
        { name: "React", icon: "⚛️", level: 82 },
        { name: "Node.js", icon: "🟢", level: 78 },
        { name: "MongoDB", icon: "🍃", level: 80 }
      ]
    },
    {
      title: "Tools & Platforms",
      icon: "🛠️",
      skills: [
        { name: "Linux", icon: "🐧", level: 75 },
        { name: "Git", icon: "📋", level: 85 },
        { name: "GitHub", icon: "🐙", level: 88 },
        { name: "Matlab", icon: "📊", level: 70 },
        { name: "AWS", icon: "☁️", level: 75 },
        { name: "VS Code", icon: "💻", level: 95 },
        { name: "IntelliJ IDEA", icon: "🧠", level: 80 },
        { name: "MySQL", icon: "🗄️", level: 85 }
      ]
    },
    {
      title: "Libraries & Frameworks",
      icon: "📚",
      skills: [
        { name: "NumPy", icon: "🔢", level: 80 },
        { name: "Pandas", icon: "🐼", level: 78 },
        { name: "Matplotlib", icon: "📈", level: 75 },
        { name: "Tailwind CSS", icon: "💨", level: 90 },
        { name: "Bootstrap", icon: "🎯", level: 85 }
      ]
    }
  ];

  const softSkills = ["Leadership", "Problem-Solving", "Analytical Skills", "Communication", "Presentation", "Team Collaboration"];

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
                  <span className="text-2xl">{category.icon}</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-800">{category.title}</h3>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="group bg-white p-6 rounded-2xl shadow-lg border border-purple-100 card-hover">
                    <div className="flex items-center">
                      <span className="text-3xl mr-3 group-hover:scale-110 transition-transform">{skill.icon}</span>
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
                <span className="text-2xl">🧠</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-800">CS Fundamentals</h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { name: "Operating Systems", icon: "💻" },
                { name: "OOP", icon: "🏗️" },
                { name: "DBMS", icon: "🗃️" },
                { name: "Computer Networks", icon: "🌐" }
              ].map((item, idx) => (
                <div key={idx} className="bg-white p-6 rounded-2xl shadow-lg border border-purple-100 text-center card-hover group">
                  <span className="text-4xl block mb-3 group-hover:scale-110 transition-transform">{item.icon}</span>
                  <span className="text-lg font-semibold text-gray-800">{item.name}</span>
                </div>
              ))}
            </div>
          </div>
          
          {/* Soft Skills */}
          <div>
            <div className="flex items-center mb-8">
              <div className="w-12 h-12 bg-linear-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mr-4 shadow-lg">
                <span className="text-2xl">💡</span>
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
