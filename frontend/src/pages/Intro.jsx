// Social links data
const socialLinks = [
  { href: "https://www.linkedin.com/in/saketh-pabbu-14342a291/", icon: "fab fa-linkedin-in", hoverBg: "hover:bg-[#0077B5]" },
  { href: "https://github.com/saketh169", icon: "fab fa-github", hoverBg: "hover:bg-white hover:text-purple-700" },
  { href: "https://x.com/PabbuSaketh", icon: "fab fa-twitter", hoverBg: "hover:bg-[#1DA1F2]" },
  { href: "https://www.facebook.com/share/12MQ4JHgTgA/", icon: "fab fa-facebook", hoverBg: "hover:bg-[#1877F2]" },
  { href: "https://leetcode.com/u/saketh1706/", icon: "fas fa-code", hoverBg: "hover:bg-[#FFA116] hover:text-black" }
];

// Scroll helper
const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

function Intro() {
  return (
    <section id="intro" className="min-h-screen bg-linear-to-br from-purple-900 via-purple-700 to-indigo-800 text-white flex items-center pt-24 sm:pt-32 pb-16 sm:pb-20 relative overflow-hidden border-b-4 border-purple-500/30">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-48 sm:w-64 h-48 sm:h-64 bg-purple-500/15 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-64 sm:w-80 h-64 sm:h-80 bg-indigo-500/15 rounded-full blur-3xl animate-float delay-500" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 sm:w-96 h-72 sm:h-96 bg-pink-500/8 rounded-full blur-3xl" />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8 lg:gap-12 items-center">
          {/* Left - Introduction */}
          <div className="space-y-4 sm:space-y-6 animate-fade-in-left mt-8 sm:mt-16 xl:col-span-1 px-2 sm:px-0 sm:-ml-4 lg:-ml-8">
            <div className="space-y-2">
              <p className="text-purple-200 text-sm sm:text-lg font-medium tracking-wider uppercase">Welcome to my portfolio</p>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
                Hello, I'm <br />
                <span className="bg-linear-to-r from-yellow-300 via-pink-300 to-purple-300 bg-clip-text text-transparent animate-gradient bg-size-[200%_auto]">
                  Saketh Pabbu
                </span>
              </h1>
            </div>
            <p className="text-lg sm:text-xl md:text-2xl text-purple-100 font-light">
              A Passionate <span className="font-semibold text-yellow-300">Full-Stack Developer</span>
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-3 sm:gap-4 pt-2 sm:pt-4">
              <button 
                onClick={() => scrollTo('contact')} 
                className="btn-shine px-5 sm:px-8 py-2.5 sm:py-4 bg-white text-purple-700 rounded-full font-bold text-sm sm:text-lg hover:bg-purple-50 hover:scale-105 transition-all duration-300 shadow-xl shadow-purple-900/30"
              >
                Get in Touch
              </button>
              <button 
                onClick={() => scrollTo('achievements')} 
                className="px-5 sm:px-8 py-2.5 sm:py-4 border-2 border-white/30 text-white rounded-full font-bold text-sm sm:text-lg hover:bg-white/10 hover:border-white/50 transition-all duration-300 backdrop-blur-sm"
              >
                View Projects
              </button>
            </div>
            
            {/* Social Icons */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
              <span className="text-purple-200 text-xs sm:text-sm font-medium">Connect with me:</span>
              <div className="flex gap-2 sm:gap-3">
                {socialLinks.map((link, idx) => (
                  <a 
                    key={idx}
                    href={link.href} 
                    target={link.external !== false ? "_blank" : undefined}
                    rel={link.external !== false ? "noopener noreferrer" : undefined}
                    className={`w-9 h-9 sm:w-10 sm:h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white ${link.hoverBg} transition-all duration-300 hover:scale-110 border border-white/20`}
                  >
                    <i className={`${link.icon} text-base sm:text-lg`} />
                  </a>
                ))}
              </div>
            </div>
            
            {/* CV Download */}
            <a 
              href="/assets/Resume.pdf" 
              download="Saketh_Pabbu_Resume.pdf"
              className="inline-flex items-center gap-2 text-purple-200 hover:text-white text-xs sm:text-sm font-medium px-3 sm:px-4 py-2 border border-white/60 rounded-full hover:border-white/90 hover:bg-white/10 backdrop-blur-sm transition-all duration-300"
            >
              <i className="fas fa-download" /> Download my CV
            </a>
          </div>
          
          {/* Middle - Code Block & Icons */}
          <div className="flex flex-col items-center space-y-6 lg:space-y-8 animate-fade-in-up xl:col-span-1 lg:order-2 xl:order-0 relative">
            <div className="relative">
              {/* Code Block */}
              <div className="bg-gray-900/90 backdrop-blur-xl p-3 md:p-4 lg:p-6 rounded-2xl font-mono text-xs md:text-sm shadow-2xl border border-purple-500/30 w-full max-w-xs md:max-w-sm lg:max-w-md card-hover mx-auto relative">
                <div className="flex items-center space-x-2 mb-3 lg:mb-4 pb-2 lg:pb-3 border-b border-gray-700">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  <span className="text-gray-400 text-xs ml-2">developer.js</span>
                </div>
                <div className="text-purple-400 text-xs md:text-sm">const <span className="text-blue-400">developer</span> = {'{'}</div>
                <div className="ml-3 md:ml-4 text-gray-300 text-xs md:text-sm">name: <span className="text-green-400">"Saketh Pabbu"</span>,</div>
                <div className="ml-3 md:ml-4 text-gray-300 text-xs md:text-sm">passion: <span className="text-green-400">"Full-Stack Dev"</span>,</div>
                <div className="ml-3 md:ml-4 text-gray-300 text-xs md:text-sm">skills: [</div>
                <div className="ml-6 md:ml-8 text-yellow-400 text-xs md:text-sm">"React", "Java", "Python", "Express"</div>
                <div className="ml-3 md:ml-4 text-gray-300 text-xs md:text-sm">],</div>
                <div className="ml-3 md:ml-4 text-gray-300 text-xs md:text-sm">status: <span className="text-green-400">"Available"</span></div>
                <div className="text-purple-400 text-xs md:text-sm">{'}'};</div>
              </div>
              {/* Revolving icons in circular orbit */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="orbit-container">
                  <div className="orbit-icon orbit-icon-1">
                    <i className="fas fa-laptop-code text-purple-300 text-2xl md:text-3xl drop-shadow-lg"></i>
                  </div>
                  <div className="orbit-icon orbit-icon-2">
                    <i className="fas fa-rocket text-pink-300 text-2xl md:text-3xl drop-shadow-lg"></i>
                  </div>
                  <div className="orbit-icon orbit-icon-3">
                    <i className="fas fa-bolt text-yellow-300 text-2xl md:text-3xl drop-shadow-lg"></i>
                  </div>
                  <div className="orbit-icon orbit-icon-4">
                    <i className="fas fa-bullseye text-green-300 text-2xl md:text-3xl drop-shadow-lg"></i>
                  </div>
                  <div className="orbit-icon orbit-icon-5">
                    <i className="fas fa-star text-blue-300 text-2xl md:text-3xl drop-shadow-lg"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right - Profile Photo */}
          <div className="flex justify-center lg:justify-end animate-fade-in-right xl:col-span-1">
            <div className="relative group">
              <div className="absolute -inset-1 bg-linear-to-r from-purple-400 via-pink-500 to-yellow-400 rounded-full blur-lg opacity-70 group-hover:opacity-100 transition-opacity duration-500 animate-pulse-glow"></div>
              <img 
                className="relative w-48 h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 xl:w-72 xl:h-72 rounded-full object-cover shadow-2xl border-4 border-white/20 group-hover:border-white/40 transition-all duration-500 group-hover:scale-105" 
                src="/images/image.png" 
                alt="Saketh Pabbu" 
              />
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <button 
            onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}
            className="text-white/60 hover:text-white transition-colors"
          >
            <i className="fas fa-chevron-down text-2xl"></i>
          </button>
        </div>
      </div>
    </section>
  );
}

export default Intro;
