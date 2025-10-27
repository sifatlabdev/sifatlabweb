import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Header } from "./components/Header";
import { About } from "./components/About";
import { Teaching } from "./components/Teaching";
import { Team } from "./components/Team";
import { Lab } from "./components/Lab";
import { Research } from "./components/Research";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <Router>
    <div className="min-h-screen bg-background min-h-screen flex flex-col">
      <Header/>
      <main className='flex-1'>
      <Routes>
        <Route path="/" element={<Lab />} />
        <Route path="/about" element={<About />} />
        <Route path="/teaching" element={<Teaching />} />
        <Route path="/team" element={<Team />} />
        <Route path="/research" element={<Research />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      </main>
      <Footer />
    </div>
    </Router>
  );
}