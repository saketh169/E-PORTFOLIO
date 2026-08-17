function Projects() {
  const projects = [
    {
      icon: "fas fa-laptop",
      category: "MERN Stack",
      title: "Nutri Connect Web Application",
      period: "01/2025 – 06/2026",
      description: "Developed a MERN stack web app with 30-minute slot booking and 2-week advance scheduling. Implemented an MVC backend and React frontend with Redux state management and Tailwind CSS. Documented APIs with Swagger and integrated a CI/CD pipeline for deployment.",
      link: "https://github.com/saketh169/FFSD-NUTRI-CONNECT",
      tags: ["MERN Stack", "Render", "MVC", "Redux", "Swagger", "CI/CD Pipeline"]
    },
    {
      icon: "fas fa-copy",
      category: "Deep Learning",
      title: "Image Copy Detection for E-Commerce",
      period: "12/2025 – 05/2026",
      description: "Built an image copy detection system using a ConvNeXt-based Siamese/metric-learning network to identify original and edited duplicate product images. Evaluated robustness across multiple attack variations and optimized search using HNSW/ERNG graph indexing for faster retrieval on large image banks.",
      link: "https://github.com/saketh169/Image-Copy-Detection-for-E-Commerce-Platforms.git",
      tags: ["CNN", "Siamese Network", "OpenCV", "ConvNeXt", "HNSW/ERNG Graph Indexing"]
    },
    {
      icon: "fas fa-balance-scale",
      category: "Cloud Computing",
      title: "Hybrid Load Balancing for QoS in Cloud",
      period: "09/2025 – 12/2025",
      description: "Created a hybrid Round Robin and ACO load balancing algorithm, improving overall system efficiency. Tested scaling from 20 to 50 servers handling 100 to 2,000 tasks with high QoS and reliability.",
      link: "https://github.com/saketh169/Hybrid_load_balancer",
      tags: ["AWS", "Python", "Round Robin", "ACO Algorithm", "Cloud Scaling", "QoS"]
    },
    {
      icon: "fas fa-watch",
      category: "IoT & ML",
      title: "IoT-Based Smart Jacket with ML for Real-Time Analytics",
      period: "09/2025 – 12/2025",
      description: "Integrated 6 sensors into a wearable smart jacket to monitor vitals, utilizing 3 Kaggle datasets. Trained ML-based real-time anomaly detection models, integrating mobile and cloud alerts.",
      link: "https://github.com/saketh169/IOT_Based_Smart_Jacket",
      tags: ["IoT", "Machine Learning", "Python", "Sensors", "Real-Time Anomaly Detection"]
    },
    {
      icon: "fas fa-network-wired",
      category: "MERN Stack",
      title: "Nexus Platform - Local Service Booking",
      period: "11/2024 – 12/2024",
      description: "A web platform for booking local services with service provider verification and fraud detection. Built with React, Node.js, and MongoDB. Users can book services, leave reviews, and track bookings in real-time with payment integration.",
      link: "https://github.com/saketh169/Project-Nexus",
      tags: ["React", "Node.js", "MongoDB", "Service Booking", "Real-time", "Payment"]
    },
    {
      icon: "fas fa-leaf",
      category: "Deep Learning",
      title: "Food Ripeness Classification using CNN",
      period: "01/2025 – 03/2025",
      description: "Deep learning model to classify food freshness status using CNN and image analysis. Trained on multiple food categories and achieved strong accuracy in detecting fresh vs spoiled items. Built with PyTorch for practical e-commerce and food safety applications.",
      link: "https://github.com/saketh169/Food-Ripeness-Classification",
      tags: ["PyTorch", "CNN", "Image Classification", "Food Safety", "Deep Learning", "Python"]
    },
    {
      icon: "fas fa-map",
      category: "GIS & Remote Sensing",
      title: "IT Park Suitability Analysis - Bangalore",
      period: "01/2026 – 04/2026",
      description: "Comprehensive GIS analysis to identify optimal locations for IT park development in Bangalore using satellite imagery. Analyzed spectral data and spatial factors to generate suitability heatmaps. Used QGIS and Python for geospatial analysis and visualization.",
      link: "https://github.com/saketh169/Banglore-IT-Park-Suitability",
      tags: ["QGIS", "Satellite Analysis", "Spatial Mapping", "GIS", "Data Analysis", "Python"]
    },
    {
      icon: "fas fa-truck",
      category: "Reinforcement Learning",
      title: "Unmanned Vehicle Scheduling (UVS) AI",
      period: "01/2025 – 04/2025",
      description: "Machine learning project for autonomous vehicle task scheduling and delivery optimization. Implemented reinforcement learning algorithms including DQN and A2C to enable vehicles to make intelligent routing decisions. Optimized for urban logistics and supply-demand balancing.",
      link: "https://github.com/saketh169/UVS_AI",
      tags: ["Reinforcement Learning", "DQN", "A2C", "Vehicle Scheduling", "TensorFlow", "Python"]
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

        <div className="space-y-16">
          {/* Row 1: Nutri Connect & Image Copy Detection */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Nutri Connect */}
            {projects.slice(0, 1).map((project, index) => (
            <div
              key={index}
              className="group bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-purple-400/30 hover:border-purple-400 hover:bg-white/15 transition-all duration-500 transform hover:-translate-y-2"
            >
              <div className="flex items-center justify-between mb-6">
                <i className={`${project.icon} text-purple-300 text-5xl group-hover:scale-110 transition-transform duration-300`}></i>
                <span className="px-3 py-1 bg-purple-500/30 text-purple-200 text-sm rounded-full">{project.category}</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">{project.title}</h3>
              <p className="text-sm text-purple-400 mb-3 font-semibold">{project.period}</p>
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

            {/* Image Copy Detection */}
            {projects.slice(1, 2).map((project, index) => (
            <div
              key={index}
              className="group bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-purple-400/30 hover:border-purple-400 hover:bg-white/15 transition-all duration-500 transform hover:-translate-y-2"
            >
              <div className="flex items-center justify-between mb-6">
                <i className={`${project.icon} text-purple-300 text-5xl group-hover:scale-110 transition-transform duration-300`}></i>
                <span className="px-3 py-1 bg-purple-500/30 text-purple-200 text-sm rounded-full">{project.category}</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">{project.title}</h3>
              <p className="text-sm text-purple-400 mb-3 font-semibold">{project.period}</p>
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

          {/* Row 2: Hybrid Load Balancing & IoT Smart Jacket */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.slice(2, 4).map((project, index) => (
            <div
              key={index}
              className="group bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-purple-400/30 hover:border-purple-400 hover:bg-white/15 transition-all duration-500 transform hover:-translate-y-2"
            >
              <div className="flex items-center justify-between mb-6">
                <i className={`${project.icon} text-purple-300 text-5xl group-hover:scale-110 transition-transform duration-300`}></i>
                <span className="px-3 py-1 bg-purple-500/30 text-purple-200 text-sm rounded-full">{project.category}</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">{project.title}</h3>
              <p className="text-sm text-purple-400 mb-3 font-semibold">{project.period}</p>
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

          {/* Row 3: Nexus & Food Ripeness */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.slice(4, 6).map((project, index) => (
            <div
              key={index}
              className="group bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-purple-400/30 hover:border-purple-400 hover:bg-white/15 transition-all duration-500 transform hover:-translate-y-2"
            >
              <div className="flex items-center justify-between mb-6">
                <i className={`${project.icon} text-purple-300 text-5xl group-hover:scale-110 transition-transform duration-300`}></i>
                <span className="px-3 py-1 bg-purple-500/30 text-purple-200 text-sm rounded-full">{project.category}</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">{project.title}</h3>
              <p className="text-sm text-purple-400 mb-3 font-semibold">{project.period}</p>
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

          {/* Row 4: IT Park & UVS */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* IT Park */}
            {projects.slice(6, 7).map((project, index) => (
            <div
              key={index}
              className="group bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-purple-400/30 hover:border-purple-400 hover:bg-white/15 transition-all duration-500 transform hover:-translate-y-2"
            >
              <div className="flex items-center justify-between mb-6">
                <i className={`${project.icon} text-purple-300 text-5xl group-hover:scale-110 transition-transform duration-300`}></i>
                <span className="px-3 py-1 bg-purple-500/30 text-purple-200 text-sm rounded-full">{project.category}</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">{project.title}</h3>
              <p className="text-sm text-purple-400 mb-3 font-semibold">{project.period}</p>
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

            {/* UVS */}
            {projects.slice(7, 8).map((project, index) => (
            <div
              key={index}
              className="group bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-purple-400/30 hover:border-purple-400 hover:bg-white/15 transition-all duration-500 transform hover:-translate-y-2"
            >
              <div className="flex items-center justify-between mb-6">
                <i className={`${project.icon} text-purple-300 text-5xl group-hover:scale-110 transition-transform duration-300`}></i>
                <span className="px-3 py-1 bg-purple-500/30 text-purple-200 text-sm rounded-full">{project.category}</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">{project.title}</h3>
              <p className="text-sm text-purple-400 mb-3 font-semibold">{project.period}</p>
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
        
        {/* Old single column layout - replaced with 2-column grid */}
      </div>
    </section>
  );
}

export default Projects;