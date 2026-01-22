

function Education() {
  const educationData = [
    {
      icon: "fas fa-graduation-cap",
      degree: "Bachelor of Technology - BTech, Computer Science",
      institution: "Indian Institute of Information Technology, SriCity",
      grade: "CGPA: 9.33",
      period: "Aug 2023 - Jun 2027",
      description: "Actively learning and growing every day through advanced concepts in Data Structures, Algorithms, Full-Stack Development, and Database Systems. Engaged in competitive programming and tech events to enhance practical skills.",
      highlights: ["Data Structures", "Algorithms", "Full-Stack Development", "Database Systems"]
    },
    {
      icon: "fas fa-book",
      degree: "Intermediate / 12th Grade",
      institution: "Narayana Junior College, India",
      grade: "Grade: 9.84",
      period: "Jun 2021 - Jun 2023",
      description: "Excelled in Mathematics, Physics, and Chemistry, actively solving complex problems to build a strong foundation for computer science. Dedicated significant time preparing for competitive exams like JEE and EAMCET.",
      highlights: ["Mathematics", "Physics", "Chemistry", "JEE Preparation"]
    },
    {
      icon: "fas fa-school",
      degree: "10th Grade",
      institution: "Sri Netaji M.S.R Pilot High School",
      grade: "Grade: 10",
      period: "Jun 2010 - Jun 2020",
      description: "Studied at a reputed school and developed a strong foundation with great knowledge in Mathematics, Physics, Biology, and Social Studies. Participated in school-level coding and science projects.",
      highlights: ["Mathematics", "Physics", "Biology", "Science Projects"]
    }
  ];

  return (
    <section id="education" className="py-12 sm:py-16 bg-linear-to-b from-purple-50 to-purple-100 relative overflow-hidden border-b-8 border-purple-300/60">
      {/* Background decoration */}
      <div className="absolute top-20 left-0 w-48 sm:w-72 h-48 sm:h-72 bg-purple-200/30 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-0 w-72 sm:w-96 h-72 sm:h-96 bg-pink-200/30 rounded-full blur-3xl" />
      
      <div className="w-full sm:w-4/5 mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-10 sm:mb-16">
          <span className="text-purple-600 font-semibold text-sm sm:text-lg tracking-wider uppercase">My Academic Journey</span>
          <h2 className="text-3xl sm:text-5xl font-bold mt-2 bg-linear-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Education</h2>
          <div className="w-16 sm:w-24 h-1 bg-linear-to-r from-purple-600 to-pink-600 mx-auto mt-4 rounded-full" />
        </div>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 sm:left-8 md:left-1/2 top-0 bottom-0 w-1 bg-linear-to-b from-purple-500 via-pink-500 to-purple-500 rounded-full" />

          <div className="space-y-8 sm:space-y-12">
            {educationData.map((edu, index) => (
              <div key={index} className={`relative flex flex-col md:flex-row items-start ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                {/* Timeline dot */}
                <div className="absolute left-6 sm:left-8 md:left-1/2 -translate-x-1/2 w-12 h-12 sm:w-16 sm:h-16 bg-linear-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center shadow-lg z-10 timeline-pulse">
                  <i className={`${edu.icon} text-lg sm:text-2xl text-white`} />
                </div>
                
                {/* Content card */}
                <div className={`ml-20 sm:ml-24 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 lg:pr-16' : 'md:pl-12 lg:pl-16'}`}>
                  <div className="bg-white/90 backdrop-blur-sm p-5 sm:p-8 rounded-2xl sm:rounded-3xl shadow-xl border border-purple-100 card-hover group animate-fade-in-up" style={{ animationDelay: `${index * 0.3}s` }}>
                    <div className="flex flex-col sm:flex-row sm:flex-wrap justify-between items-start mb-3 sm:mb-4 gap-2">
                      <div className="flex-1">
                        <h3 className="text-base sm:text-xl font-bold text-gray-800 group-hover:text-purple-600 transition-colors">{edu.degree}</h3>
                        <p className="text-purple-600 font-semibold text-sm sm:text-base">{edu.institution}</p>
                        <p className="text-green-600 font-medium text-sm sm:text-base">{edu.grade}</p>
                      </div>
                      <span className="bg-linear-to-r from-purple-500 to-pink-500 text-white text-xs sm:text-sm px-3 sm:px-4 py-1 rounded-full font-medium">
                        {edu.period}
                      </span>
                    </div>
                    <p className="text-gray-600 mb-3 sm:mb-4 text-sm sm:text-base">{edu.description}</p>
                    <div className="flex flex-wrap gap-1.5 sm:gap-2">
                      {edu.highlights.map((highlight, idx) => (
                        <span key={idx} className="bg-purple-100 text-purple-700 text-xs sm:text-sm px-2 sm:px-3 py-1 rounded-full font-medium">
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;


