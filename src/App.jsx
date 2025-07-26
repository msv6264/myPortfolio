import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Skills from "./pages/Skills.jsx";
import Socials from "./pages/Socials.jsx";
import "./index.css";
import Projects from "./pages/Projects.jsx";
import Experience from "./pages/Experience.jsx";
import UnderProgress from "./pages/UnderProgress.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/socials" element={<Socials />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/resume-genie" element={<UnderProgress />} />
      </Routes>
    </Router>
  );
}

export default App;
