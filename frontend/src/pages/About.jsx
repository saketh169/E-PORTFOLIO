

function About() {
  // Personal info data
  const personalInfo = [
    { icon: "fas fa-user", label: "Name", value: "Saketh Pabbu" },
    { icon: "fas fa-envelope", label: "College Email", value: "saketh.p23@iiits.in" },
    { icon: "fas fa-envelope", label: "Personal Email", value: "sakethpabbu.works@gmail.com" },
    { icon: "fas fa-phone", label: "Phone", value: "+91 7075783143" },
    { icon: "fas fa-graduation-cap", label: "Education", value: "B.Tech CSE (2023-2027) @ IIIT Sri City (CGPA: 9.38)" },
    { icon: "fas fa-map-marker-alt", label: "Location", value: "Nellore, Andhra Pradesh, India" }
  ];

  const statements = [
    { icon: "fas fa-bullseye", text: "CS student at IIIT Sri City interested in MERN stack development and diving deep into machine learning and deep learning." },
    { icon: "fas fa-code", text: "Proficient in Java, C, and Python with 500+ problems solved on LeetCode (Rating: 1436)." },
    { icon: "fas fa-laptop", text: "Experienced in building full-stack web applications, designing scalable backend architectures, and developing user-friendly interfaces." },
    { icon: "fas fa-star", text: "Dedicated to solving real-world problems and delivering efficient software solutions." }
  ];

  return (
    <>
      <section id="about" className="py-12 sm:py-16 bg-linear-to-b from-purple-50 to-purple-100 relative overflow-hidden border-b-4 border-purple-200/50">
        {/* Background decoration */}
        <div className="absolute top-0 right-0 w-72 sm:w-96 h-72 sm:h-96 bg-purple-100 rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-48 sm:w-72 h-48 sm:h-72 bg-pink-100 rounded-full blur-3xl opacity-50 translate-y-1/2 -translate-x-1/2" />
        
        <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-10 sm:mb-16">
            <span className="text-purple-600 font-semibold text-sm sm:text-lg tracking-wider uppercase">PROFILE & OVERVIEW</span>
            <h2 className="text-3xl sm:text-5xl font-bold mt-2 bg-linear-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">About Me</h2>
            <div className="w-16 sm:w-24 h-1 bg-linear-to-r from-purple-600 to-pink-600 mx-auto mt-4 rounded-full" />
          </div>
          
          <div className="w-full sm:w-4/5 mx-auto">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl sm:rounded-3xl shadow-xl p-5 sm:p-8 md:p-12 border-2 border-purple-200 hover:border-purple-300 transition-all card-hover">
              <div className="space-y-6 sm:space-y-8">
                <div className="flex items-center space-x-3 sm:space-x-4 mb-4 sm:mb-6">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-linear-to-br from-purple-500 to-pink-500 rounded-xl sm:rounded-2xl flex items-center justify-center shadow-lg">
                    <i className="fas fa-user text-xl sm:text-3xl text-white" />
                  </div>
                  <h3 className="text-xl sm:text-3xl font-bold text-gray-800">Background</h3>
                </div>
                
              <p className="text-gray-600 leading-relaxed text-sm sm:text-lg w-full sm:w-4/5 mx-auto">
                Computer Science student at IIIT Sri City specializing in <strong>MERN stack full-stack applications</strong> and applied <strong>machine learning</strong>. Maintained a <strong>9.38 CGPA with consecutive Academic Excellence awards</strong>. Proficient in Java, C, and Python with <strong>500+ LeetCode problems solved</strong> (1436 contest rating). Experienced in building production-ready web apps, role-based backend architectures, cloud load balancing, and metric-learning CNN models.
              </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 pt-4 sm:pt-6">
                  {personalInfo.map((item, idx) => (
                    <div key={idx} className="flex items-center p-3 sm:p-4 bg-purple-50/80 rounded-xl border-2 border-purple-200 hover:border-purple-300 hover:bg-purple-100 transition-colors shadow-xs">
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
                      <p className="text-purple-100 text-xs sm:text-base">Seeking Full-Stack & Software Engineering Internships</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;