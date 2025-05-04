import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home.jsx';
import About from './components/About.jsx';
import Skills from './components/Skills.jsx';
import Socials from './components/Socials.jsx';
import './index.css';
import Projects from './components/Projects.jsx';
import Experience from './components/Experience.jsx';

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
      </Routes>
    </Router>
  );
}

export default App;