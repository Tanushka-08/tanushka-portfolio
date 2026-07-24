import { useState, useEffect } from "react";
import "./styles/globals.css";
import Navbar          from "./components/Navbar";
import Hero            from "./components/Hero";
import About           from "./components/About";
import Skills          from "./components/Skills";
import Projects        from "./components/Projects";
import Certifications  from "./components/Certifications";
import CertificatesGallery from "./components/CertificatesGallery";
import Achievements    from "./components/Achievements";
import Contact         from "./components/Contact";
import Footer          from "./components/Footer";

export default function App() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const saved = localStorage.getItem("tb-theme") || "light";
    setTheme(saved);
    document.documentElement.setAttribute("data-theme", saved);
  }, []);

  const toggleTheme = () => {
    const next = theme === "light" ? "dark" : "light";
    setTheme(next);
    document.documentElement.setAttribute("data-theme", next);
    localStorage.setItem("tb-theme", next);
  };

  return (
    <div className="app">
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Certifications />
        <CertificatesGallery />
        <Achievements />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
