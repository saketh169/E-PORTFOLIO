import React from "react";
import { HashRouter } from "react-router-dom";
import Nav from "./components/Nav";
import Intro from "./pages/Intro";
import About from "./pages/About";
import Education from "./pages/Education";
import Skills from "./pages/Skills";
import Achievements from "./pages/Achievements";
import Experience from "./pages/Experience";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <HashRouter>
      <Nav />
      <Intro />
      <About />
      <Education />
      <Skills />
      <Experience />
      <Achievements />
      <Contact />
      <Footer />
    </HashRouter>
  );
}

export default App;
