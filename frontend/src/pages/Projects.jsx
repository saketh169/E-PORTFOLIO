function Projects() {
  const projects = [
    {
      icon: "fas fa-copy",
      category: "Deep Learning & Research",
      title: "Image Copy Detection for E-Commerce Platforms",
      period: "12/2025 – 05/2026",
      bullets: [
        "Built an automated image copy detection system using a ConvNeXt-based Siamese metric-learning network to identify original vs edited duplicate product photos.",
        "Trained contrastive loss functions to differentiate authentic original product images from edited near-duplicates and semantically similar items.",
        "Evaluated model robustness across heavy transformation attacks including cropping, rotation, noise injection, color jittering, blur, and simulated screenshot overlays.",
        "Integrated HNSW (Hierarchical Navigable Small World) and ERNG graph indexing for high-speed approximate nearest-neighbor vector similarity search across large image banks.",
        "Achieved high retrieval accuracy on benchmark query sets, drastically reducing manual catalog moderation effort for e-commerce platforms."
      ],
      link: "https://github.com/saketh169/Image-Copy-Detection-for-E-Commerce-Platforms.git",
      tags: ["CNN", "Siamese Network", "OpenCV", "ConvNeXt", "HNSW Graph Indexing"]
    },
    {
      icon: "fas fa-laptop",
      category: "MERN Stack",
      title: "Nutri Connect Web Application",
      period: "01/2025 – 06/2026",
      bullets: [
        "Built a full-stack digital nutrition consultation web platform featuring 30-minute appointment slot booking and personalized diet plan management.",
        "Developed an MVC backend using Express.js and Node.js with MongoDB schemas for users, dietitians, bookings, diet plans, and lab reports.",
        "Implemented health parameter tracking across specialized domains including cardiac, diabetes, thyroid, gut health, and weight management.",
        "Built verification features for accredited dietitians and healthcare organizations alongside subscription and payment processing workflows.",
        "Documented RESTful API routes with Swagger UI for interactive testing and containerized the application with Docker for Render deployment."
      ],
      link: "https://github.com/saketh169/FFSD-NUTRI-CONNECT",
      tags: ["MERN Stack", "Render", "MVC", "Redux", "Swagger", "MongoDB"]
    },
    {
      icon: "fas fa-balance-scale",
      category: "Cloud Computing",
      title: "Hybrid Load Balancing for QoS in Cloud",
      period: "09/2025 – 12/2025",
      bullets: [
        "Formulated a hybrid cloud load balancing algorithm combining Round Robin scheduling with Ant Colony Optimization (ACO) and Q-Learning reinforcement learning.",
        "Simulated server scaling across 20 to 50 virtual servers handling 100 to 2,000 concurrent computational task workloads.",
        "Integrated AWS CloudWatch metrics logging and AWS DynamoDB database storage for tracking task allocation and server response time telemetry.",
        "Logged Q-Table state updates and dynamic exploration rates to optimize load balancing decisions under high-concurrency request spikes.",
        "Achieved a 40% improvement in system throughput while evaluating server utilization balance, response latency, and active server capacity."
      ],
      link: "https://github.com/saketh169/Hybrid_load_balancer",
      tags: ["AWS", "Python", "Round Robin", "ACO Algorithm", "Q-Learning"]
    },
    {
      icon: "fas fa-microchip",
      category: "IoT & ML",
      title: "IoT-Based Smart Jacket with ML Analytics",
      period: "09/2025 – 12/2025",
      bullets: [
        "Developed an IoT-based smart wearable jacket for continuous health monitoring with real-time feedback and machine learning telemetry analytics.",
        "Integrated vital health sensors (Heart Rate, SpO2, Body Temp, Body Position, Fall Detection) via Blynk IoT platform APIs.",
        "Connected ambient environmental sensors (Air Quality AQI, Ambient Temperature, Humidity) using an Arduino ESP32 Wi-Fi HTTP webhook server.",
        "Trained machine learning classifiers to process multi-sensor telemetry streams for health risk level classification and anomaly prediction.",
        "Developed a real-time web dashboard interface for live vital sign tracking, environmental hazard monitoring, and automated emergency alert notifications."
      ],
      link: "https://github.com/saketh169/IOT_Based_Smart_Jacket",
      tags: ["IoT", "Blynk API", "ESP32", "Flask", "Machine Learning"]
    },
    {
      icon: "fas fa-network-wired",
      category: "MERN Stack",
      title: "Nexus Platform - Local Service Booking",
      period: "11/2024 – 12/2024",
      bullets: [
        "Built a full-stack local service booking web application connecting clients with verified local service providers.",
        "Implemented role-based authentication and route protection across customer, provider, verifier, and admin access portals.",
        "Integrated provider credential verification workflows to validate local service credentials before platform listing.",
        "Developed service booking management, status tracking, and dynamic customer review scoring systems.",
        "Built responsive frontend interfaces using React, Redux state management, Tailwind CSS, and scalable Express/MongoDB REST APIs."
      ],
      link: "https://github.com/saketh169/Project-Nexus",
      tags: ["React", "Node.js", "MongoDB", "Redux", "Express"]
    },
    {
      icon: "fas fa-leaf",
      category: "Deep Learning",
      title: "Food Ripeness Classification using CNN",
      period: "01/2025 – 03/2025",
      bullets: [
        "Developed an 11-layer custom Convolutional Neural Network (CNN) in PyTorch to classify food freshness and ripeness (Fresh vs Spoiled across fruits, vegetables, bread, dairy).",
        "Trained and evaluated on ~2,700+ images from Kaggle Fresh and Spoiled Food dataset using Adam optimizer and ReduceLROnPlateau learning rate scheduling.",
        "Implemented data augmentation pipelines (scaling, random rotations, color jittering) using PyTorch transformation utilities.",
        "Built explainability tools including Saliency Maps (∂Loss/∂Input), Color Histograms, and Layer Activations to interpret model predictions.",
        "Deployed an interactive web dashboard for single-image visual analysis and automated batch classification demo testing."
      ],
      link: "https://github.com/saketh169/Food-Ripeness-Classification",
      tags: ["PyTorch", "CNN", "Streamlit", "Explainability", "Python"]
    },
    {
      icon: "fas fa-map",
      category: "GIS & Remote Sensing",
      title: "IT Park Suitability Analysis - Bangalore",
      period: "01/2026 – 04/2026",
      bullets: [
        "Conducted GIS-based Multi-Criteria Decision Analysis (MCDA) to evaluate IT park development suitability across the Mahadevapura IT Corridor, East Bengaluru in QGIS.",
        "Derived Landsat 9 spectral satellite indices including NDVI (vegetation), NDWI (water), NDBI (built-up), and LST (land surface temperature).",
        "Reprojected OpenStreetMap infrastructure layers (roads, railway/subway metro, bus stops, airport, power lines) to EPSG:32643 UTM projection and created proximity rasters.",
        "Generated legal/environmental constraint masks (NGT lake 50m buffers, railway 30m setbacks, protected forests 100m, existing settlements) using QGIS Raster Calculator and Cell Statistics.",
        "Produced reclassified weighted overlay suitability heatmaps categorized on a standardized 1–5 scale (RdYlGn color ramp) for urban development planning."
      ],
      link: "https://github.com/saketh169/Banglore-IT-Park-Suitability",
      tags: ["QGIS", "Landsat 9", "MCDA", "Spatial Analysis", "EPSG:32643"]
    },
    {
      icon: "fas fa-truck",
      category: "Reinforcement Learning",
      title: "Unmanned Vehicle Scheduling (UVS) AI",
      period: "01/2025 – 04/2025",
      bullets: [
        "Implemented an urban vehicle scheduling system using Priority Assignment Matching (PAM) for initial task assignment at t=0 based on IEEE Transactions research.",
        "Implemented Randomized Assignment Repositioning (RAR) and Randomized Deficit Repositioning (RDR) algorithms for dynamic vehicle repositioning at t>0.",
        "Formulated station charging capacity constraints, task delivery deadlines, vehicle battery electricity levels, and payload capacity metrics.",
        "Built an interactive desktop GUI application for real-time task assignment, repositioning configuration, and execution logging.",
        "Integrated spatial visualization modules to map vehicle movement trajectories and dynamic fleet scheduling analytics."
      ],
      link: "https://github.com/saketh169/UVS_AI",
      tags: ["PAM Algorithm", "RAR & RDR", "GUI Interface", "Matplotlib", "Python"]
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
          <span className="text-purple-300 font-semibold text-lg tracking-wider uppercase">FEATURED ENGINEERING PROJECTS</span>
          <h2 className="text-5xl font-bold mt-2 text-white">Projects</h2>
          <div className="w-24 h-1 bg-linear-to-r from-purple-400 to-pink-400 mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-white/10 backdrop-blur-sm rounded-3xl p-6 sm:p-8 border border-purple-400/30 hover:border-purple-400 hover:bg-white/15 transition-all duration-500 transform hover:-translate-y-2 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <i className={`${project.icon} text-purple-300 text-4xl group-hover:scale-110 transition-transform duration-300`}></i>
                  <span className="px-3 py-1 bg-purple-500/30 text-purple-200 text-xs sm:text-sm rounded-full font-medium">{project.category}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-1 group-hover:text-purple-300 transition-colors">{project.title}</h3>
                <p className="text-xs sm:text-sm text-purple-300 mb-4 font-mono">{project.period}</p>
                
                {/* Technical Bullet Points */}
                <ul className="space-y-2 mb-6 text-purple-100 text-sm leading-relaxed">
                  {project.bullets.map((point, pIdx) => (
                    <li key={pIdx} className="flex items-start">
                      <span className="text-purple-400 mr-2.5 font-bold text-base">•</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, idx) => (
                    <span key={idx} className="px-3 py-1 bg-purple-500/20 text-purple-300 text-xs rounded-full border border-purple-400/30 font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-purple-300 hover:text-white font-medium text-sm transition-colors"
                  >
                    <i className="fab fa-github mr-2 text-base"></i> View on GitHub
                    <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                    </svg>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;