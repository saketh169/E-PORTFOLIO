
import { HashRouter } from "react-router-dom";
import Header from "./components/Header";
import Intro from "./pages/Intro";
import About from "./pages/About";
import Experience from "./pages/Experience";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import Education from "./pages/Education";
import Achievements from "./pages/Achievements";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <HashRouter>
      <Header />
      <Intro />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Education />
      <Achievements />
      <Contact />
      <Footer />
    </HashRouter>
  );
}

export default App;
