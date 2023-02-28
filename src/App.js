import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Contact from "./pages/contact";
import About from "./pages/about";
import Skills from "./pages/skills";
import Resume from "./pages/resume";
import Navbar from "./components/navbar";

function App() {
  return (
    <div className="App">
      {/* particle.js */}

      {/* navbar.js */}
    <Navbar/>
      {/* main page */}
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
    </div>
  );
}

export default App;
