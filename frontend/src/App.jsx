import React from "react";
import { HashRouter } from "react-router-dom";
import Header from "./components/Header";
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
      <Header />
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
