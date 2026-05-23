function Projects() {
  const projects = [
    {
      icon: "fas fa-laptop",
      category: "MERN Stack",
      title: "Nutri Connect Web Application",
      description: "A MERN stack nutrition platform with 30-minute slot booking and 2-week advance scheduling. Built with React frontend using Redux and Tailwind CSS, Node.js backend with MVC structure. Containerized with Docker, documented APIs with Swagger, integrated CI/CD pipeline. Deployed on Render.",
      link: "https://github.com/saketh169/FFSD-NUTRI-CONNECT",
      tags: ["React", "Node.js", "MongoDB", "Redux", "Docker", "Swagger"]
    },
    {
      icon: "fas fa-copy",
      category: "Deep Learning",
      title: "Image Copy Detection for E-Commerce",
      description: "Built a ConvNeXt Siamese network with 2 parallel CNNs using OpenCV to detect duplicate and edited images. Trained on CIFAR, UCID, Flickr, and Amazon datasets. Achieved over 85% accuracy on queries for e-commerce applications.",
      link: "https://github.com/saketh169/Image-Copy-Detection-for-E-Commerce-Platforms.git",
      tags: ["Siamese Networks", "CNN", "OpenCV", "Deep Learning", "85% Accuracy", "Python"]
    },
    {
      icon: "fas fa-balance-scale",
      category: "Cloud Computing",
      title: "Hybrid Load Balancing for QoS in Cloud",
      description: "Created a hybrid load balancing algorithm combining Round Robin and ACO algorithms. Tested scaling from 20 to 50 servers handling 100 to 2,000 tasks. Improved efficiency by 40% while maintaining high QoS and reliability. Built with AWS.",
      link: "https://github.com/saketh169/Hybrid_load_balancer",
      tags: ["AWS", "Load Balancing", "ACO Algorithm", "Python", "40% Improvement", "QoS"]
    },
    {
      icon: "fas fa-watch",
      category: "IoT & ML",
      title: "IoT-Based Smart Jacket with ML Analytics",
      description: "Wearable IoT system integrating 6 sensors to monitor vitals using 3 Kaggle datasets. Implemented ML-based real-time anomaly detection achieving 95% accuracy. Integrated mobile and cloud alerts for emergency response and health monitoring.",
      link: "https://github.com/saketh169/IOT_Based_Smart_Jacket",
      tags: ["IoT", "Machine Learning", "Sensors", "Real-Time Analytics", "95% Accuracy", "Python"]
    },
    {
      icon: "fas fa-network-wired",
      category: "MERN Stack",
      title: "Nexus Platform - Local Service Booking",
      description: "A web platform for booking local services with service provider verification and fraud detection. Built with React, Node.js, and MongoDB. Users can book services, leave reviews, and track bookings in real-time with payment integration.",
      link: "https://github.com/saketh169/Project-Nexus",
      tags: ["React", "Node.js", "MongoDB", "Service Booking", "Real-time", "Payment"]
    },
    {
      icon: "fas fa-leaf",
      category: "Deep Learning",
      title: "Food Ripeness Classification using CNN",
      description: "Deep learning model to classify food freshness status using CNN and image analysis. Trained on multiple food categories and achieved strong accuracy in detecting fresh vs spoiled items. Built with PyTorch for practical e-commerce and food safety applications.",
      link: "https://github.com/saketh169/Food-Ripeness-Classification",
      tags: ["PyTorch", "CNN", "Image Classification", "Food Safety", "Deep Learning", "Python"]
    },
    {
      icon: "fas fa-map",
      category: "GIS & Remote Sensing",
      title: "IT Park Suitability Analysis - Bangalore",
      description: "Comprehensive GIS analysis to identify optimal locations for IT park development in Bangalore using satellite imagery. Analyzed spectral data and spatial factors to generate suitability heatmaps. Used QGIS and Python for geospatial analysis and visualization.",
      link: "https://github.com/saketh169/Banglore-IT-Park-Suitability",
      tags: ["QGIS", "Satellite Analysis", "Spatial Mapping", "GIS", "Data Analysis", "Python"]
    },
    {
      icon: "fas fa-truck",
      category: "Reinforcement Learning",
      title: "Unmanned Vehicle Scheduling (UVS) AI",
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
              <p className="text-sm text-purple-400 mb-3 font-semibold">2024</p>
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
              <p className="text-sm text-purple-400 mb-3 font-semibold">Jun 2024 - Sep 2024</p>
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
              <p className="text-sm text-purple-400 mb-3 font-semibold">{index === 0 ? "Oct 2024 - Dec 2024" : "Aug 2024 - Dec 2024"}</p>
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
              <p className="text-sm text-purple-400 mb-3 font-semibold">{index === 0 ? "Nov 2024 - Dec 2024" : "Jan 2025 - Mar 2025"}</p>
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
              <p className="text-sm text-purple-400 mb-3 font-semibold">Jan 2026 - Apr 2026</p>
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
              <p className="text-sm text-purple-400 mb-3 font-semibold">Jan 2025 - Apr 2025</p>
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