import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Teaching } from "./components/Teaching";
import { Team } from "./components/Team";
import { ChenLab } from "./components/ChenLab";
import { Research } from "./components/Research";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <Router>
    <div className="min-h-screen bg-background min-h-full">
      <Header />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<About />} />
        <Route path="/teaching" element={<Teaching />} />
        <Route path="/team" element={<Team />} />
        <Route path="/lab" element={<ChenLab />} />
        <Route path="/research" element={<Research />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
    </Router>
  );
}