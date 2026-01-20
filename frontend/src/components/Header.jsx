import { useState, useEffect } from 'react';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('intro');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Detect active section
      const sections = ['intro', 'about', 'education', 'skills', 'experience', 'achievements', 'samples', 'contact'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const navItems = [
    { id: 'intro', label: 'Home', icon: 'fas fa-home' },
    { id: 'about', label: 'Personal', icon: 'fas fa-user' },
    { id: 'education', label: 'Education', icon: 'fas fa-graduation-cap' },
    { id: 'skills', label: 'Skills', icon: 'fas fa-lightbulb' },
    { id: 'experience', label: 'Experience', icon: 'fas fa-briefcase' },
    { id: 'achievements', label: 'Achievements', icon: 'fas fa-trophy' },
    { id: 'samples', label: 'Projects', icon: 'fas fa-project-diagram' },
    { id: 'contact', label: 'Contact', icon: 'fas fa-envelope' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 border-b border-white/40 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-lg shadow-lg shadow-purple-500/10 border-purple-300/70' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <button 
            onClick={() => scrollToSection('intro')}
            className={`text-2xl font-bold transition-colors duration-300 ${
              isScrolled ? 'text-purple-600' : 'text-white'
            }`}
          >
            <span className="bg-linear-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
              &lt;Saketh /&gt;
            </span>
          </button>
          
          <div className="hidden md:block">
            <ul className="flex space-x-1">
              {navItems.map((item) => (
                <li key={item.id}>
                  <button 
                    onClick={() => scrollToSection(item.id)} 
                    className={`relative px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                      activeSection === item.id
                        ? 'text-purple-600 bg-purple-100'
                        : isScrolled 
                          ? 'text-gray-700 hover:text-purple-600 hover:bg-purple-50' 
                          : 'text-white/90 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    {item.label}
                    {activeSection === item.id && (
                      <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-purple-600 rounded-full"></span>
                    )}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="md:hidden">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)} 
              className={`p-2 rounded-lg transition-colors ${
                isScrolled ? 'text-gray-700 hover:bg-purple-50' : 'text-white hover:bg-white/10'
              }`}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        <div className={`md:hidden overflow-hidden transition-all duration-300 ${
          isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="bg-white/95 backdrop-blur-lg rounded-2xl shadow-xl my-2 p-4">
            <ul className="space-y-1">
              {navItems.map((item) => (
                <li key={item.id}>
                  <button 
                    onClick={() => scrollToSection(item.id)} 
                    className={`flex items-center w-full px-4 py-3 rounded-xl font-medium transition-all duration-300 ${
                      activeSection === item.id
                        ? 'text-purple-600 bg-purple-100'
                        : 'text-gray-700 hover:text-purple-600 hover:bg-purple-50'
                    }`}
                  >
                    <i className={`${item.icon} mr-3 text-lg`}></i>
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;