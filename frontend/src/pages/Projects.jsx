import React from 'react';

function Projects() {
  const projects = [
    {
      icon: "fas fa-image",
      category: "BTP Project",
      title: "Image Copy Detection using CNN, CV, DL",
      description: "Developed an advanced image copy detection system using Convolutional Neural Networks (CNN), Computer Vision (CV), and Deep Learning (DL) techniques for accurate image plagiarism detection and copyright protection.",
      link: "https://github.com/saketh169/BTP-Image-Copy-Detection.git",
      tags: ["CNN", "Computer Vision", "Deep Learning", "Image Processing", "Python"]
    },
    {
      icon: "fas fa-sitemap",
      category: "Cloud Computing",
      title: "A Hybrid Load Balancing Method to Achieve Quality of Service (QoS) in Cloud-based Environment",
      description: "Developed a hybrid load balancing algorithm combining Round Robin (RR) and Ant Colony Optimization (ACO) techniques to achieve optimal Quality of Service in cloud environments. Implemented on AWS platform.",
      link: "https://github.com/saketh169/Hybrid_load_balancer.git",
      tags: ["Cloud Computing", "Load Balancing", "AWS", "QoS", "ACO", "RR"]
    },
    {
      icon: "fas fa-car",
      category: "UVS Project",
      title: "Unmanned Vehicle Scheduling System",
      description: "Developed a scheduling system for unmanned vehicles using RDR and RAR techniques, inspired by IEEE Transactions. Ensures optimal resource utilization and scalability.",
      link: "https://github.com/saketh169/UVS_AI",
      tags: ["Python", "AI", "Scheduling"]
    },
    {
      icon: "fas fa-laptop",
      category: "Nutri Connect",
      title: "Nutri Connect Web Application",
      description: "Built a full-stack web app for digital nutrition consultations, featuring booking and personalized diet planning.",
      link: "https://github.com/saketh169/FFSD-NUTRI-CONNECT",
      tags: ["MERN Stack", "Full-Stack", "Healthcare"]
    },
    {
      icon: "fas fa-globe",
      category: "IOTA Project",
      title: "IoT-based Smart Jacket",
      description: "Creating an IoT-based smart jacket for ML-powered real-time data analytics with sensors and machine learning algorithms.",
      link: "https://github.com/saketh169/IOT_Based_Smart_Jacket.git",
      tags: ["IoT", "Machine Learning", "Sensors"]
    }
  ];

  return (
    <section id="samples" className="py-16 bg-linear-to-br from-purple-900 via-purple-800 to-indigo-900 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-pink-500/20 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="text-purple-300 font-semibold text-lg tracking-wider uppercase">Portfolio</span>
          <h2 className="text-5xl font-bold mt-2 text-white">Projects</h2>
          <div className="w-24 h-1 bg-linear-to-r from-purple-400 to-pink-400 mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-purple-400/30 hover:border-purple-400 hover:bg-white/15 transition-all duration-500 transform hover:-translate-y-2"
            >
              <div className="flex items-center justify-between mb-6">
                <i className={`${project.icon} text-purple-300 text-5xl group-hover:scale-110 transition-transform duration-300`}></i>
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
  );
}

export default Projects;